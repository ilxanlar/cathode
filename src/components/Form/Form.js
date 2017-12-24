import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import CheckboxGroup from './Checkbox/CheckboxGroup';
import Checkbox from './Checkbox/Checkbox';
import CheckboxOnly from './Checkbox/CheckboxOnly';
import Field from './Field';
import File from './File/File';
import RadioGroup from './Radio/RadioGroup';
import RadioOnly from './Radio/RadioOnly';
import Select from './Select/Select';
import FancySelect from './FancySelect/FancySelect';
import Switch from './Switch/Switch';
import SwitchOnly from './Switch/SwitchOnly';
import Text from './Text/Text';

const Form = styled.div`
  ${Field} {
    margin-bottom: 20px;
  }
`;

const Footer = styled.div`
  &:after {
    clear: both;
    content: '';
    display: block;
  }
`;

const FooterLeft = styled.div`
  float: left;

  ${Button} {
    margin-right: 10px;
  }
`;

const FooterRight = styled.div`
  float: right;

  ${Button} {
    margin-left: 10px;
  }
`;

Footer.Left = FooterLeft;
Footer.Right = FooterRight;

Form.Footer = Footer;
Form.Field = Field;
Form.CheckboxGroup = CheckboxGroup;
Form.Checkbox = Checkbox;
Form.CheckboxOnly = CheckboxOnly;
Form.RadioGroup = RadioGroup;
Form.RadioOnly = RadioOnly;
Form.Select = Select;
Form.FancySelect = FancySelect;
Form.Switch = Switch;
Form.SwitchOnly = SwitchOnly;
Form.Text = Text;
Form.File = File;

export default Form;