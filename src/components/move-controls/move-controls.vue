<template>
  <div class="move-controls">
    <button
      v-for="direction in directions"
      :key="direction"
      type="button"
      class="move-controls__button"
      :class="`move-controls__button--${direction}`"
      :disabled="!game.canMove(direction)"
      @click="game.move(direction)"
    >
      {{ DIRECTION_LABEL[direction] }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { DIRECTION_LABEL, type DirectionT } from '@/types';
import * as game from '@/engine/game';

const directions: DirectionT[] = ['up', 'left', 'right', 'down'];
</script>

<style src="./move-controls.pcss"></style>
