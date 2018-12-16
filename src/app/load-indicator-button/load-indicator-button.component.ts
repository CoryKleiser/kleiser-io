import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-load-indicator-button',
  templateUrl: './load-indicator-button.component.html',
  styleUrls: ['./load-indicator-button.component.css']
})
export class LoadIndicatorButtonComponent implements OnInit {

  @Input('text') buttonText: string;

  constructor() { }

  ngOnInit() {
  }

}
