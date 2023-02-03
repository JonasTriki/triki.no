<script>
	import '@fontsource/fira-sans';
	import svelteLogo from '$lib/assets/svelte-logo.svg';
	import vercelLogo from '$lib/assets/vercel-logo.svg';
</script>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/projects">Projects</a>
		<a href="/resume">Resume</a>
	</nav>
</header>

<slot />

<footer>
	<span>Made with 🤘 by&nbsp;</span>
	<a href="https://github.com/JonasTriki" target="_blank" rel="noreferrer">Jonas Folkvord Triki</a>.
	<span>&nbsp;Powered by&nbsp;</span>
	<a href="https://svelte.dev/" target="_blank" rel="noreferrer">
		<img class="logo" src={svelteLogo} alt="Svelte logo" /> Svelte
	</a>
	<span>&nbsp;and&nbsp;</span>
	<a href="https://vercel.com/" target="_blank" rel="noreferrer">
		<img class="logo" src={vercelLogo} alt="Vercel logo" /> Vercel
	</a>
	<span>.</span>
</footer>

<style lang="scss">
	:global(html, body) {
		margin: 0;
		padding: 0;
		font-family: 'Fira Sans', sans-serif;
		font-size: 16px;
		background-color: #f7f3ee;
	}
	:global(header) {
		padding: 1rem;

		nav {
			display: flex;
			justify-content: space-between;
			max-width: 16rem;

			a {
				color: black;
				text-decoration: none;
				font-size: 1rem;
				line-height: 1rem;
			}
		}
	}
	:global(main) {
		min-height: calc(100vh - 3rem);
	}
	:global(article) {
		padding: 1rem 2rem;
	}
	:global(footer) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		color: #f7f3ee;
		background-color: #3b3a38;
		padding: 1rem;
		text-align: center;

		a {
			color: #f7f3ee;
			text-decoration: none;
		}
		a:hover {
			text-decoration: underline;
		}

		img.logo {
			width: 1rem;
			height: 1rem;
			vertical-align: middle;
		}
	}
	:global(h1.title) {
		font-size: 2rem;
	}
</style>
