import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCdComponent } from './list-cd/list-cd.component';
import { CdComponent } from './cd/cd.component';
import { NewCDComponent } from './new-cd/new-cd.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'catalog', component: ListCdComponent},
  { path: 'cd/:id', component: CdComponent},
  { path: 'new', component: NewCDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
