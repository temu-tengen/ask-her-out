"use client";
import styles from './form.module.css';

type AnswerOption = string | [string, string];

type Props = {
  question: string;
  answerOptions: AnswerOption[];
  onAnswer: (answer: string) => void;
  textField?: boolean;
};

export default function Form({ question, answerOptions, onAnswer, textField }: Props) {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.questionText}>{question}</h2>

      <div className={styles.answerOptions}>
        {answerOptions.map((option) => {
          const [label, value] = typeof option === 'string' ? [option, option] : option;

          return (

            <div>
              {textField === true && (
                <input
                  type="text"
                  className={styles.textField}
                  onChange={(e) => onAnswer(e.target.value)}
                />
              )}

              <button
                key={label}
                className={styles.answerButton}
                type="button"
                onClick={() => onAnswer(value)}
              >
                {label}
              </button>

            </div>
          );
        })}
      </div>
    </div>
  );
}