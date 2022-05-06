import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses = [1, 2];
  viewMode = 'somethingElse';

  courseObjects = [
    { id: 1, name: 'course 1'},
    { id: 2, name: 'course 2'},
    { id: 3, name: 'course 3'}
  ];

  onAdd() {
    this.courseObjects.push({ id: 4, name: 'course 4'});
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courseObjects.splice(index, 1);
  }

  onChange(course) {
    course.name = 'UPDATED COURSE';
  }
}
