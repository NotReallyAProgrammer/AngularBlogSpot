import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostsComponent } from './pages/single-posts/single-posts.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'category/:name/:id', component:SingleCategoryComponent},
  {path: 'post/:id', component:SinglePostsComponent},

  {path: 'about', component:AboutUsComponent},
  {path: 'term-condition', component:TermsAndConditionComponent},
  {path: 'contact', component:ContactUsComponent},

  {path: '**', component:FournotfourComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
