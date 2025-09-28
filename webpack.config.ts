import webpack from 'webpack';
import {BuildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";



export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }


    const mode = env.mode || "development";
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    return BuildWebpackConfig({
        mode: mode,
        paths: paths,
        isDev: isDev,
        port: PORT
    })
}