export interface FoodCategory {
	name: string;
	icon: string;
	colour: string;
}

const foodCategories: FoodCategory[] = [
	{
		name: "Burgers",
		icon: "hamburger",
		colour: "#13AE4B",
	},
	{
		name: "Pizza",
		icon: "pizza",
		colour: "#DC143C",
	},
	{
		name: "Noodles",
		icon: "noodles",
		colour: "#6D3F5B",
	},
	{
		name: "Pasta",
		icon: "pasta",
		colour: "#84C3BE",
	},
	{
		name: "Vege",
		icon: "carrot",
		colour: "#F44611",
	},
	{
		name: "Cheese",
		icon: "cheese",
		colour: "#CDA434",
	},
];

export default foodCategories;
