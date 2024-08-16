<script setup>
import { defineProps} from 'vue';

defineProps({
      items: {
      type: Array,
      default: () => []
    },
      headers: {
      type: Array,
      default: () => [] 
    }
});

</script>

<template>
    <table class="table">
      <thead class="table-light text-uppercase">
        <tr>
          <slot name="header"></slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <slot :item="item"></slot>
        </tr>
      </tbody>
    </table>
</template>
