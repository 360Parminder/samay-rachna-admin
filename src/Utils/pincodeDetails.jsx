import axios from "axios";

export const pincodeDetails = async (pincode) => {
  // console.log(process.env.REACT_APP_PINCODE_API_URL, process.env.REACT_APP_PINCODE_API_KEY);
  
  // if (!process.env.REACT_APP_PINCODE_API_URL || !process.env.REACT_APP_PINCODE_API_KEY) {
  //   console.error("Missing API configuration in environment variables.");
  //   throw new Error("API configuration is not set.");
  // }

  const options = {
    method: 'GET',
    url: `https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/${pincode}`,
    headers: {
      'x-rapidapi-key': "b9a9a1c3c9msh2aede9a85e4a17fp111364jsnf6df7a3b6a5d",
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
