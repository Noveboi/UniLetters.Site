<script>
  import Title from './components/Title.svelte'
</script>

<div class="background">
  <Title message="Uni Letters" />
</div>

<style>
  :global(html, body) {
    display: block;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .background {
    position: fixed; 
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('/images/notebook-background.svg');
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }
</style>