import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { CoursesService } from '../../services/courses';
import { RouterModule } from '@angular/router';
import { DisableAfterClickDirective } from '../../directives/disable-after-click';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DiscountPipe, DisableAfterClickDirective],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class CoursesComponent implements OnInit, OnChanges, OnDestroy {

  courses: any[] = [];

  @Input() selectedCategory: number = 0;
  @Output() courseRegistered = new EventEmitter<any>();

  sub!: Subscription;

  constructor(private courseService: CoursesService) {}

 ngOnInit() {
  this.sub = this.courseService.getCoursesByCatID(0)
    .subscribe(data => {
      this.courses = data as any[];
    });
}

  ngOnChanges(changes: SimpleChanges) {
    this.sub = this.courseService.getCoursesByCatID(this.selectedCategory)
      .subscribe(data => {
        this.courses = data as any[];
      });
  }

  register(course: any) {
    if (course.seats > 0) {
      course.seats--;
      this.courseRegistered.emit(course);
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}