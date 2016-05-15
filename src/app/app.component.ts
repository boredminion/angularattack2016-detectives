import { Component } from '@angular/core';
import {DougComponent} from './doug.component';
import {BubbleComponent} from './doug-bubble.component';

import '../../public/css/styles.css';
@Component({
  selector: 'doug-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [DougComponent,BubbleComponent]
})
export class AppComponent { 
	
}