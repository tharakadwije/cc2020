import { Component } from '@angular/core';
import { customizeUtil, MindMapMain } from 'mind-map';
import { Dispositions } from '../model/dipositions';

const HIERARCHY_RULES = {
  ROOT: {
    name: 'XX汽车有限公司',
    backgroundColor: '#7EC6E1',
    getChildren: () => [
      HIERARCHY_RULES.SALES_MANAGER,
      HIERARCHY_RULES.SHOW_ROOM,
      HIERARCHY_RULES.SALES_TEAM
    ]
  },
  SALES_MANAGER: {
    name: '销售经理',
    color: '#fff',
    backgroundColor: '#616161',
    getChildren: () => [
      HIERARCHY_RULES.SHOW_ROOM,
      HIERARCHY_RULES.SALES_TEAM
    ]
  },
  SHOW_ROOM: {
    name: '展厅',
    color: '#fff',
    backgroundColor: '#989898',
    getChildren: () => [
      HIERARCHY_RULES.SALES_TEAM
    ]
  },
  SALES_TEAM: {
    name: '销售小组',
    color: '#fff',
    backgroundColor: '#C6C6C6',
    getChildren: () => []
  }
};

const option = {
  container: 'jsmind_container',
  theme: 'normal',
  editable: false,
  selectable: false,
  canHandleClick:true,
  eventType:'click',
  depth: 4,
  hierarchyRule: HIERARCHY_RULES,
  enableDraggable: false,
};

let usersAndOrg = {
  id: 10,
  color: '#fff',
  topic: 'Users and Organizations',
  direction: 'right',
  selectedType: '销售经理',
  backgroundColor: '#9ff4f7',
  canHandleClick:true,
  children: []
}

let usersAndOrg1_1 = {
  id: 11,
  color: '#fff',
  topic: 'Social Issues and Professional Practice',
  direction: 'right',
  selectedType: '销售经理',
  backgroundColor: '#9ff4f7',
  canHandleClick:true,
  children: []
}

let securityPolicy1_2 = {
  id: 12,
  color: '#fff',
  topic: 'Security Policy and Management',
  direction: 'right',
  selectedType: '销售经理',
  backgroundColor: '#9ff4f7',
  canHandleClick:true,
  children: []
}




const mind = {
  format: 'nodeTree',
  data: {
    id: 1,
    topic: 'Computing',
    selectedType: false,
    canHandleClick:true,
    backgroundColor: '#d3d3d3',
   
    children: [
      {
        id: 10,
        color: '#fff',
        topic: 'Users and Organizations',
        direction: 'right',
        selectedType: '销售经理',
        backgroundColor: '#9ff4f7',
        canHandleClick:true,
        children: []
      },
      {
        id: 30,
        color: '#fff',
        topic: 'Systems Modling',
        direction: 'right',
        selectedType: '销售经理',
        backgroundColor: '#fde5c6',
        children: []
      },
      {
        id: 50,
        color: '#fff',
        topic: 'System Architecture and Infrastructure',
        direction: 'right',
        selectedType: '销售经理',
        backgroundColor: '#a3cc5a'
      },
      {
        id: 70,
        color: '#fff',
        topic: 'Software Development',
        direction: 'right',
        selectedType: '销售经理',
        backgroundColor: '#beb66d',
        children: []
      },
      {
        id: 80,
        color: '#fff',
        topic: 'Software Fundamentals',
        direction: 'right',
        selectedType: '销售经理',
        backgroundColor: '#9bd1a2',
        children: []
      },
      {
        id: 100,
        color: '#fff',
        topic: 'Hardware',
        direction: 'right',
        selectedType: '销售经理',
        backgroundColor: '#e5957b',
        children: []
      }
    ]
  }
};



@Component({
  selector: 'app-level2-root',
  templateUrl: './app.level2.component.html',
  styleUrls: ['./app.level2.component.css']
})
export class AppLevel2Component {
  title = 'CC 2020';

  dispositions: Dispositions = new Dispositions();
  mindMap;
  selectedNodes: boolean[] = new Array();

  ngOnInit() {
    this.mindMap = MindMapMain.show(option, mind);
    
    
    this.mindMap.view.addEvent(this, 'click',function (event) {
           const element = event.target || event.srcElement;
           const nodeid = this.mindMap.view.getBindedNodeId(element);
           console.log(this.eventHandles);
          

           if("1"!=nodeid && null!=nodeid && !this.selectedNodes.includes(nodeid)){
              this.selectedNodes.push(nodeid);
              element.classList.add("jmnodesborder");
           }else if("1"!=nodeid && null!=nodeid) {
            this.selectedNodes.splice( this.selectedNodes.indexOf(nodeid), 1);
            element.classList.remove("jmnodesborder");
           }
    });
    
    this.mindMap.setTheme("primary");
       
  }

  level2:boolean =false;
  nextLevel(){
    debugger
    this.level2 =true;
    const level2Mind = {
      format: 'nodeTree',
      data: {
        id: 1,
        topic: 'Computing',
        selectedType: false,
        canHandleClick:true,
        backgroundColor: '#d3d3d3',
       
        children: [
          {
            id: 10,
            color: '#fff',
            topic: 'Users and Organizations',
            direction: 'right',
            selectedType: '销售经理',
            backgroundColor: '#9ff4f7',
            canHandleClick:true,
            children: []
          },
          {
            id: 30,
            color: '#fff',
            topic: 'Systems Modling',
            direction: 'right',
            selectedType: '销售经理',
            backgroundColor: '#fde5c6',
            children: []
          }
        ]
      }
    };


    this.mindMap._reset();
    this.mindMap = MindMapMain.show(option, level2Mind);
  }
  
  show_selected(){
    var selected_node = this.mindMap.getSelectedNode();
    if(!!selected_node){
        this.prompt_info(selected_node.topic);
    }else{
      this.prompt_info('nothing');
    }
}

prompt_info(msg){
  alert(msg);
}


  removeNode() {
    const selectedNode = this.mindMap.getSelectedNode();
    const selectedId = selectedNode && selectedNode.id;

    if (!selectedId) {
      return;
    }
    this.mindMap.removeNode(selectedId);
  }

  addNode() {
    const selectedNode = this.mindMap.getSelectedNode();
    if (!selectedNode) {
      return;
    }

    const nodeId = customizeUtil.uuid.newid();
    this.mindMap.addNode(selectedNode, nodeId);
  }

  getMindMapData() {
    const data = this.mindMap.getData().data;
    console.log('data: ', data);
  }

}
