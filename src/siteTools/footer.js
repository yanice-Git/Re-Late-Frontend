import React from 'react';

export function Footer() {
    return (
        <footer style={{ backgroundColor: '#1abc9c', color: 'white', position: 'fixed', left: 0, bottom: 0, width: '100%', textAlign: 'center', padding: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p style={{ margin: 0 }}>© 2023 For the students</p>
            </div>
        </footer>
    );
}

