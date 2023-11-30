import { Component } from '@angular/core';
import { Repository } from 'src/app/models/repository';
@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent {
  repositories: Repository[];
  constructor() {
    this.repositories = [
      {
        name: 'repo1',
        url: 'url',
        description: 'description1',
        topics: ['javascript', 'angular'],
      },
      {
        name: 'repo2',
        url: 'url2',
        description: 'description2',
        topics: ['javascript', 'html', 'css'],
      },
      {
        name: 'repo3',
        url: 'url2',
        description: 'description2',
        topics: ['javascript', 'html', 'css', 'javascript', 'html', 'css'],
      },
    ];
  }
}
