import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layer-demo',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
    // layui.use(['layer', 'form'], function(){

    // var layer = layui.layer
    //    ,form = layui.form();

    // layer.msg('Hello World');

    // })
    layui.use(['form', 'layedit', 'laydate','laypage', 'layer','upload'], function(){
      var form = layui.form()
      ,layer = layui.layer
      ,layedit = layui.layedit
      ,laydate = layui.laydate;
      var laypage = layui.laypage;
    form.render(); //更新全部
    form.render('select'); //刷新select选择框渲染
    //监听提交
    form.on('submit(formDemo)', function(data){
      console.log(data);
      layer.msg(JSON.stringify(data.field));
      return false;
    });

    //  laypage({
    //   cont: 'demo7'
    //   ,pages: 100
    //   ,skin: '#1E9FFF'
    // });

     laypage({
        cont: 'demo7'
        ,pages: 100
        ,skip:true,
        skin: '#1E9FFF'
    });

    layui.upload({
    url: '/test/upload.json',// 上传接口
    ext: 'jpg|png|gif' // 支持格式
    ,elem: '#test' //指定原始元素，默认直接查找class="layui-upload-file"
    ,method: 'get', //上传接口的http类型
    before: function(input){
    //返回的参数item，即为当前的input DOM对象
      console.log('文件上传中');
  }
  ,success: function(res){
      console.log('上传完毕');
    //  LAY_demo_upload.src = res.url;
  }



  });

  })




}
  alert() {
    // layer.alert('信息弹框');
  //  layer.open({
  //     type: 1,
  //     offset: '100px', //具体配置参考：offset参数项
  //     content: '<div style="padding: 20px 80px;">内容</div>',
  //     btn: '关闭全部',
  //     // btnAlign: 'c' , //按钮居中
  //     shade: 0, //不显示遮罩
  //     yes: function(){
  //       layer.closeAll();
  //     }
  // });

    layer.open({
      // 默认居中
      type:0,
      // 0 表示 信息
      // 1 表示 页面
      // 2 表示 iframe 层
      // 3 表示 loading 层
      // 4 表示 tip 层
      title: '在线调试'
      ,content: '可以填写任意的layer代码'
  });

  }
  confirm() {
    layer.confirm('钟钟很帅？', {
      btn: ['是的', '不是']
    }, () => {
      layer.msg('你说的是实话。')
    }, () => {
      layer.msg('请说实话', {
        time: 2000,
        btn: ['明白了', '不明白']
      })
    })
  }
  msg() {
    layer.msg('信息提示');
  }
  load(){
    //eg1 默认风格
    // var index = layer.load();
    //eg2 换种风格
    // var index = layer.load(1); //换了种风格
    //eg3  1000秒后 关闭
    var index = layer.load(2, {time: 1000}); //又换了种风格，并且设定最长等待10秒
    //关闭
    // layer.close(index);
  }
}
