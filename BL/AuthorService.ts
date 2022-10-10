import { BaseAccountService } from "./BaseAccountService";
import { PostService } from "./PostService";
import { ReviewService } from "./ReviewService";
import { IAuthorRepository } from "./Interfaces/IAuthorRepository";
import { AuthorModel } from "./Models/AuthorModel";
import { PostModel } from "./Models/PostModel";
import { ReviewModel } from "./Models/ReviewModel";

export class AuthorService implements BaseAccountService{
    AuthorRepository: IAuthorRepository;
    PostService: PostService;
    ReviewService: ReviewService;

    constructor(AuthorRepository: IAuthorRepository,
                PostService: PostService,
                ReviewService: ReviewService){
        this.AuthorRepository = AuthorRepository;
        this.PostService = PostService;
        this.ReviewService = ReviewService;
    }

    SingUpAccount(data: any): void{
        let Author = new AuthorModel(-1, data.nikname,
            data.login, data.password);


        this.AuthorRepository.Create(Author);
    }

    SingInAccount(data: any): number{
        let Account: AuthorModel = this.AuthorRepository.TakeByLogin(data.login);
        if (data.password == Account.password)
            return 0;
        return -1;
    }

    GetAllPost():PostModel[]{
        return this.PostService.GetAllPost();
    }

    GetAllReview(idPost: number):ReviewModel[]{
        return this.ReviewService.GetAllReview(idPost);
    }


    CreatePost(data: any):void{
        let Post = new PostModel(-1, data.authorID, data.textData,
            data.publishDate, 0);

        this.PostService.CreatePost(Post);
    }

    CreateReview(data: any): void{
        let Review = new ReviewModel(-1, data.authorID, data.postID,
            data.textData, data.publishDate);

        this.ReviewService.CreateReview(Review);    
    }

    AddLike(id: number): void{
        let Post: PostModel = this.PostService.PostRepository.TakeById(id);
        this.PostService.PostRepository.Update(Post);
    }
    
    SingOut():void{
        return;
    }
}