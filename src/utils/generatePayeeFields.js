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
			id: payee.id,
			username: payee.username,
			cost: payee.cost || 0,
		};
	});
};
