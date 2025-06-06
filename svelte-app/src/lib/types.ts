type Student = { 
    fullName: string,
    am: string,
    average: number
}


type StudentWithGrades = {
  student: Student,
  courses: readonly Course[]
}

type Course = {
  name: string,
  code: string,
  semester: number,
  grade: number
}