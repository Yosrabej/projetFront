import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchatsComponent } from './achats/achats.component';
import { CategoriesComponent } from './categories/categories.component';
import { DetailsProduitsComponent } from './details-produits/details-produits.component';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  //{ path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'produits', component: ProduitsComponent },
  { path: 'categorie', component: CategoriesComponent },
  { path: 'details', component: DetailsProduitsComponent },
  { path: 'mesAchats/:prodId', component: AchatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
