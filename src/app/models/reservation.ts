import { Chambre } from "./chambre";
import { Utilisateur } from "./utilisateur";
import { Client } from "./client";
import { ServiceHotel } from "./service-hotel";
import { Facture } from "./facture";

export class Reservation {
    id: number;
    dateDebut: Date;
    dateFin: Date;
    expiree: boolean;
    client: Client;
    user: Utilisateur;
    chambre: Chambre;
    serviceshotel: ServiceHotel[];
    facture: Facture;
}
