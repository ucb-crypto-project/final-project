import axios from "axios";



export default {
	// Gets all books
	firstSearch: function() {
		return axios.get("/api/search");
	},
	// Gets the book with the given id
	getCoinData: function(id) {
		return axios.get("/api/search/" + id);
	},
	
};
