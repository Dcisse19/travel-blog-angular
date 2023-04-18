import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const modules = [
  MatSlideToggleModule,
  MatButtonModule,
  MatCardModule
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
