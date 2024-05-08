import { Component, Input, OnInit, Output } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { Model } from '../../models/model';
import { Color } from '../../models/color';
import { ApiService } from '../../services/api/api.service';
import { ConfiguratorService } from '../../services/configurator/configurator.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step1',
  standalone: true,
  providers: [],
  imports: [TranslateModule,
    MatSelectModule,
    MatOptionModule,
    CommonModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component implements OnInit {

  colors: Color[] = [];
  models: Model[] = [];
  selectedCode: string = '';

  constructor(public apiService: ApiService,
    public configuratorService: ConfiguratorService
  ){}

  ngOnInit(){
    this.apiService.models$?.subscribe(
      models => this.models = models
    )
    this.selectedCode = this.configuratorService.model?.code || '';
  }

  onModelChange(modelCode: string){
    this.selectedCode = modelCode;
    const model = this.models.find(model => model.code == this.selectedCode);
    if(model){
      this.configuratorService.model = model;
      this.apiService.getOption(model.code)
      .subscribe(data => data);
    }
   
  }

  onColorChange(selectedColor: Color){
    this.configuratorService.color = selectedColor;
  }
}
