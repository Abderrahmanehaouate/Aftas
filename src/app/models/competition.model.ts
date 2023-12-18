import {Ranking} from "./ranking.model";
import {Hunting} from "./hunting.model";

export interface Competition {
  id: number
  date: string
  code: string
  startTime: string
  endTime: string
  numberOfParticipants: number
  location: string
  amount: number
  rankings: Ranking[]
  huntings: Hunting[]
}
