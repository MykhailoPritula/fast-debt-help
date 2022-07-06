<template>
  <div class="page page-index">
    <IndexHeader />
    <IndexContent />
    <IndexFooter />
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$route.query.click_id) {
      this.$axios.$get(
        `https://www.bls29trk.com/?nid=528&event_id=235&transaction_id=${this.$route.query.click_id}`
      );
    }
  },
};
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>