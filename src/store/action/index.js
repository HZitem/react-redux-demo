// actions.js
// action也是函数
export function setPageTitle (data) {
 return (dispatch, getState) => {
 dispatch({ type: 'SET_PAGE_TITLE', data: data })
 }
}
 
export function setInfoList (data) {
 return (dispatch, getState) => {
  dispatch({ type: 'SET_INFO_LIST', data: 'test ajax' })
 // 使用fetch实现异步请求
 window.fetch('http://rap2api.taobao.org/app/mock/238598/login', {
  method: 'GET',
  headers: {
   'Content-Type': 'application/json'
  }
 }).then(res => {
  return res.json()
 }).then(res => {
   console.log('res',res)
  let { code, token } = res
  if (code === 0) {
   dispatch({ type: 'SET_INFO_LIST', data: token })
  }
 })
 }
}