<script lang="ts">
  import { BindWanakana, generateQuestion, checkAnswer, type Question } from '$lib/counterGame';

  export let data: {
    nouns: { noun: string; counter_group: string }[];
    counterForms: { number: number; counter_group: string; reading: string }[];
  };

  let currentQuestion: Question | null = null;
  let userAnswer = '';
  let japaneseInputEl: HTMLInputElement | null = null;
  let displayText: string | null = null;
  let shake = false;
  let score = 0;

  // Initialize the question if data is available
  $: if (data?.nouns.length && data?.counterForms.length && !currentQuestion) {
    setQuestion();
  }

  // Set a new question, clear user input, and reset display text
  function setQuestion() {
    const q = generateQuestion(data.nouns, data.counterForms);
    if (q) {
      currentQuestion = q;
      userAnswer = '';
      updateDisplayText(`${currentQuestion.number} ${currentQuestion.noun}`);
    }
    if (japaneseInputEl) {
      japaneseInputEl.value = '';
    }
  }

  // Handles answer checking and question transition
  function handleCheckAnswer() {
    if (!currentQuestion) return;

    const resultObj = checkAnswer(userAnswer, currentQuestion);

    // If input is empty, shake the input field
    if (!userAnswer.trim()) {
      shakeInput();
      return;
    }

    if (resultObj.correct) {
      updateDisplayText(`正解！`);
      setTimeout(() => { 
        setQuestion();
        score += 1;
      }, 1000);
    } else {
      updateDisplayText(`不正解。正しい答えは「${resultObj.message}」です。`);
      setTimeout(() => {
        setQuestion();
        score = 0;
      }, 1000);
    }
  }

  function updateDisplayText(newText: string) {
    displayText = newText;
  }

  function shakeInput() {
      shake = false;
      setTimeout(() => {
        shake = true;
        setTimeout(() => shake = false, 1000);
      }, 0);
      return;
  }
</script>

<div class="content">
    <h1>Japanese Counter Game</h1>
    <h1 id="score">Score: {score}</h1>

    {#if currentQuestion}
      <div class="card">
          <div class="section english-text">
              <p id="question">
                {displayText}
              </p>
          </div>
          <div class="section japanese-input">
              <input
                class:shake={shake}
                bind:this={japaneseInputEl}
                type="text" 
                placeholder="答え"
                use:BindWanakana
                bind:value={userAnswer}
                on:keydown="{(e) => {
                  if (e.key === 'Enter') {
                    handleCheckAnswer();
                  }
                }}"
              >
          </div>
          <div class="section blank">
            <p id="result"></p>
          </div>
      </div>
    {/if}
</div>

<style>
  .content {
      background-color: var(--background);
      min-height: 100vh;
      padding-top: 6vh;
      width: 100vw;
      margin: 0;
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
  }
  #score {
      position: absolute;
      right: 20px;
  }
  h1 {
      text-align: center;
      font-family: Noto Sans JP, sans-serif;
      color: var(--header);
      font-size: 28px;
  }
  input[type="text"] {
      border: none;
      outline: none;
  }
  .card {
      display: flex;
      flex-direction: column;
      width: 80%;
      max-width: 600px;
      margin: 20px auto;
      border: none;
      box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.25);
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
      font-family: Noto Sans JP, sans-serif;
      font-size: 24px;
      font-weight: 400;
      font-style: normal;
      color: var(--header);
      margin: 0;
  }
  .japanese-input input {
      width: 100%;
      text-align: center;
      background: transparent;
      font-family: Noto Sans JP, sans-serif;
      font-size: 20px;
      font-weight: 400;
      font-style: normal;
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