import {Component, Input} from '@angular/core';

interface Comment {
  user: object;
  content: string;
}


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent {
@Input('newComment') comment: Comment
  constructor() {

  }
}
