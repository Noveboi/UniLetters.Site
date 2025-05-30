<script>
  import '@fontsource/patrick-hand-sc'

  const { message } = $props()
</script>

<h1 class="title title-container">{message}</h1>

<style>
  .title {
    position: sticky;
    top: 0;
    color: white;
    font-family: 'Patrick Hand SC', cursive;
    font-size: 3rem;
  }

  .title-container {
    display: flex;
    justify-content: center;
  }
</style>
