const supabase = require("@supabase/supabase-js");
const AsyncStorage = require("@react-native-async-storage/async-storage");
const fakerjs = require("@faker-js/faker");

const client = supabase.createClient(
	process.env.SUPABASE_URL as string,
    process.env.SUPABASE_KEY as string,
	{
		auth: {
			storage: AsyncStorage,
			autoRefreshToken: true,
			persistSession: true,
			detectSessionInUrl: false,
		},
	}
);

const categories = ["BURGER", "NOODLE", "ITALIAN"];

interface Restaurant {
	name: string;
	rating: number;
	phone: number;
	categories: string[];
	imageUrl: string;
	location: any;
}

const { faker } = fakerjs;

const items: Restaurant[] = [
	{
		name: faker.company.name(),
		rating: Math.trunc((Math.random() * 5)),
		phone: Math.trunc(Math.random() * Math.pow(10, 10)),
		categories: [categories[Math.trunc(Math.random() * categories.length)]],
		imageUrl: faker.image.business(),
		location: {
			city: faker.address.cityName(),
			country: "Australia",
			state: "NSW",
			street: faker.address.streetAddress(),
			postCode: faker.address.zipCode("####"),
		},
	},
];

console.log(items);

// client.from("restaurants").insert(items);
