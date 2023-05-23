import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

   
  constructor(private fb:FormBuilder,private router:Router,private http:HttpClient){

  }
  loginStudentForm!:FormGroup
  ngOnInit(): void {
    this.loginStudentForm=this.fb.group({
      email:[''],
      password:['']
     })
  }
  
  loginStudent(){
    
    
    this.http.get<any>("http://localhost:3001/Student").subscribe(res=>{
    const user=res.find((a:any)=>{
   return a.email === this.loginStudentForm.value.email  && a.password === this.loginStudentForm.value.password
  })
  
  if(user){

  localStorage.setItem('currentMail',user.email)
    alert('login success')
    this.loginStudentForm.reset();
    this.router.navigateByUrl("userview")
  }
  else{
  
  
    
    alert('user not find')
  }
    },err=>{
      alert('something went wrong')
    }
    )
  }
  

}
