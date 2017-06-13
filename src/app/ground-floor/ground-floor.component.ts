import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-ground-floor',
  templateUrl: './ground-floor.component.html',
  styleUrls: ['./ground-floor.component.css'],
  providers: [PlayerService]
})
export class GroundFloorComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

}
