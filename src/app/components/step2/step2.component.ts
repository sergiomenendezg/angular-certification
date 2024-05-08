import { Component, OnInit } from '@angular/core';
import { ConfiguratorService } from '../../services/configurator/configurator.service';
import { ApiService } from '../../services/api/api.service';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Option } from '../../models/option';
import { Config } from '../../models/config';

@Component({
  selector: 'app-step2',
  standalone: true,
  providers: [],
  imports: [TranslateModule,
    MatSelectModule,
    MatOptionModule,
    CommonModule,
    MatCheckboxModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss'
})
export class Step2Component implements OnInit{


  configs: Config[] = [];

  constructor(public configuratorService: ConfiguratorService,
    public apiService: ApiService
  ){
  }


  ngOnInit(){
    this.apiService.options$?.subscribe(data =>
      this.configs = data.configs
    )
  }
  onConfigChange(configCode: number){
    const config = this.configs.find(
      config => config.id == configCode
    );
    if(config){
      this.configuratorService.config = config;
    }
    
  }

  setTowHitch(value: boolean){
    this.configuratorService.towHitch = value;
  }

  setYoke(value: boolean){
    this.configuratorService.yoke = value;
  }

  configToString(): string{
    const config = this.configuratorService.config;
    if(!config){
      return '';
    }
    return `Range: ${config.range} miles - Max speed: ${config.speed} - Cost: $${config.price}`
  }


}
