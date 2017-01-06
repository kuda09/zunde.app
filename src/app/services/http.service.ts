import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {mapResponse, observableError} from "../helpers/utils";

@Injectable()
export class HttpService {

    API_URL = `http://localhost:3000/api`;

    constructor(private http: Http,) {
};

    createAuthorizationHeader(headers: Headers) {


    }

    getData(url: string) {
        url = this.API_URL + url;
        return this.http.get(url)
            .map(mapResponse)
            .catch(observableError);
    }

    postData(url: string, data: Object) {

        url = this.API_URL + url;

        return this.http.post(url, data)
            .map(mapResponse)
            .catch(observableError);
    }


    patchData(url: string, data: Object) {

        url = this.API_URL + url;

        return this.http.patch(url, data);
    }

    deleteData(url: string, data: Object) {

        url = this.API_URL + url;
        return this.http.delete(url);

    }

}
