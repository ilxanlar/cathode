import styled from 'styled-components';
import Boolean from '../FieldBoolean';
import { fieldRadioOnly as propTypes } from '../../../helpers/propTypes';

const RadioOnly = styled(Boolean).attrs({ fieldType: 'radio' })``;

RadioOnly.propTypes = propTypes;

export default RadioOnly;