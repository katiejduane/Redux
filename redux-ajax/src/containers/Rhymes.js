import React, { Component } from 'react';
import { connect } from 'react-redux';

class Rhymes extends Component {
    constructor() {
        super();
        // this.state = {
        //     wordList: []
        // }
    }
    render() {
        // let wordsToPush = 
        // console.log(wordsToPush)

        if (this.props.wordData !== null){
            var words = this.props.wordData.map((word, i) => {
                console.log(words)
                return (
                    <div key={i}>
                        {word.word}
                </div>
                )
            })
        }
        

        return (
            <div className="word-box">
                <h1>Rhymes!</h1>
                {words}
            </div>
        )
    }
}

function mapStateToProps(state) {
    // always returns an object
    return {
        wordData: state.rhymes
    }

}

export default connect(mapStateToProps)(Rhymes);