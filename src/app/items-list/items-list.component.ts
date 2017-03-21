import { MovieService } from './../item.service';
import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Item} from '../item';

@Component({
  selector: 'app-movies-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class MoviesListComponent implements OnInit {
  items: Item[];

  constructor(
    private itemService: MovieService
  ) { }

  ngOnInit() {
     this.itemService.getCampaigns()
      .subscribe(items => {
        console.log(items);
        this.items = items;
    });
  }

}
