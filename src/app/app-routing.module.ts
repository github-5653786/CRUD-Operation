import { UpdateInfoComponent } from './update-info/update-info.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserInfoComponent },
  { path: 'UpdateUser/:id', component: UpdateInfoComponent },
  { path: "**", redirectTo: 'user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
