import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'app/services/posts.service';

@Component({
  selector: 'app-single-posts',
  templateUrl: './single-posts.component.html',
  styleUrls: ['./single-posts.component.css']
})
export class SinglePostsComponent implements OnInit {

  postData:any
  postCardArray:Array<any>

  constructor(
    private route:ActivatedRoute,
    private postService:PostsService){}



  ngOnInit(): void {

    this.route.params.subscribe(val => {

      this.postService.countViews(val['id'])

      this.postService.loadSinglePost(val['id']).subscribe(post => {
        this.postData = post;

        this.loadSimilarPost(this.postData.category.categoryId)

      })
    })

  }

  loadSimilarPost(catId:any){
    this.postService.loadCategoryPost(catId).subscribe(val => {
     this.postCardArray = val
    })
  }
}
