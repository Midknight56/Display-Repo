export interface Repository {
  [name: string]: any;
  id: string;
  commits_url: string;
  url: string;
  language: string;
  description: string;
  name: string;
  size: number;
  watchers: number;
  forks: number;
  created_at: number;
  open_issues: number;
  owner: {
    id: string;
    avatar_url: string;
    login: string;
    type: string;
  };
}

export interface SortActionEvent {
  originalEvent: Event;
  value: string;
}
