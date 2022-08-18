export const state = () => ({
  layoutType: "DesktopDevice",
});

export const mutations = {
  CHANGE_LAYOUT(state, layoutType) {
    state.layoutType = layoutType;
  },
};

export const actions = {
  changeLayoutType({ commit }, layoutType) {
    commit("CHANGE_LAYOUT", layoutType);
  },
};
