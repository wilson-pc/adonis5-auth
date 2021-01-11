import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import LoginValidator from "App/Validators/LoginValidator";

import UserValidator from "App/Validators/UserValidator";

export default class UsersController {
  public async index({ view, request, auth }: HttpContextContract) {
    const users = await User.all();

    return view.render("users/index", {
      users,
      country: request.country
        ? `Your country is ${request.country}`
        : "Unable to detect country",
    });
  }

  public async create({ view }: HttpContextContract) {
    return view.render("users/create");
  }
  public async signup({ view }: HttpContextContract) {
    return view.render("signup");
  }

  public async signout({ auth, response, session }: HttpContextContract) {
    await auth.logout();
    console.log("salio de la app");
    session.clear();
    response.redirect("/users");
  }
  public async login({
    view,
    request,
    auth,
    response,
    session,
  }: HttpContextContract) {
    const login = await request.validate(LoginValidator);
    const rememberUser = !!request.input("remember_me");

    await auth.attempt(login.email, login.password, rememberUser);
    const user = await auth.authenticate();
    session.put("user", user);
    response.redirect("/users");

    // return view.render("signup");
  }

  public async store({ request, session, response }: HttpContextContract) {
    const userInput = await request.validate(UserValidator);

    const user = new User();
    user.name = userInput.name;
    user.email = userInput.email;
    user.password = userInput.password;
    await user.save();
    session.flash("success", "usuario creado conexito");
    response.redirect("back");
  }

  public async show({ view }: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
