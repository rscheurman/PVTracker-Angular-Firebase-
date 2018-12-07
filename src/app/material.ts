import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatOptionModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatCardModule,
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatExpansionModule
} from "@angular/material";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSnackBarModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSnackBarModule,
    MatExpansionModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 1500 } }
  ]
})
export class MaterialModule {}
