import React from 'react'

import { useThemeColor } from '../../../../../hooks/theme'

import { checkIcon } from '../../../../../assets/icons/widgets'
import { CenteredDiv } from '../../../../widgets'

import { Container, Button } from './ThemeColorStyle'

export default () => {
    // theme color
    const { currentThemeName, themeColorsArray, setThemeColor } = useThemeColor()

    return (
        <Container>
            {themeColorsArray.map((color: any, i: number) => (
                <CenteredDiv key={i}>
                    <Button
                        themeColor={color.value}
                        isCurrentColor={currentThemeName === color.name}
                        onClick={() => setThemeColor(color)}
                    >
                        {currentThemeName === color.name && (
                            checkIcon
                        )}
                    </Button>
                    <span>{color.name}</span>
                </CenteredDiv>
            ))}
        </Container>
    )
}