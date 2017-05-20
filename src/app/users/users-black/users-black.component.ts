import { Component, OnInit } from '@angular/core';
import { commonsInstances } from 'app/models/Acommons';
@Component({
  selector: 'app-users-black',
  templateUrl: './users-black.component.html',
  styleUrls: ['./users-black.component.css']
})
export class UsersBlackComponent implements OnInit {

  constructor( private commonsInstances : commonsInstances) { }

  ngOnInit() {
    this.commonsInstances.vmember()
  }

}
