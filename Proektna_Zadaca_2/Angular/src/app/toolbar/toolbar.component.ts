import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor() {
  }
  ngOnInit() {
  }

  currentlocation: string = "Home";

  newpage!: string;

  @Output()
  load_newpage = new EventEmitter<string>();

  clickedOnNavBar(newlocation: string) {
    if (newlocation === "0") {
      this.currentlocation = "Home";
    } else if (newlocation === "3") {
      this.currentlocation = "Gallery";
    } else {
      this.currentlocation = "Home";
    }
    this.newpage = newlocation;
    this.load_newpage.emit(this.newpage);
  }
}
