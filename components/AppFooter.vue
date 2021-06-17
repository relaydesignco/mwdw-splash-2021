<template>
  <footer>
    <div class="mt-12 p-4 md:pl-0 max-w-screen-lg mx-auto text-s">
      <p>© {{ year }} AIGA Midwest Design Week</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="postcss" scoped></style>
