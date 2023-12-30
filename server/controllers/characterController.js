const { fetchDataFromAPI } = require('../middleware/apiMiddleware');

const getAllCharacters = async (req, res) => {
  const url = 'https://rickandmortyapi.com/api/character/';
  try {
    const characters = await fetchDataFromAPI(url);
    res.json(characters.results);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getCharacterById = async (req, res) => {
  const { id } = req.params;
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  try {
    const character = await fetchDataFromAPI(url);
    res.json(character);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllCharacters,
  getCharacterById,
};
