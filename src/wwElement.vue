<template>
  <Teleport
    :to="this.teleportSettings.teleportTarget"
    :disabled="!this.teleport"
    v-if="
      this.teleport
        ? this.teleportSettings.isTeleportReady && this.open
        : this.open
    "
  >
    <wwLayout path="slot" v-bind="$attrs" :class="styleSettings"></wwLayout>
  </Teleport>
</template>

<script>
import { setupTeleport } from "./teleport.js";

export default {
  inheritAttrs: false,
  props: {
    content: { type: Object, required: true },
    wwFrontState: { type: Object, required: true },
    wwEditorState: { type: Object, required: true },
    type: { type: String, required: true },
    styleSettings: { type: Array, required: false },
    teleport: { type: Boolean, required: true },
    escapeCloses: { type: Boolean, required: true },
    open: { type: Boolean, required: true },
  },
  data() {
    return {
      teleportSettings: { teleportTarget: null, isTeleportReady: false },
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.teleport) {
        this.teleportSettings = setupTeleport();
      }
    });
  },
  watch: {
    teleport(newValue) {
      if (newValue) {
        this.teleportSettings = setupTeleport();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
