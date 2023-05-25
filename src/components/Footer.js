import React from "react"

export default function Footer() {
    return (
        <footer>
            <div className="logo">HELLA</div>
            <div className="logo">WORLDWIDE</div>
            <div className="links1">
            <div className="links">
                <div><a href="https://t.me/hellaworldwide">TG</a></div>
                <div><a href="https://vk.com/hellaworldwide">VK</a></div>
            </div>
            </div>
            <div className="text">&copy; All rights reserved.</div>
            <div className="text">info@hellawwide.com</div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928.425567537588!2d49.024360902826984!3d54.984912347166855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415c4d538df1e0b1%3A0x2252ef87f162363b!2z0KDQsNCx0LjQs9CwINCa0YPQu9GM!5e1!3m2!1sru!2sru!4v1684768929443!5m2!1sru!2sru"
                height="250" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div className="marq">
                <marquee>HELLA &copy; ALL RIGHTS RESERVED</marquee>
            </div>
        </footer>
    )
}