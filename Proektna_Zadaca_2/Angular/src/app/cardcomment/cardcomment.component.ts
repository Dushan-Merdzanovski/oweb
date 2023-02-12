import { Component, Input } from '@angular/core';
import { CardgalleryComponent } from '../cardgallery/cardgallery.component';

@Component({
  selector: 'app-cardcomment',
  templateUrl: './cardcomment.component.html',
  styleUrls: ['./cardcomment.component.css']
})
export class CardcommentComponent {
/*   public unique_key!: number;
  public parentRef!: CardgalleryComponent; */

  @Input()
  name: string = "anonymous";

  @Input()
  comment_text!: string;

  constructor() {
  }

  ngOnInit() {
    if (this.name === "") {
      this.name = "anonymous";
    }
  }

  /* remove_me() {
    console.log(this.unique_key)
    this.parentRef.remove(this.unique_key)
  } */
}
