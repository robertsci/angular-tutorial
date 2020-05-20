import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-binding',
  templateUrl: './app-binding.component.html',
  styleUrls: ['./app-binding.component.css']
})
export class AppBindingComponent implements OnInit {

  username: string = "";
  allowReset: boolean = this.username === '';
  constructor() { }

  ngOnInit(): void {
  }

  onClickReset(): void {
      this.username = "";
      this.allowReset = false;
  }



}
