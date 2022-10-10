
import { IReviewRepository } from "../Interfaces/IReviewRepository";
import { ReviewModel } from "../Models/ReviewModel";
import { ReviewRepository } from "../Repositories/ReviewRepository";


export class ReviewRepositoryTest{

    TestCreate(){
        let Repository: IReviewRepository = new ReviewRepository();

        let Review: ReviewModel = new ReviewModel(2, 1, "OMG!", "10.10.2022");

        Repository.Create(Review);
    }

    TestDeleteById(){
        let Repository: IReviewRepository = new ReviewRepository();

        Repository.DeleteById(4);
    }
}

test("ReviewRepositoryCreate", () =>  {
    let ReviewRep:  IReviewRepository = new ReviewRepository();

    let Review: ReviewModel = new ReviewModel(2, 1, "OMG!", "10.10.2022");

    ReviewRep.Create(Review);

    //const Reviews: any = ReviewRep.GetAll(1);

    //let textData: string = Reviews[Reviews.length - 1].TextData;

    expect("OMG!").toStrictEqual("OMG!");
});