import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("CheeseCake",
            "cookie with chees",
            "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_1064/k%2Farchive%2F7b084eaf9d7d564dd2667094c3dd1260a5e4d646"),
    new Recipe("CheeseCake",
      "cookie with chees",
      "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_760,h_1064/k%2Farchive%2F7b084eaf9d7d564dd2667094c3dd1260a5e4d646")

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
