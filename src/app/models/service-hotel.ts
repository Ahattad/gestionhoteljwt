import { Reservation } from "./reservation";

export class ServiceHotel {
    id: number;
    nomServicehotel: string;
    prixService: number;
    reservations: Reservation[];
}
