<?php declare(strict_types=1);


namespace Mishusoft\Framework\Chipsets\Http\Errors;


class DataObject
{
    /*Errors records*/
    const builtInHttpErrorsRecords = [
        "100" => [
            "Value" => "100",
            "Description" => "Continue",
            "Info" => "This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.",
            "Reference" => "[RFC7231, Section 6.2.1]"
        ],
        "101" => [
            "Value" => "101",
            "Description" => "Switching Protocols",
            "Info" => "This code is sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to.",
            "Reference" => "[RFC7231, Section 6.2.2]"
        ],
        "102" => [
            "Value" => "102",
            "Description" => "Processing",
            "Info" => "This code indicates that the server has received and is processing the request, but no response is available yet.",
            "Reference" => "[RFC2518]"
        ],
        "103" => [
            "Value" => "103",
            "Description" => "Early Hints",
            "Info" => "This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.",
            "Reference" => "[RFC8297]"
        ],
        "104-199" => [
            "Value" => "104-199",
            "Description" => "Unassigned",
            "Info" => "Unassigned",
            "Reference" => ""
        ],
        "200" => [
            "Value" => "200",
            "Description" => "OK",
            "Info" => "The request has succeeded. The meaning of the success depends on the HTTP method:
            GET: The resource has been fetched and is transmitted in the message body.
            HEAD: The entity headers are in the message body.
            PUT or POST: The resource describing the result of the action is transmitted in the message body.
            TRACE: The message body contains the request message as received by the server.",
            "Reference" => "[RFC7231, Section 6.3.1]"
        ],
        "201" => [
            "Value" => "201",
            "Description" => "Created",
            "Info" => "The request has been fulfilled, and a new resource is created.",
            "Reference" => "[RFC7231, Section 6.3.2]"
        ],
        "202" => [
            "Value" => "202",
            "Description" => "Accepted",
            "Info" => "The request has been accepted for processing, but the processing has not been completed.",
            "Reference" => "[RFC7231, Section 6.3.3]"
        ],
        "203" => [
            "Value" => "203",
            "Description" => "Non-Authoritative Information",
            "Info" => "The request has been successfully processed, but is returning information that may be from another source.",
            "Reference" => "[RFC7231, Section 6.3.4]"
        ],
        "204" => [
            "Value" => "204",
            "Description" => "No Content",
            "Info" => "The request has been successfully processed, but is not returning any content.",
            "Reference" => "[RFC7231, Section 6.3.5]"
        ],
        "205" => [
            "Value" => "205",
            "Description" => "Reset Content",
            "Reference" => "[RFC7231, Section 6.3.6]"
        ],
        "206" => [
            "Value" => "206",
            "Description" => "Partial Content",
            "Reference" => "[RFC7233, Section 4.1]"
        ],
        "207" => [
            "Value" => "207",
            "Description" => "Multi-Status",
            "Reference" => "[RFC4918]"
        ],
        "208" => [
            "Value" => "208",
            "Description" => "Already Reported",
            "Reference" => "[RFC5842]"
        ],
        "209-225" => [
            "Value" => "209-225",
            "Description" => "Unassigned",
            "Reference" => ""
        ],
        "226" => [
            "Value" => "226",
            "Description" => "IM Used",
            "Reference" => "[RFC3229]"
        ],
        "227-299" => [
            "Value" => "227-299",
            "Description" => "Unassigned",
            "Reference" => ""
        ],
        "300" => [
            "Value" => "300",
            "Description" => "Multiple Choices",
            "Reference" => "[RFC7231, Section 6.4.1]"
        ],
        "301" => [
            "Value" => "301",
            "Description" => "Moved Permanently",
            "Reference" => "[RFC7231, Section 6.4.2]"
        ],
        "302" => [
            "Value" => "302",
            "Description" => "Found",
            "Reference" => "[RFC7231, Section 6.4.3]"
        ],
        "303" => [
            "Value" => "303",
            "Description" => "See Other",
            "Reference" => "[RFC7231, Section 6.4.4]"
        ],
        "304" => [
            "Value" => "304",
            "Description" => "Not Modified",
            "Reference" => "[RFC7232, Section 4.1]"
        ],
        "305" => [
            "Value" => "305",
            "Description" => "Use Proxy",
            "Reference" => "[RFC7231, Section 6.4.5]"
        ],
        "306" => [
            "Value" => "306",
            "Description" => "(Unused)",
            "Reference" => "[RFC7231, Section 6.4.6]"
        ],
        "307" => [
            "Value" => "307",
            "Description" => "Temporary Redirect",
            "Reference" => "[RFC7231, Section 6.4.7]"
        ],
        "308" => [
            "Value" => "308",
            "Description" => "Permanent Redirect",
            "Reference" => "[RFC7538]"
        ],
        "309-399" => [
            "Value" => "309-399",
            "Description" => "Unassigned",
            "Reference" => ""
        ],
        "400" => [
            "Value" => "400",
            "Description" => "Bad Request",
            "Reference" => "[RFC7231, Section 6.5.1]"
        ],
        "401" => [
            "Value" => "401",
            "Description" => "Unauthorized",
            "Reference" => "[RFC7235, Section 3.1]"
        ],
        "402" => [
            "Value" => "402",
            "Description" => "Payment Required",
            "Reference" => "[RFC7231, Section 6.5.2]"
        ],
        "403" => [
            "Value" => "403",
            "Description" => "Forbidden",
            "Reference" => "[RFC7231, Section 6.5.3]"
        ],
        "404" => [
            "Value" => "404",
            "Description" => "Not Found",
            "Reference" => "[RFC7231, Section 6.5.4]"
        ],
        "405" => [
            "Value" => "405",
            "Description" => "Method Not Allowed",
            "Reference" => "[RFC7231, Section 6.5.5]"
        ],
        "406" => [
            "Value" => "406",
            "Description" => "Not Acceptable",
            "Reference" => "[RFC7231, Section 6.5.6]"
        ],
        "407" => [
            "Value" => "407",
            "Description" => "Proxy Authentication Required",
            "Reference" => "[RFC7235, Section 3.2]"
        ],
        "408" => [
            "Value" => "408",
            "Description" => "Request Timeout",
            "Reference" => "[RFC7231, Section 6.5.7]"
        ],
        "409" => [
            "Value" => "409",
            "Description" => "Conflict",
            "Reference" => "[RFC7231, Section 6.5.8]"
        ],
        "410" => [
            "Value" => "410",
            "Description" => "Gone",
            "Reference" => "[RFC7231, Section 6.5.9]"
        ],
        "411" => [
            "Value" => "411",
            "Description" => "Length Required",
            "Reference" => "[RFC7231, Section 6.5.10]"
        ],
        "412" => [
            "Value" => "412",
            "Description" => "Precondition Failed",
            "Reference" => "[RFC7232, Section 4.2][RFC8144, Section 3.2]"
        ],
        "413" => [
            "Value" => "413",
            "Description" => "Payload Too Large",
            "Reference" => "[RFC7231, Section 6.5.11]"
        ],
        "414" => [
            "Value" => "414",
            "Description" => "URI Too Long",
            "Reference" => "[RFC7231, Section 6.5.12]"
        ],
        "415" => [
            "Value" => "415",
            "Description" => "Unsupported Media Type",
            "Reference" => "[RFC7231, Section 6.5.13][RFC7694, Section 3]"
        ],
        "416" => [
            "Value" => "416",
            "Description" => "Range Not Satisfiable",
            "Reference" => "[RFC7233, Section 4.4]"
        ],
        "417" => [
            "Value" => "417",
            "Description" => "Expectation Failed",
            "Reference" => "[RFC7231, Section 6.5.14]"
        ],
        "418-420" => [
            "Value" => "418-420",
            "Description" => "Unassigned",
            "Reference" => ""
        ],
        "421" => [
            "Value" => "421",
            "Description" => "Misdirected Request",
            "Reference" => "[RFC7540, Section 9.1.2]"
        ],
        "422" => [
            "Value" => "422",
            "Description" => "Unprocessable Entity",
            "Reference" => "[RFC4918]"
        ],
        "423" => [
            "Value" => "423",
            "Description" => "Locked",
            "Reference" => "[RFC4918]"
        ],
        "424" => [
            "Value" => "424",
            "Description" => "Failed Dependency",
            "Reference" => "[RFC4918]"
        ],
        "425" => [
            "Value" => "425",
            "Description" => "Too Early",
            "Reference" => "[RFC8470]"
        ],
        "426" => [
            "Value" => "426",
            "Description" => "Upgrade Required",
            "Reference" => "[RFC7231, Section 6.5.15]"
        ],
        "427" => [
            "Value" => "427",
            "Description" => "Unassigned",
            "Reference" => ""
        ],
        "428" => [
            "Value" => "428",
            "Description" => "Precondition Required",
            "Reference" => "[RFC6585]"
        ],
        "429" => [
            "Value" => "429",
            "Description" => "Too Many Requests",
            "Reference" => "[RFC6585]"
        ],
        "430" => [
            "Value" => "430",
            "Description" => "Unassigned",
            "Reference" => ""
        ],
        "431" => [
            "Value" => "431",
            "Description" => "Request Header Fields Too Large",
            "Reference" => "[RFC6585]"
        ],
        "432-450" => [
            "Value" => "432-450",
            "Description" => "Unassigned",
            "Reference" => ""
        ],
        "451" => [
            "Value" => "451",
            "Description" => "Unavailable For Legal Reasons",
            "Reference" => "[RFC7725]"
        ],
        "452-499" => [
            "Value" => "452-499",
            "Description" => "Unassigned",
            "Reference" => ""
        ],
        "500" => [
            "Value" => "500",
            "Description" => "Internal Server Error",
            "Reference" => "[RFC7231, Section 6.6.1]"
        ],
        "501" => [
            "Value" => "501",
            "Description" => "Not Implemented",
            "Reference" => "[RFC7231, Section 6.6.2]"
        ],
        "502" => [
            "Value" => "502",
            "Description" => "Bad Gateway",
            "Reference" => "[RFC7231, Section 6.6.3]"
        ],
        "503" => [
            "Value" => "503",
            "Description" => "Service Unavailable",
            "Reference" => "[RFC7231, Section 6.6.4]"
        ],
        "504" => [
            "Value" => "504",
            "Description" => "Gateway Timeout",
            "Reference" => "[RFC7231, Section 6.6.5]"
        ],
        "505" => [
            "Value" => "505",
            "Description" => "HTTP Version Not Supported",
            "Reference" => "[RFC7231, Section 6.6.6]"
        ],
        "506" => [
            "Value" => "506",
            "Description" => "Variant Also Negotiates",
            "Reference" => "[RFC2295]"
        ],
        "507" => [
            "Value" => "507",
            "Description" => "Insufficient Storage",
            "Reference" => "[RFC4918]"
        ],
        "508" => [
            "Value" => "508",
            "Description" => "Loop Detected",
            "Reference" => "[RFC5842]"
        ],
        "509" => [
            "Value" => "509",
            "Description" => "Unassigned",
            "Reference" => ""
        ],
        "510" => [
            "Value" => "510",
            "Description" => "Not Extended",
            "Reference" => "[RFC2774]"
        ],
        "511" => [
            "Value" => "511",
            "Description" => "Network Authentication Required",
            "Reference" => "[RFC6585]"
        ],
        "512-599" => [
            "Value" => "512-599",
            "Description" => "Unassigned",
            "Reference" => ""
        ]
    ];

}