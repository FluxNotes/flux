
import Raw from './raw'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import cheerio from 'cheerio'
import typeOf from 'type-of'
import { Record } from 'immutable'

let state = {};

/**
 * String.
 *
 * @type {String}
 */

const String = new Record({
  kind: 'string',
  text: ''
})

/**
 * A rule to (de)serialize text nodes. This is automatically added to the HTML
 * serializer so that users don't have to worry about text-level serialization.
 *
 * @type {Object}
 */

const TEXT_RULE = {

  deserialize(el) {
    if (el.tagName == 'br') {
      return {
        kind: 'text',
        text: '\n'
      }
    }

    if (el.type == 'text') {
      if (el.data && el.data.match(/<!--.*?-->/)) return

      return {
        kind: 'text',
        text: el.data
      }
    }
  },

  serialize(obj, children) {
    if (obj.kind == 'string') {
      return children
        .split('\n')
        .reduce((array, text, i) => {
          if (i != 0) array.push(<br />)
          array.push(text)
          return array
        }, [])
    }
  }

}

/**
 * HTML serializer.
 *
 * @type {Html}
 */

class Html {

  /**
   * Create a new serializer with `rules`.
   *
   * @param {Object} options
   *   @property {Array} rules
   *   @property {String} defaultBlockType
   *   @property {String|Object} defaultBlockType
   */

  constructor(options = {}) {
    this.rules = [
      ...(options.rules || []),
      TEXT_RULE
    ]

    this.defaultBlockType = options.defaultBlockType || 'paragraph'
  }

  /**
   * Deserialize pasted HTML.
   *
   * @param {String} html
   * @param {Object} options
   *   @property {Boolean} toRaw
   * @return {State}
   */

  deserialize = (html, options = {}) => {
    console.log('in deserialize(html)');
    console.log(html);
    const $ = cheerio.load(html).root();
    console.log($);
    const children = $[0].children//.toArray();
    // const children = $.children().toArray();
    console.log(children);
    let nodes = this.deserializeElements(children);
    console.log(nodes);

    // HACK: ensure for now that all top-level inline are wrapped into a block.
    nodes = nodes.reduce((memo, node, i, original) => {
      if (node.kind == 'block') {
        memo.push(node)
        return memo
      }

      if (i > 0 && original[i - 1].kind != 'block') {
        const block = memo[memo.length - 1]
        block.nodes.push(node)
        return memo
      }

      const { defaultBlockType } = this
      const defaults = typeof defaultBlockType == 'string'
        ? { type: defaultBlockType }
        : defaultBlockType

      const block = {
        kind: 'block',
        nodes: [node],
        ...defaults
      }

      memo.push(block)
      return memo
    }, []);

    const raw = {
      kind: 'state',
      document: {
        kind: 'document',
        nodes,
      }
    };

    if (options.toRaw) {
      return raw;
    }

    const state = Raw.deserialize(raw, { terse: true });
    return state;
  }

  /**
   * Deserialize an array of Cheerio `elements`.
   *
   * @param {Array} elements
   * @return {Array}
   */

  deserializeElements = (elements = []) => {
    let nodes = []

    elements.forEach((element) => {
      const node = this.deserializeElement(element)
      switch (typeOf(node)) {
        case 'array':
          nodes = nodes.concat(node)
          break
        case 'object':
          nodes.push(node)
          break
      }
    })

    return nodes
  }

  /**
   * Deserialize a Cheerio `element`.
   *
   * @param {Object} element
   * @return {Any}
   */

  deserializeElement = (element) => {
    let node

    const next = (elements) => {
      switch (typeOf(elements)) {
        case 'array':
          return this.deserializeElements(elements)
        case 'object':
          return this.deserializeElement(elements)
        case 'null':
        case 'undefined':
          return
        default:
          throw new Error(`The \`next\` argument was called with invalid children: "${elements}".`)
      }
    }

    for (const rule of this.rules) {
      if (!rule.deserialize) continue
      const ret = rule.deserialize(element, next)
      const type = typeOf(ret)

      if (type != 'array' && type != 'object' && type != 'null' && type != 'undefined') {
        throw new Error(`A rule returned an invalid deserialized representation: "${node}".`)
      }

      if (ret === undefined) continue
      if (ret === null) return null

      node = ret.kind == 'mark' ? this.deserializeMark(ret) : ret
      break
    }

    return node || next(element.children)
  }

