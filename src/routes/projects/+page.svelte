<svelte:head>
	<title>Projects</title>
	<meta name="description" content="personal projects" />
</svelte:head>

<h1>Hardware and Software Projects</h1>
<div class="cards">
	<!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="card"><img src="https://picsum.photos/200/300" alt="random image from picusm"/>
    <h3>SARA: Smart Automated Robotic Assistant</h3>
    <div class="actions">
      <button><a target="_blank" rel="noopener noreferrer" href="https://github.com/ClothAtTheFair/sara-2.0">See Repo</a></button>
	  <div class="prce">More Info</div>
    </div>
  </div>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="card"><img src="https://picsum.photos/200/400" alt="random image from picusm"/>
    <h3>Personal Portfolio</h3>
    <div class="actions">
      <button><a target="_blank" rel="noopener noreferrer" href="https://github.com/ClothAtTheFair/PersonalPortfolio2.0">See Repo</a></button>
      <div class="prce">More Info</div>
    </div>
  </div>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="card"><img src="https://picsum.photos/300/400" alt="random image from picusm"/>
    <h3>Home Assistant Touchscreen Dashboard</h3>
    <div class="actions">
      <button>See Videos</button>
      <div class="prce">More Info</div>
    </div>
  </div>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="card"><img src="https://picsum.photos/200/500" alt="random image from picusm"/>
    <h3>Modern Record Player</h3>
    <div class="actions">
      <button>See Videos</button>
      <div class="prce">More Info</div>
    </div>
  </div>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="card"><img src="https://picsum.photos/200/200" alt="random image from picusm"/>
    <h3>Deep Learning Chatbot</h3>
    <div class="actions">
      <button><a target="_blank" rel="noopener noreferrer" href="https://github.com/ClothAtTheFair/DeepLearningBot">See Repo</a></button>
      <div class="prce">More Info</div>
    </div>
  </div>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <!-- <div class="card"><img src="https://picsum.photos/300/200" alt="random image from picusm"/>
    <h3>Title 6</h3>
    <div class="actions">
      <button>Buy</button>
      <div class="prce">$45</div>
    </div>
  </div>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <!-- <div class="card"><img src="https://picsum.photos/400/400" alt="random image from picusm"/>
    <h3>Title 7</h3>
    <div class="actions">
      <button>Buy</button>
      <div class="prce">$60</div>
    </div>
  </div>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <!-- <div class="card"><img src="https://picsum.photos/200/400" alt="random image from picusm"/>
    <h3>Title 8</h3>
    <div class="actions">
      <button>Buy</button>
      <div class="prce">$75</div>
    </div>
  </div> -->
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <!-- <div class="card"><img src="https://picsum.photos/200/500" alt="random image from picusm"/>
    <h3>Title 9</h3>
    <div class="actions">
      <button>Buy</button>
      <div class="prce">$100</div>
    </div>
  </div> -->
  <div class="card big">
    <h3>Notes</h3>
    <div class="notes">This is not my full list of projects (hardware and software), but ones I wanted to showcase. Software projects can be found <a target="_blank" rel="noopener noreferrer" href="https://github.com/ClothAtTheFair">here.</a>
		Hardware projects will be showcased either on this website or <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCr1UYl0qR3QI6jIV33NmsSA">here</a> as they become completed.
      <p>layout of this page originally designed by this <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/ghaste">designer</a></p>
    </div>
  </div>
</div>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
:root {
  font-family: 'Roboto', sans-serif;
}

code {
  color: hsl(200, 30%, 61%);
}
h1 {
  font-weight: 100;
  text-align: center;
}

.cards {
  display: grid;
  grid-auto-flow: dense;
  grid-auto-rows: 200px auto auto;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20ch), 1fr));
  gap: 1em;
  width: min(100ch, calc(100% - 2rem));
  margin: 0 auto;
}

.card {
  background-color: #F9F6EF;
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid;
  border: 1px solid #0002;
  box-shadow: .1em .1em .5em #0003 ;
  border-radius: .5em;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 80%;
  }
  h3, .actions {
    padding-inline: .5em;
    margin: 0;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1em;
    color: 	hsl(200, 78%, 41%);
    button {
      all: unset;
      animation: .3s ease;
      padding: .1em .5em;
      border: 1px solid transparent;
      border-radius: .3em;
      cursor: pointer;
      &:hover {
        border: 1px solid currentcolor;
      }
      &:active {
        background-color: hsl(200, 78%, 41%);
        color: #F9F3EE;
        border: 1px solid #000;
      }
    }
    > * {
      padding: .1em .5em;
    }
  }
}
.big {
  grid-column: 1 / -1;
  grid-row: 4 / 7;
  //no subgrid for you
  grid-template-rows: auto 1fr;
  .notes {
    padding: .5em;
  }
  h3 {
    padding-top: .5em;
  }
}
</style>
