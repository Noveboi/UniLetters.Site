<script lang="ts">
    import Title from '$lib/components/Title.svelte';
    import '../global.css'

    const { children } = $props();
</script>
<div class="bg">
    <div class="background"></div>
</div>

<div class="app">
    <div class="header">
        <Title message="Uni Letters" />
    </div>

    <main>
        {@render children()}
    </main>
</div>

<style>
    .app {
        width: 100vw;
        height: 100vh;
    }

    .header {
        position: sticky;
        top: 0;
        background: black;
    }

    .bg {
        position: fixed; 
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        background: black;
    }

    .background {
        width: 100%;
        height: 100%;
        background-image: url('/images/notebook-background.svg');
        background-size: cover; 
        background-repeat: no-repeat;
        background-position: center;
        z-index: -1;
    }
</style>