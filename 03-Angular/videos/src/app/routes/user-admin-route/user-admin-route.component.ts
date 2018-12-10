import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-admin-route",
  templateUrl: "./user-admin-route.component.html",
  styleUrls: ["./user-admin-route.component.scss"]
})
export class UserAdminRouteComponent implements OnInit {
  users: User[] = [
    {
      id: 1,
      name: "Francisco"
    },
    {
      id: 2,
      name: "David"
    }
  ];

  constructor() {}

  ngOnInit() {}

  imprimir = (user: User) => {
    console.log("Imprimir", user);
    const index = this.users.findIndex(userAux => {
      return user.id == userAux.id;
    });
    this.users.splice(index, 1);
  };
}

interface User {
  id?: number;
  name?: string;
}
