// 1. Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.

const filterDuplicates = (arr: number[]) => {
	const uniqueNumbers = new Set(arr);
	return [...uniqueNumbers];
};
