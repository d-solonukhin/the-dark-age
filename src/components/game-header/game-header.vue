<template>
  <div class="game-header">
    <p class="game-header__location">{{ location.name }}</p>

    <h3 class="game-header__room">{{ room.name }}</h3>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import * as game from '@/engine/game';

const location = computed(() => game.getLocation());
const room = computed(() => game.getRoom());
</script>

<style src="./game-header.pcss"></style>
