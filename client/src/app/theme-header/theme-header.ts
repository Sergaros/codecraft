export class ThemeHeader {
 public name: string;
 public img: string;
 public title: string;
 public contentList: string[];

 constructor(name: string,
             img: string,
             title: string,
             contentList: string[] = []) {
    this.name = name;
    this.img = img;
    this.title = title;
    this.contentList = contentList;
 }

 /*contentLink(name: string):string{
     return `${this.name}/${name}`;
 }*/
}
