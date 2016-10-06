import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ApplyNowService {

  constructor() { }


  saveInformationToStorage (data) {


    if(localStorage.getItem('applicationInformation') === null) {

      localStorage.setItem('applicationInformation', JSON.stringify(data));
    } else {

      var localStorageData = JSON.parse(localStorage.getItem('applicationInformation'));
      data  = _.merge(data, localStorageData);
      localStorage.setItem('applicationInformation', JSON.stringify(data));
    }

  }

  getInformationFromStorage () {

    return JSON.parse(localStorage.getItem('applicationInformation'));
  }

}
