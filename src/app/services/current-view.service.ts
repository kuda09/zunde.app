import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import {Router, ActivatedRoute, NavigationStart, Event as NavigationEvent} from '@angular/router';


@Injectable()

export class CurrentViewService {

  heroViews: string[] = ['business-loans', 'why-us', 'about-us', 'partner-with-us'];

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {

  }

  getView () {

    return this._router.events
        .filter(event => event instanceof NavigationStart)
  }


  addHeroClassToHomePage(url) {

    var removeForwardSlashFromUrl = url.replace(/\//, '');

    if (removeForwardSlashFromUrl == '') return 'hero';

    if (this.heroViews.indexOf(removeForwardSlashFromUrl) !== -1) {

      return `hero ${removeForwardSlashFromUrl}`;
    }

    return `remove-hero ${removeForwardSlashFromUrl}`;
  }

}
