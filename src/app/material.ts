import {
	MatButtonModule,
	MatCheckboxModule,
	MatFormFieldModule,
	MatInputModule,
	MatSliderModule,
	MatOptionModule,
	MatSelectModule,
	MatSlideToggleModule
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
		MatSlideToggleModule
	],
	exports: [
		MatButtonModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatInputModule,
		MatSliderModule,
		MatOptionModule,
		MatSelectModule,
		MatSlideToggleModule
	]
})
export class MaterialModule {}
