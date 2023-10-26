import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

interface SocialShareModalProps {
    showModal: boolean;
    handleClose: () => void;
}

const SocialShareModal: React.FC<SocialShareModalProps> = ({ showModal, handleClose }) => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Link copied to clipboard!');
            })
            .catch((error) => {
                console.error('Could not copy to clipboard: ', error);
                alert(`Sorry couldn't copy link`);

            });
    };
    const shareUrl = window.location.href;
    console.log(shareUrl);
    // Generate the URL to share.............................................................

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Share on Social Media</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FacebookShareButton url={shareUrl}>
                    <button>Facebook Share</button>
                </FacebookShareButton>

                <TwitterShareButton url={shareUrl}>
                    <button>Twitter Share</button>
                </TwitterShareButton>

                <WhatsappShareButton url={shareUrl}>
                    <button>WhatsApp Share</button>
                </WhatsappShareButton>

                <Button onClick={() => copyToClipboard(shareUrl)}>Copy Link</Button>

                {/* Add more share buttons for other platforms */}
            </Modal.Body>
        </Modal>
    );
};

export default SocialShareModal;
