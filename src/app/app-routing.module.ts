import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { StoryComponent } from './story/story.component';
import { StoreComponent } from './store/store.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  {path:'', redirectTo:'category', pathMatch:'full'},
  {path:'category', component:CategoryComponent},
  {path:'story', component:StoryComponent},
  {path:'store', component:StoreComponent},
  {path:'service', component:ServiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
