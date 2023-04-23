import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.scss']
})
export class PostInfoComponent {
@Input() title: string = '';
@Input() content: string= '';
str!: string;
ngOnInit(){
  // this.content.replace('"','');
}
}
