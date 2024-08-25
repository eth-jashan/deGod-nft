import axios from 'axios';
import {CONVALENT_API_URL, API_TOKEN} from '@env';

export const getNFTLists = async (
  contractAddress: string,
  pageSize: number,
  page: number,
) => {
  const TOKEN = API_TOKEN;
  const response = await axios.get(
    `${CONVALENT_API_URL}/${contractAddress}/metadata/?page-size=${pageSize}&page-number=${page}`,
    {
      auth: {
        username: TOKEN,
        password: '',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response;
};
