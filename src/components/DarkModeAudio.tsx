/* eslint-disable react-refresh/only-export-components */
// DarkModeAudio.tsx

import { useRef, useCallback } from 'react';
import { useTheme } from './ThemeSwitcher';

// --- This is the hook you need to export and use in Navbar.tsx ---
export const useAudioControls = () => { // Renamed the hook to something simple and clear
    const { theme } = useTheme();
    const audioRef = useRef<HTMLAudioElement>(null);

    // This function will be called directly in the button's onClick event
    const toggleAudio = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Logic to toggle between light/dark audio states
        if (theme === true) {
            // If currently Light (theme=true), switch to Dark (theme=false), so play
            audio.play().catch(error => {
                console.warn("Autoplay blocked:", error);
            });
        } else {
            // If currently Dark (theme=false), switch to Light, so pause
            audio.pause();
            audio.currentTime = 0;
        }
    }, [theme]);
    
    // Return the ref and the function needed for the click handler
    return { audioRef, toggleAudio };
};


// --- This is the component that renders the <audio> element ---
const DarkModeAudio = () => {
    // You only need the audioRef from the hook to attach to the <audio> tag
    const { audioRef } = useAudioControls(); 

    // The component's job is just to render the element
    return (
        <audio 
            ref={audioRef} 
            src="/path/to/your/dark_mode_song.mp3" 
            preload="auto" 
            style={{ display: 'none' }} 
        />
    );
};

export default DarkModeAudio; // Default export for the component