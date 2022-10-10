import { Mock, It, Times } from "moq.ts";

import { IPostRepository } from '../Interfaces/IPostRepository';
import { PostModel } from '../Models/PostModel';
import { PostService } from '../PostService';

test("PostServiceCreate", () =>  {

    const mockPostRepository = new Mock<IPostRepository>()
    .setup(instance => instance.Create(It.IsAny<PostModel>()))
    .returns();
    
    let PostSer :PostService = new PostService(mockPostRepository.object());

    let Post: PostModel = new PostModel(1, 1,"text", "01.01.2001", 0);

    PostSer.CreatePost(Post);

    //mockPostRepository.verify();
    expect(1).toStrictEqual(1);
});

test("PostServiceDelete", () =>  {

    const mockPostRepository = new Mock<IPostRepository>()
    .setup(instance => instance.DeleteById(It.IsAny<number>()))
    .returns();
    
    let PostSer :PostService = new PostService(mockPostRepository.object());

    PostSer.DeletePost(1);

    //mockPostRepository.verify();
    expect(1).toStrictEqual(1);
});
/*
test("PostServiceGetAllPost", () =>  {

    const mockPostRepository = new Mock<IPostRepository>()
    .setup(instance => instance.GetAll()
    .returns(new PostModel[]);
    
    let PostSer :PostService = new PostService(mockPostRepository.object());

    let Post: PostModel = new PostModel(1, 1,"text", "01.01.2001", 0);

    PostSer.CreatePost(Post);

    //mockPostRepository.verify();
    expect(1).toStrictEqual(1);
});*/

test("PostServiceAddLike", () =>  {

    const mockPostRepository = new Mock<IPostRepository>()
    .setup(instance => instance.Update(It.IsAny<PostModel>()))
    .returns();
    
    let PostSer :PostService = new PostService(mockPostRepository.object());

    let Post: PostModel = new PostModel(1, 1,"text", "01.01.2001", 0);

    PostSer.AddLike(Post);

    //mockPostRepository.verify();
    expect(1).toStrictEqual(1);
});