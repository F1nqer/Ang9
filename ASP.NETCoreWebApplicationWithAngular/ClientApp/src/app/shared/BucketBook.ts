import {User} from "./User";

export class BucketBook {
  constructor(

    public bucketBookId?: number,
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
