/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Venice } from "@fern-api/venice";

export interface DeleteTransaction {
    id?: string;
    date?: string;
    description?: string;
    payee?: string;
    amountQuantity?: string;
    amountUnit?: string;
    accountId?: string;
    externalCategory?: string;
    notes?: string;
    splits?: string;
    external?: string;
    updatedAt?: string;
    createdAt?: string;
    /**
     * Preference
     */
    prefer?: Venice.Return;
}
