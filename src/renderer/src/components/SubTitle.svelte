<script>
  import '@fontsource/gloria-hallelujah'

  const { message } = $props()
</script>

<h2 class="title title-container">{message}</h2>

<style>
  .title {
    color: black;
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 2.2rem;
  }

  .title-container {
    display: flex;
    justify-content: center;
  }
</style>
