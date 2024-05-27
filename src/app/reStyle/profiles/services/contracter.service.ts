import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../../shared/services/base.service";
import {Contracter} from "../model/contracter.entity";

@Injectable({
  providedIn: 'root'
})
export class ContracterService {

  /*constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = 'JanoverSaldana/contracter/contracters';
  }*/
  baseUrl: string = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  getContractors(){
    return this.http.get(`${this.baseUrl}/contractor`);
  }
  getContractorById(id: any){
    return this.http.get(`${this.baseUrl}/contractor/${id}`);
  }
  createContractor(data: any){
    return this.http.post(`${this.baseUrl}/contractor`, data);
  }
}
