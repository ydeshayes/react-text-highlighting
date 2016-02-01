# react-text-highlighting

react component to highlight text

## Quick Start

```bash
npm install react-text-highlighting --save
```

```jsx
<TextHighlighting highlightCharsRanges={[{start: 0, end: 5}]}>
  hello world
<TextHighlighting>

<TextHighlighting highlightChars={[0, 2, 4]}>
  hello world
<TextHighlighting>

<TextHighlighting highlight='world'>
  hello world
<TextHighlighting>
```

You can customize the styling by passing a style object

```jsx
const STYLES = {
  highlight: {backgroundColor: 'yellow'},
  range: {
    start:   {backgroundColor: 'yellow'},
    between: {backgroundColor: 'yellow'},
    end:     {backgroundColor: 'yellow'}
  }
};

<TextHighlighting styles={STYLES} highlight='world'>
  hello world
<TextHighlighting>
```

![](https://cloud.githubusercontent.com/assets/2709086/12709182/e68a9f46-c85d-11e5-9b42-d1f554119ed0.png)
