<script>
	export let data;
</script>

<h1>Professional Resume</h1>
<h3>For a downloadable pdf of the information, click here</h3>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/resume/{slug}">{title}</a></li>
	{/each}
</ul>