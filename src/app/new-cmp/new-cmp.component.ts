import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  
  constructor(private http:Http) {
    
   }
  httpdata=1;
  todaysDate=new Date();
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  
  newcomponent = "Entered in new component created";
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
			
 isavailable = true;
  myClickFunction(event)
  {
	  this.isavailable = false;
	alert("Button is clicked")  
	console.log(event)
  }
  changemonths(selectedValue:string)
  {
	  alert(selectedValue)  
  }
  //  jsondataParser(event) {
  //   this.http.get("http://jsonplaceholder.typicode.com/users").
  //   subscribe(function(data){
  //   this.httpdata=data.json();
    
  //   })
  // }
  ngOnInit() {
      
   }

}
