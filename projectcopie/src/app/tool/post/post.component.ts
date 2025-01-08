import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[] = []; 
  showComments: boolean = false; 
  selectedPost: any = null; 

  private apiUrl = 'http://localhost:5000/api/posts'; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts(); 
  }

  fetchPosts(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
        alert('Failed to load posts.');
      }
    );
  }

  openComments(post: any): void {
    this.selectedPost = post; 
    this.showComments = true; 
  }

  closeComments(): void {
    this.selectedPost = null;
    this.showComments = false;
  }
}
