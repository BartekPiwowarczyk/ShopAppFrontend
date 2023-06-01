export interface AdminProductUpdate {
  productId: number,
  name: string,
  description: string,
  fullDescription: string,
  categoryId: number,
  price: number,
  currency: string
  image: string
  slug:string
}