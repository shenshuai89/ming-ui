<template>
  <div>
    <m-button @click="showMessage">提示消息</m-button>
  </div>
</template>
<script setup lang="ts">
// import { MMessage } from "ming-ui";
import { MMessage } from "@ming-ui/message";
const showMessage = () => {
  MMessage({
    type: "success",
  });
};
</script>
