/**
 * Created by Administrator on 2018/9/14.
 */
export default {
  setCurIndex(state, index){
      state.curIndex = index;
  },
  setSelected(state, index){
    state.selected = index;
  },
  setLoginStatus(state, isLogin){
    state.isLogin = isLogin;
  }
}
