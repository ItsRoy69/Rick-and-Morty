const axios = require('axios');

const fetchDataFromAPI = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error.message);
    throw error;
  }
};

module.exports = {
  fetchDataFromAPI,
};
