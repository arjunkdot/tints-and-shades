const useCookies = () => {
    return { setCookie, getCookie };
}

/**
 * Sets a cookie with the given name, value, and expiration days.
 *
 * @param {string} cname - The name of the cookie.
 * @param {string} cvalue - The value of the cookie.
 * @param {number} exdays - The number of days until the cookie expires.
 * @return {void} This function does not return anything.
 * @see {@link https://www.w3schools.com/js/js_cookies.asp|W3Schools}
 */
function setCookie(cname: string, cvalue: string, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


/**
 * Retrieves the value of a cookie with the given name.
 *
 * @param {string} cname - The name of the cookie.
 * @return {string} The value of the cookie, or an empty string if the cookie is not found.
 * @see {@link https://www.w3schools.com/js/js_cookies.asp|W3Schools}
 */
function getCookie(cname: string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export { useCookies }