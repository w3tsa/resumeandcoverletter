import { useState, useRef } from "react";
import Head from "next/head";

// styles
// import styles from "@/styles/Home.module.css";
import { Container, Divider, Textarea } from "@chakra-ui/react";
import Header from "@/components/header";
import Hero from "@/components/hero/Hero";
import JobDescription from "@/components/job_description";
import Resume from "@/components/resume/Resume";
import GenerateButton from "@/components/GenerateButton";
import Footer from "@/components/footer";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [jobDescription, setJobDescription] = useState<string>("");
  const [resume, setResume] = useState<string>("");
  const [result, setResult] = useState<tring>("");

  const resultRef = useRef<null | HTMLDivElement | any>(null);

  const scrollToResult = () => {
    if (resultRef.current !== null) {
      resultRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prompt = `Based on this job description: ${jobDescription} and this current resume: ${resume}, genrate an updated more professional resume with lable Resume and a Cover Letter with the label Cover letter please.`;

  const generate = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    // This data is readable stream
    const data = response.body;
    if (!data) {
      return;
    }
    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    while (!done) {
      // eslint-disable-next-line no-await-in-loop
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setResult((prev) => prev + chunkValue);
    }
    scrollToResult();
    setLoading(false);
  };

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
        <Container>
          <JobDescription
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
          />
          <Resume resume={resume} setResume={setResume} />
          <GenerateButton handleClick={generate} />
          {/* <UpdatedResume /> */}
        </Container>
        <Textarea value={result} ref={resultRef}></Textarea>
        <Divider orientation="horizontal" mb={5} />
        <Footer />
      </Container>
    </div>
  );
}
