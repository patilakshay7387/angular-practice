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
    console.log(this.openModal)
    if (!this.openModal) {
      this.openNav();
    } else {
      this.closeNav()
    }
  }
  ngOnInit(): void {
    
  }

  

  openNav() {
     console.log("called")
    document.getElementById("mySidebar").style.width = "240px";
    document.getElementById("main").style.marginLeft = "240px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
   closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}
