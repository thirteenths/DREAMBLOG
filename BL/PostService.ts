import { IPostRepository } from "./Interfaces/IPostRepository";
import { PostModel } from "./Models/PostModel";

export class PostService{
    PostRepository: IPostRepository;

    constructor(PostRepository: IPostRepository){
        this.PostRepository = PostRepository;
    }

    CreatePost(Post: PostModel): void{
        this.PostRepository.Create(Post);
    }

    DeletePost(id: number):void{
        this.PostRepository.DeleteById(id);
    }

    GetAllPost(): PostModel[]{
        return this.PostRepository.GetAll();
    }

    AddLike(Post: PostModel):void{
        Post.rating++;
        this.PostRepository.Update(Post);
    }
}