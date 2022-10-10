import { MongoConnect } from "../ConnectionMongo";
import { IReviewRepository } from "../Interfaces/IReviewRepository";
import { ReviewModel } from "../Models/ReviewModel";


export class ReviewRepository implements IReviewRepository{
    private conn: MongoConnect;
    nameCollection: string = "reviews";

    constructor(){
        this.conn = new MongoConnect(this.nameCollection);
    }

    Create(Review: ReviewModel): void{
        this.conn.Collection?.insertOne({authorID: Review.authorID, postID: Review.postID, TextData: Review.textData, publishDate: Review.publishDate});
    };

    DeleteById(id: number): void{
        this.conn.Collection?.deleteOne({id: id});
    };

    async GetAll(idPost: number): Promise<ReviewModel[]>{
        const Review: any = await this.conn.Collection?.find({postID: idPost}).toArray();

        //console.log(Review[0])

        return Review;
    };
}