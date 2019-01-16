import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private eventList = [];

  constructor(private _restService: RestService) { }

  ngOnInit() {
    this._restService.getRequest({},'/events').subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    } )
  }

}
