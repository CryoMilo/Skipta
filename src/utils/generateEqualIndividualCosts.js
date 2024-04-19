export const generateEqualIndividualCosts = (payeeList, totalAmount) => {
	const dividedValue = totalAmount / payeeList.length;
	const individualCosts = {};

	payeeList.forEach((payee) => {
		individualCosts[payee.username] = dividedValue;
	});

	return individualCosts;
};

// export const generateIndividualCosts = (payeeList, ) => {
// 	const dividedValue = totalAmount / payeeList.length;
// 	const individualCosts = {};

// 	payeeList.forEach((payee) => {
// 		individualCosts[payee.id] = dividedValue;
// 	});

// 	return individualCosts;
// };
