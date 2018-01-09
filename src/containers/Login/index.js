import React from 'react';
import { Form } from 'antd';
import NormalLoginForm from '../../components/LoginForm';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

    return (
      <div>
        <WrappedNormalLoginForm />
      </div>
    );
  }
}

export default MainContainer;
