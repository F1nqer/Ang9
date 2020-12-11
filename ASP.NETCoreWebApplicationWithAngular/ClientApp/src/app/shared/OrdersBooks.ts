import {User} from "./User";
import {Book} from "./Book";
import {Order} from "./Order";

export class OrdersBooks {
  constructor(
    public ordersBooksID?: number,
    public orderID?: number,
    public order?: Order,
    public bookId?: number,
    public book?: Book
  ) {
  }
  }
