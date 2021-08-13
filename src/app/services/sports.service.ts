import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OddSettingsSport } from '../models/oddSettingsSport';
import { Observable } from 'rxjs/internal/Observable';
import { Events } from '../models/events';
@Injectable({
  providedIn: 'root'
})
export class SportsService {
  url = 'https://moxchedpfa.azurewebsites.net/api/OddSettings/sports';
  urlLocation = "https://moxchedpfa.azurewebsites.net/api/OddSettings/locations/"
  urleagues = "https://moxchedpfa.azurewebsites.net/api/OddSettings/leagues/"
  urlEvents = "https://moxchedpfa.azurewebsites.net/api/OddSettings/events/"
  urlEdit = "https://moxchedpfa.azurewebsites.net/api/OddSettings/odds/filter/"
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  constructor(private http: HttpClient) { }
  sport():Observable<OddSettingsSport[]> {
    return this.http.get<OddSettingsSport[]>(this.url)
  }
  locationBysportId(sportId: string) {
    console.log(this.urlLocation + sportId)
    return this.http.get<OddSettingsSport[]>(this.urlLocation + sportId, {
      params: {
        sportId: sportId,
      },
      observe: 'response'
    })
  }
  getleaguesbysportIdandlocationIdService(sportId: string, locationId: string) {

    return this.http.get<OddSettingsSport[]>(this.urleagues + sportId + "/" + locationId, {
      params: {
        sportId: sportId,
        locationId: locationId,
      },
      observe: 'response'
    })
  }
  geteventsByLeagues(leagueId: string) {
    return this.http.get(this.urlEvents + leagueId, {
      params: {
        leagueId: leagueId,
      },
      observe: 'response'
    })

  }
  editevents(pageNumber: number, sportId: string, locationId: string, leagueId: string) {
    console.log(sportId, "eeee", locationId, "ttt", leagueId)
    const body = [
      {
        "type": "Sport",
        "sportId": sportId,

      },
      {
        "type": "Location",
        "locationId": locationId,
      }, {
        "type": "League",
        "leagueId": leagueId,
      }
    ];
    return this.http.post<Events[]>('https://moxchedpfa.azurewebsites.net/api/OddSettings/odds/filter/' + pageNumber, body, this.httpOptions)
  }
}
