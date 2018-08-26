import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoloComponent } from './solo/solo.component';
import { DuoComponent } from './duo/duo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'solo', component: SoloComponent},
  {path: 'duo', component: DuoComponent},
  {path:'', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
