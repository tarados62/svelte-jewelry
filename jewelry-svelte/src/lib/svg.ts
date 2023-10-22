const svgCache: Record<string, string> = {};
const svgCacheLoaders: Record<string, Promise> = {};

export const fetchSvgIcon = async (name: string) => {
  if (svgCache[name]) {
    return svgCache[name];
  }

  let promise;
  let firstLoading = false;

  if (svgCacheLoaders[name]) {
    promise = svgCacheLoaders[name];
  } else {
    promise = (async () => {
      const response = await fetch(`/icons/${name}.svg`);
      const svg = await response.text();
      return svg;
    })();
    svgCacheLoaders[name] = promise;
    firstLoading = true;
  }

  const svg = await promise;

  if (firstLoading) {
    svgCache[name] = svg;
    delete svgCacheLoaders[name];
  }

  return svg;
};
