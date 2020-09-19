"use strict";
exports.__esModule = true;
var schema = {
    // $id: "",
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "JSONWebKeySet",
    description: "A set of JSON Web Keys, as defined in IETF RFC 7517.",
    type: "object",
    required: [
        "keys",
    ],
    /**
     * From IETF RFC 7517, Section 5:
     * "Additional members can be present in the JWK Set; ..."
     */
    additionalProperties: true,
    properties: {
        keys: {
            type: "array",
            items: {
                "$ref": "#/definitions/JSONWebKey"
            }
        }
    },
    definitions: {
        JSONWebKey: {
            title: "JSONWebKey",
            description: "A single JSON Web Key.",
            type: "object",
            required: [
                "kty",
            ],
            properties: {
                kty: {
                    type: "string",
                    description: "The \"kty\" (key type) parameter identifies the "
                        + "cryptographic algorithm family used with the key, such "
                        + "as \"RSA\" or \"EC\"."
                },
                use: {
                    type: "string",
                    description: "The \"kty\" (key type) parameter identifies the cryptographic algorithm "
                        + "family used with the key, such as \"RSA\" or \"EC\"."
                },
                key_ops: {
                    type: "array",
                    items: {
                        type: "string"
                    },
                    description: "The \"key_ops\" (key operations) parameter identifies the operation(s) "
                        + "for which the key is intended to be used.  The \"key_ops\" parameter is "
                        + "intended for use cases in which public, private, or symmetric keys "
                        + "may be present."
                },
                alg: {
                    type: "string",
                    description: "The \"alg\" (algorithm) parameter identifies the algorithm intended for "
                        + "use with the key."
                },
                kid: {
                    type: "string",
                    description: "The \"kid\" (key ID) parameter is used to match a specific key. This "
                        + "is used, for instance, to choose among a set of keys within a JWK Set "
                        + "during key rollover.  The structure of the \"kid\" value is "
                        + "unspecified."
                },
                x5u: {
                    type: "string",
                    description: "The \"x5u\" (X.509 URL) parameter is a URI that refers to a "
                        + "resource for an X.509 public key certificate or certificate chain."
                },
                x5c: {
                    type: "array",
                    items: {
                        type: "string"
                    },
                    description: "The \"x5c\" (X.509 certificate chain) parameter contains a chain of one "
                        + "or more PKIX certificates [RFC5280].  The certificate chain is "
                        + "represented as a JSON array of certificate value strings."
                },
                x5t: {
                    type: "string",
                    description: "The \"x5t\" (X.509 certificate SHA-1 thumbprint) parameter is a "
                        + "base64url-encoded SHA-1 thumbprint (a.k.a. digest) of the DER "
                        + "encoding of an X.509 certificate."
                },
                "x5t#S256": {
                    type: "string",
                    description: "The \"x5t#S256\" (X.509 certificate SHA-256 thumbprint) parameter is a "
                        + "base64url-encoded SHA-256 thumbprint (a.k.a. digest) of the DER "
                        + "encoding of an X.509 certificate."
                }
            },
            /**
             * From IETF RFC 7517, Section 4:
             * "Additional members can be present in the JWK."
             */
            additionalProperties: true
        }
    }
};
exports["default"] = schema;
