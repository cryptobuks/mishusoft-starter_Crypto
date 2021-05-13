<?php


namespace Mishusoft\Framework\Chipsets;


use Mishusoft\Framework\Chipsets\Http\Errors\DataObject;

class Http extends DataObject
{
    /*declare version*/
    const VERSION = "1.0.2";


    /*Content from http://en.wikipedia.org/wiki/List_of_HTTP_status_codes*/

    /*Information responses*/
    const __default = self::OK;
    const SWITCHING_PROTOCOLS = 101;
    const PROCESSING = 102; // WebDAV; RFC 2518
    const EARLY_HINTS = 103;
    const CHECKPOINT = 103;

    /*Successful responses*/
    const OK = 200;
    const CREATED = 201;
    const ACCEPTED = 202;
    const NON_AUTHORITATIVE_INFORMATION = 203;
    const NO_CONTENT = 204;
    const RESET_CONTENT = 205;
    const PARTIAL_CONTENT = 206;
    const MULTI_STATUS = 207; // WebDAV; RFC 4918
    const ALREADY_REPORTED = 208; // WebDAV; RFC 5842
    const THIS_IS_FINE = 218; // Apache Web Server
    const IM_USED = 226; // RFC 3229

    /*Redirection messages*/
    const MULTIPLE_CHOICES = 300;
    const MOVED_PERMANENTLY = 301;
    const MOVED_TEMPORARILY = 302;
    const SEE_OTHER = 303;
    const NOT_MODIFIED = 304;
    const USE_PROXY = 305;
    const SWITCH_PROXY = 306;
    const TEMPORARILY_REDIRECT = 307;// since HTTP/1.1
    const PERMANENTLY_REDIRECT = 308;// RFC 7538

    /*Client error responses*/
    const BAD_REQUEST = 400;
    const UNAUTHORIZED = 401; // RFC 7235
    const PAYMENT_REQUIRED = 402;
    const FORBIDDEN = 403;
    const NOT_FOUND = 404;
    const METHOD_NOT_ALLOWED = 405;
    const NOT_ACCEPTABLE = 406;
    const PROXY_AUTHENTICATION_REQUIRED = 407; // RFC 7235
    const REQUEST_TIMEOUT = 408;
    const CONFLICT = 409;
    const GONE = 410;
    const LENGTH_REQUIRED = 411;
    const PRECONDITION_FAILED = 412; // RFC 7232
    const REQUEST_ENTITY_TOO_LARGE = 413; // RFC 7231
    const REQUEST_URI_TOO_LARGE = 414; // RFC 7231
    const UNSUPPORTED_MEDIA_TYPE = 415; // RFC 7231
    const REQUESTED_RANGE_NOT_SATISFIABLE = 416;// RFC 7233
    const EXPECTATION_FAILED = 417;
    const IM_A_TEAPOT = 418;// RFC 2324, RFC 7168
    const PAGE_EXPIRED = 419;// Laravel Framework
    const METHOD_FAILURE = 420;// Spring Framework
    const ENHANCE_YOUR_CALM = 420;// Twitter
    const MISDIRECTED_REQUEST = 421;// RFC 7540
    const UNPROCESSABLE_ENTITY = 422;// WebDAV; RFC 4918
    const LOCKED = 423;// WebDAV; RFC 4918
    const FAILED_DEPENDENCY = 424;// WebDAV; RFC 4918
    const TOO_EARLY = 425;// RFC 8470
    const UPGRADE_REQUIRED = 426;
    const PRECONDITION_REQUIRED = 428;  // RFC 6585
    const TOO_MANY_REQUEST = 429;  // RFC 6585
    const REQUEST_HEADER_FIELDS_TO_LARGE_SHOPIFY = 430;  // Shopify
    const REQUEST_HEADER_FIELDS_TO_LARGE = 431;  // RFC 6585
    const BLOCKED_BY_WINDOWS_PARENTAL_CONTORLS = 450;  // Microsoft
    const UNAVAILABLE_FOR_LEGAL_REASONS = 451;  // RFC 7725
    const INVALID_TOKEN = 498;  // Esri
    const TOKEN_REQUIRED = 499;  // Esri

    /*Server error responses*/
    const INTERNAL_SERVER_ERROR = 500;
    const NOT_IMPLEMENTED = 501;
    const BAD_GATEWAY = 502;
    const SERVICE_UNAVAILABLE = 503;
    const GATEWAY_TIMEOUT = 504;
    const HTTP_VERSION_NOT_SUPPORTED = 505;
    const VARIANT_ALSO_NEGOTIATES = 506; // RFC 2295
    const INSUFFICIENT_STORAGE = 507; // WebDAV; RFC 4918
    const LOOP_DETECTED = 508; // WebDAV; RFC 5842
    const NOT_EXTENDED = 510; // RFC 2774
    const NETWORK_AUTHENTICATION_REQUIRED = 511; // RFC 6585
    const WEB_SERVER_RETURNED_AN_UNKNOWN_ERRORS = 520; // Cloudflare
    const WEB_SERVER_IS_DOWN = 521; // Cloudflare
    const CONNECTION_TIME_OUT = 522; // Cloudflare
    const ORIGIN_IS_UNREACHABLE = 523; // Cloudflare
    const A_TIMEOUT_OCCURRED = 524; // Cloudflare
    const SSL_HANDSHAKE_FAILED = 525; // Cloudflare
    const INVALID_SSL_HANDSHAKE = 526; // Cloudflare
    const RAIL_GUN_ERROR = 527; // Cloudflare

    /**
     * @param string $format
     * @return array|string
     */
    public static function getErrorsRecord(string $format = "array")
    {
        if ($format === "array") {
            return self::builtInHttpErrorsRecords;
        } else {
            if ($format === "object") {
                return json_decode(json_encode(self::builtInHttpErrorsRecords));
            }
        }
        return ["status" => "no_data"];
    }

    /**
     * @param string $description
     * @return int
     */
    public static function getErrorCode(string $description): int
    {
        foreach (self::getErrorsRecord() as $errKey => $details) {
            if (array_key_exists("Description", $details) and strtolower($details["Description"]) === strtolower($description)) {
                return $errKey;
            }
        }
        return self::NOT_FOUND;
    }

    /**
     * @param array $contents
     */
    public static function setHeader(array $contents): void
    {

        /*HTTP::setHeader(array(
            "Access-Control-Allow-Origin"=>"*",
            "Access-Control-Allow-Methods"=>"POST,OPTIONS",
            "Access-Control-Allow-Headers"=>"ms-feedback-data,Accept"
        ));*/

        if (count($contents) > 0) {
            foreach ($contents as $keyword => $value) {
                header("$keyword: $value");
            }
        }
    }

}