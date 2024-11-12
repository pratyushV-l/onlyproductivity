import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/timer",
        destination: "/components/Timer",
      },
      {
        source: "/random-quote",
        destination: "/components/RandomQuote",
      },
      {
        source: "/todo-list",
        destination: "/components/TodoList",
      },
    ];
  },
};

export default nextConfig;