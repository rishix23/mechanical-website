import Head from "next/head";
import Section from "../components/section/section.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>
      <p>This is the home page</p>
      <Section>
        <h1>"This is my section"</h1>
      </Section>
    </div>
  );
}
