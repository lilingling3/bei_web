import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Component, Inject, forwardRef, OnInit} from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import {USER,User} from  '../models/User';
import { AppService } from '../server/app.service';
import { commonsInstances } from '../models/Acommons';
import AppConstants  from "../models/app.constants";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(
    @Inject(AppService) private appService : AppService,
    @Inject(commonsInstances) private commonsInstances : commonsInstances,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.commonsInstances.vmember();
  }

}
