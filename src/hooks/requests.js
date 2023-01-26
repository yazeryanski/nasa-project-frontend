import axios from "axios";

const Client = axios.create({
  baseURL: "http://localhost:8080/",
});

async function httpGetPlanets() {
  try {
    const { data, status, messages } = await Client.get("planets");
    if (!status) throw new Error(messages?.join(", "));

    return data.data;
  } catch (e) {
    console.error("Failed to load planets:", e);

    return [];
  }
}

async function httpGetLaunches() {
  try {
    const { data, status, messages } = await Client.get("launches");
    if (!status) throw new Error(messages?.join(", "));

    return data.data;
  } catch (e) {
    console.error("Failed to load launches:", e);
    return [];
  }
}

async function httpSubmitLaunch(launch) {
  try {
    const { data, status, messages } = await Client.post(`launches`, launch);
    if (!status) throw new Error(messages?.join(", "));

    return true;
  } catch (e) {
    console.error("Failed to load launches:", e);
    return false;
  }
}

async function httpAbortLaunch(id) {
  try {
    const { data, status, messages } = await Client.delete(`launches/${id}`);
    if (!status) throw new Error(messages?.join(", "));

    return true;
  } catch (e) {
    console.error("Failed to load launches:", e);
    return false;
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
