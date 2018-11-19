import React, { Component } from 'react';
import './App.css';
import QuestionList from './comps/QuestionList'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What city are you living in?',
          choices: [
            {
              id: 'a',
              text: 'Montreal'
            },
            {
              id: 'b',
              text: 'New York City'
            },
            {
              id: 'c',
              text: 'Toronto'
            }
          ],
          correct: 'a'
        },
        {
          id: 2,
          text: 'What is your name?',
          choices: [
            {
              id: 'a',
              text: 'Aladdin'
            },
            {
              id: 'b',
              text: 'Hercules'
            },
            {
              id: 'c',
              text: 'Simba'
            }
          ],
          correct: 'a'
        },{
          id: 3,
          text: 'What is the biggest forest in the world?',
          choices: [
            {
              id: 'a',
              text: 'Amazon'
            },
            {
              id: 'b',
              text: 'Congo Basin'
            },
            {
              id: 'c',
              text: 'Daintree Forest'
            }
          ],
          correct: 'b'
        },{
          id: 4,
          text: 'What is the biggest archeological site in the world?',
          choices: [
            {
              id: 'a',
              text: 'Pyramids of Giza'
            },
            {
              id: 'b',
              text: 'Tomb of Qin Shi Huangdi'
            },
            {
              id: 'c',
              text: 'Petra'
            }
          ],
          correct: 'a'
        }
      ],
      score: 0,
      current: 1
    }
  }
  render() {
    return (
      <React.Fragment>
        <QuestionList questions={this.state.questions} {...this.state}/>
      </React.Fragment>
    );
  }
}

export default App;
