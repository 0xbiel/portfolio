import React, { useEffect, useState, useRef } from 'react';
import { Dithering } from '@paper-design/shaders-react';

export default function Footer() {
    const [bgColor, setBgColor] = useState<string>('#ffffff');
    const footerRef = useRef<HTMLElement | null>(null);
    
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const getCssVar = () =>
            (window.getComputedStyle(document.documentElement).getPropertyValue('--bg-color') || '').trim() ||
            // fallback depending on prefers-color-scheme
            (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? '#0a0a0a' : '#ffffff');
        
        // initialize
        setBgColor(getCssVar());
        
        // watch for class/style attribute changes on the root (common dark-mode toggles add/remove a class)
        const observer = new MutationObserver(() => {
            setBgColor(getCssVar());
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'style'] });
        
        // also listen for prefers-color-scheme changes
        const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
        const onPrefChange = () => setBgColor(getCssVar());
        if (mql) {
            if (typeof mql.addEventListener === 'function') {
                mql.addEventListener('change', onPrefChange);
            } else if (typeof mql.addListener === 'function') {
                mql.addListener(onPrefChange);
            }
        }
        
        return () => {
            observer.disconnect();
            if  (mql) {
                if (typeof mql.removeEventListener === 'function') {
                    mql.removeEventListener('change', onPrefChange);
                } else if (typeof mql.removeListener === 'function') {
                    mql.removeListener(onPrefChange);
                }
            }
        };
    }, []);
    
    return (
        <footer ref={footerRef} className="relative">
            <Dithering
                shape="warp"
                type="4x4"
                pxSize={4}
                scale={1.93}
                speed={0.54}
                className="absolute inset-0 w-full h-full"
                colorFront="#FF6600"
                colorBack={bgColor}
            />
            <div className="relative z-10 text-center py-6 font-bold">
                Made with ❤️ by 0xbiel
            </div>
        </footer>
    );
}