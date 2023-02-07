// @ts-nocheck
import React, { useState, useCallback } from 'react'
import { FallingBunnies, FallingBeefesProps, useKonamiCheatCode } from '@beef-swap-libs/uikit'

const EasterEgg: React.FC<FallingBeefesProps> = (props) => {
  const [show, setShow] = useState(false)
  const startFalling = useCallback(() => setShow(true), [setShow])
  useKonamiCheatCode(startFalling)

  if (show) {
    return (
      <div onAnimationEnd={() => setShow(false)}>
        <FallingBunnies {...props} />
      </div>
    )
  }
  return null
}

export default React.memo(EasterEgg)
