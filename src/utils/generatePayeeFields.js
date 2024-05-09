export const generatePayeeFields = (payeeList) => {
	return payeeList.map((payee) => {
		return {
			id: payee.id,
			username: payee.username,
			cost: payee.cost || 0,
		};
	});
};
