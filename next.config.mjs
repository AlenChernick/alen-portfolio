/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    webpack: (config, { isServer }) => {
        // Add GLB loader
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            use: {
                loader: 'file-loader',
            },
        });

        return config;
    },
};

export default nextConfig;
