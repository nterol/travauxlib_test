import axios from "axios";

const fetcher = async () => {
  try {
    const { data } = await axios.get(
      "https://api.travauxlib.com/api/devis-pro/JKusHl8Ba8MABIjdCtLZOe2lxxnUfX"
    );
    return data;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

export default fetcher;
