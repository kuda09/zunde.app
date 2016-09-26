import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {CurrentViewService} from "../current-view.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  homePageClass: string;
  hiddenItems: boolean  = false;
  secureViews: string[] = ['sign-in', 'apply-now'];

  constructor(private _currentViewService: CurrentViewService) { }

  ngOnInit() {

    var self = this;

    self._currentViewService.getView()
        .subscribe((_event: Event) => {

          self.homePageClass = self._currentViewService.addHeroClassToHomePage(_event.url);

          self.secureViews
              .filter(view => this.homePageClass.indexOf(view) !== - 1)
              .map((view) => {

                self.hiddenItems = true;
              })


        });
  }

}
