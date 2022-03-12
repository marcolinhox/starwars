import { People } from "../class/people";

export interface PeopleData {

    count: number;
    next: string;
    previous: string;
    results: Array<People>;


}
