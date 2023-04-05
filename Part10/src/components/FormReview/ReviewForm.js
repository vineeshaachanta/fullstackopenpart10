import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-native';
import useReview from '../../hooks/useReview';
import initialValues from './utils/initialValues';
import validationSchema from './utils/validationSchema';
import Form from './Form';

function ReviewForm() {
  const [createOReview] = useReview();
  const history = useHistory();

  const onSubmit = useCallback(async values => {
    try {
      const { data } = await createOReview(values);
      history.push(`/repo/${data.createOReview.repositoryId}`)
    } catch (err) {
      console.log(err);
    }
  }, [createOReview, history.push]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <Form onSubmit={handleSubmit}/>}
    </Formik>
  );
}

export default ReviewForm;
