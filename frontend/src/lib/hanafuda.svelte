<script lang="ts">
    let { width, card, children } = $props();
</script>

<div class="hanafuda"
    style:width={width ? `${width}vw` : '4vw'}
>
    <div class="hanafuda-content"
        style:background-image={card ? `url(${card})` : 'none'}
    >
        {@render children()}
    </div>
</div>

<style>
    .hanafuda {
      color: #f4f1ec;
      border: 2px solid var(--color12);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      transition: transform 0.2s ease;
      background-size: cover;
      background-color: var(--color2);
      aspect-ratio: 13 / 21;
    }
    .hanafuda:hover {
      transform: translateY(8vh);
    }
    .hanafuda-content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      background-position: center;
    }
</style>