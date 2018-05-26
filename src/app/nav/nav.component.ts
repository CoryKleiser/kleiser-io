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

  constructor() { }

  ngOnInit() {
    this.showNav = false;
    this.home = document.getElementById('into');
    this.about = document.getElementById('about');
    this.work = document.getElementById('work');
    this.contact = document.getElementById('contact');
  }

  moveToHome(): void {
    this.home.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'start'});
    this.showNav = false;
  }
  moveToAbout(): void {
    this.about.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    this.showNav = false;
  }
  moveToWork(): void {
    this.work.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'start'});
    this.showNav = false;
  }
  moveToContact(): void {
    this.contact.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'start'});
    this.showNav = false;
  }

}
