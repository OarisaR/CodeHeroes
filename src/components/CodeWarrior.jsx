import React from 'react';
import './CodeWarrior.css';
import warriorImage from './codewarrior.png';

export const CodeWarrior = () => {
    return (
        <section className="code-warrior-section">
           <div className="floating-elements">
    <div className="code-symbol">&lt;/&gt;</div>
    <div className="code-symbol">{ }</div>
    <div className="code-symbol">#</div>
    <div className="code-symbol">( )</div>
    <div className="code-symbol">[ ]</div>
</div>
            
            <div className="code-warrior-container">
                <div className="warrior-wrapper">
                    <img 
                        src={warriorImage} 
                        alt="Code Warrior" 
                        className="warrior-image"
                    />
                </div>
                
                <div className="content-wrapper">
                    <div className="quote-bubble">
                        <p className="quote-text">
                             A coder's greatest weapon is not syntax but problem-solving skills.
                        </p>
                        <span className="quote-author">- Master Code Warrior</span>
                    </div>
                    
                    <div className="warrior-stats">
                        <div className="stat-item">
                            <span className="stat-number">1000+</span>
                            <span className="stat-label">Challenges</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Warriors Trained</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Battle Techniques</span>
                        </div>
                    </div>
                    
                    <button className="warrior-cta">
                        Begin Your Journey
                        <span className="arrow">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};
