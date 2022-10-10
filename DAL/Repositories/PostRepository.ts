import { ObjectId, ObjectIdExtended } from "bson";
import { MongoConnect } from "../ConnectionMongo";
import { IPostRepository } from "../Interfaces/IPostRepository";
import { PostModel } from "../Models/PostModel";

export class PostRepository implements IPostRepository{
    private conn: MongoConnect;
    nameCollection: string = "posts";

    constructor(){
        this.conn = new MongoConnect(this.nameCollection);
    }

    Create(Post: PostModel): void{
        this.conn.Collection?.insertOne({authorID: Post.authorID, TextData: Post.textData, publishDate: Post.publishDate});
    };

    DeleteById(id: number): void{
        this.conn.Collection?.deleteOne({id: id});
    };

    /*
    AddLike(id: number): void{
        let postin: any = this.conn.Collection?.findOne({id: id});
        let postOut: PostModel = new PostModel(postin.authorID, postin.textData, postin.public, postin.id);
        this.conn.Collection?.updateOne(postin.id, {});
    };*/

    async TakeById(authorID: number): Promise<PostModel> {
        const Postany: any = await this.conn.Collection?.findOne({authorID: authorID})
        let Post: PostModel = new PostModel(Postany.authorID, Postany.textData,
            Postany.publishDate);

        return Post;
    }

    Update(Post: PostModel): void {
        
    }

    GetAll(): PostModel[]{
        let Posts: any = this.conn.Collection?.find({}).toArray();
        for (let i = 0; i < Posts.length; i++){
            console.log(Posts[i]);
        }
        return Posts;
    };
}