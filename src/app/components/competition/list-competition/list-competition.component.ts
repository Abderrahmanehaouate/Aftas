import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../../services/competition.service";
import {Competition} from "../../../models/competition.model";

@Component({
  selector: 'app-list-competition',
  templateUrl: './list-competition.component.html',
  styleUrls: ['./list-competition.component.css']
})
export class ListCompetitionComponent implements OnInit{

  competitions: Array<Competition> = [];
  constructor(private service:CompetitionService) {
  }
  ngOnInit() {
    this.getAllCompetitions();
  }

    getCompetitionStatus(competition: any): string {
        const competitionDate = new Date(competition.date);
        competitionDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

        console.log(competitionDate);
        console.log(currentDate)
        if (competitionDate > currentDate) {
            return 'UPCOMING';
        } else if (competitionDate < currentDate) {
            return 'FINISHED';
        } else {
            return 'ONGOING';
        }
    }

  private getAllCompetitions() {
    this.service.getAllCompetitions()
      .subscribe({
        next: data => {
          this.competitions = data
          console.log(data)
        },
        error: err => {
          console.error(err);
        }
      });
  }
  public deleteCompetitionById(id: any, event: Event){
    event.preventDefault();
    this.service.deleteCompetitionById(id)
      .subscribe({
        next: () => {
          this.competitions = this.competitions.filter(competition => competition.id !== id);
          console.log("CompetitionModel deleted successfully")
        },
        error: err => {
          console.error(err);
        }
      })
  }
}
