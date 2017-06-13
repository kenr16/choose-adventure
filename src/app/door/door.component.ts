import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.css'],
  providers: [PlayerService]
})
export class DoorComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  playerId: number = null;
  player = null;


  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = parseInt(urlParameters['id']);
    });
    this.players = this.playerService.getPlayers();
  }

  findPlayer(playerId) {
    this.players.forEach((person) => {
      if (person[0].id == playerId) {
        this.player = person[0];
      }
    })
    console.log(this.player);
    return this.player;
  }

  kickDoor(person) {
    if (person.fitness > 5) {
      alert("The door smashes open!");

    }
    else {
      alert("The door doesn't budge.  You have lost 1 health due to the smoke.");
      person.health -= 1;
      console.log(person);
      this.playerService.updatePlayer(person);
    }
  }
  pickDoor(person) {
    if (person.intelligence > 5) {
      alert("You successfully pick the lock!");
      
    }
    else {
      alert("You have jammed up the lock.  You have lost 1 health due to the smoke.");
      person.health -= 1;
    }
    this.player = this.findPlayer(this.playerId);
  }

}
