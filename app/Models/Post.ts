import { DateTime } from "luxon";
import { v4 as uuid } from "uuid";
import { BaseModel, beforeCreate, column } from "@ioc:Adonis/Lucid/Orm";

export default class Post extends BaseModel {
  public static selfAssignPrimaryKey = true;
  @column({ isPrimary: true })
  public id: string;

  @column()
  public name: string;
  @column()
  public marca: string;
  @column()
  public price: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeCreate()
  public static assignUuid(post: Post) {
    post.id = uuid();
  }
}
