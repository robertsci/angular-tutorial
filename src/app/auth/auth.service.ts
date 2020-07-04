import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn:string;
  localId:string;
  registered?: boolean;  // the "?" from this variable indicates that this is an optional parameter. This is because the sign in requests requires it, bot the sign up don't
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient ) {
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHp4S91iPdK4AtG0qP8KRYr8qp8DNgKBg',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
      catchError(
        this.handleError
      )
    );

  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBHp4S91iPdK4AtG0qP8KRYr8qp8DNgKBg',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
      catchError(
        this.handleError
      )
    );
  }

  private handleError(errorResponse: HttpErrorResponse) {
      let errorMessage = 'An unknown error occurred';
      if (!errorResponse.error || !errorResponse.error.error) {
        return throwError(errorMessage)
      }
      switch (errorResponse.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email already exists';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'This email does not exists';
          break;
        case 'INVALID_PASSWORD':
          errorMessage = 'Incorrect Password';
          break;
      }
      return throwError(errorMessage);
    }


}


