export interface IUserPayload{
  name: string;
  game: string[];
}

export class User implements IUserPayload{
  name: string;
  game: string[];
  constructor(payload: any) {
    this.name = payload.name;
    this.game = payload.game;
  }
}
