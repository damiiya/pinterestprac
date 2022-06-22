import axios from "axios";

export default axios.create({
  baseURL: "http://api.unsplash.com",
  headers: {
    Authorization: "Client-ID a6EfPxRBlmwYQlEMCuPXNsZ_CAMqVfZsiv2s9ga0qRY",
  },
});
