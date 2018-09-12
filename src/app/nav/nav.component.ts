import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  home: HTMLElement;
  about: HTMLElement;
  work: HTMLElement;
  contact: HTMLElement;
  showNav: boolean;
  userIsTouching = false;
  userCanHover = false;

  constructor() { }

  ngOnInit() {
    this.showNav = false;
    this.home = document.getElementById('intro');
    this.about = document.getElementById('about');
    this.work = document.getElementById('work');
    this.contact = document.getElementById('contact');
    const ctx = this;
    window.addEventListener('touchstart', function onFirstTouch() {
      ctx.userIsTouching = true;
      window.removeEventListener('touchstart', onFirstTouch, false);
    }, false);
    window.addEventListener('mouseover', function onFirstHover() {
      ctx.userCanHover = true;
      window.removeEventListener('mouseover', onFirstHover, false);
    }, false);
  }

  moveToHome(): void {
    this.home.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    this.showNav = false;
  }
  moveToAbout(): void {
    this.about.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    this.showNav = false;
  }
  moveToWork(): void {
    this.work.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    this.showNav = false;
  }
  moveToContact(): void {
    this.contact.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    this.showNav = false;
  }
  showNavOnTouch(): void {
    if (this.userIsTouching) {
      this.showNav = true;
    }
  }
  showNavOnHover(): void {
    if (!this.userIsTouching) {
      this.showNav = true;
    }
  }
}
