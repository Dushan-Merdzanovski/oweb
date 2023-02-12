import { Component, Input } from '@angular/core';
import { home_content_elements } from '../model/model_contentelements';

@Component({
  selector: 'app-contentblock',
  templateUrl: './contentblock.component.html',
  styleUrls: ['./contentblock.component.css']
})
export class ContentblockComponent {
  constructor() { }

  ngOnInit() {
  }

  @Input()
  home_block!: home_content_elements;

  set_classes_welcome() {
    if (this.home_block.id == 2) {
      return { 'welcome2': true }
    } else if (this.home_block.id == 3) {
      return { 'welcome3': true }
    } else if (this.home_block.id == 4) {
      return { 'welcometextforgallery': true }
    } else {
      return null;
    }
  }

  set_style_slikimaturaskijanje() {
    if (this.home_block.id == 1) {
      return { 'width': '300px', 'height': '350px', 'border': '3px solid white', 'border-radius': '20%' }
    } else if (this.home_block.id == 3) {
      return { 'width': '300px', 'height': '250px', 'border': '1px solid black', 'border-radius': '20%' }
    } else {
      return null;
    }
  }
}
