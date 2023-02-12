import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { ContentblockComponent } from './contentblock/contentblock.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CardgalleryComponent } from './cardgallery/cardgallery.component';
import { CardcommentComponent } from './cardcomment/cardcomment.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    ContentblockComponent,
    GalleryComponent,
    CardgalleryComponent,
    CardcommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
