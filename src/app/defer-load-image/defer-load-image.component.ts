import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-defer-load-image',
  templateUrl: './defer-load-image.component.html'
})
export class DeferLoadImageComponent {
  @Input('src') src: string;
  @Input('alt') alt: string;
  @Input('class') classList: string;
  @Input('data-test') testSelector: string;

  showImage?: boolean;


  constructor() { }

}
