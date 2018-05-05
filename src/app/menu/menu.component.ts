import { Component, OnInit } from '@angular/core';
import { MenudataService } from '../menudata.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuData;

  constructor(private menudataService: MenudataService) {
   
 }

  ngOnInit() {
    this.menudataService.getMenudata().subscribe(p=>this.menuData = p);
  }

}
