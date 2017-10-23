export default {
    /**
     * @param {string}
     * @param {string}
     * @param {number | object}
     */
    set(name, value, opts) {
        var expires = undefined;
        if(typeof opts==='number' ){
            expires = opts
            opts = {
                expires: expires
            }
        }else{
            opts = opts || {};
            expires = opts.expires
        }
        
        var domain = opts.domain;
        var path = opts.path || '/';
        var secure = opts.secure ? 'secure' : '';

        let cookie = name + '=' + encodeURI(value) + ';';
        if (expires || expires === 0) {
            var oDate = new Date()
            oDate.setTime(+oDate + expires)
            cookie += ' expires=' + oDate.toUTCString() + ';';
        }

        if (domain) cookie += ' domain=' + domain + ';';
        if (path) cookie += ' path=' + path + ';';
        if (secure) cookie += ' secure;';
        return document.cookie = cookie;
    },

    get(name) {
        var result = '';
        var reg = new RegExp('(^|; )' + name + '=([^;]*)(;|$)');
        if (result = document.cookie.match(reg)) {
            return decodeURI(result[2]);
        } else {
            return '';
        }
    },

    remove(name) {
        this.set(name, '', { expires: -1 });
    }
};
