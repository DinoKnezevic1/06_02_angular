import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor() {}

  rooms = [
    {
      id: 1,
      name: 'server Room',
      capacity: 0,
      isOccupied: false,
    },
    {
      id: 2,
      name: 'conference Room',
      capacity: 10,
      isOccupied: false,
    },
    {
      id: 3,
      name: 'Director',
      capacity: 2,
      isOccupied: false,
    },
    {
      id: 4,
      name: 'Support',
      capacity: 4,
      isOccupied: false,
    },
    {
      id: 5,
      name: 'Tech Lead',
      capacity: 2,
      isOccupied: false,
    },
    {
      id: 6,
      name: 'Devs',
      capacity: 22,
      isOccupied: false,
    },
    {
      id: 7,
      name: 'Classroom',
      capacity: 10,
      isOccupied: true,
    },
    {
      id: 8,
      name: 'Team Lead',
      capacity: 2,
      isOccupied: false,
    },
  ];
}
