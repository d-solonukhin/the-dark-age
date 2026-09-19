import { computed } from 'vue';
import * as game from './game';
import type { DirectionT } from '../types';

export function useGame() {
  const location = computed(() => game.getLocation());
  const room = computed(() => game.getRoom());
  const exits = computed(() => game.getExits());

  return {
    state: game.state,
    location,
    room,
    exits,
    lookAround: game.lookAround,
    move: (dir: DirectionT) => game.move(dir),
    canMove: (dir: DirectionT) => game.canMove(dir),
  };
}
