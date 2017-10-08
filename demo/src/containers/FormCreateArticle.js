import React from 'react';
import {
  Button,
  Card,
  CheckboxGroup,
  CheckboxInput,
  DropdownInput,
  Form,
  RadioGroup,
  SwitchInput,
  TextInput
} from '../../../src';

const sizes = ['md', 'xxs', 'xs', 'sm', 'lg', 'xl', 'xxl'];
const styles = ['default', 'info', 'success', 'error', 'warning'];

const rockBands = [
  { id: 1, name: 'Pink Floyd' },
  { id: 2, name: 'Metallica' },
  { id: 3, name: 'Led Zeppelin' },
  { id: 4, name: 'Slipknot' }
];

export default class FormCreateArticle extends React.Component {
  state = {
    ui: {
      size: 'md',
      vertical: true
    },
    values: {}
  };

  handleChangeUI(name, value) {
    if (this.state.ui[name] !== value) {
      const ui = {
        ...this.state.ui,
        [name]: value
      };

      this.setState({ ui });
    }
  }

  handleChange(name, value) {
    if (this.state.values[name] !== value) {
      const values = {
        ...this.state.values,
        [name]: value
      };

      this.setState({ values });
    }
  }

  render() {
    const { ui, values } = this.state;

    return (
      <div>
        <Card padding="xl">
          <Card.Content>
            <RadioGroup
              options={sizes}
              optionValue={opt => opt}
              optionLabel={opt => opt}
              input={{
                onChange: this.handleChangeUI.bind(this, 'size'),
                value: ui.size
              }}
              inline
            />

            <CheckboxInput
              description="Vertical"
              input={{
                onChange: this.handleChangeUI.bind(this, 'vertical'),
                value: ui.vertical
              }}
            />

            <hr />

            <Form vertical={ui.vertical}>
              <Form.Heading>
                Write an Article
              </Form.Heading>

              <DropdownInput
                size={ui.size}
                label="Language"
                placeholder="Choose your language"
                tip="Fuck me, what a cool feature :)))"
                options={rockBands}
                optionValue={opt => opt.id}
                optionLabel={opt => opt.name}
                optionDisabled={opt => opt.id % 3 === 0}
                required
                input={{
                  onChange: this.handleChange.bind(this, 'language'),
                  value: values.language
                }}
              />

              <TextInput
                size={ui.size}
                label="Email"
                placeholder="You email address here"
                tip="A unique email address"
                required
                input={{
                  onChange: this.handleChange.bind(this, 'email'),
                  value: values.email
                }}
                meta={{
                  touched: true,
                  error: 'You must enter a unique email address'
                }}
              />

              <CheckboxGroup
                size={ui.size}
                label="Favorite Bands"
                placeholder="Choose your favorite programming language"
                options={rockBands}
                optionValue={opt => opt.id}
                optionLabel={opt => opt.name}
                optionDisabled={opt => opt.id % 3 === 0}
                input={{
                  onChange: this.handleChange.bind(this, 'favorites'),
                  value: values.favorites
                }}
                inline
              />

              <RadioGroup
                size={ui.size}
                label="Top Band"
                placeholder="Choose your favorite programming language"
                options={rockBands}
                optionValue={opt => opt.id}
                optionLabel={opt => opt.name}
                optionDisabled={opt => opt.id % 3 === 0}
                input={{
                  onChange: this.handleChange.bind(this, 'role'),
                  value: values.role
                }}
                inline
              />

              <SwitchInput
                size={ui.size}
                description="Create my account by the way"
                trueValue="yes"
                falseValue="no"
                input={{
                  onChange: this.handleChange.bind(this, 'createAccount'),
                  value: values.createAccount
                }}
              />

              <Form.Buttons>
                <Button style="primary" size={ui.size} icon="heart">
                  Publish
                </Button>

                <Button style="secondary" size={ui.size}>
                  Save Draft
                </Button>
              </Form.Buttons>
            </Form>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
