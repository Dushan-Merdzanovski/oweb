import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COURSES } from 'src/db-data';
import { bla_pomosh_za_crs, Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  /* KOD OD VEZBI */
  constructor() { }

  /*   @Input()
    title:string = " "; ILI title!:string; od vezbi*/

  @Input()
  crs!: Course;
  // mozhe i crs:Course = bla_pomosh_za_crs; so pomoshna klasa vo model/course.ts

  @Input()
  indeks!: number; // ili indeks:number = 0;

  // dodadeno ova so eventEmmiter 12jan
  @Output()
  kursdetali = new EventEmitter<Course>();

  ngOnInit() {
  }

  onCrsViewed() {
    console.log("Suzi is cuci and cuci is suzi in course-card component");
    this.kursdetali.emit(this.crs);
  }

  /* klasi() {
    return {'begin':true,'course-card':true};
  } // za site kartichki da bide begin klasata
 */
  /* klasi() {
    return {'begin':this.crs.category == 'BEGINNER','course-card':true};
  } */

  klasi() {
    if (this.crs.category == 'BEGINNER') {
      return { 'begin': true, 'course-card': true }
    } else if (this.crs.category == 'ADVANCED') {
      return { 'advanced': true, 'course-card': true } // advanced klasata gi boi crveno, begin gi boi zeleno
    } else {
      return { 'course-card': true }
    }
  }

  stilovikartichka() {
    if (this.crs.category == 'INTERMEDIATE') {
      return { 'background-image': 'url(' + this.crs.iconUrl + ')' }
    } else {
      return null;
    }
  }

  stilovinaslov() {
    return { 'background-color': 'white', 'font-style': 'italic' }
  }

  /* klasi() {
    if(this.crs.category == 'BEGINNER') {
      return 'course-card begin';
    } else {
      return 'course-card';
    }
  } */
} 
