/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create an object with type RowElement
const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};

// Insert row and get new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create updated row with age
const updatedRow: RowElement = {
    ...row,
    age: 23
};

// Update row and delete it
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
