import { Component } from '@angular/core';
import { customizeUtil, MindMapMain } from 'mind-map';
import { Dispositions } from './model/dipositions';

const HIERARCHY_RULES = {
  ROOT: {
    name: 'HIERARCHY_R',
    backgroundColor: '#7EC6E1',
    getChildren: () => [
      HIERARCHY_RULES.SALES_MANAGER,
    ]
  },
  SALES_MANAGER: {
    name: 'SALES_M',
    color: '#fff',
    backgroundColor: '#616161'
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
  backgroundColor: '#9ff4f7',
  canHandleClick:true,
  children: []
}

let usersAndOrg1_1 = {
  id: 11,
  color: '#fff',
  topic: 'Social Issues and Professional Practice',
  direction: 'right',
  backgroundColor: '#9ff4f7',
  canHandleClick:true,
  children: []
}

let securityPolicy1_2 = {
  id: 12,
  color: '#fff',
  topic: 'Security Policy and Management',
  direction: 'right',
  backgroundColor: '#9ff4f7',
  canHandleClick:true,
  children: []
}

const mainMindMap = {
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
        topic: 'Users & Organizations',
        direction: 'right',
        backgroundColor: '#9ff4f7',
        canHandleClick:true,
        children: [],
        show:false,
      },
      {
        id: 30,
        color: '#fff',
        topic: 'Systems Modling',
        direction: 'right',
        backgroundColor: '#fde5c6',
        children: []
      },
      {
        id: 50,
        color: '#fff',
        topic: 'System Architecture & Infrastructure',
        direction: 'right',
        backgroundColor: '#a3cc5a',
        children: []
      },
      {
        id: 70,
        color: '#fff',
        topic: 'Software Development',
        direction: 'right',
        backgroundColor: '#beb66d',
        children: []
      },
      {
        id: 80,
        color: '#fff',
        topic: 'Software Fundamentals',
        direction: 'right',
        backgroundColor: '#9bd1a2',
        children: []
      },
      {
        id: 100,
        color: '#fff',
        topic: 'Hardware',
        direction: 'right',
        backgroundColor: '#e5957b',
        children: []
      }
    ]
  }
};



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CC 2020';

  level2 = false;

  dispositions: Dispositions = new Dispositions();
  mindMap;
  selectedNodes: number[] = new Array();

  ngOnInit() {
    this.mindMap = MindMapMain.show(option, mainMindMap);
    
    this.mindMap.view.addEvent(this, 'click',function (event) {

           const element = event.target || event.srcElement;
           const nodeid = this.mindMap.view.getBindedNodeId(element);

           if("1"!=nodeid && null!=nodeid && !this.selectedNodes.includes(+nodeid)  && !this.level2){
              this.selectedNodes.push(+nodeid);
              element.classList.add("jmnodesborder");
           }else if("1"!=nodeid && null!=nodeid && !this.level2) {
              this.selectedNodes.splice( this.selectedNodes.indexOf(+nodeid), 1);
              element.classList.remove("jmnodesborder");
           }

           if("1"!=nodeid && null!=nodeid && !this.selectedNodes.includes(+nodeid)  && this.level2 && "10"!=nodeid && "30"!=nodeid && "50"!=nodeid && "70"!=nodeid && "80"!=nodeid && "100"!=nodeid){
            this.selectedNodes.push(+nodeid);
            element.classList.add("jmnodesborder");
         }
           else if("1"!=nodeid && null!=nodeid && !this.selectedNodes.includes(+nodeid) && this.level2 && "10"!=nodeid && "30"!=nodeid && "50"!=nodeid && "70"!=nodeid && "80"!=nodeid && "100"!=nodeid){
            this.selectedNodes.splice( this.selectedNodes.indexOf(+nodeid), 1);
            element.classList.remove("jmnodesborder");
          }
    });
    
    this.mindMap.setTheme("primary");
       
  }

  

  
  nextLevel1(){
    this.level2 = true;

    this.selectedNodes.sort((n1,n2) => n1 - n2);

    let level2:any= new Array();
    this.selectedNodes.forEach((element, index) => {

      mainMindMap.data.children.forEach((e, i) =>{
        debugger
        if(e.id == element){

          if(e.id == 10 ){
              e.children.push({
                id: 11,
                color: '#fff',
                topic: 'Social Issues & Professional Practice',
                direction: 'right',
                backgroundColor: '#9ff4f7'
              },
              {
                id: 12,
                color: '#fff',
                topic: 'Security Policy & Management',
                direction: 'right',
                backgroundColor: '#9ff4f7'
              },
              {
                id: 13,
                color: '#fff',
                topic: 'IS Management & Leadership',
                direction: 'right',
                backgroundColor: '#9ff4f7'
              },
              {
                id: 14,
                color: '#fff',
                topic: 'Enterprise Architecture',
                direction: 'right',
                backgroundColor: '#9ff4f7'
              },
              {
                id: 15,
                color: '#fff',
                topic: 'Project Management',
                direction: 'right',
                backgroundColor: '#9ff4f7'
              },
              {
                id: 16,
                color: '#fff',
                topic: 'User Experience Design',
                direction: 'right',
                backgroundColor: '#9ff4f7'
              });
          }
          if(e.id ==  30 ){
              e.children.push({
                id: 31,
                color: '#fff',
                topic: 'Security Issues & Principles',
                direction: 'right',
                backgroundColor: '#fde5c6'
              },
              {
                id: 32,
                color: '#fff',
                topic: 'System Analysis & Design',
                direction: 'right',
                backgroundColor: '#fde5c6'
              },
              {
                id: 33,
                color: '#fff',
                topic: 'Requirement Analysis & Design',
                direction: 'right',
                backgroundColor: '#fde5c6'
              },
              {
                id: 34,
                color: '#fff',
                topic: 'Data & Information Management',
                direction: 'right',
                backgroundColor: '#fde5c6'
              });
          }
          if(e.id == 50 ){
            e.children.push({
              id: 51,
              color: '#fff',
              topic: 'Virtual Systems & Services',
              direction: 'right',
              backgroundColor: '#a3cc5a'
            },
            {
              id: 52,
              color: '#fff',
              topic: 'Intelligent System(AI)',
              direction: 'right',
              backgroundColor: '#a3cc5a'
            },
            {
              id: 53,
              color: '#fff',
              topic: 'Internet of Things',
              direction: 'right',
              backgroundColor: '#a3cc5a'
            },
            {
              id: 54,
              color: '#fff',
              topic: 'Parallel & Distributed Computing',
              direction: 'right',
              backgroundColor: '#a3cc5a'
            },
            {
              id: 55,
              color: '#fff',
              topic: 'Computer Network',
              direction: 'right',
              backgroundColor: '#a3cc5a'
            },
            {
              id: 56,
              color: '#fff',
              topic: 'Embedded System',
              direction: 'right',
              backgroundColor: '#a3cc5a'
            },
            {
              id: 57,
              color: '#fff',
              topic: 'Integrated System Technology',
              direction: 'right',
              backgroundColor: '#a3cc5a'
            },
            {
              id: 58,
              color: '#fff',
              topic: 'Platform Technology',
              direction: 'right',
              backgroundColor: '#a3cc5a'
            },
            {
              id: 59,
              color: '#fff',
              topic: 'Security Technology & Implementation',
              direction: 'right',
              backgroundColor: '#a3cc5a'
            });
          }
          if(e.id == 70 ){
            e.children.push({
              id: 71,
              color: '#fff',
              topic: 'Software Quality, Verification & Validation',
              direction: 'right',
              backgroundColor: '#beb66d'
            },
            {
              id: 72,
              color: '#fff',
              topic: 'Software Process',
              direction: 'right',
              backgroundColor: '#beb66d'
            },
            {
              id: 73,
              color: '#fff',
              topic: 'Software Modeling & Analysis',
              direction: 'right',
              backgroundColor: '#beb66d'
            },
            {
              id: 74,
              color: '#fff',
              topic: 'Software Design',
              direction: 'right',
              backgroundColor: '#beb66d'
            },
            {
              id: 75,
              color: '#fff',
              topic: 'Platform-Based Development',
              direction: 'right',
              backgroundColor: '#beb66d'
            });
          }
          if(e.id == 80 ){
            e.children.push({
              id: 81,
              color: '#fff',
              topic: 'Graphics & Visualization',
              direction: 'right',
              backgroundColor: '#9bd1a2'
            },
            {
              id: 82,
              color: '#fff',
              topic: 'Operation System',
              direction: 'right',
              backgroundColor: '#9bd1a2'
            },
            {
              id: 83,
              color: '#fff',
              topic: 'Data Structure, Alogorithms & Complexity',
              direction: 'right',
              backgroundColor: '#9bd1a2'
            },
            {
              id: 84,
              color: '#fff',
              topic: 'Programming Languages',
              direction: 'right',
              backgroundColor: '#9bd1a2'
            },
            {
              id: 85,
              color: '#fff',
              topic: 'Programming Fundamentals',
              direction: 'right',
              backgroundColor: '#9bd1a2'
            },
            {
              id: 86,
              color: '#fff',
              topic: 'Computer Systems Fundamentals',
              direction: 'right',
              backgroundColor: '#9bd1a2'
            });
          }
          if(e.id == 100 ){
            e.children.push({
              id: 101,
              color: '#fff',
              topic: 'Architecture & Organization',
              direction: 'right',
              backgroundColor: '#e5957b'
            },
            {
              id: 102,
              color: '#fff',
              topic: 'Digital Design',
              direction: 'right',
              backgroundColor: '#e5957b'
            },
            {
              id: 103,
              color: '#fff',
              topic: 'Circuit & Electronics',
              direction: 'right',
              backgroundColor: '#e5957b'
            },
            {
              id: 104,
              color: '#fff',
              topic: 'Signal Processing',
              direction: 'right',
              backgroundColor: '#e5957b'
            });
          }

          level2.push(e);
        }
      });

      console.log(element);
     
    });

    const level2Mind = {
      format: 'nodeTree',
      data: {
        id: 1,
        topic: 'Computing',
        selectedType: false,
        canHandleClick:true,
        backgroundColor: '#d3d3d3',

        children: level2
        
      }
    };

    debugger
    this.resetMindMap();
    this.mindMap._show(level2Mind);
    this.selectedNodes.length=0;
  }


  nextLevel2(){
    this.selectedNodes.sort((n1,n2) => n1 - n2);
    
    console.log(this.selectedNodes);
  }

  resetMindMap(){
    this.mindMap.view.reset();
    this.mindMap.data.reset();
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
