import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <NextSeo
        title="Portfolio Template"
        description="A simple portfolio template built with Next.js, hextastudio/ui, TypeScript, and Tailwind CSS"
        canonical="https://hextaui-portfolio.netlify.app"
        openGraph={{
          url: "https://hextaui-portfolio.netlify.app",
          title: "Portfolio Template",
          description:
            "A simple portfolio template built with Next.js, hextastudio/ui, TypeScript, and Tailwind CSS",
          images: [
            {
              url: "",
              width: 1920,
              height: 1080,
              alt: "",
              type: "image/png",
            },
          ],
          siteName: "Portfolio Template",
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}
