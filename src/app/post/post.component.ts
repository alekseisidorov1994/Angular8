import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from '../data.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {
@Input('newPost') post: Post;
@Output () postId = new EventEmitter()
  remove(id: number, event: any) {
    event.preventDefault()
    console.log(id);
    this.postId.emit(id);
  }
}
