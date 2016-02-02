const React = require('react');
const BASE_STYLES  = require('./BaseStyle');
const getRangesFromString = require('./Helper').getRangesFromString;

const TextHighlighting = (props) => {
  const chars = props.children.split('');
  const styles = props.styles || BASE_STYLES;
  let ranges = null;

  if (props.highlight) {
    ranges = getRangesFromString(props.highlight, props.children);
  }

  const getStylesForRanges = (ranges, index) => {
    for (let range of ranges) {
      const styles = getStylesForRange(range, index);
      if (styles) return styles;
    }
  };

  const getStylesForRange = (range, index) => {
    const style = styles.range;
    const single = range.start === range.end && range.end === index;

    if (single) return Object.assign(style.start, style.end);
    if (range.start === index) return style.start;
    if (range.end   === index) return style.end;
    if (range.start < index && range.end > index) return style.between;
  };

  const coloredChars = chars.map((char, index) => {
    let style = {};
    let ranges = ranges || props.highlightCharsRanges;
    const highlight = props.highlightChars && props.highlightChars.includes(index);

    if (highlight) style = styles.highlight;
    if (ranges) style = getStylesForRanges(ranges, index);

    return <span key={index} style={style} children={char} />;
  });

  return <span {...props} children={coloredChars} />;
};

TextHighlighting.propTypes = {
  highlight: React.PropTypes.string,
  highlightChars: React.PropTypes.array,
  highlightCharsRanges: React.PropTypes.array,
  styles: React.PropTypes.object,
};

export default TextHighlighting;
