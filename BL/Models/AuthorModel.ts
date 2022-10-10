export class AuthorModel{
    id: number;
    nikname: string;
    login: string;
    password: string;
    //hash: string;
    //salt:string;

    constructor(id: number, nikname: string,
                login: string, password: string){
    this.id = id;
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

    setId(id: number){this.id = id};
    setNikname(nikname: string){this.nikname = nikname};
    setLogin(login: string){this.login = login};
    setPassword(password: string){this.password = password}
    //setHash(hash: string){this.hash = hash};
    //setSalt(salt: string){this.salt = salt};
}