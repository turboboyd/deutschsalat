import { useState, useCallback, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { otrTablet } from './OrtTablet';
import css from './OrtForm.module.css';
import Progress from 'Components/Progress/Progress';
import MainBtn from 'Components/Button/MainBtn';
import Container from 'Components/Container/Container';

const validationSchema = Yup.object().shape({
  answer: Yup.string().required('Обязательное поле'),
});

export default function OrtForm({ ortArr, ortName }) {
  const [correctAnswersNumber, setCorrectAnswersNumber] = useState(0);
  const [randomItem, setRandomItem] = useState(null);
  const [result, setResult] = useState('');
  const [foundCategories, setFoundCategories] = useState([]);
  console.log('foundCategories: ', foundCategories);
  const chooseRandomItem = useCallback(() => {
    setFoundCategories([]);
    setResult('');
    const randomIndex = Math.floor(Math.random() * ortArr.length);
    setRandomItem(ortArr[randomIndex]);
  }, [ortArr]);

  useEffect(() => {
    chooseRandomItem();
  }, [chooseRandomItem]);

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

      setFoundCategories(correctAnswerItems);

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
    <Container>
      <div>
        {randomItem && (
          <Progress
            correctAnswersNumber={correctAnswersNumber}
            totalAnswers={30}
          />
        )}
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
                  <Field className={css.input} type="text" name="answer" disabled={result} />
                  <div className={css.result_wrap}>
                    {result}
                    {foundCategories.map((category, index) => (
                      <div key={index}>
                        <p>Kategorie: {category.Kategorie}</p>
                        {ortName === 'wo' && <p>wo: {category.wo}</p>}
                        {ortName === 'woher' && <p>woher: {category.woher}</p>}
                        {ortName === 'wohin' && <p>wohin: {category.wohin}</p>}
                      </div>
                    ))}
                  </div>
                  {!result ? (
                    <MainBtn type="submit">Senden</MainBtn>
                  ) : (
                    <MainBtn type="button" onClick={chooseRandomItem}>
                      Weiter
                    </MainBtn>
                  )}
                </Form>
              )}
            </Formik>
          </>
        )}
      </div>
    </Container>
  );
}
