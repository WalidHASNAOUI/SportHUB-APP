import { Component } from '@angular/core';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent {
  messageHistory = [
    {
      sender: 'Sami',
      preview: 'Tu viens ce soir ?',
      conversation: [
        { from: 'Sami', text: 'Tu viens ce soir ?' },
        { from: 'Vous', text: 'Oui, à quelle heure ?' },
        { from: 'Sami', text: 'À 19h, ça te va ?' },
        { from: 'Vous', text: 'Parfait, à tout à l\'heure !' }
      ]
    },
    {
      sender: 'Hassan',
      preview: 'Salut, ça va ?',
      conversation: [
        { from: 'Hassan', text: 'Salut, ça va ?' },
        { from: 'Vous', text: 'Oui, merci !' },
        { from: 'Hassan', text: 'Quoi de neuf ?' },
        { from: 'Vous', text: 'Rien de spécial, et toi ?' }
      ]
    }
  ];

  selectedMessage: any = null;
  currentMessage: string = '';
  isMessagingVisible: boolean = true; 

  selectMessage(message: any) {
    this.selectedMessage = message;
  }

  backToList() {
    this.selectedMessage = null;
  }

  sendMessage() {
    if (this.currentMessage.trim()) {
      this.selectedMessage.conversation.push({ from: 'Vous', text: this.currentMessage });
      this.currentMessage = ''; 
    }
  }

  updateMessage(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.currentMessage = inputElement.value;
  }

  closeMessaging() {
    this.isMessagingVisible = false; 
  }
}
