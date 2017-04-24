import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// firebase
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig, firebaseFacebookAuthentication, firebaseGoogleAuthentication } from './firebase.config';

import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';


//component
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { BoardComponent } from './board/board.component';
import { BoardDetailComponent } from './board/board-detail/board-detail.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';

// module
import { LazyLoadImageModule } from 'ng-lazyload-image';



@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    BoardComponent,
    BoardDetailComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LazyLoadImageModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseGoogleAuthentication)// firebase 를 사용하겠다는 초기설정

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
