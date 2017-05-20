import { Component, OnInit } from '@angular/core';
/*import { ChartsModule } from 'ng2-charts/ng2-charts';
import 'chart.js/dist/Chart.js'*/;


@Component({
  selector: 'app-stations-map',
  templateUrl: './stations-map.component.html',
  styleUrls: ['./stations-map.component.css']
})
export class StationsMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let contstainer=document.getElementById("map")
    console.log(contstainer);
    let map = new AMap.Map(contstainer, {
      resizeEnable: true,
      zoom:11,
      center: [116.397428, 39.90923]
    });

  }

}
