import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  player: Player = null;

  submitNewPlayer(name: string, fitness: number, intelligence: number) {
    this.player = new Player(1, name, 10, fitness, intelligence);
  }

  tryDoor(player: Player) {
    this.router.navigate(['door', player.id]);
  };

  constructor(private router: Router){}

  ngOnInit() {
  }

}
