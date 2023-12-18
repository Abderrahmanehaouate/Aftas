import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../services/competition/competition.service";
import {Competition} from "../../models/competition.model";

@Component({
  selector: 'app-create-competition',
  templateUrl: './create-competition.component.html',
  styleUrls: ['./create-competition.component.css']
})
export class CreateCompetitionComponent implements OnInit {

  competition = {
    date: '',
    numberOfParticipants: 0,
    startTime: '',
    endTime: '',
    location: '',
    amount: 0
  }

  constructor(private service: CompetitionService) {
  }

  ngOnInit() {
  }

  createCompetition(competition: {
    date: string;
    numberOfParticipants: number;
    startTime: string;
    location: string;
    endTime: string;
    amount: number
  }) {
    this.service.addCompetition(competition)
      .subscribe({
        next: () => {
          console.log(competition);
        },
        error: err => {
          console.log(err);
        }
      })
  }
}
