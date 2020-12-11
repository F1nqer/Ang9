import {User} from "./User";

export class Book {
  constructor(
    public bookID?: number,
  public name?: string,
  public author?: string,
  public description?: string,
  public price?: number,
  public count?: number,
  public userId?: number,
  public user?: User
  ) {
  }
}
