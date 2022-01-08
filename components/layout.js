import Head from 'next/head';
import layoutStyles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';


const name = "Coder Mehedi";
export const siteTitle = "Next.js Sample Website";

const Layout = ({ children, home }) => {
  return (
    <div className={layoutStyles.container}>

      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="Learn how to create a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summery_large_image" />
      </Head>

      <header className={layoutStyles.header}>
        {
          home ? (
            <>
              <Image
                priority
                src="/images/mehedi.png"
                className={utilStyles.borderCircle}
                width={144}
                height={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/mehedi.png"
                    className={utilStyles.borderCircle}
                    width={108}
                    height={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )
        }
      </header>

      <main>
        {children}
      </main>

      {
        !home && (
          <div className={layoutStyles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )
      }

    </div>
  );
};

export default Layout;;