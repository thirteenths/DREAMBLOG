// External Dependencies

import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables

export const collections: { posts?: mongoDB.Collection } = {}

// Initialize Connection
export async function connectToDatabase () {
    dotenv.config({path:'/config.env'});
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient("mongodb://admin:secret@localhost:27017");
            
    await client.connect();
        
    const db: mongoDB.Db = client.db("DREAMBLOG");
   
    //await db.createCollection("post");
    const postsCollection: mongoDB.Collection = db.collection("posts");
 
    collections.posts = postsCollection;

    //await postsCollection.insertOne(   {authorID: 2, TextData: "Meeeeeeeeeeeee", publishDate: "06.10.2022"})
    //const posts = await postsCollection.find({publishDate: "06.10.2022"});
    const posts: any = postsCollection.find({publishDate: "06.10.2022"}).toArray();
    console.log(posts.length , posts[0].TextData);
    //console.log(JSON.parse(postsCollection.find({publishDate: "06.10.2022"})))
       
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${postsCollection.collectionName}`);
 }

 
export class MongoConnect {
    private client: mongoDB.MongoClient;
    private db: mongoDB.Db;
    public Collection?: mongoDB.Collection;

    constructor(nameCollection: string){
        this.client = new mongoDB.MongoClient("mongodb://admin:secret@localhost:27017");
        this.client.connect();
        this.db = this.client.db("DREAMBLOG");
        this.Collection = this.db.collection(nameCollection);
    }

    getConnection(nameCollection: string){
        this.Collection = this.db.collection(nameCollection);
    }


}

connectToDatabase();