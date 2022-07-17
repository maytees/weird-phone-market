import { Client, Account, Databases } from "appwrite";

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject('62d239b5bf6f58502a98');

export const account = new Account(client);

export const databases = new Databases(client, "62d239db5b872d2cbb19")

export const storage = new Storage(client)