import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginModal} from "../components/modals/login.modal";
import {Observable} from "rxjs";
import * as url from "url";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }
  loginUser(data: LoginModal): Observable<any>{
    return  this.httpClient.post(environment.baseUrl+ 'user', data )
  }
}
