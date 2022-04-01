import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'No content';

  //Method triggered when we click
  onAddPost() {
    console.log(this.enteredValue);
    this.newPost = this.enteredValue;
  }
}
