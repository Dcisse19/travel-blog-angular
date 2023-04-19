import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';

const modules = [
  MatSlideToggleModule,
  MatButtonModule,
  MatCardModule,
  MatSidenavModule,
  LayoutModule,
  MatToolbarModule,
  MatDividerModule
];
@NgModule ({
  imports: [
    ...modules
  ],
  exports : [
    ...modules
  ]
})
export class AngularMaterialModule {}
