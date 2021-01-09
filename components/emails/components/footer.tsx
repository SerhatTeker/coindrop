import { FC } from 'react';
import { baseUrl } from '../../../src/settings';
import SocialLink from './social-link';

const Footer: FC = () => (
    <div
        id="footer"
        style={{
            fontSize: "12px",
            textAlign: "center",
            marginTop: "40px",
        }}
    >
        <hr />
        <div
            id="social-links"
            style={{
                display: "flex",
                flexDirection: "row",
                margin: "auto",
                justifyContent: "center",
            }}
        >
            <SocialLink
                href="https://www.facebook.com/Coindrop.to/"
                title="Facebook"
                alt="FB"
                srcPath="/images/facebook-logo-black.png"
            />
            <SocialLink
                href="https://twitter.com/coindrop_to"
                title="Twitter"
                alt="TWTR"
                srcPath="/images/twitter-logo-black.png"
            />
            <SocialLink
                href="https://www.instagram.com/coindrop.to"
                title="Instagram"
                alt="IG"
                srcPath="/images/instagram-logo-black.png"
            />
            <SocialLink
                href="https://www.youtube.com/channel/UCpkybbAV94VUkZOsxboJtmQ"
                title="YouTube"
                alt="YT"
                srcPath="/images/youtube-logo-black.png"
            />
        </div>
        <div
            id="reply"
        >
            You can reply to this e-mail with any questions or feedback
        </div>
        <div
            id="unsubscribe-options"
            style={{
                marginTop: "4px",
            }}
        >
            <span>
                <a
                    style={{color: "black"}}
                    href={`${baseUrl}`} // TODO: MAKE THIS FUNCTIONAL
                >
                    My Account
                </a>
                {' | '}
                <a
                    style={{color: "black"}}
                    href={`${baseUrl}`} // TODO: MAKE THIS FUNCTIONAL
                >
                    Unsubscribe
                </a>
            </span>
        </div>
    </div>
);

export default Footer;