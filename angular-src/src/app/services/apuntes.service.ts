import { HttpClient } from '@angular/common/http';

export class ApuntesService {

    constructor(protected http: HttpClient) { }

    getApuntesList() {
        
        return this.http.get('http://localhost:3000/apuntes/apuntes');

    }

}