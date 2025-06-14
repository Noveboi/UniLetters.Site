<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import SubTitle from "$lib/components/SubTitle.svelte";
    import Template from "$lib/components/Template.svelte";
    import Title from "$lib/components/Title.svelte";
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props();

    const getLetter = async () => {
        const response = await fetch(`/students/${data.student.am}/letters/1`);
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

<div class="sub-margin">
    <SubTitle message="Choose Template:" />
</div>

<div class="templates-container">
    <Template image="temp" onClick={getLetter}></Template>
    <Template image="temp" onClick={getLetter}></Template>
</div>

<style>
    .sub-margin {
        margin-top: 8rem;
    }

    .templates-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4rem;
    }

</style>