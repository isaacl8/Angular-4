import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colors: string[] = [ 'red', 'blue', 'black', 'green', 'purple', 'brown', 'yellow', 'orange' ]

  index0 = (Math.floor(Math.random() * 7) + 1);
  index1 = (Math.floor(Math.random() * 7) + 1);
  index2 = (Math.floor(Math.random() * 7) + 1);
  index3 = (Math.floor(Math.random() * 7) + 1);
  index4 = (Math.floor(Math.random() * 7) + 1);
  index5 = (Math.floor(Math.random() * 7) + 1);
  index6 = (Math.floor(Math.random() * 7) + 1);
  index7 = (Math.floor(Math.random() * 7) + 1);

  randcolor: string[] = [this.colors[this.index0], this.colors[this.index1], this.colors[this.index2], this.colors[this.index3], this.colors[this.index4], this.colors[this.index5], this.colors[this.index6], this.colors[this.index7]];

 color0 = this.colors[this.index0];
 color1 = this.colors[this.index1];
 color2 = this.colors[this.index2];
 color3 = this.colors[this.index3];
 color4 = this.colors[this.index4];
 color5 = this.colors[this.index5];
 color6 = this.colors[this.index6];
 color7 = this.colors[this.index7];
}
