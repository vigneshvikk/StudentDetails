import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent  implements OnInit{
  constructor(private ds:DataService,private router:ActivatedRoute){

  }

  singlestudent:any
ngOnInit(): void {
  this.ds.getStudentById(this.router.snapshot.params['id']).subscribe((result:any)=>{
   this.singlestudent=result 

   
    
  })
}
}
