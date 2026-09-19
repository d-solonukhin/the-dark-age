<template>
  <section class="action-panel">
    <button
      type="button"
      class="action-panel__button"
      @click="game.lookAround()"
    >
      Осмотреться
    </button>
  </section>
</template>

<script setup lang="ts">
import * as game from '@/engine/game';
</script>

<style src="./action-panel.pcss"></style>
