import axiosInstance from "../Utils/axiosInstance";

const user = {
    register: async (data) => {
        console.log(data);

        try {
            const response = await axiosInstance.post('/register',data);
          if(response.status === 200){
            return {
                success: true,
                data: response.data,
                message: response.data.message,
            };
          }

        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                switch (error.response.status) {
                    case 400:
                        
                        return{
                            success: false,
                            message: error.response.data.message,
                        }
                    case 401:
                        return{
                            success: false,
                            message: error.response.data.message,
                        }
                    case 403:
                        return{
                            success: false,
                            message: error.response.data.message,
                        }
                    case 404:
                        return{
                            success: false,
                            message: error.response.data.message,
                        }
                    case 500:
                        return{
                            success: false,
                            message: error.response.data.message,
                        }
                    default:
                        return{
                            success: false,
                            message: error.response.data.message,
                        }
                }
            } else if (error.request) {
                return{
                    success: false,
                    message: error.request.data.message,
                }
            } else {
                return{
                    success: false,
                    message: error.message,
                }
            }
        }
    }
}

export default user;