/* eslint-disable no-undef */
const { getDefaultConfig } = require("@expo/metro-config");

module.exports = (async () => {
	const {
		resolver: { sourceExts, assetExts },
	} = await getDefaultConfig(__dirname);
	return {
		transformer: {
			babelTransformerPath: require.resolve(
				"react-native-sass-transformer"
			),
		},
		resolver: {
			sourceExts: [...sourceExts, "scss", "sass"],
		},
	};
})();
