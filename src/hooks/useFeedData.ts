import { useQuery } from "react-query";
import { Business } from "../types/Business";

const CATEGORIES = "food,restaurants";

const useFeedData = (location: string) => {
	return useQuery<{ businesses: Business[] }>("restaurants", () =>
		fetch(
			`https://api.yelp.com/v3/businesses/search?location=${location}&categories=${CATEGORIES}`,
			{
				headers: {
					Authorization: `Bearer ${process.env.YELP_API_KEY}`,
				},
			}
		).then((res) => res.json())
	);
};

export default useFeedData;
