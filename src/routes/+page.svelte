<script>
  import portrait from '$lib/assets/jonas-triki.jpg';
</script>

<main class="home">
  <article>
    <img class="portrait" src={portrait} alt="Self-portrait" />
    <div class="intro">
      <h1 class="title">👋, I'm Jonas. A developer.</h1>
      <p class="subtitle">
        I also have a great interest in machine learning and developing apps in my sparetime. Feel
        free to check out some of my projects!
      </p>
    </div>
  </article>
</main>

<style lang="scss">
  main.home {
    display: flex;
    justify-content: center;

    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;
      max-width: 42rem;

      h1.title {
        font-size: 2rem;
      }

      p.subtitle {
        font-size: 1.25rem;
      }

      img.portrait {
        width: 12rem;
        border-radius: 50%;
      }

      .intro {
        text-align: center;
      }
    }
  }
</style>
