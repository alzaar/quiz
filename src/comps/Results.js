import React from 'react';

class Results  extends React.Component {
  render() {
    const percent = (this.props.score /  this.props.questions.length) * 100
    const message = 'Congratulations you have finished the test!'
    return (
      <div className='well'>
        <h1>
          {percent}% - {message}
        </h1>

        <h4>{this.props.score} out of {this.props.questions.length}</h4>

        <a href='localhost:3000' className='btn btn-success' >Take Again</a>
      </div>
    );
  }
}

export default Results ;
