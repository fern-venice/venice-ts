/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import { Venice } from "@fern-api/venice";
import urlJoin from "url-join";
import * as core from "../../../../core";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace RawCommodity {
    interface Options {
        environment: environments.VeniceEnvironment | string;
    }
}

export class RawCommodity {
    constructor(private readonly options: RawCommodity.Options) {}

    public async get(request: Venice.GetRawCommodity = {}): Promise<Venice.RawCommodity[]> {
        const {
            id,
            sourceId,
            standard,
            external,
            createdAt,
            updatedAt,
            providerName,
            ledgerResourceId,
            select,
            order,
            offset,
            limit,
            range,
            rangeUnit,
            prefer,
        } = request;
        const _queryParams = new URLSearchParams();
        if (id != null) {
            _queryParams.append("id", id);
        }

        if (sourceId != null) {
            _queryParams.append("source_id", sourceId);
        }

        if (standard != null) {
            _queryParams.append("standard", standard);
        }

        if (external != null) {
            _queryParams.append("external", external);
        }

        if (createdAt != null) {
            _queryParams.append("created_at", createdAt);
        }

        if (updatedAt != null) {
            _queryParams.append("updated_at", updatedAt);
        }

        if (providerName != null) {
            _queryParams.append("provider_name", providerName);
        }

        if (ledgerResourceId != null) {
            _queryParams.append("ledger_resource_id", ledgerResourceId);
        }

        if (select != null) {
            _queryParams.append("select", select);
        }

        if (order != null) {
            _queryParams.append("order", order);
        }

        if (offset != null) {
            _queryParams.append("offset", offset);
        }

        if (limit != null) {
            _queryParams.append("limit", limit);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/raw_commodity"),
            method: "GET",
            headers: {
                Range: range,
                "Range-Unit": rangeUnit,
                Prefer: prefer,
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.rawCommodity.get.Response.parseOrThrow(
                _response.body as serializers.rawCommodity.get.Response.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VeniceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VeniceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VeniceTimeoutError();
            case "unknown":
                throw new errors.VeniceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async create(request: Venice.CreateRawCommodity): Promise<void> {
        const { select, prefer, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (select != null) {
            _queryParams.append("select", select);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/raw_commodity"),
            method: "POST",
            headers: {
                Prefer: prefer,
            },
            queryParameters: _queryParams,
            body: await serializers.RawCommodity.jsonOrThrow(_body),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VeniceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VeniceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VeniceTimeoutError();
            case "unknown":
                throw new errors.VeniceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async delete(request: Venice.DeleteRawCommodity = {}): Promise<void> {
        const { id, sourceId, standard, external, createdAt, updatedAt, providerName, ledgerResourceId, prefer } =
            request;
        const _queryParams = new URLSearchParams();
        if (id != null) {
            _queryParams.append("id", id);
        }

        if (sourceId != null) {
            _queryParams.append("source_id", sourceId);
        }

        if (standard != null) {
            _queryParams.append("standard", standard);
        }

        if (external != null) {
            _queryParams.append("external", external);
        }

        if (createdAt != null) {
            _queryParams.append("created_at", createdAt);
        }

        if (updatedAt != null) {
            _queryParams.append("updated_at", updatedAt);
        }

        if (providerName != null) {
            _queryParams.append("provider_name", providerName);
        }

        if (ledgerResourceId != null) {
            _queryParams.append("ledger_resource_id", ledgerResourceId);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/raw_commodity"),
            method: "DELETE",
            headers: {
                Prefer: prefer,
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VeniceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VeniceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VeniceTimeoutError();
            case "unknown":
                throw new errors.VeniceError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async update(request: Venice.UpdateRawCommodity): Promise<void> {
        const {
            id,
            sourceId,
            standard,
            external,
            createdAt,
            updatedAt,
            providerName,
            ledgerResourceId,
            prefer,
            body: _body,
        } = request;
        const _queryParams = new URLSearchParams();
        if (id != null) {
            _queryParams.append("id", id);
        }

        if (sourceId != null) {
            _queryParams.append("source_id", sourceId);
        }

        if (standard != null) {
            _queryParams.append("standard", standard);
        }

        if (external != null) {
            _queryParams.append("external", external);
        }

        if (createdAt != null) {
            _queryParams.append("created_at", createdAt);
        }

        if (updatedAt != null) {
            _queryParams.append("updated_at", updatedAt);
        }

        if (providerName != null) {
            _queryParams.append("provider_name", providerName);
        }

        if (ledgerResourceId != null) {
            _queryParams.append("ledger_resource_id", ledgerResourceId);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/raw_commodity"),
            method: "PATCH",
            headers: {
                Prefer: prefer,
            },
            queryParameters: _queryParams,
            body: await serializers.RawCommodity.jsonOrThrow(_body),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VeniceError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VeniceError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VeniceTimeoutError();
            case "unknown":
                throw new errors.VeniceError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
