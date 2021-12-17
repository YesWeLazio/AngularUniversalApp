import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatetimeComponent } from './datetime/datetime.component';
import { FacebookComponent } from './facebook/facebook.component';
import { NgClassComponent } from './ng-class/ng-class.component';

const routes: Routes = [
  { path: 'facebook',   component: FacebookComponent },
  { path: 'ng-class',   component: NgClassComponent },
  { path: 'datetime',   component: DatetimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
