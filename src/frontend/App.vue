<template>
  <router-view/>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Router from './routes/routes';

export default defineComponent({
  components: {
    Router,
  },
});
</script>
