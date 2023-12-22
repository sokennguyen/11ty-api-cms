const { default: axios } = require('axios');

module.exports = async () => {
  try {
    const res = await axios.get('http://localhost:1337/api/posts');
    console.log(res.data.data)
    return res.data.data;
  } catch (error) {
  }
};