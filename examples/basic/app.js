import React from 'react';
import ReactDOM from 'react-dom';
import TextHighlighting from '../../lib/index';

const STYLES = {
  highlight: {backgroundColor: 'yellow'},
  range: {
    start:   {backgroundColor: 'yellow'},
    between: {backgroundColor: 'yellow'},
    end:     {backgroundColor: 'yellow'}
  }
};

let App = React.createClass({
  getInitialState() {
    return {
      ranges: [{start: 0, end: 20}, {start: 40, end: 60}]
    };
  },

  componentDidMount() {
    setInterval(() => {
      this.setState({
        ranges: [{
          start: this.state.ranges[0].start + 2,
          end: this.state.ranges[0].end + 2
        }, {
          start: this.state.ranges[1].start + 1,
          end: this.state.ranges[1].end + 1
        }]
      })
    }, 50);
  },

  render() {
    return (
      <div className="example">
        <h1>react-text-highlighting</h1>
        <h4>
          <pre>
            {'<'}TextHighlighting highlightCharsRanges={'{'}{JSON.stringify(this.state.ranges)}{'} />'}
          </pre>
        </h4>
        <TextHighlighting highlightCharsRanges={this.state.ranges}>
          It was a bright cold day in April, and the clocks
          were striking thirteen. Winston Smith, his chin nuzzled
          into his breast in an effort to escape the vile wind,
          slipped quickly through the glass doors of Victory Mansions,
          though not quickly enough to prevent a swirl of gritty dust
          from entering along with him. The hallway smelt of boiled
          cabbage and old rag mats. At one end of it a colored poster,
          too large for indoor display, had been tacked to the wall. It
          depicted simply an enormous face, more than a meter
          wide: the face of a man of about forty-five, with a
          heavy black mustache and ruggedly handsome features.
          Winston made for the stairs.
        </TextHighlighting>

        <h4>
          <pre>
            {'<'}TextHighlighting highlightChars={'[0, 2, 4, 8]'}{` />`}
          </pre>
        </h4>
        <TextHighlighting highlightChars={[0, 2, 4, 8]}>
          It was a bright cold day in April.
        </TextHighlighting>

        <h4>
          <pre>
            {'<'}TextHighlighting {`styles={STYLES}`} {`highlight={'world'} />`}
          </pre>
        </h4>
        <TextHighlighting styles={STYLES} highlight={`world`}>
          Hello world, Bonjour world, ola world.
        </TextHighlighting>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('container'));
