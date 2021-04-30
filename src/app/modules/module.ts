
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ExploreComponent } from './explore/explore.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ComponentModule } from '../components/component.module';


const COMPONENTS = [HomePageComponent , ExploreComponent ];
@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, ComponentModule],
  exports: COMPONENTS,
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PageModule {}