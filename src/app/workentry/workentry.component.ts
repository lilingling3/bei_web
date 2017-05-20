import {Component, Inject, forwardRef, OnInit, AfterViewInit } from '@angular/core';
import {USER,User} from  '../models/User';
import { commonsInstances } from '../models/Acommons';
@Component({
  selector: 'app-workentry',
  templateUrl: './workentry.component.html',
  styleUrls: ['./workentry.component.css']
})
export class WorkentryComponent implements OnInit   {

  constructor( private commonsInstances : commonsInstances) { }

  ngOnInit() {

  }


  public logout(){
    console.log("loguot!!!!!!!!!!!!!!!");
  }
}
