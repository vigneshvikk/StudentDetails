import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../Service/data.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private  fb:FormBuilder, private ps:DataService,private router:Router){
    
    
  }
  
  
  
  message:boolean=false;
  
  
  addStudent=this.fb.group({
    studentimg:['',[Validators.required]],
    fullname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.email]],
    mobile:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    address:['',[Validators.required]],
    bloodgroup:['',[Validators.required]],
    cls:['',[Validators.required]],
    div:['',[Validators.required]],
    tutor:['',[Validators.required]],
    mark:['',[Validators.required]],
    attentance:['',[Validators.required]]


  
    
  })
  
  saveData(){
    var studentimg=this.addStudent.value.studentimg
    var fullname=this.addStudent.value.fullname
    var email=this.addStudent.value.email
    var mobile=this.addStudent.value.mobile
    var address=this.addStudent.value.address
    var bloodgroup=this.addStudent.value.bloodgroup
    var cls=this.addStudent.value.cls
    var div=this.addStudent.value.div
    var tutor=this.addStudent.value.tutor
    var mark=this.addStudent.value.mark
    var attentance=this.addStudent.value.attentance
    
   
    if(this.addStudent.valid){
      this.ps.saveStudentData(studentimg,fullname,email,mobile,address,bloodgroup,cls,div,tutor,mark,attentance).subscribe((result:any)=>{
        console.log('ok');
        this.message=true;
        this.addStudent.reset({})
        

      })
    
  }
  }
}
