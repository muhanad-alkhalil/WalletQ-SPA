import { Wallet } from "./Wallet";

export interface User{
    name :string;
    surname :string;
    email :string;
    phoneNumber : string;
    dateOfBirth : Date;
    wallet : Wallet;
}