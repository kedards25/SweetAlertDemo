import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sweet-alert-demo';
  showSweetAlrt(): any {
    Swal.fire({
      title: 'Sample',
      text: 'Test',
      type: 'success',
      timer: 2000
    });
  }


}
