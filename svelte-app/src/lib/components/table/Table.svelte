<script lang="ts" generics="T extends {}">

    interface TableProps<T> {
        tableData: readonly T[],
        definitions: readonly ColDef<T>[],
        rowClick?: (item: T) => void,
        hint?: (item: T) => string,
        rowLink?: (item: T) => string,
    }

    import '@fontsource/gloria-hallelujah'
    import type { ColDef } from './table.types';

    const {tableData, definitions, rowClick, hint, rowLink}: TableProps<T> = $props();

    const getters = $derived(definitions.map(x => x.getter));
    const headers = $derived(definitions.map(x => x.headerName));
</script>

{#snippet row(link: string | undefined, item: T)}
  {#if link}
    {#each getters as getter}
      <td class="link"> 
        <a href="{link}">
          {getter(item)}
        </a> 
      </td>
    {/each}
  {:else}
    {#each getters as getter}
      <td>{getter(item)}</td>
    {/each}
  {/if}
{/snippet}

<div class="center-table">
  <table class="listTable">
    <thead>
      <tr>
          {#each headers as columnHeading}
          <th>{columnHeading}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each tableData as item}
        <tr onclick={() => rowClick?.(item)} title={hint?.(item)}>
          {@render row(rowLink?.(item), item)}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style lang="scss">
  a {
    all: unset;
  }

  :root {
    --purple: #7E42D8;
    --blue: #5EA4FF;
  }

  .center-table {
    display: flex;
    justify-content: center;
  }

  table, th, td {
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
    font-size: 20px;

    td, th {
      border: 2px solid black;
    }

    td {
      &.link {
        margin: 0;
        padding: 0;
      }

      > a {
        display: block;
        width: 100%;
        padding: 3px 2px;
      }
    }

    thead {
      background-color: var(--purple);
      font-size: 19px;
      font-weight: bold;
      color: white;
      text-align: center;
    }

    tbody tr:hover {
      background-color: var(--blue);
      cursor: pointer;
    }
  }
</style>
