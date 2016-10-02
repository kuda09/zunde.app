import {Component, OnInit} from '@angular/core';
import {MenuComponent} from './components/shared/menu/menu.component';
import 'rxjs/add/operator/filter';
import {CurrentViewService} from "./services/current-view.service";
import {AuthService} from "./services/auth-service.service";
import {UserService} from "./services/user-service.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss', './app.component.css'],
    providers: [CurrentViewService, AuthService, UserService]
})
export class AppComponent implements OnInit {

    homePageClass: string;

    constructor(private _currentViewService: CurrentViewService,
                private router: Router,
                private _authService: AuthService,
                private _userService: UserService) {

    }

    ngOnInit() {

        if (this._authService.isLoggedIn()) {

            this._authService.getProfile();
        }
        //noinspection TypeScriptUnresolvedFunction
        this._currentViewService.getView()
            .subscribe((_event) => {

                let url: string = _event.url;

                this.homePageClass = this._currentViewService.addHeroClassToHomePage(url);
            });


    }


}

