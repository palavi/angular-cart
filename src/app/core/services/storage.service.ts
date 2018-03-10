import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';

@Injectable()
export class StorageService {
    constructor () {
    }
    private _salt = '#cpp_cogen_ngular5#';
    private crypt: any;
    private cryptValue: any;
    setSession(key, value) {
        this.crypt = crypto.enc.Base64.parse(key);
        this.cryptValue = crypto.AES.encrypt(value.toString(), this._salt);
        sessionStorage.setItem(this.crypt, this.cryptValue);
    }
    getSession(key) {
        this.crypt = crypto.enc.Base64.parse(key);
        if (sessionStorage.getItem(this.crypt)) {
            this.cryptValue = crypto.AES.decrypt(sessionStorage.getItem(this.crypt).toString(), this._salt);
            const decryptValue = this.cryptValue.toString(crypto.enc.Utf8);
            return decryptValue;
        } else {
            return false;
        }
    }
}
