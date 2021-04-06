import {Component, Input, OnInit} from '@angular/core';
import {StudentService} from "../service/student.service";
import {Student} from "../model/student.class";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList:Student[] = [];
  title:string = "Student List";
  isDisable:boolean = false;
  private _studentName:string;

  constructor(private _studentService:StudentService) { }

  ngOnInit(): void {
    this.studentList = this._studentService.studentList;
  }

  removeStudent(index:number){
    this.studentList.splice(index,1);
  }


  get studentName(): string {
    return this._studentName;
  }

  @Input()
  set studentName(value: string) {
    this._studentName = value;
    console.log("da qua cp con: "+value);

    if(this.studentName){
      this.studentList = this._studentService.studentList.filter(item => {
        return item.name.includes(this.studentName);
      })
    } else {
      this.studentList = this._studentService.studentList;
    }
  }
}
