/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Venice } from "@fern-api/venice";

export interface CreateAccount {
    /**
     * Filtering Columns
     */
    select?: string;
    /**
     * Preference
     */
    prefer?: Venice.Return;
    body: Venice.Account;
}
