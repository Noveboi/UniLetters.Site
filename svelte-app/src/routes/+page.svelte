<script lang="ts">
  import { goto } from "$app/navigation";
  import Table from "$lib/components/Table.svelte";

  const columns = ['Full Name', 'AM', 'MO']
  const people: Student[] = [
    {fullName: "Mary Dimi", id: "p21028", average: 9.9},
    {fullName: "George Niko", id: "p21115", average: 3.2},
    {fullName: "Kon Sklav", id: "p21151", average: 5}
  ]

  function onRowClicked(student: Student) {
    goto(`/students/${student.id}`)
  } 

  function showHoverTitle(student: Student) {
    return `Click to view ${student.fullName}'s profile.`
  }
</script>

<div style="margin-top: 220px">
  <Table 
    tableData={people} 
    columnNames={columns} 
    onRowClick={onRowClicked}
    titleSelector={showHoverTitle}/>
</div>


<style>
  :global(html, body) {
    display: block;
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
</style>