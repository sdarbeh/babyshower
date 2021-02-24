import React, { useState, useRef } from 'react'
import { getColor } from '../../../utils/helpers/color'
// items
import { LinkButton, CenteredDiv } from '../../widgets'
import { Container } from './RegistryCardStyle'

export default ({ img, url, name, ...rest }: any) => {
  const ref = useRef<any>();
  const [err, setErr] = useState(false)
  const [color, setColor] = useState<any>({
    primary: null,
    opacity: null
  })

  const handleImgLoad = () => {
    setColor({
      primary: getColor(ref.current),
      opacity: getColor(ref.current, .1)
    })
  }

  return (
    <Container {...rest} color={color}>
      <LinkButton to={url} newTab>
        {!err && (
          <CenteredDiv>
            <img
              src={img}
              alt={name}
              crossOrigin={'anonymous'}
              ref={ref}
              onLoad={handleImgLoad}
              onError={() => setErr(true)}
            />
          </CenteredDiv>
        )}
        <span>{name}</span>
      </LinkButton>
    </Container>
  )
}