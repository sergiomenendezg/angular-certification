import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { TranslateModule } from '@ngx-translate/core';
import { ConfiguratorService } from '../../services/configurator/configurator.service';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [MatGridListModule,
    TranslateModule,
    CommonModule,
    MatDividerModule
  ],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component {

  package: string = 'Tow Hitch Package';

  constructor(public configuratorService: ConfiguratorService){}

  configToString(): string{
    const config = this.configuratorService.config;
    if(!config){
      return '';
    }
    return `Range: ${config.range} miles - Max speed: ${config.speed}`;
  }

}
