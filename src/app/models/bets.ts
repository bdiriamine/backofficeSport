import { OddDirection } from "./enums/oddDirection";

export class Bets {
    betName: string;
    betId: string;
    marge: number;
    direction: OddDirection;
    isDispalyed: boolean;
    currentValue: number;
}