import { css } from 'lit';

export default css`
    :host,
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :host {
        display: inline-block;
    }

    .btn {
        align-items: center; 
        background-color: var(--btn-bg-color);
        border: var(--btn-border);
        border-radius: var(--btn-border-radius);
        color: var(--btn-color);
        cursor: pointer;
        display: inline-flex;
        font-size: var(--btn-font-size);
        gap: .5rem;
        justify-content: center;
        line-height: 1.5;
        min-width: 80px;
        padding: var(--btn-padding-y) var(--btn-padding-x);
        transition: all .3s ease;

        &:hover,
        &:focus-visible {
            /* we do not set a var for hover colour in product
               if the theme doesn't have a var for it, the fall back will kick in and just darken the current button colour */
            background-color: var(--btn-bg-color-hover, color-mix(in srgb, var(--btn-bg-color) 80%, black 20%));
        }
    }

    .btn:disabled {
        opacity: .4;
        pointer-events: none;
    }

    .btn--primary {
        --btn-bg-color: var(--btn-primary-bg-color);
        --btn-bg-color-hover: var(--btn-primary-bg-color-hover);
        color: var(--btn-primary-color);
    }

    .btn--danger {
        --btn-bg-color: var(--btn-danger-bg-color);
        --btn-bg-color-hover: var(--btn-danger-bg-color-hover);
        color: var(--btn-danger-color);
    }

    .btn--warning {
        --btn-bg-color: var(--btn-warning-bg-color);
        --btn-bg-color-hover: var(--btn-warning-bg-color-hover);
        color: var(--btn-warning-color);
    }

    .btn--success {
        --btn-bg-color: var(--btn-success-bg-color);
        --btn-bg-color-hover: var(--btn-success-bg-color-hover);
        color: var(--btn-success-color);
    }

    .btn--lg,
    .btn--cta {
        font-size: var(--btn-lg-font-size);
        padding: var(--btn-lg-padding-y) var(--btn-lg-padding-x);
    }

    .btn--sm {
        font-size: var(--btn-sm-font-size);
        padding: var(--btn-sm-padding-y) var(--btn-sm-padding-x);
    }

    .btn--full-width {
        width: 100%;
    }
`;