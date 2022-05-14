<template>
  <div>
    123
    <m-avatar :size="60" src="https://empty" @error="loadError">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
    </m-avatar>
    <m-avatar
      size="50"
      shape="circle"
      src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    ></m-avatar>
    <m-avatar
      size="small"
      src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    ></m-avatar>
  </div>
</template>
<script setup lang="ts">
const loadError = (e) => {
  console.log("load error: ",e);
};
</script>
