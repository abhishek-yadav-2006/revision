import {Client} from 'pg';

const pgClient = new Client();  //  initialize a instance of Client   


async function main(){
    await pgClient.connect();  // connect to the PostgreSQL database
    console.log("Connected to PostgreSQL database");
}


