import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ISupabaseService {
	create(): void;
}

class SupabaseService implements ISupabaseService {
	static instance: ISupabaseService;

	private readonly client;

	constructor() {
		this.client = createClient(
			process.env.SUPABASE_URL as string,
			process.env.SUPABASE_KEY as string,
			{
				auth: {
					storage: AsyncStorage as any,
					autoRefreshToken: true,
					persistSession: true,
					detectSessionInUrl: false,
				},
			}
		);
	}

	static getInstance() {
		if (this.instance) {
			return this.instance;
		}

		this.instance = new SupabaseService();
	}

	async create() {
		const { data, error } = await this.client.from("test").select();
        console.log(data, error);
	}
}

export default SupabaseService;
