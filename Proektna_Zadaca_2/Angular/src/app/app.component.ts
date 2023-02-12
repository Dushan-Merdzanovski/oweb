import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpart_of_proektna_zadaca_2';
  constructor(){}

  currentpage: string = "0"; // home = 0; gallery = 3; 

  onToolbarClicked(newlocation: string) {
    this.currentpage = newlocation;
  }
}
