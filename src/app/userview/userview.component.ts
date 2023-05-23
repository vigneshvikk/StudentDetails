import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../Service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {


  constructor(private fb:FormBuilder,private ps:DataService,private router:ActivatedRoute,private http:HttpClient,private rt:Router){}
  studentData:any
  ngOnInit(): void {
    
    this.ps.getAllStudent().subscribe((allData:any)=>{
      console.log(allData ,"studentdetails");
     
     this.studentData=allData;
    })



}


}