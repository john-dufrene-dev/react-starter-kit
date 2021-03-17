const _authStorageType = 'localstorage'; // localstorage|cookie
const _authStorageName = 'auth_storage_name';
const _authTimeStorageName = 'auth_time_storage_name';
const _stateStorageName = 'state_storage_name';
const _refreshTokenName = 'refresh_token_name';

export const _authProps = {
    authStorageType: _authStorageType,
    authStorageName: _authStorageName,
    authTimeStorageName: _authTimeStorageName,
    stateStorageName: _stateStorageName,
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === "https:",
    refreshTokenName: _refreshTokenName
}
