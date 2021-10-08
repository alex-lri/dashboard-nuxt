export default function({ store, redirect }) {
    // Si l'utilisateur n'est pas authentifié
    if (!store.state.localStorage.user.connected) {
        return redirect("/connect");
    }
    if (store.state.localStorage.user.connected) {
        return redirect("/dashboard");
    }
}