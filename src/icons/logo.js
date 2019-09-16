import React from 'react'

import theme from '../gatsby-plugin-theme-ui'

const Logo = ({
  className = undefined,
  hidden = true,
  size = 512,
  color = theme.colors.text,
  ...props
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2063 580"
    aria-hidden={hidden ? `true` : `false`}
    focusable={hidden ? `false` : `true`}
    aria-label={hidden ? `` : `Uptrend Logo`}
    fill={color}
  >
    <g fill="none" fill-rule="evenodd">
      <g fill={color} transform="translate(50 19)">
        <path
          fill-rule="nonzero"
          d="M265,530 L0,265 L265,0 L530,265 L265,530 Z M62.9040404,265 L265,467.09596 L467.09596,265 L265,62.9040404 L62.9040404,265 Z"
        />
        <path d="M265.001546,257.330779 L213.576046,309 L182,277.270834 L264.889213,194 L265.002007,194.11334 L265.114829,194 L348,277.280503 L316.425494,309 L265.001546,257.330779 Z" />
      </g>
      <text
        fill={color}
        font-family="AvenirLTStd-Medium, Avenir LT Std"
        font-size="395"
        font-weight="500"
        letter-spacing="-16.294"
        transform="translate(673 81)"
      >
        <tspan x="0" y="299">
          Uptrend
        </tspan>
      </text>
    </g>
  </svg>
)

export default Logo
