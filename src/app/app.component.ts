import {Component, OnInit} from '@angular/core';
import {MenuComponent} from './components/shared/menu/menu.component';
import 'rxjs/add/operator/filter';
import {CurrentViewService} from "./services/current-view.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss', './app.component.css'],
    directives: [MenuComponent],
    providers: [CurrentViewService]
})
export class AppComponent implements OnInit {

    homePageClass: string;

    constructor(private _currentViewService: CurrentViewService) {

    }

    ngOnInit() {

        this._currentViewService.getView()
            .subscribe((_event: Event) => {

                this.homePageClass = this._currentViewService.addHeroClassToHomePage(_event.url);
            });


    }
}

