import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsernameInputComponent } from './username-input/username-input.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { ProfileHeaderComponent } from './github-profile/profile-header/profile-header.component';
import { RepositoryListComponent } from './github-profile/repository-list/repository-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameInputComponent,
    GithubProfileComponent,
    ProfileHeaderComponent,
    RepositoryListComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
