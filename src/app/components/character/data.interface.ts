import { Character } from './character.interface';
export interface Data {
    count: number;
    limit: number;
    offset: number;
    results: Character[];
    total: number;
}