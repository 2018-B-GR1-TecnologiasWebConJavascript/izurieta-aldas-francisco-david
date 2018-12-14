import { Component, OnInit } from "@angular/core";
import {
  UserServiceService,
  User
} from "src/app/services/user-service.service";

@Component({
  selector: "app-user-admin-route",
  templateUrl: "./user-admin-route.component.html",
  styleUrls: ["./user-admin-route.component.scss"]
})
export class UserAdminRouteComponent implements OnInit {
  users: User[] = [];

  constructor(private readonly _userService: UserServiceService) {}

  ngOnInit() {
    this.users = this._userService.users;
  }

  delete(user: User) {
    this._userService.delete(user.id);
  }
}
