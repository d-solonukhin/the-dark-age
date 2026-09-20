<template>
  <main class="game">
    <div class="game__left-side">
      <GameLog />

      <ActionPanel />
    </div>

    <div class="game__right-side">
      <Minimap />

      <hr />

      <MoveControls />
    </div>
  </main>
</template>

<script setup lang="ts">
import ActionPanel from '@/components/action-panel/action-panel.vue';
import GameLog from '@/components/game-log/game-log.vue';
import Minimap from '@/components/minimap/minimap.vue';
import MoveControls from '@/components/move-controls/move-controls.vue';
</script>

<style src="./game.pcss"></style>
