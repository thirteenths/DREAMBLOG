import { ObjectId } from "mongodb";

export class PostModel{
    id?: ObjectId;
    authorID: number;
    textData: string;
    publishDate: string;

    constructor( authorID: number,
                textData: string, publishDate: string, id?: ObjectId){
    this.id = id;
    this.authorID = authorID;
    this.textData = textData;
    this.publishDate = publishDate;
    }

    getId(){return this.id};
    getAuthorID(){return this.authorID};
    getTextData(){return this.textData};
    getPublishDate(){return this.publishDate};

    //setId(id: number){this.id = id};
    setAuthorID(authorID: number){this.authorID = authorID};
    setTextData(textData: string){this.textData = textData};
    setPublishDate(publishDate: string){this.publishDate = publishDate};
}