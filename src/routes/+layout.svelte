<script>
  import '@fontsource/fira-sans';
  import gitHubLogo from '$lib/assets/github-logo.svg';
  import linkedInLogo from '$lib/assets/linkedin-logo.svg';
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
  <div class="social-media">
    <div class="social-media-site">
      <a href="https://github.com/JonasTriki" target="_blank" rel="noreferrer">
        <img src={gitHubLogo} alt="GitHub" />
      </a>
    </div>
    <div class="social-media-site">
      <a href="https://www.linkedin.com/in/jonas-triki/" target="_blank" rel="noreferrer">
        <img src={linkedInLogo} alt="LinkedIn" />
      </a>
    </div>
  </div>
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
  $tablet-width: 768px;
  $desktop-width: 1024px;

  @mixin tablet {
    @media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {
      @content;
    }
  }

  @mixin desktop {
    @media (min-width: #{$desktop-width}) {
      @content;
    }
  }

  :global(html, body) {
    margin: 0;
    padding: 0;
    font-family: 'Fira Sans', sans-serif;
    font-size: 16px;
    background-color: #f7f3ee;
  }
  :global(header) {
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    nav {
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
      max-width: 16rem;

      @include tablet;
      @include desktop {
        max-width: 20rem;
      }

      a {
        color: black;
        text-decoration: none;
        font-size: 1rem;
        line-height: 2rem;

        @include tablet;
        @include desktop {
          font-size: 1.125rem;
          line-height: 2rem;
        }
      }
    }

    .social-media {
      display: flex;

      .social-media-site img {
        width: 2rem;
        height: 2rem;
        vertical-align: middle;

        @include tablet;
        @include desktop {
          width: 2rem;
          height: 2rem;
        }
      }

      .social-media-site:not(:last-child) {
        margin-right: 1rem;
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
