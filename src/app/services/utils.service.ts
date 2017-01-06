import {Injectable} from '@angular/core';

@Injectable()
export class UtilsService {


  constructor()


  checkBoxRequired(group){

    var valid = false;

    for (name in group.controls) {

      var val = group.controls[name].value;

      if (val) {
        valid = true;
        break;
      }
    }

    if (valid) {
      return null;
    }

    return {
      checkboxRequired: true
    };
  }

}
