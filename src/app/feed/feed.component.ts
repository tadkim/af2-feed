import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2'

@Component({
  selector: 'feed',
  template: `
  <br/>


  <div class="selectBox">
    <select>
      <p><option>Select</option></p>
      <option>Lunatte cup</option>
      <option>Meluna cup</option>
      <option>Diva cup</option>
      <option>Femicycle cup</option>
    </select>


    <select>
      <option>Size</option>
      <option>S</option>
      <option>M</option>
      <option>모르겠다.</option>
    </select>

    <button (click)="updateFeed()">피드백보내기 </button>
    {{ (feedCount | async)?.count}}
  </div>


  <br/>
  
  
  
  `,
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feed: FirebaseObjectObservable<any>;
  feedCount: FirebaseObjectObservable<any>;

  countSaver;
  

  
  constructor(af: AngularFire) {
    this.feed = af.database.object('/feedback');
    this.feedCount = af.database.object('/feedback/count' ,{ preserveSnapshot: true });
    this.feedCount.subscribe(snapshot => {
      this.countSaver = snapshot.val(); //현재 count 수를 저장해둔다
    });
  }

  ngOnInit() {
  }

  updateFeed() {
    let nextVal = (this.countSaver + 1)
    this.feed.update({ count: nextVal });
  }

}
