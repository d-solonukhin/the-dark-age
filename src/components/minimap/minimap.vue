<template>
  <div class="minimap">
    <div v-for="(row, y) in cells" :key="y" class="minimap__row">
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
  </div>
</template>

<script setup lang="ts">
import { useGame } from "../../engine/useGame";

const { cells, room } = useGame();
</script>

<style src="./minimap.module.css"></style>
