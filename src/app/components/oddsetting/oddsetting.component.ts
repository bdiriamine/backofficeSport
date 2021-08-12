import { Component, OnInit } from '@angular/core';
import { OddDirection } from 'src/app/models/enums/oddDirection';
import { SportsService } from 'src/app/services/sports.service';
import { OddsValPipe } from 'src/pipe/oddsVal';
import { SortPipe } from 'src/pipe/sort';


@Component({
  selector: 'app-oddsetting',
  templateUrl: './oddsetting.component.html',
  styleUrls: ['./oddsetting.component.scss']
})
export class OddsettingComponent implements OnInit {

  constructor(private serviceSport: SportsService,private odd:OddsValPipe) { }
  //boolean Table
  bol1:boolean=false;
  bol2:boolean=false;
  bol3:boolean=false;
  bol4:boolean=false;
  bol5:boolean=false;
  bol6:boolean=false;
  //boolean select option
  locationbysportidbool:boolean=false;
  getleaguesbysportIdandlocationIdBool:boolean=false;
  geteventsbyleaguesIdBool:boolean=false;
  //boolean search button
  selectedsportsearchbool:boolean=false;
  selectedeventsleaguesearchbool:boolean=false;
  Editeventsleaguesearchbool:boolean=false;
  selectedleaguesearchbool:boolean=false;
  //variable select
  selectedSport:any;
  selectedlocation:any;
  selectedleagues:any;
  //selectVarNgFor
  sportsVar:any;
  locationSportBySportVar:any;
  leagueBySportandlocationVar:any;
  
  eventsbyleaguesVar:any;
  editeventsVar:any;
  oddsmarket:any;
  betsVar:any;
  editeventsbyleaguesIdBool:boolean=false;
  selectedEditEvent:any;
  oddsNewValue:any
  getdataSport(){
    this.serviceSport.sport().toPromise()
    .then((response:any) => {
      this.sportsVar=response.sort()
     console.log(this.sportsVar)
    })
  }
  //etap1
  getSport(){
    this.bol1=true;
    this.bol2=false;
    this.bol3=false;
    this.bol4=false;
    this.bol5=false;
    this.locationbysportidbool=false;
    this.getleaguesbysportIdandlocationIdBool=false;
    this.geteventsbyleaguesIdBool=false;
    this.getleaguesbysportIdandlocationIdBool=false;
    this.selectedsportsearchbool=false;
    this.selectedeventsleaguesearchbool=false;
    this.Editeventsleaguesearchbool=false;
    this.selectedleaguesearchbool=false;
  }
   //etap2
   getlocationSportBySportIdBool(){
    this.bol1=false;
    this.bol2=true;
    this.bol3=false;
    this.bol4=false;
    this.bol5=false;
    this.locationbysportidbool=true; 
    this.getleaguesbysportIdandlocationIdBool=false;
    this.geteventsbyleaguesIdBool=false;
    this.selectedsportsearchbool=false;
    this.selectedeventsleaguesearchbool=false;
    this.Editeventsleaguesearchbool=false;
    this.serviceSport.locationBysportId(this.selectedSport).toPromise()
    .then(res => {
      console.log(res.body)
      this.locationSportBySportVar=res.body
     console.log(this.locationSportBySportVar)
    })
  }
   selectsport(){
     console.log(this.selectedSport)
     if(this.selectedSport!=null){
      this.serviceSport.locationBysportId(this.selectedSport).toPromise()
      .then(res => {
        console.log(res.body)
        this.locationSportBySportVar=res.body
       console.log(this.locationSportBySportVar)
      })
     }
   }
  //etape3
  //selectedSport
  getleaguesbysportIdandlocationId(){
    this.bol1=false;
    this.bol2=false;
    this.bol3=true;
    this.bol4=false;
    this.bol5=false;
    this.getleaguesbysportIdandlocationIdBool=true;
    this.geteventsbyleaguesIdBool=false;
    this.locationbysportidbool = true ;
    this.serviceSport.getleaguesbysportIdandlocationIdService(this.selectedSport,this.selectedlocation).toPromise()
    .then(res => {
      console.log(res.body)
      this.leagueBySportandlocationVar=res.body
    })
  }
 selectlocation(){
  //getted from binding
  console.log(this.selectedlocation)
 this.selectedsportsearchbool=false;
 this.selectedleaguesearchbool=true;
 this.serviceSport.getleaguesbysportIdandlocationIdService(this.selectedSport,this.selectedlocation).toPromise()
 .then(res => {
   console.log(res.body)
   this.leagueBySportandlocationVar=res.body
 })
}
 //etape4
 geteventsbyleaguesId(){
  this.bol1=false;
  this.bol2=false;
  this.bol3=false;
  this.bol4=true;
  this.bol5=false;
  this.getleaguesbysportIdandlocationIdBool=true;
  this.locationbysportidbool = true ;
  this.geteventsbyleaguesIdBool=true
  this.selectedeventsleaguesearchbool=false
  
}
selectleagues(){
  if(this.selectedleagues!=null){
    this.serviceSport.geteventsByLeagues(this.selectedleagues).toPromise()
    .then(res => {
      console.log(res.body)
      this.eventsbyleaguesVar=res.body
    })
   }
}


  ngOnInit(): void {
    this.getdataSport()
  }

  EditmarketsSettings(){
    this.bol1=false;
    this.bol2=false;
    this.bol3=false;
    this.bol4=false;
    this.bol5=false;
    this.getleaguesbysportIdandlocationIdBool=true;
    this.locationbysportidbool = true ;
    this.geteventsbyleaguesIdBool=true
    this.selectedeventsleaguesearchbool=true
   
  }
  pg:number=1
  pagination(pgi:any){
    console.log(pgi)
    this.serviceSport.editevents(pgi,this.selectedSport,this.selectedlocation,this.selectedleagues).subscribe(data => {
      console.log(data)
      this.bol5=true;
      this.editeventsVar= data.events
  });
  }
  getEditEvents(){
    this.serviceSport.editevents(this.pg,this.selectedSport,this.selectedlocation,this.selectedleagues).subscribe(data => {
      this.bol5=true;
      this.editeventsVar= data.events
      console.log(data.events)
  });
  }
  market(marketsSettings:any){
    this.bol6=true
    this.oddsmarket=marketsSettings
console.log(marketsSettings)
  }
  marketbets(bets:any){
    
    this.betsVar=bets
  }
  direction(val :any ,direction:number){
    if (direction == OddDirection.up){
      val.marge = val.marge+0.05;
    }
    if (direction == OddDirection.down){
      val.marge = val.marge-0.05;
    }
    val.direction=direction;
    console.log(val)
  }
  getSwitcherValue(onoffswitch:boolean) {
    onoffswitch=!onoffswitch;
   console.log("onoffswitch:"+onoffswitch);
}
}
