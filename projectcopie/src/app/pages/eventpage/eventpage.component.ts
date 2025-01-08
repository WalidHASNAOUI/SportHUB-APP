import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.css'],
})
export class EventPageComponent implements OnInit {
  events: any[] = [];

  private apiUrl = 'http://localhost:5000/api/events'; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.events = data; 
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
}
