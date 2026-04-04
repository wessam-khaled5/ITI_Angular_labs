import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { CoursesService } from '../../services/courses';
import { CategoriesService } from '../../services/categories';
import { Course } from '../../models/course';
import { RouterModule } from '@angular/router';
import { DisableAfterClickDirective } from '../../directives/disable-after-click';
import { Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DiscountPipe, DisableAfterClickDirective],
  
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  categories: any[] = [];
  @Input() selectedCategory: number = 0;


  constructor(
    private courseService: CoursesService,
    private categoryService: CategoriesService
  ) {}

  ngOnInit() {
    this.courses = this.courseService.courses;
    this.categories = this.categoryService.getAllCategories();
  }
register(course: any) {
  if (course.seats > 0) {
    course.seats--;
  }
}
}