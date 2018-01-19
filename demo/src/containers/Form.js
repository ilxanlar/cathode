import React from 'react';
import { Button, Form, Grid } from '../../../src';

const sizes = ['md', 'xxs', 'xs', 'sm', 'lg', 'xl', 'xxl'];
const moods = ['primary', 'secondary', 'tertiary', 'info', 'success', 'error', 'warning'];

const rockBands = [
  { id: 1, name: 'Pink Floyd' },
  { id: 2, name: 'Metallica' },
  { id: 3, name: 'Led Zeppelin' },
  { id: 4, name: 'Slipknot' }
];

export default class FormCreateArticle extends React.Component {
  fancySelectOptions = [
    { id: 1, label: 'JavaScript' },
    { id: 2, label: 'Go Language' },
    { id: 3, label: 'PHP' },
    { id: 4, label: 'C#' },
    { id: 5, label: 'C++' },
    { id: 6, label: 'Objective C' },
    { id: 7, label: 'Java' },
    { id: 8, label: 'Python' },
    { id: 9, label: 'Scala' },
    { id: 10, label: 'Bash Scripting' }
  ];

  state = {
    ui: {
      size: 'md',
      vertical: true
    },
    values: {},
    fancySelectLoading: false,
    fancySelectOptions: []
  };

  metaError = {
    touched: true,
    error: 'This is a sample error message!'
  };

