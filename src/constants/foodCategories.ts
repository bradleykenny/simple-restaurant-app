export interface FoodCategory {
	name: string;
	icon: string;
	colour: string;
}

const foodCategories: FoodCategory[] = [
	{
		name: "Burgers",
		icon: "hamburger",
		colour: "#4DAAF9",
	},
	{
		name: "Pizza",
		icon: "pizza",
		colour: "#E24E6E",
	},
	{
		name: "Pasta",
		icon: "pasta",
		colour: "#65C77C",
	},
	{
		name: "Vege",
		icon: "carrot",
		colour: "#F0845C",
	},
	{
		name: "Noodles",
		icon: "noodles",
		colour: "#6A48E2",
	},
	{
		name: "Cheese",
		icon: "cheese",
		colour: "#F6C452",
	},
];

export default foodCategories;
