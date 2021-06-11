import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commits } from './commits.model';

@Injectable({
  providedIn: 'root',
})
export class CommitsService {
  constructor(private http: HttpClient) {}

  /**
   * Gets most recent commits up to the last 30 days.
   * @param owner
   * @param repo
   * @returns commits
   */
  getCommits(
    owner: string | undefined,
    repo: string | undefined
  ): Observable<Commits[]> {
    const date = new Date();
    date.setDate(date.getDate() - 30);

    return this.http.get<Commits[]>(
      `https://api.github.com/repos/${owner}/${repo}/commits?since${date.toISOString()}`
    );
  }
}
