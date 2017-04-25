
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//page
import { AppComponent } from './app.component';
import { BoardDetailComponent } from './board/board-detail/board-detail.component';
import { BoardComponent } from './board/board.component';
import { Page404Component } from './page404.component';


const routes: Routes = [
    { path: ' ', redirectTo: './board', pathMatch: 'full' },
    { path: 'board', component: BoardComponent },
    { path: 'detail/:id', component: BoardDetailComponent },
    { path: '**', component: Page404Component }
    

    // { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];