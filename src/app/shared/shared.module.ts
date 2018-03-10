import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopHeaderComponent } from './components/top-header/top-header.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    TopHeaderComponent,
    TopNavigationComponent,
    FooterComponent
  ],
  exports: [
    TopHeaderComponent,
    TopNavigationComponent,
    FooterComponent
  ]
})
export class SharedModule { }
