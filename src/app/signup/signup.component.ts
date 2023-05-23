import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router){

  }
  signupForm:any
  ngOnInit(): void {
   this.signupForm=this.fb.group({
    fullname:[''],
    mobile:[''],
    email:[''],
    password:['']
   })
  }
  signUp(){
this.http.post("http://localhost:3001/Student",this.signupForm.value).subscribe((result:any)=>{
  alert("signup successfully")
  this.signupForm.reset();
  this.router.navigateByUrl("")

},result=>{
alert("something went wrong")
}
)
  }
}
