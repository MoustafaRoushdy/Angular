import { Component } from "@angular/core";



@Component({
    selector:"app-student",
    templateUrl:"./student.component.html",
    styleUrls:["./student.component.css"]
})

export class StudentComponent{
    stdId:number = 0 ; 
    stdAge:number = 0 ; 
    stdName:string = ""; 
    stdDeptNo:number = 0 ; 
    
}