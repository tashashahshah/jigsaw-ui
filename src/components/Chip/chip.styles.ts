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

    .chip {
        background-color: var(--chip-bg-color, var(--bg-color-l1));
        border: var(--chip-border, none);
        border-radius: 16px;
        color: var(--chip-color, var(--color-l1));
        display: inline-block;
        padding: 6px 12px;

         @container style(--state: primary) {
            background-color: var(--primary);
         }

         @container style(--state: warning) {
            background-color: var(--warning);
         }

         @container style(--state: danger) {
            background-color: var(--danger);
         }

         @container style(--state: success) {
            background-color: var(--success);
         }
    }
`;