import { Component, OnInit,ElementRef } from '@angular/core';
import 'ztree';
declare var $: any;

@Component({
  selector: 'app-ztree-demo',
  templateUrl: './z-tree.component.html',
  styleUrls: ['./z-tree.component.css']
})
export class ZtreeDemoComponent implements OnInit {
  private  log:any = 'dark';
  private  className :string ="dark";
  private  newCount = 1;
  private  setting = {
      view: {
        addHoverDom: this.addHoverDom,
        removeHoverDom: this.removeHoverDom,
        selectedMulti: false
      },
    check: {
        //enable: true
      },
      data: {
        simpleData: {
          enable: true
        }
      },
      edit: {
        enable: true, //单独设置为true时，可加载修改、删除图标
        editNameSelectAll: true
        // showRemoveBtn: showRemoveBtn,
        // showRenameBtn: showRenameBtn
      },
    callback: {
      beforeEditName: this.beforeEditName,
      beforeRemove: this.beforeRemove,
      beforeRename: this.beforeRename,
      onRemove: this.onRemove,
      onRename: this.onRename,
      onClick: this.zTreeOnClick
    }
  };

 zNodes =[
  { id:1, pId:0, name:"父节点1", open:true},
  { id:11, pId:1, name:"父节点11"},
  { id:111, pId:11, name:"叶子节点111"},
  { id:112, pId:11, name:"叶子节点112"},
  { id:113, pId:11, name:"叶子节点113"},
  { id:114, pId:11, name:"叶子节点114"},
  { id:12, pId:1, name:"父节点12"},
  { id:121, pId:12, name:"叶子节点121"},
  { id:122, pId:12, name:"叶子节点122"},
  { id:123, pId:12, name:"叶子节点123"},
  { id:124, pId:12, name:"叶子节点124"},
  { id:13, pId:1, name:"父节点13", isParent:true},
  { id:2, pId:0, name:"父节点2"},
  { id:21, pId:2, name:"父节点21", open:true},
  { id:211, pId:21, name:"叶子节点211"},
  { id:212, pId:21, name:"叶子节点212"},
  { id:213, pId:21, name:"叶子节点213"},
  { id:214, pId:21, name:"叶子节点214"},
  { id:22, pId:2, name:"父节点22"},
  { id:221, pId:22, name:"叶子节点221"},
  { id:222, pId:22, name:"叶子节点222"},
  { id:223, pId:22, name:"叶子节点223"},
  { id:224, pId:22, name:"叶子节点224"},
  { id:23, pId:2, name:"父节点23"},
  { id:231, pId:23, name:"叶子节点231"},
  { id:232, pId:23, name:"叶子节点232"},
  { id:233, pId:23, name:"叶子节点233"},
  { id:234, pId:23, name:"叶子节点234"},
  { id:3, pId:0, name:"父节点3", isParent:true}
];

  constructor(public el: ElementRef) { }

  ngOnInit() {
    $.fn.zTree.init($("#ztree"),this.setting,this.zNodes);
    var treeObj = $.fn.zTree.getZTreeObj("ztree");
    console.log(treeObj);
  }

  // 利用时间戳 生成唯一
  getTime (){
  var now= new Date(),
    h=now.getHours(),
    m=now.getMinutes(),
    s=now.getSeconds(),
    ms=now.getMilliseconds();
  return (h+":"+m+":"+s+ " " +ms);
}

 addHoverDom(treeId, treeNode) {
  var sObj = $("#" + treeNode.tId + "_span"); //获取节点信息
  if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;

  var addStr = "<span class='button add' id='addBtn_" + treeNode.tId + "' title='add node' onfocus='this.blur();'></span>"; //定义添加按钮
  sObj.after(addStr); //加载添加按钮
  var btn = $("#addBtn_"+treeNode.tId);

  //绑定添加事件，并定义添加操作
  if (btn) btn.bind("click", function(){
    var zTree = $.fn.zTree.getZTreeObj("ztree");
    //将新节点添加到数据库中
    var name='NewNode';

    // $.post('./index.php?r=data/addtree&pid='+treeNode.id+'&name='+name,function (data) {
    //   var newID = data; //获取新添加的节点Id
    //   zTree.addNodes(treeNode, {id:newID, pId:treeNode.id, name:name}); //页面上添加节点
    //   var node = zTree.getNodeByParam("id", newID, null); //根据新的id找到新添加的节点
    //   zTree.selectNode(node); //让新添加的节点处于选中状态
    // });

    zTree.addNodes(treeNode, {id:(100 + this.newCount), pId:treeNode.id, name:"new node" + (this.newCount++)});
    return false;
  });
};

  removeHoverDom(treeId, treeNode) {
    $("#addBtn_"+treeNode.tId).unbind().remove();
};

  beforeEditName(){

  }
  beforeRemove(treeId, treeNode){
    var zTree = $.fn.zTree.getZTreeObj("ztree");
    zTree.selectNode(treeNode);
    return confirm("确认删除 节点 -- " + treeNode.name + " 吗？");
  }
  beforeRename(treeId, treeNode, newName, isCancel){
    if (newName.length == 0) {
      alert("节点名称不能为空.");
      return false;
    }
    return true;
  }
  onRemove(e, treeId, treeNode) {
    //需要对删除做判定或者其它操作，在这里写~~
    //$.post('./index.php?r=data/del&id='+treeNode.id);
  }
  onRename(e, treeId, treeNode, isCancel) {
  //需要对名字做判定的，可以来这里写~~
  //$.post('./index.php?r=data/modifyname&id='+treeNode.id+'&name='+treeNode.name);
}
  zTreeOnClick(event, treeId, treeNode) {
      $("#echoActive").text("节点名称："+treeNode.name+"----"+"节点的id值："+treeNode.id);
    };

}
