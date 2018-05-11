import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import{trigger,state,style,transition,animate}  from '@angular/animations'

//import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  animations:[

    trigger('myanimation',[
      state('smaller',style({
         transform : 'translateX(400px)'
      })),
      state('larger',style({
         transform : 'translateX(50px)'
      })),
      transition('smaller <=> larger',animate('300ms ease-in'))
   ])

  ]

})
export class AppComponent {
  title = 'AD Interactive';
   vm= this;
   emailid;
   passwd;
   formdata;
  constructor(private http:Http){}

  ngOnInit(){

this.formdata=new FormGroup({

  emailid:new FormControl("", Validators.compose([
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
 ])),
  passwd:new FormControl("", this.passwordvalidation)
})
    
  }
  passwordvalidation(formcontrol)
  {
    if(formcontrol.value.length<'; 5'){
      return{"passwd": true};
    }
  }


  onClickSubmit(data){
   this.emailid=data.emailid;
  }

  state="smaller";
  animate(){
    this.state=this.state=='larger'?'smaller':'larger';
  }
}

