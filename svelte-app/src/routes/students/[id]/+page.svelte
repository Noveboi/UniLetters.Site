<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import ButtonContainer from "$lib/components/ButtonContainer.svelte";
    import Navigate from "$lib/components/Navigate.svelte";
    import SubTitle from "$lib/components/SubTitle.svelte";
    import Table from "$lib/components/table/Table.svelte";
    import type { ColDef } from "$lib/components/table/table.types";
    import type { PageProps } from "./$types";

    const colDefs: ColDef<CourseStudentGrade>[] = [
        { headerName: 'Subject', getter: x => x.name },
        { headerName: 'Code', getter: x => x.code },
        { headerName: 'Semester', getter: x => x.semester },
        { headerName: 'Grade', getter: x => x.grade }
    ]
    const { data }: PageProps = $props();
</script>

<div style="margin-top: 8rem">
    <SubTitle message="Profile" />

    <ButtonContainer>
        <Navigate to='/students/{data.student.am}/letters'>Letter</Navigate>
        <Navigate to='/'>Back</Navigate>
    </ButtonContainer>

    <div>
    <Table 
        tableData={data.grades} 
        definitions={colDefs}/>
    </div>
</div>

<style>
    .button-container {
        display: flex;
        justify-content: end;
        margin-right: 5rem;
    }
</style>