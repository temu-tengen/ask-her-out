"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import Form from "./form";

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [favCuisine, setFavCuisine] = useState("");

  const [name, setName] = useState("Hey Nivedina!");

  return (
    <div className={styles.page}>
      <link rel="icon" type="image/x-icon" href="/window.svg" />
      <h1 className={styles.headingXL}>{name}!</h1>
      {currentQuestion === 0 && (
        <Form
          question="Heyyy, could you possibly answer some questions..."
          answerOptions={[["Sure!", "Yes"], ["No thanks", "No"]]}
          onAnswer={(response) => response === "Yes" ? setCurrentQuestion(1) : setCurrentQuestion(998)} 
          textField={false}
        />
      )}
      {currentQuestion === 1 && (
        <Form
          question="I like you. Would you like to go out with me?"
          answerOptions={["Yes", "No"]}
          textField={false}
          onAnswer={(response) => response === "Yes" ? setCurrentQuestion(2) : setCurrentQuestion(999)}
        />
      )}

      {currentQuestion === 2 && (
        <Form
          question="Wait.. Really??"
          answerOptions={["Yup, really.", "Nah jk"]}
          textField={false}
          onAnswer={(response) => response === "Yup, really." ? setCurrentQuestion(3) : setCurrentQuestion(999)}
        />
      )}

      {currentQuestion === 3 && (
        <Form
          question="Ok! :) What's your fav cuisine?"
          answerOptions={["Lets keep going!"]}
          textField={true}
          onAnswer= {(response) => {
            setFavCuisine(response);
            setCurrentQuestion(4);
          }}
        />
      )}

      {currentQuestion === 4 && (
        <Form 
          question={`Awesome! I love ${favCuisine} too. How about we go out for some ${favCuisine} food together?`}
          answerOptions={["Ok sure!", "Nah"]}
          textField={false}
          onAnswer={(response) => {response === "Ok sure!" ? setCurrentQuestion(5) : setCurrentQuestion(999)}}
        />
      )}

      {currentQuestion === 5 && (
        <Form
          question={"YESS!! My # is 224 370 1959. Text me ASAP"}
          answerOptions={["Got it! Talk to u", "Hell no.. "]}
          textField={false}
          onAnswer={(response) => {response === "Got it! Talk to u" ? setCurrentQuestion(1000) : setCurrentQuestion(999) 
            setName("Byeee")}}
        />
      )}

      {currentQuestion === 998 && (
        <Form
          question={"Are u sure.. :( Gimme a chance.."}
          answerOptions={["Absolutely.", "Fine I'll keep going"]}
          textField={false}
          onAnswer={(response) => {response === "Absolutely." ? setCurrentQuestion(999) : setCurrentQuestion(0)}}
        />
      )}

      {currentQuestion === 999 && (
        <Form question="Aw man.. Well it was worth a try. See ya!" answerOptions={["See ya!"]} onAnswer={() => {setCurrentQuestion(1000)
          setName("Byeeee")}
        } textField={false}/>
      )}
  </div>
  );
}
