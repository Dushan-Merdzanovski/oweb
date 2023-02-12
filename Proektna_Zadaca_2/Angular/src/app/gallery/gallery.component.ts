import { Component, Input, Output } from '@angular/core';
import { GALLERY_CONTENT_ELEMENTS, GALLERY_INTRO_TEXT, HOME_CONTENT_ELEMENTS } from 'src/db-data';
import { home_content_elements } from '../model/model_contentelements';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css',
    '../../assets/css/bootstrap.min.css']
})
export class GalleryComponent {
  numberofclicks_ofaddPostbutton: number = 0;
  status_ofaddPostbutton: boolean = true;
  constructor() { }
  ngOnInit() { }

  intro_block_gallery = GALLERY_INTRO_TEXT[0];
  card_content_gallery = GALLERY_CONTENT_ELEMENTS;

  addPost() {
    this.numberofclicks_ofaddPostbutton++;
    if (this.numberofclicks_ofaddPostbutton == 2) {
      this.status_ofaddPostbutton = false;
    }
  }
}
