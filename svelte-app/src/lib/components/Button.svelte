<script lang="ts">
  interface ButtonProps {
    onClick?: () => void,
    className?: string,
    children: any
  }

  import '@fontsource/gloria-hallelujah'

  const { onClick, className, children }: ButtonProps = $props()
</script>

<button type="button" onclick={onClick} class={className}>
  {@render children()}
</button>

<style>
  :root {
    --orange: #FF853A;
    --bold-orange: #EB5E07;
    --turqoise: #50F3A4;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: var(--orange);
    color: black;
    border: none;
    border-radius: 10px;
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: var(--bold-orange);
  }
</style>
