import { Injectable } from '@angular/core';
import { Model } from '../../models/model';
import { Color } from '../../models/color';
import { Selection } from '../../models/selection';
import { BehaviorSubject, Observable } from 'rxjs';
import { Option } from '../../models/option';
import { Config } from '../../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfiguratorService {

  readonly towHitchPrice = 1000;
  readonly yokePrice = 1000;

  private _model: Model | null = null;
  private _color: Color | null = null;
  private _config: Config | null = null;
  private _towHitch: boolean = false;
  private _yoke: boolean = false;
  private optionsSubject = new BehaviorSubject<Selection | null>(null);
  public options: Observable<Selection | null> = this.optionsSubject.asObservable();

  constructor() { }

  get model(): Model | null{
    return this._model;
  }

  set model(model: Model){
    this._model = model;
    this.optionsSubject.next({modelCode: this._model.code, 
      colorCode: this._color?.code || ''})
  }

  get color(): Color | null{
    return this._color;
  }

  set color(color: Color){
    this._color = color;
    this.optionsSubject.next({modelCode: this._model?.code || '', 
      colorCode: this._color?.code || ''})
  }

  set config(config: Config){
    this._config = config;
  }

  get config(): Config | null{
    return this._config;
  }

  set towHitch(towHitch: boolean){
    this._towHitch = towHitch;
  }

  get towHitch(): boolean{
    return this._towHitch;
  }

  set yoke(yoke: boolean){
    this._yoke = yoke;
  }

  get yoke(): boolean{
    return this._yoke;
  }

  get total(){
    return (this._color?.price || 0) + 
      (this._config?.price || 0) +
      (this._towHitch ? this.towHitchPrice: 0) +
      (this._yoke ? this.yokePrice: 0)
  }
}
