export interface Commits {
  author: {
    avatar_url: string;
    login: string;
    type: string;
  };
  commit: {
    author: {
      date: string;
      email: string;
      name: string;
    };
    message: string;
    url: string;
  };
  comments_url: string;
  html_url: string;
}
