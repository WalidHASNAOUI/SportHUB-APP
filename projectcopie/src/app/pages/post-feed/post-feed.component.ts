import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostComponent } from 'src/app/tool/create-post/create-post.component';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css']
})
export class PostFeedComponent implements OnInit{
  constructor(private dialog:MatDialog){}
  ngOnInit(): void {
  }
  @Input() show: boolean = false;
  
  onCreatePostClick(){
    this.dialog.open(CreatePostComponent);
  }
}
