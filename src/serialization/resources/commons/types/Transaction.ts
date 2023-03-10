/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Venice } from "@fern-api/venice";
import * as core from "../../../../core";

export const Transaction: core.serialization.ObjectSchema<serializers.Transaction.Raw, Venice.Transaction> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        date: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
        payee: core.serialization.string().optional(),
        amountQuantity: core.serialization.property("amount_quantity", core.serialization.number().optional()),
        amountUnit: core.serialization.property("amount_unit", core.serialization.string().optional()),
        accountId: core.serialization.property("account_id", core.serialization.string().optional()),
        externalCategory: core.serialization.property("external_category", core.serialization.string().optional()),
        notes: core.serialization.string().optional(),
        splits: core.serialization.unknown().optional(),
        external: core.serialization.unknown().optional(),
        updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
    });

export declare namespace Transaction {
    interface Raw {
        id?: string | null;
        date?: string | null;
        description?: string | null;
        payee?: string | null;
        amount_quantity?: number | null;
        amount_unit?: string | null;
        account_id?: string | null;
        external_category?: string | null;
        notes?: string | null;
        splits?: unknown | null;
        external?: unknown | null;
        updated_at?: string | null;
        created_at?: string | null;
    }
}
