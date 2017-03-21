import { MovieService } from './../item.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../item';

@Component({
  selector: 'app-movie',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  item: Item;

  constructor(
    private router: Router,
    private movieService: MovieService
  ) { }

  ngOnInit() {
  }

  goToDetail() {
    // this.router.navigate(['/movie', this.movie.id]);
  }

  upvote(campaignId) {
    this.movieService
      .upvote(campaignId)
      .subscribe( (res: any) => {
        if(res.success) {
          this.item.votes = parseInt(this.item.votes, 10) + 1 + '';
        } else {
          alert('Already upvoted');
        }
      });
  }
}
