import Layout from "layout/main"
import React, { Component } from "react"

//interface StProps {

export default class Signup extends Component<{}, {name: string}> {
  constructor(props) {
    super(props);
    this.state = {name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.name + 'さん！！');
    event.preventDefault();
  }

  render() {
    return (
      <Layout>
        <div style={{
          height: '10vh',
        }}>

        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            名前：
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="送信" />
        </form>
      </Layout>
    )
  }
}
