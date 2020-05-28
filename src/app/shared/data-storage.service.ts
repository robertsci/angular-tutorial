import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'}) // used when you inject a service into another service. Here we inject the HttpService
export class DataStorageService {

  constructor(private httpClient: HttpClient) {

  }

}
