import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from './repos.model';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(private http: HttpClient) { }
/**
 * Gets the first 100 repository from a user
 * @param [page] 
 * @param [perPage] 
 * @returns repos 
 */
getRepos(page: number = 1, perPage: number = 100): Observable<Repository[]> {
  // TODO: Impliment pagination. Github wraps pagination in their header...
    return this.http.get<Repository[]>(`https://api.github.com/orgs/dotnet/repos?page=${page}&per_page=${perPage}`);
  }
}
