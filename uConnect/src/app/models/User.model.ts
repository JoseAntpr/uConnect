export class User {
  public connection: string;
  public _id: string;
  public name: string;

  constructor(data?) {
    this.connection = data && data.connection || null;
    this._id = data && data.connection && data.user._id || data._id;
    this.name = data && data.connection && data.user.name || data.name;
  }
}
