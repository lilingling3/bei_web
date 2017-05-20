import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.css']
})
export class StationDetailComponent implements OnInit {

  constructor(
    public activeRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    // 获取当前 参数id
    this.activeRoute.params.subscribe(
      params =>console.log(params['id'])
    );
  }





}
