<script lang="ts">
    import type { Snippet } from "svelte";

    type ButtonContainerProps = { children: Snippet }
    const { children }: ButtonContainerProps = $props();
</script>

<div class="button-container">
    {@render children()}
</div>

<style>
    .button-container {
        display: flex;
        justify-content: end;
        margin-right: 5rem;
    }
</style>