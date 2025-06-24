<script>
  import Card from '$lib/card.svelte'
</script>

<div class="container">
  <div class="card">
    <div class="square">
      <p class="line1">最上川</p>
      <p class="line2">あつめて早し</p>
      <p class="line3">五月雨を</p>
    </div>
  </div>
    <div class="card">
    <div class="square">
      <p>横倉　　　健一</p>
    </div>
  </div>
    <div class="card">
    <div class="square">
      <p>Lorem</p>
    </div>
  </div>
    <div class="card">
    <div class="square">
      <p>Lorem</p>
    </div>
  </div>
    <div class="card">
    <div class="square">
      <p>Lorem</p>
    </div>
  </div>
</div>

<style>
    .container {
      background-color: var(--color1);
      width: 100vw;
      height: 94vh;
      display: flex;
      flex-direction: row;
      gap: 2rem;
      position: fixed;
      justify-content: center;
      font-family: 'Noto Sans JP', sans-serif;
      margin: 0;
      left: 0;
      top: 6vh;
    }
    .card {
      position: relative;
      height: 70vh;
      width: 15vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 
        0 16px 48px rgba(0, 0, 0, 0.3),
        0 32px 96px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s ease;
    }
    .card:hover {
      transform: translateY(-10px);
      transform: scale(1.05);
    }
    /* First image (100% opacity) */
    .card::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('seigaiha.svg');
      background-size: auto 100%; /* 5 cards × 100% = 500% */
      background-repeat: repeat-x;
      background-position: 0 0;
      opacity: 1;
      z-index: 1;
    }
    /* Second image (50% opacity) */
    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('fuji_background.png');
      background-size: 500% 100%; /* 5 cards × 100% = 500% */
      background-repeat: no-repeat;
      opacity: 0.92;
      z-index: 2;
    }
    .square {
      width: 100%;
      max-height: 80%;
      margin-top: 20%;
      display: flex;
      justify-content: center;
      z-index: 3;
      filter: saturate(0.7) contrast(0.9) brightness(0.95);
    }
    .square::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.05);
    }
    p {
      margin: 0;
      font-size: 4rem;
      font-weight: 700;
      font: 'Noto Sans JP', sans-serif;
      text-orientation: upright;
      writing-mode: vertical-lr;
    }
    .card:nth-child(1) .square {
      color: var(--color10);
    }
    .card:nth-child(2) .square {
      color: var(--color7);
    }
    .card:nth-child(3) .square {
      color: var(--color8);
    }
    .card:nth-child(4) .square {
      color: var(--color6);
    }
    .card:nth-child(5) .square {
      color: var(--color9);
    }
    .card:nth-child(1) {
      margin-top: 1rem;
    }
    .card:nth-child(2) {
      margin-top: 4rem;
    }
    .card:nth-child(3) {
      margin-top: 7rem;
    }
    .card:nth-child(4) {
      margin-top: 10rem;
    }
    .card:nth-child(5) {
      margin-top: 13rem;
    }
    /* Position each card's slice */
    .card:nth-child(1)::before,
    .card:nth-child(1)::after {
      background-position: 0% 0; /* Show leftmost 20% */
    }

    .card:nth-child(2)::before,
    .card:nth-child(2)::after {
      background-position: 25% 0; /* Show next 20% */
    }

    .card:nth-child(3)::before,
    .card:nth-child(3)::after {
      background-position: 50% 0; /* Show middle 20% */
    }

    .card:nth-child(4)::before,
    .card:nth-child(4)::after {
      background-position: 75% 0; /* Show next 20% */
    }

    .card:nth-child(5)::before,
    .card:nth-child(5)::after {
      background-position: 100% 0; /* Show rightmost 20% */
    }
  </style>
