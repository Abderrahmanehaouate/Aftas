import {Ranking} from "./ranking.model";
import {Hunting} from "./hunting.model";

export interface Member {
  id: number
  num: number
  name: string
  familyName: string
  accessionDate: any
  nationality: string
  identityDocumentType: any
  identityNumber: any
  rankings: Ranking[]
  huntings: Hunting[]
}
