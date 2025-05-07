<script lang="ts" generics="T">
    interface TableProps<T> {
        columnNames: string[]
        tableData: T[],
        onRowClick: (item: T) => void
    }

    const {tableData, columnNames, onRowClick}: TableProps<T> = $props();

</script>

<table class="redTable">
  <thead>
    <tr>
      {#each columnNames as columnHeading}
        <th>{columnHeading}</th>
      {/each}
  </thead>
  <tbody>
    {#each Object.values(tableData) as row}
      <tr onclick={() => onRowClick(row)}>
        {#each Object.values(row) as cell}
          <td>{cell}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table,
  th,
  td {
    border: 1px solid;
    border-collapse: collapse;
    margin-bottom: 10px;
  }

  table.redTable {
    border: 2px solid #a40808;
    background-color: #eee7db;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }
  table.redTable td,
  table.redTable th {
    border: 1px solid #aaaaaa;
    padding: 3px 2px;
  }
  table.redTable tbody td {
    font-size: 13px;
  }
  table.redTable tr:nth-child(even) {
    background: #f5c8bf;
  }
  table.redTable thead {
    background: #a40808;
    background: -moz-linear-gradient(top, #bb4646 0%, #ad2020 66%, #a40808 100%);
    background: -webkit-linear-gradient(top, #bb4646 0%, #ad2020 66%, #a40808 100%);
    background: linear-gradient(to bottom, #bb4646 0%, #ad2020 66%, #a40808 100%);
  }
  table.redTable thead th {
    font-size: 19px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    border-left: 2px solid #a40808;
  }
  table.redTable thead th:first-child {
    border-left: none;
  }

/* hover  */

</style>
