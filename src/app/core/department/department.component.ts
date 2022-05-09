import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  temp:Department = new Department(0,"","");
  editedItemId:number = 0  ;
  dept:Department = new Department(1,"os","alex");

  depts:Department[] = [
    new Department(2,"pd","alex"),
    new Department(3,"os","cairo"),
    new Department(4,"mobile","alex")
  ]
  ;
  ndept:Department = new Department(0,"","");

  constructor() { }

  ngOnInit(): void {
  }
  add() {
  this.depts.push(new Department(this.ndept.id,this.ndept.name,this.ndept.location));
  this.ndept.id = 0 ; 
  this.ndept.name = "";
  this.ndept.location = "";
  }

  show_to_edit(item:Department){
    this.temp = new Department(item.id,item.name,item.location);
    this.editedItemId = item.id ; 
  }

  edit(){
    for (let item of this.depts){
      if (item.id == this.editedItemId){
        this.depts[this.depts.indexOf(item)] =new Department(this.temp.id,this.temp.name,this.temp.location) ;
        item =new Department(this.temp.id,this.temp.name,this.temp.location) ;
        this.temp = new Department(0,"","");
        break;
      }
    }

  }

  show(id:number){
    for (let item of this.depts){
      if (item.id == id){
        this.dept = item;
        break;
      }
    }
  }

  delete(id:number){
    for (let item of this.depts){
      if (item.id == id){
        this.depts.splice(this.depts.indexOf(item),1);
        break;
      }
    }
  }

}
