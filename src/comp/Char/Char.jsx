import React, { Component } from 'react';
import './Char.css';
import { code } from '../Code/Coder';

export class Char extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
    this.char = props.ch;
    this.i = props.i;
    this.shouldDecode = props.shouldDecode;
    this.replacer = code[this.char]
      .replace(/0/g, this.props.zeroReplacer)
      .replace(/1/g, this.props.oneReplacer);
    this.state = {
      codedChar: this.replacer,
      style: {
        width: 'auto',
        height: 'auto',
      },
      isSwitched: false,
    };
  }

  onMouseEnter = () => {
    this.shouldDecode && this.setState(
      state => (
        {
          ...state,
          codedChar: this.char,
          isSwitched: true,
        }
      )
    )
  }

  onMouseLeave = () => {
    this.props.shouldDecode && this.setState(
      state => (
        {
          ...state,
          codedChar: this.replacer,
          isSwitched: false,
        }
      )
    )
  }

  componentDidMount() {
    this.setState(
      state => (
        {
          ...state,
          style: {
            width: this.node.current.getBoundingClientRect().width,
            height: this.node.current.getBoundingClientRect().height,
          },
        }
      )
    )
  }

  render() {
    return (
      <span
      onMouseEnter={this.onMouseEnter}
      onMouseLeave={this.onMouseLeave}
      >
        <span
          className={`char ${this.state.isSwitched ? 'is-switched' : ''}`}
          style={{...this.state.style}}
          key={this.i}
          ref={this.node}
          value={this.char}
          >
            <span
              className={`${this.state.isSwitched ? 'char-reverse' : ''}`}
              >
              {
                this.state.codedChar
              }
            </span>
          </span>
        </span>
      )
    }
  };
