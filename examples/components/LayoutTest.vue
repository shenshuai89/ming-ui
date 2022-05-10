<template>
  <div>
    <m-row>
      <m-col :span="6"><div style="padding:5px; margin:5px 0; background: #eeeeee">111</div></m-col>
      <m-col :span="6" :offset="6" style="padding:5px; margin:5px 0; background: #cccccc">22</m-col>
      <m-col :span="6" style="padding:5px; margin:5px 0; background: #eeeeee">2</m-col>
    </m-row>
    <m-row :gutter="20">
      <m-col :span="8"><div style="padding:5px; margin:5px 0; background: #eeeeee">111</div></m-col>
      <m-col :span="8"><div style="padding:5px; margin:5px 0; background: #909399">222</div></m-col>
      <m-col :span="8"><div style="padding:5px; margin:5px 0; background: #eeeeee">333</div></m-col>
    </m-row>
    <m-row justify="space-around">
      <m-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div style="padding:5px; margin:5px 0; background: #cccccc">111</div></m-col
      >
      <m-col :span="34"><div style="padding:5px; margin:5px 0; background: #eeeeee">222</div></m-col>
      <m-col :span="2"><div style="padding:5px; margin:5px 0; background: #cccccc">333</div></m-col>
    </m-row>
  </div>
</template>
