import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] =[
  new Recipe("aloo","aloo chaiye","https://images-na.ssl-images-amazon.com/images/I/811fGdwqf%2BL._SL1500_.jpg"),
  new Recipe("aloo","aloo chaiye","https://images-na.ssl-images-amazon.com/images/I/811fGdwqf%2BL._SL1500_.jpg")
];
  constructor() { 

  }

  ngOnInit() {
  }

}
