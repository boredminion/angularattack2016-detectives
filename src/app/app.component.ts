import { Component } from '@angular/core';
import '../../public/css/styles.css';
import '../../public/css/combined.min.css'; // type 
import '../../public/favicon.ico'; // type 
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent { 
	
}