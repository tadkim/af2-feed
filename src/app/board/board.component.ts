import { Cup } from './../model/cup';
import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { AppService } from './../app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{
  cups: FirebaseListObservable<Cup[]>;
  isLoading: boolean = false;
  
  

  selectedFilter: string = 'name'; //test
  


  
  constructor( private router: Router, private appService: AppService) {
    this.cups = appService.getCups();
  }

  ngOnInit() {
    this.isLoading = false;
    
  }

  gotoDetail(cup): void{
    let link = ['/detail', cup.$key];
    this.router.navigate(link);
  }

  getAnimationByIndex(index: any){
    let eachCupClass = 'ani-' + index;
    return eachCupClass;
  }
  
}
