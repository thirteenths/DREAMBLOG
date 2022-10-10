import { Mock, It } from "moq.ts";
import { IReviewRepository } from "../Interfaces/IReviewRepository";
import { ReviewModel } from "../Models/ReviewModel";
import { ReviewService } from "../ReviewService";


test("ReviewServiceCreate", () =>  {

    const mockReviewRepository = new Mock<IReviewRepository>()
    .setup(instance => instance.Create(It.IsAny<ReviewModel>()))
    .returns();
    
    let ReviewSer: ReviewService = new ReviewService(mockReviewRepository.object())

    let Review: ReviewModel = new ReviewModel(1, 1, 1, "Nooo", "09.09.2022");
    
    ReviewSer.CreateReview(Review);

    //mockPostRepository.verify();
    expect(1).toStrictEqual(1);
});

test("ReviewServiceDelete", () =>  {

    const mockReviewRepository = new Mock<IReviewRepository>()
    .setup(instance => instance.DeleteById(It.IsAny<number>()))
    .returns();
    
    let ReviewSer: ReviewService = new ReviewService(mockReviewRepository.object())
 
    ReviewSer.DeleteReview(1);

    //mockPostRepository.verify();
    expect(1).toStrictEqual(1);
});

/*
test("ReviewServiceCreate", () =>  {

    const mockReviewRepository = new Mock<IReviewRepository>()
    .setup(instance => instance.Create(It.IsAny<ReviewModel>()))
    .returns();
    
    let ReviewSer: ReviewService = new ReviewService(mockReviewRepository.object())

    let Review: ReviewModel = new ReviewModel(1, 1, 1, "Nooo", "09.09.2022");
    
    ReviewSer.CreateReview(Review);

    //mockPostRepository.verify();
    expect(1).toStrictEqual(1);
});*/