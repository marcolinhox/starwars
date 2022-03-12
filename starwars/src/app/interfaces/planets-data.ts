import { Planet } from "../classes/planet";

export interface PlanetsData {
    count : number;
    next: string;
    previous: string;
    results: Array<Planet>;
}
