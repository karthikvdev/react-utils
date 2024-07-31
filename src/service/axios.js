import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:2000",
});

export const getReq = async (source) => {
  try {
    const { data } = await instance.post("/api/test",{} ,{
      cancelToken: source.token,
    });
    return data;
  } catch (err) {
    if (axios.isCancel(err)) {
      return "axios request cancelled";
    }
    return err;
  }
};