import { computed } from "vue";
import * as game from "./game";
import { MAP_SIZE } from "../consts";
import type { DirectionT } from "../types";

export function useGame() {
  const location = computed(() => game.getLocation());
  const room = computed(() => game.getRoom());
  const exits = computed(() => game.getExits());

  const cells = computed(() => {
    const grid: Array<Array<string | null>> = Array.from(
      { length: MAP_SIZE },
      () => Array.from({ length: MAP_SIZE }, () => null),
    );

    for (const item of Object.values(location.value.rooms)) {
      if (
        item.x >= 0 &&
        item.x < MAP_SIZE &&
        item.y >= 0 &&
        item.y < MAP_SIZE
      ) {
        grid[item.y][item.x] = item.id;
      }
    }

    return grid;
  });

  return {
    state: game.state,
    location,
    room,
    exits,
    cells,
    mapSize: MAP_SIZE,
    lookAround: game.lookAround,
    move: (dir: DirectionT) => game.move(dir),
    canMove: (dir: DirectionT) => game.canMove(dir),
  };
}
