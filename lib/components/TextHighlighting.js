import React from 'react';

const DEFAULT_COLOR  = 'red'
const DEFAULT_BORDER = `1px solid ${DEFAULT_COLOR}`;

const BASE_STYLES = {
  range: {
    start: {
      color:        DEFAULT_COLOR,
      borderBottom: DEFAULT_BORDER,
      borderLeft:   DEFAULT_BORDER,
      borderTop:    DEFAULT_BORDER
    },
    between: {
      color:        DEFAULT_COLOR,
      borderBottom: DEFAULT_BORDER,
      borderTop:    DEFAULT_BORDER
    },
    end: {
      color:        DEFAULT_COLOR,
      borderBottom: DEFAULT_BORDER,
      borderRight:  DEFAULT_BORDER,
      borderTop:    DEFAULT_BORDER
    }
  },
  highlight: {
    color:        DEFAULT_COLOR,
    borderBottom: DEFAULT_BORDER
  }
};

export default React.createClass({
  propTypes: {
    highlightChars: React.PropTypes.array,
    highlightCharsRanges: React.PropTypes.array,
    highlight: React.PropTypes.string,
    styles: React.PropTypes.object,
  },

  getInitialState() {
    let highlightRanges =
      this.props.highlight ?
      this.getRangesFromString(this.props.highlight) : null;

    return {
      chars: this.props.children.split(''),
      highlightRanges
    };
  },

  getRangesFromString(string) {
    const regex = new RegExp(string, 'gi');

    let result;
    let indices = [];

    while ((result = regex.exec(this.props.children))) {
      indices.push(result.index);
    }

    return indices.map(indice => {
      return {start: indice, end: indice + string.length - 1}
    });
  },

  getStyles() {
    return this.props.styles || BASE_STYLES;
  },

  getStylesForRanges(ranges, index) {
    for (let range of ranges) {
      const styles = this.getStylesForRange(range, index);
      if (styles) return styles;
    }
  },

  getStylesForRange(range, index) {
    const styles = this.getStyles();

    if (range.start === range.end && range.end === index) {
      return Object.assign(styles.range.start, styles.range.end);
    }

    if (range.start === index) {
      return styles.range.start;
    }

    if (range.end === index) {
      return styles.range.end;
    }

    if (range.start < index && range.end > index) {
      return styles.range.between;
    }
  },

  render() {
    const coloredChars = this.state.chars.map((char, index) => {
      const styles = this.getStyles();
      let style = {};

      if (this.props.highlightChars && this.props.highlightChars.includes(index)) {
        style = styles.highlight;
      }

      if (this.state.highlightRanges) {
        style = this.getStylesForRanges(this.state.highlightRanges, index);
      }

      if (this.props.highlightCharsRanges) {
        style = this.getStylesForRanges(this.props.highlightCharsRanges, index);
      }

      return (
        <span key={index} style={style}>
          {char}
        </span>
      );
    });

    return (
      <span {...this.props}>
        {coloredChars}
      </span>
    );
  }
});
