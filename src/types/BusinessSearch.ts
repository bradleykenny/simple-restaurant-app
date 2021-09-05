import { Business } from "./Business";

export type BusinessSearchDto = {
	data: {
		businesses: Business[];
		region: {
			center: {
				latitude: number;
				longitude: number;
			};
		};
		total: number;
	};
};
