/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A set of JSON Web Keys, as defined in IETF RFC 7517.
 */
export interface JSONWebKeySet {
  keys: JSONWebKey[];
  [k: string]: unknown;
}
/**
 * A single JSON Web Key.
 *
 * This interface was referenced by `JSONWebKeySet`'s JSON-Schema
 * via the `definition` "JSONWebKey".
 */
export interface JSONWebKey {
  /**
   * The "kty" (key type) parameter identifies the cryptographic algorithm family used with the key, such as "RSA" or "EC".
   */
  kty: string;
  /**
   * The "kty" (key type) parameter identifies the cryptographic algorithm family used with the key, such as "RSA" or "EC".
   */
  use?: string;
  /**
   * The "key_ops" (key operations) parameter identifies the operation(s) for which the key is intended to be used.  The "key_ops" parameter is intended for use cases in which public, private, or symmetric keys may be present.
   */
  key_ops?: string[];
  /**
   * The "alg" (algorithm) parameter identifies the algorithm intended for use with the key.
   */
  alg?: string;
  /**
   * The "kid" (key ID) parameter is used to match a specific key. This is used, for instance, to choose among a set of keys within a JWK Set during key rollover.  The structure of the "kid" value is unspecified.
   */
  kid?: string;
  /**
   * The "x5u" (X.509 URL) parameter is a URI that refers to a resource for an X.509 public key certificate or certificate chain.
   */
  x5u?: string;
  /**
   * The "x5c" (X.509 certificate chain) parameter contains a chain of one or more PKIX certificates [RFC5280].  The certificate chain is represented as a JSON array of certificate value strings.
   */
  x5c?: string[];
  /**
   * The "x5t" (X.509 certificate SHA-1 thumbprint) parameter is a base64url-encoded SHA-1 thumbprint (a.k.a. digest) of the DER encoding of an X.509 certificate.
   */
  x5t?: string;
  /**
   * The "x5t#S256" (X.509 certificate SHA-256 thumbprint) parameter is a base64url-encoded SHA-256 thumbprint (a.k.a. digest) of the DER encoding of an X.509 certificate.
   */
  "x5t#S256"?: string;
  [k: string]: unknown;
}
