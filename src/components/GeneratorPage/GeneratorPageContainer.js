import React from 'react';
import { PasswordFactory, STRATEGYS_SYMBOLS } from '../../core';
import { GeneratorPage } from './GeneratorPage';

const DEFAULT_STATE = {
  length: 5,
  strategies: [
    STRATEGYS_SYMBOLS.DIGETS,
    STRATEGYS_SYMBOLS.NUMBERS,
    STRATEGYS_SYMBOLS.SYMBOLS,
  ],
};

export class GeneratorPageContainer extends React.Component {
  state = {
    ...DEFAULT_STATE,
    suggestedPassword: '',
  };

  componentDidMount() {
    const { length, strategies } = this.state;
    this.generator = PasswordFactory.create(length, strategies);
  }

  generate = () => {
    const suggestedPassword = this.generator.generate();
    this.setState({ suggestedPassword });
  };

  render() {
    const { suggestedPassword } = this.state;
    return (
      <GeneratorPage
        suggestedPassword={suggestedPassword}
        onGenerate={this.generate}
      />
    );
  }
}
