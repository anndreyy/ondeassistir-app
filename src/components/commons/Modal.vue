<template>
    <sidebar-modal :name="name" id="sidebar-modals-container">
        <slot></slot>
    </sidebar-modal>
</template>

<script>

export default {
  name: 'Modal',
  props: [
    "name"
  ],
  components: {
  },
  created(){
  }
};
</script>