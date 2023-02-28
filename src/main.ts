interface Assignment {
  studentId: string
  title: string
  grade: number
  verified?: boolean
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return {
    ...assign,
    ...propsToUpdate,
  }
}

const assign1: Assignment = {
  studentId: '123',
  title: 'Assignment 1',
  grade: 100,
}

console.log(updateAssignment(assign1, { grade: 90 }))

const assignGraded: Assignment = updateAssignment(assign1, { grade: 90 })

const recordAssignment = (assign: Required<Assignment>) => {
  //do something
  return assign
}

//required and readonly

const assignVerified: Readonly<Assignment> = {
  ...assign1,
  verified: true,
}

// assignVerified.grade = 90
recordAssignment({ ...assign1, verified: true })

//record
const hexColorMap: Record<string, string> = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
}

type Students = 'Sara' | 'Kelly'
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U'

const finalGrades: Record<Students, LetterGrades> = {
  Sara: 'A',
  Kelly: 'U',
}

interface Grades {
  assignment1: number
  assignment2: number
}
const gradeData: Record<Students, Grades> = {
  Sara: {
    assignment1: 100,
    assignment2: 100,
  },
  Kelly: { assignment1: 90, assignment2: 80 },
}

//Pick

type AssignResult = Pick<Assignment, 'studentId' | 'grade'>

const score: AssignResult = {
  studentId: '123',
  grade: 100,
}

type AssignPreview = Omit<Assignment, 'verified' | 'grade'>

const preview: AssignPreview = {
  studentId: '123',
  title: 'Assignment 1',
}

//exclude and extract

type adjustedGrade = Exclude<LetterGrades, 'U'>

type highGrades = Extract<LetterGrades, 'A' | 'B'>

//NonNullable

type AllGrades = 'Dave' | 'John' | null | undefined
type NamesOnly = NonNullable<AllGrades>
type newAssign = { title: string; points: number }

const createNewAssign = (title: string, points: number) => {
  return { title, points, hater: 'Dave' }
  //do something
}

type newLearnAssign = ReturnType<typeof createNewAssign>

//Parameters

type newAssignParams = Parameters<typeof createNewAssign>
