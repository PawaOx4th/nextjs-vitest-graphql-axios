import axios from "axios";
import { createClient } from "../../../../generated";

const apiServices = createClient({
  url: "https://countries.trevorblades.com/",
  fetcher: (operation) => {
    return axios({
      method: "post",
      url: "https://countries.trevorblades.com/",
      data: operation,
    }).then((res) => {
      console.log(`[LOG] 🟡   :`, res.data);
      return res.data;
    });
  },
});

export default apiServices;
