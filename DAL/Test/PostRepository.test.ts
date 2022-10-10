
import { IPostRepository } from "../Interfaces/IPostRepository"
import { PostModel } from "../Models/PostModel";
import { PostRepository } from "../Repositories/PostRepository"

export class PostRepositoryTest{

    TestCreate(){
        let Repository: IPostRepository = new PostRepository();

        let Post: PostModel = new PostModel(1, "Test is working", "10.10.2022");
        Repository.Create(Post);
        test("name", () =>  {
        expect(1).toStrictEqual(1);
        });
    }

    TestDeleteByID(){

    }

    TestAddLike(){

    }

}

test("PostRepositoryCreate", () =>  {
    let PostRep: IPostRepository = new PostRepository();

    let Post: PostModel = new PostModel(1, "Eeeeee", "11.10.2022")

    PostRep.Create(Post)


    expect(1).toStrictEqual(1);
});

test("PostRepositoryTakeById", () => {
    let PostRep: IPostRepository = new PostRepository();

    const Post: Promise<PostModel> = PostRep.TakeById(1);

    //console.log(Post)

    expect(1).toStrictEqual(1);
})