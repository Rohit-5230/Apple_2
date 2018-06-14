import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            list: JSON.parse(localStorage.getItem('todoList'))
        };
    }
    add() {
        if (localStorage.getItem('todoList') == null) {
            var list = [];
            list.push(this.refs.item.value);
            localStorage.setItem('todoList', JSON.stringify(list));
        }
        else {
            list = JSON.parse(localStorage.getItem('todoList'));
            list.push(this.refs.item.value);
            localStorage.setItem('todoList', JSON.stringify(list));
        }
        this.setState({
            list: JSON.parse(localStorage.getItem('todoList'))
        });
    }

    render() {
        return (

            <div>
                <nav className="navbar navbar-expand-lg navbar-white bg-dark">
                    <a className="navbar-brand" href="Apple2.html">
                        Home
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="https://www.apple.com/mac/">Mac
                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.apple.com/iPad/">iPad</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.apple.com/iPhone/">iPhone</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.apple.com/watch/">Watch</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.apple.com/TV/">TV</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.apple.com/Music/">Music</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://support.apple.com">Support</a>
                            </li>
                        </ul>
                        <form id="search" className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="add to localstorage" ref="item" />
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={this.add.bind(this)} >Add</button>
                        </form>
                    </div>
                </nav>
                <br />
                <br />
                <br />
                <center>
                    <div className="iphonex">
                        <div className="x">iPhone X</div>
                        <div className="y">Say hello to future.</div>
                        <br />
                        <br />
                        <br />
                        <img src={"./og.png"} alt={"boohoo"} id="z" />
                    </div>
                    <br />
                    <br />
                    <hr />
                    <div className="iphone8">
                        <div className="x">iPhone 8</div>
                        <div className="y">A new generation of iPhone.</div>
                        <img src={"./Unknown.png"} alt={"boohoo"} id="o" />
                    </div>
                    <div className="ipad">
                        <div className="x">iPad</div>
                        <div className="y">Like a computer.Unlike any computer.</div>
                        <img src={"./ipad.jpg"} alt={"boohoo"} id="ipd" />
                    </div>
                    <hr />
                    <div className="ios12">
                        <div className="x">iOS 12</div>
                        <div className="y">More power to you.</div>
                        <img src={"./last.jpg"} alt={"boohoo"} id="r" />
                    </div>
                    <div className="watch">
                        <div className="x">watchOS 5</div>
                        <div className="y">Be more active.Better stay connected together.</div>
                        <img src={"./watch.jpg"} alt={"boohoo"} id="iwatch" />
                    </div>
                </center>
            </div>
        );
    }
}

