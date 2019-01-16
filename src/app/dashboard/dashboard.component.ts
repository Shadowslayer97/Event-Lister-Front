import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private eventList = [];

  constructor(private _restService: RestService, private router: Router) { }

  ngOnInit() {
    this._restService.getRequest({},'/event/all').subscribe(data => {
      console.log(data);
      this.eventList = data.events;
    }, err => {
      console.log(err);
    } )
  }

  newEventForm() {
    this.router.navigate(['/form']);
  }

}
