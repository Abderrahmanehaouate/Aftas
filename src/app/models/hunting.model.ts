import {Fish} from "./fish.model";
import {Competition} from "./competition.model";
import {Member} from "./member.model";

export interface Hunting {
  id: number
  numberOfFish: number
  member: Member
  competition: Competition
  fish: Fish
}
