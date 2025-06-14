<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Template from "$lib/components/Template.svelte";
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props();

    const getLetter = async (letterId: number) => {
        const response = await fetch(`/students/${data.student.am}/letters/${letterId}`);
        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            console.log(url);

            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `${data.student.am}_letter.pdf`;
            
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        }
    }
</script>   

<div class="templates-container">
    <Template image="temp" onClick={() => getLetter(1)}></Template>
    <Template image="temp" onClick={() => getLetter(2)}></Template>
</div>

<style>
    .templates-container {
        
    }
</style>