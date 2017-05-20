import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { StationService } from '../service/station.service';

@Component({
  selector: 'app-station-manage',
  templateUrl: './station-manage.component.html',
  styleUrls: ['./station-manage.component.css']
})
export class StationManageComponent implements OnInit {
  private stationList;
  public maxSize:number = 5;// 最大页码数量 多余有省略号
  public itemsPerPage:number=5;// 限制一页显示多少个
  public totalItems:number;// 总页数
  public currentPage:number = 1;// 当前页数
  public numPages;

  constructor(
    public stationService : StationService,
    public router:Router,
    public activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getStationsThreeLevel();

    this.activatedRoute.params.subscribe(
      params =>{
        //console.log(params['page']);
        console.log(params);
        // 可以从路由中获取url 参数
        this.getStationList(this.currentPage)
      }
    );

  }

  public getStationList(page:number){
    // 数组是从0 开始
    let offset = (this.currentPage-1)*this.itemsPerPage;
    let end = (this.currentPage)*this.itemsPerPage;

      this.stationService.getRentalStations(page)
        .subscribe(
          res =>{
            const data = res.json();
            if(data.errorCode == 0){
              this.totalItems = data['total'];
              //console.log(this.totalItems);
              this.stationList = data.rentalStations.slice(offset,end>this.totalItems?this.totalItems:end);
              console.log(this.stationList);
            }
        },
          error => {
          console.log(error);
          }
        )
  }

  public getStationsThreeLevel(){
    const $provice = $('#provice');
    const $city = $('#city');
    const $area = $('#area');

      this.stationService.getStationArea()
        .subscribe(
          res => {
            const data = res.json();
            //console.log(data);
            data.forEach(function (provice,proviceIndex) {
             const proviceStr = ' <option value="'+ proviceIndex +'">'+ provice.name +'</option>';
              $provice.append(proviceStr);

              $provice.change(function () {
                  // 获取选择 的市
                  const proviceSlectedIndex = this.value;
                  //console.log("选择的省"+proviceSlectedIndex);
                  // 清空市区选项
                  $city.children('option:not(:first)').remove();
                  $area.children('option:not(:first)').remove();
                  const cityArr = data[proviceSlectedIndex].city;

                  // 循环选中的市
                  cityArr.forEach(function (city,cityIndex) {
                    const cityStr = ' <option value="'+ cityIndex +'">'+ city.name +'</option>';
                    $city.append(cityStr);

                    $city.change(function () {
                      const citySlectedIndex = this.value;

                      $area.children('option:not(:first)').remove();

                      //console.log("选择的市"+citySlectedIndex);
                      const areaArr = data[proviceSlectedIndex].city[citySlectedIndex].area;
                      //console.log(areaArr);
                      areaArr.forEach(function (area,areaIndex) {
                        const areaStr = ' <option value="'+ areaIndex +'">'+ area +'</option>';
                        $area.append(areaStr);
                      });

                    });


                 });






              })

            })






        },
         error =>console.log(error)
        );

    // window.onload = function() {
    //
    //   var oDiv = document.getElementById("div");
    //   var sheng = document.createElement("select");
    //   var shi = document.createElement("select");
    //   var qu = document.createElement("select");
    //   oDiv.appendChild(sheng);
    //   oDiv.appendChild(shi);
    //   oDiv.appendChild(qu);
    //   sheng.options[0] = new Option("请选择省", "-1");
    //   shi.options[0] = new Option("请选择市", "-1");
    //   qu.options[0] = new Option("请选择区", "-1");
    //   //创建省市区完毕
    //   //循环第一步
    //   for (var i = 0; i < city.length; i++) {
    //     sheng.options[sheng.length] = new Option(city[i].name, i);
    //     sheng.onchange = function() {
    //       //恢复默认选项
    //       //shi.options[0].selected = true;
    //       //qu.options[0].selected = true;
    //       //清空市区选项
    //       shi.options.length = 0;
    //       shi.options[shi.length] = new Option("请选择市", "-1");
    //       qu.options.length = 0;
    //       qu.options[qu.length] = new Option("请选择区", "-1");
    //       for (var j = 0; j < city[sheng.selectedIndex - 1].city.length; j++) {
    //         shi.options[shi.length] = new Option(city[sheng.selectedIndex - 1].city[j].name, j);
    //         shi.onchange = function() {
    //           //恢复默认选项
    //           //qu.options[0].selected = true;
    //           //清空区选项
    //           qu.options.length = 0;
    //           qu.options[qu.length] = new Option("请选择区", "-1");
    //           for (var k = 0; k < city[sheng.selectedIndex - 1].city[shi.selectedIndex - 1].area.length; k++) {
    //             qu.options[qu.length] = new Option(city[sheng.selectedIndex - 1].city[shi.selectedIndex - 1].area[k], k);
    //
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  }

  public pageChanged(event:any):void {
    this.router.navigateByUrl("/workentry/stations/manage/page/"+event.page);
  }

}
