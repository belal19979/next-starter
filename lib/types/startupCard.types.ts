export type StartupCardType = {
  _createdAt: string;
  views: number;
  _id: number;
  author: author;
  description: string;
  image: string;
  category: string;
  title: string;
};

type author = {
  _id: number;
  name: string;
  avatar: string;
};
