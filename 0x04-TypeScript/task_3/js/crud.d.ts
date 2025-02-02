import { RowID, RowElement } from './interface.ts';

declare module './crud' {
	export function insertRow(row: RowElement): RowID;
	export function updateRow(rowID: RowID, row: RowElement): RowID;
	export function deleteRow(rowID: RowID): void;
}
