import { IReviewRepository } from "./Interfaces/IReviewRepository";
import { ReviewModel } from "./Models/ReviewModel";

export class ReviewService{
    ReviewRepository: IReviewRepository;

    constructor(ReviewRepository: IReviewRepository){
        this.ReviewRepository = ReviewRepository;
    }

    CreateReview(Review : ReviewModel):void{
        this.ReviewRepository.Create(Review);
    }

    DeleteReview(id: number): void{
        this.ReviewRepository.DeleteById(id);
    }

    GetAllReview(idPost: number): ReviewModel[]{
        return this.ReviewRepository.GetAll(idPost);
    }
}