import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-helloworld',
    templateUrl: './helloworld.component.html',
    styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {

    data: any;


    constructor() {
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
                    label: 'My First dataset',
                    backgroundColor: 'rgba(253,229,198,0.3)',
                    borderColor: 'rgba(253,229,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [5, 0, 1, 5, 5, 4]
                },
                {
                    label: 'My Second dataset',
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

    ngOnInit() {
    }

}
