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
        border: 2px black;
        width: 40%;
        height: 60%;
    }

    img {
        background-size: cover; 
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
    }
</style>