import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  implements AfterViewChecked {
  @Input() openModal :boolean;
  constructor() {
    
   }
  ngAfterViewChecked(): void {
    console.log(this.openModal);
  }
  ngOnInit(): void {
    
  }

  

  openNav() {
     console.log("called")
    document.getElementById("mySidebar").style.width = "240px";
    var menuName = document.querySelectorAll('span');
    console.log(menuName);
    menuName.forEach((item) => {
      item.style.display = 'inline';
    });
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
   closeNav() {
     document.getElementById("mySidebar").style.width = "74px";
     var menuName = document.querySelectorAll('span');
     console.log(menuName);
     menuName.forEach((item) => {
       item.style.display = 'none';
     });
  }
}
