class Auth {
    isAuthenticated() {
        return document.location.href.indexOf('auth') >= 0;
    }
}

const appAuth = new Auth();

export default appAuth;