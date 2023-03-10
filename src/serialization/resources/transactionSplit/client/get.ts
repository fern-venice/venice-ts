/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Venice } from "@fern-api/venice";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.transactionSplit.get.Response.Raw,
    Venice.TransactionSplit[]
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).TransactionSplit));

export declare namespace Response {
    type Raw = serializers.TransactionSplit.Raw[];
}
