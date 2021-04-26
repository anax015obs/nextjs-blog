import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/post";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {/* 
              Next.js does code splitting automatically, so each page only loads what’s necessary for that page. 
              That means when the homepage is rendered, the code for other pages is not served initially.
              This ensures that the homepage loads quickly even if you have hundreds of pages.
              Only loading the code for the page you request also means that pages become isolated. 
              If a certain page throws an error, the rest of the application would still work.
              Furthermore, in a production build of Next.js, whenever Link components appear in the browser’s viewport, 
              Next.js automatically prefetches the code for the linked page in the background. 
              By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!
              */}
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

/*  getStaticProps allows you to tell Next.js:
 * “Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”
 */
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
