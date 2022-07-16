export type MenuItem = {
	name: string;
	description: string;
	price: number;
	image_url: string;
};

const menuItems: MenuItem[] = [
	{
		name: "Burger",
		description:
			"Bread roll with meat, cheese, tomato and our secret sauce",
		price: 12.0,
		image_url:
			"https://unsplash.com/photos/sc5sTPMrVfk/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU2ODIwODYx&force=true&w=640",
	},
	{
		name: "Pizza",
		description: "Your favourite classic magherita pizza",
		price: 16.0,
		image_url:
			"https://unsplash.com/photos/MQUqbmszGGM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU2ODMzNjgz&force=true&w=640",
	},
	{
		name: "Burrito",
		description:
			"Authentic burrito with your choice of filling and spiciness",
		price: 12.5,
		image_url:
			"https://unsplash.com/photos/50KffXbjIOg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU2ODM0MTAx&force=true&w=640",
	},
	{
		name: "Hot Chips",
		description: "Hot chips with chicken salt",
		price: 4,
		image_url:
			"https://unsplash.com/photos/wY8dOAApKE4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8N3x8Y2hpcHN8ZW58MHx8fHwxNjU2ODE1NzI2&force=true&w=640",
	},
	{
		name: "Garlic Bread",
		description: "Soph's favourite type of bread",
		price: 6.5,
		image_url:
			"https://unsplash.com/photos/zevnVcUyiJg/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU3ODkzNTE1&force=true&w=640",
	},
	{
		name: "M&Ms",
		description: "Tasty chocolates",
		price: 2.5,
		image_url:
			"https://unsplash.com/photos/UDJPrpY5YGA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fG0lMjZtc3xlbnwwfHx8fDE2NTc4OTM0NzI&force=true&w=640",
	},
];

export default menuItems;
