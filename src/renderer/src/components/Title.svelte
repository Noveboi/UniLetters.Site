<script>
  const { message } = $props()
</script>

<h1 class="title title-container">{message}</h1>

<style>
  .title {
    position: sticky;
    top: 0;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5rem;
  }

  .title-container {
    display: flex;
    justify-content: center;
  }
</style>
