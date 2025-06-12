<script lang="ts">
  type TemplateProps {
    onClick?: () => void,
    selected: boolean,
  }

  import '@fontsource/gloria-hallelujah'

  const { onClick, selected }: TemplateProps = $props()
</script>

<button type="button" onclick={onClick} selected="false" class="pdf-template">
    <img src="" alt="">
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