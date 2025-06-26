import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_API_HOST],
  },
};

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json',
  },
});
export default withNextIntl(nextConfig);
