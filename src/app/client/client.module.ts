import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  declarations: [,
    HomeComponent
]
})
export class ClientModule { }
