import { IAuthorRepository } from "./Interfaces/IAuthorRepository";
import { PostService } from "./PostService";
import { ReviewService } from "./ReviewService";

export abstract class BaseAccountService{
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
}