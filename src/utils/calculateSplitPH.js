const getArray = [
	{
		name: "John",
		amount: -220,
	},
];

const payArray = [
	{
		name: "D",
		amount: 70,
	},
	{
		name: "Mia",
		amount: 150,
	},
];

export const calculateSplitPH = () => {
	let arr = []; //{receiver, payer, amount}

	payArray.forEach((payer) => {
		const debtpayer = payer.name;
		const amountThatpayerhave = payer.amount;

		let debtPayAmount = payer.amount;

		getArray.forEach((reciever) => {
			const debtreceiver = reciever.name;
			let debtReceiveAmount = reciever.amount;

			let amount = 0;
			if (debtReceiveAmount > 0) {
				console.log(debtPayAmount, debtReceiveAmount);
				return;
			} else {
				debtPayAmount = debtReceiveAmount + debtPayAmount;
				const tempdebtReceiveAmount = debtReceiveAmount + debtPayAmount;
				debtReceiveAmount = tempdebtReceiveAmount;
				if (debtPayAmount === 0) {
					amount = amountThatpayerhave;
				} else if (tempdebtReceiveAmount > 0) {
					amount = tempdebtReceiveAmount;
				}
				const obj = {
					receiver: debtreceiver,
					payer: debtpayer,
					amount,
				};

				arr.push(obj);
			}
		});
	});

	console.log("the list to pay and receive: ", arr);
};
