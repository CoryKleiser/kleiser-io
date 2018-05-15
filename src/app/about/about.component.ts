import { Component, OnInit } from '@angular/core';

import { StackoverflowService } from '../stackoverflow.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  userInfo: Object;

  constructor(private soService: StackoverflowService) { }

  ngOnInit() {
    this.showSoUserInfo();
  }

  showSoUserInfo(): void {
    this.soService.getUserInfo()
      .subscribe(userInfo => this.userInfo = userInfo);
  }


}
