import { Component, OnInit } from '@angular/core';

import { Ride } from '../ride.model';

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css']
})
export class RideListComponent implements OnInit {
  rides: Ride[] = [
    new Ride('Van Boot naar Almere', 'Yvon', 'https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/180378_155345264520130_2244714_n.jpg?_nc_cat=102&_nc_sid=174925&_nc_ohc=xndG0RBxeXIAX-DvnDD&_nc_ht=scontent-amt2-1.xx&oh=e0820e340ee3b28aec33e01d3fb2a242&oe=5F10ED0D'),
    new Ride('Van Almere naar Boot', 'Damiën', 'https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/39828_123103977735838_602760_n.jpg?_nc_cat=111&_nc_sid=de6eea&_nc_ohc=iWrvSeziTNoAX87F0tt&_nc_ht=scontent-ams4-1.xx&oh=10dec94a4ce152e83e10e0d6e16d5dea&oe=5F10B1AD')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
