import { useState, useRef } from "react";
import Head from "next/head";

// styles
// import styles from "@/styles/Home.module.css";
import { Button, Container, Divider, Flex, Progress } from "@chakra-ui/react";
import Header from "@/components/header";
import Hero from "@/components/hero/Hero";
import JobDescription from "@/components/job_description";
import Resume from "@/components/resume/Resume";
import GenerateButton from "@/components/GenerateButton";
import Footer from "@/components/footer";
import Result from "@/components/result";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [showResume, setShowResume] = useState<boolean>(false);
  const [showCoverLetter, setShowCoverLetter] = useState<boolean>(false);
  const [jobDescription, setJobDescription] = useState<string>("");
  const [resume, setResume] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  // const [result, setResult] = useState<string>("");
  const [updatedResume, setUpdatedResume] = useState<string>("");
  const [coverLetter, setCoverLetter] = useState<string>("");

  const updatedResumeRef = useRef<null | HTMLDivElement | any>(null);
  // const coverLetterRef = useRef<null | HTMLDivElement | any>(null);

  const scrollToResult = () => {
    if (updatedResumeRef.current !== null) {
      updatedResumeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  let prompt: string;

  const generate = async (e: any) => {
    e.preventDefault();
    if (!jobDescription || !resume) {
      return;
    }
    setLoading(true);
    if (e.target.ariaLabel === "generate resume") {
      prompt = `based on this job description: ${jobDescription} and this current resume: ${resume} can you rewrite an updated more professional resume please.`;
    }
    if (e.target.ariaLabel === "generate cover letter") {
      prompt = `based on this job description: ${jobDescription} and this current resume: ${resume} can you write a professional cover letter please.`;
    }
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
      if (e.target.ariaLabel === "generate resume") {
        setUpdatedResume((prev: string) => prev + chunkValue);
        setShowResume(true);
        setCount(count + 1);
      }
      if (e.target.ariaLabel === "generate cover letter") {
        setCoverLetter((prev: string) => prev + chunkValue);
        setShowCoverLetter(true);
        setCount(count + 1);
      }
    }
    scrollToResult();
    setLoading(false);
  };

  function reset() {
    setJobDescription("");
    setResume("");
    setShowResume(false);
    setShowCoverLetter(false);
    setUpdatedResume("");
    setCoverLetter("");
  }

  return (
    <div className="App">
      <Head>
        <title>Resume and Cover letter</title>
        <meta
          name="description"
          content="Generate you resume and cover letter with AI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo_light.png" />
      </Head>
      <Container as={"main"} maxW={"container.lg"}>
        <Header />
        <Divider orientation="horizontal" mt={5} />
        <Hero count={count} />
        <Container>
          <JobDescription
            jobDescription={jobDescription}
            setJobDescription={setJobDescription}
          />
          <Resume resume={resume} setResume={setResume} />
          <br />
          {loading ? (
            <Progress size="xs" isIndeterminate />
          ) : (
            <Flex justifyContent={"space-between"} alignItems={"center"} mb={5}>
              <GenerateButton
                handleClick={generate}
                text="Generate your Resume"
                ariaLabel="generate resume"
                loading={loading}
              />
              <GenerateButton
                handleClick={generate}
                text="Generate your Cover Letter"
                ariaLabel="generate cover letter"
                loading={loading}
              />
            </Flex>
          )}
          {showResume && (
            <>
              <Result text={updatedResume} />
            </>
          )}
          <br />
          {showCoverLetter && (
            <>
              <Result text={coverLetter} />
            </>
          )}
          {(showResume || showCoverLetter) && (
            <Button onClick={reset} mt={5} mb={5} width={"100%"}>
              Clear All
            </Button>
          )}
        </Container>

        <Divider orientation="horizontal" mb={5} />
        <Footer />
      </Container>
    </div>
  );
}

/* 

<Flex justifyContent={"space-between"} alignItems={"center"} mb={5}>
            <GenerateButton
              handleClick={generate}
              text="Generate your Resume"
              ariaLabel="generate resume"
              loading={loading}
            />
            <GenerateButton
              handleClick={generate}
              text="Generate your Cover Letter"
              ariaLabel="generate cover letter"
              loading={loading}
            />
          </Flex>
*/
