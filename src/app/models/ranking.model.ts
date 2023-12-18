import {Member} from "./member.model";

export interface Ranking {
  competitionId: number
  memberId: number
  rank: number
  score: number
  member: Member
}
