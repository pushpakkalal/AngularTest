import { IState } from './IState';
export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    city: string;
    state: IState;
    salary?: number;
    joinDate: string;
    rating: number
}

