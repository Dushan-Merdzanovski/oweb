import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

/*   KOD OD VEZBI
  ova za statichki
  coreCourse = COURSES[0];
  rxJS = COURSES[1];
  ngRX = COURSES[2]; */

  // ova za so for da raboti dinamichki
  kursevi = COURSES;

  // dodadeno za so event emitterot da raboti
  onAppViewed(kurs:Course) {
    console.log("Clicked cuci in app", kurs); 
  }
}
