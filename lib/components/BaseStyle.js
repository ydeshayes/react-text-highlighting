var DEFAULT_COLOR  = 'red'
var DEFAULT_BORDER = '1px solid ' + DEFAULT_COLOR;

module.exports = {
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
}
