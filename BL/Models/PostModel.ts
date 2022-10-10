export class PostModel{
    id: number;
    authorID: number;
    textData: string;
    publishDate: string;
    rating: number;

    constructor(id: number, authorID: number,
                textData: string, publishDate: string,
                rating: number){
    this.id = id;
    this.authorID = authorID;
    this.textData = textData;
    this.publishDate = publishDate;
    this.rating = rating;
    }

    getId(){return this.id};
    getAuthorID(){return this.authorID};
    getTextData(){return this.textData};
    getPublishDate(){return this.publishDate};
    getRating(){return this.rating};

    setId(id: number){this.id = id};
    setAuthorID(authorID: number){this.authorID = authorID};
    setTextData(textData: string){this.textData = textData};
    setPublishDate(publishDate: string){this.publishDate = publishDate};
    setRating(rating: number){this.rating = rating};
}