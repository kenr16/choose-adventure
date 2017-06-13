import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers: [PlayerService]
})
export class RoomComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  player = null;


  constructor(private router: Router, private playerService: PlayerService){}

  submitNewPlayer(name: string, fitness: number, intelligence: number) {
    this.player = new Player(1, name, 10, fitness, intelligence);
    this.playerService.addPlayer(this.player);
  }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  tryDoor(player: Player) {
    console.log(player);
    this.router.navigate(['door', player.id]);
  };
}
