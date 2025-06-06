<script lang="ts">
  import Table from "$lib/components/Table.svelte";
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();

  const columns = ['Full Name', 'AM', 'MO']
</script>

<div style="margin-top: 220px">
  <Table 
    tableData={data.students} 
    columnNames={columns} 
    rowLink={student => `/students/${student.am}`}
    hint={student => `Click to view ${student.fullName}'s profile.`}/>
</div>