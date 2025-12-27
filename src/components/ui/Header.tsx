import React, { useEffect, useState } from 'react';
import { Dithering } from '@paper-design/shaders-react';
import { HiChevronDown } from 'react-icons/hi';

export default function Header() {
  const [bgColor, setBgColor] = useState<string>('#ffffff');
  const [frontColor, setFrontColor] = useState<string>('#FF6600');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const getCssVar = () =>
      (window.getComputedStyle(document.documentElement).getPropertyValue('--bg-color') || '').trim() ||
      // fallback depending on prefers-color-scheme
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? '#0a0a0a' : '#ffffff');

    const getMainCssVar = () =>
      (window.getComputedStyle(document.documentElement).getPropertyValue('--main-color') || '').trim() || '#FF6600';

    // initialize
    setBgColor(getCssVar());
    setFrontColor(getMainCssVar());

    // watch for class/style attribute changes on the root (common dark-mode toggles add/remove a class)
    const observer = new MutationObserver(() => {
      setBgColor(getCssVar());
      setFrontColor(getMainCssVar());
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'style'] });

    // also listen for prefers-color-scheme changes
    const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    const onPrefChange = () => {
      setBgColor(getCssVar());
      setFrontColor(getMainCssVar());
    };
    if (mql) {
      if (typeof mql.addEventListener === 'function') {
        mql.addEventListener('change', onPrefChange);
      } else if (typeof mql.addListener === 'function') {
        mql.addListener(onPrefChange);
      }
    }

    return () => {
      observer.disconnect();
      if (mql) {
        if (typeof mql.removeEventListener === 'function') {
          mql.removeEventListener('change', onPrefChange);
        } else if (typeof mql.removeListener === 'function') {
          mql.removeListener(onPrefChange);
        }
      }
    };
  }, []);

  return (
    <header className="relative h-screen w-full overflow-hidden">
      <Dithering
        shape="warp"
        type="4x4"
        pxSize={4}
        scale={1.93}
        speed={0.54}
        className="absolute inset-0 w-full h-full"
        colorFront={frontColor}
        colorBack={bgColor}
      />
      {/* Header content */}
      <div className="absolute bottom-25 sm:bottom-20 md:bottom-8 left-4 sm:left-8 text-white">
        <h1 className="text-7xl lg:text-8xl font-bold mb-4 mix-blend-difference">0xbiel</h1>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-md md:text-lg opacity-80 mb-2">Scroll to view more</p>
        <HiChevronDown className="text-2xl mx-auto animate-bounce" />
      </div>
    </header>
  );
}