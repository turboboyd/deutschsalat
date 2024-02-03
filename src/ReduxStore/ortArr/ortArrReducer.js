export const handleFulfilledOrtArr = (state, { payload }) => {
  state.ortArr = payload;
  state.error = null;
  state.isLoading = false;
  state.status = 'fulfilled';
};
