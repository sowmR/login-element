import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  EventEmitter,
  Output
} from "@angular/core";
import { logging } from "protractor";
import { async } from "q";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent implements OnInit {
  username: string;
  password: string;
  isAuthenticated: boolean;

  title = "login-element";

  @Input()
  isloggedin: boolean;
  @Input()
  logMessage: any;
  @Output()
  loginData = new EventEmitter<any>();

  login(uname, pwd) {
    this.loginData.emit({ user: uname, pass: pwd });
  }
  ngOnInit() {
    this.isAuthenticated = this.isloggedin || false;
  }
}
