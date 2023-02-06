import { RoomsService } from './../../services/rooms.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  room: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private roomsService: RoomsService
  ) {
    let Id = this.activatedRoute.snapshot.paramMap.get('id');
    this.room = this.roomsService.rooms.filter((r) => r.id.toString() == Id)[0];
  }
}
