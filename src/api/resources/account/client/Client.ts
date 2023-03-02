/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import { Venice } from "@fern-api/venice";
import urlJoin from "url-join";
import * as core from "../../../../core";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Account {
    interface Options {
        environment: environments.VeniceEnvironment | string;
    }
}

export class Account {
    constructor(private readonly options: Account.Options) {}

    /**
     * 	"primary_key_columns": ["id"],
     * 	"totalCount": {"enabled": true},
     * 	"foreign_keys": []
     * })
     */
    public async get(request: Venice.GetAccount = {}): Promise<Venice.Account[]> {
        const {
            id,
            name,
            type,
            lastFour,
            institutionName,
            defaultUnit,
            currentBalance,
            availableBalance,
            external,
            updatedAt,
            createdAt,
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

        if (name != null) {
            _queryParams.append("name", name);
        }

        if (type != null) {
            _queryParams.append("type", type);
        }

        if (lastFour != null) {
            _queryParams.append("last_four", lastFour);
        }

        if (institutionName != null) {
            _queryParams.append("institution_name", institutionName);
        }

        if (defaultUnit != null) {
            _queryParams.append("default_unit", defaultUnit);
        }

        if (currentBalance != null) {
            _queryParams.append("current_balance", currentBalance);
        }

        if (availableBalance != null) {
            _queryParams.append("available_balance", availableBalance);
        }

        if (external != null) {
            _queryParams.append("external", external);
        }

        if (updatedAt != null) {
            _queryParams.append("updated_at", updatedAt);
        }

        if (createdAt != null) {
            _queryParams.append("created_at", createdAt);
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
            url: urlJoin(this.options.environment, "/account"),
            method: "GET",
            headers: {
                Range: range,
                "Range-Unit": rangeUnit,
                Prefer: prefer,
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.account.get.Response.parseOrThrow(
                _response.body as serializers.account.get.Response.Raw,
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

    /**
     * 	"primary_key_columns": ["id"],
     * 	"totalCount": {"enabled": true},
     * 	"foreign_keys": []
     * })
     */
    public async create(request: Venice.CreateAccount): Promise<void> {
        const { select, prefer, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (select != null) {
            _queryParams.append("select", select);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/account"),
            method: "POST",
            headers: {
                Prefer: prefer,
            },
            queryParameters: _queryParams,
            body: await serializers.Account.jsonOrThrow(_body),
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

    /**
     * 	"primary_key_columns": ["id"],
     * 	"totalCount": {"enabled": true},
     * 	"foreign_keys": []
     * })
     */
    public async delete(request: Venice.DeleteAccount = {}): Promise<void> {
        const {
            id,
            name,
            type,
            lastFour,
            institutionName,
            defaultUnit,
            currentBalance,
            availableBalance,
            external,
            updatedAt,
            createdAt,
            prefer,
        } = request;
        const _queryParams = new URLSearchParams();
        if (id != null) {
            _queryParams.append("id", id);
        }

        if (name != null) {
            _queryParams.append("name", name);
        }

        if (type != null) {
            _queryParams.append("type", type);
        }

        if (lastFour != null) {
            _queryParams.append("last_four", lastFour);
        }

        if (institutionName != null) {
            _queryParams.append("institution_name", institutionName);
        }

        if (defaultUnit != null) {
            _queryParams.append("default_unit", defaultUnit);
        }

        if (currentBalance != null) {
            _queryParams.append("current_balance", currentBalance);
        }

        if (availableBalance != null) {
            _queryParams.append("available_balance", availableBalance);
        }

        if (external != null) {
            _queryParams.append("external", external);
        }

        if (updatedAt != null) {
            _queryParams.append("updated_at", updatedAt);
        }

        if (createdAt != null) {
            _queryParams.append("created_at", createdAt);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/account"),
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

    /**
     * 	"primary_key_columns": ["id"],
     * 	"totalCount": {"enabled": true},
     * 	"foreign_keys": []
     * })
     */
    public async update(request: Venice.UpdateAccount): Promise<void> {
        const {
            id,
            name,
            type,
            lastFour,
            institutionName,
            defaultUnit,
            currentBalance,
            availableBalance,
            external,
            updatedAt,
            createdAt,
            prefer,
            body: _body,
        } = request;
        const _queryParams = new URLSearchParams();
        if (id != null) {
            _queryParams.append("id", id);
        }

        if (name != null) {
            _queryParams.append("name", name);
        }

        if (type != null) {
            _queryParams.append("type", type);
        }

        if (lastFour != null) {
            _queryParams.append("last_four", lastFour);
        }

        if (institutionName != null) {
            _queryParams.append("institution_name", institutionName);
        }

        if (defaultUnit != null) {
            _queryParams.append("default_unit", defaultUnit);
        }

        if (currentBalance != null) {
            _queryParams.append("current_balance", currentBalance);
        }

        if (availableBalance != null) {
            _queryParams.append("available_balance", availableBalance);
        }

        if (external != null) {
            _queryParams.append("external", external);
        }

        if (updatedAt != null) {
            _queryParams.append("updated_at", updatedAt);
        }

        if (createdAt != null) {
            _queryParams.append("created_at", createdAt);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/account"),
            method: "PATCH",
            headers: {
                Prefer: prefer,
            },
            queryParameters: _queryParams,
            body: await serializers.Account.jsonOrThrow(_body),
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