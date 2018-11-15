import { Component, OnInit, Input } from '@angular/core';

export interface Jump {}

@Component({
	selector: 'app-add-jumps',
	templateUrl: './add-jumps.component.html',
	styleUrls: [ './add-jumps.component.scss' ]
})
export class AddJumpsComponent implements OnInit {
	PoleFeetLength = [ 10, 11, 12, 13, 14, 15, 16 ];
	PoleInchLength = [ 5, 6, 7, 8 ];

	// Form Data
	value: string;
	veiwValue: string;

	constructor() {}

	ngOnInit() {}

	onAdd() {
	}
}
