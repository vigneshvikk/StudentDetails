import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../Service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private  fb:FormBuilder, private ds:DataService,private router:ActivatedRoute){
    
    
  }
  
  
  
  message:boolean=false;
  
  
  updateStudent=this.fb.group({
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


  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id']);
    
      this.ds.getStudentById(this.router.snapshot.params['id']).subscribe((result:any)=>{
        console.log(result);
        this.updateStudent=this.fb.group({
      
          studentimg:[result['studentimg'],[Validators.required]],
          fullname:[result['fullname'],[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
          email:[result['email'],[Validators.required,Validators.email]],
          mobile:[result['mobile'],[Validators.required,Validators.pattern('[0-9]{10}')]],
          address:[result['address'],[Validators.required]],
          bloodgroup:[result['bloodgroup'],[Validators.required]],
          cls:[result['cls'],[Validators.required]],
          div:[result['div'],[Validators.required]],
          tutor:[result['tutor'],[Validators.required]],
          mark:[result['mark'],[Validators.required]],
          attentance:[result['attentance'],[Validators.required]]
          
        })
      
      })
    }



    updateData(){
  
     
      
    //  console.log(this.editStudent.value);
     this.ds.updateStudentData(this.router.snapshot.params['id'],this.updateStudent.value).subscribe((result:any)=>{
      console.log(result);
      this.message=true;
      this.updateStudent.reset({})
     })
    }
}
