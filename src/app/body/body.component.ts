import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { BodydataService } from '../bodydata.service';
import * as jQuery from 'jquery';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements AfterViewInit  {

    bodyData;
    carElement: any;
  
    constructor(private menudataService: BodydataService) {}

  
    ngAfterViewInit() {
      this.menudataService.getMenudata().subscribe(p=>this.bodyData = p);
    }
}
