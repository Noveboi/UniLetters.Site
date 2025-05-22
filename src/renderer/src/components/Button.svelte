<script>
  export let type = "button";
  export let onClick = () => {};
  export let className = "";
</script>

<button type={type} on:click={onClick} class={className}>
  <slot /> 
</button>

<style>
    :root {
    --orange: #FF853A;
    --bold-orange: #EB5E07;
    --turqoise: #50F3A4;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: (--orange);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  button:hover {
    background-color: (--bold-orange);
  }
</style>
