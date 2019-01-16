import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  private newEvent = {};

  constructor(private _restService: RestService, private router: Router) { }

  ngOnInit() {
  }

  createNewEvent() {
    let username = localStorage.getItem('token');
    this._restService.postRequest(this.newEvent,'/event?username='+username).subscribe(data => {
      console.log(data);
      this.router.navigate(['/dashboard']);
    }, err => {
      console.log(err);
    })
  }

}
