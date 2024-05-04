import { Component } from '@angular/core';
import { faGlobe, faCaretDown, faStar, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faGlobe = faGlobe;
  faCaretDown = faCaretDown;
  faStar = faStar;
  faDownload = faDownload;
}
