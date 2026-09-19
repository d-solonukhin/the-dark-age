<template>
  <div class="minimap">
    <div v-for="(row, y) in cells" :key="y" class="minimap__row">
      <div
        v-for="(cell, x) in row"
        :key="x"
        class="minimap__cell"
        :class="{
          room: Boolean(cell),
          hero: cell === room.id,
        }"
      >
        {{ cell === room.id ? 'H' : cell ? '·' : '' }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { MAP_SIZE } from '@/consts';
import { useGame } from '@/engine/useGame';

const { location, room } = useGame();

const cells = computed(() => {
  const grid: Array<Array<string | null>> = Array.from(
    { length: MAP_SIZE },
    () => Array.from({ length: MAP_SIZE }, () => null),
  );

  for (const item of Object.values(location.value.rooms)) {
    if (item.x >= 0 && item.x < MAP_SIZE && item.y >= 0 && item.y < MAP_SIZE) {
      grid[item.y][item.x] = item.id;
    }
  }

  return grid;
});
</script>

<style src="./minimap.pcss"></style>
