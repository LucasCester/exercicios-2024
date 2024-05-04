import { Component, Input } from '@angular/core';
import { faHeart, faEllipsisVertical, faCheckDouble } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent{

  @Input() blur: string = "";

  faHeart = faHeart;
  faEllipsisVertical = faEllipsisVertical;
  faCheckDouble = faCheckDouble;
}
