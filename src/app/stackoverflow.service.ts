import { Injectable } from '@angular/core';

import { fetch } from '../../node_modules/node-fetch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StackoverflowService {

  constructor() { }

  async fetchFromStackoverflow(method: string = ''): Observable {
    const url = `https://api.stackexchange.com/2.2/users/6713829/${method}?site=stackoverflow`;
    const response = await fetch(url);
    return await response.json();
  }

  async getUserInfo(): Observable {
    const response = await this.fetchFromStackoverflow();
    const userInfo = response.items[0];
    console.log(userInfo);
    return userInfo;
  }

}
