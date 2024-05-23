import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-rounting.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, HeaderComponent],
  declarations: [HomeComponent],
})
export class HomeModule {}
