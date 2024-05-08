import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Model } from '../../models/model';
import { apiRoutes } from '../../utils/constants';
import { Option } from '../../models/option';
import { Config } from '../../models/config';
import { ConfiguratorService } from '../configurator/configurator.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  models$: Observable<Model[]> | undefined; 
  options$: Observable<Option> | undefined;

  constructor(private httpClient: HttpClient,
      private configuratorService: ConfiguratorService
  ) {
    this.getModels();
  }

  getModels(): Observable<Model[]>{
    this.models$ = this.httpClient.get<Model[]>(apiRoutes.models);
    return this.models$;
  }

  getOption(modelId: string): Observable<Option>{
    this.options$ = this.httpClient.get<Option>(`${apiRoutes.options}/${modelId}`)
    .pipe(
      tap(data => {
        this.configuratorService.towHitch = data.towHitch;
        this.configuratorService.yoke = data.yoke;
        })
    );
    
    return this.options$;
  }
}
