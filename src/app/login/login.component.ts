import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{



  
  
  constructor(private fb:FormBuilder,private router:Router,private http:HttpClient){

  }
  loginForm!:FormGroup
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:[''],
      password:['']
     })
  }
  
  login(){
    
    
    this.http.get<any>("http://localhost:3001/admin").subscribe(res=>{
      const user=res.find((a:any)=>{
   return a.email === this.loginForm.value.email  && a.password === this.loginForm.value.password
  })
  
  if(user){
  console.log(user);
  
    alert('login success')
    this.loginForm.reset();
    this.router.navigateByUrl("signup")
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
  



  
  
