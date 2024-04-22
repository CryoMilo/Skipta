// export const generatePayeeFields = (payeeList) => {
// 	const payeeFields = {};

// 	payeeList.forEach((payee) => {
// 		payeeFields[payee.username] = 0;
// 	});

// 	return payeeFields;
// };
export const generatePayeeFields = (payeeList) => {
	return payeeList.map((payee) => {
		return {
			username: payee.username,
			cost: parseInt(payee.cost) || 0,
		};
	});
};
