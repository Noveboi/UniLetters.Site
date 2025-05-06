<script>
  const { message } = $props()
</script>

<h1 class="title title-container">{message}</h1>

<style>
  .title {
    color: white;
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 2.2rem;
  }

  .title-container {
    display: flex;
    justify-content: center;
  }
</style>
