<script lang="ts">
  type TemplateProps = {
    onClick: () => void,
    image: string
  }

  import '@fontsource/gloria-hallelujah'

  const { onClick, image }: TemplateProps = $props()
</script>

<button type="button" onclick={onClick} class="pdf-template">
    <img src={image} alt="PDF Template">
</button>

<style>
    .pdf-template {
        border: 4px solid black;
        background-color: white;
        border-radius: 10px;
        width: 15rem;
        height: 20rem;
    }

    img {
        width: 100%;
    }
</style>