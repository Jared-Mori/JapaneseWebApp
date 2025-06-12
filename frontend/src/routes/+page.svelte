<script lang="ts">
  import { bindWanakana } from '../actions.svelte.js';

  export let data: {
    nouns: { noun: string; counter_group: string }[];
    counterForms: { number: number; counter_group: string; reading: string }[];
  };

  let currentQuestion: {
    noun: string;
    number: number;
    correctReading: string;
  } | null = null;

  let userAnswer = '';
  let result = '';

  let japaneseInputEl: HTMLInputElement | null = null;

  let shake = false;

  function randomItem<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateQuestion() {
    const noun = randomItem(data.nouns);
    const matchingForms = data.counterForms.filter(
      form => form.counter_group === noun.counter_group
    );

    if (matchingForms.length === 0) {
      console.error(`No counter forms for group ${noun.counter_group}`);
      result = 'No valid counter forms for this noun';
      return;
    }

    const form = randomItem(matchingForms);

    currentQuestion = {
      noun: noun.noun,
      number: form.number,
      correctReading: form.reading
    };

    userAnswer = '';
    result = '';
  }

  $: if (data?.nouns.length && data?.counterForms.length && !currentQuestion) {
    generateQuestion();
  }

  function checkAnswer() {
    if (!currentQuestion) return;

    const correct = currentQuestion.correctReading.trim();
    const guess = userAnswer.trim();

    if (!guess) {
      shake = false;
      // Wait for DOM update, then set shake to true
      setTimeout(() => {
        shake = true;
        setTimeout(() => shake = false, 1000);
      }, 0);
      return;
    }

    if (guess === correct) {
      result = '✅ Correct!';
    } else {
      result = `❌ Incorrect. Correct: ${correct}`;
      shake = false;
      setTimeout(() => {
        shake = true;
        setTimeout(() => shake = false, 1000);
      }, 0);
    }
  }
</script>

<div class="content">
    <div class="header-container">
        <div class="circle" id="circle">
            回
            <div class="dropdown" id="dropdown">
                <div class="end-circle" id="end-circle"></div>
            </div>
        </div>
        
        <h1>Japanese Counter Game</h1>
        <h1 id="score">Score: 0</h1>
    </div>

    {#if currentQuestion}
      <div class="card">
          <div class="section english-text">
              <p id="question">{currentQuestion.number} {currentQuestion.noun}</p>
          </div>
          <div class="section japanese-input">
              <input
                class:shake={shake}
                bind:this={japaneseInputEl}
                type="text" 
                placeholder="日本語入力" 
                use:bindWanakana
                bind:value={userAnswer}
                on:keydown="{(e) => {
                  if (e.key === 'Enter') {
                    checkAnswer();
                  }
                }}"
              >
          </div>
          <div class="section blank">
            <p id="result">{result}</p>
          </div>
      </div>
    {/if}
</div>


<style>
  .content {
      padding-top: 70px;
  }
  .header-container {
      display: flex;
      align-items: center;
      justify-content: center; /* Center the header content */
      gap: 10px;
      position: relative; /* Ensure the dropdown is positioned relative to the header */
  }
  #score {
      position: absolute;
      right: 20px;
  }
  .circle {
      width: 40px;
      height: 40px;
      background-color: var(--topbar);
      border-radius: 50%;
      transition: transform 0.3s;
      cursor: pointer;
      position: relative; /* Ensure the dropdown is positioned relative to the circle */
      left: 20px;
      z-index: 4; /* Ensure the circle is above the dropdown */
      font-size: 18px;
      text-align: center;
      font-family: 'Hiragino Kaku Gothic Pro', Meiryo, sans-serif;
      color: var(--card-bg);
      line-height: 43px; /* Vertically center the text */
  }
  .circle:hover {
      transform: scale(1.2);
      border: 1px solid var(--input-bg); /* Add a white border */
  }
  .end-circle {
      width: 40px;
      height: 40px;
      background-color: var(--topbar);
      border-radius: 50%;
      transition: transform 0.3s;
      cursor: pointer;
      position: relative; /* Ensure the dropdown is positioned relative to the circle */
      z-index: -3; /* Ensure the circle is above the dropdown */
  }

  .dropdown {
      width: 100%;
      position: absolute;
      top: 0px;
      background-color: var(--topbar);
      line-height: 7px;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.8s ease-out, opacity 0.7s ease-out, visibility 0.7s;
      border-radius: 20px;
      opacity: 0;
      visibility: hidden;
      z-index: -1;
  }
  .circle:hover .dropdown {
      max-height: 800px;
      opacity: 1;
      visibility: visible;
  }
  h1 {
      font-family: 'M PLUS Rounded 1c', sans-serif; /* Bubbly, rounded font */
      color: var(--header);
      font-size: 28px;
      margin: 0 auto; /* Center the title */
  }
  input[type="text"] {
      border: none;
      outline: none;
  }
  /* Card Styling */
  .card {
      display: flex;
      flex-direction: column;
      width: 80%;
      max-width: 600px;
      margin: 20px auto;
      border: none;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  .section {
      flex: 1;
      min-height: 75px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .english-text {
      background-color: var(--card-bg);
  }
  .japanese-input {
      background-color: var(--input-bg);
  }
  .blank {
      background-color: var(--topbar);
  }
  .english-text p {
      font-family: 'M PLUS Rounded 1c', sans-serif;
      font-size: 24px;
      color: var(--header-light);
      margin: 0;
  }
  /* Japanese Input Styling */
  .japanese-input input {
      width: 100%;
      font-size: 18px;
      text-align: center;
      font-family: 'Hiragino Kaku Gothic Pro', Meiryo, sans-serif;
      background: transparent;
  }
  .japanese-input input:focus {
      color: var(--header);
  }
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
  }
  .shake {
      animation: shake 1s;
  }
</style>