  metaWarning = {
    touched: true,
    warning: 'This is a sample warning message!'
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

  input = (name) => ({
    onChange: this.handleChange.bind(this, name),
    value: this.state.values[name]
  });

  handleSearchFancySelect = (search) => {
    if (this.fancySelectTimeout) {
      window.clearTimeout(this.fancySelectTimeout);
    }

    this.setState({
      fancySelectLoading: true
    });

    this.fancySelectTimeout = window.setTimeout(() => {
      this.setState({
        fancySelectLoading: false,
        fancySelectOptions: this.fancySelectOptions.filter(opt => opt.label.toLowerCase().indexOf(search.toLowerCase()) > -1)
      });
    }, 500);
  };

  render() {
    const { ui, values, fancySelectOptions, fancySelectLoading } = this.state;

    return (
      <div>
        <br /><br />

        <Form>
          <Grid.Row gutterXxs="xl">
            <Grid.Column sm={12} lg={8} xl={6}>
              <Form.Text
                label="Sample text input"
                placeholder="Placeholder goes here..."
                help="This is some help about this field"
                tip="This is some tip about this field"
                input={this.input('text-1')}
                meta={this.metaError}
                required
              />
            </Grid.Column>

            <Grid.Column sm={12} lg={8} xl={6}>
              <Form.Select
                label="Sample select input"
                placeholder="Placeholder goes here..."
                help="This is some help about this field"
                tip="This is some tip about this field"
                options={rockBands}
                optionLabel="name"
                optionValue="id"
                input={this.input('select-1')}
                meta={this.metaError}
              />
            </Grid.Column>

            <Grid.Column sm={12} lg={8} xl={6}>
              <Form.FancySelect
                label="Sample fancy select input"
                placeholder="Placeholder goes here..."
                help="This is some help about this field"
                tip="This is some tip about this field"
                options={rockBands}
                optionLabel="name"
                optionValue="id"
                input={this.input('fancy-select-1')}
                meta={this.metaError}
                multi
              />
            </Grid.Column>

            <Grid.Column sm={12} lg={8} xl={6}>
              <Form.File
                label="Sample file input"
                placeholder="Placeholder goes here..."
                help="This is some help about this field"
                tip="This is some tip about this field"
                input={this.input('file-1')}
                meta={this.metaError}
              />
            </Grid.Column>

            <Grid.Column sm={24} lg={12}>
              <Form.Switch
                label="Newsletter"
                description="Create an account and subscribe to our newsletter"
                input={this.input('switch-1')}
                meta={this.metaError}
                required
              />
            </Grid.Column>

            <Grid.Column sm={24} lg={12}>
              <Form.Checkbox
                label="Newsletter"
                description="Create an account and subscribe to our newsletter"
                input={this.input('checkbox-1')}
                meta={this.metaError}
                required
              />
            </Grid.Column>

            <Grid.Column sm={24} lg={12}>
              <Form.RadioGroup
                label="Select your favorite programming language"
                placeholder="Select your favorite programming language"
                options={[
                  'JavaScript', 'Go Language', 'PHP', 'C#', 'C++',
                  'Objective C', 'Java', 'Python', 'Scala', 'Bash Scripting'
                ]}
                optionLabel={opt => opt}
                optionValue={opt => opt}
                optionDisabled={opt => opt === 'PHP'}
                input={this.input('radio-group-1')}
                meta={this.metaError}
                required
              />
            </Grid.Column>

            <Grid.Column sm={24} lg={12}>
              <Form.CheckboxGroup
                label="Select your favorite programming language"
                placeholder="Select your favorite programming language"
                options={['JavaScript', 'Go', 'PHP', 'C#']}
                optionLabel={opt => opt}
                optionValue={opt => opt}
                input={this.input('checkbox-group-1')}
                meta={this.metaError}
                required
              />
            </Grid.Column>
          </Grid.Row>

          <br />

          {
            moods.map((mood, key) => (
              <div key={key}>
                <Form.CheckboxOnly mood={mood} />
                <Form.CheckboxOnly mood={mood} disabled />
                <Form.CheckboxOnly mood={mood} value={true} />
                <Form.CheckboxOnly mood={mood} value={true} disabled />
                <Form.RadioOnly mood={mood} />
                <Form.RadioOnly mood={mood} disabled />
                <Form.RadioOnly mood={mood} value={true} />
                <Form.RadioOnly mood={mood} value={true} disabled />
                <Form.SwitchOnly mood={mood} />
                <Form.SwitchOnly mood={mood} disabled />
                <Form.SwitchOnly mood={mood} value={true} />
                <Form.SwitchOnly mood={mood} value={true} disabled />
              </div>
            ))
          }
        </Form>

        <br />

        <Form>
          <Grid.Row>
            <Grid.Column md={12}>
              <Form.FancySelect
                label="Select your favorite programming language"
                placeholder="Select your favorite programming language"
                size="md"
                options={fancySelectOptions}
                optionLabel={opt => <span>{opt.label}</span>}
                optionValue={opt => opt.id}
                optionDisabled={opt => opt.id === 5}
                onSearch={this.handleSearchFancySelect}
                loading={fancySelectLoading}
                input={{
                  onChange: this.handleChange.bind(this, 'fancySelect'),
                  value: values.fancySelect
                }}
                multi
                required
              />
            </Grid.Column>

            <Grid.Column md={12}>
              <Form.FancySelect
                label="Select your favorite programming language"
                placeholder="Select your favorite programming language"
                size="md"
                options={this.fancySelectOptions}
                optionLabel={opt => opt.label}
                optionValue={opt => opt.id}
                optionDisabled={opt => opt.id === 5}
                input={{
                  onChange: this.handleChange.bind(this, 'fancySelectSingle'),
                  value: values.fancySelectSingle
                }}
                required
              />
            </Grid.Column>
          </Grid.Row>


          <Form.Text
            label="Email"
            placeholder="xxxyyyzzz@xyz.com"
            tip="This is label field tip for the dummy users!"
            help="This is label field help text for the dummy users!"
            meta={{
              touched: true,
              error: 'This field has errors!'
            }}
            input={{
              onChange: this.handleChange.bind(this, 'email'),
              value: values.email
            }}
            feedbackIn="foot"
            required
          />

          <Form.Text
            label="Username"
            placeholder="A unique username for your account"
            tip="This is label field tip for the dummy users!"
            help="This is label field help text for the dummy users!"
            meta={{
              touched: true,
              error: 'This field has errors!'
            }}
            input={{
              onChange: this.handleChange.bind(this, 'username'),
              value: values.username
            }}
            feedbackIn="foot"
            required
            disabled
          />

          <Form.Select
            label="Select your favorite programming language"
            placeholder="Select your favorite programming language"
            tip="Select your favorite programming language"
            options={['JavaScript', 'Go', 'PHP', 'C#']}
            optionLabel={opt => opt}
            optionValue={opt => opt}
            input={{
              onChange: this.handleChange.bind(this, 'plang'),
              value: values.plang
            }}
            addOnBefore="Hi Select"
            addOnAfter="Bye Select"
            required
          />

          <Form.File
            size="md"
            label="Select your favorite programming language"
            placeholder="Select your favorite programming language"
            input={{
              onChange: this.handleChange.bind(this, 'avatar'),
              value: values.avatar
            }}
            addOnBefore="Hi Select"
            addOnAfter="Bye Select"
            required
          />

          <Form.Text
            type="textarea"
            label="Description"
            placeholder="Something about your career"
            input={{
              onChange: this.handleChange.bind(this, 'description'),
              value: values.description
            }}
            maxLength={100}
          />

          <Form.Footer>
            <Button mood="primary" size={ui.size} icon="heart">
              Publish
            </Button>

            <Button mood="secondary" size={ui.size}>
              Save Draft
            </Button>
          </Form.Footer>
        </Form>
      </div>
    );
  }
}
