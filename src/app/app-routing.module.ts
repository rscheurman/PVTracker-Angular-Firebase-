import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddJumpsComponent } from './forms/add-jumps/add-jumps.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [ { path: 'add-jump', component: AddJumpsComponent },
						{path: '', component: HomeComponent} ];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
