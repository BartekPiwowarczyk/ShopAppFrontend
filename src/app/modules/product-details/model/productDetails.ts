import { Review } from "./review"

export interface ProductDetails {
  productId: number
  name: string,
  description: string,
  fullDescription: string,
  category: string,
  price: number,
  currency: string,
  image:string,
  slug:string,
  reviews: Array<Review>
}