import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const RENDER_DELAY = 5000;

type DeferredProps = {
  message: string;
};
const Deferred: NextPage<DeferredProps> = (props) => {
  const { message } = props;
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Deferred: {router.isFallback ? "Loading..." : message}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {router.isFallback ? (
          <>
            <p className={styles.description}>Loading&hellip;</p>
            <code>
              <pre>{JSON.stringify(message)}</pre>
            </code>
          </>
        ) : (
          <h1 className={styles.title}>{message}</h1>
        )}
      </main>
    </div>
  );
};
export default Deferred;

export const getStaticProps: GetStaticProps<DeferredProps> = async (
  context
) => {
  await new Promise((res) => setTimeout(res, RENDER_DELAY));

  const message = context.params?.message;
  if (!message)
    return {
      notFound: true,
    };
  return {
    props: {
      message: Array.isArray(message) ? message.join(" ") : message,
    },
  };
};

export const getStaticPaths: GetStaticPaths = (context) => {
  return {
    fallback: true,
    paths: [],
  };
};