export interface AdminProductUpdate {
  productId: number,
  name: string,
  description: string,
  fullDescription: string,
  category: string,
  price: number,
  currency: string
  image: string
  slug:string
}