  /**
   * Deserialize a `mark` object.
   *
   * @param {Object} mark
   * @return {Array}
   */

  deserializeMark = (mark) => {
    console.log("in deserializeMark");
    const { type, data } = mark

    const applyMark = (node) => {
      if (node.kind == 'mark') {
        return this.deserializeMark(node)
      }

      else if (node.kind == 'text') {
        if (!node.ranges) node.ranges = [{ text: node.text }]
        node.ranges = node.ranges.map((range) => {
          range.marks = range.marks || []
          range.marks.push({ type, data })
          return range
        })
      }

      else {
        node.nodes = node.nodes.map(applyMark)
      }

      return node
    }

    return mark.nodes.reduce((nodes, node) => {
      const ret = applyMark(node)
      if (Array.isArray(ret)) return nodes.concat(ret)
      nodes.push(ret)
      return nodes
    }, [])
  }

  /**
   * Serialize a `state` object into an HTML string.
   *
   * @param {State} state
   * @param {Object} options
   *   @property {Boolean} render
   * @return {String|Array}
   */

  serialize = (state, options = {}) => {
    const { document } = state
    //console.log(state.document.nodes);
    this.state = state;
    const elements = document.nodes.map(this.serializeNode);
    //console.log(elements);
    if (options.render === false) return elements

    const html = ReactDOMServer.renderToStaticMarkup(<body>{elements}</body>)
    const inner = html.slice(6, -7)
    return inner
  }

  /**
   * Serialize a `node`.
   *
   * @param {Node} node
   * @return {String}
   */

  serializeNode = (node) => {
      // 'copy' the text every time into the note
      // Need to artificially set selection to the current node
      //console.log(node);
      if (node.kind == 'text') {
      //console.log(node.kind);
      const ranges = node.getRanges()
      return ranges.map(this.serializeRange)
    }

    const children = node.nodes.map(this.serializeNode)

    for (const rule of this.rules) {
      if (!rule.serialize) continue
      const ret = rule.serialize(node, children) // calls my serialize methods
      //console.log(ret);
      if(typeof ret === 'string'){ // this seemingly never happens, probably can remove the if-else entirely
       // console.log("is a string, making element: " + ret);
        ret = React.createElement('div', {}, ret);
      }
      else{
       // console.log("is not a string");
       // console.log(ret);
      }
      if (ret) return addKey(ret) //Can't remove tags with something like .slice(5, -6) because ret is not a string
    }

    throw new Error(`No serializer defined for node of type "${node.type}".`)
  }

  /**
   * Serialize a `range`.
   *
   * @param {Range} range
   * @return {String}
   */

  serializeRange = (range) => {
    const string = new String({ text: range.text })
    const text = this.serializeString(string)

    return range.marks.reduce((children, mark) => {
      for (const rule of this.rules) {
        if (!rule.serialize) continue
        //console.log("serializing Marks"); //maybe I don't need to worry about this, or maybe I do if a structuredField is stylized?
        const ret = rule.serialize(mark, children)
        if (ret) return addKey(ret)
      }

      throw new Error(`No serializer defined for mark of type "${mark.type}".`)
    }, text)
  }

  /**
   * Serialize a `string`.
   *
   * @param {String} string
   * @return {String}
   */

  serializeString = (string) => {
    for (const rule of this.rules) {
      if (!rule.serialize) continue
      const ret = rule.serialize(string, string.text)
      if (ret) return ret
    }
  }

}

/**
 * Add a unique key to a React `element`.
 *
 * @param {Element} element
 * @return {Element}
 */

let key = 0

function addKey(element) {
  return React.cloneElement(element, { key: key++ })
}

/**
 * Export.
 *
 * @type {Html}
 */

export default Html
