import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

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
      catId: 1,
      category: "Programming"
    },
    {
      id: 5,
      title: "ux Design",
      instructor: "Sara",
      price: 170,
      seats: 7,
      image: "images/course3.jpg",
      catId: 2,
      category: "Design"
    }
  ];

 
  getCourseByID(courseID: number): Course | undefined {
    return this.courses.find(c => c.id === courseID);
  }
  getCoursesByCatID(catID: number) {
  if (catID == 0) {
    return this.courses;
  }

  return this.courses.filter(c => c.catId == catID);
}

}
