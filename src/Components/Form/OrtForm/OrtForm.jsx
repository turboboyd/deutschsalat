import { useState, useCallback } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { otrTablet } from './OrtTablet';
import css from './OrtForm.module.css';
import Progress from 'Components/Progress/Progress';

const validationSchema = Yup.object().shape({
  answer: Yup.string().required('Обязательное поле'),
});

export default function OrtForm({ ortArr }) {
  const [ortName, setOrtName] = useState('Wo');
  const [correctAnswersNumber, setCorrectAnswersNumber] = useState(0);
  const [randomItem, setRandomItem] = useState(null);
  const [result, setResult] = useState('');

  const chooseRandomItem = useCallback(() => {
    setResult('');
    const randomIndex = Math.floor(Math.random() * ortArr.length);
    setRandomItem(ortArr[randomIndex]);
    return ortArr[randomIndex];
  }, [ortArr]);

  const checkAnswer = useCallback(
    (userAnswer, randomItem) => {
      const categories = randomItem.Kategorie.split('/');
      let correctAnswerItems = [];

      categories.forEach(category => {
        const items = otrTablet.filter(
          item =>
            item.Kategorie === category &&
            item.Geschlecht === randomItem.Geschlecht
        );
        correctAnswerItems = [...correctAnswerItems, ...items];
      });

      if (!correctAnswerItems.length) {
        return 'Falsch!';
      }

      const correctAnswers = correctAnswerItems.flatMap(item =>
        item[ortName.toLowerCase()].split('/')
      );

      if (correctAnswers.includes(userAnswer)) {
        setCorrectAnswersNumber(prevCorrectAnswers => prevCorrectAnswers + 1);
        return 'Richtig!';
      } else {
        return 'Falsch!';
      }
    },
    [ortName]
  );

  const handleSubmit = useCallback(
    (values, { setSubmitting, resetForm }) => {
      const result = checkAnswer(values.answer.toLowerCase(), randomItem);
      setResult(result);
      resetForm();
      setSubmitting(false);
    },
    [checkAnswer, randomItem]
  );


  return (
    <div>
      <button onClick={chooseRandomItem}>Starten</button>
      {randomItem && <Progress correctAnswersNumber={correctAnswersNumber} totalAnswers={30} />}  
      {randomItem && (
        <>
          <h2>{ortName}?</h2>
          <p>{randomItem.Ort}</p>
          <Formik
            initialValues={{ answer: '' }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <Form className={css.form}>
                <Field type="text" name="answer" disabled={result} />
                <div className={css.result}>{result}</div>
                {!result ? (
                  <button type="submit">Senden</button>
                ) : (
                  <button type="button" onClick={chooseRandomItem}>
                    Weiter
                  </button>
                )}
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
}
