const urlParsing = function(url) {
    const queryStr = url.split('?')[1] || '';
    if (!queryStr) {
        return {};
    }
    const queryList = queryStr.split('&');
    const params = {};
    for (let i = 0; i < queryList.length; i++) {
        const q = queryList[i];
        if (!q) {
            continue
        }
        if (/=/.test(q)) {
            const [key, val] = q.split('=');
            params[key] = encodeURIComponent(val || '');
        } else {
            params[q] = '';
        }
    }
    return params;
}
console.log(urlParsing('http://www.baidu.com?a=aa&b=bb&c=cc&d&'));