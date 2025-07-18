export default {
    base: '/',
    build: {
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    },
    server: {
        fs: {
            allow: ['..'] // Разрешить доступ к родительским папкам
        }
    }
}