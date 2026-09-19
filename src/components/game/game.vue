<template>
  <main class="game">
    <GameHeader />

    <ActionPanel />

    <MoveControls />

    <Minimap />

    <GameLog />
  </main>
</template>

<script setup lang="ts">
import ActionPanel from '@/components/action-panel/action-panel.vue';
import GameHeader from '@/components/game-header/game-header.vue';
import GameLog from '@/components/game-log/game-log.vue';
import Minimap from '@/components/minimap/minimap.vue';
import MoveControls from '@/components/move-controls/move-controls.vue';
</script>

<style src="./game.pcss"></style>
