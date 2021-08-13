import { MarketsSettings } from "./marketsSettings";

 export class Events {
    id: string;
    eventId: string;
    sportName: string;
    locationName: string;
    leagueName: string;
    firstParticipant: string;
    secondParticipant: string;
    eventDate: Date;
    marketsSettings:MarketsSettings
 }