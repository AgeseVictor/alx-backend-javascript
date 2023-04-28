//explicitly describe this object’s shape using an interface declaration:
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
	firstName: 'Guilaume',
	lastName: 'Salva'
}

const newRowID: RowID = CRUD.insertRow(row)
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
