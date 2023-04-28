//explicitly describe the object’s shape using an interface declaration:
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
    workFromHome() { return 'Working from home';}
    getCoffeeBreak() { return 'Getting a coffee break';}
    workDirectorTasks() { return 'Getting to director tasks';}
}

export class Teacher implements TeacherInterface {
    workFromHome() { return 'Cannot work from home'};
    getCoffeeBreak() { return 'Cannot have a break'};
    workTeacherTasks() { return 'Getting to work'};
}

export function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) return new Teacher();
    return new Director();
}

export function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
    return employee instanceof Director;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if (isDirector(employee)) return employee.workDirectorTasks();
    else return employee.workTeacherTasks();
}

export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') return 'Teaching Math';
    else if (todayClass === 'History') return 'Teaching History';
}
teachClass('Math');
teachClass('History');
