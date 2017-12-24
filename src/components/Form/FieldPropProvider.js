import styled from 'styled-components';

const FieldPropProvider = styled.div.attrs({
  feedbackIn: ({ feedbackIn }) => feedbackIn || 'head',
  hasError: ({ meta }) => !!(meta && meta.touched && meta.error),
  hasWarning: ({ meta }) => !!(meta && meta.touched && meta.warning),
  hasFeedback: ({ meta }) => !!(meta && meta.touched && (meta.error || meta.warning)),
  errorMessage: ({ meta }) => meta && meta.error ? meta.error : undefined,
  warningMessage: ({ meta }) => meta && meta.warning ? meta.warning : undefined
})``;

export default FieldPropProvider;