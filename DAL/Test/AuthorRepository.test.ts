import { IAuthorRepository } from "../Interfaces/IAuthorRepository";
import { AuthorModel } from "../Models/AuthorModel";
import { AuthorRepository } from "../Repositories/AuthorRepository";


export class AuthorRepositoryTest{

    TestCreate(){
        let Repository: IAuthorRepository = new AuthorRepository();

        let Author: AuthorModel = new AuthorModel("veny", "veny", "984573");

        Repository.Create(Author);
    }

    TestDeleteByID(){
        let Repository: IAuthorRepository = new AuthorRepository();

        Repository.DeleteById(4);

    }

}

test("AuthorRepositoryCreate", () =>  {
    expect(1).toStrictEqual(1);
});

test("AuthorRepositoryTakeByLogin", () =>  {
    


    expect(1).toStrictEqual(1);
});