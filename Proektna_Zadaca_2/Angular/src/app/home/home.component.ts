import { Component } from '@angular/core';
import { HOME_CONTENT_ELEMENTS } from 'src/db-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  content_blocks = HOME_CONTENT_ELEMENTS;
}
