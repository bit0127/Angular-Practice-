import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-rcomponent',
  templateUrl: './rcomponent.component.html',
  styleUrls: ['./rcomponent.component.css']
})
export class RcomponentComponent implements OnInit {

  todaysDate;
  constructor( private myService: MyServiceService) { }

  ngOnInit() {
    this.todaysDate= this.myService.showTodayDate();
  }

}
