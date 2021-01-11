import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class Acl {
  public async handle(
    { request }: HttpContextContract,
    next: () => Promise<void>,
    allowedRoles: string[]
  ) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    console.log(`"${request.url()}" enforces "${allowedRoles}" roles`);
    await next();
  }
}
