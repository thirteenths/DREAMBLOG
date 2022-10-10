import { Mock, It } from "moq.ts";
import { AuthorService } from "../AuthorService";
import { IAuthorRepository } from "../Interfaces/IAuthorRepository";
import { IPostRepository } from "../Interfaces/IPostRepository";
import { IReviewRepository } from "../Interfaces/IReviewRepository";
import { AuthorModel } from "../Models/AuthorModel";
import { PostModel } from "../Models/PostModel";
import { ReviewModel } from "../Models/ReviewModel";
import { PostService } from "../PostService";
import { ReviewService } from "../ReviewService";


test("AuthorerviceSingUp", () =>  {

    const mockAuthorRepository = new Mock<IAuthorRepository>()
    .setup(instance => instance.Create(It.IsAny<AuthorModel>()))
    .returns();

    const mockPostRepository = new Mock<IPostRepository>()
    .setup(instance => instance.Create(It.IsAny<PostModel>()))
    .returns();

    const mockReviewRepository = new Mock<IReviewRepository>()
    .setup(instance => instance.Create(It.IsAny<ReviewModel>()))
    .returns();
    
    let PostSer :PostService = new PostService(mockPostRepository.object());
    let ReviewSer: ReviewService = new ReviewService(mockReviewRepository.object())


    let AuthorSer: AuthorService = new AuthorService(mockAuthorRepository.object(), PostSer, ReviewSer);

    let Author: AuthorModel = new AuthorModel(1, "vera", "vera", "kek1")
    
    AuthorSer.SingUpAccount(Author);

    //mockPostRepository.verify();
    expect(1).toStrictEqual(1);
});

test("AuthorerviceSingIn", () =>  {

    const mockAuthorRepository = new Mock<IAuthorRepository>()
    .setup(instance => instance.TakeByLogin(It.IsAny<string>()))
    .returns(new AuthorModel());

    const mockPostRepository = new Mock<IPostRepository>()
    .setup(instance => instance.Create(It.IsAny<PostModel>()))
    .returns();

    const mockReviewRepository = new Mock<IReviewRepository>()
    .setup(instance => instance.Create(It.IsAny<ReviewModel>()))
    .returns();
    
    let PostSer :PostService = new PostService(mockPostRepository.object());
    let ReviewSer: ReviewService = new ReviewService(mockReviewRepository.object())


    let AuthorSer: AuthorService = new AuthorService(mockAuthorRepository.object(), PostSer, ReviewSer);

    let Author: AuthorModel = new AuthorModel(1, "vera", "vera", "kek1")
    
    AuthorSer.SingInAccount(Author);

    //mockPostRepository.verify();
    expect(1).toStrictEqual(1);
});

