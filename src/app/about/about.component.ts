import { Component, OnInit } from '@angular/core';

import { StackoverflowService } from '../stackoverflow.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  userInfo: Object;
  topTags: Array<object>;

  constructor(private soService: StackoverflowService) { }

  ngOnInit() {
    this.showSoUserInfo();
    this.showSoTopTags();
  }

  showSoUserInfo(): void {
    this.soService.getUserInfo()
      .subscribe(userInfo => this.userInfo = userInfo.items[0]);
  }

  showSoTopTags(): void {
    this.soService.getTopTags()
      .subscribe(topTags => this.topTags = topTags.items.slice(0, 4));
  }

}
