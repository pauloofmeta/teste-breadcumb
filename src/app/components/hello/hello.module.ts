import { NgModule, ModuleWithProviders } from "@angular/core";
import { HelloComponent } from "./hello.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

export const routting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HelloComponent,
    data: {
      breadcrumb: 'Hello'
    }
  }
]);
@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule,
    routting
  ]
})
export class HelloModule {}