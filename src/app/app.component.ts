import {Component} from '@angular/core';
import {DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

constructor( public data: DataService) {
}


  updatePost(event: any) {
    console.log('as', event);
    console.log(this.data.posts)
    this.data.posts = this.data.posts.filter(e => e.id !== event);
  }
}
