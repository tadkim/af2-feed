import { FirebaseObjectObservable } from 'angularfire2';
import { AppService } from './../../app.service';
import { Cup } from './../../model/cup';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {
  cup: FirebaseObjectObservable<Cup>;

  albumId: number;
  albumToDisplay: FirebaseObjectObservable<Cup>;  

  name: any;
  

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
   });
   this.cup = this.appService.getCup(this.albumId);
  }


  
  save(): void {
    /*
    this.heroService.update(this.hero)
      .then(() => this.goBack());
    */
    console.log("save click!!!");
  }
  

  goBack(): void {
    this.location.back();
  }

}
