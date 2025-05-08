<script lang="ts" generics="T">
    interface TableProps<T> {
        columnNames: string[]
        tableData: T[],
        onRowClick: (item: T) => void
    }

    import '@fontsource/gloria-hallelujah'

    const {tableData, columnNames, onRowClick}: TableProps<T> = $props();
</script>

<div class="center-table">
  <table class="listTable">
    <thead>
      <tr>
        {#each columnNames as columnHeading}
          <th>{columnHeading}</th>
        {/each}
    </thead>
    <tbody>
      {#each tableData as row}
        <tr onclick={() => onRowClick(row)}>
          {#each Object.values(row) as cell}
            <td>{cell}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  :root {
    --purple: #7E42D8;
    --blue: #5EA4FF;
    --green: #77F26F;
    --orange: #FF853A;
    --turqoise: #50F3A4;
  }

  .center-table {
    display: flex;
    justify-content: center;
  }

  table,
  th,
  td {
    border: 1px solid;
    border-collapse: collapse;
    margin-bottom: 10px;
  }

  table.listTable {
    border: 3px solid black;
    background-color: white;
    width: 90%;
    font-family: 'Gloria Hallelujah', cursive;
    text-align: center;
    border-collapse: collapse;
    overflow-y: auto;
  }
  table.listTable td,
  table.listTable th {
    border: 2px solid black;
    padding: 3px 2px;
  }
  table.listTable tbody td {
    font-size: 20px;
  }
  table.listTable thead {
    background: var(--purple);
  }
  table.listTable thead th {
    font-size: 19px;
    font-weight: bold;
    color: white;
    text-align: center;
  }
  table.listTable thead th:first-child {
    border-left: none;
  }
  table.listTable tbody tr :hover {
    background-color: var(--blue);
    cursor: pointer;
  }

</style>
