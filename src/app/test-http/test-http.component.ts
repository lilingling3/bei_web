import { Component, OnInit } from '@angular/core';
import { TestHttpService } from './test-http.service';
import { HttpService } from '../server/common.service';
@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent implements OnInit {

  constructor(
    private testHttpService:TestHttpService,
    private httpService:HttpService,
  ) { }

  ngOnInit() {
     var obj= {'name':'小军',age:23};

     console.log(this.testHttpService.testToBodyString(obj));//name=%E5%B0%8F%E5%86%9B&age=23

     console.log(this.testHttpService.testToQueryString(obj));//?name=%E5%B0%8F%E5%86%9B&age=23

     this.httpService.get('http://t.api.jiaab.com/company')
        .then(res => {
          console.log(res);
          res;
        })
  }


}
