export class ThemeHeader {
 public name: string;
 public img: string;
 public title: string;
 public _id: string;
 public contentList: string[];

 constructor(name: string,
             img: string,
             title: string,
             _id: string,
             contentList: string[] = []) {
    this.name = name;
    this.img = img;
    this.title = title;
    this._id = _id;
    this.contentList = contentList;
 }

 /*contentLink(name: string):string{
     return `${this.name}/${name}`;
 }*/
}
