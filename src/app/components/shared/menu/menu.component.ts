import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
/*
import {ROUTER_DIRECTIVES, CanActivate, OnActivate} from '@angular/router';
*/
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {CurrentViewService} from "../../../services/current-view.service";
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    providers: [CurrentViewService,]
})
export class MenuComponent implements OnInit {

    homePageClass: string;
    hiddenItems: boolean = false;
    showDropdown: boolean = false;
    secureViews: string[] = ['sign-in', 'apply-now'];
    user: Object = {};

    constructor(private _currentViewService: CurrentViewService,
                private _authService: AuthService,
                private _userService: UserService,
                private _router: Router) {

        var self = this;

        _router.events.subscribe(event => {

            self._currentViewService.getView()
                .subscribe((_event) => {

                    self.homePageClass = self._currentViewService.addHeroClassToHomePage(_event.url);

                    self.secureViews
                        .filter(view => this.homePageClass.indexOf(view) !== -1)
                        .map((view) => {

                            self.hiddenItems = true;
                        })
                });

        })
    }


    ngOnInit() {

        var self = this;

        self._currentViewService.getView()
            .subscribe((_event) => {

                self.homePageClass = self._currentViewService.addHeroClassToHomePage(_event.url);

                self.secureViews
                    .filter(view => this.homePageClass.indexOf(view) !== -1)
                    .map((view) => {

                        self.hiddenItems = true;
                    })
            });


        if (self._authService.isLoggedIn()) {

            if (self._userService.getUser() !== null) {

                self.user = self._userService.getUser();
            }

        }

    }

    logOut() {

        this._authService.logout();
    }

    activeDropDown() {

        return this.showDropdown = this.showDropdown ? false : true;
    }


}
