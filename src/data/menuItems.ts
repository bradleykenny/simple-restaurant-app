export type MenuItem = {
	name: string;
	price: number;
	image_url: string;
};

const menuItems: MenuItem[] = [
	{
		name: "Burger",
		price: 12.0,
		image_url:
			"https://unsplash.com/photos/sc5sTPMrVfk/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU2ODIwODYx&force=true&w=640",
	},
];

export default menuItems;
