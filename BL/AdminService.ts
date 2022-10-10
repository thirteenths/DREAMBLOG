import { AuthorService } from "./AuthorService";
import { IAuthorRepository } from "./Interfaces/IAuthorRepository";
import { PostService } from "./PostService";
import { ReviewService } from "./ReviewService";


export class AdminService extends AuthorService{

    constructor(AuthorRepository: IAuthorRepository,
         PostService: PostService,
          ReviewService: ReviewService){
        super(AuthorRepository, PostService, ReviewService);
    }

    DeleteAuthor(id: number): void{
        this.AuthorRepository.DeleteById(id);
    }

    DeletePost(id: number): void{
        this.PostService.DeletePost(id);
    }

    DeleteReview(id: number): void{
        this.ReviewService.DeleteReview(id);
    }
}