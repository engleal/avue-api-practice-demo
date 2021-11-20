// const iconfontVersion = ['667895_v7uduh4zui', '1638883_ykx0ssn4o5']
const iconUrl = '//at.alicdn.com/t/font_2897842_7e4457l85zs.css'
const iconfontVersion = [getIconVersion(iconUrl)]
const iconfontUrl = '//at.alicdn.com/t/font_$key.css'

export { iconfontUrl, iconfontVersion }

// 获取关键的版本信息
function getIconVersion(iconfongUrl) {
	const keyIndex = iconfongUrl.indexOf('font_')
	const keyVersion = iconfongUrl.slice(keyIndex + 5, iconfongUrl.length - 4)
	return keyVersion
}
