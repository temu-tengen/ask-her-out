"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import Form from "./form";

export default function Home() {
  let name = "(Girl's name goes here)";
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className={styles.page}>
      <link rel="icon" type="image/x-icon" href="/window.svg" />
      <h1 className={styles.headingXL}>Hey {name}!</h1>
      {currentQuestion === 0 && (
        <Form
          question="Heyyy, could you possibly answer some questions..."
          answerOptions={[["Sure!", "Yes"], ["No thanks", "No"]]}
          onAnswer={(response) => response === "Yes" ? setCurrentQuestion(1) : setCurrentQuestion(999)} 
        />
      )}
      {currentQuestion === 1 && (
        <Form
          question="Would you like to go out with me?"
          answerOptions={["Yes", "No"]}
          onAnswer={(response) => response === "Yes" ? setCurrentQuestion(2) : setCurrentQuestion(999)}
        />
      )}

      {currentQuestion === 2 && (
        <Form
          question="Wait.. Really??"
          answerOptions={["Yup, really.", "Nah jk"]}
          onAnswer={(response) => response === "Yup, really." ? setCurrentQuestion(3) : setCurrentQuestion(999)}
        />
      )}

      {currentQuestion === 3 && (
        <Form
          question="Ok! :) What's your fav cuisine?"
          answerOptions={["Lets keep going!"]}
          textField={true}
          onAnswer= {() => {}}
        />
      )}

      {currentQuestion === 999 && (
        <Form question="Thanks anyway!" answerOptions={["Bye!"]} onAnswer={() => setCurrentQuestion(1000)} />
      )}
  </div>
  );
}
