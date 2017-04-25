import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';


import { Cup } from './model/cup';

@Injectable()
export class AppService {
  
  cups: FirebaseListObservable<any>;

  


  constructor(private af: AngularFire) {
    this.cups = af.database.list('/allcup', {
      query: {
        orderByChild: 'name_eng'
      }
    });
    this.cups.forEach(i => { console.log(i); });
    
  }

  
  ngOnInit() {
  }


  getCups() {
    return this.cups;
  }

  getCup(id: number) {
    return this.af.database.object('/allcup/' + id);
  }


  handleError() {
    console.log("error!");
  }


}
