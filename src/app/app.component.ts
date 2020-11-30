import { AfterViewInit, Component } from '@angular/core';
import { customizeUtil, MindMapMain } from 'mind-map';
import { Dispositions } from './model/dipositions';
import { FormControl } from '@angular/forms';
import { OnInit, Renderer2 } from '@angular/core';


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
  canHandleClick: true,
  eventType: 'click',
  depth: 4,
  hierarchyRule: HIERARCHY_RULES,
  enableDraggable: false,
};


const mainMindMap = {
  format: 'nodeTree',
  data: {
    id: 1,
    topic: 'Computing',
    selectedType: false,
    canHandleClick: true,
    backgroundColor: '#eee',

    children: [
      {
        id: 10,
        color: '#fff',
        topic: 'Users & Organizations',
        direction: 'right',
        backgroundColor: '#f94144',
        canHandleClick: true,
        children: [],
        show: false,
      },
      {
        id: 30,
        color: '#fff',
        topic: 'Systems Modling',
        direction: 'right',
        backgroundColor: '#f3722c',
        children: []
      },
      {
        id: 50,
        color: '#fff',
        topic: 'System Architecture & Infrastructure',
        direction: 'right',
        backgroundColor: '#f8961e',
        children: []
      },
      {
        id: 70,
        color: '#fff',
        topic: 'Software Development',
        direction: 'right',
        backgroundColor: '#f9c74f',
        children: []
      },
      {
        id: 80,
        color: '#fff',
        topic: 'Software Fundamentals',
        direction: 'right',
        backgroundColor: '#90be6d',
        children: []
      },
      {
        id: 90,
        color: '#fff',
        topic: 'Hardware',
        direction: 'right',
        backgroundColor: '#43aa8b',
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
export class AppComponent implements AfterViewInit {
  title = 'CC 2020';

  level2 = false;
  level3 = false;
  isGenerateRadar = false;
  mindMapView = true;
  level3NodeId;

  val: number = 10;

  dispositions: Dispositions = new Dispositions();
  mindMap;
  selectedNodes: number[] = new Array();

  data: any;
  constructor(private renderer: Renderer2) {



  }
  ngAfterViewInit(): void {
    this.mindMap = MindMapMain.show(option, mainMindMap);

    this.mindMap.view.addEvent(this, 'click', function (event) {

      if (!this.level3) {
        const element = event.target || event.srcElement;
        const nodeid = this.mindMap.view.getBindedNodeId(element);

        if ("1" != nodeid && null != nodeid && !this.selectedNodes.includes(+nodeid) && !this.level2) {
          this.selectedNodes.push(+nodeid);
          element.classList.add("jmnodesborder");
        } else if ("1" != nodeid && null != nodeid && !this.level2) {
          this.selectedNodes.splice(this.selectedNodes.indexOf(+nodeid), 1);
          element.classList.remove("jmnodesborder");
        }

        if ("1" != nodeid && null != nodeid && !this.selectedNodes.includes(+nodeid) && this.level2 && "10" != nodeid && "30" != nodeid && "50" != nodeid && "70" != nodeid && "80" != nodeid && "90" != nodeid) {
          this.selectedNodes.push(+nodeid);
          element.classList.add("jmnodesborder");
        }
        else if ("1" != nodeid && null != nodeid && this.level2 && "10" != nodeid && "30" != nodeid && "50" != nodeid && "70" != nodeid && "80" != nodeid && "90" != nodeid) {
          this.selectedNodes.splice(this.selectedNodes.indexOf(+nodeid), 1);
          element.classList.remove("jmnodesborder");
        }
      } else if (this.level3) {

        const element = event.target || event.srcElement;
        this.level3NodeId = this.mindMap.view.getBindedNodeId(element);
        console.log(this.level3NodeId);

      }
    });

    this.mindMap.setTheme("primary");
  }

  ngOnInit() {


  }




  nextLevel1() {
    this.level2 = true;

    this.selectedNodes.sort((n1, n2) => n1 - n2);

    let level2: any = new Array();
    this.selectedNodes.forEach((element, index) => {

      mainMindMap.data.children.forEach((e, i) => {
        // debugger
        if (e.id == element) {

          if (e.id == 10) {
            e.children.push({
              id: 11,
              color: '#fff',
              topic: 'Social Issues & Professional Practice',
              direction: 'right',
              backgroundColor: '#f94144'
            },
              {
                id: 12,
                color: '#fff',
                topic: 'Security Policy & Management',
                direction: 'right',
                backgroundColor: '#f94144'
              },
              {
                id: 13,
                color: '#fff',
                topic: 'IS Management & Leadership',
                direction: 'right',
                backgroundColor: '#f94144'
              },
              {
                id: 14,
                color: '#fff',
                topic: 'Enterprise Architecture',
                direction: 'right',
                backgroundColor: '#f94144'
              },
              {
                id: 15,
                color: '#fff',
                topic: 'Project Management',
                direction: 'right',
                backgroundColor: '#f94144'
              },
              {
                id: 16,
                color: '#fff',
                topic: 'User Experience Design',
                direction: 'right',
                backgroundColor: '#f94144'
              });
          }
          if (e.id == 30) {
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
          if (e.id == 50) {
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
          if (e.id == 70) {
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
          if (e.id == 80) {
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
          if (e.id == 90) {
            e.children.push({
              id: 101,
              color: '#fff',
              topic: 'Architecture & Organization',
              direction: 'right',
              backgroundColor: '#e5957b'
            },
              {
                id: 92,
                color: '#fff',
                topic: 'Digital Design',
                direction: 'right',
                backgroundColor: '#e5957b'
              },
              {
                id: 93,
                color: '#fff',
                topic: 'Circuit & Electronics',
                direction: 'right',
                backgroundColor: '#e5957b'
              },
              {
                id: 94,
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
        canHandleClick: true,
        backgroundColor: '#d3d3d3',

        children: level2

      }
    };

    // debugger
    this.resetMindMap();
    this.mindMap._show(level2Mind);
    this.selectedNodes.length = 0;
  }

  nextLevel2() {
    this.selectedNodes.sort((n1, n2) => n1 - n2);

    this.selectedNodes.sort((n1, n2) => n1 - n2);

    let level2: any = new Array();
    let addedItems = "";
    this.selectedNodes.forEach((element, index) => {

      mainMindMap.data.children.forEach((e, i) => {
        // debugger
        let id = "" + e.id;
        let first_letter = "" + element;

        if (id.startsWith(first_letter.charAt(0))) {
          if (!addedItems.includes(id)) {
            level2.push(e);
            addedItems = addedItems.concat(id);
          }
        }

      });
    });

    this.selectedNodes.forEach((element, index) => {

      level2.forEach((e, i) => {
        e.children.forEach(ele => {

          if (!this.selectedNodes.includes(ele.id)) {
            e.children.splice(e.children.indexOf(ele), 1);
          }
        });
      });

    });

    const level2Mind = {
      format: 'nodeTree',
      data: {
        id: 1,
        topic: 'Computing',
        selectedType: false,
        canHandleClick: true,
        backgroundColor: '#d3d3d3',

        children: level2

      }
    };

    // debugger
    this.resetMindMap();
    this.mindMap._show(level2Mind);
    //this.selectedNodes.length=0;

    this.level3 = true;
  }

  generateRadar() {

    this.isGenerateRadar = true;
    this.mindMapView = false;

    this.data = {
      labels: ['Hardware', 'Software Fundamentals', 'Software Development', 'System Architecture & Infrastructure', 'Systems Modling', 'Users & Organizations'],
      datasets: [
        {
          label: 'User curriculum',
          backgroundColor: 'rgba(159,244,247,0.3)',
          borderColor: 'rgba(159,244,247,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [3.5, 3, 3.5, 4, 0, 0]
        },
        {
          label: 'First dataset',
          backgroundColor: 'rgba(253,229,198,0.3)',
          borderColor: 'rgba(253,229,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [5, 0, 1, 5, 5, 4]
        },
        {
          label: 'Second dataset',
          backgroundColor: 'rgba(255,99,132,0.3)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [4, 0, 1, 3, 2, 1]
        }
      ]
    };

  }

  resetMindMap() {
    this.mindMap.view.reset();
    this.mindMap.data.reset();
  }

  handleChange(e) {

    const parent: HTMLElement = document.getElementById('high-' + this.level3NodeId);

    if (e.value == 5) {
      this.renderer.setStyle(parent, 'color', '#003000');
    } if (e.value == 4) {
      this.renderer.setStyle(parent, 'color', '#09850c');
    } if (e.value == 3) {
      this.renderer.setStyle(parent, 'color', '#139116');
    } if (e.value == 2) {
      this.renderer.setStyle(parent, 'color', '#3aab3d');
    } if (e.value == 1) {
      this.renderer.setStyle(parent, 'color', '#3afd3d');
    } if (e.value == 0) {
      this.renderer.setStyle(parent, 'color', '#98d938');
    }

  }

  show_selected() {
    var selected_node = this.mindMap.getSelectedNode();
    if (!!selected_node) {
      this.prompt_info(selected_node.topic);
    } else {
      this.prompt_info('nothing');
    }
  }

  prompt_info(msg) {
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
