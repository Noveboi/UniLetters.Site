<script lang="ts">
  import Table from "$lib/components/table/Table.svelte";
    import type { ColDef } from "$lib/components/table/table.types";
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();

  const colDefs: ColDef<Student>[] = [
    { headerName: 'Full Name', getter: x => x.fullName },
    { headerName: 'AM', getter: x => x.am },
    { headerName: 'MO', getter: x => x.average },
  ]
</script>

<div style="margin-top: 220px">
  <Table 
    tableData={data.students} 
    definitions={colDefs} 
    rowLink={student => `/students/${student.am}`}
    hint={student => `Click to view ${student.fullName}'s profile.`}/>
</div>