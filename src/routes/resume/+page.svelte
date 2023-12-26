<script>
	export let data;
</script>

<h1>Professional Resume</h1>
<h3>For a downloadable pdf of the information, click <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bradley-faircloth-576a74a3/overlay/1703562264683/single-media-viewer/?profileId=ACoAABYMfSoBKYmz62SZTi6QkziqV3xNHuPGvOI">here</a></h3>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/resume/{slug}">{title}</a></li>
	{/each}
</ul>