import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/filter';
import {CurrentViewService} from "./services/current-view.service";
import {AuthService} from "./services/auth.service";
import {UserService} from "./services/user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.component.css'],
  providers: [CurrentViewService, AuthService, UserService]
})
export class AppComponent implements OnInit {

  homePageClass: string;
  constructor(private _currentViewService: CurrentViewService) {

  }

  ngOnInit() {

    //noinspection TypeScriptUnresolvedFunction
    this._currentViewService.getView()
      .subscribe((_event) => {

        let url: string = _event.url;

        this.homePageClass = this._currentViewService.addHeroClassToHomePage(url);
      });


  }

}

