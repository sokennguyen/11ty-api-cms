const { default: axios } = require('axios');

module.exports = async () => {
  try {
    const res = await axios.get('http://localhost:1337/api/posts');
    console.log(res.data.data.map(post=>post.attributes))
    return res.data.data.map(post=>post.attributes);
  } catch (error) {
  }
};