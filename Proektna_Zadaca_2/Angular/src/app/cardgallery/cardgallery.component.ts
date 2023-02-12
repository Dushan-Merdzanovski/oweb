import { Component, ComponentRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { CardcommentComponent } from '../cardcomment/cardcomment.component';
import { gallery_content_elements } from '../model/model_contentelements';

@Component({
  selector: 'app-cardgallery',
  templateUrl: './cardgallery.component.html',
  styleUrls: ['./cardgallery.component.css',
    '../../assets/css/bootstrap.min.css']
})
export class CardgalleryComponent {
  constructor() { }
  ngOnInit() {
  }

  IDkeys: number = 0;
  like_count: number = 0;
  comment_count: number = 0;

  @Input()
  gallery_block!: gallery_content_elements;

  @ViewChild("commentsection", { read: ViewContainerRef }) vcr!: ViewContainerRef;
  ref!: ComponentRef<CardcommentComponent>

  addChild(name_text: string, comment_text: string) {
    //const inputname = document.getElementsByClassName("commentsinput1")[0] as HTMLTextAreaElement | null;
    // name_text = inputname?.value;
    //const inputcomment = document.getElementsByClassName("commentsinput2")[0] as HTMLTextAreaElement | null;
    // comment_text = inputcomment?.value;

    this.ref = this.vcr.createComponent(CardcommentComponent)
    this.ref.instance.name = name_text;
    this.ref.instance.comment_text = comment_text;
    this.comment_count++;
  }

  /* removeChild() {
    this.comment_count--;
    const index = this.vcr.indexOf(this.ref.hostView)
    if (index != -1)
      this.vcr.remove(index)
  } */

  addLike() {
    this.like_count++;
  }
}
