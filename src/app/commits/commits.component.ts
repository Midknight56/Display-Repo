import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Commits } from './commits.model';
import { CommitsService } from './commits.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss'],
})
export class CommitsComponent implements OnInit {
  @Input() owner: string | undefined
  @Input() repo: string | undefined
  @ViewChild("op") overlay: OverlayPanel | undefined;

  commits: Commits[] = [];
  constructor(private commitsService: CommitsService) {}

  ngOnInit(): void {
    this.commitsService.getCommits(this.owner, this.repo).subscribe((commits) => {
      this.commits = commits;
    });
  }

  visitCommit(url: string) {
      window.open(url);
  }
}
