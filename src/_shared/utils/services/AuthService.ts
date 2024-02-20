/** @format */
import Keycloak, { KeycloakOnLoad } from "keycloak-js";
import i18n from "../../i18n/i18n";

export const _kc = new Keycloak("/keycloack.json");

/**
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback: () => void) => {
  _kc
    .init({
      onLoad: "login-required" as KeycloakOnLoad,
    })
    .then(async (authenticated) => {
      //TODO make action is app ready
      if (!authenticated) {
        await localStorage.clear();
        window.location.reload();
      }
      i18n?.changeLanguage(_kc?.tokenParsed?.locale);

      onAuthenticatedCallback();

      // TODO auto refresh token after some time
    })
    .catch((error) => {
      console.error("Authenticated Failed" + error?.message);
    });
};
const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => _kc.authenticated;

const updateToken = (successCallback: any) =>
  _kc.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles: string[]) =>
  roles.every((role) => _kc.hasRealmRole(role));

const hasResourceRole = (roles: string[], resource: string) =>
  roles.every((role) => _kc.hasResourceRole(role, resource));

const hasRealmRole = (roles: string[]) =>
  roles.every((role) => _kc.hasRealmRole(role));

const UserService = {
  _kc,
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
  hasResourceRole,
  hasRealmRole,
};

export default UserService;
