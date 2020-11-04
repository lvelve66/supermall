// 配置相关文件
module.exports = {
    // 准备配置config
    configureWebpack: {
        //配置路径
        resolve: {
            // 配置别名
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}