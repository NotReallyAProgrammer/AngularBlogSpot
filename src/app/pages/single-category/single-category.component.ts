import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit{

  postArray:Array<any>
  category:string;
  constructor(private route: ActivatedRoute, private postService:PostsService){}

  ngOnInit(): void {
  //Capturing Category id using ActivatedRoute
    this.route.params.subscribe(val => {
      this.category = val['name']
      this.postService.loadCategoryPost(val['id']).subscribe (post => {
        this.postArray = post
      });
    })
  }
}
