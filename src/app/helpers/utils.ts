
import {Response} from "@angular/http";
import {Observable} from "rxjs";

export const observableError = (error: any) => Observable.throw(error.json().error || 'Server error');
export const mapResponse = (res: Response) => res.json();