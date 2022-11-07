import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-customers></app-customers>
  `

})
export class AppComponent implements OnInit {
  
  title:string = "";
  constructor() {}
  ngOnInit(): void {
    this.title = "hello world this is data binding";
  }
}
