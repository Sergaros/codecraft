export class Article {
 public name: string;
 public body: string;
 public _id: string;

 constructor(name: string,
             body: string,
             _id: string) {
    this.name = name;
    this.body = body;
    this._id = _id;
 }
}
