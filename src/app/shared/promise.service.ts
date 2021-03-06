import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { SpaceInvader } from './space-invader';

@Injectable()
export class PromiseService {
  private spaceInvadersURL: string = '../assets/space_invaders.json';

  constructor(private http: Http) { }

  // also works: getSpaceInvaders(): Promise<Array<SpaceInvader>> {
  getSpaceInvaders(): Promise<SpaceInvader[]> {
    return this.http
      .get(this.spaceInvadersURL)
      .toPromise()
      .then((response) => {
        return response.json().data as SpaceInvader[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
