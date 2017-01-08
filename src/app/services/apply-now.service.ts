import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ApplyNowService {

  constructor() { }


  saveInformationToStorage (data) {

    var applicationInformation = localStorage.getItem('applicationInformation');

    if(applicationInformation === null) {

      localStorage.setItem('applicationInformation', JSON.stringify(data));

    } else {

      var localStorageData = JSON.parse(applicationInformation);

      data  = _.merge(data, localStorageData);

      localStorage.setItem('applicationInformation', JSON.stringify(data));
    }

  }

  getInformationFromStorage () {

    return JSON.parse(localStorage.getItem('applicationInformation'));
  }

}
