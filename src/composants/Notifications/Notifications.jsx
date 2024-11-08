<<<<<<< HEAD
import { PropTypes } from "prop-types";
import '../../css/Notifications.css'
import { ANotification } from './ANotification'
import { useEffect, useState } from "react";

export function Notifications({ monTableau }) {
    const [notifsTop, setNotifsTop] = useState(11);

    useEffect(() => {
        let lastScrollTop = document.documentElement.scrollTop;

        function handleScroll() {
            const currentScrollTop = document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                if (window.scrollY > 75) {
                    setNotifsTop(1);
                }
                else {
                    setNotifsTop(notifsTop - (window.scrollY / 30));
                }
            }
            else {
                if (window.scrollY < 4) {
                    setNotifsTop(11);
                }
                else {
                    setNotifsTop(notifsTop + (window.scrollY / 30));
                } 
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [notifsTop]);

    if (monTableau.length != 0) {
        return (
            <aside 
            style={{ top: `${ notifsTop }%`, overflowY: 'auto' }}
            >
                <h2>Notifications</h2>
                {
                    monTableau.map((element, index) => (
                        <ANotification notifTitle={ element.title } notifContent={ element.content } key={ index }></ANotification>
                    ))
                }
            </aside>
        )
    }
    else {
        return (
            <aside
                style={{ top: `${ notifsTop }%`, overflowY: 'auto' }}
            >
                <h2>Notifications</h2>
                <h3>There are no notifications at the moment</h3>
            </aside>
        )
    }
}

Notifications.propTypes = {
    monTableau: PropTypes.array
}
=======
import { PropTypes } from "prop-types";
import '../../css/Notifications.css'
import { ANotification } from './ANotification'
import { useEffect, useState } from "react";

export function Notifications({ monTableau }) {
    const [notifsTop, setNotifsTop] = useState(11);

    useEffect(() => {
        let lastScrollTop = document.documentElement.scrollTop;

        function handleScroll() {
            const currentScrollTop = document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                if (window.scrollY > 75) {
                    setNotifsTop(1);
                }
                else {
                    setNotifsTop(notifsTop - (window.scrollY / 30));
                }
            }
            else {
                if (window.scrollY < 4) {
                    setNotifsTop(11);
                }
                else {
                    setNotifsTop(notifsTop + (window.scrollY / 30));
                } 
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [notifsTop]);

    if (monTableau.length != 0) {
        return (
            <aside 
            style={{ top: `${ notifsTop }%`, overflowY: 'auto' }}
            >
                <h2>Notifications</h2>
                {
                    monTableau.map((element, index) => (
                        <ANotification notifTitle={ element.title } notifContent={ element.content } key={ index }></ANotification>
                    ))
                }
            </aside>
        )
    }
    else {
        return (
            <aside
                style={{ top: `${ notifsTop }%`, overflowY: 'auto' }}
            >
                <h2>Notifications</h2>
                <h3>There are no notifications at the moment</h3>
            </aside>
        )
    }
}

Notifications.propTypes = {
    monTableau: PropTypes.array
}
>>>>>>> 33462e6a76d83f7474e3c83abf23a3df21c14158
