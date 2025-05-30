<script lang="ts">
  import Table from './components/Table.svelte'
  import Title from './components/Title.svelte'

  const columns = ['Full Name', 'AM', 'MO']
  const people: Student[] = [
    {fullName: "Mary Dimi", id: "p21028", average: 9.8},
    {fullName: "George Niko", id: "p21115", average: 9.7}
  ]

  function onRowClicked(student: Student) {
    console.log('Click!!!!', student)
  } 

  function showHoverTitle(student: Student) {
    return `Click to view ${student.fullName}'s profile.`
  }

</script>

<div class="background"></div>

<Title message="Uni Letters" />

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

  .background {
    position: fixed; 
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('/images/notebook-background.svg');
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }
</style>