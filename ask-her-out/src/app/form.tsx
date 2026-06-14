"use client";
import styles from './form.module.css';
import { useState } from 'react';

type AnswerOption = string | [string, string];

type Props = {
  question: string;
  answerOptions: AnswerOption[];
  onAnswer: (answer: string) => void;
  textField?: boolean;
};

export default function Form({ question, answerOptions, onAnswer, textField }: Props) {
  const [fieldValue, setFieldValue] = useState("");
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.questionText}>{question}</h2>

      <div className={styles.answerOptions}>
        {answerOptions.map((option) => {
          const [label, value] = typeof option === 'string' ? [option, option] : option;

          return (

            <div key={option[0]}>
              {textField === true && (
                <input
                  type="text"
                  className={styles.textField}
                  onChange={(e) => setFieldValue(e.target.value)}
                />
              )}

              {textField === false && (<button
                key={label}
                className={styles.answerButton}
                type="button"
                onClick={() => onAnswer(value)}
              >
                {label}
              </button>)}

              {textField === true && (
                <button key={label}
                  className={styles.answerButton}
                  type="button"
                  onClick={() => onAnswer(fieldValue)}
                >{label}</button>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}