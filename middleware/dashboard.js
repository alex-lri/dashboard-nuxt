
export default ({ app, redirect }) => {
    const cookieRes = app.$cookies.get('connected');
    if (!cookieRes) {
        return redirect('/connect');
    }
  }