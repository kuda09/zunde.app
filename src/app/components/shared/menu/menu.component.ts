import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {CurrentViewService} from "../../../services/current-view.service";
import {UserServiceService} from "../../../services/user-service.service";
import {User} from "../../../models/user";
import {AuthServiceService} from "../../../services/auth-service.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [CurrentViewService, UserServiceService,]
})
export class MenuComponent implements OnInit {

  homePageClass: string;
  hiddenItems: boolean = false;
  secureViews: string[] = ['sign-in', 'apply-now'];
  users: User[] = [];
  showUser: boolean = false;

  constructor(private _currentViewService: CurrentViewService, private _userService: UserServiceService, private _authService: AuthServiceService) {
  }

  ngOnInit() {

    var self = this;

    self._currentViewService.getView()
      .subscribe((_event: Event) => {

        self.homePageClass = self._currentViewService.addHeroClassToHomePage(_event.url);

        self.secureViews
          .filter(view => this.homePageClass.indexOf(view) !== -1)
          .map((view) => {

            self.hiddenItems = true;
          })
      });


    if (this._authService.isLoggedIn()) {

      this.users = this._authService.getUser();
      this.showUser = self._authService.loggedIn;
    }

  }

  logOut() {

    this._authService.logout();
  }


}
