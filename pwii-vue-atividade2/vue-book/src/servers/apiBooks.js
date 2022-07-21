
import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3000",
	headers: {
		"Access-Control-Allow-Origin": "http://127.0.0.1:8080",
	}
})

export default api
