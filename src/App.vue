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

    <Minimap />

    <p class="muted">
      Выходы: {{ exits.map((d) => DIRECTION_LABEL[d]).join(', ') || 'нет' }}
    </p>

    <section class="log">
      <article v-for="entry in state.log" :key="entry.id">
        <small>{{ entry.kind }}</small>
        <pre>{{ entry.text }}</pre>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import * as game from './engine/game';
import { DIRECTION_LABEL, type DirectionT } from './types';
import Minimap from './components/minimap/minimap.vue';

const state = game.state;
const location = computed(() => game.getLocation());
const room = computed(() => game.getRoom());
const exits = computed(() => game.getExits());

const dirs: DirectionT[] = ['up', 'left', 'right', 'down'];
</script>

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
    '. up .'
    'left . right'
    '. down .';
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
</style>
