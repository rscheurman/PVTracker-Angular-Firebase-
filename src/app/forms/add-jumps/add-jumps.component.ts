import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Jump {}

@Component({
	selector: 'app-add-jumps',
	templateUrl: './add-jumps.component.html',
	styleUrls: [ './add-jumps.component.scss' ]
})
export class AddJumpsComponent implements OnInit {
	@ViewChild("f") addJumpForm: NgForm
	PoleFeetLength = [ 10, 11, 12, 13, 14, 15, 16 ];
	PoleInchLength = [ 0, 5, 6, 7, 8 ];

	// Form Data
	value: string;
	veiwValue: string;

	constructor() {}

	ngOnInit() {}

	onSubmit() {
		console.log(this.addJumpForm)
		
	}
}
