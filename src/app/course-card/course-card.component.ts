import { Component, Input } from '@angular/core';
import {COURSES} from '../../db-data';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input()
  title: String;

}
