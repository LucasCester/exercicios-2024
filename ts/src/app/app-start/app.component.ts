import { Component } from '@angular/core';
import { faGlobe, faCaretDown, faStar, faDownload, faPlus } from '@fortawesome/free-solid-svg-icons';

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
  faPlus = faPlus;

  showMore: boolean = false;
  createQuestionStage: number = 1;

  public switchSummary(): void{
    this.showMore = !this.showMore;
  }

  public changeQuestionStage(newStage: number): void{
    this.createQuestionStage = newStage;
  }
}
