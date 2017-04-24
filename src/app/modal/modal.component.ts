import { Component, OnInit, Input } from '@angular/core';
import { firebaseGoogleAuthentication, firebaseFacebookAuthentication } from '../firebase.config';
import { AngularFire } from 'angularfire2';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() isModal: boolean;

  name: any;
   constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });
  }


  ngOnInit() {
  }

  
  login(platform: string) {
    if (platform === 'google') {
      this.af.auth.login(firebaseGoogleAuthentication);
    }
    else {
       this.af.auth.login(firebaseFacebookAuthentication); 
    }
  }
  

  logout() {
     this.af.auth.logout();
  }

  close() {
    this.isModal = false;
  }

}
