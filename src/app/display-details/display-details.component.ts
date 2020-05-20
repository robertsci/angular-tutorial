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
  n: number = this.rows.index
  constructor() { }

  ngOnInit(): void {
  }

  addNewRow(): void {

    this.rows.push(timestamp())
  }

  onToggleDetails(): boolean {
    this.rows.push(new Date());
    return this.showSecret = !this.showSecret;
  }

  getRowsNumber(): number {
    return this.rows.index;
  }
}
