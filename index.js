import { useEffect, useState } from 'react';

function useKonvaImage(url, crossOrigin) {
  const [state, setState] = useState({
    image: undefined,
    status: 'laoding',
  });

  useEffect(() => {
    if (!url) return;

    let img = document.createElement('img');

    const onLoad = () => {
      setState({ image: img, status: 'loaded' });
    };

    const onError = () => {
      setState({ image: undefined, status: 'failed' });
    };

    img.addEventListener('load', onLoad);
    img.addEventListener('error', onError);

    if (crossOrigin)
      img.crossOrigin = crossOrigin;
    img.src = url;

    return () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onError);
    };
  }, [url, crossOrigin]);

  return [state.image, state.status];
};

export default useKonvaImage;
