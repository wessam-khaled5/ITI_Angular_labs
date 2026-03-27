import { Component } from '@angular/core';
import { CoursesComponent } from './component/courses/courses';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoursesComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}