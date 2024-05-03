import { Component } from '@angular/core';
import { faGlobe, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faGlobe = faGlobe;
  faCaretDown = faCaretDown;
}
