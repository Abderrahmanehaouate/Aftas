import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../../../services/competition.service";
import {ActivatedRoute} from "@angular/router";
import {Competition} from "../../../models/competition.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Ranking} from "../../../models/ranking.model";
import {Fish} from "../../../models/fish.model";
import {FishService} from "../../../services/fish.service";
import {HuntingService} from "../../../services/hunting.service";
import {Hunting} from "../../../models/hunting.model";

@Component({
  selector: 'app-show-competition',
  templateUrl: './show-competition.component.html',
  styleUrls: ['./show-competition.component.css']
})
export class ShowCompetitionComponent implements OnInit{

  competition!: Competition;
  fishes: Array<Fish> = [];

  showRegisterForm = false;

  showForm = false;

  registerForm!: FormGroup;

  huntingForm!: FormGroup;

  operation = 'add';

  memberId!: number;


  constructor(
    private service:CompetitionService,
    private fishService:FishService,
    private huntingService:HuntingService,
    private route:ActivatedRoute,
    private fb: FormBuilder,
  ) {
    this.CreateFormRegister();
    this.getAllFishes();
    this.createHuntingForm();
    }

    ngOnInit() {
    this.route.params.subscribe((params) => {
      const competitionId = params['id'];
      this.getCompetitionById(competitionId);
    })
    }

  public getCompetitionById(id: any){
    this.service.getCompetitionById(id)
        .subscribe({
          next: data => {
            this.competition = data
            if ( 1 < 2 ) {
              this.competition.rankings.sort((a: { rank: number; }, b: { rank: number; }) => a.rank - b.rank);
            }
            console.log(data)
          },
          error: err => {
            console.error(err);
          }
        });
  }

    CreateFormRegister(){
      this.registerForm = this.fb.group({
        memberId: ''
      })
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

    registerMember() {
    const newMember = {
      memberId: this.registerForm.get('memberId')?.value,
      competitionId: this.competition?.id
    } as unknown as Ranking;

    this.service.registerMember(newMember).subscribe(
        () => {
          console.log('Member registered successfully');
          this.resetForm();
          this.getCompetitionById(this.competition?.id);
        }
    );
  }

  cancelAddOrEdit() {
    this.operation = 'add';
    this.resetForm();
  }

  resetForm() {
    this.showRegisterForm = false;
    this. showForm = false;
    this.registerForm.reset();
  }

  public getMemberId(id: any) {
    console.log(id);
    this.showForm = true;
    this.memberId = id;
  }

  createHuntingForm() {
    this.huntingForm = this.fb.group({
      numberOfFish: '',
      fishId: ''
    })
  }

  registerHunting() {
    const newHunting = {
      numberOfFish: this.huntingForm.get('numberOfFish')?.value,
      member: {
      id: this.memberId,
      },
      competition: {
        id: this.competition?.id
      },
      fish: {
        id: this.huntingForm.get('fishId')?.value
      },

    } as unknown as Hunting;
    this.huntingService.addHunting(newHunting).subscribe(
        () => {
          console.log('Member registered successfully');
          this.resetForm();
          this.getCompetitionById(this.competition?.id);
        }
    );
  }

  public getAllFishes() {
    this.fishService.getAllFishes()
      .subscribe({
        next: data => {
          this.fishes = data
            console.log(data)
        },
        error: err => {
          console.error(err);
        }
      });
  }
}
