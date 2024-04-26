function calculateCosts(billData) {
	let receivers = [];
	let payers = [];

	let totalCosts = {};

	billData.forEach((bill) => {
		bill.individualCosts.forEach((cost) => {
			let username = cost.username;
			let amountPaid = parseFloat(cost.cost);
			if (!totalCosts[username]) {
				totalCosts[username] = 0;
			}
			totalCosts[username] += amountPaid;

			if (username === bill.payer.username) {
				totalCosts[username] -= parseFloat(bill.amount);
			}
		});
	});

	for (const [username, amountPaid] of Object.entries(totalCosts)) {
		if (amountPaid > 0) {
			payers.push({ username, cost: amountPaid });
		} else if (amountPaid < 0) {
			receivers.push({ username, cost: Math.abs(amountPaid) });
		}
	}

	return { receivers, payers };
}

export const settlePayments = (billData) => {
	const { receivers, payers } = calculateCosts(billData);

	// Deep copy not to mutate the original reference
	const getCopy = JSON.parse(JSON.stringify(receivers));
	const payCopy = JSON.parse(JSON.stringify(payers));
	const transactions = [];

	let getIdx = 0;
	let payIdx = 0;

	while (getIdx < getCopy.length && payIdx < payCopy.length) {
		const getEntry = getCopy[getIdx];
		const payEntry = payCopy[payIdx];

		const remainingGetAmount = getEntry.cost;
		const remainingPayAmount = payEntry.cost;

		const obj = {
			receiver: getEntry.username,
			payer: payEntry.username,
		};

		if (remainingGetAmount > remainingPayAmount) {
			// If Receiver need more amount than what Payer has
			transactions.push({ ...obj, cost: remainingPayAmount });

			getCopy[getIdx].cost -= remainingPayAmount;
			payIdx++; // move to next payer
		} else if (remainingGetAmount < remainingPayAmount) {
			// If Payer has more amount than what Receiver need
			transactions.push({ ...obj, cost: remainingGetAmount });

			payCopy[payIdx].cost -= remainingGetAmount;
			getIdx++; // move to next Receiver or Getter
		} else {
			// if the amount of Receiver need to get and the amount of Payer has are the same
			transactions.push({ ...obj, cost: remainingGetAmount });

			// move to next Both Receiver and Getter
			getIdx++;
			payIdx++;
		}
	}

	return transactions;
};
