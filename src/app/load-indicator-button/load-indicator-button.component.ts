import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {sanitizeHtml} from '@angular/core/src/sanitization/sanitization';

@Component({
  selector: 'app-load-indicator-button',
  templateUrl: './load-indicator-button.component.html',
  styleUrls: ['./load-indicator-button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoadIndicatorButtonComponent implements OnInit {

  @Input('text') buttonText: string;
  @Input('current-lifecycle') currentLifecycle: 'dormant' | 'waiting' | 'success' | 'error';
  @Input('disabled') disabled: boolean;
  @Input('class') classString: string;
  @Input('attributes') attributes: object;
  @Input('dot-color') dotColor: string;
  @Output() clicked = new EventEmitter;

  get waiting() {
    return this.currentLifecycle === 'waiting' ? true : false;
  }

  loadIndicator: any;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.loadIndicator = `<div style="background:${this.dotColor}">+</div><div style="background:${this.dotColor}">+</div><div style="background:${this.dotColor}">+</div>`;
    this.currentLifecycle = 'dormant';
    // set custom attributes
    const buttonEl = document.querySelector('#load-indicator-button');
    if (this.attributes) {
      for (const attr of Object.keys(this.attributes)) {
        buttonEl.setAttribute(attr, this.attributes[attr]);
      }
    }
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  clickHandler() {
    this.clicked.emit();
    this.currentLifecycle = 'waiting';
  }

}
