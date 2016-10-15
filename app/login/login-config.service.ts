import { Injectable } from '@angular/core';

@Injectable()
export class LoginConfigService {

    constructor() { }
    public getDelayConfig():string{
        return delay;
    }
}

export const delay = '0.5s';