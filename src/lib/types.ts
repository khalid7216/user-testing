export interface Author {
  id: number;
  name: string;
  avatar: string;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: Author;
  date: string;
  readTime: string;
  commentsCount: number;
  viewsCount: number;
  featured?: boolean;
  tags: string[];
  content: string[];
}
