import { Component } from '@angular/core';
import { faHeart, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent{

  faHeart = faHeart;
  faEllipsisVertical = faEllipsisVertical;
}
