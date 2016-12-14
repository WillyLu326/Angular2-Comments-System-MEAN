import { EventEmitter, Injectable } from "@angular/core";
/**
 * Created by zhenglu on 12/14/16.
 */

@Injectable()
export class EmitterService {
    public static emitters: { [ID: string]: EventEmitter<any> } = {};

    static get(ID: string): EventEmitter<any> {
        if (!this.emitters[ID]) {
          this.emitters[ID] = new EventEmitter<any>();
        }
        return this.emitters[ID];
    }
}
