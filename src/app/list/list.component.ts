import { Component } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private ds:DataService){

  }
  studentData:any
  message:boolean=false;
  ngOnInit(): void {
   
    this.ds.getAllStudent().subscribe((allData)=>{
    console.log(allData ,"studentdetails");
   
   this.studentData=allData;

      
    })
  }
  deteleStudent(studentid:any){
    this.ds.deleteStudent(studentid).subscribe((result)=>{
      console.log(result);
      this.ngOnInit();
      this.message=true

      
    })
    }




}
