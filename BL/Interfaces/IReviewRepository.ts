import { ReviewModel } from "../Models/ReviewModel";

export interface IReviewRepository{
    Create(Review: ReviewModel): void;
    DeleteById(id: number): void;
    GetAll(idPost: number): ReviewModel[];
}