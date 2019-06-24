import { Component } from '@angular/core';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  imports: [
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MdBootTrial';
}
