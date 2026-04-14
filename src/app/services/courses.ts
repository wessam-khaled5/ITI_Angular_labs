import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {}

  getAllCourses() {
    return this.http.get(`${environment.apiURL}/courses`);
  }

  getCoursesByCatID(catID: number) {
    if (catID == 0) {
      return this.getAllCourses();
    }

    return this.http.get(`${environment.apiURL}/courses?catId=${catID}`);
  }

  addCourse(course: any) {
    return this.http.post(`${environment.apiURL}/courses`, course);
  }
}