import Race from './Races';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static countInstaces = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.countInstaces += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.countInstaces;
  }
}