import { Reservation } from "./reservation";

export class Client {
    id: number;
    nomClient: string;
    prenomClient: string;
    nationalite: string;
    telephone: string;
    email: string;
    adresse: string;
    reservations: Reservation[];
}
