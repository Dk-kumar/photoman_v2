import { GET_COLLECTIONS } from "./Collections.action";

export const initialState = {
  isLoading: false,
  collectionList: [],
};

const collectionsReducer = (sate = initialState, { type, payload }) => {
  switch (type) {
    case GET_COLLECTIONS:
      return {
        ...sate,
        collectionList: payload?.data,
        isLoading: true,
      };
    default:
      return sate;
  }
};

export default collectionsReducer;
