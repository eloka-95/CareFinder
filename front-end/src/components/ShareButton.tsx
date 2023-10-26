import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import SocialShareModal from './SocialShareModal';
import ShareIcon from '../assets/image/share.png';


const ShareButton = ({ name }: { name: string }) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
    // Generate the URL to share based on the name
    
    const handleShare = () => {
        const params = new URLSearchParams(location.search);
        params.set('f', name);
        navigate(`/health?${params.toString()}`);
        setShowModal(true);
    };

    const handleModalClose = () => {
        const params = new URLSearchParams(location.search);
        params.delete('f');
        navigate(`/health?${params.toString()}`);
        setShowModal(false);
    };
  

    return (
        <>
            <Button style={{ width: '50px', height: '50px' }} onClick={handleShare}>
                <img src={ShareIcon} alt='share icon' style={{ width: '20px', height: '20px' }} />
            </Button>
            <SocialShareModal showModal={showModal} handleClose={handleModalClose}  />
        </>
    );
};

export default ShareButton;
