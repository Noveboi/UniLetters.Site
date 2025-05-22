<script lang="ts">
  import Button from './components/Button.svelte'
  import StudentTable from './components/StudentTable.svelte'
  import SubTitle from './components/SubTitle.svelte'
  import Table from './components/Table.svelte'
  import Title from './components/Title.svelte'

  const columns = ['Full Name', 'AM', 'MO']
  const people: Student[] = [
    {fullName: "Mary Dimi", id: "p21028", average: 9.9},
    {fullName: "George Niko", id: "p21115", average: 3.2},
    {fullName: "Kon Sklav", id: "p21151", average: 5}

  ]

  function onRowClicked(student: Student) {
    console.log('Click!!!!', student)
  } 

  function showHoverTitle(student: Student) {
    return `Click to view ${student.fullName}'s profile.`
  }

// 2nd table
const subjects = ['Subject', 'SubjectCode', 'Semester', 'Grade']
  const subject: Subject[] = [
    {subject: "Analisi 1", subjectCode: "123456", semester: 1, grade: "7"},
    {subject: "Technologia Logismikou", subjectCode: "654321", semester: 6, grade: "10"}
  ]

// button
 function handleClick() {
    alert("Button clicked!");
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

<SubTitle message="Profile" />

<div class="button-container">
  <Button on:click={handleClick}>
    Letter
  </Button>
</div>

<div style="margin-top: 20px">
  <StudentTable 
    tableData={subject} 
    columnNames={subjects} 
    onRowClick={onRowClicked}/>
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

  .button-container {
    display: flex;
    justify-content: end;
    margin-right: 5rem;
  }
</style>