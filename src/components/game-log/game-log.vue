<template>
  <section class="game-log">
    <article v-for="entry in state.log" :key="entry.id" class="game-log__entry">
      <small class="game-log__kind">{{ entry.kind }}</small>

      <pre class="game-log__text">{{ entry.text }}</pre>
    </article>
  </section>
</template>

<script setup lang="ts">
import * as game from '@/engine/game';

const state = game.state;
</script>

<style src="./game-log.pcss"></style>
