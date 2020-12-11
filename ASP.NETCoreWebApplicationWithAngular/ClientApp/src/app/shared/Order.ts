import {User} from "./User";
import {OrdersBooks} from "./OrdersBooks";

export class Order {
  constructor(
    public orderID: number,
    public city: string,
    public street: string,
    public homeNum: number,
    public status: string,
    public user: User,
    public books: OrdersBooks[]
  ) {
  }
}
