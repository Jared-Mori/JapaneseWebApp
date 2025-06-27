<script lang="ts">
    import type { Snippet } from 'svelte';
    let { hoverFlip, width, front, back }: { hoverFlip: boolean, width: number | undefined, front: Snippet, back: Snippet } = $props();

    let flipped = $state(false);
</script>

<button 
  class="card-wrapper" 
  class:hover-enabled={hoverFlip}
  onclick={() => {
    if (!hoverFlip) { flipped = !flipped; }
  }}
  style:width={width ? `${width}vh` : '100%'}
>
    <div class="card" class:flipped={flipped}>
        <div class="card-face front">
          {@render front()}
        </div>
        <div class="card-face back">
          {@render back()}
        </div>
    </div>
</button>

<style>
    .card-wrapper {
      perspective: 1000px;
      aspect-ratio: 13 / 21;
      background: none;
      border: none;
    }
    .card {
      border: none;
      position: relative;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      box-shadow: 
        0 16px 48px rgba(0, 0, 0, 0.3),
        0 32px 96px rgba(0, 0, 0, 0.15);
      transition: transform 0.6s ease;
      will-change: transform;
      transform: translateZ(0);
      transform-style: preserve-3d;
      justify-content: center;
    }
    .card-face {
      position: absolute;
      margin: 0;
      max-height: 100%;
      backface-visibility: hidden;
    }
    .card-wrapper.hover-enabled:hover .card {
      transform: translateY(-10px) scale(1.05) rotateY(180deg);
    }
    .card.flipped {
      transform: rotateY(180deg);
    }
    .front {
      z-index: 2;
    }
    .back {
      transform: rotateY(180deg);
    }
</style>