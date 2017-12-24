import React from 'react';
import { Button, ButtonGroup, Card, Modal } from '../../../src';

class ModalButton extends React.Component {
  state = {
    seconds: 0,
    show: false
  };

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  handleModal(show) {
    this.setState({ show });
  }

  render() {
    return [
      <Button key="button" onClick={this.handleModal.bind(this, true)}>
        {this.props.label}
      </Button>,
      <Modal key="modal" show={this.state.show} onHide={this.handleModal.bind(this, false)}>
        <Card>
          <Card.Content>
            Seconds passed: {this.state.seconds}
            <hr />
            {this.props.children}
          </Card.Content>
        </Card>
      </Modal>
    ];
  }
}

export default () => (
  <ButtonGroup>
    <ModalButton label="Modal with short content">
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
    </ModalButton>

    <ModalButton label="Modal with short content">
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
      <br />
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
      <br />
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
      <br />
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
      <br />
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
      <br />
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
      <br />
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
      <br />
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
      <br />
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
      <br />
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
      <br />
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
      <br />
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
      <br />
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
      <br />
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
      <br />
      If you're just browsing the website, we collect the same basic information that most websites collect. We use
      common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
      whether they have an account or not.
    </ModalButton>
  </ButtonGroup>
);
