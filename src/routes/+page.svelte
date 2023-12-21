<script>
	import welcome from '$lib/images/welcom.png';
	import welcome_fallback from '$lib/images/welcom.png';
	import { onMount } from 'svelte';
	import { typewriter } from './transition';
	import { messages } from './loading-messages.js';

	let i = -1;

	onMount(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="personal portfolio" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

	</h1>

	<br>

	<h1>
		My name is Bradley
	</h1>

	<h1>
		To put simply, I am a...
	</h1>

	<h3>
	{#key i}
	<p in:typewriter={{ speed: 10}}>
		{messages[i] || ''}
	</p>
	{/key}
	</h3>
</section>

<style>
	section {
		display: block;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 2%;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	h3 {
		display: grid;
		width: 100%;
		position: relative;
		justify-content: center;
		align-items: stretch;
	}
</style>
