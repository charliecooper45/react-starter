import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import styled from 'styled-components';
import AddArticleForm from '../../components/Articles/AddArticleForm';

const StyledWell = styled(Well)`
  &:hover {
    border: 2px solid red;
  }
`;

class Articles extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    nextId: 3, // eslint-disable-line react/no-unused-state
    articles: [
      { title: 'This is an article', id: 1 },
      { title: 'This is another article', id: 2 }
    ],
    value: '',
    validForm: true
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { value } = this.state;
    if (value.trim() === '') {
      this.setState({ validForm: false });
    } else {
      this.setState(prevState => ({
        articles: [...prevState.articles, { title: prevState.value, id: prevState.nextId }],
        nextId: prevState.nextId + 1,
        value: '',
        validForm: true
      }));
    }
  }

  handleClick(id) {
    const articles = this.state.articles.filter(article => article.id !== id);
    this.setState({ articles });
  }

  render() {
    const { articles } = this.state;

    return (
      <div>
        {articles.map(article => (
          <StyledWell onClick={() => this.handleClick(article.id)} key={article.id}>
            {article.title}
          </StyledWell>))
        }
        <br />
        <AddArticleForm
          validForm={this.state.validForm}
          value={this.state.value}
          submitHandler={this.handleSubmit}
          changeHandler={this.handleChange}
        />
      </div>
    );
  }
}

export default Articles;
