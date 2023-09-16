// Data containing Cascading StyleSheet (CSS)
// Properties, Short Description and example of their Use

const css = [
  {
    id: 1,
    property: "color",
    description: "Sets the text color",
    exampleOfUse: "color: #FF0000;",
  },
  {
    id: 2,
    property: "font-size",
    description: "Sets the font size of text",
    exampleOfUse: "font-size: 16px;",
  },
  {
    id: 3,
    property: "font-family",
    description: "Defines the font used for text",
    exampleOfUse: "font-family: Arial, sans-serif;",
  },
  {
    id: 4,
    property: "background-color",
    description: "Sets the background color of an element",
    exampleOfUse: "background-color: #FFFF00;",
  },
  {
    id: 5,
    property: "margin",
    description: "Specifies the outside margin of an element",
    exampleOfUse: "margin: 10px;",
  },
  {
    id: 6,
    property: "padding",
    description: "Specifies the padding of an element",
    exampleOfUse: "padding: 20px;",
  },
  {
    id: 7,
    property: "border",
    description: "Sets all the border properties in one declaration",
    exampleOfUse: "border: 1px solid #000000;",
  },
  {
    id: 8,
    property: "width",
    description: "Sets the width of an element",
    exampleOfUse: "width: 300px;",
  },
  {
    id: 9,
    property: "height",
    description: "Sets the height of an element",
    exampleOfUse: "height: 200px;",
  },
  {
    id: 10,
    property: "text-align",
    description: "Specifies the horizontal alignment of text",
    exampleOfUse: "text-align: center;",
  },
  {
    id: 11,
    property: "display",
    description: "Specifies how an element is displayed",
    exampleOfUse: "display: block;",
  },
  {
    id: 12,
    property: "position",
    description: "Sets the positioning method of an element",
    exampleOfUse: "position: absolute;",
  },
  {
    id: 13,
    property: "z-index",
    description: "Sets the stack order of an element",
    exampleOfUse: "z-index: 1;",
  },
  {
    id: 14,
    property: "opacity",
    description: "Sets the opacity level for an element",
    exampleOfUse: "opacity: 0.5;",
  },
  {
    id: 15,
    property: "text-decoration",
    description: "Specifies the decoration added to text",
    exampleOfUse: "text-decoration: underline;",
  },
  {
    id: 16,
    property: "box-shadow",
    description: "Adds shadow effects to an element",
    exampleOfUse: "box-shadow: 5px 5px 10px #888888;",
  },
  {
    id: 17,
    property: "border-radius",
    description: "Sets the radius of the element's corners",
    exampleOfUse: "border-radius: 10px;",
  },
  {
    id: 18,
    property: "background-image",
    description: "Sets one or more background images for an element",
    exampleOfUse: "background-image: url('image.jpg');",
  },
  {
    id: 19,
    property: "animation",
    description: "Defines animations applied to an element",
    exampleOfUse: "animation: slide 2s ease-in-out infinite;",
  },
  {
    id: 20,
    property: "transform",
    description: "Applies 2D or 3D transformations to an element",
    exampleOfUse: "transform: rotate(45deg);",
  },
  {
    id: 21,
    property: "box-sizing",
    description:
      "Determines how the element's total width and height are calculated",
    exampleOfUse: "box-sizing: border-box;",
  },
  {
    id: 22,
    property: "overflow",
    description:
      "Specifies what should happen if an element's content overflows",
    exampleOfUse: "overflow: auto;",
  },
  {
    id: 23,
    property: "text-transform",
    description: "Controls the capitalization of text",
    exampleOfUse: "text-transform: uppercase;",
  },
  {
    id: 24,
    property: "cursor",
    description: "Defines the type of cursor to be displayed",
    exampleOfUse: "cursor: pointer;",
  },
  {
    id: 25,
    property: "transition",
    description: "Adds transition effects to an element",
    exampleOfUse: "transition: width 2s ease-in-out;",
  },
  {
    id: 26,
    property: "flex",
    description: "Specifies the flexibility of a flex container",
    exampleOfUse: "flex: 1;",
  },
  {
    id: 27,
    property: "justify-content",
    description: "Defines the horizontal alignment of flex items",
    exampleOfUse: "justify-content: center;",
  },
  {
    id: 28,
    property: "align-items",
    description: "Defines the vertical alignment of flex items",
    exampleOfUse: "align-items: center;",
  },
  {
    id: 29,
    property: "grid-template-columns",
    description: "Specifies the size of grid columns",
    exampleOfUse: "grid-template-columns: 1fr 2fr;",
  },
  {
    id: 30,
    property: "grid-template-rows",
    description: "Specifies the size of grid rows",
    exampleOfUse: "grid-template-rows: 50px auto;",
  },
  {
    id: 31,
    property: "grid-gap",
    description: "Creates space between grid elements",
    exampleOfUse: "grid-gap: 10px;",
  },
  {
    id: 32,
    property: "border-collapse",
    description: "Specifies whether table borders should be collapsed",
    exampleOfUse: "border-collapse: collapse;",
  },
  {
    id: 33,
    property: "list-style-type",
    description: "Sets the type of bullet or numbering for a list",
    exampleOfUse: "list-style-type: square;",
  },
  {
    id: 34,
    property: "opacity",
    description: "Sets the opacity level for an element",
    exampleOfUse: "opacity: 0.7;",
  },
  {
    id: 35,
    property: "letter-spacing",
    description: "Adjusts the space between characters in text",
    exampleOfUse: "letter-spacing: 2px;",
  },
  {
    id: 36,
    property: "outline",
    description: "Sets the outline properties for an element",
    exampleOfUse: "outline: 2px solid #00F;",
  },
  {
    id: 37,
    property: "outline-offset",
    description:
      "Specifies the space between an outline and the edge of an element",
    exampleOfUse: "outline-offset: 5px;",
  },
  {
    id: 38,
    property: "text-shadow",
    description: "Adds shadow to text",
    exampleOfUse: "text-shadow: 2px 2px 4px #000;",
  },
  {
    id: 39,
    property: "box-decoration-break",
    description: "Determines how box-decoration properties are applied",
    exampleOfUse: "box-decoration-break: clone;",
  },
  {
    id: 40,
    property: "object-fit",
    description:
      "Specifies how an element's content should fit within its container",
    exampleOfUse: "object-fit: cover;",
  },
  {
    id: 41,
    property: "object-position",
    description:
      "Sets the alignment of an element's content within its container",
    exampleOfUse: "object-position: center top;",
  },
  {
    id: 42,
    property: "will-change",
    description:
      "Hints at which property the author of the style sheet believes will change",
    exampleOfUse: "will-change: transform;",
  },
  {
    id: 43,
    property: "filter",
    description:
      "Applies graphical effects like blur or color adjustment to an element",
    exampleOfUse: "filter: grayscale(50%);",
  },
  {
    id: 44,
    property: "backface-visibility",
    description:
      "Determines whether or not the back face of an element is visible",
    exampleOfUse: "backface-visibility: hidden;",
  },
  {
    id: 45,
    property: "animation-name",
    description: "Specifies the name of the animation",
    exampleOfUse: "animation-name: slide;",
  },
  {
    id: 46,
    property: "animation-duration",
    description: "Sets the duration of an animation",
    exampleOfUse: "animation-duration: 2s;",
  },
  {
    id: 47,
    property: "animation-timing-function",
    description: "Defines how the animation progresses through keyframes",
    exampleOfUse: "animation-timing-function: ease-in-out;",
  },
  {
    id: 48,
    property: "animation-delay",
    description: "Sets a delay before the animation starts",
    exampleOfUse: "animation-delay: 1s;",
  },
  {
    id: 49,
    property: "animation-iteration-count",
    description: "Specifies the number of times an animation should run",
    exampleOfUse: "animation-iteration-count: infinite;",
  },
  {
    id: 50,
    property: "animation-direction",
    description:
      "Defines the direction of the animation (normal, reverse, alternate, etc.)",
    exampleOfUse: "animation-direction: alternate;",
  },
  {
    id: 51,
    property: "animation-fill-mode",
    description:
      "Determines how the animation applies styles before and after it runs",
    exampleOfUse: "animation-fill-mode: forwards;",
  },
  {
    id: 52,
    property: "animation-play-state",
    description: "Specifies whether the animation is running or paused",
    exampleOfUse: "animation-play-state: running;",
  },
  {
    id: 53,
    property: "font-weight",
    description: "Sets the weight of a font (e.g., bold)",
    exampleOfUse: "font-weight: bold;",
  },
  {
    id: 54,
    property: "line-height",
    description: "Specifies the height of a line of text",
    exampleOfUse: "line-height: 1.5;",
  },
  {
    id: 55,
    property: "letter-spacing",
    description: "Adjusts the space between characters in text",
    exampleOfUse: "letter-spacing: 1px;",
  },
  {
    id: 56,
    property: "text-transform",
    description: "Controls the capitalization of text",
    exampleOfUse: "text-transform: uppercase;",
  },
  {
    id: 57,
    property: "text-overflow",
    description:
      "Specifies what should happen when text overflows its containing element",
    exampleOfUse: "text-overflow: ellipsis;",
  },
  {
    id: 59,
    property: "overflow-x",
    description: "Specifies how to handle overflow in the horizontal direction",
    exampleOfUse: "overflow-x: auto;",
  },
  {
    id: 60,
    property: "overflow-y",
    description: "Specifies how to handle overflow in the vertical direction",
    exampleOfUse: "overflow-y: scroll;",
  },
  {
    id: 61,
    property: "text-align-last",
    description:
      "Determines the alignment of the last line of text within an element",
    exampleOfUse: "text-align-last: right;",
  },
  {
    id: 62,
    property: "text-justify",
    description:
      "Controls the justification of text when text-align is 'justify'",
    exampleOfUse: "text-justify: inter-word;",
  },
  {
    id: 63,
    property: "box-orient",
    description:
      "Determines the orientation of a flexible container's children",
    exampleOfUse: "box-orient: vertical;",
  },
  {
    id: 64,
    property: "box-direction",
    description:
      "Specifies the order in which children of a flexible container are laid out",
    exampleOfUse: "box-direction: reverse;",
  },
  {
    id: 65,
    property: "word-wrap",
    description:
      "Allows long words to be broken and wrapped onto the next line",
    exampleOfUse: "word-wrap: break-word;",
  },
  {
    id: 66,
    property: "hyphens",
    description: "Controls when and where words are hyphenated",
    exampleOfUse: "hyphens: auto;",
  },
  {
    id: 67,
    property: "tab-size",
    description:
      "Specifies the number of spaces a tab character should represent",
    exampleOfUse: "tab-size: 4;",
  },
  {
    id: 68,
    property: "counter-reset",
    description: "Creates or resets one or more counters",
    exampleOfUse: "counter-reset: section-counter;",
  },
  {
    id: 69,
    property: "counter-increment",
    description: "Increments one or more counters",
    exampleOfUse: "counter-increment: section-counter;",
  },
  {
    id: 70,
    property: "list-style",
    description: "Sets all the list properties in one declaration",
    exampleOfUse: "list-style: square inside url('image.png');",
  },
  {
    id: 71,
    property: "word-spacing",
    description: "Adjusts the space between words in text",
    exampleOfUse: "word-spacing: 2px;",
  },
  {
    id: 72,
    property: "line-break",
    description:
      "Specifies how inline-level elements should wrap and break lines",
    exampleOfUse: "line-break: strict;",
  },
  {
    id: 73,
    property: "transform-origin",
    description: "Sets the origin for transformations applied to an element",
    exampleOfUse: "transform-origin: top left;",
  },
  {
    id: 74,
    property: "text-orientation",
    description: "Controls the orientation of text characters",
    exampleOfUse: "text-orientation: mixed;",
  },
  {
    id: 75,
    property: "writing-mode",
    description: "Specifies the inline base direction and block flow direction",
    exampleOfUse: "writing-mode: vertical-lr;",
  },
  {
    id: 76,
    property: "border-image",
    description: "Sets all the border-image properties in one declaration",
    exampleOfUse: "border-image: url('border.png') 30 30 round;",
  },
  {
    id: 77,
    property: "content",
    description:
      "Inserts generated content before or after an element's content",
    exampleOfUse: "content: 'Chapter ' counter(section-counter);",
  },
  {
    id: 78,
    property: "counter-increment",
    description: "Increments one or more counters",
    exampleOfUse: "counter-increment: chapter-counter;",
  },
  {
    id: 79,
    property: "scroll-behavior",
    description: "Determines how scrolling behavior works for the element",
    exampleOfUse: "scroll-behavior: smooth;",
  },
  {
    id: 80,
    property: "scroll-snap-type",
    description:
      "Determines how an element's snap points behave when scrolling",
    exampleOfUse: "scroll-snap-type: y mandatory;",
  },
  {
    id: 81,
    property: "scroll-snap-align",
    description:
      "Specifies how an element's snap point aligns with the viewport",
    exampleOfUse: "scroll-snap-align: start;",
  },
  {
    id: 82,
    property: "scroll-snap-stop",
    description:
      "Indicates that an element is a snap point when scrolling stops",
    exampleOfUse: "scroll-snap-stop: always;",
  },
  {
    id: 83,
    property: "scroll-margin",
    description: "Sets the margins for scroll snap containers",
    exampleOfUse: "scroll-margin: 10px;",
  },
  {
    id: 84,
    property: "scroll-padding",
    description: "Defines the padding for scroll snap containers",
    exampleOfUse: "scroll-padding: 20px;",
  },
  {
    id: 85,
    property: "scroll-snap-margin",
    description: "Sets the margins for snap points within a scroll container",
    exampleOfUse: "scroll-snap-margin: 5px;",
  },
  {
    id: 86,
    property: "scroll-snap-padding",
    description:
      "Defines the padding for snap points within a scroll container",
    exampleOfUse: "scroll-snap-padding: 15px;",
  },
  {
    id: 87,
    property: "scroll-snap-coordinate",
    description: "Specifies the snap points for scrolling",
    exampleOfUse: "scroll-snap-coordinate: 0% 50%;",
  },
  {
    id: 88,
    property: "break-before",
    description:
      "Determines how a page, column, or region breaks before an element",
    exampleOfUse: "break-before: page;",
  },
  {
    id: 89,
    property: "break-after",
    description:
      "Determines how a page, column, or region breaks after an element",
    exampleOfUse: "break-after: avoid;",
  },
  {
    id: 90,
    property: "break-inside",
    description:
      "Determines how a page, column, or region breaks inside an element",
    exampleOfUse: "break-inside: avoid;",
  },
  {
    id: 90,
    property: "widows",
    description:
      "Sets the minimum number of lines for an element to break before a container",
    exampleOfUse: "widows: 2;",
  },
  {
    id: 91,
    property: "max-width",
    description: "Specifies the maximum width of an element",
    exampleOfUse: "max-width: 800px;",
  },
  {
    id: 92,
    property: "min-width",
    description: "Specifies the minimum width of an element",
    exampleOfUse: "min-width: 300px;",
  },
  {
    id: 93,
    property: "max-height",
    description: "Specifies the maximum height of an element",
    exampleOfUse: "max-height: 400px;",
  },
  {
    id: 94,
    property: "min-height",
    description: "Specifies the minimum height of an element",
    exampleOfUse: "min-height: 200px;",
  },
  {
    id: 95,
    property: "cursor",
    description: "Defines the type of cursor to be displayed",
    exampleOfUse: "cursor: pointer;",
  },
  {
    id: 96,
    property: "pointer-events",
    description: "Controls how an element responds to pointer events",
    exampleOfUse: "pointer-events: none;",
  },
  {
    id: 97,
    property: "user-select",
    description: "Determines whether or not the user can select text",
    exampleOfUse: "user-select: none;",
  },
  {
    id: 98,
    property: "resize",
    description: "Specifies whether an element can be resized by the user",
    exampleOfUse: "resize: both;",
  },
  {
    id: 99,
    property: "animation-fill-mode",
    description:
      "Determines how the animation applies styles before and after it runs",
    exampleOfUse: "animation-fill-mode: forwards;",
  },
  {
    id: 100,
    property: "box-decoration-break",
    description: "Determines how box-decoration properties are applied",
    exampleOfUse: "box-decoration-break: clone;",
  },
];

module.exports = css;
