import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './components/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

const routing: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'hello',
    loadChildren: () => import(`./components/hello/hello.module`).then(m => m.HelloModule)
  },
  {
    path: 'user',
    loadChildren: () => import(`./components/user/user.module`).then(m => m.UserModule),
    data: {
      breadcrumb: 'User'
    }
  }
], {useHash: true});

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, CommonModule ],
  declarations: [ 
    AppComponent,
    BreadcrumbComponent,
    HomeComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
