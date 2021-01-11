import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Post from "App/Models/Post";

export default class PostsController {
  public async index({}: HttpContextContract) {
    return await Post.all();
  }

  public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    return await Post.create(request.all());
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
