import React from 'react';
import './SocialMedia.scss';
const SocialMedia = (props) => {
    const medias = ['facebook', 'instagram', 'pinterest']
    return (
        <div className="SocialMedia">
            {
                medias.map((media, index) => (
                    <i key={index} className={"SocialMedia__icon icon-" + media}></i>
                ))
            }

        </div>
    )
}

export default SocialMedia