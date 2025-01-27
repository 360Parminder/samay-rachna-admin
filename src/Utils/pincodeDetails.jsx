import axios from "axios";

export const pincodeDetails = async (pincode) => {

  const options = {
    method: 'GET',
    url: `${import.meta.env.VITE_PINCODE_API_URL}${pincode}`,
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_PINCODE_API_KEY,
      'x-rapidapi-host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response);
    
    const { state, district } = response.data[0];
    

    // if (!state || !city || !district) {
    //   console.error("Incomplete data received:", response.data);
    //   throw new Error("API returned incomplete data.");
    // }

    return { state, district };
  } catch (error) {
    // console.log(process.env.REACT_APP_PINCODE_API_URL, process.env.REACT_APP_PINCODE_API_KEY);
    
    console.error("Error fetching pincode details:", error.message || error);
    throw error;
  }
};
