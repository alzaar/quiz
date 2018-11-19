import React from 'react';
import Question from './Question'

class QuestionList extends React.Component {
  render() {
    // console.log(this.props.current)
    return (
      <div className='questions'>
      {this.props.questions.map((question, index) => {
        if (question.id === this.props.current) {
        return (
            <Question {...question} question={question} key={index}/>
        )
      }
      return '';
      })}
      </div>
    );
  }
}

export default QuestionList;
