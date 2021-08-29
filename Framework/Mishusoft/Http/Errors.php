<?php


namespace Mishusoft\Http;

class Errors
{

    // declare version
    public const VERSION = '1.0.2';


    // Content from http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    // Information responses.
    public const __DEFAULT           = self::OK;
    public const SWITCHING_PROTOCOLS = 101;
    public const PROCESSING          = 102;
    // WebDAV; RFC 2518
    public const EARLY_HINTS = 103;
    public const CHECKPOINT  = 103;

    // Successful responses.
    public const OK       = 200;
    public const CREATED  = 201;
    public const ACCEPTED = 202;
    public const NON_AUTHORITATIVE_INFORMATION = 203;
    public const NO_CONTENT                    = 204;
    public const RESET_CONTENT                 = 205;
    public const PARTIAL_CONTENT               = 206;
    public const MULTI_STATUS                  = 207;
    // WebDAV; RFC 4918.
    public const ALREADY_REPORTED = 208;
    // WebDAV; RFC 5842.
    public const THIS_IS_FINE = 218;
    // Apache Web Server.
    public const IM_USED = 226;
    // RFC 3229.
    // Redirection messages.
    public const MULTIPLE_CHOICES     = 300;
    public const MOVED_PERMANENTLY    = 301;
    public const MOVED_TEMPORARILY    = 302;
    public const SEE_OTHER            = 303;
    public const NOT_MODIFIED         = 304;
    public const USE_PROXY            = 305;
    public const SWITCH_PROXY         = 306;
    public const TEMPORARILY_REDIRECT = 307;
    // since HTTP/1.1.
    public const PERMANENTLY_REDIRECT = 308;
    // RFC 7538
    // Client error responses.
    public const BAD_REQUEST  = 400;
    public const UNAUTHORIZED = 401;
    // RFC 7235.
    public const PAYMENT_REQUIRED   = 402;
    public const FORBIDDEN          = 403;
    public const NOT_FOUND          = 404;
    public const METHOD_NOT_ALLOWED = 405;
    public const NOT_ACCEPTABLE     = 406;
    public const PROXY_AUTHENTICATION_REQUIRED = 407;
    // RFC 7235.
    public const REQUEST_TIMEOUT     = 408;
    public const CONFLICT            = 409;
    public const GONE                = 410;
    public const LENGTH_REQUIRED     = 411;
    public const PRECONDITION_FAILED = 412;
    // RFC 7232.
    public const REQUEST_ENTITY_TOO_LARGE = 413;
    // RFC 7231.
    public const REQUEST_URI_TOO_LARGE = 414;
    // RFC 7231.
    public const UNSUPPORTED_MEDIA_TYPE = 415;
    // RFC 7231.
    public const REQUESTED_RANGE_NOT_SATISFIABLE = 416;
    // RFC 7233.
    public const EXPECTATION_FAILED = 417;
    public const IM_A_TEAPOT        = 418;
    // RFC 2324, RFC 7168.
    public const PAGE_EXPIRED = 419;
    // Laravel Framework.
    public const METHOD_FAILURE = 420;
    // Spring Framework.
    public const ENHANCE_YOUR_CALM = 420;
    // Twitter.
    public const MISDIRECTED_REQUEST = 421;
    // RFC 7540.
    public const UNPROCESSABLE_ENTITY = 422;
    // WebDAV; RFC 4918.
    public const LOCKED = 423;
    // WebDAV; RFC 4918.
    public const FAILED_DEPENDENCY = 424;
    // WebDAV; RFC 4918.
    public const TOO_EARLY = 425;
    // RFC 8470.
    public const UPGRADE_REQUIRED      = 426;
    public const PRECONDITION_REQUIRED = 428;
    // RFC 6585.
    public const TOO_MANY_REQUEST = 429;
    // RFC 6585
    public const REQUEST_HEADER_FIELDS_TO_LARGE_SHOPIFY = 430;
    // Shopify.
    public const REQUEST_HEADER_FIELDS_TO_LARGE = 431;
    // RFC 6585
    public const BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS = 450;
    // Microsoft.
    public const UNAVAILABLE_FOR_LEGAL_REASONS = 451;
    // RFC 7725.
    public const INVALID_TOKEN = 498;
    // Esri.
    public const TOKEN_REQUIRED = 499;
    // Esri.
    // Server error responses.
    public const INTERNAL_SERVER_ERROR      = 500;
    public const NOT_IMPLEMENTED            = 501;
    public const BAD_GATEWAY                = 502;
    public const SERVICE_UNAVAILABLE        = 503;
    public const GATEWAY_TIMEOUT            = 504;
    public const HTTP_VERSION_NOT_SUPPORTED = 505;
    public const VARIANT_ALSO_NEGOTIATES    = 506;
    // RFC 2295.
    public const INSUFFICIENT_STORAGE = 507;
    // WebDAV; RFC 4918.
    public const LOOP_DETECTED = 508;
    // WebDAV; RFC 5842.
    public const NOT_EXTENDED = 510;
    // RFC 2774.
    public const NETWORK_AUTHENTICATION_REQUIRED = 511;
    // RFC 6585.
    public const WEB_SERVER_RETURNED_AN_UNKNOWN_ERRORS = 520;
    // Cloudflare.
    public const WEB_SERVER_IS_DOWN = 521;
    // Cloudflare.
    public const CONNECTION_TIME_OUT = 522;
    // Cloudflare.
    public const ORIGIN_IS_UNREACHABLE = 523;
    // Cloudflare.
    public const A_TIMEOUT_OCCURRED = 524;
    // Cloudflare.
    public const SSL_HANDSHAKE_FAILED = 525;
    // Cloudflare.
    public const INVALID_SSL_HANDSHAKE = 526;
    // Cloudflare.
    public const RAIL_GUN_ERROR = 527;
    // Cloudflare.
    // Errors records.
    public const BUILT_IN_HTTP_ERRORS_RECORDS = [
        '100'     => [
            'Value'       => '100',
            'Description' => 'Continue',
            'Info'        => 'This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.',
            'Reference'   => '[RFC7231, Section 6.2.1]',
        ],
        '101'     => [
            'Value'       => '101',
            'Description' => 'Switching Protocols',
            'Info'        => 'This code is sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to.',
            'Reference'   => '[RFC7231, Section 6.2.2]',
        ],
        '102'     => [
            'Value'       => '102',
            'Description' => 'Processing',
            'Info'        => 'This code indicates that the server has received and is processing the request, but no response is available yet.',
            'Reference'   => '[RFC2518]',
        ],
        '103'     => [
            'Value'       => '103',
            'Description' => 'Early Hints',
            'Info'        => 'This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.',
            'Reference'   => '[RFC8297]',
        ],
        '104-199' => [
            'Value'       => '104-199',
            'Description' => 'Unassigned',
            'Info'        => 'Unassigned',
            'Reference'   => '',
        ],
        '200'     => [
            'Value'       => '200',
            'Description' => 'OK',
            'Info'        => 'The request has succeeded. The meaning of the success depends on the HTTP method:
            GET: The resource has been fetched and is transmitted in the message body.
            HEAD: The entity headers are in the message body.
            PUT or POST: The resource describing the result of the action is transmitted in the message body.
            TRACE: The message body contains the request message as received by the server.',
            'Reference'   => '[RFC7231, Section 6.3.1]',
        ],
        '201'     => [
            'Value'       => '201',
            'Description' => 'Created',
            'Info'        => 'The request has been fulfilled, and a new resource is created.',
            'Reference'   => '[RFC7231, Section 6.3.2]',
        ],
        '202'     => [
            'Value'       => '202',
            'Description' => 'Accepted',
            'Info'        => 'The request has been accepted for processing, but the processing has not been completed.',
            'Reference'   => '[RFC7231, Section 6.3.3]',
        ],
        '203'     => [
            'Value'       => '203',
            'Description' => 'Non-Authoritative Information',
            'Info'        => 'The request has been successfully processed, but is returning information that may be from another source.',
            'Reference'   => '[RFC7231, Section 6.3.4]',
        ],
        '204'     => [
            'Value'       => '204',
            'Description' => 'No Content',
            'Info'        => 'The request has been successfully processed, but is not returning any content.',
            'Reference'   => '[RFC7231, Section 6.3.5]',
        ],
        '205'     => [
            'Value'       => '205',
            'Description' => 'Reset Content',
            'Reference'   => '[RFC7231, Section 6.3.6]',
        ],
        '206'     => [
            'Value'       => '206',
            'Description' => 'Partial Content',
            'Reference'   => '[RFC7233, Section 4.1]',
        ],
        '207'     => [
            'Value'       => '207',
            'Description' => 'Multi-Status',
            'Reference'   => '[RFC4918]',
        ],
        '208'     => [
            'Value'       => '208',
            'Description' => 'Already Reported',
            'Reference'   => '[RFC5842]',
        ],
        '209-225' => [
            'Value'       => '209-225',
            'Description' => 'Unassigned',
            'Reference'   => '',
        ],
        '226'     => [
            'Value'       => '226',
            'Description' => 'IM Used',
            'Reference'   => '[RFC3229]',
        ],
        '227-299' => [
            'Value'       => '227-299',
            'Description' => 'Unassigned',
            'Reference'   => '',
        ],
        '300'     => [
            'Value'       => '300',
            'Description' => 'Multiple Choices',
            'Reference'   => '[RFC7231, Section 6.4.1]',
        ],
        '301'     => [
            'Value'       => '301',
            'Description' => 'Moved Permanently',
            'Reference'   => '[RFC7231, Section 6.4.2]',
        ],
        '302'     => [
            'Value'       => '302',
            'Description' => 'Found',
            'Reference'   => '[RFC7231, Section 6.4.3]',
        ],
        '303'     => [
            'Value'       => '303',
            'Description' => 'See Other',
            'Reference'   => '[RFC7231, Section 6.4.4]',
        ],
        '304'     => [
            'Value'       => '304',
            'Description' => 'Not Modified',
            'Reference'   => '[RFC7232, Section 4.1]',
        ],
        '305'     => [
            'Value'       => '305',
            'Description' => 'Use Proxy',
            'Reference'   => '[RFC7231, Section 6.4.5]',
        ],
        '306'     => [
            'Value'       => '306',
            'Description' => '(Unused)',
            'Reference'   => '[RFC7231, Section 6.4.6]',
        ],
        '307'     => [
            'Value'       => '307',
            'Description' => 'Temporary Redirect',
            'Reference'   => '[RFC7231, Section 6.4.7]',
        ],
        '308'     => [
            'Value'       => '308',
            'Description' => 'Permanent Redirect',
            'Reference'   => '[RFC7538]',
        ],
        '309-399' => [
            'Value'       => '309-399',
            'Description' => 'Unassigned',
            'Reference'   => '',
        ],
        '400'     => [
            'Value'       => '400',
            'Description' => 'Bad Request',
            'Reference'   => '[RFC7231, Section 6.5.1]',
        ],
        '401'     => [
            'Value'       => '401',
            'Description' => 'Unauthorized',
            'Reference'   => '[RFC7235, Section 3.1]',
        ],
        '402'     => [
            'Value'       => '402',
            'Description' => 'Payment Required',
            'Reference'   => '[RFC7231, Section 6.5.2]',
        ],
        '403'     => [
            'Value'       => '403',
            'Description' => 'Forbidden',
            'Reference'   => '[RFC7231, Section 6.5.3]',
        ],
        '404'     => [
            'Value'       => '404',
            'Description' => 'Not Found',
            'Reference'   => '[RFC7231, Section 6.5.4]',
        ],
        '405'     => [
            'Value'       => '405',
            'Description' => 'Method Not Allowed',
            'Reference'   => '[RFC7231, Section 6.5.5]',
        ],
        '406'     => [
            'Value'       => '406',
            'Description' => 'Not Acceptable',
            'Reference'   => '[RFC7231, Section 6.5.6]',
        ],
        '407'     => [
            'Value'       => '407',
            'Description' => 'Proxy Authentication Required',
            'Reference'   => '[RFC7235, Section 3.2]',
        ],
        '408'     => [
            'Value'       => '408',
            'Description' => 'Request Timeout',
            'Reference'   => '[RFC7231, Section 6.5.7]',
        ],
        '409'     => [
            'Value'       => '409',
            'Description' => 'Conflict',
            'Reference'   => '[RFC7231, Section 6.5.8]',
        ],
        '410'     => [
            'Value'       => '410',
            'Description' => 'Gone',
            'Reference'   => '[RFC7231, Section 6.5.9]',
        ],
        '411'     => [
            'Value'       => '411',
            'Description' => 'Length Required',
            'Reference'   => '[RFC7231, Section 6.5.10]',
        ],
        '412'     => [
            'Value'       => '412',
            'Description' => 'Precondition Failed',
            'Reference'   => '[RFC7232, Section 4.2][RFC8144, Section 3.2]',
        ],
        '413'     => [
            'Value'       => '413',
            'Description' => 'Payload Too Large',
            'Reference'   => '[RFC7231, Section 6.5.11]',
        ],
        '414'     => [
            'Value'       => '414',
            'Description' => 'URI Too Long',
            'Reference'   => '[RFC7231, Section 6.5.12]',
        ],
        '415'     => [
            'Value'       => '415',
            'Description' => 'Unsupported Media Type',
            'Reference'   => '[RFC7231, Section 6.5.13][RFC7694, Section 3]',
        ],
        '416'     => [
            'Value'       => '416',
            'Description' => 'Range Not Satisfiable',
            'Reference'   => '[RFC7233, Section 4.4]',
        ],
        '417'     => [
            'Value'       => '417',
            'Description' => 'Expectation Failed',
            'Reference'   => '[RFC7231, Section 6.5.14]',
        ],
        '418-420' => [
            'Value'       => '418-420',
            'Description' => 'Unassigned',
            'Reference'   => '',
        ],
        '421'     => [
            'Value'       => '421',
            'Description' => 'Misdirected Request',
            'Reference'   => '[RFC7540, Section 9.1.2]',
        ],
        '422'     => [
            'Value'       => '422',
            'Description' => 'Unprocessable Entity',
            'Reference'   => '[RFC4918]',
        ],
        '423'     => [
            'Value'       => '423',
            'Description' => 'Locked',
            'Reference'   => '[RFC4918]',
        ],
        '424'     => [
            'Value'       => '424',
            'Description' => 'Failed Dependency',
            'Reference'   => '[RFC4918]',
        ],
        '425'     => [
            'Value'       => '425',
            'Description' => 'Too Early',
            'Reference'   => '[RFC8470]',
        ],
        '426'     => [
            'Value'       => '426',
            'Description' => 'Upgrade Required',
            'Reference'   => '[RFC7231, Section 6.5.15]',
        ],
        '427'     => [
            'Value'       => '427',
            'Description' => 'Unassigned',
            'Reference'   => '',
        ],
        '428'     => [
            'Value'       => '428',
            'Description' => 'Precondition Required',
            'Reference'   => '[RFC6585]',
        ],
        '429'     => [
            'Value'       => '429',
            'Description' => 'Too Many Requests',
            'Reference'   => '[RFC6585]',
        ],
        '430'     => [
            'Value'       => '430',
            'Description' => 'Unassigned',
            'Reference'   => '',
        ],
        '431'     => [
            'Value'       => '431',
            'Description' => 'Request Header Fields Too Large',
            'Reference'   => '[RFC6585]',
        ],
        '432-450' => [
            'Value'       => '432-450',
            'Description' => 'Unassigned',
            'Reference'   => '',
        ],
        '451'     => [
            'Value'       => '451',
            'Description' => 'Unavailable For Legal Reasons',
            'Reference'   => '[RFC7725]',
        ],
        '452-499' => [
            'Value'       => '452-499',
            'Description' => 'Unassigned',
            'Reference'   => '',
        ],
        '500'     => [
            'Value'       => '500',
            'Description' => 'Internal Server Error',
            'Reference'   => '[RFC7231, Section 6.6.1]',
        ],
        '501'     => [
            'Value'       => '501',
            'Description' => 'Not Implemented',
            'Reference'   => '[RFC7231, Section 6.6.2]',
        ],
        '502'     => [
            'Value'       => '502',
            'Description' => 'Bad Gateway',
            'Reference'   => '[RFC7231, Section 6.6.3]',
        ],
        '503'     => [
            'Value'       => '503',
            'Description' => 'Service Unavailable',
            'Reference'   => '[RFC7231, Section 6.6.4]',
        ],
        '504'     => [
            'Value'       => '504',
            'Description' => 'Gateway Timeout',
            'Reference'   => '[RFC7231, Section 6.6.5]',
        ],
        '505'     => [
            'Value'       => '505',
            'Description' => 'HTTP Version Not Supported',
            'Reference'   => '[RFC7231, Section 6.6.6]',
        ],
        '506'     => [
            'Value'       => '506',
            'Description' => 'Variant Also Negotiates',
            'Reference'   => '[RFC2295]',
        ],
        '507'     => [
            'Value'       => '507',
            'Description' => 'Insufficient Storage',
            'Reference'   => '[RFC4918]',
        ],
        '508'     => [
            'Value'       => '508',
            'Description' => 'Loop Detected',
            'Reference'   => '[RFC5842]',
        ],
        '509'     => [
            'Value'       => '509',
            'Description' => 'Unassigned',
            'Reference'   => '',
        ],
        '510'     => [
            'Value'       => '510',
            'Description' => 'Not Extended',
            'Reference'   => '[RFC2774]',
        ],
        '511'     => [
            'Value'       => '511',
            'Description' => 'Network Authentication Required',
            'Reference'   => '[RFC6585]',
        ],
        '512-599' => [
            'Value'       => '512-599',
            'Description' => 'Unassigned',
            'Reference'   => '',
        ],
    ];
}//end class
