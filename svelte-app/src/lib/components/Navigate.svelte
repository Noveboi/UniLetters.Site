<script lang="ts">
    import type { Snippet } from "svelte";
    import Button from "./Button.svelte";

    type NavigateProps = {
        to: string,
        children: Snippet
    } 

    const { to, children }: NavigateProps = $props();
</script>

<a href={to}>
    <Button {children}/>
</a>