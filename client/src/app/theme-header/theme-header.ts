export class ThemeHeader {
 public href: string;
 public img: string;
 public title: string;
 public contentList: string[];

 constructor(href: string,
             img: string,
             title: string,
             contentList: string[] = []) {
    this.href = href;
    this.img = img;
    this.title = title;
    this.contentList = contentList;
 }

 contentLink(name: string):string{
     return `${this.href}/${name}`;
 }
}
