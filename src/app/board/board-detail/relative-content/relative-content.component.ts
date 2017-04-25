import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../../app.service';
import { FirebaseObjectObservable } from 'angularfire2';
@Component({
    selector: 'relative-content',
    templateUrl: 'relative-content.component.html',
    styleUrls:['relative-content.component.css']
})
export class RelativeContentComponent implements OnInit {
    nextCup: FirebaseObjectObservable<any>;
    prevCup: FirebaseObjectObservable<any>;
    currentCup: FirebaseObjectObservable<any>;

    index = {
        prev:0,
        cur: 0,
        next:0
    };

    


    private sub: any;


    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private appService: AppService
    ) {
        //get current, prev, next cup index from route params
        this.sub = this.activatedRoute.params.subscribe(params => {
            let cur = +params['id']; //get current detail view index
            let prev = (cur === 0)? 12 : cur - 1;
            let next = (cur === 12)? 0 : cur + 1;

            this.currentCup = appService.getCup(cur);
            this.prevCup = appService.getCup(prev);
            this.nextCup = appService.getCup(next);

            this.index.cur = cur;
            this.index.prev = prev;
            this.index.next = next;
        });

    }
    ngOnInit() { 
        this.sub.unsubscribe();
    }
    getBgImg() {
        
    }
    gotoDetail(id: number): void{
        let link = ['/detail', id];
        this.router.navigate(link);
        location.reload();
        window.scrollTo(0, 0);
    }

}