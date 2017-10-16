import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  title: string = "Curriculum vitae";
  content: string = "<p>some information1</p><p>some information2</p><ul><li>one</li><li>two</li></ul>";
  
  constructor() {}

  ngOnInit() {
  }

}
