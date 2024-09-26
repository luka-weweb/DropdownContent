<template>
  <wwLayout path="slot" v-bind="$attrs"></wwLayout>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    content: { type: Object, required: true },
    uid: { type: String, required: true },
    wwFrontState: { type: Object, required: true },
    wwEditorState: { type: Object, required: true },
    open: { type: Boolean, required: true },
  },
};
</script>
