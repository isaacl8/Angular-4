import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  p_level= "";
 onSubmit(){
     this.p_level = this.p_level;
     console.log(this.p_level)
}

}
