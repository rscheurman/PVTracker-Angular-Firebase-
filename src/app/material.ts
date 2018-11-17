import {
	MatButtonModule,
	MatCheckboxModule,
	MatFormFieldModule,
	MatInputModule,
	MatSliderModule,
	MatOptionModule,
	MatSelectModule,
	MatSlideToggleModule,
	MatCardModule
} from '@angular/material';
import { NgModule } from '@angular/core';

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
		MatCardModule
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
		MatCardModule
	]
})
export class MaterialModule {}
