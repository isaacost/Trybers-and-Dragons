import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    play1: Fighter,
    private _play2: Fighter,
  ) {
    super(play1);
  }

  fight(): number {
    let battle = true;
    while (battle) {
      this.player.attack(this._play2);
      this._play2.attack(this.player);
      if (this.player.lifePoints === -1 
        || this._play2.lifePoints === -1) battle = false;
    }
    return super.fight();
  }
}