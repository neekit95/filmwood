import React, { useEffect, useRef } from 'react';

interface Props {
    TMDB_ID: number;
}

const Player: React.FC<Props> = ({ TMDB_ID }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://kinobox.tv/kinobox.min.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = (): void => {
            if (containerRef.current) {
                (window as any).kbox(containerRef.current, {
                    search: { tmdb: TMDB_ID },
                    menu: {
                        enabled: false,
                    },
                });
            }
        };

        return (): void => {
            try {
                document.body.removeChild(script);
            } catch (e) {
                console.error(e);
            }
        };
    }, [TMDB_ID]);

    return <div ref={containerRef} className="kinobox_player"></div>;
};

export default Player;
