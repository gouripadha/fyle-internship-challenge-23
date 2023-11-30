import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent {
  username: string = 'johnpapa';
  name: string = 'John Doe';
  url: string = 'https://github.com/TheCalculas';
  bio: string = 'bio goes here';
  location: string = 'india';
  twitter: string = 'twitter_handle';
  followers: number = 6;
  following: number = 6;
  repositories: number = 3;
}
