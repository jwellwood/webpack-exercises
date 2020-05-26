// added due to ts complaining about the logo.png import path in MyLogo.tsx

declare module '*.png' {
  const content: any;
  export default content;
}
