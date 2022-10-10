import { PostModel } from "../Models/PostModel";

export interface IPostRepository{
    Create(Post: PostModel): void;
    DeleteById(id: number): void;
    TakeById(authorID: number):Promise<PostModel>;
    Update(Post:PostModel):void;
    //AddLike(id: number): void;
    GetAll(): PostModel[];
}