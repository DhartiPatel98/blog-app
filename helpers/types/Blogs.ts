export type Blog = {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
};

export interface IBlogList {
  blogList: Array<Blog>;
}
