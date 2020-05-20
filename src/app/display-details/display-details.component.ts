import { Component, OnInit } from '@angular/core';
import {timestamp} from "rxjs/operators";

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {

  showSecret: boolean = false;
  rows: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  addNewRow(): void {

    this.rows.push(timestamp())
  }

  onToggleDetails() {
    this.rows.push(this.rows.length + 1);
    return this.showSecret = !this.showSecret
  }
}
