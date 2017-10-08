import React from 'react';
import { Button, Modal, Card } from '../../../src';

export default class ModalExample extends React.Component {
  state = {
    show: false
  };

  handleModal(show) {
    this.setState({ show });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleModal.bind(this, false)}>
          <Card>
            <Card.Content>
              Information from website browsers

              If you're just browsing the website, we collect the same basic information that most websites collect. We use
              common internet technologies, such as cookies and web server logs. This is stuff we collect from everybody,
              whether they have an account or not.

              The information we collect about all visitors to our website includes the visitor’s browser type, language
              preference, referring site, additional websites requested, and the date and time of each visitor request. We
              also collect potentially personally-identifying information like Internet Protocol (IP) addresses.

              Why do we collect this?

              We collect this information to better understand how our website visitors use GitHub, and to monitor and
              protect the security of the website.

              Information from users with accounts

              If you create an account, we require some basic information at the time of account creation. You will create
              your own user name and password, and we will ask you for a valid email account. You also have the option to
              give us more information if you want to, and this may include "User Personal Information."

              "User Personal Information" is any information about one of our users which could, alone or together with
              other information, personally identify him or her. Information such as a user name and password, an email
              address, a real name, and a photograph are examples of “User Personal Information.”

              User Personal Information does not include aggregated, non-personally identifying information. We may use
              aggregated, non-personally identifying information to operate, improve, and optimize our website and service.

              Why do we collect this?

              We need your User Personal Information to create your account, and to provide the services you request.
              We use your User Personal Information, specifically your user name, to identify you on GitHub.
              We use it to fill out your profile and share that profile with other users if you ask us to.
              We will use your email address to communicate with you, if you've said that's okay, and only for the reasons
              you’ve said that’s okay. Please see our section on email communication for more information.
              We limit our use of your User Personal Information to the purposes listed in this Privacy Statement. If we
              need to use your User Personal Information for other purposes, we will ask your permission first. You can
              always see what information we have, how we're using it, and what permissions you have given us in your user
              profile.
              What information GitHub does not collect

              We do not intentionally collect sensitive personal information, such as social security numbers, genetic data,
              health information, or religious information. Although GitHub does not request or intentionally collect any
              sensitive personal information, we realize that you might store this kind of information in your account, such
              as in a repository. If you store any sensitive personal information on our servers, you are consenting to our
              storage of that information on our servers, which are in the United States.

              We do not intentionally collect information that is stored in your repositories or other free-form content
              inputs. Information in your repositories belongs to you, and you are responsible for it, as well as for making
              sure that your content complies with our Terms of Service. GitHub employees do not access private repositories
              unless required to for security or maintenance, or for support reasons, with the consent of the repository
              owner.

              If your repository is public, anyone (including us) may view its contents. If you have included private or
              sensitive information in your public repository, such as email addresses, that information may be indexed by
              search engines or used by third parties. In addition, while we do not generally search for content in your
              repositories, we may scan our servers for certain tokens or security signatures.

              If you're a child under the age of 13, you may not have an account on GitHub. GitHub does not knowingly
              collect information from or direct any of our content specifically to children under 13. If we learn or have
              reason to suspect that you are a user who is under the age of 13, we will unfortunately have to close your
              account. We don't want to discourage you from learning to code, but those are the rules. Please see our Terms
              of Service for information about account termination.

              How we share the information we collect

              We do not share, sell, rent, or trade User Personal Information with third parties for their commercial
              purposes.

              We do not disclose User Personal Information outside GitHub, except in the situations listed in this section
              or in the section below on Compelled Disclosure.

              We do share certain aggregated, non-personally identifying information with others about how our users,
              collectively, use GitHub, or how our users respond to our other offerings, such as our conferences or events.
              For example, we may compile statistics on the usage of open source licenses across GitHub. However, we do not
              sell this information to advertisers or marketers.

              We do not host advertising on GitHub. We may occasionally embed content from third party sites, such as
              YouTube, and that content may include ads. While we try to minimize the amount of ads our embedded content
              contains, we can't always control what third parties show.

              We may share User Personal Information with your permission, so we can perform services you have requested.

              We may share User Personal Information with a limited number of third-party vendors who process it on our
              behalf to provide or improve our service, and who have agreed to privacy restrictions similar to our own
              Privacy Statement. Our vendors perform services such as payment processing, customer support ticketing,
              network data transmission, and other similar services. When we transfer your data to our vendors under Privacy
              Shield, we remain responsible for it.

              We may share User Personal Information if we are involved in a merger, sale, or acquisition. If any such
              change of ownership happens, we will ensure that it is under terms that preserve the confidentiality of User
              Personal Information, and we will notify you on our website or by email before any transfer of your User
              Personal Information. The organization receiving any User Personal Information will have to honor any promises
              we have made in our Privacy Statement or in our Terms of Service.

              Public Information on GitHub

              Much of GitHub is public-facing. If your content is public-facing, third parties may access and use it in
              compliance with our Terms of Service. We do not sell that content; it is yours. However, we do allow third
              parties, such as research organizations or archives, to compile public-facing GitHub information.

              Your Personal Information, associated with your content, may be gathered by third parties in these
              compilations of GitHub data. If you do not want your Personal Information to appear in third parties’
              compilations of GitHub data, please do not make your Personal Information publicly available and be sure to
              configure your email address to be private in your user profile.

              If you would like to compile GitHub data, you may only use any public-facing Personal Information you gather
              for the purpose for which our user has authorized it. For example, where a GitHub user has made an email
              address public-facing for the purpose of identification and attribution, do not use that email address for
              commercial advertising. We expect you to reasonably secure any Personal Information you have gathered from
              GitHub, and to respond promptly to complaints, removal requests, and "do not contact" requests from GitHub or
              GitHub users.

              Similarly, projects on GitHub may include publicly available Personal Information collected as part of the
              collaborative process. In the event that a GitHub project contains publicly available Personal Information
              that does not belong to GitHub users, we will only use that Personal Information for the limited purpose for
              which it was collected, and we will secure that Personal Information as we would secure any User Personal
              Information. If you have a complaint about any Personal Information on GitHub, please see our section on
              resolving complaints.

              Our use of cookies and tracking

              Cookies

              GitHub uses cookies to make interactions with our service easy and meaningful. We use cookies (and similar
              technologies, like HTML5 localStorage) to keep you logged in, remember your preferences, and provide
              information for future development of GitHub.

              A cookie is a small piece of text that our web server stores on your computer or mobile device, which your
              browser sends to us when you return to our site. Cookies do not necessarily identify you if you are merely
              visiting GitHub; however, a cookie may store a unique identifier for each logged in user. The cookies GitHub
              sets are essential for the operation of the website, or are used for performance or functionality. By using
              our website, you agree that we can place these types of cookies on your computer or device. If you disable
              your browser or device’s ability to accept cookies, you will not be able to log in or use GitHub’s services.
            </Card.Content>
          </Card>
        </Modal>

        <Button onClick={this.handleModal.bind(this, true)}>
          Open a Modal
        </Button>
      </div>
    );
  }
}