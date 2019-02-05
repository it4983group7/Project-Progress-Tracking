// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


// Components
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const appRoutes: Routes = [
  { path: 'projects', component: ProjectsComponent, data: { title: 'Home' } },
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: '#', redirectTo: 'projects', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
