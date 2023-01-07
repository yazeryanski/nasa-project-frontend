import axios from "axios";

const Client = axios.create({
  baseURL: 'http://localhost:8080/',
})

async function httpGetPlanets() {
  try {
    const {data, status} = await Client.get('planets')
    if (!status) throw new Error('Server is unresponsable')
    return data.data;
  } catch (e) {
    console.error('Failed to load planets:', e);
    return []
  }
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};