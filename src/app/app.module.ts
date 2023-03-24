import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, UsersModule, PostsModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
