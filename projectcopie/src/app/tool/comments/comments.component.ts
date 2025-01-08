import { Component, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  @Input() postId: string = ''; 
  @Input() postContent: string = ''; 
  @Input() postImage: string = ''; 
  @Output() close = new EventEmitter<void>();

  comments: any[] = [];
  newComment: string = ''; 

  private apiUrl = 'http://localhost:5000/api/posts';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchComments();
  }

  fetchComments(): void {
    this.http.get<any[]>(`${this.apiUrl}/${this.postId}/comments`).subscribe(
      (data) => {
        this.comments = data;
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
  }

  addComment(): void {
    const userId = localStorage.getItem('userId'); 
    if (!userId) {
      alert('You must be logged in to comment.');
      return;
    }

    const newComment = { userId, text: this.newComment };

    this.http.post(`${this.apiUrl}/${this.postId}/comments`, newComment).subscribe(
      (response) => {
        this.comments.push(response); 
        this.newComment = ''; 
      },
      (error) => {
        console.error('Error adding comment:', error);
      }
    );
  }

  closePopup(): void {
    this.close.emit();
  }
}
