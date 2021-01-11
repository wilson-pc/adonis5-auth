import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import geoip from "geoip-lite";

export default class DetectUserCountry {
  public async handle(
    { request }: HttpContextContract,
    next: () => Promise<void>
  ) {
    // code for middleware goes here. ABOVE THE NEXT CALL

    const ip = request.ip();

    const country = geoip.lookup(ip);
    request.country = country?.country;
    await next();
  }
}
