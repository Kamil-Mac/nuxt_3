export interface IProduct {
  id: number;
  price: number;
  category: string;
  description: string;
  image: string;
  title: string;
  rating: {
    count: number;
    rate: number;
  };
}
