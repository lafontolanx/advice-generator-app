import webpack from 'webpack';

export const entry = './src/index.tsx';
export const module = {
    rules: [
        //...
        {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[hash]-[name].[ext]',
                    },
                    
                },
            ],
            resolve: {
                extensions: ['.js', '.ts', '.tsx', '.styl'],
                mainFields: ['module', 'browser', 'main'],
                alias: Object.keys(tsconfig.compilerOptions.paths).reduce((aliases, aliasName) => {
            
                    aliases[aliasName] = path.resolve(__dirname, `src/${tsconfig.compilerOptions.paths[aliasName][0]}`)
            
                    return aliases
                }, {})
            },
        },
    ],
};