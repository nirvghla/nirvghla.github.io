import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Menudata} from "./menudata";
@Injectable()
export class MenudataService {

  constructor(private http: Http) {
  }
  getMenudata(): Observable<Menudata[]> {
    return this.http.get("./assets/data/menuData.json")
       .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
 }
}
