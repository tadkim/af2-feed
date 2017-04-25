import { ModalComponent } from './modal/modal.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '꽤 살만한 생리컵을 모았어요';
  name: string;


  isModal: boolean = false;
  
  onSign() {
    this.isModal = !this.isModal;
  }

  constructor(){}
  
}
