export default {
    base: '/',
    build: {
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    }
}