import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  constructor() {}

  ngOnInit(): void {}
}
