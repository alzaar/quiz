import React from 'react';


class Question extends React.Component {

  onChange = () => {

  }
  render() {
    console.log(this.props)
    return (
      <div className='well'>
        <h3>Q. {this.props.question.text}</h3>
        <hr />
        <ul className="list-group">
          {
            this.props.question.choices.map(choice => {
              return (
                <li key={choice.id} className='list-group-item'>
                  {choice.id} <input type='radio' onChange={this.onChange}
                  name={this.props.question.id} value={choice.id} /> {choice.text}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Question;
