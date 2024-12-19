import React from 'react';
import Feedback from './feed/Feedbakc';
import { LuPhoneCall } from 'react-icons/lu';
import { FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Mail = () => {
    return (
        <>
            <div id="feed" className="feed">
                <div className="container">
                    <h2 className="feed_title">Fikr-mulohaza</h2>
                    <div className="feed_box">
                        
                        <Feedback />
                    </div>
                    <div className="feed_contact">
                        <div className="feed_contact_call">
                        <div className="contact_call_icon">
                        <LuPhoneCall />
                            </div>
                            <Link to="tel:+998880474347" className="feed_call_title">Phone Number</Link>
                        </div>
                        <div className="feed_contact_teg">
                           <div className="contact_teg_icon">
                           <FaTelegram />
                           </div>
                            <Link to="https://t.me/izana0705" className="feed_teg_title">Telegram</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mail;
