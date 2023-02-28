"use strict";
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: '123',
    title: 'Assignment 1',
    grade: 100,
};
console.log(updateAssignment(assign1, { grade: 90 }));
const assignGraded = updateAssignment(assign1, { grade: 90 });
const recordAssignment = (assign) => {
    //do something
    return assign;
};
//required and readonly
const assignVerified = Object.assign(Object.assign({}, assign1), { verified: true });
// assignVerified.grade = 90
recordAssignment(Object.assign(Object.assign({}, assign1), { verified: true }));
//record
const hexColorMap = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
};
const finalGrades = {
    Sara: 'A',
    Kelly: 'U',
};
const gradeData = {
    Sara: {
        assignment1: 100,
        assignment2: 100,
    },
    Kelly: { assignment1: 90, assignment2: 80 },
};
const score = {
    studentId: '123',
    grade: 100,
};
const preview = {
    studentId: '123',
    title: 'Assignment 1',
};
const createNewAssign = (title, points) => {
    return { title, points };
    //do something
};
