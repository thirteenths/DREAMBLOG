import { AuthorModel } from "../Models/AuthorModel";

export interface IAuthorRepository{
    Create(Author: AuthorModel): void;
    TakeById(id: number):AuthorModel;
    TakeByLogin(login: string): AuthorModel;
    DeleteById(id: number): void;

    //CheckAccount(login: string, password: string): number;
}