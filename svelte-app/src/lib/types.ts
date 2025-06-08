type Student = { 
    fullName: string,
    am: string,
    average: number
}

type StudentWithGrades = {
  student: Student,
  grades: readonly CourseStudentGrade[]
}

type CourseStudentGrade = {
  name: string,
  code: string,
  semester: number,
  grade: number
}