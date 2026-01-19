import { css } from 'lit';

export default css`
    :host,
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :host {
        display: block;
    }

    /*
        --card-bg-color - theme can ovewrite, else we fall back to --bg-color-l1
    */


    .card {
        background-color: var(--card-bg-color, var(--bg-color-l1));
        border: var(--card-border, var(--border-l1));
        border-radius: var(--card-border-radius, 8px);
        box-shadow: var(--card-box-shadow, none);
        color: var(--card-color, var(--color-l1));
        overflow: hidden;
        transition: box-shadow .3s ease;
        
        /* Debug info overlay */
        position: relative;

        @container style(--theme: light) {
            --card-debug: 'Light theme card';  
        }

        @container style(--theme: dark) {
            --card-debug: 'Dark theme card';  
        }
    }

    .card__thumbnail {
        width: 100%;
        height: 200px;
        overflow: hidden;
    }

    .card__thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .card__body {
        padding: 1.5rem;
    }

    .card__title {
        margin: 0 0 1rem 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--card-title-color, inherit);
    }

    .card__content {
        margin: 0;
        line-height: 1.6;
    }
    
    .card::before {
        content:  var(--card-debug);  
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 10px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 4px;
        border-radius: 3px;
        pointer-events: none;
        max-width: 200px;
        word-break: break-all;
        z-index: 10;
    }

    ::slotted([slot="title"]) {
        color: var(--card-title-color, inherit);
    }

    .card:hover {
        box-shadow: var(--card-box-shadow-hover, var(--shadow-hover));
    }
`;  