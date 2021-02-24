// methods relating to typograghy

export const rmSlash = (str: string) => (str = str.replace(/\\/g, ""));

export const replaceSpace = (str: string, char: string) => {
  return str.split(" ").join(char);
};

export const capString = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);