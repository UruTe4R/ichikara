// types/jp-prefecture.d.ts
declare module 'jp-prefecture' {
  const prefectures: {
    getAll: (key?: string, value?: string) => string[];
  };
  export default prefectures;
}
