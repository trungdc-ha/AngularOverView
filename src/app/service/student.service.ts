import { Injectable } from '@angular/core';
import {Student} from "../model/student.class";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _studentList: Student[] = [
    new Student("Nguyen Van A", "DN", 1),
    new Student("Nguyen Van B", "HCM", 0),
    new Student("Nguyen Van C", "HN", 2),
  ];

  constructor() { }


  get studentList(): Student[] {
    return this._studentList;
  }

  set studentList(value: Student[]) {
    this._studentList = value;
  }
}
