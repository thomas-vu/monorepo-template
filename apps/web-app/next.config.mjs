import withPWA from "next-pwa";

const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

const pwaConfig = {
  dest: "public",
  disable: isDev,
  register: isProd,
  skipWaiting: isProd,
  maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Server-specific externals
    if (isServer) {
      config.externals = [
        {
          "utf-8-validate": "commonjs utf-8-validate",
          bufferutil: "commonjs bufferutil",
        },
        ...config.externals,
      ];
    }

    // Add loaders
    config.module.rules.push(
      {
        test: /\.node$/,
        use: "node-loader",
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
    );

    // Enable experimental features
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    // Browser-specific config for async functions
    if (!isServer) {
      config.output.environment = {
        ...config.output.environment,
        asyncFunction: true,
      };
    }

    return config;
  },
};

export default withPWA(pwaConfig)(nextConfig);
