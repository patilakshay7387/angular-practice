import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  openSideBarMenuHandler = false;
  constructor() { }

  ngOnInit(): void {
  }
  openSideBarMenu() {
    this.openSideBarMenuHandler = !this.openSideBarMenuHandler;
    var menu = document.getElementById('menus');
    if (this.openSideBarMenuHandler) {
      menu.style.width = '72px';
    } else {
      menu.style.width = '240px';
    }
    console.log('openSideBarMenu', this.openSideBarMenuHandler);
  }
}
