import { RoomsService } from './../../services/rooms.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  rooms: any[];

  constructor(private router: Router, private roomsService: RoomsService) {
    //let roomss= this.roomsService.rooms;
    this.rooms = this.roomsService.rooms;
  }

  navigateToDetails(id: Number) {
    this.router.navigate(['details', id]);
    // console.log(id);
  }
}
