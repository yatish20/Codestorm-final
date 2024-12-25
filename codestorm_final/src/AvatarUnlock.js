import React, { useState } from 'react';
import './AvatarUnlock.css';
import avatar1 from './assets/avatar1.jpeg';
import avatar2 from './assets/avatar2.jpeg';
import avatar3 from './assets/avatar3.jpeg';
import avatar4 from './assets/avatar4.jpeg';
import avatar5 from './assets/avatar5.jpeg';
import avatar6 from './assets/avatar6.jpeg';

const availableAvatars = [
    { id: 1, name: 'Penny Saver', cost: 0, img: avatar1, unlocked: true, category: 'Poor' },
    { id: 2, name: 'Budget Guru', cost: 5, img: avatar2, unlocked: false, category: 'MiddleClass' },
    { id: 3, name: 'Investment Pro', cost: 10, img: avatar3, unlocked: false, category: 'MiddleClass' },
    { id: 4, name: 'Finance Wizard', cost: 15, img: avatar4, unlocked: false, category: 'Rich' },
    { id: 5, name: 'Crypto King', cost: 20, img: avatar5, unlocked: false, category: 'Rich' },
    { id: 6, name: 'Wealth Tycoon', cost: 25, img: avatar6, unlocked: false, category: 'Rich' }
];

function Avatar({ userCoins }) {
    const [coins, setCoins] = useState(90);
    const [unlockedAvatars, setUnlockedAvatars] = useState(
        availableAvatars.filter((avatar) => avatar.unlocked)
    );
    const [profileAvatar, setProfileAvatar] = useState(availableAvatars[0].img);
    const [showModal, setShowModal] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [modalMessage, setModalMessage] = useState('');

    const unlockAvatar = (avatar) => {
        if (coins >= avatar.cost) {
            setCoins(coins - avatar.cost);
            setUnlockedAvatars([...unlockedAvatars, avatar]);
            setShowModal(false); // Close modal after unlocking
        } else {
            setModalMessage("You don't have enough coins to unlock this avatar.");
            setShowModal(true);
        }
    };

    const handleUnlockClick = (avatar) => {
        setSelectedAvatar(avatar);
        if (coins >= avatar.cost) {
            setModalMessage(`Are you sure you want to unlock ${avatar.name}?`);
        } else {
            setModalMessage("You don't have enough coins to unlock this avatar.");
        }
        setShowModal(true);
    };

    const handleConfirmUnlock = () => {
        if (selectedAvatar && coins >= selectedAvatar.cost) {
            unlockAvatar(selectedAvatar);
        }
    };

    const updateProfileAvatar = (avatar) => {
        if (unlockedAvatars.includes(avatar)) {
            setProfileAvatar(avatar.img);
        }
    };

    const categorizedAvatars = {
        Poor: availableAvatars.filter(avatar => avatar.category === 'Poor'),
        MiddleClass: availableAvatars.filter(avatar => avatar.category === 'MiddleClass'),
        Rich: availableAvatars.filter(avatar => avatar.category === 'Rich')
    };

    return (
        <div className="avatar-unlock-container">
            <div className='head'>
                <h2>Unlock New Avatars</h2>
                <div className="profile-avatar">
                    <h3>Your Profile Avatar</h3>
                    <img src={profileAvatar} alt="Profile Avatar" />
                </div>
                <div className="coins-info">
                    <p>Coins: {coins}</p>
                </div>
            </div>
            <div className='contentpane'>
                {Object.entries(categorizedAvatars).map(([category, avatars]) => (
                    <div key={category} className="avatar-section">
                        <h3>{category} Avatars</h3>
                        <div className="avatars-grid">
                            {avatars.map((avatar) => (
                                <div key={avatar.id} className="avatar-card">
                                    <div className="avatar-image-container">
                                        <img src={avatar.img} alt={avatar.name} />
                                        {!unlockedAvatars.includes(avatar) && (
                                            <i className="material-icons lock-icon">lock</i>
                                        )}
                                    </div>
                                    <p>{avatar.name}</p>
                                    <p>Cost: {avatar.cost} coins</p>
                                    <button
                                        className='unlockbutton'
                                        disabled={unlockedAvatars.includes(avatar)}
                                        onClick={() => handleUnlockClick(avatar)}
                                    >
                                        {unlockedAvatars.includes(avatar) ? 'Unlocked' : 'Unlock'}
                                    </button>
                                    {unlockedAvatars.includes(avatar) && (
                                        <button onClick={() => updateProfileAvatar(avatar)} className='setprofile'>
                                            Set as Profile
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>{modalMessage}</p>
                        {coins >= (selectedAvatar ? selectedAvatar.cost : 0) && (
                            <button onClick={handleConfirmUnlock}>Confirm Unlock</button>
                        )}
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Avatar;
