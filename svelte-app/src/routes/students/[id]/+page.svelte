<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Navigate from "$lib/components/Navigate.svelte";
    import SubTitle from "$lib/components/SubTitle.svelte";
    import Table from "$lib/components/Table.svelte";

    const subjects = ['Subject', 'Code', 'Semester', 'Grade']
    const subject: Course[] = [
        {name: "Analisi 1", code: "123456", semester: 1, grade: 7},
        {name: "Technologia Logismikou", code: "654321", semester: 6, grade: 10}
    ]
</script>

<SubTitle message="Profile" />

<div class="button-container">
  <Button>Letter</Button>
  <Navigate to='/'>Back</Navigate>
</div>

<div style="margin-top: 20px">
  <Table 
    tableData={subject} 
    columnNames={subjects}/>
</div>

<style>
    .button-container {
        display: flex;
        justify-content: end;
        margin-right: 5rem;
    }
</style>