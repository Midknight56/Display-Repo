import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { CommitsComponent } from '../commits/commits.component';
import { Repository, SortActionEvent } from './repos.model';
import { ReposService } from './repos.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit {
  lazyRepos: Repository[] = [];
  repos: Repository[] = [];
  owner: string | undefined;
  type: string | undefined;
  sortOptions: SelectItem[];
  sortKey: string = '';
  sortOrder: number = 1;
  sortField: string = '';

  constructor(private reposService: ReposService) {
    this.sortOptions = [
      { label: 'Size', value: 'size' },
      { label: 'Watchers', value: 'watchers' },
      { label: 'Forks', value: 'forks' },
      { label: 'Open Issues', value: 'open_issues' },
    ];
  }

  ngOnInit(): void {
    this.reposService.getRepos().subscribe((repos) => {
      this.repos = repos;
      this.getInfo();
    });
  }

  /**
   * Loads repos on demand
   * @param event
   * @returns
   */
  loadReposLazily(event: LazyLoadEvent) {
    const first = event?.first ?? 0;
    const rows = event?.rows ?? 0;
    if (!first || !rows) {
      return;
    }

    let loadedRepos = this.lazyRepos.slice(first, first + rows);
    this.repos = [...loadedRepos];
  }

  /**
   * Gets info of a repositor setting owner and type.
   */
  getInfo() {
    const repo = this.repos.pop();
    this.owner = repo?.owner.login;
    this.type = repo?.owner.type;
  }

  /**
   * Determines whether sort change on click
   * @param event
   */
  onSortChange(event: SortActionEvent) {
    let newSort = [...this.repos];
    newSort.sort((repoA, repoB) => {
      return repoB[event.value] - repoA[event.value];
    });
    this.repos = newSort;
  }

  /**
   * Handles displaying the commits
   * @param commitsComponent
   */
  handleDisplay(commitsComponent: CommitsComponent) {
    commitsComponent.overlay?.toggle(true);
  }
}
