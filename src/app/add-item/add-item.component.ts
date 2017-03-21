import { Config } from './../shared/config';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Item } from '../item';
import { MovieService } from '../item.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item: Item;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {
    this.item = new Item;
  }

  ngOnInit() {
  }

  addMovie(f: NgForm) {
    let formValues = f.value;

    this.movieService.addCampaign(formValues)
        .subscribe(item => {
          console.log('Item Added Successfully');
          this.router.navigate(['/campaigns']); // navigate to the main route
        });
  }

}
