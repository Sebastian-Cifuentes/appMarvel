import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { SearchComponent } from '../../components/search/search.component';
import { CardCharacterComponent } from '../../components/card-character/card-character.component';
import { CardFavoriteComponent } from '../../components/card-favorite/card-favorite.component';
import { SortByComponent } from '../../components/sort-by/sort-by.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
  declarations: [
    CardCharacterComponent,
    CardFavoriteComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    SearchComponent,
    SortByComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
