import React, { Component } from "react";

class Story extends Component {
state ={
    selected: [],
    text : null,
    sentences: []
    
}
//wherever you create sentences, you need to build them in memory, by adding to a sentences object that matches the one in state, like this {name = 0, highlighted : true, votes: 0}     and after you build the whole thing, then setstate  this.setState(sentences : )

//Story is going to need a function (method) to set its state. You will pass that method down to the Sentence component. Each sentence component will also need it's ID passed down. You will render all sentences using map like so: 

//create a method called changeSentence which accepts a sentence id and then updates that sentence

// this.state.map(sentence => {
   // <Sentence key={sentence.id} id={sentence.id} changeSentence={this.changeSentence}

    
    //Sentence component will need the onmouseover handler function to do something like     onmouseover={() => props.changeSentence(props.id, "highlight")}

//sentences : [{
//         id : 0, 
//         highlighted : false,
//         votes: 0
//     }
// }

//do an api call in componentDidMount
//this.setState({
//     sentences : sentences
// })



mouse = e => {
    console.log("woeking");
    console.log(e.target.id);
    this.setState({text:e.target.id})
    console.log(this.state.text)
    if (!this.state.selected.includes(this.state.text)) {
        let myRef = React.createRef();
        myRef.style.color = "#323"
    //   let chosen = this.refs[this.state.text];
    //   chosen.color = "#434"
      
    //   .style.backgroundColor = "Yellow"
    }
}
 


// window.onmouseover = function(e) {
//         text = e.target.id
//         console.log(text)
//         if (!selected.includes(text)) {
//           document.getElementById(text).style.backgroundColor = "Yellow"
//         }
// };

    render () {
        return (
        
            <div id= "chicken" ref={this.myRef} className ="test2" onMouseEnter={this.mouse.bind(this)}>
                <div className="dumbo"> <span id="sentence0">Lorem ipsum dolor sit amet</span> <span id="sentence1">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span> <span id="sentence2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span> <span id="sentence3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</span> <span id="sentence4">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>
            </div>

        )
    }
};

export default Story;



