"use strict";
exports.__esModule = true;
exports.teachClass = exports.executeWork = exports.isDirector = exports.createEmployee = exports.Teacher = exports.Director = void 0;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () { return 'Working from home'; };
    Director.prototype.getCoffeeBreak = function () { return 'Getting a coffee break'; };
    Director.prototype.workDirectorTasks = function () { return 'Getting to director tasks'; };
    return Director;
}());
exports.Director = Director;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () { return 'Cannot work from home'; };
    ;
    Teacher.prototype.getCoffeeBreak = function () { return 'Cannot have a break'; };
    ;
    Teacher.prototype.workTeacherTasks = function () { return 'Getting to work'; };
    ;
    return Teacher;
}());
exports.Teacher = Teacher;
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500)
        return new Teacher();
    return new Director();
}
exports.createEmployee = createEmployee;
function isDirector(employee) {
    return employee instanceof Director;
}
exports.isDirector = isDirector;
function executeWork(employee) {
    if (isDirector(employee))
        return employee.workDirectorTasks();
    else
        return employee.workTeacherTasks();
}
exports.executeWork = executeWork;
function teachClass(todayClass) {
    if (todayClass === 'Math')
        return 'Teaching Math';
    else if (todayClass === 'History')
        return 'Teaching History';
}
exports.teachClass = teachClass;
