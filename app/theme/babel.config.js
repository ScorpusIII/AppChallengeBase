module.exports = {
    presets: ['babel-preset-expo'], // or whatever you're using
    plugins: [
        'tamagui',
        'react-native-reanimated/plugin', // keep reanimated plugin LAST
    ],
};