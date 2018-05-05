import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Bodydata} from "./bodydata";
@Injectable()
export class BodydataService {

  constructor(private http: Http) {
  }
  getMenudata(): Observable<Bodydata[]> {
    return this.http.get("./assets/data/bodyData.json")
       .map((res: Response) => res.json())
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
 }
}
