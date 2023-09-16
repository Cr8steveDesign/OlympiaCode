// HTML, Attributes and Short Description of their uses
// Helpful for remembering

const html = [
  {
    id: 1,
    name: "html",
    description: "The root element that wraps all content on a webpage.",
  },
  {
    id: 2,
    name: "head",
    description:
      "Contains meta-information about the document, such as title and links to stylesheets.",
  },
  {
    id: 3,
    name: "title",
    description:
      "Sets the title of the document that appears in the browser's title bar or tab.",
  },
  {
    id: 4,
    name: "meta",
    description:
      "Provides metadata about the document, such as character encoding and viewport settings.",
  },
  {
    id: 5,
    name: "link",
    description:
      "Defines the relationship between the current document and an external resource, such as a stylesheet.",
  },
  {
    id: 6,
    name: "script",
    description: "Embeds or references external JavaScript code.",
  },
  {
    id: 7,
    name: "body",
    description:
      "Contains the main content of the webpage, including text, images, and other elements.",
  },
  {
    id: 8,
    name: "h1",
    description: "Defines a top-level heading with the highest importance.",
  },
  {
    id: 9,
    name: "p",
    description: "Represents a paragraph of text.",
  },
  {
    id: 10,
    name: "a",
    description: "Creates a hyperlink to another web page or resource.",
  },
  {
    id: 11,
    name: "img",
    description: "Embeds an image in the document.",
  },
  {
    id: 12,
    name: "ul",
    description: "Defines an unordered (bulleted) list.",
  },
  {
    id: 13,
    name: "ol",
    description: "Defines an ordered (numbered) list.",
  },
  {
    id: 14,
    name: "li",
    description: "Represents a list item within a list.",
  },
  {
    id: 15,
    name: "div",
    description:
      "A container element used for layout and grouping other elements.",
  },
  {
    id: 16,
    name: "span",
    description: "A generic inline container used for styling or scripting.",
  },
  {
    id: 17,
    name: "form",
    description:
      "Defines a form for user input, such as text fields and buttons.",
  },
  {
    id: 18,
    name: "input",
    description:
      "Creates an input field, such as a text box or radio button, within a form.",
  },
  {
    id: 19,
    name: "button",
    description: "Represents a clickable button.",
  },
  {
    id: 20,
    name: "textarea",
    description: "Defines a multi-line text input field.",
  },
  {
    id: 21,
    name: "label",
    description: "Provides a label for an input element.",
  },
  {
    id: 22,
    name: "select",
    description: "Creates a dropdown list of options within a form.",
  },
  {
    id: 23,
    name: "option",
    description: "Represents an option in a select element's dropdown list.",
  },
  {
    id: 24,
    name: "table",
    description: "Defines a table for organizing data.",
  },
  {
    id: 25,
    name: "tr",
    description: "Represents a row in a table.",
  },
  {
    id: 26,
    name: "td",
    description: "Represents a cell within a table row.",
  },
  {
    id: 27,
    name: "th",
    description: "Represents a table header cell.",
  },
  {
    id: 28,
    name: "thead",
    description: "Groups header content in a table.",
  },
  {
    id: 29,
    name: "tbody",
    description: "Groups body content in a table.",
  },
  {
    id: 30,
    name: "tfoot",
    description: "Groups footer content in a table.",
  },
  {
    id: 31,
    name: "blockquote",
    description: "Indicates a block of quoted text from another source.",
  },
  {
    id: 32,
    name: "cite",
    description: "Defines the title of a work or a reference to a source.",
  },
  {
    id: 33,
    name: "em",
    description: "Emphasizes text, typically displayed in italics.",
  },
  {
    id: 34,
    name: "strong",
    description: "Indicates strong importance, typically displayed in bold.",
  },
  {
    id: 35,
    name: "abbr",
    description: "Defines an abbreviation or acronym.",
  },
  {
    id: 36,
    name: "hr",
    description: "Creates a horizontal rule to separate content.",
  },
  {
    id: 37,
    name: "br",
    description: "Inserts a line break within text.",
  },
  {
    id: 38,
    name: "iframe",
    description: "Embeds an inline frame for displaying external content.",
  },
  {
    id: 39,
    name: "video",
    description: "Embeds video content with playback controls.",
  },
  {
    id: 40,
    name: "audio",
    description: "Embeds audio content with playback controls.",
  },
  {
    id: 41,
    name: "canvas",
    description: "Provides a drawing space for graphics using JavaScript.",
  },
  {
    id: 42,
    name: "style",
    description: "Embeds internal CSS styles within the document.",
  },
  {
    id: 43,
    name: "blockquote",
    description: "Indicates a block of quoted text from another source.",
  },
  {
    id: 44,
    name: "cite",
    description: "Defines the title of a work or a reference to a source.",
  },
  {
    id: 45,
    name: "em",
    description: "Emphasizes text, typically displayed in italics.",
  },
  {
    id: 46,
    name: "strong",
    description: "Indicates strong importance, typically displayed in bold.",
  },
  {
    id: 47,
    name: "abbr",
    description: "Defines an abbreviation or acronym.",
  },
  {
    id: 48,
    name: "hr",
    description: "Creates a horizontal rule to separate content.",
  },
  {
    id: 49,
    name: "br",
    description: "Inserts a line break within text.",
  },
  {
    id: 50,
    name: "iframe",
    description: "Embeds an inline frame for displaying external content.",
  },

  {
    id: 51,
    name: "ol",
    description: "Defines an ordered (numbered) list.",
  },
  {
    id: 52,
    name: "li",
    description: "Represents a list item within a list.",
  },
  {
    id: 53,
    name: "dl",
    description: "Defines a description list.",
  },
  {
    id: 54,
    name: "dt",
    description: "Defines a term (a name or label) in a description list.",
  },
  {
    id: 55,
    name: "dd",
    description: "Defines a description of a term in a description list.",
  },
  {
    id: 56,
    name: "cite",
    description: "Defines the title of a work or a reference to a source.",
  },
  {
    id: 57,
    name: "code",
    description: "Represents a piece of computer code.",
  },
  {
    id: 58,
    name: "kbd",
    description:
      "Indicates text to be entered by the user, typically displayed in a monospace font.",
  },
  {
    id: 59,
    name: "samp",
    description: "Represents sample output or computer program output.",
  },
  {
    id: 60,
    name: "pre",
    description:
      "Preserves whitespace and formatting within its content, typically used for displaying code.",
  },
  {
    id: 61,
    name: "ins",
    description: "Indicates text that has been added to a document.",
  },
  {
    id: 62,
    name: "del",
    description: "Indicates text that has been deleted from a document.",
  },
  {
    id: 63,
    name: "small",
    description: "Represents small print text, typically used for fine print.",
  },
  {
    id: 64,
    name: "mark",
    description: "Highlights text within the document.",
  },
  {
    id: 65,
    name: "sub",
    description: "Defines subscript text.",
  },
  {
    id: 66,
    name: "sup",
    description: "Defines superscript text.",
  },
  {
    id: 67,
    name: "abbr",
    description: "Defines an abbreviation or acronym.",
  },
  {
    id: 68,
    name: "hr",
    description: "Creates a horizontal rule to separate content.",
  },
  {
    id: 69,
    name: "br",
    description: "Inserts a line break within text.",
  },
  {
    id: 70,
    name: "iframe",
    description: "Embeds an inline frame for displaying external content.",
  },
  {
    id: 71,
    name: "video",
    description: "Embeds video content with playback controls.",
  },
  {
    id: 72,
    name: "audio",
    description: "Embeds audio content with playback controls.",
  },
  {
    id: 73,
    name: "canvas",
    description: "Provides a drawing space for graphics using JavaScript.",
  },
  {
    id: 74,
    name: "style",
    description: "Embeds internal CSS styles within the document.",
  },
  {
    id: 75,
    name: "meta",
    description:
      "Provides metadata about the document, such as character encoding and viewport settings.",
  },
  {
    id: 76,
    name: "link",
    description:
      "Defines the relationship between the current document and an external resource, such as a stylesheet.",
  },
  {
    id: 77,
    name: "script",
    description: "Embeds or references external JavaScript code.",
  },
  {
    id: 78,
    name: "noscript",
    description:
      "Provides fallback content for users who have disabled JavaScript in their browsers.",
  },
  {
    id: 79,
    name: "table",
    description: "Defines a table for organizing data.",
  },
  {
    id: 80,
    name: "tr",
    description: "Represents a row in a table.",
  },
  {
    id: 81,
    name: "td",
    description: "Represents a cell within a table row.",
  },
  {
    id: 82,
    name: "th",
    description: "Represents a table header cell.",
  },
  {
    id: 83,
    name: "thead",
    description: "Groups header content in a table.",
  },
  {
    id: 84,
    name: "tbody",
    description: "Groups body content in a table.",
  },
  {
    id: 85,
    name: "tfoot",
    description: "Groups footer content in a table.",
  },
  {
    id: 86,
    name: "blockquote",
    description: "Indicates a block of quoted text from another source.",
  },
  {
    id: 87,
    name: "cite",
    description: "Defines the title of a work or a reference to a source.",
  },
  {
    id: 88,
    name: "em",
    description: "Emphasizes text, typically displayed in italics.",
  },
  {
    id: 89,
    name: "strong",
    description: "Indicates strong importance, typically displayed in bold.",
  },
  {
    id: 90,
    name: "abbr",
    description: "Defines an abbreviation or acronym.",
  },
  {
    id: 91,
    name: "hr",
    description: "Creates a horizontal rule to separate content.",
  },
];

module.exports = html;
