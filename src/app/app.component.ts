import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data';
  firstname:string="ROOSEWELT";
  lastname:string="KOMMU";
  age:number=21;
  class:string="BTECH";
  smokes:boolean=true;
  gender:string="male";
  attitude:string="not abusive";
  msg:string=""
  changeData(){
    this.msg=this.firstname="nani";
    this.lastname="kommu";
    this.age=20;
    this.class="btech3";
    this.smokes=false;
    this.gender="MALE";
    this.attitude="ABUSIVE"; 
  }
}
