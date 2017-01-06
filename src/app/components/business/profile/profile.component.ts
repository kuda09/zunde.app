import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: Object = null;

  constructor(private _userService: UserService) {}

  ngOnInit() {

      this.user = this._userService.getUser();

  }

}
