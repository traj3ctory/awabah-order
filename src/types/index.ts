interface Pizza {
  type: string;
  quantity: number;
  size: string;
}
interface User {
  [key: string]: string;
}

export type { Pizza, User };
