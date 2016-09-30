import {Component, OnInit} from '@angular/core';
import {MenuComponent} from './components/shared/menu/menu.component';
import 'rxjs/add/operator/filter';
import {CurrentViewService} from "./services/current-view.service";
import {AuthService} from "./services/auth-service.service";
import {UserServiceService} from "./services/user-service.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss', './app.component.css'],
    directives: [MenuComponent],
    providers: [CurrentViewService, AuthService, UserServiceService]
})
export class AppComponent implements OnInit {

    homePageClass: string;

    constructor(private _currentViewService: CurrentViewService, private router: Router) {

    }

    ngOnInit() {

        this._currentViewService.getView()
            .subscribe((_event: Event) => {

                let url: string = _event.url;

                this.homePageClass = this._currentViewService.addHeroClassToHomePage(url);
            });


    }


}

