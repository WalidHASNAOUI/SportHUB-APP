import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityCardComponent } from '../activity-card/activity-card.component';

@Component({
  selector: 'app-activity-feed',
  standalone: true,
  imports: [CommonModule, ActivityCardComponent],
  templateUrl: './activity-feed.component.html',
  styleUrl: './activity-feed.component.css'
})
export class ActivityFeedComponent 
{
  // Static mock activities for design
  activities = [
    {
      title: 'Morning Run',
      description: 'Ran around the lake and enjoyed the sunrise.',
      distance: 5.2,
      pace: '5:10',
      time: '26m',
      map: 'images/activities/mock-map1.png', // Replace with actual map images
    },
    {
      title: 'Evening Ride',
      description: 'Cycling through the countryside with a great view.',
      distance: 25.3,
      pace: '2:45',
      time: '1h 10m',
      map: 'images/activities/mock-map2.png', // Replace with actual map images
    },
    {
      title: 'Hike to the Summit',
      description: 'Reached the top of the mountain with stunning views.',
      distance: 12.0,
      pace: '10:15',
      time: '2h',
      map: 'images/activities/mock-map3.png', // Replace with actual map images
    }
  ];

}
