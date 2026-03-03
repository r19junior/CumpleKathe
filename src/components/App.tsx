import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Login from './Login';
import Dedication from './Dedication';
import BackgroundMusic from './BackgroundMusic';

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <main className="bg-black min-h-screen">
            <BackgroundMusic isAuthenticated={isAuthenticated} />
            <AnimatePresence mode="wait">
                {!isAuthenticated ? (
                    <motion.div
                        key="login"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Login onLogin={() => setIsAuthenticated(true)} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="dedication"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <Dedication />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
