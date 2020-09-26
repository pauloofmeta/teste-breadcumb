import { NgModule, ModuleWithProviders } from "@angular/core";
import { UserComponent } from "./user.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { UserToolsComponent } from "./user-tools.component";

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: UserComponent,
    data: {
      breadcrumb: null
    }
  },
  {
    path: 'tools',
    component: UserToolsComponent,
    data: {
      breadcrumb: 'Tools'
    }
  }
]);

@NgModule({
  declarations: [
    UserComponent,
    UserToolsComponent
  ],
  imports: [
    CommonModule,
    routing
  ]
})
export class UserModule {}