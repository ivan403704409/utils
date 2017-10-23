/**
 * @param  {string}
 * @return {string}
 */
function get(name) {
	let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
    let r = window.location.search.substr(1).match(reg)
    if (r != null) {
        return decodeURIComponent(r[2])
    }
    return ''
}

/**
 * @return {Object}
 */
function parse() {
	let res = {}
	let str = window.location.search.replace(/^\?/, '')
	let arr = str.match(/[^=&]+=[^&]*/g)
	if(!arr)return res
	arr.forEach((item) => {
		let [key, val] = item.split('=')
		res[key] = decodeURIComponent(val)
	})
	return res
}

export default {
	get,
	parse,
}