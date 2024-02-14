---
type: page
title: Components
seo:
  type: seo
section:
  - type: section
    headline:
      text: Lorem
      sub: Ipsum
      large: false
      switchOrder: false
      width: unset
    width: default
    style: accentTransition
    backgroundColor: default
    spaceBefore: default
    spaceAfter: default
    components:
      - type: cta
        textAlign: left
        text: |
          This is a text entered through Static CMS
        buttons:
          - type: buttons
        highlightText: true
        sub: |
          Impossible!
        headline: "\n\n\n"
      - type: image-text
        highlightText: true
        image:
          src: /images/comp_eco01.jpg
        layout: above
        text: |
          Text
    headerSpacing: false
    inverted: false
    spotlight: true
    content:
      align: center
      gutter: default
      mode: list
      tileWidth: default
      width: unset
  - backgroundColor: default
    spaceAfter: default
    spaceBefore: default
    style: horizontalGradient
    type: section
    width: full
    content:
      align: center
      gutter: default
      mode: default
      tileWidth: default
      width: unset
    headline:
      width: unset
      large: false
      switchOrder: false
    buttons:
      size: medium
      type: button
      variant: secondary
    headerSpacing: true
    inverted: true
    spotlight: false
    components:
      - type: teaser-card
        imageRatio: wide
        layout: stack
        button:
          chevron: false
          hidden: false
        headline: |
          teaser Head
        image: /images/comp_eco01.jpg
        label: label
        target: "#route"
        text: |
          teaser text  teaser text teaser text
---
