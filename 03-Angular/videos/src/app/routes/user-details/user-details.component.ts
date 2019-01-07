import { Component, OnInit } from '@angular/core';
import {
  UserServiceService,
  User
} from 'src/app/services/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(
    private readonly _userService: UserServiceService,
    private readonly _route: ActivatedRoute
  ) {}

  ngOnInit() {
    const $activeRoute = this._route.params;
    $activeRoute.subscribe(parameters => {
      console.log(parameters);
      const user = this._userService.find(parseInt(parameters.userId));
      console.log(user);
      this.user = user;
    });
  }
}
