import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  event: any; 
  private apiUrl = 'http://localhost:5000/api/events'; 

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchEventDetails(id); 
    }
  }

  fetchEventDetails(id: string): void {
    this.http.get<any>(`${this.apiUrl}/${id}`).subscribe(
      (data) => {
        this.event = data; 
      },
      (error) => {
        console.error('Error fetching event details:', error);
        alert('Failed to load event details.');
      }
    );
  }

  subscribeToEvent(): void {
    alert(`You have subscribed to: ${this.event.title}`);
  }
}
