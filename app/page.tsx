import Head from "next/head";
import Script from "next/script";

export default function Home() {
  const endpoint = process.env.NEXT_PUBLIC_FLOW_ID;
  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <Head>
        <title>DataStax - Langflow Chat Widget</title>
        <meta
          name="description"
          content="Navigate to different chat versions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="https://cdn.jsdelivr.net/gh/logspace-ai/langflow-embedded-chat@v1.0.4/dist/build/static/js/bundle.min.js" />

      <div>
        <h1>Langflow DataStax - Chat Widget with NextJS Demo</h1>
      </div>
      <div className="absolute bottom-0 right-0 h-16 w-16">
        <langflow-chat
          window_title="Langflow RAG"
          flow_id={endpoint}
          host_url=""
          chat_position="top-left"
        ></langflow-chat>
      </div>
    </div>
  );
}
