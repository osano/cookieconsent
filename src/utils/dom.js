"use strict"

import { getContrast, getHoverColor } from './style'

export const traverseDOMPath = ( elem, className ) =>
  !elem || !elem.parentNode
  ? null : elem.classList.contains(className)
  ? elem : traverseDOMPath(elem.parentNode, className)

export const addCustomStylesheet = (id, palette, prefix) => {
  const colorStyles = {}
  const { popup, button, highlight, saveButton } = palette

  // needs background colour, text and link will be set to black/white if not specified
  if (popup) {
      // assumes popup.background is set
      popup.text = popup.text ? popup.text : getContrast(popup.background)
      popup.link = popup.link ? popup.link : popup.text
      colorStyles[prefix + ' .cc-tooltip, ' + prefix + ' .cc-tooltip:after'] = [
          'color: ' + popup.text,
          'background-color: ' + popup.background,
      ]
      colorStyles[prefix + '.cc-window'] = [
          'color: ' + popup.text,
          'background-color: ' + popup.background,
      ]
      colorStyles[prefix + '.cc-revoke'] = [
          'color: ' + popup.text,
          'background-color: ' + popup.background,
      ]
      colorStyles[
          prefix + ' .cc-link,' + prefix + ' .cc-link:active,' + prefix + ' .cc-link:visited'
      ] = ['color: ' + popup.link]

      if (button) {
          // assumes button.background is set
          button.text = button.text ? button.text : getContrast(button.background);
          button.border = button.border ? button.border : 'transparent';
          colorStyles[prefix + ' .cc-btn'] = [
              'color: ' + button.text,
              'border-color: ' + button.border,
              'background-color: ' + button.background,
          ]

          if (button.padding) {
              colorStyles[prefix + ' .cc-btn'].push('padding: ' + button.padding);
          }

          if (button.background != 'transparent') {
              colorStyles[prefix + ' .cc-btn:hover, ' + prefix + ' .cc-btn:focus'] = [
                  'background-color: ' + (button.hover || getHoverColor(button.background)),
              ]
          }

          if (highlight) {
              //assumes highlight.background is set
              highlight.text = highlight.text
                  ? highlight.text
                  : getContrast(highlight.background);
              highlight.border = highlight.border ? highlight.border : 'transparent';
              colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = [
                  'color: ' + highlight.text,
                  'border-color: ' + highlight.border,
                  'background-color: ' + highlight.background,
              ]
          } else {
              // sets highlight text color to popup text. background and border are transparent by default.
              colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = [
                  'color: ' + popup.text,
              ]
          }
      }

      if (saveButton) {
          colorStyles[`${prefix} .cc-btn.cc-save`] = [
              'color: ' + saveButton.text,
              'border-color: ' + saveButton.border,
              'background-color: ' + saveButton.background,
          ]
      }
  }

  // this will be interpreted as CSS. the key is the selector, and each array element is a rule
  const style = document.createElement('style')
  style.id = id
  document.head.appendChild( style )
  Object.entries( colorStyles ).forEach( ( [ prop, value ], index ) =>
    style.sheet.insertRule( `${prop}{${value.join(';')}}`, index )
  )
  return style
}