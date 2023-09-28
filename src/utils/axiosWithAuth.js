import axios from "axios";

export const axiosWithAuth = () => {
  //get  the token from local storage
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      // authorization: token,
      authorization: `Bearer ${token}`,
    },
    baseURL: "https://everywherefitness-9ab34b5731c6.herokuapp.com/", //frm backend
  });
};
