import { Component } from '@angular/core';
import {DougComponent} from './doug.component';

import '../../public/css/styles.css';
@Component({
  selector: 'doug-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [DougComponent]
})
export class AppComponent { 
	
}