import { EnergyType } from '../Energy';

export default interface IFighter {
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: EnergyType,

  attack(enemy: IFighter): void,
  special?(enemy: IFighter): void,
  levelUp(): void,
  receiveDamage(attackPoints: number): number,
}