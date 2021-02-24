// present theme color options
export const themeColors: any = {
    Baby: 'rgb(137,207,240)',
    Orange: 'rgb(252,188,121)',
    Golden: 'rgb(184,134,11)',
    Green: 'rgb(216,237,183)',
    Pink: 'rgb(238,170,203)',
    Purple: 'rgb(224,198,246)'
}

export const getThemeColorsArray = () => {
    let arr = [];
    // loop avaiable pre-defined theme colors
    for (const name in themeColors) {
        // push name and color value
        arr.push({
            name,
            value: themeColors[name],
        });
    }
    return arr;
}

export const defaultThemeColor = () => getThemeColorsArray()[0].name