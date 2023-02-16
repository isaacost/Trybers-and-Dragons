import Race from './Races';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static countInstaces = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.countInstaces += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.countInstaces;
  }
}