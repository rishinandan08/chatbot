import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';

class restart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      result: '',
      trigger: false,
    };
    this.triggetNext = this.triggetNext.bind(this);
  }
  componentWillMount() {
    const self = this;
    const queryUrl = 1;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', readyStateChange);
    function readyStateChange() {
          self.setState({ loading: false, result: 'click here to restart.' });
    }
    xhr.open('GET', queryUrl);
    xhr.send();
  }
  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }
  render() {
    const { trigger, loading, result } = this.state;
    return (
      <div className="dbpedia">
        { loading ? <Loading /> : result }
        {
          !loading &&
          <div style={{textAlign: 'center',marginTop: 20,}}>
            {
              !trigger &&
              <button class="w3-blue w3-button" onClick={() => this.triggetNext()}>Start Again</button>
            }
          </div>
        }
      </div>
    );
  }
}
restart.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};
restart.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

export default restart;
