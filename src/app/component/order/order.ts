import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from '../../services/categories';
import { CoursesComponent } from '../courses/courses';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule, CoursesComponent],
  templateUrl: './order.html'
})
export class OrderComponent implements OnInit {

  categories: any[] = [];
  selectedCategoryId: number = 0;

  constructor(private categoryService: CategoriesService) {}

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data as any[];
    });
  }

  onCourseRegistered(course: any) {
    console.log('Registered:', course);
  }
}