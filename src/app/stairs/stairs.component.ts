import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-stairs',
  templateUrl: './stairs.component.html',
  styleUrls: ['./stairs.component.css'],
  providers: [PlayerService]
})
export class StairsComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private playerService: PlayerService) {}

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  takeStairs(person) {
    if (person.fitness > 5) {
      alert("You rush down the stairwell and make it out of the building in time!");
    }
    else {
      alert("You are just too slow to make it down more than a few flights of stairs, you huff and wheeze and inhale more smoke.  You have lost 1 health due to the smoke.");
      person.health -= 1;
      this.playerService.updatePlayer(person);
    }
  }
  takeElevator(person) {
    if (person.intelligence > 5) {
      alert("You grab the firefighter's elevator key from the utility closet and reactivate the elevator.  You lower down to freedom.");
    }
    else {
      alert("You rush into the elevator but the buttons don't work.  You have lost 1 health due to the smoke.");
      person.health -= 1;
      this.playerService.updatePlayer(person);
    }
  }

}
