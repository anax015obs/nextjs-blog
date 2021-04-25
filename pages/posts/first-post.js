import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      {/*  It allows you to modify the <head> of a page. */}
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      {/* Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them.
       Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images.
       Images are lazy loaded by default. That means your page speed isn't penalized for images outside the viewport.
       Images load as they are scrolled into viewport.
       Images are always rendered in such a way as to avoid Cumulative Layout Shift, a Core Web Vital that Google is going to use in search ranking.
       */}
      <Image
        src="/images/profile.jpeg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
