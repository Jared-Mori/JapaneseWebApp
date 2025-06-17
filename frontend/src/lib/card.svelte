<script lang="ts">
    let { color, children } = $props();
</script>

<div class="section" style="background-color: {color}">
    {@render children()}
</div>

<style>
    .section {
      flex: 1;
      min-height: 75px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
    }
</style>