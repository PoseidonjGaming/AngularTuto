import { IAddress } from "./IAdress";

export interface IUser {
    id: number,
    name: string,
    username: string,
    phone: string,
    email: string,
    address: IAddress
}

