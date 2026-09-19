<script setup lang="ts">
import { computed } from "vue";
import * as game from "./engine/game";
import { DIRECTION_LABEL, type DirectionT } from "./types";
import { MAP_SIZE } from "./consts";

const state = game.state;
const location = computed(() => game.getLocation());
const room = computed(() => game.getRoom());
const exits = computed(() => game.getExits());

const dirs: DirectionT[] = ["up", "left", "right", "down"];

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

<template>
  <main class="wrap">
    <p class="muted">{{ location.name }}</p>
    <h1>{{ room.name }}</h1>

    <div class="row">
      <button type="button" @click="game.lookAround()">Осмотреться</button>
    </div>

    <div class="compass">
      <button
        v-for="dir in dirs"
        :key="dir"
        type="button"
        class="dir"
        :class="dir"
        :disabled="!game.canMove(dir)"
        @click="game.move(dir)"
      >
        {{ DIRECTION_LABEL[dir] }}
      </button>
    </div>

    <section class="minimap">
      <div v-for="(row, y) in cells" :key="y" class="minimap-row">
        <div
          v-for="(cell, x) in row"
          :key="x"
          class="minimap-cell"
          :class="{
            room: Boolean(cell),
            hero: cell === room.id,
          }"
        >
          {{ cell === room.id ? "@" : cell ? "·" : "" }}
        </div>
      </div>
    </section>

    <p class="muted">
      Выходы: {{ exits.map((d) => DIRECTION_LABEL[d]).join(", ") || "нет" }}
    </p>

    <section class="log">
      <article v-for="entry in state.log" :key="entry.id">
        <small>{{ entry.kind }}</small>
        <pre>{{ entry.text }}</pre>
      </article>
    </section>
  </main>
</template>

<style scoped>
.wrap {
  max-width: 720px;
  margin: 24px auto;
  font-family: Georgia, serif;
}

.muted {
  color: #888;
}

.row {
  display: flex;
  gap: 8px;
  margin: 12px 0;
}

.compass {
  display: grid;
  width: 280px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    ". up ."
    "left . right"
    ". down .";
  gap: 8px;
  margin: 12px 0;
}

.dir.up {
  grid-area: up;
}
.dir.down {
  grid-area: down;
}
.dir.left {
  grid-area: left;
}
.dir.right {
  grid-area: right;
}

button:disabled {
  opacity: 0.35;
}

.log article {
  margin: 10px 0;
}

pre {
  margin: 0;
  white-space: pre-wrap;
  font-family: inherit;
}

.minimap {
  display: grid;
  gap: 4px;
  width: fit-content;
  margin: 16px 0;
}

.minimap-row {
  display: grid;
  grid-template-columns: repeat(8, 28px);
  gap: 4px;
}

.minimap-cell {
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  display: grid;
  place-items: center;
  font-family: monospace;
  color: #bbb;
}

.minimap-cell.room {
  background: #f3f0ea;
  border-color: #c9c1b3;
  color: #888;
}

.minimap-cell.hero {
  background: #2b2b2b;
  border-color: #2b2b2b;
  color: #fff;
}
</style>
