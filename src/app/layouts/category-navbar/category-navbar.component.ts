import { Component,OnInit } from '@angular/core';
import { CategoriesService } from 'app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {

  categoryArray: Array<any>

  constructor (private categoryService:CategoriesService){}

  ngOnInit(): void {

    //Loading Category
    this.categoryService.loadData().subscribe(val => {

        this.categoryArray = val;

    })

  }
}
