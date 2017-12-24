import styled from 'styled-components';
import Boolean from '../FieldBoolean';
import { fieldCheckboxOnly as propTypes } from '../../../helpers/propTypes';

const CheckboxOnly = styled(Boolean).attrs({ fieldType: 'checkbox' })``;

CheckboxOnly.propTypes = propTypes;

export default CheckboxOnly;