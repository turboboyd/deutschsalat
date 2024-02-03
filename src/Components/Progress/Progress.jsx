import React from 'react';
import css from './Progress.module.css';

export default function Progress({ correctAnswersNumber, totalAnswers }) {
  const progress = (correctAnswersNumber / totalAnswers) * 100;
  return (
    <div>
      <div>
        <p>fortlaufender Fortschritt</p>
        <p>
          {correctAnswersNumber}/{totalAnswers}
        </p>
      </div>
      <div className={css.progress_bar}>
        <div
          className={css.progress_bar__fill}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
