<script lang="ts">
    import Title from '$lib/components/Title.svelte';
    import '../global.css'

    const { children } = $props();
</script>

<div class="background"></div>
<Title message="Uni Letters" />

{@render children()}

<style>
    .background {
        position: fixed; 
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-image: url('/images/notebook-background.svg');
        background-size: cover; 
        background-repeat: no-repeat;
        background-position: center;
        z-index: -1;
    }
</style>