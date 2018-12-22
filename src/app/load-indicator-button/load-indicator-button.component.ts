import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-load-indicator-button',
  templateUrl: './load-indicator-button.component.html',
  styleUrls: ['./load-indicator-button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoadIndicatorButtonComponent implements OnInit {

  @Input('text') buttonText: string;
  @Input('success') currentLifecycle: 'dormant' | 'waiting' | 'success' | 'error';
  @Output() clicked = new EventEmitter;

  get waiting() {
    return this.currentLifecycle === 'waiting' ? true : false;
  }

  loadIndicator: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.loadIndicator = '<div>+</div><div>+</div><div>+</div>';
    this.currentLifecycle = 'dormant';
  }

  sanitizeHtml(html: string): SafeHtml {
    return html;
  }

  clickHandler() {
    this.clicked.emit();
    this.currentLifecycle = 'waiting';
  }

}
