import Head from "next/head";

const Meta = () => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Tailor</title>
      </Head>
      <style jsx global>{`
        @font-face {
        }

        body {
          margin: 0;
          padding: 0;
          max-width: 100%;
        }

        .* {
          box-sizing: border-box;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Meta;
