import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../models/Dashboard';
import { DashboardService } from '../services/dashboard.service';
import { 
  faList, 
  faTasks, 
  faComments, 
} from '@fortawesome/free-solid-svg-icons';  

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faList = faList;
  faTasks = faTasks;
  faComments = faComments;

  model!: Dashboard;

  constructor(private dashboardService: DashboardService) { 
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dashboardService.getModel().subscribe(model => {
      this.model = model;
    })
  }
  
}
