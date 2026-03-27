import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Course } from '../../models/course';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class CoursesComponent {

  selectedCategory: string = "All";

  courses: Course[] = [
    {
      id: 1,
      title: "Angular",
      instructor: "Mona",
      price: 100,
      seats: 3,
      image: "images/Rxjs_Angular_book.png",
      catId: 1,
      category: "Programming"
    },
    {
      id: 2,
      title: "UI Design",
      instructor: "Yassmen",
      price: 80,
      seats: 0,
      image: "images/course3.jpg",
      catId: 2,
      category: "Design"
    },
    {
      id: 3,
      title: "Marketing",
      instructor: "Sara",
      price: 70,
      seats: 2,
      image: "images/course4.jpg",
      catId: 3,
      category: "Marketing"
    },
    {
      id: 4,
      title: "intro to Programming",
      instructor: "Ahmed",
      price: 30,
      seats: 4,
      image: "images/course2_.jpg",
      catId: 3,
      category: "Programming"
    },
    {
      id: 5,
      title: "ux Design",
      instructor: "Sara",
      price: 170,
      seats: 7,
      image: "images/course3.jpg",
      catId: 3,
      category: "Design"
    }
  ];

  register(course: Course) {
    if (course.seats > 0) {
      course.seats--;
    }
  }
}