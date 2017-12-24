import styled from 'styled-components';
import Boolean from '../FieldBoolean';
import { fieldSwitchOnly as propTypes } from '../../../helpers/propTypes';

const SwitchOnly = styled(Boolean).attrs({ fieldType: 'switch' })``;

SwitchOnly.propTypes = propTypes;

export default SwitchOnly;