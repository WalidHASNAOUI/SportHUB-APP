import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  selectedOption: 'post' | 'event' = 'post';
  selectedImageFile: File | null = null;
  selectedImagePreview: string | null = null;
  selectedEventImageFile: File | null = null;
  selectedEventImagePreview: string | null = null;
  eventTitle: string = '';
  eventDescription: string = '';
  eventDate: string = '';
  content: string = '';
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  selectOption(option: 'post' | 'event'): void {
    this.selectedOption = option;
  }

  onPhotoSelected(photoSelector: HTMLInputElement): void {
    if (photoSelector.files && photoSelector.files.length > 0) {
      this.selectedImageFile = photoSelector.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImagePreview = reader.result as string;
      };
      reader.readAsDataURL(this.selectedImageFile);
    }
  }

  onEventPhotoSelected(eventPhotoSelector: HTMLInputElement): void {
    if (eventPhotoSelector.files && eventPhotoSelector.files.length > 0) {
      this.selectedEventImageFile = eventPhotoSelector.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedEventImagePreview = reader.result as string;
      };
      reader.readAsDataURL(this.selectedEventImageFile);
    }
  }

  createPost(): void {
    const userId = localStorage.getItem('userId'); 

    if (!userId) {
      alert('User not authenticated!');
      return;
    }

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('content', this.content);
    if (this.selectedImageFile) {
      formData.append('image', this.selectedImageFile); 
    }

    this.http.post(`${this.apiUrl}/api/posts`, formData).subscribe(
      (response) => {
        console.log('Post created:', response);
        alert('Post created successfully!');
      },
      (error) => {
        console.error('Error creating post:', error); 
        alert('Failed to create post.');
      }
    );
  }

  createEvent(): void {
    const userId = localStorage.getItem('userId'); 

    if (!userId) {
      alert('User not authenticated!');
      return;
    }

    const eventData = {
      userId,
      title: this.eventTitle,
      description: this.eventDescription,
      date: this.eventDate,
      image: this.selectedEventImageFile ? this.selectedEventImageFile.name : '',
    };

    this.http.post('http://localhost:5000/api/events', eventData).subscribe(
      (response) => {
        console.log('Event created:', response);
        alert('Event created successfully!');
      },
      (error) => {
        console.error('Error creating event:', error);
        alert('Failed to create event.');
      }
    );
  }
}
