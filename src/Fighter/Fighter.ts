import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export default interface IFighter extends SimpleFighter {
  defense: number,
  energy?: Energy,
  special?(enemy: IFighter): void,
  levelUp(): void,
}