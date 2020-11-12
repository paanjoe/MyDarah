import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatGridListModule
  ],
  entryComponents: []
})
export class DashboardModule { }
