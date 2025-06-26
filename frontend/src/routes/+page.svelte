<script>
  import { goto } from '$app/navigation';

  let flipped = false;
</script>

<div class="container">
  <div class="card-wrapper">
    <button class="card" onclick={() => goto('/profile')}>
        <div class="card-face front">
          <p class="line1">最上川</p>
          <p class="line2">あつめて早し</p>
          <p class="line3">五月雨を</p>
        </div>
        <div class="card-face back">
          <p class="line1">最上川</p>
          <p class="line2">あつめて早し</p>
          <p class="line3">五月雨を</p>
        </div>
    </button>
  </div>
    <div class="card-wrapper">
    <button class="card" onclick={() => goto('/profile')}>
        <div class="card-face front">横倉　　　健一</div>
        <div class="card-face back">裏の顔</div>
    </button>
  </div>
    <div class="card-wrapper">
    <button class="card" onclick={() => goto('/profile')}>
        <div class="card-face front">横倉　　　健一</div>
        <div class="card-face back">裏の顔</div>
    </button>
  </div>
    <div class="card-wrapper">
    <button class="card" onclick={() => goto('/profile')}>
        <div class="card-face front">横倉　　　健一</div>
        <div class="card-face back">裏の顔</div>
    </button>
  </div>
    <div class="card-wrapper">
    <button class="card" onclick={() => goto('/profile')}>
        <div class="card-face front">横倉　　　健一</div>
        <div class="card-face back">裏の顔</div>
    </button>
  </div>
</div>

<style>
    .container {
      width: 100vw;
      height: 94vh;
      display: flex;
      flex-direction: row;
      gap: 2vw;
      position: fixed;
      justify-content: center;
      margin: 0;
      left: 0;
      top: 9vh;
      z-index: 2;
    }
    .card-wrapper {
      perspective: 1000px;
      height: 35vw;
      width: 15vw;
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
      background-image: url('/fuji_background.png');
      background-size: 75vw calc(100% + 2px);
    }
    .card-wrapper:hover .card {
      transform: translateY(-10px) scale(1.05) rotateY(180deg);
    }
    .line1 {
      margin-top: 8vw;
    }
    .line2 {
      margin-top: 4vw;
    }
    p {
      margin: 0;
      padding: 0;
    }
    .card-face {
      position: absolute;
      max-height: 100%;
      align-items: left;
      margin: 0;
      margin-top: 20%;
      font-family: var(--hina-mincho);
      font-size: 3vw;
      font-weight: 700;
      text-orientation: upright;
      text-align: left;
      writing-mode: vertical-lr;
      backface-visibility: hidden;
    }
    .front {
      z-index: 2;
    }
    .back {
      transform: rotateY(180deg);
    }
    .card-wrapper:nth-child(1) .card { color: var(--color7);  background-position: 0% 0;  }
    .card-wrapper:nth-child(2) .card { color: var(--color10); background-position: 25% 0;  }
    .card-wrapper:nth-child(3) .card { color: var(--color9); background-position: 50% 0;  }
    .card-wrapper:nth-child(4) .card { color: var(--color6); background-position: 75% 0;  }
    .card-wrapper:nth-child(5) .card { color: var(--color8); background-position: 100% 0; }
    .card-wrapper:nth-child(1) {margin-top: 0;}
    .card-wrapper:nth-child(2) {margin-top: 2.5rem;}
    .card-wrapper:nth-child(3) {margin-top: 5rem;}
    .card-wrapper:nth-child(4) {margin-top: 7.5rem;}
    .card-wrapper:nth-child(5) {margin-top: 10rem;}
  </style>
