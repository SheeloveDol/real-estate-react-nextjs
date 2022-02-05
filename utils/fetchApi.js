import axios from 'axios';


export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '255fef60ffmshd6b0d170fb74e74p1aaba7jsn2319f9dac50d'
    }
  });

  return data;
}