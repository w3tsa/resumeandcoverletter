import Head from "next/head";

// styles
// import styles from "@/styles/Home.module.css";
import { Container, Divider } from "@chakra-ui/react";
import Header from "@/components/header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generate you resume and cover letter with AI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container as={"main"} maxW={"container.lg"}>
        <Header />
        <Divider orientation="horizontal" mt={5} />
        <Hero />
        {/* <Container>
          <JobDescription />
          <Resume />
          <GenerateButton />
          <UpdatedResume />
        </Container>
        <Divider orientation="horizontal" mb={5} />
        <Footer /> */}
      </Container>
    </div>
  );
}
