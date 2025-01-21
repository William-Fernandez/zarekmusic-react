import { NavLink } from 'react-router-dom';
import React from 'react';

const MyNavLink = ({ to, children }) => { // Componente reutilizable
    return (
        <li className="py-2 px-3 relative inline-block"> {/* relative aquí para el posicionamiento del li */}
            <NavLink
                to={to}
                className={({ isActive }) => `
                    px-3 py-4 relative inline-block
                    hover:drop-shadow-[2px_4px_1px_rgba(204,202,226,0.4)]
                    transition duration-200 ease-in-out
                    group-hover:text-cyan-600
                    ${isActive ? "text-cyan-600" : ""}
                `}
                style={({ isActive }) => ({
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: '50%', // Centrar horizontalmente
                        transform: 'translateX(-50%)', // Centrar horizontalmente
                        bottom: '-2px',
                        width: 'calc(100% - 1.2rem)', // Ancho ajustado para el padding
                        height: '4px',
                        backgroundColor: 'theme("colors.cyan.500/70")',
                        borderRadius: 'theme("borderRadius.md")',
                        transition: 'opacity 0.3s',
                        opacity: isActive || document.activeElement === document.querySelector(`a[href="${to}"]`) ? 1 : 0,
                    },
                })}
            >
                {children}
            </NavLink>
        </li>
    );
};