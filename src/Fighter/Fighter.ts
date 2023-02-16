import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface IFighter extends SimpleFighter {
  defense: number,
  energy?: Energy,
  attack(enemy: IFighter): void,
  special?(enemy: IFighter): void,
  levelUp(): void,
}