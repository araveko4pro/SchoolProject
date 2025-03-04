import { useState } from 'react';
import axios from 'axios';

function GetData() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get('https://api.example.com/data');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return data;
}