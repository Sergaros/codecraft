export class ThemeHeader {
 public name: string;
 public img: string;
 public title: string;
 public _id: string;
 public ishide: boolean;
 public contentList: string[];

 constructor(name: string,
             img: string,
             title: string,
             _id: string,
             contentList: string[] = [],
             ishide: boolean) {
    this.name = name;
    this.img = img;
    this.title = title;
    this._id = _id;
    this.ishide = ishide;
    this.contentList = contentList;
 }

 /*contentLink(name: string):string{
     return `${this.name}/${name}`;
 }*/
}
