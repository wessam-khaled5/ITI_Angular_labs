import { Component } from '@angular/core';
import { CoursesService } from '../../services/courses';
import { CategoriesService } from '../../services/categories';
import { Router } from '@angular/router';

export class InsertCourseComponent {

  course: any = {
    title: '',
    price: 0,
    catId: 0
  };

  categories: any[] = [];

  constructor(
    private courseService: CoursesService,
    private categoryService: CategoriesService,
    private router: Router
  ) {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data as any[];
    });
  }

  addCourse() {
    this.courseService.addCourse(this.course).subscribe(() => {
      this.router.navigate(['/order']);
    });
  }
}