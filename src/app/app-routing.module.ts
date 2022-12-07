import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { audit, from } from 'rxjs';
import { IdComponent } from './pages/id/id.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' }, //for rote not exist url
  { path: 'list', component: ListComponent, title: 'list' },
  { path: 'list/:id', canActivate: [AuthGuard], component: ListComponent, title: 'in list' },
  { path: 'add', component: AddComponent, title: 'add' },
  { path: '**', component: ErrorComponent } //for wrong url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
export const routingComponents = [ListComponent, AddComponent, IdComponent]
