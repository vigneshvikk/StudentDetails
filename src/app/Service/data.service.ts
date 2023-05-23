import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 

  url='http://localhost:3001/StudentDetails'

  constructor(private http:HttpClient) { }


  getAllStudent(){
    return this.http.get(this.url)
  }

  saveStudentData(studentimg:any,fullname:any,email:any,mobile:any,address:any,bloodgroup:any,cls:any,div:any,tutor:any,mark:any,attentance:any){

    const data={studentimg,fullname,email,mobile,address,bloodgroup,cls,div,tutor,mark,attentance}
    return this.http.post(this.url,data)
     
 
   }

   getStudentById(id:any){
    return this.http.get(`${this.url}/${id}`)
  }


  updateStudentData(id:any,data:any){
    return this.http.put(`${this.url}/${id}`,data)
   }


   deleteStudent(id:any){
    return this.http.delete(`${this.url}/${id}`)
   }

  
  

}
