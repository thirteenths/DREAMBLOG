import { ObjectId } from "mongodb";

export class AuthorModel{
    id?: ObjectId;
    nikname: string;
    login: string;
    password: string;
    //hash: string;
    //salt:string;

    constructor(nikname: string,
                login: string, password: string, id?:ObjectId ){
                    
    this.nikname = nikname;
    this.login = login;
    this.password = password;
    //this.hash = hash;
    //this.salt = salt;
    }

    getId(){return this.id};
    getNikname(){return this.nikname};
    getLogin(){return this.login};
    getPassword(){return this.password};
    //getHash(){return this.hash};
    //getSalt(){return this.salt};

    //setId(id: number){this.id = id};
    setNikname(nikname: string){this.nikname = nikname};
    setLogin(login: string){this.login = login};
    setPassword(password: string){this.password = password}
    //setHash(hash: string){this.hash = hash};
    //setSalt(salt: string){this.salt = salt};
}