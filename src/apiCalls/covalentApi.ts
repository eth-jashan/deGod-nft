import axios from 'axios';

export const getNFTLists = async (
  contractAddress: string,
  pageSize: number,
  page: number,
) => {
  const TOKEN = 'cqt_rQ4rjPvbKdDRJCTVHyDWxdhH4hPp';
  const response = await axios.get(
    `https://api.covalenthq.com/v1/eth-mainnet/nft/${contractAddress}/metadata/?page-size=${pageSize}&page-number=${page}`,
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
