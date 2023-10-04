'use client';
import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import { useRouter } from 'next/router';
import { TagGroup, Tag } from 'rsuite';

const App: React.FC = () => {
    return (
        <div style={{ background: 'black', minHeight: '200px' }}>
            <div style={{ background: '#a50000', height: '3px', width: '100%' }}></div>
            <div
                style={{
                    background: 'black',
                    minHeight: '160px',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '25px'
                }}>
                <TagGroup>
                    <Tag style={{ color: '#f59f00', fontWeight: 650, background: '#a50000' }}>
                        Post Malone
                    </Tag>
                    <Tag style={{ color: '#f59f00', fontWeight: 650, background: '#a50000' }}>
                        Taylor Swift
                    </Tag>
                    <Tag style={{ color: '#f59f00', fontWeight: 650, background: '#a50000' }}>
                        Doja Cat
                    </Tag>
                    <Tag style={{ color: '#f59f00', fontWeight: 650, background: '#a50000' }}>
                        Ariana Grande
                    </Tag>
                    <Tag style={{ color: '#f59f00', fontWeight: 650, background: '#a50000' }}>
                        Justin Bieber
                    </Tag>
                    <Tag style={{ color: '#f59f00', fontWeight: 650, background: '#a50000' }}>
                        Adele
                    </Tag>
                    <Tag style={{ color: '#f59f00', fontWeight: 650, background: '#a50000' }}>
                        Sam Smith
                    </Tag>
                </TagGroup>
            </div>
        </div>
    );
};
export default App;
