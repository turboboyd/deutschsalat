import { Formik } from 'formik';
import { Form, ErrorMessage } from 'formik';
import css from './TrialLessonForm.module.css';
import InputField from '../InputField/InputField';
import { trialLessonSchema } from 'Components/Form/Schema/validationSchemas';
import Title from 'Components/Form/Title/Title';
import BtnForm from 'Components/Form/BtnForm/BtnForm';
import PropTypes from 'prop-types';

import TeacherInfoTrialLesson from 'Components/Form/TeacherInfoTrialLesson/TeacherInfoTrialLesson';
import Topics from 'Components/Form/Topics/Topics';

const title = 'Book Trial Lesson';
const text =
  'Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.';

const TrialLessonForm = ({ teacher }) => {
  return (
    <Formik
      initialValues={{ fullName: '', email: '', phoneNumber: '', topic: '' }}
      validationSchema={trialLessonSchema}
      onSubmit={values => {
        console.log('values: ', values);
      }}
    >
      <Form className={css.form}>
        <div className={css.title_wrap}>
          <Title title={title} text={text} />
          <TeacherInfoTrialLesson teacher={teacher} />
        </div>

        <Topics type="radio" name="topic" />

        <ErrorMessage name="topic" component="div" />

        <div className={css.input_wrap}>
          <InputField type="text" name="fullName" placeholder="Full Name" />
          <InputField type="text" name="email" placeholder="Email" />
          <InputField
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
          />
        </div>
        <BtnForm btnTitle="Book" />
      </Form>
    </Formik>
  );
};

TrialLessonForm.propTypes = {
  teacher: PropTypes.object.isRequired,
};

export default TrialLessonForm;
