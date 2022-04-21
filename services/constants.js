import axios from "axios";

export const fetchData = async (category) => {
  try {
    const response = await axios.get(
      `https://netflix-community-app.herokuapp.com/posts`
    );
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
