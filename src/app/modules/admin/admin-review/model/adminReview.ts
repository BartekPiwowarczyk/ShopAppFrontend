export interface AdminReview {
  reviewId: number;
  productId: number;
  authorName: string;
  content: string;
  moderated: boolean;
}