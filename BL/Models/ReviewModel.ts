export class ReviewModel{
    id: number;
    authorID: number;
    postID: number;
    textData: string;
    publishDate: string;

    constructor(id: number, authorID: number, postID: number,
                textData: string, publishDate: string){
    this.id = id;
    this.authorID = authorID;
    this.postID = postID;
    this.textData = textData;
    this.publishDate = publishDate;
    }

    getId(){return this.id};
    getAuthorID(){return this.authorID};
    getPostID(){return this.postID}
    getTextData(){return this.textData};
    getPublishDate(){return this.publishDate};

    setId(id: number){this.id = id};
    setAuthorID(authorID: number){this.authorID = authorID};
    setPostID(postID: number){this.postID = postID};
    setTextData(textData: string){this.textData = textData};
    setPublishDate(publishDate: string){this.publishDate = publishDate};
}