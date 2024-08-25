import {getNFTLists} from '../../apiCalls/covalentApi';
import {nftActions} from '../reducers/nft';

export const getPaginatedNFTList = page => {
  return async dispatch => {
    try {
      const response = await getNFTLists(
        '0x8821bee2ba0df28761afff119d66390d594cd280',
        '10',
        page,
      );
      dispatch(nftActions.setList(response?.data?.data?.items));
    } catch (error) {
      console.log('error check', error);
    }
  };
};
