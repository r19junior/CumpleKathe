import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Login from './Login';
import Dedication from './Dedication';
import BackgroundMusic from './BackgroundMusic';

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <main className="bg-black min-h-screen selection:bg-neon-red selection:text-black">
            <BackgroundMusic isAuthenticated={isAuthenticated} />
            <AnimatePresence mode="wait">
                {!isAuthenticated ? (
                    <motion.div
                        key="login"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, filter: 'blur(20px)', scale: 1.1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Login onLogin={() => setIsAuthenticated(true)} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="dedication"
                        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Dedication />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}

