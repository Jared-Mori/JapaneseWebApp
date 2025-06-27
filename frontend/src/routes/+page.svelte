<script>
  import { goto } from '$app/navigation';
  import Flipcard from '$lib/flipcard.svelte';

  let flipped = false;
</script>

<div class="container">
  <div class="card-wrapper">
    <button class="card" onclick={() => goto('/games/shiritori')}>
        <div class="card-face front">
          <p>しりとり！</p>
        </div>
        <div class="card-face back">
          <p>五月雨を</p>
        </div>
    </button>
  </div>
    <div class="card-wrapper">
    <button class="card" onclick={() => goto('/games/match')}>
        <div class="card-face front">
          <p>ものマッチ</p>
        </div>
        <div class="card-face back">
          <p>裏の顔</p>
        </div>
    </button>
  </div>
    <div class="card-wrapper">
    <button class="card" onclick={() => goto('/games/haiku')}>
        <div class="card-face front">
          <p>日常　　はいく</p>
        </div>
        <div class="card-face back">
          <p>裏の顔</p>
        </div>
    </button>
  </div>
    <div class="card-wrapper">
    <button class="card" onclick={() => goto('/games/counter')}>
        <div class="card-face front">
          <p>なんこ？</p>
        </div>
        <div class="card-face back">
          <p>裏の顔</p>
        </div>
    </button>
  </div>
    <div class="card-wrapper">
    <button class="card" onclick={() => goto('/profile')}>
        <div class="card-face front">
          <p>プロフィール</p>
        </div>
        <div class="card-face back">
          <p>裏の顔</p>
        </div>
    </button>
  </div>
</div>

<style>
    .container {
      width: 100vw;
      height: 93vh;
      display: flex;
      flex-direction: row;
      gap: 2vw;
      position: fixed;
      justify-content: center;
      margin: 0;
      left: 0;
      top: 7vh;
      z-index: 2;
      padding-top: 7vh;
    }
    .card-wrapper {
      perspective: 1000px;
      aspect-ratio: 15 / 35;
      height: 30vw;
    }
    .card {
      border: none;
      position: relative;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      border: 3px solid var(--color13);
      box-shadow: 
        0 16px 48px rgba(0, 0, 0, 0.3),
        0 32px 96px rgba(0, 0, 0, 0.15);
      transition: transform 0.6s ease;
      will-change: transform;
      transform: translateZ(0);
      transform-style: preserve-3d;
      justify-content: center;
    }
    .card-wrapper:hover .card {
      transform: translateY(-1px) scale(1.05) rotateY(180deg);
    }
    .front {
      width: 100%;
      height: 100%;
      background-image: url('/fuji_background.png');
      background-size: 75vw calc(100% + 2px);
      z-index: 2;
      display: flex;
      justify-content: center;
    }
    .front p {
      margin: 0;
      margin-top: 20%;
      padding: 0;
      font-family: var(--hina-mincho);
      font-size: 3vw;
      font-weight: 700;
      text-orientation: upright;
      text-align: left;
      writing-mode: vertical-lr;
    }
    .card-face {
      position: absolute;
      max-height: 100%;
      margin: 0;
      backface-visibility: hidden;
    }
    .back {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      transform: rotateY(180deg);
    }
    .back p {
      margin: 0;
      margin-top: 20%;
      padding: 0;
      font-family: var(--hina-mincho);
      font-size: 3vw;
      font-weight: 700;
      text-orientation: upright;
      text-align: left;
      writing-mode: vertical-lr;
    }
    .card-wrapper:nth-child(1) .front { color: var(--color8);  background-position: 0% 0;  }
    .card-wrapper:nth-child(2) .front { color: var(--color10); background-position: 25% 0;  }
    .card-wrapper:nth-child(3) .front { color: var(--color9); background-position: 50% 0;  }
    .card-wrapper:nth-child(4) .front { color: var(--color6); background-position: 75% 0;  }
    .card-wrapper:nth-child(5) .front { color: var(--color7); background-position: 100% 0; }
    .card-wrapper:nth-child(1) {margin-top: 0;}
    .card-wrapper:nth-child(2) {margin-top: 2.5rem;}
    .card-wrapper:nth-child(3) {margin-top: 5rem;}
    .card-wrapper:nth-child(4) {margin-top: 7.5rem;}
    .card-wrapper:nth-child(5) {margin-top: 10rem;}
  </style>
