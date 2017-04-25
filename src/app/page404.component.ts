import { Component } from '@angular/core';
@Component({
    selector: 'page404',
    template: `
    <p class="num"> 404 </p>
    <p class="text"> Page Not Found </p>
    `,
    styles:[
    `
    p { text-align: center; }
    .num { font-size: 50px; }
    .text { font-size: 30px; }
    `
    ]    
})
export class Page404Component {

}