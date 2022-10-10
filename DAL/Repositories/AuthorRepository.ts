import { MongoConnect } from "../ConnectionMongo";
import { IAuthorRepository } from "../Interfaces/IAuthorRepository";
import { AuthorModel } from "../Models/AuthorModel";


export class AuthorRepository implements IAuthorRepository{
    private conn: MongoConnect;
    nameCollection: string = "authors";

    constructor(){
        this.conn = new MongoConnect(this.nameCollection);
    }

    Create(Author: AuthorModel): void{
        this.conn.Collection?.insertOne({nikname: Author.nikname, login: Author.login, password: Author.password});
    };

    TakeById(id: number): AuthorModel {
        let Authorany: any = this.conn.Collection?.findOne({id: id})
        let Author: AuthorModel = new AuthorModel(Authorany.nikname, Authorany.login,
            Authorany.password);

        return Author;
    }

    TakeByLogin(login: string): AuthorModel {
        let Authorany: any = this.conn.Collection?.findOne({login: login})
        let Author: AuthorModel = new AuthorModel(Authorany.nikname, Authorany.login,
            Authorany.password);

        return Author;
    }

    DeleteById(id: number): void{
        this.conn.Collection?.deleteOne({id: id});
    };
    
}