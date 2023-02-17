import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    player: Fighter,
    private _player2: Fighter,
  ) {
    super(player);
  }

  fight(): number {
    let battle = true;
    while (battle) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
      if (this.player.lifePoints === -1 
        || this._player2.lifePoints === -1) battle = false;
    }
    return super.fight();
  }
}