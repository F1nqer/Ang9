import {Book} from "./Book";

export class User {
  constructor(
    public username?: string,
    public type?: number,
    public age?: number,
    public password?: number,
    public info?: string
  ) {
  }
}
