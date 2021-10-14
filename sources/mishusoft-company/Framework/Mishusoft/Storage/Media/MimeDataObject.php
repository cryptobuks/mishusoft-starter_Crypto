<?php


namespace Mishusoft\Storage\Media;


class MimeDataObject
{

    /*add intelligent constants*/
    public const dataVersion = '17052021';

    /*all mime list in categories*/
    /*applications mime list in single constant*/
    public const Applications = [
        [
            "extension" => "1d-interleaved-parityfec",
            "type" => "application/1d-interleaved-parityfec",
            "Reference" => "[RFC6015]"
        ],
        [
            "extension" => "3gpdash-qoe-report+xml",
            "type" => "application/3gpdash-qoe-report+xml",
            "Reference" => "[_3GPP][Ozgur_Oyman]"
        ],
        [
            "extension" => "3gpp-ims+xml",
            "type" => "application/3gpp-ims+xml",
            "Reference" => "[John_M_Meredith]"
        ],
        [
            "extension" => "A2L",
            "type" => "application/A2L",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "activemessage",
            "type" => "application/activemessage",
            "Reference" => "[Ehud_Shapiro]"
        ],
        [
            "extension" => "activity+json",
            "type" => "application/activity+json",
            "Reference" => "[W3C][Benjamin_Goering]"
        ],
        [
            "extension" => "alto-costmap+json",
            "type" => "application/alto-costmap+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-costmapfilter+json",
            "type" => "application/alto-costmapfilter+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-directory+json",
            "type" => "application/alto-directory+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-endpointprop+json",
            "type" => "application/alto-endpointprop+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-endpointpropparams+json",
            "type" => "application/alto-endpointpropparams+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-endpointcost+json",
            "type" => "application/alto-endpointcost+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-endpointcostparams+json",
            "type" => "application/alto-endpointcostparams+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-error+json",
            "type" => "application/alto-error+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-networkmapfilter+json",
            "type" => "application/alto-networkmapfilter+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-networkmap+json",
            "type" => "application/alto-networkmap+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-updatestreamcontrol+json",
            "type" => "application/alto-updatestreamcontrol+json",
            "Reference" => "[RFC-ietf-alto-incr-update-sse-22]"
        ],
        [
            "extension" => "alto-updatestreamparams+json",
            "type" => "application/alto-updatestreamparams+json",
            "Reference" => "[RFC-ietf-alto-incr-update-sse-22]"
        ],
        [
            "extension" => "AML",
            "type" => "application/AML",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "andrew-inset",
            "type" => "application/andrew-inset",
            "Reference" => "[Nathaniel_Borenstein]"
        ],
        [
            "extension" => "applefile",
            "type" => "application/applefile",
            "Reference" => "[Patrik_Faltstrom]"
        ],
        [
            "extension" => "ATF",
            "type" => "application/ATF",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "ATFX",
            "type" => "application/ATFX",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "atom+xml",
            "type" => "application/atom+xml",
            "Reference" => "[RFC4287][RFC5023]"
        ],
        [
            "extension" => "atomcat+xml",
            "type" => "application/atomcat+xml",
            "Reference" => "[RFC5023]"
        ],
        [
            "extension" => "atomdeleted+xml",
            "type" => "application/atomdeleted+xml",
            "Reference" => "[RFC6721]"
        ],
        [
            "extension" => "atomicmail",
            "type" => "application/atomicmail",
            "Reference" => "[Nathaniel_Borenstein]"
        ],
        [
            "extension" => "atomsvc+xml",
            "type" => "application/atomsvc+xml",
            "Reference" => "[RFC5023]"
        ],
        [
            "extension" => "atsc-dwd+xml",
            "type" => "application/atsc-dwd+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "atsc-dynamic-event-message",
            "type" => "application/atsc-dynamic-event-message",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "atsc-held+xml",
            "type" => "application/atsc-held+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "atsc-rdt+json",
            "type" => "application/atsc-rdt+json",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "atsc-rsat+xml",
            "type" => "application/atsc-rsat+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "ATXML",
            "type" => "application/ATXML",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "auth-policy+xml",
            "type" => "application/auth-policy+xml",
            "Reference" => "[RFC4745]"
        ],
        [
            "extension" => "bacnet-xdd+zip",
            "type" => "application/bacnet-xdd+zip",
            "Reference" => "[ASHRAE][Dave_Robin]"
        ],
        [
            "extension" => "batch-SMTP",
            "type" => "application/batch-SMTP",
            "Reference" => "[RFC2442]"
        ],
        [
            "extension" => "beep+xml",
            "type" => "application/beep+xml",
            "Reference" => "[RFC3080]"
        ],
        [
            "extension" => "calendar+json",
            "type" => "application/calendar+json",
            "Reference" => "[RFC7265]"
        ],
        [
            "extension" => "calendar+xml",
            "type" => "application/calendar+xml",
            "Reference" => "[RFC6321]"
        ],
        [
            "extension" => "call-completion",
            "type" => "application/call-completion",
            "Reference" => "[RFC6910]"
        ],
        [
            "extension" => "CALS-1840",
            "type" => "application/CALS-1840",
            "Reference" => "[RFC1895]"
        ],
        [
            "extension" => "captive+json",
            "type" => "application/captive+json",
            "Reference" => "[RFC-ietf-capport-api-08]"
        ],
        [
            "extension" => "cbor",
            "type" => "application/cbor",
            "Reference" => "[RFC7049]"
        ],
        [
            "extension" => "cbor-seq",
            "type" => "application/cbor-seq",
            "Reference" => "[RFC8742]"
        ],
        [
            "extension" => "cccex",
            "type" => "application/cccex",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "ccmp+xml",
            "type" => "application/ccmp+xml",
            "Reference" => "[RFC6503]"
        ],
        [
            "extension" => "ccxml+xml",
            "type" => "application/ccxml+xml",
            "Reference" => "[RFC4267]"
        ],
        [
            "extension" => "CDFX+XML",
            "type" => "application/CDFX+XML",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "cdmi-capability",
            "type" => "application/cdmi-capability",
            "Reference" => "[RFC6208]"
        ],
        [
            "extension" => "cdmi-container",
            "type" => "application/cdmi-container",
            "Reference" => "[RFC6208]"
        ],
        [
            "extension" => "cdmi-domain",
            "type" => "application/cdmi-domain",
            "Reference" => "[RFC6208]"
        ],
        [
            "extension" => "cdmi-object",
            "type" => "application/cdmi-object",
            "Reference" => "[RFC6208]"
        ],
        [
            "extension" => "cdmi-queue",
            "type" => "application/cdmi-queue",
            "Reference" => "[RFC6208]"
        ],
        [
            "extension" => "cdni",
            "type" => "application/cdni",
            "Reference" => "[RFC7736]"
        ],
        [
            "extension" => "CEA",
            "type" => "application/CEA",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "cea-2018+xml",
            "type" => "application/cea-2018+xml",
            "Reference" => "[Gottfried_Zimmermann]"
        ],
        [
            "extension" => "cellml+xml",
            "type" => "application/cellml+xml",
            "Reference" => "[RFC4708]"
        ],
        [
            "extension" => "cfw",
            "type" => "application/cfw",
            "Reference" => "[RFC6230]"
        ],
        [
            "extension" => "clue_info+xml",
            "type" => "application/clue_info+xml",
            "Reference" => "[RFC-ietf-clue-data-model-schema-17]"
        ],
        [
            "extension" => "clue+xml",
            "type" => "application/clue+xml",
            "Reference" => "[RFC-ietf-clue-protocol-19]"
        ],
        [
            "extension" => "cms",
            "type" => "application/cms",
            "Reference" => "[RFC7193]"
        ],
        [
            "extension" => "cnrp+xml",
            "type" => "application/cnrp+xml",
            "Reference" => "[RFC3367]"
        ],
        [
            "extension" => "coap-group+json",
            "type" => "application/coap-group+json",
            "Reference" => "[RFC7390]"
        ],
        [
            "extension" => "coap-payload",
            "type" => "application/coap-payload",
            "Reference" => "[RFC8075]"
        ],
        [
            "extension" => "commonground",
            "type" => "application/commonground",
            "Reference" => "[David_Glazer]"
        ],
        [
            "extension" => "conference-info+xml",
            "type" => "application/conference-info+xml",
            "Reference" => "[RFC4575]"
        ],
        [
            "extension" => "cpl+xml",
            "type" => "application/cpl+xml",
            "Reference" => "[RFC3880]"
        ],
        [
            "extension" => "cose",
            "type" => "application/cose",
            "Reference" => "[RFC8152]"
        ],
        [
            "extension" => "cose-key",
            "type" => "application/cose-key",
            "Reference" => "[RFC8152]"
        ],
        [
            "extension" => "cose-key-set",
            "type" => "application/cose-key-set",
            "Reference" => "[RFC8152]"
        ],
        [
            "extension" => "csrattrs",
            "type" => "application/csrattrs",
            "Reference" => "[RFC7030]"
        ],
        [
            "extension" => "csta+xml",
            "type" => "application/csta+xml",
            "Reference" => "[Ecma_International_Helpdesk]"
        ],
        [
            "extension" => "CSTAdata+xml",
            "type" => "application/CSTAdata+xml",
            "Reference" => "[Ecma_International_Helpdesk]"
        ],
        [
            "extension" => "csvm+json",
            "type" => "application/csvm+json",
            "Reference" => "[W3C][Ivan_Herman]"
        ],
        [
            "extension" => "cwt",
            "type" => "application/cwt",
            "Reference" => "[RFC8392]"
        ],
        [
            "extension" => "cybercash",
            "type" => "application/cybercash",
            "Reference" => "[Donald_E._Eastlake_3rd]"
        ],
        [
            "extension" => "dash+xml",
            "type" => "application/dash+xml",
            "Reference" => "[Thomas_Stockhammer][ISO-IEC_JTC1]"
        ],
        [
            "extension" => "dashdelta",
            "type" => "application/dashdelta",
            "Reference" => "[David_Furbeck]"
        ],
        [
            "extension" => "davmount+xml",
            "type" => "application/davmount+xml",
            "Reference" => "[RFC4709]"
        ],
        [
            "extension" => "dca-rft",
            "type" => "application/dca-rft",
            "Reference" => "[Larry_Campbell]"
        ],
        [
            "extension" => "DCD",
            "type" => "application/DCD",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "dec-dx",
            "type" => "application/dec-dx",
            "Reference" => "[Larry_Campbell]"
        ],
        [
            "extension" => "dialog-info+xml",
            "type" => "application/dialog-info+xml",
            "Reference" => "[RFC4235]"
        ],
        [
            "extension" => "dicom",
            "type" => "application/dicom",
            "Reference" => "[RFC3240]"
        ],
        [
            "extension" => "dicom+json",
            "type" => "application/dicom+json",
            "Reference" => "[DICOM_Standards_Committee][David_Clunie][James_F_Philbin]"
        ],
        [
            "extension" => "dicom+xml",
            "type" => "application/dicom+xml",
            "Reference" => "[DICOM_Standards_Committee][David_Clunie][James_F_Philbin]"
        ],
        [
            "extension" => "DII",
            "type" => "application/DII",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "DIT",
            "type" => "application/DIT",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "dns",
            "type" => "application/dns",
            "Reference" => "[RFC4027]"
        ],
        [
            "extension" => "dns+json",
            "type" => "application/dns+json",
            "Reference" => "[RFC8427]"
        ],
        [
            "extension" => "dns-message",
            "type" => "application/dns-message",
            "Reference" => "[RFC8484]"
        ],
        [
            "extension" => "dots+cbor",
            "type" => "application/dots+cbor",
            "Reference" => "[RFC8782]"
        ],
        [
            "extension" => "dskpp+xml",
            "type" => "application/dskpp+xml",
            "Reference" => "[RFC6063]"
        ],
        [
            "extension" => "dssc+der",
            "type" => "application/dssc+der",
            "Reference" => "[RFC5698]"
        ],
        [
            "extension" => "dssc+xml",
            "type" => "application/dssc+xml",
            "Reference" => "[RFC5698]"
        ],
        [
            "extension" => "dvcs",
            "type" => "application/dvcs",
            "Reference" => "[RFC3029]"
        ],
        [
            "extension" => "ecmascript",
            "type" => "application/ecmascript",
            "Reference" => "[RFC4329]"
        ],
        [
            "extension" => "EDI-consent",
            "type" => "application/EDI-consent",
            "Reference" => "[RFC1767]"
        ],
        [
            "extension" => "EDIFACT",
            "type" => "application/EDIFACT",
            "Reference" => "[RFC1767]"
        ],
        [
            "extension" => "EDI-X12",
            "type" => "application/EDI-X12",
            "Reference" => "[RFC1767]"
        ],
        [
            "extension" => "efi",
            "type" => "application/efi",
            "Reference" => "[UEFI_Forum][Samer_El-Haj-Mahmoud]"
        ],
        [
            "extension" => "EmergencyCallData.cap+xml",
            "type" => "application/EmergencyCallData.cap+xml",
            "Reference" => "[RFC-ietf-ecrit-data-only-ea-22]"
        ],
        [
            "extension" => "EmergencyCallData.Comment+xml",
            "type" => "application/EmergencyCallData.Comment+xml",
            "Reference" => "[RFC7852]"
        ],
        [
            "extension" => "EmergencyCallData.Control+xml",
            "type" => "application/EmergencyCallData.Control+xml",
            "Reference" => "[RFC8147]"
        ],
        [
            "extension" => "EmergencyCallData.DeviceInfo+xml",
            "type" => "application/EmergencyCallData.DeviceInfo+xml",
            "Reference" => "[RFC7852]"
        ],
        [
            "extension" => "EmergencyCallData.eCall.MSD",
            "type" => "application/EmergencyCallData.eCall.MSD",
            "Reference" => "[RFC8147]"
        ],
        [
            "extension" => "EmergencyCallData.ProviderInfo+xml",
            "type" => "application/EmergencyCallData.ProviderInfo+xml",
            "Reference" => "[RFC7852]"
        ],
        [
            "extension" => "EmergencyCallData.ServiceInfo+xml",
            "type" => "application/EmergencyCallData.ServiceInfo+xml",
            "Reference" => "[RFC7852]"
        ],
        [
            "extension" => "EmergencyCallData.SubscriberInfo+xml",
            "type" => "application/EmergencyCallData.SubscriberInfo+xml",
            "Reference" => "[RFC7852]"
        ],
        [
            "extension" => "EmergencyCallData.VEDS+xml",
            "type" => "application/EmergencyCallData.VEDS+xml",
            "Reference" => "[RFC8148]"
        ],
        [
            "extension" => "emma+xml",
            "type" => "application/emma+xml",
            "Reference" => "[W3C][http=>//www.w3.org/TR/2007/CR-emma-20071211/#media-type-registration][ISO-IEC_JTC1]"
        ],
        [
            "extension" => "emotionml+xml",
            "type" => "application/emotionml+xml",
            "Reference" => "[W3C][Kazuyuki_Ashimura]"
        ],
        [
            "extension" => "encaprtp",
            "type" => "application/encaprtp",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "epp+xml",
            "type" => "application/epp+xml",
            "Reference" => "[RFC5730]"
        ],
        [
            "extension" => "epub+zip",
            "type" => "application/epub+zip",
            "Reference" => "[International_Digital_Publishing_Forum][William_McCoy]"
        ],
        [
            "extension" => "eshop",
            "type" => "application/eshop",
            "Reference" => "[Steve_Katz]"
        ],
        [
            "extension" => "example",
            "type" => "application/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "exi",
            "type" => "application/exi",
            "Reference" => "[W3C][http=>//www.w3.org/TR/2009/CR-exi-20091208/#mediaTypeRegistration]"
        ],
        [
            "extension" => "expect-ct-report+json",
            "type" => "application/expect-ct-report+json",
            "Reference" => "[RFC-ietf-httpbis-expect-ct-08]"
        ],
        [
            "extension" => "fastinfoset",
            "type" => "application/fastinfoset",
            "Reference" => "[ITU-T_ASN.1_Rapporteur]"
        ],
        [
            "extension" => "fastsoap",
            "type" => "application/fastsoap",
            "Reference" => "[ITU-T_ASN.1_Rapporteur]"
        ],
        [
            "extension" => "fdt+xml",
            "type" => "application/fdt+xml",
            "Reference" => "[RFC6726]"
        ],
        [
            "extension" => "fhir+json",
            "type" => "application/fhir+json",
            "Reference" => "[HL7][Grahame_Grieve]"
        ],
        [
            "extension" => "fhir+xml",
            "type" => "application/fhir+xml",
            "Reference" => "[HL7][Grahame_Grieve]"
        ],
        [
            "extension" => "fits",
            "type" => "application/fits",
            "Reference" => "[RFC4047]"
        ],
        [
            "extension" => "flexfec",
            "type" => "application/flexfec",
            "Reference" => "[RFC8627]"
        ],
        [
            "extension" => "font-sfnt - DEPRECATED in favor of font/sfnt",
            "type" => "application/font-sfnt",
            "Reference" => "[Levantovsky][ISO-IEC_JTC1][RFC8081]"
        ],
        [
            "extension" => "font-tdpfr",
            "type" => "application/font-tdpfr",
            "Reference" => "[RFC3073]"
        ],
        [
            "extension" => "font-woff - DEPRECATED in favor of font/woff",
            "type" => "application/font-woff",
            "Reference" => "[W3C][RFC8081]"
        ],
        [
            "extension" => "framework-attributes+xml",
            "type" => "application/framework-attributes+xml",
            "Reference" => "[RFC6230]"
        ],
        [
            "extension" => "geo+json",
            "type" => "application/geo+json",
            "Reference" => "[RFC7946]"
        ],
        [
            "extension" => "geo+json-seq",
            "type" => "application/geo+json-seq",
            "Reference" => "[RFC8142]"
        ],
        [
            "extension" => "geopackage+sqlite3",
            "type" => "application/geopackage+sqlite3",
            "Reference" => "[OGC][Scott_Simmons]"
        ],
        [
            "extension" => "geoxacml+xml",
            "type" => "application/geoxacml+xml",
            "Reference" => "[OGC][Scott_Simmons]"
        ],
        [
            "extension" => "gltf-buffer",
            "type" => "application/gltf-buffer",
            "Reference" => "[Khronos][Saurabh_Bhatia]"
        ],
        [
            "extension" => "gml+xml",
            "type" => "application/gml+xml",
            "Reference" => "[OGC][Clemens_Portele]"
        ],
        [
            "extension" => "gzip",
            "type" => "application/gzip",
            "Reference" => "[RFC6713]"
        ],
        [
            "extension" => "H224",
            "type" => "application/H224",
            "Reference" => "[RFC4573]"
        ],
        [
            "extension" => "held+xml",
            "type" => "application/held+xml",
            "Reference" => "[RFC5985]"
        ],
        [
            "extension" => "http",
            "type" => "application/http",
            "Reference" => "[RFC7230]"
        ],
        [
            "extension" => "hyperstudio",
            "type" => "application/hyperstudio",
            "Reference" => "[Michael_Domino]"
        ],
        [
            "extension" => "ibe-key-request+xml",
            "type" => "application/ibe-key-request+xml",
            "Reference" => "[RFC5408]"
        ],
        [
            "extension" => "ibe-pkg-reply+xml",
            "type" => "application/ibe-pkg-reply+xml",
            "Reference" => "[RFC5408]"
        ],
        [
            "extension" => "ibe-pp-data",
            "type" => "application/ibe-pp-data",
            "Reference" => "[RFC5408]"
        ],
        [
            "extension" => "iges",
            "type" => "application/iges",
            "Reference" => "[Curtis_Parks]"
        ],
        [
            "extension" => "im-iscomposing+xml",
            "type" => "application/im-iscomposing+xml",
            "Reference" => "[RFC3994]"
        ],
        [
            "extension" => "index",
            "type" => "application/index",
            "Reference" => "[RFC2652]"
        ],
        [
            "extension" => "index.cmd",
            "type" => "application/index.cmd",
            "Reference" => "[RFC2652]"
        ],
        [
            "extension" => "index.obj",
            "type" => "application/index.obj",
            "Reference" => "[RFC2652]"
        ],
        [
            "extension" => "index.response",
            "type" => "application/index.response",
            "Reference" => "[RFC2652]"
        ],
        [
            "extension" => "index.vnd",
            "type" => "application/index.vnd",
            "Reference" => "[RFC2652]"
        ],
        [
            "extension" => "inkml+xml",
            "type" => "application/inkml+xml",
            "Reference" => "[Kazuyuki_Ashimura]"
        ],
        [
            "extension" => "IOTP",
            "type" => "application/IOTP",
            "Reference" => "[RFC2935]"
        ],
        [
            "extension" => "ipfix",
            "type" => "application/ipfix",
            "Reference" => "[RFC5655]"
        ],
        [
            "extension" => "ipp",
            "type" => "application/ipp",
            "Reference" => "[RFC8010]"
        ],
        [
            "extension" => "ISUP",
            "type" => "application/ISUP",
            "Reference" => "[RFC3204]"
        ],
        [
            "extension" => "its+xml",
            "type" => "application/its+xml",
            "Reference" => "[W3C][ITS-IG-W3C]"
        ],
        [
            "extension" => "javascript",
            "type" => "application/javascript",
            "Reference" => "[RFC4329]"
        ],
        [
            "extension" => "jf2feed+json",
            "type" => "application/jf2feed+json",
            "Reference" => "[W3C][Ivan_Herman]"
        ],
        [
            "extension" => "jose",
            "type" => "application/jose",
            "Reference" => "[RFC7515]"
        ],
        [
            "extension" => "jose+json",
            "type" => "application/jose+json",
            "Reference" => "[RFC7515]"
        ],
        [
            "extension" => "jrd+json",
            "type" => "application/jrd+json",
            "Reference" => "[RFC7033]"
        ],
        [
            "extension" => "map",
            "type" => "application/json",
            "Reference" => "[RFC8259]"
        ],
        [
            "extension" => "json",
            "type" => "application/json",
            "Reference" => "[RFC8259]"
        ],
        [
            "extension" => "json-patch+json",
            "type" => "application/json-patch+json",
            "Reference" => "[RFC6902]"
        ],
        [
            "extension" => "json-seq",
            "type" => "application/json-seq",
            "Reference" => "[RFC7464]"
        ],
        [
            "extension" => "jwk+json",
            "type" => "application/jwk+json",
            "Reference" => "[RFC7517]"
        ],
        [
            "extension" => "jwk-set+json",
            "type" => "application/jwk-set+json",
            "Reference" => "[RFC7517]"
        ],
        [
            "extension" => "jwt",
            "type" => "application/jwt",
            "Reference" => "[RFC7519]"
        ],
        [
            "extension" => "kpml-request+xml",
            "type" => "application/kpml-request+xml",
            "Reference" => "[RFC4730]"
        ],
        [
            "extension" => "kpml-response+xml",
            "type" => "application/kpml-response+xml",
            "Reference" => "[RFC4730]"
        ],
        [
            "extension" => "ld+json",
            "type" => "application/ld+json",
            "Reference" => "[W3C][Ivan_Herman]"
        ],
        [
            "extension" => "lgr+xml",
            "type" => "application/lgr+xml",
            "Reference" => "[RFC7940]"
        ],
        [
            "extension" => "link-format",
            "type" => "application/link-format",
            "Reference" => "[RFC6690]"
        ],
        [
            "extension" => "load-control+xml",
            "type" => "application/load-control+xml",
            "Reference" => "[RFC7200]"
        ],
        [
            "extension" => "lost+xml",
            "type" => "application/lost+xml",
            "Reference" => "[RFC5222]"
        ],
        [
            "extension" => "lostsync+xml",
            "type" => "application/lostsync+xml",
            "Reference" => "[RFC6739]"
        ],
        [
            "extension" => "lpf+zip",
            "type" => "application/lpf+zip",
            "Reference" => "[W3C][Ivan_Herman]"
        ],
        [
            "extension" => "LXF",
            "type" => "application/LXF",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "mac-binhex40",
            "type" => "application/mac-binhex40",
            "Reference" => "[Patrik_Faltstrom]"
        ],
        [
            "extension" => "macwriteii",
            "type" => "application/macwriteii",
            "Reference" => "[Paul_Lindner]"
        ],
        [
            "extension" => "mads+xml",
            "type" => "application/mads+xml",
            "Reference" => "[RFC6207]"
        ],
        [
            "extension" => "marc",
            "type" => "application/marc",
            "Reference" => "[RFC2220]"
        ],
        [
            "extension" => "marcxml+xml",
            "type" => "application/marcxml+xml",
            "Reference" => "[RFC6207]"
        ],
        [
            "extension" => "mathematica",
            "type" => "application/mathematica",
            "Reference" => "[Wolfram]"
        ],
        [
            "extension" => "mathml+xml",
            "type" => "application/mathml+xml",
            "Reference" => "[W3C][http=>//www.w3.org/TR/MathML3/appendixb.html]"
        ],
        [
            "extension" => "mathml-content+xml",
            "type" => "application/mathml-content+xml",
            "Reference" => "[W3C][http=>//www.w3.org/TR/MathML3/appendixb.html]"
        ],
        [
            "extension" => "mathml-presentation+xml",
            "type" => "application/mathml-presentation+xml",
            "Reference" => "[W3C][http=>//www.w3.org/TR/MathML3/appendixb.html]"
        ],
        [
            "extension" => "mbms-associated-procedure-description+xml",
            "type" => "application/mbms-associated-procedure-description+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-deregister+xml",
            "type" => "application/mbms-deregister+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-envelope+xml",
            "type" => "application/mbms-envelope+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-msk-response+xml",
            "type" => "application/mbms-msk-response+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-msk+xml",
            "type" => "application/mbms-msk+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-protection-description+xml",
            "type" => "application/mbms-protection-description+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-reception-report+xml",
            "type" => "application/mbms-reception-report+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-register-response+xml",
            "type" => "application/mbms-register-response+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-register+xml",
            "type" => "application/mbms-register+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-schedule+xml",
            "type" => "application/mbms-schedule+xml",
            "Reference" => "[_3GPP][Eric_Turcotte]"
        ],
        [
            "extension" => "mbms-user-service-description+xml",
            "type" => "application/mbms-user-service-description+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbox",
            "type" => "application/mbox",
            "Reference" => "[RFC4155]"
        ],
        [
            "extension" => "media_control+xml",
            "type" => "application/media_control+xml",
            "Reference" => "[RFC5168]"
        ],
        [
            "extension" => "media-policy-dataset+xml",
            "type" => "application/media-policy-dataset+xml",
            "Reference" => "[RFC6796]"
        ],
        [
            "extension" => "mediaservercontrol+xml",
            "type" => "application/mediaservercontrol+xml",
            "Reference" => "[RFC5022]"
        ],
        [
            "extension" => "merge-patch+json",
            "type" => "application/merge-patch+json",
            "Reference" => "[RFC7396]"
        ],
        [
            "extension" => "metalink4+xml",
            "type" => "application/metalink4+xml",
            "Reference" => "[RFC5854]"
        ],
        [
            "extension" => "mets+xml",
            "type" => "application/mets+xml",
            "Reference" => "[RFC6207]"
        ],
        [
            "extension" => "MF4",
            "type" => "application/MF4",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "mikey",
            "type" => "application/mikey",
            "Reference" => "[RFC3830]"
        ],
        [
            "extension" => "mipc",
            "type" => "application/mipc",
            "Reference" => "[NCGIS][Bryan_Blank]"
        ],
        [
            "extension" => "mmt-aei+xml",
            "type" => "application/mmt-aei+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "mmt-usd+xml",
            "type" => "application/mmt-usd+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "mods+xml",
            "type" => "application/mods+xml",
            "Reference" => "[RFC6207]"
        ],
        [
            "extension" => "moss-keys",
            "type" => "application/moss-keys",
            "Reference" => "[RFC1848]"
        ],
        [
            "extension" => "moss-signature",
            "type" => "application/moss-signature",
            "Reference" => "[RFC1848]"
        ],
        [
            "extension" => "mosskey-data",
            "type" => "application/mosskey-data",
            "Reference" => "[RFC1848]"
        ],
        [
            "extension" => "mosskey-request",
            "type" => "application/mosskey-request",
            "Reference" => "[RFC1848]"
        ],
        [
            "extension" => "mp21",
            "type" => "application/mp21",
            "Reference" => "[RFC6381][David_Singer]"
        ],
        [
            "extension" => "mp4",
            "type" => "application/mp4",
            "Reference" => "[RFC4337][RFC6381]"
        ],
        [
            "extension" => "mpeg4-generic",
            "type" => "application/mpeg4-generic",
            "Reference" => "[RFC3640]"
        ],
        [
            "extension" => "mpeg4-iod",
            "type" => "application/mpeg4-iod",
            "Reference" => "[RFC4337]"
        ],
        [
            "extension" => "mpeg4-iod-xmt",
            "type" => "application/mpeg4-iod-xmt",
            "Reference" => "[RFC4337]"
        ],
        [
            "extension" => "mrb-consumer+xml",
            "type" => "application/mrb-consumer+xml",
            "Reference" => "[RFC6917]"
        ],
        [
            "extension" => "mrb-publish+xml",
            "type" => "application/mrb-publish+xml",
            "Reference" => "[RFC6917]"
        ],
        [
            "extension" => "msc-ivr+xml",
            "type" => "application/msc-ivr+xml",
            "Reference" => "[RFC6231]"
        ],
        [
            "extension" => "msc-mixer+xml",
            "type" => "application/msc-mixer+xml",
            "Reference" => "[RFC6505]"
        ],
        [
            "extension" => "msword",
            "type" => "application/msword",
            "Reference" => "[Paul_Lindner]"
        ],
        [
            "extension" => "mud+json",
            "type" => "application/mud+json",
            "Reference" => "[RFC8520]"
        ],
        [
            "extension" => "multipart-core",
            "type" => "application/multipart-core",
            "Reference" => "[RFC8710]"
        ],
        [
            "extension" => "mxf",
            "type" => "application/mxf",
            "Reference" => "[RFC4539]"
        ],
        [
            "extension" => "n-quads",
            "type" => "application/n-quads",
            "Reference" => "[W3C][Eric_Prudhommeaux]"
        ],
        [
            "extension" => "n-triples",
            "type" => "application/n-triples",
            "Reference" => "[W3C][Eric_Prudhommeaux]"
        ],
        [
            "extension" => "nasdata",
            "type" => "application/nasdata",
            "Reference" => "[RFC4707]"
        ],
        [
            "extension" => "news-checkgroups",
            "type" => "application/news-checkgroups",
            "Reference" => "[RFC5537]"
        ],
        [
            "extension" => "news-groupinfo",
            "type" => "application/news-groupinfo",
            "Reference" => "[RFC5537]"
        ],
        [
            "extension" => "news-transmission",
            "type" => "application/news-transmission",
            "Reference" => "[RFC5537]"
        ],
        [
            "extension" => "nlsml+xml",
            "type" => "application/nlsml+xml",
            "Reference" => "[RFC6787]"
        ],
        [
            "extension" => "node",
            "type" => "application/node",
            "Reference" => "[Node.js_TSC]"
        ],
        [
            "extension" => "nss",
            "type" => "application/nss",
            "Reference" => "[Michael_Hammer]"
        ],
        [
            "extension" => "ocsp-request",
            "type" => "application/ocsp-request",
            "Reference" => "[RFC6960]"
        ],
        [
            "extension" => "ocsp-response",
            "type" => "application/ocsp-response",
            "Reference" => "[RFC6960]"
        ],
        [
            "extension" => "octet-stream",
            "type" => "application/octet-stream",
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "ODA",
            "type" => "application/ODA",
            "Reference" => "[RFC1494]"
        ],
        [
            "extension" => "odm+xml",
            "type" => "application/odm+xml",
            "Reference" => "[CDISC][Sam_Hume]"
        ],
        [
            "extension" => "ODX",
            "type" => "application/ODX",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "oebps-package+xml",
            "type" => "application/oebps-package+xml",
            "Reference" => "[RFC4839]"
        ],
        [
            "extension" => "ogg",
            "type" => "application/ogg",
            "Reference" => "[RFC5334][RFC7845]"
        ],
        [
            "extension" => "opc-nodeset+xml",
            "type" => "application/opc-nodeset+xml",
            "Reference" => "[OPC_Foundation]"
        ],
        [
            "extension" => "oscore",
            "type" => "application/oscore",
            "Reference" => "[RFC8613]"
        ],
        [
            "extension" => "oxps",
            "type" => "application/oxps",
            "Reference" => "[Ecma_International_Helpdesk]"
        ],
        [
            "extension" => "p2p-overlay+xml",
            "type" => "application/p2p-overlay+xml",
            "Reference" => "[RFC6940]"
        ],
        [
            "extension" => "parityfec",
            "type" => null,
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "passport",
            "type" => "application/passport",
            "Reference" => "[RFC8225]"
        ],
        [
            "extension" => "patch-ops-error+xml",
            "type" => "application/patch-ops-error+xml",
            "Reference" => "[RFC5261]"
        ],
        [
            "extension" => "pdf",
            "type" => "application/pdf",
            "Reference" => "[RFC8118]"
        ],
        [
            "extension" => "PDX",
            "type" => "application/PDX",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "pem-certificate-chain",
            "type" => "application/pem-certificate-chain",
            "Reference" => "[RFC8555]"
        ],
        [
            "extension" => "pgp-encrypted",
            "type" => "application/pgp-encrypted",
            "Reference" => "[RFC3156]"
        ],
        [
            "extension" => "pgp-keys",
            "type" => "application/pgp-keys",
            "Reference" => "[RFC3156]"
        ],
        [
            "extension" => "pgp-signature",
            "type" => "application/pgp-signature",
            "Reference" => "[RFC3156]"
        ],
        [
            "extension" => "pidf-diff+xml",
            "type" => "application/pidf-diff+xml",
            "Reference" => "[RFC5262]"
        ],
        [
            "extension" => "pidf+xml",
            "type" => "application/pidf+xml",
            "Reference" => "[RFC3863]"
        ],
        [
            "extension" => "pkcs10",
            "type" => "application/pkcs10",
            "Reference" => "[RFC5967]"
        ],
        [
            "extension" => "pkcs7-mime",
            "type" => "application/pkcs7-mime",
            "Reference" => "[RFC8551][RFC7114]"
        ],
        [
            "extension" => "pkcs7-signature",
            "type" => "application/pkcs7-signature",
            "Reference" => "[RFC8551]"
        ],
        [
            "extension" => "pkcs8",
            "type" => "application/pkcs8",
            "Reference" => "[RFC5958]"
        ],
        [
            "extension" => "pkcs8-encrypted",
            "type" => "application/pkcs8-encrypted",
            "Reference" => "[RFC8351]"
        ],
        [
            "extension" => "pkcs12",
            "type" => "application/pkcs12",
            "Reference" => "[IETF]"
        ],
        [
            "extension" => "pkix-attr-cert",
            "type" => "application/pkix-attr-cert",
            "Reference" => "[RFC5877]"
        ],
        [
            "extension" => "pkix-cert",
            "type" => "application/pkix-cert",
            "Reference" => "[RFC2585]"
        ],
        [
            "extension" => "pkix-crl",
            "type" => "application/pkix-crl",
            "Reference" => "[RFC2585]"
        ],
        [
            "extension" => "pkix-pkipath",
            "type" => "application/pkix-pkipath",
            "Reference" => "[RFC6066]"
        ],
        [
            "extension" => "pkixcmp",
            "type" => "application/pkixcmp",
            "Reference" => "[RFC2510]"
        ],
        [
            "extension" => "pls+xml",
            "type" => "application/pls+xml",
            "Reference" => "[RFC4267]"
        ],
        [
            "extension" => "poc-settings+xml",
            "type" => "application/poc-settings+xml",
            "Reference" => "[RFC4354]"
        ],
        [
            "extension" => "postscript",
            "type" => "application/postscript",
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "ppsp-tracker+json",
            "type" => "application/ppsp-tracker+json",
            "Reference" => "[RFC7846]"
        ],
        [
            "extension" => "problem+json",
            "type" => "application/problem+json",
            "Reference" => "[RFC7807]"
        ],
        [
            "extension" => "problem+xml",
            "type" => "application/problem+xml",
            "Reference" => "[RFC7807]"
        ],
        [
            "extension" => "provenance+xml",
            "type" => "application/provenance+xml",
            "Reference" => "[W3C][Ivan_Herman]"
        ],
        [
            "extension" => "prs.alvestrand.titrax-sheet",
            "type" => "application/prs.alvestrand.titrax-sheet",
            "Reference" => "[Harald_T._Alvestrand]"
        ],
        [
            "extension" => "prs.cww",
            "type" => "application/prs.cww",
            "Reference" => "[Khemchart_Rungchavalnont]"
        ],
        [
            "extension" => "prs.hpub+zip",
            "type" => "application/prs.hpub+zip",
            "Reference" => "[Giulio_Zambon]"
        ],
        [
            "extension" => "prs.nprend",
            "type" => "application/prs.nprend",
            "Reference" => "[Jay_Doggett]"
        ],
        [
            "extension" => "prs.plucker",
            "type" => "application/prs.plucker",
            "Reference" => "[Bill_Janssen]"
        ],
        [
            "extension" => "prs.rdf-xml-crypt",
            "type" => "application/prs.rdf-xml-crypt",
            "Reference" => "[Toby_Inkster]"
        ],
        [
            "extension" => "prs.xsf+xml",
            "type" => "application/prs.xsf+xml",
            "Reference" => "[Maik_Stührenberg]"
        ],
        [
            "extension" => "pskc+xml",
            "type" => "application/pskc+xml",
            "Reference" => "[RFC6030]"
        ],
        [
            "extension" => "pvd+json",
            "type" => "application/pvd+json",
            "Reference" => "[RFC8801]"
        ],
        [
            "extension" => "rdf+xml",
            "type" => "application/rdf+xml",
            "Reference" => "[RFC3870]"
        ],
        [
            "extension" => "route-apd+xml",
            "type" => "application/route-apd+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "route-s-tsid+xml",
            "type" => "application/route-s-tsid+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "route-usd+xml",
            "type" => "application/route-usd+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "QSIG",
            "type" => "application/QSIG",
            "Reference" => "[RFC3204]"
        ],
        [
            "extension" => "raptorfec",
            "type" => "application/raptorfec",
            "Reference" => "[RFC6682]"
        ],
        [
            "extension" => "rdap+json",
            "type" => "application/rdap+json",
            "Reference" => "[RFC7483]"
        ],
        [
            "extension" => "reginfo+xml",
            "type" => "application/reginfo+xml",
            "Reference" => "[RFC3680]"
        ],
        [
            "extension" => "relax-ng-compact-syntax",
            "type" => "application/relax-ng-compact-syntax",
            "Reference" => "[http=>//www.jtc1sc34.org/repository/0661.pdf]"
        ],
        [
            "extension" => "remote-printing",
            "type" => "application/remote-printing",
            "Reference" => "[RFC1486][Marshall_Rose]"
        ],
        [
            "extension" => "reputon+json",
            "type" => "application/reputon+json",
            "Reference" => "[RFC7071]"
        ],
        [
            "extension" => "resource-lists-diff+xml",
            "type" => "application/resource-lists-diff+xml",
            "Reference" => "[RFC5362]"
        ],
        [
            "extension" => "resource-lists+xml",
            "type" => "application/resource-lists+xml",
            "Reference" => "[RFC4826]"
        ],
        [
            "extension" => "rfc+xml",
            "type" => "application/rfc+xml",
            "Reference" => "[RFC7991]"
        ],
        [
            "extension" => "riscos",
            "type" => "application/riscos",
            "Reference" => "[Nick_Smith]"
        ],
        [
            "extension" => "rlmi+xml",
            "type" => "application/rlmi+xml",
            "Reference" => "[RFC4662]"
        ],
        [
            "extension" => "rls-services+xml",
            "type" => "application/rls-services+xml",
            "Reference" => "[RFC4826]"
        ],
        [
            "extension" => "rpki-ghostbusters",
            "type" => "application/rpki-ghostbusters",
            "Reference" => "[RFC6493]"
        ],
        [
            "extension" => "rpki-manifest",
            "type" => "application/rpki-manifest",
            "Reference" => "[RFC6481]"
        ],
        [
            "extension" => "rpki-publication",
            "type" => "application/rpki-publication",
            "Reference" => "[RFC8181]"
        ],
        [
            "extension" => "rpki-roa",
            "type" => "application/rpki-roa",
            "Reference" => "[RFC6481]"
        ],
        [
            "extension" => "rpki-updown",
            "type" => "application/rpki-updown",
            "Reference" => "[RFC6492]"
        ],
        [
            "extension" => "rtf",
            "type" => "application/rtf",
            "Reference" => "[Paul_Lindner]"
        ],
        [
            "extension" => "rtploopback",
            "type" => "application/rtploopback",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "rtx",
            "type" => "application/rtx",
            "Reference" => "[RFC4588]"
        ],
        [
            "extension" => "samlassertion+xml",
            "type" => "application/samlassertion+xml",
            "Reference" => "[OASIS_Security_Services_Technical_Committee_SSTC]"
        ],
        [
            "extension" => "samlmetadata+xml",
            "type" => "application/samlmetadata+xml",
            "Reference" => "[OASIS_Security_Services_Technical_Committee_SSTC]"
        ],
        [
            "extension" => "sarif+json",
            "type" => "application/sarif+json",
            "Reference" => "[OASIS][Michael_C._Fanning][Laurence_J._Golding]"
        ],
        [
            "extension" => "sbe",
            "type" => "application/sbe",
            "Reference" => "[FIX_Trading_Community][Donald_L._Mendelson]"
        ],
        [
            "extension" => "sbml+xml",
            "type" => "application/sbml+xml",
            "Reference" => "[RFC3823]"
        ],
        [
            "extension" => "scaip+xml",
            "type" => "application/scaip+xml",
            "Reference" => "[SIS][Oskar_Jonsson]"
        ],
        [
            "extension" => "scim+json",
            "type" => "application/scim+json",
            "Reference" => "[RFC7644]"
        ],
        [
            "extension" => "scvp-cv-request",
            "type" => "application/scvp-cv-request",
            "Reference" => "[RFC5055]"
        ],
        [
            "extension" => "scvp-cv-response",
            "type" => "application/scvp-cv-response",
            "Reference" => "[RFC5055]"
        ],
        [
            "extension" => "scvp-vp-request",
            "type" => "application/scvp-vp-request",
            "Reference" => "[RFC5055]"
        ],
        [
            "extension" => "scvp-vp-response",
            "type" => "application/scvp-vp-response",
            "Reference" => "[RFC5055]"
        ],
        [
            "extension" => "sdp",
            "type" => "application/sdp",
            "Reference" => "[RFC-ietf-mmusic-rfc4566bis-37]"
        ],
        [
            "extension" => "secevent+jwt",
            "type" => "application/secevent+jwt",
            "Reference" => "[RFC8417]"
        ],
        [
            "extension" => "senml-etch+cbor",
            "type" => "application/senml-etch+cbor",
            "Reference" => "[RFC8790]"
        ],
        [
            "extension" => "senml-etch+json",
            "type" => "application/senml-etch+json",
            "Reference" => "[RFC8790]"
        ],
        [
            "extension" => "senml-exi",
            "type" => "application/senml-exi",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "senml+cbor",
            "type" => "application/senml+cbor",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "senml+json",
            "type" => "application/senml+json",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "senml+xml",
            "type" => "application/senml+xml",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "sensml-exi",
            "type" => "application/sensml-exi",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "sensml+cbor",
            "type" => "application/sensml+cbor",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "sensml+json",
            "type" => "application/sensml+json",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "sensml+xml",
            "type" => "application/sensml+xml",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "sep-exi",
            "type" => "application/sep-exi",
            "Reference" => "[Robby_Simpson][ZigBee]"
        ],
        [
            "extension" => "sep+xml",
            "type" => "application/sep+xml",
            "Reference" => "[Robby_Simpson][ZigBee]"
        ],
        [
            "extension" => "session-info",
            "type" => "application/session-info",
            "Reference" => "[_3GPP][Frederic_Firmin]"
        ],
        [
            "extension" => "set-payment",
            "type" => "application/set-payment",
            "Reference" => "[Brian_Korver]"
        ],
        [
            "extension" => "set-payment-initiation",
            "type" => "application/set-payment-initiation",
            "Reference" => "[Brian_Korver]"
        ],
        [
            "extension" => "set-registration",
            "type" => "application/set-registration",
            "Reference" => "[Brian_Korver]"
        ],
        [
            "extension" => "set-registration-initiation",
            "type" => "application/set-registration-initiation",
            "Reference" => "[Brian_Korver]"
        ],
        [
            "extension" => "SGML",
            "type" => "application/SGML",
            "Reference" => "[RFC1874]"
        ],
        [
            "extension" => "sgml-open-catalog",
            "type" => "application/sgml-open-catalog",
            "Reference" => "[Paul_Grosso]"
        ],
        [
            "extension" => "shf+xml",
            "type" => "application/shf+xml",
            "Reference" => "[RFC4194]"
        ],
        [
            "extension" => "sieve",
            "type" => "application/sieve",
            "Reference" => "[RFC5228]"
        ],
        [
            "extension" => "simple-filter+xml",
            "type" => "application/simple-filter+xml",
            "Reference" => "[RFC4661]"
        ],
        [
            "extension" => "simple-message-summary",
            "type" => "application/simple-message-summary",
            "Reference" => "[RFC3842]"
        ],
        [
            "extension" => "simpleSymbolContainer",
            "type" => "application/simpleSymbolContainer",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "sipc",
            "type" => "application/sipc",
            "Reference" => "[NCGIS][Bryan_Blank]"
        ],
        [
            "extension" => "slate",
            "type" => "application/slate",
            "Reference" => "[Terry_Crowley]"
        ],
        [
            "extension" => "smil - OBSOLETED in favor of application/smil+xml",
            "type" => "application/smil",
            "Reference" => "[RFC4536]"
        ],
        [
            "extension" => "smil+xml",
            "type" => "application/smil+xml",
            "Reference" => "[RFC4536]"
        ],
        [
            "extension" => "smpte336m",
            "type" => "application/smpte336m",
            "Reference" => "[RFC6597]"
        ],
        [
            "extension" => "soap+fastinfoset",
            "type" => "application/soap+fastinfoset",
            "Reference" => "[ITU-T_ASN.1_Rapporteur]"
        ],
        [
            "extension" => "soap+xml",
            "type" => "application/soap+xml",
            "Reference" => "[RFC3902]"
        ],
        [
            "extension" => "sparql-query",
            "type" => "application/sparql-query",
            "Reference" => "[W3C][http=>//www.w3.org/TR/2007/CR-rdf-sparql-query-20070614/#mediaType]"
        ],
        [
            "extension" => "sparql-results+xml",
            "type" => "application/sparql-results+xml",
            "Reference" => "[W3C][http=>//www.w3.org/TR/2007/CR-rdf-sparql-XMLres-20070925/#mime]"
        ],
        [
            "extension" => "spirits-event+xml",
            "type" => "application/spirits-event+xml",
            "Reference" => "[RFC3910]"
        ],
        [
            "extension" => "sql",
            "type" => "application/sql",
            "Reference" => "[RFC6922]"
        ],
        [
            "extension" => "srgs",
            "type" => "application/srgs",
            "Reference" => "[RFC4267]"
        ],
        [
            "extension" => "srgs+xml",
            "type" => "application/srgs+xml",
            "Reference" => "[RFC4267]"
        ],
        [
            "extension" => "sru+xml",
            "type" => "application/sru+xml",
            "Reference" => "[RFC6207]"
        ],
        [
            "extension" => "ssml+xml",
            "type" => "application/ssml+xml",
            "Reference" => "[RFC4267]"
        ],
        [
            "extension" => "stix+json",
            "type" => "application/stix+json",
            "Reference" => "[OASIS][Chet_Ensign]"
        ],
        [
            "extension" => "swid+xml",
            "type" => "application/swid+xml",
            "Reference" => "[ISO-IEC_JTC1][David_Waltermire][Ron_Brill]"
        ],
        [
            "extension" => "tamp-apex-update",
            "type" => "application/tamp-apex-update",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-apex-update-confirm",
            "type" => "application/tamp-apex-update-confirm",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-community-update",
            "type" => "application/tamp-community-update",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-community-update-confirm",
            "type" => "application/tamp-community-update-confirm",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-error",
            "type" => "application/tamp-error",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-sequence-adjust",
            "type" => "application/tamp-sequence-adjust",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-sequence-adjust-confirm",
            "type" => "application/tamp-sequence-adjust-confirm",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-status-query",
            "type" => "application/tamp-status-query",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-status-response",
            "type" => "application/tamp-status-response",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-update",
            "type" => "application/tamp-update",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-update-confirm",
            "type" => "application/tamp-update-confirm",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "taxii+json",
            "type" => "application/taxii+json",
            "Reference" => "[OASIS][Chet_Ensign]"
        ],
        [
            "extension" => "td+json",
            "type" => "application/td+json",
            "Reference" => "[W3C][Matthias_Kovatsch]"
        ],
        [
            "extension" => "tei+xml",
            "type" => "application/tei+xml",
            "Reference" => "[RFC6129]"
        ],
        [
            "extension" => "TETRA_ISI",
            "type" => "application/TETRA_ISI",
            "Reference" => "[ETSI][Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "thraud+xml",
            "type" => "application/thraud+xml",
            "Reference" => "[RFC5941]"
        ],
        [
            "extension" => "timestamp-query",
            "type" => "application/timestamp-query",
            "Reference" => "[RFC3161]"
        ],
        [
            "extension" => "timestamp-reply",
            "type" => "application/timestamp-reply",
            "Reference" => "[RFC3161]"
        ],
        [
            "extension" => "timestamped-data",
            "type" => "application/timestamped-data",
            "Reference" => "[RFC5955]"
        ],
        [
            "extension" => "tlsrpt+gzip",
            "type" => "application/tlsrpt+gzip",
            "Reference" => "[RFC8460]"
        ],
        [
            "extension" => "tlsrpt+json",
            "type" => "application/tlsrpt+json",
            "Reference" => "[RFC8460]"
        ],
        [
            "extension" => "tnauthlist",
            "type" => "application/tnauthlist",
            "Reference" => "[RFC8226]"
        ],
        [
            "extension" => "trickle-ice-sdpfrag",
            "type" => "application/trickle-ice-sdpfrag",
            "Reference" => "[RFC-ietf-mmusic-trickle-ice-sip-18]"
        ],
        [
            "extension" => "trig",
            "type" => "application/trig",
            "Reference" => "[W3C][W3C_RDF_Working_Group]"
        ],
        [
            "extension" => "ttml+xml",
            "type" => "application/ttml+xml",
            "Reference" => "[W3C][W3C_Timed_Text_Working_Group]"
        ],
        [
            "extension" => "tve-trigger",
            "type" => "application/tve-trigger",
            "Reference" => "[Linda_Welsh]"
        ],
        [
            "extension" => "tzif",
            "type" => "application/tzif",
            "Reference" => "[RFC8536]"
        ],
        [
            "extension" => "tzif-leap",
            "type" => "application/tzif-leap",
            "Reference" => "[RFC8536]"
        ],
        [
            "extension" => "ulpfec",
            "type" => "application/ulpfec",
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "urc-grpsheet+xml",
            "type" => "application/urc-grpsheet+xml",
            "Reference" => "[Gottfried_Zimmermann][ISO-IEC_JTC1]"
        ],
        [
            "extension" => "urc-ressheet+xml",
            "type" => "application/urc-ressheet+xml",
            "Reference" => "[Gottfried_Zimmermann][ISO-IEC_JTC1]"
        ],
        [
            "extension" => "urc-targetdesc+xml",
            "type" => "application/urc-targetdesc+xml",
            "Reference" => "[Gottfried_Zimmermann][ISO-IEC_JTC1]"
        ],
        [
            "extension" => "urc-uisocketdesc+xml",
            "type" => "application/urc-uisocketdesc+xml",
            "Reference" => "[Gottfried_Zimmermann]"
        ],
        [
            "extension" => "vcard+json",
            "type" => "application/vcard+json",
            "Reference" => "[RFC7095]"
        ],
        [
            "extension" => "vcard+xml",
            "type" => "application/vcard+xml",
            "Reference" => "[RFC6351]"
        ],
        [
            "extension" => "vemmi",
            "type" => "application/vemmi",
            "Reference" => "[RFC2122]"
        ],
        [
            "extension" => "vnd.1000minds.decision-model+xml",
            "type" => "application/vnd.1000minds.decision-model+xml",
            "Reference" => "[Franz_Ombler]"
        ],
        [
            "extension" => "vnd.3gpp.access-transfer-events+xml",
            "type" => "application/vnd.3gpp.access-transfer-events+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.bsf+xml",
            "type" => "application/vnd.3gpp.bsf+xml",
            "Reference" => "[John_M_Meredith]"
        ],
        [
            "extension" => "vnd.3gpp.GMOP+xml",
            "type" => "application/vnd.3gpp.GMOP+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mc-signalling-ear",
            "type" => "application/vnd.3gpp.mc-signalling-ear",
            "Reference" => "[Tim_Woodward]"
        ],
        [
            "extension" => "vnd.3gpp.mcdata-affiliation-command+xml",
            "type" => "application/vnd.3gpp.mcdata-affiliation-command+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcdata-info+xml",
            "type" => "application/vnd.3gpp.mcdata-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcdata-payload",
            "type" => "application/vnd.3gpp.mcdata-payload",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcdata-service-config+xml",
            "type" => "application/vnd.3gpp.mcdata-service-config+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcdata-signalling",
            "type" => "application/vnd.3gpp.mcdata-signalling",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcdata-ue-config+xml",
            "type" => "application/vnd.3gpp.mcdata-ue-config+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcdata-user-profile+xml",
            "type" => "application/vnd.3gpp.mcdata-user-profile+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-affiliation-command+xml",
            "type" => "application/vnd.3gpp.mcptt-affiliation-command+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-floor-request+xml",
            "type" => "application/vnd.3gpp.mcptt-floor-request+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-info+xml",
            "type" => "application/vnd.3gpp.mcptt-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-location-info+xml",
            "type" => "application/vnd.3gpp.mcptt-location-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-mbms-usage-info+xml",
            "type" => "application/vnd.3gpp.mcptt-mbms-usage-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-service-config+xml",
            "type" => "application/vnd.3gpp.mcptt-service-config+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-signed+xml",
            "type" => "application/vnd.3gpp.mcptt-signed+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-ue-config+xml",
            "type" => "application/vnd.3gpp.mcptt-ue-config+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-ue-init-config+xml",
            "type" => "application/vnd.3gpp.mcptt-ue-init-config+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-user-profile+xml",
            "type" => "application/vnd.3gpp.mcptt-user-profile+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-affiliation-command+xml",
            "type" => "application/vnd.3gpp.mcvideo-affiliation-command+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-affiliation-info+xml - OBSOLETED in favor of application/vnd.3gpp.mcvideo-info+xml",
            "type" => "application/vnd.3gpp.mcvideo-affiliation-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-info+xml",
            "type" => "application/vnd.3gpp.mcvideo-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-location-info+xml",
            "type" => "application/vnd.3gpp.mcvideo-location-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-mbms-usage-info+xml",
            "type" => "application/vnd.3gpp.mcvideo-mbms-usage-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-service-config+xml",
            "type" => "application/vnd.3gpp.mcvideo-service-config+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-transmission-request+xml",
            "type" => "application/vnd.3gpp.mcvideo-transmission-request+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-ue-config+xml",
            "type" => "application/vnd.3gpp.mcvideo-ue-config+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-user-profile+xml",
            "type" => "application/vnd.3gpp.mcvideo-user-profile+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mid-call+xml",
            "type" => "application/vnd.3gpp.mid-call+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.pic-bw-large",
            "type" => "application/vnd.3gpp.pic-bw-large",
            "Reference" => "[John_M_Meredith]"
        ],
        [
            "extension" => "vnd.3gpp.pic-bw-small",
            "type" => "application/vnd.3gpp.pic-bw-small",
            "Reference" => "[John_M_Meredith]"
        ],
        [
            "extension" => "vnd.3gpp.pic-bw-var",
            "type" => "application/vnd.3gpp.pic-bw-var",
            "Reference" => "[John_M_Meredith]"
        ],
        [
            "extension" => "vnd.3gpp-prose-pc3ch+xml",
            "type" => "application/vnd.3gpp-prose-pc3ch+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp-prose+xml",
            "type" => "application/vnd.3gpp-prose+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.sms",
            "type" => "application/vnd.3gpp.sms",
            "Reference" => "[John_M_Meredith]"
        ],
        [
            "extension" => "vnd.3gpp.sms+xml",
            "type" => "application/vnd.3gpp.sms+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.srvcc-ext+xml",
            "type" => "application/vnd.3gpp.srvcc-ext+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.SRVCC-info+xml",
            "type" => "application/vnd.3gpp.SRVCC-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.state-and-event-info+xml",
            "type" => "application/vnd.3gpp.state-and-event-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.ussd+xml",
            "type" => "application/vnd.3gpp.ussd+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp-v2x-local-service-information",
            "type" => "application/vnd.3gpp-v2x-local-service-information",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp2.bcmcsinfo+xml",
            "type" => "application/vnd.3gpp2.bcmcsinfo+xml",
            "Reference" => "[Andy_Dryden]"
        ],
        [
            "extension" => "vnd.3gpp2.sms",
            "type" => "application/vnd.3gpp2.sms",
            "Reference" => "[AC_Mahendran]"
        ],
        [
            "extension" => "vnd.3gpp2.tcap",
            "type" => "application/vnd.3gpp2.tcap",
            "Reference" => "[AC_Mahendran]"
        ],
        [
            "extension" => "vnd.3lightssoftware.imagescal",
            "type" => "application/vnd.3lightssoftware.imagescal",
            "Reference" => "[Gus_Asadi]"
        ],
        [
            "extension" => "vnd.3M.Post-it-Notes",
            "type" => "application/vnd.3M.Post-it-Notes",
            "Reference" => "[Michael_OBrien]"
        ],
        [
            "extension" => "vnd.accpac.simply.aso",
            "type" => "application/vnd.accpac.simply.aso",
            "Reference" => "[Steve_Leow]"
        ],
        [
            "extension" => "vnd.accpac.simply.imp",
            "type" => "application/vnd.accpac.simply.imp",
            "Reference" => "[Steve_Leow]"
        ],
        [
            "extension" => "vnd.acucobol",
            "type" => "application/vnd.acucobol",
            "Reference" => "[Dovid_Lubin]"
        ],
        [
            "extension" => "vnd.acucorp",
            "type" => "application/vnd.acucorp",
            "Reference" => "[Dovid_Lubin]"
        ],
        [
            "extension" => "vnd.adobe.flash.movie",
            "type" => "application/vnd.adobe.flash.movie",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.adobe.formscentral.fcdt",
            "type" => "application/vnd.adobe.formscentral.fcdt",
            "Reference" => "[Chris_Solc]"
        ],
        [
            "extension" => "vnd.adobe.fxp",
            "type" => "application/vnd.adobe.fxp",
            "Reference" => "[Robert_Brambley][Steven_Heintz]"
        ],
        [
            "extension" => "vnd.adobe.partial-upload",
            "type" => "application/vnd.adobe.partial-upload",
            "Reference" => "[Tapani_Otala]"
        ],
        [
            "extension" => "vnd.adobe.xdp+xml",
            "type" => "application/vnd.adobe.xdp+xml",
            "Reference" => "[John_Brinkman]"
        ],
        [
            "extension" => "vnd.adobe.xfdf",
            "type" => "application/vnd.adobe.xfdf",
            "Reference" => "[Roberto_Perelman]"
        ],
        [
            "extension" => "vnd.aether.imp",
            "type" => "application/vnd.aether.imp",
            "Reference" => "[Jay_Moskowitz]"
        ],
        [
            "extension" => "vnd.afpc.afplinedata",
            "type" => "application/vnd.afpc.afplinedata",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.afplinedata-pagedef",
            "type" => "application/vnd.afpc.afplinedata-pagedef",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.foca-charset",
            "type" => "application/vnd.afpc.foca-charset",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.foca-codedfont",
            "type" => "application/vnd.afpc.foca-codedfont",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.foca-codepage",
            "type" => "application/vnd.afpc.foca-codepage",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.modca",
            "type" => "application/vnd.afpc.modca",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.modca-formdef",
            "type" => "application/vnd.afpc.modca-formdef",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.modca-mediummap",
            "type" => "application/vnd.afpc.modca-mediummap",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.modca-objectcontainer",
            "type" => "application/vnd.afpc.modca-objectcontainer",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.modca-overlay",
            "type" => "application/vnd.afpc.modca-overlay",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.modca-pagesegment",
            "type" => "application/vnd.afpc.modca-pagesegment",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.ah-barcode",
            "type" => "application/vnd.ah-barcode",
            "Reference" => "[Katsuhiko_Ichinose]"
        ],
        [
            "extension" => "vnd.ahead.space",
            "type" => "application/vnd.ahead.space",
            "Reference" => "[Tor_Kristensen]"
        ],
        [
            "extension" => "vnd.airzip.filesecure.azf",
            "type" => "application/vnd.airzip.filesecure.azf",
            "Reference" => "[Daniel_Mould][Gary_Clueit]"
        ],
        [
            "extension" => "vnd.airzip.filesecure.azs",
            "type" => "application/vnd.airzip.filesecure.azs",
            "Reference" => "[Daniel_Mould][Gary_Clueit]"
        ],
        [
            "extension" => "vnd.amadeus+json",
            "type" => "application/vnd.amadeus+json",
            "Reference" => "[Patrick_Brosse]"
        ],
        [
            "extension" => "vnd.amazon.mobi8-ebook",
            "type" => "application/vnd.amazon.mobi8-ebook",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.americandynamics.acc",
            "type" => "application/vnd.americandynamics.acc",
            "Reference" => "[Gary_Sands]"
        ],
        [
            "extension" => "vnd.amiga.ami",
            "type" => "application/vnd.amiga.ami",
            "Reference" => "[Kevin_Blumberg]"
        ],
        [
            "extension" => "vnd.amundsen.maze+xml",
            "type" => "application/vnd.amundsen.maze+xml",
            "Reference" => "[Mike_Amundsen]"
        ],
        [
            "extension" => "vnd.android.ota",
            "type" => "application/vnd.android.ota",
            "Reference" => "[Greg_Kaiser]"
        ],
        [
            "extension" => "vnd.anki",
            "type" => "application/vnd.anki",
            "Reference" => "[Kerrick_Staley]"
        ],
        [
            "extension" => "vnd.anser-web-certificate-issue-initiation",
            "type" => "application/vnd.anser-web-certificate-issue-initiation",
            "Reference" => "[Hiroyoshi_Mori]"
        ],
        [
            "extension" => "vnd.antix.game-component",
            "type" => "application/vnd.antix.game-component",
            "Reference" => "[Daniel_Shelton]"
        ],
        [
            "extension" => "vnd.apache.thrift.binary",
            "type" => "application/vnd.apache.thrift.binary",
            "Reference" => "[Roger_Meier]"
        ],
        [
            "extension" => "vnd.apache.thrift.compact",
            "type" => "application/vnd.apache.thrift.compact",
            "Reference" => "[Roger_Meier]"
        ],
        [
            "extension" => "vnd.apache.thrift.json",
            "type" => "application/vnd.apache.thrift.json",
            "Reference" => "[Roger_Meier]"
        ],
        [
            "extension" => "vnd.api+json",
            "type" => "application/vnd.api+json",
            "Reference" => "[Steve_Klabnik]"
        ],
        [
            "extension" => "vnd.aplextor.warrp+json",
            "type" => "application/vnd.aplextor.warrp+json",
            "Reference" => "[Oleg_Uryutin]"
        ],
        [
            "extension" => "vnd.apothekende.reservation+json",
            "type" => "application/vnd.apothekende.reservation+json",
            "Reference" => "[Adrian_Föder]"
        ],
        [
            "extension" => "vnd.apple.installer+xml",
            "type" => "application/vnd.apple.installer+xml",
            "Reference" => "[Peter_Bierman]"
        ],
        [
            "extension" => "vnd.apple.keynote",
            "type" => "application/vnd.apple.keynote",
            "Reference" => "[Manichandra_Sajjanapu]"
        ],
        [
            "extension" => "vnd.apple.mpegurl",
            "type" => "application/vnd.apple.mpegurl",
            "Reference" => "[RFC8216]"
        ],
        [
            "extension" => "vnd.apple.numbers",
            "type" => "application/vnd.apple.numbers",
            "Reference" => "[Manichandra_Sajjanapu]"
        ],
        [
            "extension" => "vnd.apple.pages",
            "type" => "application/vnd.apple.pages",
            "Reference" => "[Manichandra_Sajjanapu]"
        ],
        [
            "extension" => "vnd.arastra.swi - OBSOLETED in favor of application/vnd.aristanetworks.swi",
            "type" => "application/vnd.arastra.swi",
            "Reference" => "[Bill_Fenner]"
        ],
        [
            "extension" => "vnd.aristanetworks.swi",
            "type" => "application/vnd.aristanetworks.swi",
            "Reference" => "[Bill_Fenner]"
        ],
        [
            "extension" => "vnd.artisan+json",
            "type" => "application/vnd.artisan+json",
            "Reference" => "[Brad_Turner]"
        ],
        [
            "extension" => "vnd.artsquare",
            "type" => "application/vnd.artsquare",
            "Reference" => "[Christopher_Smith]"
        ],
        [
            "extension" => "vnd.astraea-software.iota",
            "type" => "application/vnd.astraea-software.iota",
            "Reference" => "[Christopher_Snazell]"
        ],
        [
            "extension" => "vnd.audiograph",
            "type" => "application/vnd.audiograph",
            "Reference" => "[Horia_Cristian_Slusanschi]"
        ],
        [
            "extension" => "vnd.autopackage",
            "type" => "application/vnd.autopackage",
            "Reference" => "[Mike_Hearn]"
        ],
        [
            "extension" => "vnd.avalon+json",
            "type" => "application/vnd.avalon+json",
            "Reference" => "[Ben_Hinman]"
        ],
        [
            "extension" => "vnd.avistar+xml",
            "type" => "application/vnd.avistar+xml",
            "Reference" => "[Vladimir_Vysotsky]"
        ],
        [
            "extension" => "vnd.balsamiq.bmml+xml",
            "type" => "application/vnd.balsamiq.bmml+xml",
            "Reference" => "[Giacomo_Guilizzoni]"
        ],
        [
            "extension" => "vnd.banana-accounting",
            "type" => "application/vnd.banana-accounting",
            "Reference" => "[José_Del_Romano]"
        ],
        [
            "extension" => "vnd.bbf.usp.error",
            "type" => "application/vnd.bbf.usp.error",
            "Reference" => "[Broadband_Forum]"
        ],
        [
            "extension" => "vnd.bbf.usp.msg",
            "type" => "application/vnd.bbf.usp.msg",
            "Reference" => "[Broadband_Forum]"
        ],
        [
            "extension" => "vnd.bbf.usp.msg+json",
            "type" => "application/vnd.bbf.usp.msg+json",
            "Reference" => "[Broadband_Forum]"
        ],
        [
            "extension" => "vnd.balsamiq.bmpr",
            "type" => "application/vnd.balsamiq.bmpr",
            "Reference" => "[Giacomo_Guilizzoni]"
        ],
        [
            "extension" => "vnd.bekitzur-stech+json",
            "type" => "application/vnd.bekitzur-stech+json",
            "Reference" => "[Jegulsky]"
        ],
        [
            "extension" => "vnd.bint.med-content",
            "type" => "application/vnd.bint.med-content",
            "Reference" => "[Heinz-Peter_Schütz]"
        ],
        [
            "extension" => "vnd.biopax.rdf+xml",
            "type" => "application/vnd.biopax.rdf+xml",
            "Reference" => "[Pathway_Commons]"
        ],
        [
            "extension" => "vnd.blink-idb-value-wrapper",
            "type" => "application/vnd.blink-idb-value-wrapper",
            "Reference" => "[Victor_Costan]"
        ],
        [
            "extension" => "vnd.blueice.multipass",
            "type" => "application/vnd.blueice.multipass",
            "Reference" => "[Thomas_Holmstrom]"
        ],
        [
            "extension" => "vnd.bluetooth.ep.oob",
            "type" => "application/vnd.bluetooth.ep.oob",
            "Reference" => "[Mike_Foley]"
        ],
        [
            "extension" => "vnd.bluetooth.le.oob",
            "type" => "application/vnd.bluetooth.le.oob",
            "Reference" => "[Mark_Powell]"
        ],
        [
            "extension" => "vnd.bmi",
            "type" => "application/vnd.bmi",
            "Reference" => "[Tadashi_Gotoh]"
        ],
        [
            "extension" => "vnd.bpf",
            "type" => "application/vnd.bpf",
            "Reference" => "[NCGIS][Bryan_Blank]"
        ],
        [
            "extension" => "vnd.bpf3",
            "type" => "application/vnd.bpf3",
            "Reference" => "[NCGIS][Bryan_Blank]"
        ],
        [
            "extension" => "vnd.businessobjects",
            "type" => "application/vnd.businessobjects",
            "Reference" => "[Philippe_Imoucha]"
        ],
        [
            "extension" => "vnd.byu.uapi+json",
            "type" => "application/vnd.byu.uapi+json",
            "Reference" => "[Brent_Moore]"
        ],
        [
            "extension" => "vnd.cab-jscript",
            "type" => "application/vnd.cab-jscript",
            "Reference" => "[Joerg_Falkenberg]"
        ],
        [
            "extension" => "vnd.canon-cpdl",
            "type" => "application/vnd.canon-cpdl",
            "Reference" => "[Shin_Muto]"
        ],
        [
            "extension" => "vnd.canon-lips",
            "type" => "application/vnd.canon-lips",
            "Reference" => "[Shin_Muto]"
        ],
        [
            "extension" => "vnd.capasystems-pg+json",
            "type" => "application/vnd.capasystems-pg+json",
            "Reference" => "[Yüksel_Aydemir]"
        ],
        [
            "extension" => "vnd.cendio.thinlinc.clientconf",
            "type" => "application/vnd.cendio.thinlinc.clientconf",
            "Reference" => "[Peter_Astrand]"
        ],
        [
            "extension" => "vnd.century-systems.tcp_stream",
            "type" => "application/vnd.century-systems.tcp_stream",
            "Reference" => "[Shuji_Fujii]"
        ],
        [
            "extension" => "vnd.chemdraw+xml",
            "type" => "application/vnd.chemdraw+xml",
            "Reference" => "[Glenn_Howes]"
        ],
        [
            "extension" => "vnd.chess-pgn",
            "type" => "application/vnd.chess-pgn",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.chipnuts.karaoke-mmd",
            "type" => "application/vnd.chipnuts.karaoke-mmd",
            "Reference" => "[Chunyun_Xiong]"
        ],
        [
            "extension" => "vnd.ciedi",
            "type" => "application/vnd.ciedi",
            "Reference" => "[Hidekazu_Enjo]"
        ],
        [
            "extension" => "vnd.cinderella",
            "type" => "application/vnd.cinderella",
            "Reference" => "[Ulrich_Kortenkamp]"
        ],
        [
            "extension" => "vnd.cirpack.isdn-ext",
            "type" => "application/vnd.cirpack.isdn-ext",
            "Reference" => "[Pascal_Mayeux]"
        ],
        [
            "extension" => "vnd.citationstyles.style+xml",
            "type" => "application/vnd.citationstyles.style+xml",
            "Reference" => "[Rintze_M._Zelle]"
        ],
        [
            "extension" => "vnd.claymore",
            "type" => "application/vnd.claymore",
            "Reference" => "[Ray_Simpson]"
        ],
        [
            "extension" => "vnd.cloanto.rp9",
            "type" => "application/vnd.cloanto.rp9",
            "Reference" => "[Mike_Labatt]"
        ],
        [
            "extension" => "vnd.clonk.c4group",
            "type" => "application/vnd.clonk.c4group",
            "Reference" => "[Guenther_Brammer]"
        ],
        [
            "extension" => "vnd.cluetrust.cartomobile-config",
            "type" => "application/vnd.cluetrust.cartomobile-config",
            "Reference" => "[Gaige_Paulsen]"
        ],
        [
            "extension" => "vnd.cluetrust.cartomobile-config-pkg",
            "type" => "application/vnd.cluetrust.cartomobile-config-pkg",
            "Reference" => "[Gaige_Paulsen]"
        ],
        [
            "extension" => "vnd.coffeescript",
            "type" => "application/vnd.coffeescript",
            "Reference" => "[Devyn_Collier_Johnson]"
        ],
        [
            "extension" => "vnd.collabio.xodocuments.document",
            "type" => "application/vnd.collabio.xodocuments.document",
            "Reference" => "[Alexey_Meandrov]"
        ],
        [
            "extension" => "vnd.collabio.xodocuments.document-template",
            "type" => "application/vnd.collabio.xodocuments.document-template",
            "Reference" => "[Alexey_Meandrov]"
        ],
        [
            "extension" => "vnd.collabio.xodocuments.presentation",
            "type" => "application/vnd.collabio.xodocuments.presentation",
            "Reference" => "[Alexey_Meandrov]"
        ],
        [
            "extension" => "vnd.collabio.xodocuments.presentation-template",
            "type" => "application/vnd.collabio.xodocuments.presentation-template",
            "Reference" => "[Alexey_Meandrov]"
        ],
        [
            "extension" => "vnd.collabio.xodocuments.spreadsheet",
            "type" => "application/vnd.collabio.xodocuments.spreadsheet",
            "Reference" => "[Alexey_Meandrov]"
        ],
        [
            "extension" => "vnd.collabio.xodocuments.spreadsheet-template",
            "type" => "application/vnd.collabio.xodocuments.spreadsheet-template",
            "Reference" => "[Alexey_Meandrov]"
        ],
        [
            "extension" => "vnd.collection.doc+json",
            "type" => "application/vnd.collection.doc+json",
            "Reference" => "[Irakli_Nadareishvili]"
        ],
        [
            "extension" => "vnd.collection+json",
            "type" => "application/vnd.collection+json",
            "Reference" => "[Mike_Amundsen]"
        ],
        [
            "extension" => "vnd.collection.next+json",
            "type" => "application/vnd.collection.next+json",
            "Reference" => "[Ioseb_Dzmanashvili]"
        ],
        [
            "extension" => "vnd.comicbook-rar",
            "type" => "application/vnd.comicbook-rar",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.comicbook+zip",
            "type" => "application/vnd.comicbook+zip",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.commerce-battelle",
            "type" => "application/vnd.commerce-battelle",
            "Reference" => "[David_Applebaum]"
        ],
        [
            "extension" => "vnd.commonspace",
            "type" => "application/vnd.commonspace",
            "Reference" => "[Ravinder_Chandhok]"
        ],
        [
            "extension" => "vnd.coreos.ignition+json",
            "type" => "application/vnd.coreos.ignition+json",
            "Reference" => "[Alex_Crawford]"
        ],
        [
            "extension" => "vnd.cosmocaller",
            "type" => "application/vnd.cosmocaller",
            "Reference" => "[Steve_Dellutri]"
        ],
        [
            "extension" => "vnd.contact.cmsg",
            "type" => "application/vnd.contact.cmsg",
            "Reference" => "[Frank_Patz]"
        ],
        [
            "extension" => "vnd.crick.clicker",
            "type" => "application/vnd.crick.clicker",
            "Reference" => "[Andrew_Burt]"
        ],
        [
            "extension" => "vnd.crick.clicker.keyboard",
            "type" => "application/vnd.crick.clicker.keyboard",
            "Reference" => "[Andrew_Burt]"
        ],
        [
            "extension" => "vnd.crick.clicker.palette",
            "type" => "application/vnd.crick.clicker.palette",
            "Reference" => "[Andrew_Burt]"
        ],
        [
            "extension" => "vnd.crick.clicker.template",
            "type" => "application/vnd.crick.clicker.template",
            "Reference" => "[Andrew_Burt]"
        ],
        [
            "extension" => "vnd.crick.clicker.wordbank",
            "type" => "application/vnd.crick.clicker.wordbank",
            "Reference" => "[Andrew_Burt]"
        ],
        [
            "extension" => "vnd.criticaltools.wbs+xml",
            "type" => "application/vnd.criticaltools.wbs+xml",
            "Reference" => "[Jim_Spiller]"
        ],
        [
            "extension" => "vnd.cryptii.pipe+json",
            "type" => "application/vnd.cryptii.pipe+json",
            "Reference" => "[Fränz_Friederes]"
        ],
        [
            "extension" => "vnd.crypto-shade-file",
            "type" => "application/vnd.crypto-shade-file",
            "Reference" => "[Connor_Horman]"
        ],
        [
            "extension" => "vnd.ctc-posml",
            "type" => "application/vnd.ctc-posml",
            "Reference" => "[Bayard_Kohlhepp]"
        ],
        [
            "extension" => "vnd.ctct.ws+xml",
            "type" => "application/vnd.ctct.ws+xml",
            "Reference" => "[Jim_Ancona]"
        ],
        [
            "extension" => "vnd.cups-pdf",
            "type" => "application/vnd.cups-pdf",
            "Reference" => "[Michael_Sweet]"
        ],
        [
            "extension" => "vnd.cups-postscript",
            "type" => "application/vnd.cups-postscript",
            "Reference" => "[Michael_Sweet]"
        ],
        [
            "extension" => "vnd.cups-ppd",
            "type" => "application/vnd.cups-ppd",
            "Reference" => "[Michael_Sweet]"
        ],
        [
            "extension" => "vnd.cups-raster",
            "type" => "application/vnd.cups-raster",
            "Reference" => "[Michael_Sweet]"
        ],
        [
            "extension" => "vnd.cups-raw",
            "type" => "application/vnd.cups-raw",
            "Reference" => "[Michael_Sweet]"
        ],
        [
            "extension" => "vnd.curl",
            "type" => "application/vnd.curl",
            "Reference" => "[Robert_Byrnes]"
        ],
        [
            "extension" => "vnd.cyan.dean.root+xml",
            "type" => "application/vnd.cyan.dean.root+xml",
            "Reference" => "[Matt_Kern]"
        ],
        [
            "extension" => "vnd.cybank",
            "type" => "application/vnd.cybank",
            "Reference" => "[Nor_Helmee]"
        ],
        [
            "extension" => "vnd.d2l.coursepackage1p0+zip",
            "type" => "application/vnd.d2l.coursepackage1p0+zip",
            "Reference" => "[Viktor_Haag]"
        ],
        [
            "extension" => "vnd.dart",
            "type" => "application/vnd.dart",
            "Reference" => "[Anders_Sandholm]"
        ],
        [
            "extension" => "vnd.data-vision.rdz",
            "type" => "application/vnd.data-vision.rdz",
            "Reference" => "[James_Fields]"
        ],
        [
            "extension" => "vnd.datapackage+json",
            "type" => "application/vnd.datapackage+json",
            "Reference" => "[Paul_Walsh]"
        ],
        [
            "extension" => "vnd.dataresource+json",
            "type" => "application/vnd.dataresource+json",
            "Reference" => "[Paul_Walsh]"
        ],
        [
            "extension" => "vnd.dbf",
            "type" => "application/vnd.dbf",
            "Reference" => "[Mi_Tar]"
        ],
        [
            "extension" => "vnd.debian.binary-package",
            "type" => "application/vnd.debian.binary-package",
            "Reference" => "[Charles_Plessy]"
        ],
        [
            "extension" => "vnd.dece.data",
            "type" => "application/vnd.dece.data",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.ttml+xml",
            "type" => "application/vnd.dece.ttml+xml",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.unspecified",
            "type" => "application/vnd.dece.unspecified",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.zip",
            "type" => "application/vnd.dece.zip",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.denovo.fcselayout-link",
            "type" => "application/vnd.denovo.fcselayout-link",
            "Reference" => "[Michael_Dixon]"
        ],
        [
            "extension" => "vnd.desmume.movie",
            "type" => "application/vnd.desmume.movie",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.dir-bi.plate-dl-nosuffix",
            "type" => "application/vnd.dir-bi.plate-dl-nosuffix",
            "Reference" => "[Yamanaka]"
        ],
        [
            "extension" => "vnd.dm.delegation+xml",
            "type" => "application/vnd.dm.delegation+xml",
            "Reference" => "[Axel_Ferrazzini]"
        ],
        [
            "extension" => "vnd.dna",
            "type" => "application/vnd.dna",
            "Reference" => "[Meredith_Searcy]"
        ],
        [
            "extension" => "vnd.document+json",
            "type" => "application/vnd.document+json",
            "Reference" => "[Tom_Christie]"
        ],
        [
            "extension" => "vnd.dolby.mobile.1",
            "type" => "application/vnd.dolby.mobile.1",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dolby.mobile.2",
            "type" => "application/vnd.dolby.mobile.2",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.doremir.scorecloud-binary-document",
            "type" => "application/vnd.doremir.scorecloud-binary-document",
            "Reference" => "[Erik_Ronström]"
        ],
        [
            "extension" => "vnd.dpgraph",
            "type" => "application/vnd.dpgraph",
            "Reference" => "[David_Parker]"
        ],
        [
            "extension" => "vnd.dreamfactory",
            "type" => "application/vnd.dreamfactory",
            "Reference" => "[William_C._Appleton]"
        ],
        [
            "extension" => "vnd.drive+json",
            "type" => "application/vnd.drive+json",
            "Reference" => "[Keith_Kester]"
        ],
        [
            "extension" => "vnd.dtg.local",
            "type" => "application/vnd.dtg.local",
            "Reference" => "[Ali_Teffahi]"
        ],
        [
            "extension" => "vnd.dtg.local.flash",
            "type" => "application/vnd.dtg.local.flash",
            "Reference" => "[Ali_Teffahi]"
        ],
        [
            "extension" => "vnd.dtg.local.html",
            "type" => "application/vnd.dtg.local.html",
            "Reference" => "[Ali_Teffahi]"
        ],
        [
            "extension" => "vnd.dvb.ait",
            "type" => "application/vnd.dvb.ait",
            "Reference" => "[Peter_Siebert][Michael_Lagally]"
        ],
        [
            "extension" => "vnd.dvb.dvbisl+xml",
            "type" => "application/vnd.dvb.dvbisl+xml",
            "Reference" => "[Emily_DUBS]"
        ],
        [
            "extension" => "vnd.dvb.dvbj",
            "type" => "application/vnd.dvb.dvbj",
            "Reference" => "[Peter_Siebert][Michael_Lagally]"
        ],
        [
            "extension" => "vnd.dvb.esgcontainer",
            "type" => "application/vnd.dvb.esgcontainer",
            "Reference" => "[Joerg_Heuer]"
        ],
        [
            "extension" => "vnd.dvb.ipdcdftnotifaccess",
            "type" => "application/vnd.dvb.ipdcdftnotifaccess",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.ipdcesgaccess",
            "type" => "application/vnd.dvb.ipdcesgaccess",
            "Reference" => "[Joerg_Heuer]"
        ],
        [
            "extension" => "vnd.dvb.ipdcesgaccess2",
            "type" => "application/vnd.dvb.ipdcesgaccess2",
            "Reference" => "[Jerome_Marcon]"
        ],
        [
            "extension" => "vnd.dvb.ipdcesgpdd",
            "type" => "application/vnd.dvb.ipdcesgpdd",
            "Reference" => "[Jerome_Marcon]"
        ],
        [
            "extension" => "vnd.dvb.ipdcroaming",
            "type" => "application/vnd.dvb.ipdcroaming",
            "Reference" => "[Yiling_Xu]"
        ],
        [
            "extension" => "vnd.dvb.iptv.alfec-base",
            "type" => "application/vnd.dvb.iptv.alfec-base",
            "Reference" => "[Jean-Baptiste_Henry]"
        ],
        [
            "extension" => "vnd.dvb.iptv.alfec-enhancement",
            "type" => "application/vnd.dvb.iptv.alfec-enhancement",
            "Reference" => "[Jean-Baptiste_Henry]"
        ],
        [
            "extension" => "vnd.dvb.notif-aggregate-root+xml",
            "type" => "application/vnd.dvb.notif-aggregate-root+xml",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.notif-container+xml",
            "type" => "application/vnd.dvb.notif-container+xml",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.notif-generic+xml",
            "type" => "application/vnd.dvb.notif-generic+xml",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.notif-ia-msglist+xml",
            "type" => "application/vnd.dvb.notif-ia-msglist+xml",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.notif-ia-registration-request+xml",
            "type" => "application/vnd.dvb.notif-ia-registration-request+xml",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.notif-ia-registration-response+xml",
            "type" => "application/vnd.dvb.notif-ia-registration-response+xml",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.notif-init+xml",
            "type" => "application/vnd.dvb.notif-init+xml",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.pfr",
            "type" => "application/vnd.dvb.pfr",
            "Reference" => "[Peter_Siebert][Michael_Lagally]"
        ],
        [
            "extension" => "vnd.dvb.service",
            "type" => "application/vnd.dvb.service",
            "Reference" => "[Peter_Siebert][Michael_Lagally]"
        ],
        [
            "extension" => "vnd.dxr",
            "type" => "application/vnd.dxr",
            "Reference" => "[Michael_Duffy]"
        ],
        [
            "extension" => "vnd.dynageo",
            "type" => "application/vnd.dynageo",
            "Reference" => "[Roland_Mechling]"
        ],
        [
            "extension" => "vnd.dzr",
            "type" => "application/vnd.dzr",
            "Reference" => "[Carl_Anderson]"
        ],
        [
            "extension" => "vnd.easykaraoke.cdgdownload",
            "type" => "application/vnd.easykaraoke.cdgdownload",
            "Reference" => "[Iain_Downs]"
        ],
        [
            "extension" => "vnd.ecip.rlp",
            "type" => "application/vnd.ecip.rlp",
            "Reference" => "[Wei_Tang]"
        ],
        [
            "extension" => "vnd.ecdis-update",
            "type" => "application/vnd.ecdis-update",
            "Reference" => "[Gert_Buettgenbach]"
        ],
        [
            "extension" => "vnd.ecowin.chart",
            "type" => "application/vnd.ecowin.chart",
            "Reference" => "[Thomas_Olsson]"
        ],
        [
            "extension" => "vnd.ecowin.filerequest",
            "type" => "application/vnd.ecowin.filerequest",
            "Reference" => "[Thomas_Olsson]"
        ],
        [
            "extension" => "vnd.ecowin.fileupdate",
            "type" => "application/vnd.ecowin.fileupdate",
            "Reference" => "[Thomas_Olsson]"
        ],
        [
            "extension" => "vnd.ecowin.series",
            "type" => "application/vnd.ecowin.series",
            "Reference" => "[Thomas_Olsson]"
        ],
        [
            "extension" => "vnd.ecowin.seriesrequest",
            "type" => "application/vnd.ecowin.seriesrequest",
            "Reference" => "[Thomas_Olsson]"
        ],
        [
            "extension" => "vnd.ecowin.seriesupdate",
            "type" => "application/vnd.ecowin.seriesupdate",
            "Reference" => "[Thomas_Olsson]"
        ],
        [
            "extension" => "vnd.efi.img",
            "type" => "application/vnd.efi.img",
            "Reference" => "[UEFI_Forum][Fu_Siyuan]"
        ],
        [
            "extension" => "vnd.efi.iso",
            "type" => "application/vnd.efi.iso",
            "Reference" => "[UEFI_Forum][Fu_Siyuan]"
        ],
        [
            "extension" => "vnd.emclient.accessrequest+xml",
            "type" => "application/vnd.emclient.accessrequest+xml",
            "Reference" => "[Filip_Navara]"
        ],
        [
            "extension" => "vnd.enliven",
            "type" => "application/vnd.enliven",
            "Reference" => "[Paul_Santinelli_Jr.]"
        ],
        [
            "extension" => "vnd.enphase.envoy",
            "type" => "application/vnd.enphase.envoy",
            "Reference" => "[Chris_Eich]"
        ],
        [
            "extension" => "vnd.eprints.data+xml",
            "type" => "application/vnd.eprints.data+xml",
            "Reference" => "[Tim_Brody]"
        ],
        [
            "extension" => "vnd.epson.esf",
            "type" => "application/vnd.epson.esf",
            "Reference" => "[Shoji_Hoshina]"
        ],
        [
            "extension" => "vnd.epson.msf",
            "type" => "application/vnd.epson.msf",
            "Reference" => "[Shoji_Hoshina]"
        ],
        [
            "extension" => "vnd.epson.quickanime",
            "type" => "application/vnd.epson.quickanime",
            "Reference" => "[Yu_Gu]"
        ],
        [
            "extension" => "vnd.epson.salt",
            "type" => "application/vnd.epson.salt",
            "Reference" => "[Yasuhito_Nagatomo]"
        ],
        [
            "extension" => "vnd.epson.ssf",
            "type" => "application/vnd.epson.ssf",
            "Reference" => "[Shoji_Hoshina]"
        ],
        [
            "extension" => "vnd.ericsson.quickcall",
            "type" => "application/vnd.ericsson.quickcall",
            "Reference" => "[Paul_Tidwell]"
        ],
        [
            "extension" => "vnd.espass-espass+zip",
            "type" => "application/vnd.espass-espass+zip",
            "Reference" => "[Marcus_Ligi_Büschleb]"
        ],
        [
            "extension" => "vnd.eszigno3+xml",
            "type" => "application/vnd.eszigno3+xml",
            "Reference" => "[Szilveszter_Tóth]"
        ],
        [
            "extension" => "vnd.etsi.aoc+xml",
            "type" => "application/vnd.etsi.aoc+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.asic-s+zip",
            "type" => "application/vnd.etsi.asic-s+zip",
            "Reference" => "[Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "vnd.etsi.asic-e+zip",
            "type" => "application/vnd.etsi.asic-e+zip",
            "Reference" => "[Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "vnd.etsi.cug+xml",
            "type" => "application/vnd.etsi.cug+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.iptvcommand+xml",
            "type" => "application/vnd.etsi.iptvcommand+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.iptvdiscovery+xml",
            "type" => "application/vnd.etsi.iptvdiscovery+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.iptvprofile+xml",
            "type" => "application/vnd.etsi.iptvprofile+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.iptvsad-bc+xml",
            "type" => "application/vnd.etsi.iptvsad-bc+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.iptvsad-cod+xml",
            "type" => "application/vnd.etsi.iptvsad-cod+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.iptvsad-npvr+xml",
            "type" => "application/vnd.etsi.iptvsad-npvr+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.iptvservice+xml",
            "type" => "application/vnd.etsi.iptvservice+xml",
            "Reference" => "[Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "vnd.etsi.iptvsync+xml",
            "type" => "application/vnd.etsi.iptvsync+xml",
            "Reference" => "[Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "vnd.etsi.iptvueprofile+xml",
            "type" => "application/vnd.etsi.iptvueprofile+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.mcid+xml",
            "type" => "application/vnd.etsi.mcid+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.mheg5",
            "type" => "application/vnd.etsi.mheg5",
            "Reference" => "[Miguel_Angel_Reina_Ortega][Ian_Medland]"
        ],
        [
            "extension" => "vnd.etsi.overload-control-policy-dataset+xml",
            "type" => "application/vnd.etsi.overload-control-policy-dataset+xml",
            "Reference" => "[Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "vnd.etsi.pstn+xml",
            "type" => "application/vnd.etsi.pstn+xml",
            "Reference" => "[Jiwan_Han][Thomas_Belling]"
        ],
        [
            "extension" => "vnd.etsi.sci+xml",
            "type" => "application/vnd.etsi.sci+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.simservs+xml",
            "type" => "application/vnd.etsi.simservs+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.timestamp-token",
            "type" => "application/vnd.etsi.timestamp-token",
            "Reference" => "[Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "vnd.etsi.tsl+xml",
            "type" => "application/vnd.etsi.tsl+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.tsl.der",
            "type" => "application/vnd.etsi.tsl.der",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.evolv.ecig.profile",
            "type" => "application/vnd.evolv.ecig.profile",
            "Reference" => "[James_Bellinger]"
        ],
        [
            "extension" => "vnd.evolv.ecig.settings",
            "type" => "application/vnd.evolv.ecig.settings",
            "Reference" => "[James_Bellinger]"
        ],
        [
            "extension" => "vnd.evolv.ecig.theme",
            "type" => "application/vnd.evolv.ecig.theme",
            "Reference" => "[James_Bellinger]"
        ],
        [
            "extension" => "vnd.eudora.data",
            "type" => "application/vnd.eudora.data",
            "Reference" => "[Pete_Resnick]"
        ],
        [
            "extension" => "vnd.exstream-empower+zip",
            "type" => "application/vnd.exstream-empower+zip",
            "Reference" => "[Bill_Kidwell]"
        ],
        [
            "extension" => "vnd.exstream-package",
            "type" => "application/vnd.exstream-package",
            "Reference" => "[Bill_Kidwell]"
        ],
        [
            "extension" => "vnd.ezpix-album",
            "type" => "application/vnd.ezpix-album",
            "Reference" => "[ElectronicZombieCorp]"
        ],
        [
            "extension" => "vnd.ezpix-package",
            "type" => "application/vnd.ezpix-package",
            "Reference" => "[ElectronicZombieCorp]"
        ],
        [
            "extension" => "vnd.f-secure.mobile",
            "type" => "application/vnd.f-secure.mobile",
            "Reference" => "[Samu_Sarivaara]"
        ],
        [
            "extension" => "vnd.fastcopy-disk-image",
            "type" => "application/vnd.fastcopy-disk-image",
            "Reference" => "[Thomas_Huth]"
        ],
        [
            "extension" => "vnd.fdf",
            "type" => "application/vnd.fdf",
            "Reference" => "[Steve_Zilles]"
        ],
        [
            "extension" => "vnd.fdsn.mseed",
            "type" => "application/vnd.fdsn.mseed",
            "Reference" => "[Chad_Trabant]"
        ],
        [
            "extension" => "vnd.fdsn.seed",
            "type" => "application/vnd.fdsn.seed",
            "Reference" => "[Chad_Trabant]"
        ],
        [
            "extension" => "vnd.ffsns",
            "type" => "application/vnd.ffsns",
            "Reference" => "[Holstage]"
        ],
        [
            "extension" => "vnd.ficlab.flb+zip",
            "type" => "application/vnd.ficlab.flb+zip",
            "Reference" => "[Steve_Gilberd]"
        ],
        [
            "extension" => "vnd.filmit.zfc",
            "type" => "application/vnd.filmit.zfc",
            "Reference" => "[Harms_Moeller]"
        ],
        [
            "extension" => "vnd.fints",
            "type" => "application/vnd.fints",
            "Reference" => "[Ingo_Hammann]"
        ],
        [
            "extension" => "vnd.firemonkeys.cloudcell",
            "type" => "application/vnd.firemonkeys.cloudcell",
            "Reference" => "[Alex_Dubov]"
        ],
        [
            "extension" => "vnd.FloGraphIt",
            "type" => "application/vnd.FloGraphIt",
            "Reference" => "[Dick_Floersch]"
        ],
        [
            "extension" => "vnd.fluxtime.clip",
            "type" => "application/vnd.fluxtime.clip",
            "Reference" => "[Marc_Winter]"
        ],
        [
            "extension" => "vnd.font-fontforge-sfd",
            "type" => "application/vnd.font-fontforge-sfd",
            "Reference" => "[George_Williams]"
        ],
        [
            "extension" => "vnd.framemaker",
            "type" => "application/vnd.framemaker",
            "Reference" => "[Mike_Wexler]"
        ],
        [
            "extension" => "vnd.frogans.fnc - OBSOLETE",
            "type" => "application/vnd.frogans.fnc",
            "Reference" => "[OP3FT][Alexis_Tamas]"
        ],
        [
            "extension" => "vnd.frogans.ltf - OBSOLETE",
            "type" => "application/vnd.frogans.ltf",
            "Reference" => "[OP3FT][Alexis_Tamas]"
        ],
        [
            "extension" => "vnd.fsc.weblaunch",
            "type" => "application/vnd.fsc.weblaunch",
            "Reference" => "[Derek_Smith]"
        ],
        [
            "extension" => "vnd.fujitsu.oasys",
            "type" => "application/vnd.fujitsu.oasys",
            "Reference" => "[Nobukazu_Togashi]"
        ],
        [
            "extension" => "vnd.fujitsu.oasys2",
            "type" => "application/vnd.fujitsu.oasys2",
            "Reference" => "[Nobukazu_Togashi]"
        ],
        [
            "extension" => "vnd.fujitsu.oasys3",
            "type" => "application/vnd.fujitsu.oasys3",
            "Reference" => "[Seiji_Okudaira]"
        ],
        [
            "extension" => "vnd.fujitsu.oasysgp",
            "type" => "application/vnd.fujitsu.oasysgp",
            "Reference" => "[Masahiko_Sugimoto]"
        ],
        [
            "extension" => "vnd.fujitsu.oasysprs",
            "type" => "application/vnd.fujitsu.oasysprs",
            "Reference" => "[Masumi_Ogita]"
        ],
        [
            "extension" => "vnd.fujixerox.ART4",
            "type" => "application/vnd.fujixerox.ART4",
            "Reference" => "[Fumio_Tanabe]"
        ],
        [
            "extension" => "vnd.fujixerox.ART-EX",
            "type" => "application/vnd.fujixerox.ART-EX",
            "Reference" => "[Fumio_Tanabe]"
        ],
        [
            "extension" => "vnd.fujixerox.ddd",
            "type" => "application/vnd.fujixerox.ddd",
            "Reference" => "[Masanori_Onda]"
        ],
        [
            "extension" => "vnd.fujixerox.docuworks",
            "type" => "application/vnd.fujixerox.docuworks",
            "Reference" => "[Takatomo_Wakibayashi]"
        ],
        [
            "extension" => "vnd.fujixerox.docuworks.binder",
            "type" => "application/vnd.fujixerox.docuworks.binder",
            "Reference" => "[Takashi_Matsumoto]"
        ],
        [
            "extension" => "vnd.fujixerox.docuworks.container",
            "type" => "application/vnd.fujixerox.docuworks.container",
            "Reference" => "[Kiyoshi_Tashiro]"
        ],
        [
            "extension" => "vnd.fujixerox.HBPL",
            "type" => "application/vnd.fujixerox.HBPL",
            "Reference" => "[Fumio_Tanabe]"
        ],
        [
            "extension" => "vnd.fut-misnet",
            "type" => "application/vnd.fut-misnet",
            "Reference" => "[Jann_Pruulman]"
        ],
        [
            "extension" => "vnd.futoin+cbor",
            "type" => "application/vnd.futoin+cbor",
            "Reference" => "[Andrey_Galkin]"
        ],
        [
            "extension" => "vnd.futoin+json",
            "type" => "application/vnd.futoin+json",
            "Reference" => "[Andrey_Galkin]"
        ],
        [
            "extension" => "vnd.fuzzysheet",
            "type" => "application/vnd.fuzzysheet",
            "Reference" => "[Simon_Birtwistle]"
        ],
        [
            "extension" => "vnd.genomatix.tuxedo",
            "type" => "application/vnd.genomatix.tuxedo",
            "Reference" => "[Torben_Frey]"
        ],
        [
            "extension" => "vnd.gentics.grd+json",
            "type" => "application/vnd.gentics.grd+json",
            "Reference" => "[Philipp_Gortan]"
        ],
        [
            "extension" => "vnd.geo+json (OBSOLETED by [RFC7946] in favor of application/geo+json)",
            "type" => "application/vnd.geo+json",
            "Reference" => "[Sean_Gillies]"
        ],
        [
            "extension" => "vnd.geocube+xml - OBSOLETED by request",
            "type" => "application/vnd.geocube+xml",
            "Reference" => "[Francois_Pirsch]"
        ],
        [
            "extension" => "vnd.geogebra.file",
            "type" => "application/vnd.geogebra.file",
            "Reference" => "[GeoGebra][Yves_Kreis]"
        ],
        [
            "extension" => "vnd.geogebra.tool",
            "type" => "application/vnd.geogebra.tool",
            "Reference" => "[GeoGebra][Yves_Kreis]"
        ],
        [
            "extension" => "vnd.geometry-explorer",
            "type" => "application/vnd.geometry-explorer",
            "Reference" => "[Michael_Hvidsten]"
        ],
        [
            "extension" => "vnd.geonext",
            "type" => "application/vnd.geonext",
            "Reference" => "[Matthias_Ehmann]"
        ],
        [
            "extension" => "vnd.geoplan",
            "type" => "application/vnd.geoplan",
            "Reference" => "[Christian_Mercat]"
        ],
        [
            "extension" => "vnd.geospace",
            "type" => "application/vnd.geospace",
            "Reference" => "[Christian_Mercat]"
        ],
        [
            "extension" => "vnd.gerber",
            "type" => "application/vnd.gerber",
            "Reference" => "[Thomas_Weyn]"
        ],
        [
            "extension" => "vnd.globalplatform.card-content-mgt",
            "type" => "application/vnd.globalplatform.card-content-mgt",
            "Reference" => "[Gil_Bernabeu]"
        ],
        [
            "extension" => "vnd.globalplatform.card-content-mgt-response",
            "type" => "application/vnd.globalplatform.card-content-mgt-response",
            "Reference" => "[Gil_Bernabeu]"
        ],
        [
            "extension" => "vnd.gmx - DEPRECATED",
            "type" => "application/vnd.gmx",
            "Reference" => "[Christian_V._Sciberras]"
        ],
        [
            "extension" => "vnd.google-earth.kml+xml",
            "type" => "application/vnd.google-earth.kml+xml",
            "Reference" => "[Michael_Ashbridge]"
        ],
        [
            "extension" => "vnd.google-earth.kmz",
            "type" => "application/vnd.google-earth.kmz",
            "Reference" => "[Michael_Ashbridge]"
        ],
        [
            "extension" => "vnd.gov.sk.e-form+xml",
            "type" => "application/vnd.gov.sk.e-form+xml",
            "Reference" => "[Peter_Biro][Stefan_Szilva]"
        ],
        [
            "extension" => "vnd.gov.sk.e-form+zip",
            "type" => "application/vnd.gov.sk.e-form+zip",
            "Reference" => "[Peter_Biro][Stefan_Szilva]"
        ],
        [
            "extension" => "vnd.gov.sk.xmldatacontainer+xml",
            "type" => "application/vnd.gov.sk.xmldatacontainer+xml",
            "Reference" => "[Peter_Biro][Stefan_Szilva]"
        ],
        [
            "extension" => "vnd.grafeq",
            "type" => "application/vnd.grafeq",
            "Reference" => "[Jeff_Tupper]"
        ],
        [
            "extension" => "vnd.gridmp",
            "type" => "application/vnd.gridmp",
            "Reference" => "[Jeff_Lawson]"
        ],
        [
            "extension" => "vnd.groove-account",
            "type" => "application/vnd.groove-account",
            "Reference" => "[Todd_Joseph]"
        ],
        [
            "extension" => "vnd.groove-help",
            "type" => "application/vnd.groove-help",
            "Reference" => "[Todd_Joseph]"
        ],
        [
            "extension" => "vnd.groove-identity-message",
            "type" => "application/vnd.groove-identity-message",
            "Reference" => "[Todd_Joseph]"
        ],
        [
            "extension" => "vnd.groove-injector",
            "type" => "application/vnd.groove-injector",
            "Reference" => "[Todd_Joseph]"
        ],
        [
            "extension" => "vnd.groove-tool-message",
            "type" => "application/vnd.groove-tool-message",
            "Reference" => "[Todd_Joseph]"
        ],
        [
            "extension" => "vnd.groove-tool-template",
            "type" => "application/vnd.groove-tool-template",
            "Reference" => "[Todd_Joseph]"
        ],
        [
            "extension" => "vnd.groove-vcard",
            "type" => "application/vnd.groove-vcard",
            "Reference" => "[Todd_Joseph]"
        ],
        [
            "extension" => "vnd.hal+json",
            "type" => "application/vnd.hal+json",
            "Reference" => "[Mike_Kelly]"
        ],
        [
            "extension" => "vnd.hal+xml",
            "type" => "application/vnd.hal+xml",
            "Reference" => "[Mike_Kelly]"
        ],
        [
            "extension" => "vnd.HandHeld-Entertainment+xml",
            "type" => "application/vnd.HandHeld-Entertainment+xml",
            "Reference" => "[Eric_Hamilton]"
        ],
        [
            "extension" => "vnd.hbci",
            "type" => "application/vnd.hbci",
            "Reference" => "[Ingo_Hammann]"
        ],
        [
            "extension" => "vnd.hc+json",
            "type" => "application/vnd.hc+json",
            "Reference" => "[Jan_Schütze]"
        ],
        [
            "extension" => "vnd.hcl-bireports",
            "type" => "application/vnd.hcl-bireports",
            "Reference" => "[Doug_R._Serres]"
        ],
        [
            "extension" => "vnd.hdt",
            "type" => "application/vnd.hdt",
            "Reference" => "[Javier_D._Fernández]"
        ],
        [
            "extension" => "vnd.heroku+json",
            "type" => "application/vnd.heroku+json",
            "Reference" => "[Wesley_Beary]"
        ],
        [
            "extension" => "vnd.hhe.lesson-player",
            "type" => "application/vnd.hhe.lesson-player",
            "Reference" => "[Randy_Jones]"
        ],
        [
            "extension" => "vnd.hp-HPGL",
            "type" => "application/vnd.hp-HPGL",
            "Reference" => "[Bob_Pentecost]"
        ],
        [
            "extension" => "vnd.hp-hpid",
            "type" => "application/vnd.hp-hpid",
            "Reference" => "[Aloke_Gupta]"
        ],
        [
            "extension" => "vnd.hp-hps",
            "type" => "application/vnd.hp-hps",
            "Reference" => "[Steve_Aubrey]"
        ],
        [
            "extension" => "vnd.hp-jlyt",
            "type" => "application/vnd.hp-jlyt",
            "Reference" => "[Amir_Gaash]"
        ],
        [
            "extension" => "vnd.hp-PCL",
            "type" => "application/vnd.hp-PCL",
            "Reference" => "[Bob_Pentecost]"
        ],
        [
            "extension" => "vnd.hp-PCLXL",
            "type" => "application/vnd.hp-PCLXL",
            "Reference" => "[Bob_Pentecost]"
        ],
        [
            "extension" => "vnd.httphone",
            "type" => "application/vnd.httphone",
            "Reference" => "[Franck_Lefevre]"
        ],
        [
            "extension" => "vnd.hydrostatix.sof-data",
            "type" => "application/vnd.hydrostatix.sof-data",
            "Reference" => "[Allen_Gillam]"
        ],
        [
            "extension" => "vnd.hyper-item+json",
            "type" => "application/vnd.hyper-item+json",
            "Reference" => "[Mario_Demuth]"
        ],
        [
            "extension" => "vnd.hyper+json",
            "type" => "application/vnd.hyper+json",
            "Reference" => "[Irakli_Nadareishvili]"
        ],
        [
            "extension" => "vnd.hyperdrive+json",
            "type" => "application/vnd.hyperdrive+json",
            "Reference" => "[Daniel_Sims]"
        ],
        [
            "extension" => "vnd.hzn-3d-crossword",
            "type" => "application/vnd.hzn-3d-crossword",
            "Reference" => "[James_Minnis]"
        ],
        [
            "extension" => "vnd.ibm.afplinedata - OBSOLETED in favor of vnd.afpc.afplinedata",
            "type" => "application/vnd.ibm.afplinedata",
            "Reference" => "[Roger_Buis]"
        ],
        [
            "extension" => "vnd.ibm.electronic-media",
            "type" => "application/vnd.ibm.electronic-media",
            "Reference" => "[Bruce_Tantlinger]"
        ],
        [
            "extension" => "vnd.ibm.MiniPay",
            "type" => "application/vnd.ibm.MiniPay",
            "Reference" => "[Amir_Herzberg]"
        ],
        [
            "extension" => "vnd.ibm.modcap - OBSOLETED in favor of application/vnd.afpc.modca",
            "type" => "application/vnd.ibm.modcap",
            "Reference" => "[Reinhard_Hohensee]"
        ],
        [
            "extension" => "vnd.ibm.rights-management",
            "type" => "application/vnd.ibm.rights-management",
            "Reference" => "[Bruce_Tantlinger]"
        ],
        [
            "extension" => "vnd.ibm.secure-container",
            "type" => "application/vnd.ibm.secure-container",
            "Reference" => "[Bruce_Tantlinger]"
        ],
        [
            "extension" => "vnd.iccprofile",
            "type" => "application/vnd.iccprofile",
            "Reference" => "[Phil_Green]"
        ],
        [
            "extension" => "vnd.ieee.1905",
            "type" => "application/vnd.ieee.1905",
            "Reference" => "[Purva_R_Rajkotia]"
        ],
        [
            "extension" => "vnd.igloader",
            "type" => "application/vnd.igloader",
            "Reference" => "[Tim_Fisher]"
        ],
        [
            "extension" => "vnd.imagemeter.folder+zip",
            "type" => "application/vnd.imagemeter.folder+zip",
            "Reference" => "[Dirk_Farin]"
        ],
        [
            "extension" => "vnd.imagemeter.image+zip",
            "type" => "application/vnd.imagemeter.image+zip",
            "Reference" => "[Dirk_Farin]"
        ],
        [
            "extension" => "vnd.immervision-ivp",
            "type" => "application/vnd.immervision-ivp",
            "Reference" => "[Mathieu_Villegas]"
        ],
        [
            "extension" => "vnd.immervision-ivu",
            "type" => "application/vnd.immervision-ivu",
            "Reference" => "[Mathieu_Villegas]"
        ],
        [
            "extension" => "vnd.ims.imsccv1p1",
            "type" => "application/vnd.ims.imsccv1p1",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.imsccv1p2",
            "type" => "application/vnd.ims.imsccv1p2",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.imsccv1p3",
            "type" => "application/vnd.ims.imsccv1p3",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.lis.v2.result+json",
            "type" => "application/vnd.ims.lis.v2.result+json",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.lti.v2.toolconsumerprofile+json",
            "type" => "application/vnd.ims.lti.v2.toolconsumerprofile+json",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.lti.v2.toolproxy.id+json",
            "type" => "application/vnd.ims.lti.v2.toolproxy.id+json",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.lti.v2.toolproxy+json",
            "type" => "application/vnd.ims.lti.v2.toolproxy+json",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.lti.v2.toolsettings+json",
            "type" => "application/vnd.ims.lti.v2.toolsettings+json",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.lti.v2.toolsettings.simple+json",
            "type" => "application/vnd.ims.lti.v2.toolsettings.simple+json",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.informedcontrol.rms+xml",
            "type" => "application/vnd.informedcontrol.rms+xml",
            "Reference" => "[Mark_Wahl]"
        ],
        [
            "extension" => "vnd.infotech.project",
            "type" => "application/vnd.infotech.project",
            "Reference" => "[Charles_Engelke]"
        ],
        [
            "extension" => "vnd.infotech.project+xml",
            "type" => "application/vnd.infotech.project+xml",
            "Reference" => "[Charles_Engelke]"
        ],
        [
            "extension" => "vnd.informix-visionary - OBSOLETED in favor of application/vnd.visionary",
            "type" => "application/vnd.informix-visionary",
            "Reference" => "[Christopher_Gales]"
        ],
        [
            "extension" => "vnd.innopath.wamp.notification",
            "type" => "application/vnd.innopath.wamp.notification",
            "Reference" => "[Takanori_Sudo]"
        ],
        [
            "extension" => "vnd.insors.igm",
            "type" => "application/vnd.insors.igm",
            "Reference" => "[Jon_Swanson]"
        ],
        [
            "extension" => "vnd.intercon.formnet",
            "type" => "application/vnd.intercon.formnet",
            "Reference" => "[Tom_Gurak]"
        ],
        [
            "extension" => "vnd.intergeo",
            "type" => "application/vnd.intergeo",
            "Reference" => "[Yves_Kreis_2]"
        ],
        [
            "extension" => "vnd.intertrust.digibox",
            "type" => "application/vnd.intertrust.digibox",
            "Reference" => "[Luke_Tomasello]"
        ],
        [
            "extension" => "vnd.intertrust.nncp",
            "type" => "application/vnd.intertrust.nncp",
            "Reference" => "[Luke_Tomasello]"
        ],
        [
            "extension" => "vnd.intu.qbo",
            "type" => "application/vnd.intu.qbo",
            "Reference" => "[Greg_Scratchley]"
        ],
        [
            "extension" => "vnd.intu.qfx",
            "type" => "application/vnd.intu.qfx",
            "Reference" => "[Greg_Scratchley]"
        ],
        [
            "extension" => "vnd.iptc.g2.catalogitem+xml",
            "type" => "application/vnd.iptc.g2.catalogitem+xml",
            "Reference" => "[Michael_Steidl]"
        ],
        [
            "extension" => "vnd.iptc.g2.conceptitem+xml",
            "type" => "application/vnd.iptc.g2.conceptitem+xml",
            "Reference" => "[Michael_Steidl]"
        ],
        [
            "extension" => "vnd.iptc.g2.knowledgeitem+xml",
            "type" => "application/vnd.iptc.g2.knowledgeitem+xml",
            "Reference" => "[Michael_Steidl]"
        ],
        [
            "extension" => "vnd.iptc.g2.newsitem+xml",
            "type" => "application/vnd.iptc.g2.newsitem+xml",
            "Reference" => "[Michael_Steidl]"
        ],
        [
            "extension" => "vnd.iptc.g2.newsmessage+xml",
            "type" => "application/vnd.iptc.g2.newsmessage+xml",
            "Reference" => "[Michael_Steidl]"
        ],
        [
            "extension" => "vnd.iptc.g2.packageitem+xml",
            "type" => "application/vnd.iptc.g2.packageitem+xml",
            "Reference" => "[Michael_Steidl]"
        ],
        [
            "extension" => "vnd.iptc.g2.planningitem+xml",
            "type" => "application/vnd.iptc.g2.planningitem+xml",
            "Reference" => "[Michael_Steidl]"
        ],
        [
            "extension" => "vnd.ipunplugged.rcprofile",
            "type" => "application/vnd.ipunplugged.rcprofile",
            "Reference" => "[Per_Ersson]"
        ],
        [
            "extension" => "vnd.irepository.package+xml",
            "type" => "application/vnd.irepository.package+xml",
            "Reference" => "[Martin_Knowles]"
        ],
        [
            "extension" => "vnd.is-xpr",
            "type" => "application/vnd.is-xpr",
            "Reference" => "[Satish_Navarajan]"
        ],
        [
            "extension" => "vnd.isac.fcs",
            "type" => "application/vnd.isac.fcs",
            "Reference" => "[Ryan_Brinkman]"
        ],
        [
            "extension" => "vnd.jam",
            "type" => "application/vnd.jam",
            "Reference" => "[Brijesh_Kumar]"
        ],
        [
            "extension" => "vnd.iso11783-10+zip",
            "type" => "application/vnd.iso11783-10+zip",
            "Reference" => "[Frank_Wiebeler]"
        ],
        [
            "extension" => "vnd.japannet-directory-service",
            "type" => "application/vnd.japannet-directory-service",
            "Reference" => "[Kiyofusa_Fujii]"
        ],
        [
            "extension" => "vnd.japannet-jpnstore-wakeup",
            "type" => "application/vnd.japannet-jpnstore-wakeup",
            "Reference" => "[Jun_Yoshitake]"
        ],
        [
            "extension" => "vnd.japannet-payment-wakeup",
            "type" => "application/vnd.japannet-payment-wakeup",
            "Reference" => "[Kiyofusa_Fujii]"
        ],
        [
            "extension" => "vnd.japannet-registration",
            "type" => "application/vnd.japannet-registration",
            "Reference" => "[Jun_Yoshitake]"
        ],
        [
            "extension" => "vnd.japannet-registration-wakeup",
            "type" => "application/vnd.japannet-registration-wakeup",
            "Reference" => "[Kiyofusa_Fujii]"
        ],
        [
            "extension" => "vnd.japannet-setstore-wakeup",
            "type" => "application/vnd.japannet-setstore-wakeup",
            "Reference" => "[Jun_Yoshitake]"
        ],
        [
            "extension" => "vnd.japannet-verification",
            "type" => "application/vnd.japannet-verification",
            "Reference" => "[Jun_Yoshitake]"
        ],
        [
            "extension" => "vnd.japannet-verification-wakeup",
            "type" => "application/vnd.japannet-verification-wakeup",
            "Reference" => "[Kiyofusa_Fujii]"
        ],
        [
            "extension" => "vnd.jcp.javame.midlet-rms",
            "type" => "application/vnd.jcp.javame.midlet-rms",
            "Reference" => "[Mikhail_Gorshenev]"
        ],
        [
            "extension" => "vnd.jisp",
            "type" => "application/vnd.jisp",
            "Reference" => "[Sebastiaan_Deckers]"
        ],
        [
            "extension" => "vnd.joost.joda-archive",
            "type" => "application/vnd.joost.joda-archive",
            "Reference" => "[Joost]"
        ],
        [
            "extension" => "vnd.jsk.isdn-ngn",
            "type" => "application/vnd.jsk.isdn-ngn",
            "Reference" => "[Yokoyama_Kiyonobu]"
        ],
        [
            "extension" => "vnd.kahootz",
            "type" => "application/vnd.kahootz",
            "Reference" => "[Tim_Macdonald]"
        ],
        [
            "extension" => "vnd.kde.karbon",
            "type" => "application/vnd.kde.karbon",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kde.kchart",
            "type" => "application/vnd.kde.kchart",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kde.kformula",
            "type" => "application/vnd.kde.kformula",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kde.kivio",
            "type" => "application/vnd.kde.kivio",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kde.kontour",
            "type" => "application/vnd.kde.kontour",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kde.kpresenter",
            "type" => "application/vnd.kde.kpresenter",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kde.kspread",
            "type" => "application/vnd.kde.kspread",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kde.kword",
            "type" => "application/vnd.kde.kword",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kenameaapp",
            "type" => "application/vnd.kenameaapp",
            "Reference" => "[Dirk_DiGiorgio-Haag]"
        ],
        [
            "extension" => "vnd.kidspiration",
            "type" => "application/vnd.kidspiration",
            "Reference" => "[Jack_Bennett]"
        ],
        [
            "extension" => "vnd.Kinar",
            "type" => "application/vnd.Kinar",
            "Reference" => "[Hemant_Thakkar]"
        ],
        [
            "extension" => "vnd.koan",
            "type" => "application/vnd.koan",
            "Reference" => "[Pete_Cole]"
        ],
        [
            "extension" => "vnd.kodak-descriptor",
            "type" => "application/vnd.kodak-descriptor",
            "Reference" => "[Michael_J._Donahue]"
        ],
        [
            "extension" => "vnd.las",
            "type" => "application/vnd.las",
            "Reference" => "[NCGIS][Bryan_Blank]"
        ],
        [
            "extension" => "vnd.las.las+json",
            "type" => "application/vnd.las.las+json",
            "Reference" => "[Rob_Bailey]"
        ],
        [
            "extension" => "vnd.las.las+xml",
            "type" => "application/vnd.las.las+xml",
            "Reference" => "[Rob_Bailey]"
        ],
        [
            "extension" => "vnd.laszip",
            "type" => "application/vnd.laszip",
            "Reference" => "[NCGIS][Bryan_Blank]"
        ],
        [
            "extension" => "vnd.leap+json",
            "type" => "application/vnd.leap+json",
            "Reference" => "[Mark_C_Fralick]"
        ],
        [
            "extension" => "vnd.liberty-request+xml",
            "type" => "application/vnd.liberty-request+xml",
            "Reference" => "[Brett_McDowell]"
        ],
        [
            "extension" => "vnd.llamagraphics.life-balance.desktop",
            "type" => "application/vnd.llamagraphics.life-balance.desktop",
            "Reference" => "[Catherine_E._White]"
        ],
        [
            "extension" => "vnd.llamagraphics.life-balance.exchange+xml",
            "type" => "application/vnd.llamagraphics.life-balance.exchange+xml",
            "Reference" => "[Catherine_E._White]"
        ],
        [
            "extension" => "vnd.logipipe.circuit+zip",
            "type" => "application/vnd.logipipe.circuit+zip",
            "Reference" => "[Victor_Kuchynsky]"
        ],
        [
            "extension" => "vnd.loom",
            "type" => "application/vnd.loom",
            "Reference" => "[Sten_Linnarsson]"
        ],
        [
            "extension" => "vnd.lotus-1-2-3",
            "type" => "application/vnd.lotus-1-2-3",
            "Reference" => "[Paul_Wattenberger]"
        ],
        [
            "extension" => "vnd.lotus-approach",
            "type" => "application/vnd.lotus-approach",
            "Reference" => "[Paul_Wattenberger]"
        ],
        [
            "extension" => "vnd.lotus-freelance",
            "type" => "application/vnd.lotus-freelance",
            "Reference" => "[Paul_Wattenberger]"
        ],
        [
            "extension" => "vnd.lotus-notes",
            "type" => "application/vnd.lotus-notes",
            "Reference" => "[Michael_Laramie]"
        ],
        [
            "extension" => "vnd.lotus-organizer",
            "type" => "application/vnd.lotus-organizer",
            "Reference" => "[Paul_Wattenberger]"
        ],
        [
            "extension" => "vnd.lotus-screencam",
            "type" => "application/vnd.lotus-screencam",
            "Reference" => "[Paul_Wattenberger]"
        ],
        [
            "extension" => "vnd.lotus-wordpro",
            "type" => "application/vnd.lotus-wordpro",
            "Reference" => "[Paul_Wattenberger]"
        ],
        [
            "extension" => "vnd.macports.portpkg",
            "type" => "application/vnd.macports.portpkg",
            "Reference" => "[James_Berry]"
        ],
        [
            "extension" => "vnd.mapbox-vector-tile",
            "type" => "application/vnd.mapbox-vector-tile",
            "Reference" => "[Blake_Thompson]"
        ],
        [
            "extension" => "vnd.marlin.drm.actiontoken+xml",
            "type" => "application/vnd.marlin.drm.actiontoken+xml",
            "Reference" => "[Gary_Ellison]"
        ],
        [
            "extension" => "vnd.marlin.drm.conftoken+xml",
            "type" => "application/vnd.marlin.drm.conftoken+xml",
            "Reference" => "[Gary_Ellison]"
        ],
        [
            "extension" => "vnd.marlin.drm.license+xml",
            "type" => "application/vnd.marlin.drm.license+xml",
            "Reference" => "[Gary_Ellison]"
        ],
        [
            "extension" => "vnd.marlin.drm.mdcf",
            "type" => "application/vnd.marlin.drm.mdcf",
            "Reference" => "[Gary_Ellison]"
        ],
        [
            "extension" => "vnd.mason+json",
            "type" => "application/vnd.mason+json",
            "Reference" => "[Jorn_Wildt]"
        ],
        [
            "extension" => "vnd.maxmind.maxmind-db",
            "type" => "application/vnd.maxmind.maxmind-db",
            "Reference" => "[William_Stevenson]"
        ],
        [
            "extension" => "vnd.mcd",
            "type" => "application/vnd.mcd",
            "Reference" => "[Tadashi_Gotoh]"
        ],
        [
            "extension" => "vnd.medcalcdata",
            "type" => "application/vnd.medcalcdata",
            "Reference" => "[Frank_Schoonjans]"
        ],
        [
            "extension" => "vnd.mediastation.cdkey",
            "type" => "application/vnd.mediastation.cdkey",
            "Reference" => "[Henry_Flurry]"
        ],
        [
            "extension" => "vnd.meridian-slingshot",
            "type" => "application/vnd.meridian-slingshot",
            "Reference" => "[Eric_Wedel]"
        ],
        [
            "extension" => "vnd.MFER",
            "type" => "application/vnd.MFER",
            "Reference" => "[Masaaki_Hirai]"
        ],
        [
            "extension" => "vnd.mfmp",
            "type" => "application/vnd.mfmp",
            "Reference" => "[Yukari_Ikeda]"
        ],
        [
            "extension" => "vnd.micro+json",
            "type" => "application/vnd.micro+json",
            "Reference" => "[Dali_Zheng]"
        ],
        [
            "extension" => "vnd.micrografx.flo",
            "type" => "application/vnd.micrografx.flo",
            "Reference" => "[Joe_Prevo]"
        ],
        [
            "extension" => "vnd.micrografx.igx",
            "type" => "application/vnd.micrografx.igx",
            "Reference" => "[Joe_Prevo]"
        ],
        [
            "extension" => "vnd.microsoft.portable-executable",
            "type" => "application/vnd.microsoft.portable-executable",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.microsoft.windows.thumbnail-cache",
            "type" => "application/vnd.microsoft.windows.thumbnail-cache",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.miele+json",
            "type" => "application/vnd.miele+json",
            "Reference" => "[Nils_Langhammer]"
        ],
        [
            "extension" => "vnd.mif",
            "type" => "application/vnd.mif",
            "Reference" => "[Mike_Wexler]"
        ],
        [
            "extension" => "vnd.minisoft-hp3000-save",
            "type" => "application/vnd.minisoft-hp3000-save",
            "Reference" => "[Chris_Bartram]"
        ],
        [
            "extension" => "vnd.mitsubishi.misty-guard.trustweb",
            "type" => "application/vnd.mitsubishi.misty-guard.trustweb",
            "Reference" => "[Tanaka]"
        ],
        [
            "extension" => "vnd.Mobius.DAF",
            "type" => "application/vnd.Mobius.DAF",
            "Reference" => "[Allen_K._Kabayama]"
        ],
        [
            "extension" => "vnd.Mobius.DIS",
            "type" => "application/vnd.Mobius.DIS",
            "Reference" => "[Allen_K._Kabayama]"
        ],
        [
            "extension" => "vnd.Mobius.MBK",
            "type" => "application/vnd.Mobius.MBK",
            "Reference" => "[Alex_Devasia]"
        ],
        [
            "extension" => "vnd.Mobius.MQY",
            "type" => "application/vnd.Mobius.MQY",
            "Reference" => "[Alex_Devasia]"
        ],
        [
            "extension" => "vnd.Mobius.MSL",
            "type" => "application/vnd.Mobius.MSL",
            "Reference" => "[Allen_K._Kabayama]"
        ],
        [
            "extension" => "vnd.Mobius.PLC",
            "type" => "application/vnd.Mobius.PLC",
            "Reference" => "[Allen_K._Kabayama]"
        ],
        [
            "extension" => "vnd.Mobius.TXF",
            "type" => "application/vnd.Mobius.TXF",
            "Reference" => "[Allen_K._Kabayama]"
        ],
        [
            "extension" => "vnd.mophun.application",
            "type" => "application/vnd.mophun.application",
            "Reference" => "[Bjorn_Wennerstrom]"
        ],
        [
            "extension" => "vnd.mophun.certificate",
            "type" => "application/vnd.mophun.certificate",
            "Reference" => "[Bjorn_Wennerstrom]"
        ],
        [
            "extension" => "vnd.motorola.flexsuite",
            "type" => "application/vnd.motorola.flexsuite",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.motorola.flexsuite.adsi",
            "type" => "application/vnd.motorola.flexsuite.adsi",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.motorola.flexsuite.fis",
            "type" => "application/vnd.motorola.flexsuite.fis",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.motorola.flexsuite.gotap",
            "type" => "application/vnd.motorola.flexsuite.gotap",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.motorola.flexsuite.kmr",
            "type" => "application/vnd.motorola.flexsuite.kmr",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.motorola.flexsuite.ttc",
            "type" => "application/vnd.motorola.flexsuite.ttc",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.motorola.flexsuite.wem",
            "type" => "application/vnd.motorola.flexsuite.wem",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.motorola.iprm",
            "type" => "application/vnd.motorola.iprm",
            "Reference" => "[Rafie_Shamsaasef]"
        ],
        [
            "extension" => "vnd.mozilla.xul+xml",
            "type" => "application/vnd.mozilla.xul+xml",
            "Reference" => "[Braden_N_McDaniel]"
        ],
        [
            "extension" => "vnd.ms-artgalry",
            "type" => "application/vnd.ms-artgalry",
            "Reference" => "[Dean_Slawson]"
        ],
        [
            "extension" => "vnd.ms-asf",
            "type" => "application/vnd.ms-asf",
            "Reference" => "[Eric_Fleischman]"
        ],
        [
            "extension" => "vnd.ms-cab-compressed",
            "type" => "application/vnd.ms-cab-compressed",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.ms-3mfdocument",
            "type" => "application/vnd.ms-3mfdocument",
            "Reference" => "[Shawn_Maloney]"
        ],
        [
            "extension" => "vnd.ms-excel",
            "type" => "application/vnd.ms-excel",
            "Reference" => "[Sukvinder_S._Gill]"
        ],
        [
            "extension" => "vnd.ms-excel.addin.macroEnabled.12",
            "type" => "application/vnd.ms-excel.addin.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-excel.sheet.binary.macroEnabled.12",
            "type" => "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-excel.sheet.macroEnabled.12",
            "type" => "application/vnd.ms-excel.sheet.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-excel.template.macroEnabled.12",
            "type" => "application/vnd.ms-excel.template.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-fontobject",
            "type" => "application/vnd.ms-fontobject",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.ms-htmlhelp",
            "type" => "application/vnd.ms-htmlhelp",
            "Reference" => "[Anatoly_Techtonik]"
        ],
        [
            "extension" => "vnd.ms-ims",
            "type" => "application/vnd.ms-ims",
            "Reference" => "[Eric_Ledoux]"
        ],
        [
            "extension" => "vnd.ms-lrm",
            "type" => "application/vnd.ms-lrm",
            "Reference" => "[Eric_Ledoux]"
        ],
        [
            "extension" => "vnd.ms-office.activeX+xml",
            "type" => "application/vnd.ms-office.activeX+xml",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-officetheme",
            "type" => "application/vnd.ms-officetheme",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-playready.initiator+xml",
            "type" => "application/vnd.ms-playready.initiator+xml",
            "Reference" => "[Daniel_Schneider]"
        ],
        [
            "extension" => "vnd.ms-powerpoint",
            "type" => "application/vnd.ms-powerpoint",
            "Reference" => "[Sukvinder_S._Gill]"
        ],
        [
            "extension" => "vnd.ms-powerpoint.addin.macroEnabled.12",
            "type" => "application/vnd.ms-powerpoint.addin.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-powerpoint.presentation.macroEnabled.12",
            "type" => "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-powerpoint.slide.macroEnabled.12",
            "type" => "application/vnd.ms-powerpoint.slide.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-powerpoint.slideshow.macroEnabled.12",
            "type" => "application/vnd.ms-powerpoint.slideshow.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-powerpoint.template.macroEnabled.12",
            "type" => "application/vnd.ms-powerpoint.template.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-PrintDeviceCapabilities+xml",
            "type" => "application/vnd.ms-PrintDeviceCapabilities+xml",
            "Reference" => "[Justin_Hutchings]"
        ],
        [
            "extension" => "vnd.ms-PrintSchemaTicket+xml",
            "type" => "application/vnd.ms-PrintSchemaTicket+xml",
            "Reference" => "[Justin_Hutchings]"
        ],
        [
            "extension" => "vnd.ms-project",
            "type" => "application/vnd.ms-project",
            "Reference" => "[Sukvinder_S._Gill]"
        ],
        [
            "extension" => "vnd.ms-tnef",
            "type" => "application/vnd.ms-tnef",
            "Reference" => "[Sukvinder_S._Gill]"
        ],
        [
            "extension" => "vnd.ms-windows.devicepairing",
            "type" => "application/vnd.ms-windows.devicepairing",
            "Reference" => "[Justin_Hutchings]"
        ],
        [
            "extension" => "vnd.ms-windows.nwprinting.oob",
            "type" => "application/vnd.ms-windows.nwprinting.oob",
            "Reference" => "[Justin_Hutchings]"
        ],
        [
            "extension" => "vnd.ms-windows.printerpairing",
            "type" => "application/vnd.ms-windows.printerpairing",
            "Reference" => "[Justin_Hutchings]"
        ],
        [
            "extension" => "vnd.ms-windows.wsd.oob",
            "type" => "application/vnd.ms-windows.wsd.oob",
            "Reference" => "[Justin_Hutchings]"
        ],
        [
            "extension" => "vnd.ms-wmdrm.lic-chlg-req",
            "type" => "application/vnd.ms-wmdrm.lic-chlg-req",
            "Reference" => "[Kevin_Lau]"
        ],
        [
            "extension" => "vnd.ms-wmdrm.lic-resp",
            "type" => "application/vnd.ms-wmdrm.lic-resp",
            "Reference" => "[Kevin_Lau]"
        ],
        [
            "extension" => "vnd.ms-wmdrm.meter-chlg-req",
            "type" => "application/vnd.ms-wmdrm.meter-chlg-req",
            "Reference" => "[Kevin_Lau]"
        ],
        [
            "extension" => "vnd.ms-wmdrm.meter-resp",
            "type" => "application/vnd.ms-wmdrm.meter-resp",
            "Reference" => "[Kevin_Lau]"
        ],
        [
            "extension" => "vnd.ms-word.document.macroEnabled.12",
            "type" => "application/vnd.ms-word.document.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-word.template.macroEnabled.12",
            "type" => "application/vnd.ms-word.template.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-works",
            "type" => "application/vnd.ms-works",
            "Reference" => "[Sukvinder_S._Gill]"
        ],
        [
            "extension" => "vnd.ms-wpl",
            "type" => "application/vnd.ms-wpl",
            "Reference" => "[Dan_Plastina]"
        ],
        [
            "extension" => "vnd.ms-xpsdocument",
            "type" => "application/vnd.ms-xpsdocument",
            "Reference" => "[Jesse_McGatha]"
        ],
        [
            "extension" => "vnd.msa-disk-image",
            "type" => "application/vnd.msa-disk-image",
            "Reference" => "[Thomas_Huth]"
        ],
        [
            "extension" => "vnd.mseq",
            "type" => "application/vnd.mseq",
            "Reference" => "[Gwenael_Le_Bodic]"
        ],
        [
            "extension" => "vnd.msign",
            "type" => "application/vnd.msign",
            "Reference" => "[Malte_Borcherding]"
        ],
        [
            "extension" => "vnd.multiad.creator",
            "type" => "application/vnd.multiad.creator",
            "Reference" => "[Steve_Mills]"
        ],
        [
            "extension" => "vnd.multiad.creator.cif",
            "type" => "application/vnd.multiad.creator.cif",
            "Reference" => "[Steve_Mills]"
        ],
        [
            "extension" => "vnd.musician",
            "type" => "application/vnd.musician",
            "Reference" => "[Greg_Adams]"
        ],
        [
            "extension" => "vnd.music-niff",
            "type" => "application/vnd.music-niff",
            "Reference" => "[Tim_Butler]"
        ],
        [
            "extension" => "vnd.muvee.style",
            "type" => "application/vnd.muvee.style",
            "Reference" => "[Chandrashekhara_Anantharamu]"
        ],
        [
            "extension" => "vnd.mynfc",
            "type" => "application/vnd.mynfc",
            "Reference" => "[Franck_Lefevre]"
        ],
        [
            "extension" => "vnd.ncd.control",
            "type" => "application/vnd.ncd.control",
            "Reference" => "[Lauri_Tarkkala]"
        ],
        [
            "extension" => "vnd.ncd.reference",
            "type" => "application/vnd.ncd.reference",
            "Reference" => "[Lauri_Tarkkala]"
        ],
        [
            "extension" => "vnd.nearst.inv+json",
            "type" => "application/vnd.nearst.inv+json",
            "Reference" => "[Thomas_Schoffelen]"
        ],
        [
            "extension" => "vnd.nervana",
            "type" => "application/vnd.nervana",
            "Reference" => "[Steve_Judkins]"
        ],
        [
            "extension" => "vnd.netfpx",
            "type" => "application/vnd.netfpx",
            "Reference" => "[Andy_Mutz]"
        ],
        [
            "extension" => "vnd.neurolanguage.nlu",
            "type" => "application/vnd.neurolanguage.nlu",
            "Reference" => "[Dan_DuFeu]"
        ],
        [
            "extension" => "vnd.nimn",
            "type" => "application/vnd.nimn",
            "Reference" => "[Amit_Kumar_Gupta]"
        ],
        [
            "extension" => "vnd.nintendo.snes.rom",
            "type" => "application/vnd.nintendo.snes.rom",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.nintendo.nitro.rom",
            "type" => "application/vnd.nintendo.nitro.rom",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.nitf",
            "type" => "application/vnd.nitf",
            "Reference" => "[Steve_Rogan]"
        ],
        [
            "extension" => "vnd.noblenet-directory",
            "type" => "application/vnd.noblenet-directory",
            "Reference" => "[Monty_Solomon]"
        ],
        [
            "extension" => "vnd.noblenet-sealer",
            "type" => "application/vnd.noblenet-sealer",
            "Reference" => "[Monty_Solomon]"
        ],
        [
            "extension" => "vnd.noblenet-web",
            "type" => "application/vnd.noblenet-web",
            "Reference" => "[Monty_Solomon]"
        ],
        [
            "extension" => "vnd.nokia.catalogs",
            "type" => "application/vnd.nokia.catalogs",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.conml+wbxml",
            "type" => "application/vnd.nokia.conml+wbxml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.conml+xml",
            "type" => "application/vnd.nokia.conml+xml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.iptv.config+xml",
            "type" => "application/vnd.nokia.iptv.config+xml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.iSDS-radio-presets",
            "type" => "application/vnd.nokia.iSDS-radio-presets",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.landmark+wbxml",
            "type" => "application/vnd.nokia.landmark+wbxml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.landmark+xml",
            "type" => "application/vnd.nokia.landmark+xml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.landmarkcollection+xml",
            "type" => "application/vnd.nokia.landmarkcollection+xml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.ncd",
            "type" => "application/vnd.nokia.ncd",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.n-gage.ac+xml",
            "type" => "application/vnd.nokia.n-gage.ac+xml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.n-gage.data",
            "type" => "application/vnd.nokia.n-gage.data",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.n-gage.symbian.install - OBSOLETE; no replacement given",
            "type" => "application/vnd.nokia.n-gage.symbian.install",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.pcd+wbxml",
            "type" => "application/vnd.nokia.pcd+wbxml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.pcd+xml",
            "type" => "application/vnd.nokia.pcd+xml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.radio-preset",
            "type" => "application/vnd.nokia.radio-preset",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.radio-presets",
            "type" => "application/vnd.nokia.radio-presets",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.novadigm.EDM",
            "type" => "application/vnd.novadigm.EDM",
            "Reference" => "[Janine_Swenson]"
        ],
        [
            "extension" => "vnd.novadigm.EDX",
            "type" => "application/vnd.novadigm.EDX",
            "Reference" => "[Janine_Swenson]"
        ],
        [
            "extension" => "vnd.novadigm.EXT",
            "type" => "application/vnd.novadigm.EXT",
            "Reference" => "[Janine_Swenson]"
        ],
        [
            "extension" => "vnd.ntt-local.content-share",
            "type" => "application/vnd.ntt-local.content-share",
            "Reference" => "[Akinori_Taya]"
        ],
        [
            "extension" => "vnd.ntt-local.file-transfer",
            "type" => "application/vnd.ntt-local.file-transfer",
            "Reference" => "[NTT-local]"
        ],
        [
            "extension" => "vnd.ntt-local.ogw_remote-access",
            "type" => "application/vnd.ntt-local.ogw_remote-access",
            "Reference" => "[NTT-local]"
        ],
        [
            "extension" => "vnd.ntt-local.sip-ta_remote",
            "type" => "application/vnd.ntt-local.sip-ta_remote",
            "Reference" => "[NTT-local]"
        ],
        [
            "extension" => "vnd.ntt-local.sip-ta_tcp_stream",
            "type" => "application/vnd.ntt-local.sip-ta_tcp_stream",
            "Reference" => "[NTT-local]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.chart",
            "type" => "application/vnd.oasis.opendocument.chart",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.chart-template",
            "type" => "application/vnd.oasis.opendocument.chart-template",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.database",
            "type" => "application/vnd.oasis.opendocument.database",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.formula",
            "type" => "application/vnd.oasis.opendocument.formula",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.formula-template",
            "type" => "application/vnd.oasis.opendocument.formula-template",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.graphics",
            "type" => "application/vnd.oasis.opendocument.graphics",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.graphics-template",
            "type" => "application/vnd.oasis.opendocument.graphics-template",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.image",
            "type" => "application/vnd.oasis.opendocument.image",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.image-template",
            "type" => "application/vnd.oasis.opendocument.image-template",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.presentation",
            "type" => "application/vnd.oasis.opendocument.presentation",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.presentation-template",
            "type" => "application/vnd.oasis.opendocument.presentation-template",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.spreadsheet",
            "type" => "application/vnd.oasis.opendocument.spreadsheet",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.spreadsheet-template",
            "type" => "application/vnd.oasis.opendocument.spreadsheet-template",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.text",
            "type" => "application/vnd.oasis.opendocument.text",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.text-master",
            "type" => "application/vnd.oasis.opendocument.text-master",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.text-template",
            "type" => "application/vnd.oasis.opendocument.text-template",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.text-web",
            "type" => "application/vnd.oasis.opendocument.text-web",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.obn",
            "type" => "application/vnd.obn",
            "Reference" => "[Matthias_Hessling]"
        ],
        [
            "extension" => "vnd.ocf+cbor",
            "type" => "application/vnd.ocf+cbor",
            "Reference" => "[Michael_Koster]"
        ],
        [
            "extension" => "vnd.oci.image.manifest.v1+json",
            "type" => "application/vnd.oci.image.manifest.v1+json",
            "Reference" => "[Steven_Lasker]"
        ],
        [
            "extension" => "vnd.oftn.l10n+json",
            "type" => "application/vnd.oftn.l10n+json",
            "Reference" => "[Eli_Grey]"
        ],
        [
            "extension" => "vnd.oipf.contentaccessdownload+xml",
            "type" => "application/vnd.oipf.contentaccessdownload+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.contentaccessstreaming+xml",
            "type" => "application/vnd.oipf.contentaccessstreaming+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.cspg-hexbinary",
            "type" => "application/vnd.oipf.cspg-hexbinary",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.dae.svg+xml",
            "type" => "application/vnd.oipf.dae.svg+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.dae.xhtml+xml",
            "type" => "application/vnd.oipf.dae.xhtml+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.mippvcontrolmessage+xml",
            "type" => "application/vnd.oipf.mippvcontrolmessage+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.pae.gem",
            "type" => "application/vnd.oipf.pae.gem",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.spdiscovery+xml",
            "type" => "application/vnd.oipf.spdiscovery+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.spdlist+xml",
            "type" => "application/vnd.oipf.spdlist+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.ueprofile+xml",
            "type" => "application/vnd.oipf.ueprofile+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.userprofile+xml",
            "type" => "application/vnd.oipf.userprofile+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.olpc-sugar",
            "type" => "application/vnd.olpc-sugar",
            "Reference" => "[John_Palmieri]"
        ],
        [
            "extension" => "vnd.oma.bcast.associated-procedure-parameter+xml",
            "type" => "application/vnd.oma.bcast.associated-procedure-parameter+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.drm-trigger+xml",
            "type" => "application/vnd.oma.bcast.drm-trigger+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.imd+xml",
            "type" => "application/vnd.oma.bcast.imd+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.ltkm",
            "type" => "application/vnd.oma.bcast.ltkm",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.notification+xml",
            "type" => "application/vnd.oma.bcast.notification+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.provisioningtrigger",
            "type" => "application/vnd.oma.bcast.provisioningtrigger",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.sgboot",
            "type" => "application/vnd.oma.bcast.sgboot",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.sgdd+xml",
            "type" => "application/vnd.oma.bcast.sgdd+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.sgdu",
            "type" => "application/vnd.oma.bcast.sgdu",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.simple-symbol-container",
            "type" => "application/vnd.oma.bcast.simple-symbol-container",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.smartcard-trigger+xml",
            "type" => "application/vnd.oma.bcast.smartcard-trigger+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.sprov+xml",
            "type" => "application/vnd.oma.bcast.sprov+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.stkm",
            "type" => "application/vnd.oma.bcast.stkm",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.cab-address-book+xml",
            "type" => "application/vnd.oma.cab-address-book+xml",
            "Reference" => "[Hao_Wang][OMA]"
        ],
        [
            "extension" => "vnd.oma.cab-feature-handler+xml",
            "type" => "application/vnd.oma.cab-feature-handler+xml",
            "Reference" => "[Hao_Wang][OMA]"
        ],
        [
            "extension" => "vnd.oma.cab-pcc+xml",
            "type" => "application/vnd.oma.cab-pcc+xml",
            "Reference" => "[Hao_Wang][OMA]"
        ],
        [
            "extension" => "vnd.oma.cab-subs-invite+xml",
            "type" => "application/vnd.oma.cab-subs-invite+xml",
            "Reference" => "[Hao_Wang][OMA]"
        ],
        [
            "extension" => "vnd.oma.cab-user-prefs+xml",
            "type" => "application/vnd.oma.cab-user-prefs+xml",
            "Reference" => "[Hao_Wang][OMA]"
        ],
        [
            "extension" => "vnd.oma.dcd",
            "type" => "application/vnd.oma.dcd",
            "Reference" => "[Avi_Primo][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.dcdc",
            "type" => "application/vnd.oma.dcdc",
            "Reference" => "[Avi_Primo][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.dd2+xml",
            "type" => "application/vnd.oma.dd2+xml",
            "Reference" => "[Jun_Sato][Open_Mobile_Alliance_BAC_DLDRM_Working_Group]"
        ],
        [
            "extension" => "vnd.oma.drm.risd+xml",
            "type" => "application/vnd.oma.drm.risd+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.group-usage-list+xml",
            "type" => "application/vnd.oma.group-usage-list+xml",
            "Reference" => "[Sean_Kelley][OMA_Presence_and_Availability_PAG_Working_Group]"
        ],
        [
            "extension" => "vnd.oma.lwm2m+cbor",
            "type" => "application/vnd.oma.lwm2m+cbor",
            "Reference" => "[Open_Mobile_Naming_Authority][John_Mudge]"
        ],
        [
            "extension" => "vnd.oma.lwm2m+json",
            "type" => "application/vnd.oma.lwm2m+json",
            "Reference" => "[Open_Mobile_Naming_Authority][John_Mudge]"
        ],
        [
            "extension" => "vnd.oma.lwm2m+tlv",
            "type" => "application/vnd.oma.lwm2m+tlv",
            "Reference" => "[Open_Mobile_Naming_Authority][John_Mudge]"
        ],
        [
            "extension" => "vnd.oma.pal+xml",
            "type" => "application/vnd.oma.pal+xml",
            "Reference" => "[Brian_McColgan][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.poc.detailed-progress-report+xml",
            "type" => "application/vnd.oma.poc.detailed-progress-report+xml",
            "Reference" => "[OMA_Push_to_Talk_over_Cellular_POC_Working_Group]"
        ],
        [
            "extension" => "vnd.oma.poc.final-report+xml",
            "type" => "application/vnd.oma.poc.final-report+xml",
            "Reference" => "[OMA_Push_to_Talk_over_Cellular_POC_Working_Group]"
        ],
        [
            "extension" => "vnd.oma.poc.groups+xml",
            "type" => "application/vnd.oma.poc.groups+xml",
            "Reference" => "[Sean_Kelley][OMA_Push_to_Talk_over_Cellular_POC_Working_Group]"
        ],
        [
            "extension" => "vnd.oma.poc.invocation-descriptor+xml",
            "type" => "application/vnd.oma.poc.invocation-descriptor+xml",
            "Reference" => "[OMA_Push_to_Talk_over_Cellular_POC_Working_Group]"
        ],
        [
            "extension" => "vnd.oma.poc.optimized-progress-report+xml",
            "type" => "application/vnd.oma.poc.optimized-progress-report+xml",
            "Reference" => "[OMA_Push_to_Talk_over_Cellular_POC_Working_Group]"
        ],
        [
            "extension" => "vnd.oma.push",
            "type" => "application/vnd.oma.push",
            "Reference" => "[Bryan_Sullivan][OMA]"
        ],
        [
            "extension" => "vnd.oma.scidm.messages+xml",
            "type" => "application/vnd.oma.scidm.messages+xml",
            "Reference" => "[Wenjun_Zeng][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.xcap-directory+xml",
            "type" => "application/vnd.oma.xcap-directory+xml",
            "Reference" => "[Sean_Kelley][OMA_Presence_and_Availability_PAG_Working_Group]"
        ],
        [
            "extension" => "vnd.omads-email+xml",
            "type" => "application/vnd.omads-email+xml",
            "Reference" => "[OMA_Data_Synchronization_Working_Group]"
        ],
        [
            "extension" => "vnd.omads-file+xml",
            "type" => "application/vnd.omads-file+xml",
            "Reference" => "[OMA_Data_Synchronization_Working_Group]"
        ],
        [
            "extension" => "vnd.omads-folder+xml",
            "type" => "application/vnd.omads-folder+xml",
            "Reference" => "[OMA_Data_Synchronization_Working_Group]"
        ],
        [
            "extension" => "vnd.omaloc-supl-init",
            "type" => "application/vnd.omaloc-supl-init",
            "Reference" => "[Julien_Grange]"
        ],
        [
            "extension" => "vnd.oma-scws-config",
            "type" => "application/vnd.oma-scws-config",
            "Reference" => "[Ilan_Mahalal]"
        ],
        [
            "extension" => "vnd.oma-scws-http-request",
            "type" => "application/vnd.oma-scws-http-request",
            "Reference" => "[Ilan_Mahalal]"
        ],
        [
            "extension" => "vnd.oma-scws-http-response",
            "type" => "application/vnd.oma-scws-http-response",
            "Reference" => "[Ilan_Mahalal]"
        ],
        [
            "extension" => "vnd.onepager",
            "type" => "application/vnd.onepager",
            "Reference" => "[Nathan_Black]"
        ],
        [
            "extension" => "vnd.onepagertamp",
            "type" => "application/vnd.onepagertamp",
            "Reference" => "[Nathan_Black]"
        ],
        [
            "extension" => "vnd.onepagertamx",
            "type" => "application/vnd.onepagertamx",
            "Reference" => "[Nathan_Black]"
        ],
        [
            "extension" => "vnd.onepagertat",
            "type" => "application/vnd.onepagertat",
            "Reference" => "[Nathan_Black]"
        ],
        [
            "extension" => "vnd.onepagertatp",
            "type" => "application/vnd.onepagertatp",
            "Reference" => "[Nathan_Black]"
        ],
        [
            "extension" => "vnd.onepagertatx",
            "type" => "application/vnd.onepagertatx",
            "Reference" => "[Nathan_Black]"
        ],
        [
            "extension" => "vnd.openblox.game-binary",
            "type" => "application/vnd.openblox.game-binary",
            "Reference" => "[Mark_Otaris]"
        ],
        [
            "extension" => "vnd.openblox.game+xml",
            "type" => "application/vnd.openblox.game+xml",
            "Reference" => "[Mark_Otaris]"
        ],
        [
            "extension" => "vnd.openeye.oeb",
            "type" => "application/vnd.openeye.oeb",
            "Reference" => "[Craig_Bruce]"
        ],
        [
            "extension" => "vnd.openstreetmap.data+xml",
            "type" => "application/vnd.openstreetmap.data+xml",
            "Reference" => "[Paul_Norman]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.custom-properties+xml",
            "type" => "application/vnd.openxmlformats-officedocument.custom-properties+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.customXmlProperties+xml",
            "type" => "application/vnd.openxmlformats-officedocument.customXmlProperties+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.drawing+xml",
            "type" => "application/vnd.openxmlformats-officedocument.drawing+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.drawingml.chart+xml",
            "type" => "application/vnd.openxmlformats-officedocument.drawingml.chart+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.drawingml.chartshapes+xml",
            "type" => "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.drawingml.diagramColors+xml",
            "type" => "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.drawingml.diagramData+xml",
            "type" => "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml",
            "type" => "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml",
            "type" => "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.extended-properties+xml",
            "type" => "application/vnd.openxmlformats-officedocument.extended-properties+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.commentAuthors+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.commentAuthors+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.comments+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.comments+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.handoutMaster+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.handoutMaster+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.notesMaster+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.notesMaster+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.notesSlide+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.notesSlide+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.presentation",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.presentation.main+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.presProps+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.presProps+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.slide",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.slide",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.slide+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.slide+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.slideLayout+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.slideMaster+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.slideshow",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.slideUpdateInfo+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.slideUpdateInfo+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.tableStyles+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.tableStyles+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.tags+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.tags+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.template",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.template",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.template.main+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.viewProps+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.viewProps+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.connections+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.table+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.template",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.theme+xml",
            "type" => "application/vnd.openxmlformats-officedocument.theme+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.themeOverride+xml",
            "type" => "application/vnd.openxmlformats-officedocument.themeOverride+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.vmlDrawing",
            "type" => "application/vnd.openxmlformats-officedocument.vmlDrawing",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.comments+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.document",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.footer+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.settings+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.styles+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.template",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.webSettings+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.webSettings+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-package.core-properties+xml",
            "type" => "application/vnd.openxmlformats-package.core-properties+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-package.digital-signature-xmlsignature+xml",
            "type" => "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-package.relationships+xml",
            "type" => "application/vnd.openxmlformats-package.relationships+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.oracle.resource+json",
            "type" => "application/vnd.oracle.resource+json",
            "Reference" => "[Ning_Dong]"
        ],
        [
            "extension" => "vnd.orange.indata",
            "type" => "application/vnd.orange.indata",
            "Reference" => "[CHATRAS_Bruno]"
        ],
        [
            "extension" => "vnd.osa.netdeploy",
            "type" => "application/vnd.osa.netdeploy",
            "Reference" => "[Steven_Klos]"
        ],
        [
            "extension" => "vnd.osgeo.mapguide.package",
            "type" => "application/vnd.osgeo.mapguide.package",
            "Reference" => "[Jason_Birch]"
        ],
        [
            "extension" => "vnd.osgi.bundle",
            "type" => "application/vnd.osgi.bundle",
            "Reference" => "[Peter_Kriens]"
        ],
        [
            "extension" => "vnd.osgi.dp",
            "type" => "application/vnd.osgi.dp",
            "Reference" => "[Peter_Kriens]"
        ],
        [
            "extension" => "vnd.osgi.subsystem",
            "type" => "application/vnd.osgi.subsystem",
            "Reference" => "[Peter_Kriens]"
        ],
        [
            "extension" => "vnd.otps.ct-kip+xml",
            "type" => "application/vnd.otps.ct-kip+xml",
            "Reference" => "[Magnus_Nystrom]"
        ],
        [
            "extension" => "vnd.oxli.countgraph",
            "type" => "application/vnd.oxli.countgraph",
            "Reference" => "[C._Titus_Brown]"
        ],
        [
            "extension" => "vnd.pagerduty+json",
            "type" => "application/vnd.pagerduty+json",
            "Reference" => "[Steve_Rice]"
        ],
        [
            "extension" => "vnd.palm",
            "type" => "application/vnd.palm",
            "Reference" => "[Gavin_Peacock]"
        ],
        [
            "extension" => "vnd.panoply",
            "type" => "application/vnd.panoply",
            "Reference" => "[Natarajan_Balasundara]"
        ],
        [
            "extension" => "vnd.paos.xml",
            "type" => "application/vnd.paos.xml",
            "Reference" => "[John_Kemp]"
        ],
        [
            "extension" => "vnd.patentdive",
            "type" => "application/vnd.patentdive",
            "Reference" => "[Christian_Trosclair]"
        ],
        [
            "extension" => "vnd.patientecommsdoc",
            "type" => "application/vnd.patientecommsdoc",
            "Reference" => "[Andrew_David_Kendall]"
        ],
        [
            "extension" => "vnd.pawaafile",
            "type" => "application/vnd.pawaafile",
            "Reference" => "[Prakash_Baskaran]"
        ],
        [
            "extension" => "vnd.pcos",
            "type" => "application/vnd.pcos",
            "Reference" => "[Slawomir_Lisznianski]"
        ],
        [
            "extension" => "vnd.pg.format",
            "type" => "application/vnd.pg.format",
            "Reference" => "[April_Gandert]"
        ],
        [
            "extension" => "vnd.pg.osasli",
            "type" => "application/vnd.pg.osasli",
            "Reference" => "[April_Gandert]"
        ],
        [
            "extension" => "vnd.piaccess.application-licence",
            "type" => "application/vnd.piaccess.application-licence",
            "Reference" => "[Lucas_Maneos]"
        ],
        [
            "extension" => "vnd.picsel",
            "type" => "application/vnd.picsel",
            "Reference" => "[Giuseppe_Naccarato]"
        ],
        [
            "extension" => "vnd.pmi.widget",
            "type" => "application/vnd.pmi.widget",
            "Reference" => "[Rhys_Lewis]"
        ],
        [
            "extension" => "vnd.poc.group-advertisement+xml",
            "type" => "application/vnd.poc.group-advertisement+xml",
            "Reference" => "[Sean_Kelley][OMA_Push_to_Talk_over_Cellular_POC_Working_Group]"
        ],
        [
            "extension" => "vnd.pocketlearn",
            "type" => "application/vnd.pocketlearn",
            "Reference" => "[Jorge_Pando]"
        ],
        [
            "extension" => "vnd.powerbuilder6",
            "type" => "application/vnd.powerbuilder6",
            "Reference" => "[David_Guy]"
        ],
        [
            "extension" => "vnd.powerbuilder6-s",
            "type" => "application/vnd.powerbuilder6-s",
            "Reference" => "[David_Guy]"
        ],
        [
            "extension" => "vnd.powerbuilder7",
            "type" => "application/vnd.powerbuilder7",
            "Reference" => "[Reed_Shilts]"
        ],
        [
            "extension" => "vnd.powerbuilder75",
            "type" => "application/vnd.powerbuilder75",
            "Reference" => "[Reed_Shilts]"
        ],
        [
            "extension" => "vnd.powerbuilder75-s",
            "type" => "application/vnd.powerbuilder75-s",
            "Reference" => "[Reed_Shilts]"
        ],
        [
            "extension" => "vnd.powerbuilder7-s",
            "type" => "application/vnd.powerbuilder7-s",
            "Reference" => "[Reed_Shilts]"
        ],
        [
            "extension" => "vnd.preminet",
            "type" => "application/vnd.preminet",
            "Reference" => "[Juoko_Tenhunen]"
        ],
        [
            "extension" => "vnd.previewsystems.box",
            "type" => "application/vnd.previewsystems.box",
            "Reference" => "[Roman_Smolgovsky]"
        ],
        [
            "extension" => "vnd.proteus.magazine",
            "type" => "application/vnd.proteus.magazine",
            "Reference" => "[Pete_Hoch]"
        ],
        [
            "extension" => "vnd.psfs",
            "type" => "application/vnd.psfs",
            "Reference" => "[Kristopher_Durski]"
        ],
        [
            "extension" => "vnd.publishare-delta-tree",
            "type" => "application/vnd.publishare-delta-tree",
            "Reference" => "[Oren_Ben-Kiki]"
        ],
        [
            "extension" => "vnd.pvi.ptid1",
            "type" => "application/vnd.pvi.ptid1",
            "Reference" => "[Charles_P._Lamb]"
        ],
        [
            "extension" => "vnd.pwg-multiplexed",
            "type" => "application/vnd.pwg-multiplexed",
            "Reference" => "[RFC3391]"
        ],
        [
            "extension" => "vnd.pwg-xhtml-print+xml",
            "type" => "application/vnd.pwg-xhtml-print+xml",
            "Reference" => "[Don_Wright]"
        ],
        [
            "extension" => "vnd.qualcomm.brew-app-res",
            "type" => "application/vnd.qualcomm.brew-app-res",
            "Reference" => "[Glenn_Forrester]"
        ],
        [
            "extension" => "vnd.quarantainenet",
            "type" => "application/vnd.quarantainenet",
            "Reference" => "[Casper_Joost_Eyckelhof]"
        ],
        [
            "extension" => "vnd.Quark.QuarkXPress",
            "type" => "application/vnd.Quark.QuarkXPress",
            "Reference" => "[Hannes_Scheidler]"
        ],
        [
            "extension" => "vnd.quobject-quoxdocument",
            "type" => "application/vnd.quobject-quoxdocument",
            "Reference" => "[Matthias_Ludwig]"
        ],
        [
            "extension" => "vnd.radisys.moml+xml",
            "type" => "application/vnd.radisys.moml+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-audit-conf+xml",
            "type" => "application/vnd.radisys.msml-audit-conf+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-audit-conn+xml",
            "type" => "application/vnd.radisys.msml-audit-conn+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-audit-dialog+xml",
            "type" => "application/vnd.radisys.msml-audit-dialog+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-audit-stream+xml",
            "type" => "application/vnd.radisys.msml-audit-stream+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-audit+xml",
            "type" => "application/vnd.radisys.msml-audit+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-conf+xml",
            "type" => "application/vnd.radisys.msml-conf+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-dialog-base+xml",
            "type" => "application/vnd.radisys.msml-dialog-base+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-dialog-fax-detect+xml",
            "type" => "application/vnd.radisys.msml-dialog-fax-detect+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-dialog-fax-sendrecv+xml",
            "type" => "application/vnd.radisys.msml-dialog-fax-sendrecv+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-dialog-group+xml",
            "type" => "application/vnd.radisys.msml-dialog-group+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-dialog-speech+xml",
            "type" => "application/vnd.radisys.msml-dialog-speech+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-dialog-transform+xml",
            "type" => "application/vnd.radisys.msml-dialog-transform+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-dialog+xml",
            "type" => "application/vnd.radisys.msml-dialog+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml+xml",
            "type" => "application/vnd.radisys.msml+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.rainstor.data",
            "type" => "application/vnd.rainstor.data",
            "Reference" => "[Kevin_Crook]"
        ],
        [
            "extension" => "vnd.rapid",
            "type" => "application/vnd.rapid",
            "Reference" => "[Etay_Szekely]"
        ],
        [
            "extension" => "vnd.rar",
            "type" => "application/vnd.rar",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.realvnc.bed",
            "type" => "application/vnd.realvnc.bed",
            "Reference" => "[Nick_Reeves]"
        ],
        [
            "extension" => "vnd.recordare.musicxml",
            "type" => "application/vnd.recordare.musicxml",
            "Reference" => "[W3C_Music_Notation_Community_Group]"
        ],
        [
            "extension" => "vnd.recordare.musicxml+xml",
            "type" => "application/vnd.recordare.musicxml+xml",
            "Reference" => "[W3C_Music_Notation_Community_Group]"
        ],
        [
            "extension" => "vnd.RenLearn.rlprint",
            "type" => "application/vnd.RenLearn.rlprint",
            "Reference" => "[James_Wick]"
        ],
        [
            "extension" => "vnd.restful+json",
            "type" => "application/vnd.restful+json",
            "Reference" => "[Stephen_Mizell]"
        ],
        [
            "extension" => "vnd.rig.cryptonote",
            "type" => "application/vnd.rig.cryptonote",
            "Reference" => "[Ken_Jibiki]"
        ],
        [
            "extension" => "vnd.route66.link66+xml",
            "type" => "application/vnd.route66.link66+xml",
            "Reference" => "[Sybren_Kikstra]"
        ],
        [
            "extension" => "vnd.rs-274x",
            "type" => "application/vnd.rs-274x",
            "Reference" => "[Lee_Harding]"
        ],
        [
            "extension" => "vnd.ruckus.download",
            "type" => "application/vnd.ruckus.download",
            "Reference" => "[Jerry_Harris]"
        ],
        [
            "extension" => "vnd.s3sms",
            "type" => "application/vnd.s3sms",
            "Reference" => "[Lauri_Tarkkala]"
        ],
        [
            "extension" => "vnd.sailingtracker.track",
            "type" => "application/vnd.sailingtracker.track",
            "Reference" => "[Heikki_Vesalainen]"
        ],
        [
            "extension" => "vnd.sar",
            "type" => "application/vnd.sar",
            "Reference" => "[Markus_Strehle]"
        ],
        [
            "extension" => "vnd.sbm.cid",
            "type" => "application/vnd.sbm.cid",
            "Reference" => "[Shinji_Kusakari]"
        ],
        [
            "extension" => "vnd.sbm.mid2",
            "type" => "application/vnd.sbm.mid2",
            "Reference" => "[Masanori_Murai]"
        ],
        [
            "extension" => "vnd.scribus",
            "type" => "application/vnd.scribus",
            "Reference" => "[Craig_Bradney]"
        ],
        [
            "extension" => "vnd.sealed.3df",
            "type" => "application/vnd.sealed.3df",
            "Reference" => "[John_Kwan]"
        ],
        [
            "extension" => "vnd.sealed.csf",
            "type" => "application/vnd.sealed.csf",
            "Reference" => "[John_Kwan]"
        ],
        [
            "extension" => "vnd.sealed.doc",
            "type" => "application/vnd.sealed.doc",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealed.eml",
            "type" => "application/vnd.sealed.eml",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealed.mht",
            "type" => "application/vnd.sealed.mht",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealed.net",
            "type" => "application/vnd.sealed.net",
            "Reference" => "[Martin_Lambert]"
        ],
        [
            "extension" => "vnd.sealed.ppt",
            "type" => "application/vnd.sealed.ppt",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealed.tiff",
            "type" => "application/vnd.sealed.tiff",
            "Reference" => "[John_Kwan][Martin_Lambert]"
        ],
        [
            "extension" => "vnd.sealed.xls",
            "type" => "application/vnd.sealed.xls",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealedmedia.softseal.html",
            "type" => "application/vnd.sealedmedia.softseal.html",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealedmedia.softseal.pdf",
            "type" => "application/vnd.sealedmedia.softseal.pdf",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.seemail",
            "type" => "application/vnd.seemail",
            "Reference" => "[Steve_Webb]"
        ],
        [
            "extension" => "vnd.sema",
            "type" => "application/vnd.sema",
            "Reference" => "[Anders_Hansson]"
        ],
        [
            "extension" => "vnd.semd",
            "type" => "application/vnd.semd",
            "Reference" => "[Anders_Hansson]"
        ],
        [
            "extension" => "vnd.semf",
            "type" => "application/vnd.semf",
            "Reference" => "[Anders_Hansson]"
        ],
        [
            "extension" => "vnd.shade-save-file",
            "type" => "application/vnd.shade-save-file",
            "Reference" => "[Connor_Horman]"
        ],
        [
            "extension" => "vnd.shana.informed.formdata",
            "type" => "application/vnd.shana.informed.formdata",
            "Reference" => "[Guy_Selzler]"
        ],
        [
            "extension" => "vnd.shana.informed.formtemplate",
            "type" => "application/vnd.shana.informed.formtemplate",
            "Reference" => "[Guy_Selzler]"
        ],
        [
            "extension" => "vnd.shana.informed.interchange",
            "type" => "application/vnd.shana.informed.interchange",
            "Reference" => "[Guy_Selzler]"
        ],
        [
            "extension" => "vnd.shana.informed.package",
            "type" => "application/vnd.shana.informed.package",
            "Reference" => "[Guy_Selzler]"
        ],
        [
            "extension" => "vnd.shootproof+json",
            "type" => "application/vnd.shootproof+json",
            "Reference" => "[Ben_Ramsey]"
        ],
        [
            "extension" => "vnd.shopkick+json",
            "type" => "application/vnd.shopkick+json",
            "Reference" => "[Ronald_Jacobs]"
        ],
        [
            "extension" => "vnd.shp",
            "type" => "application/vnd.shp",
            "Reference" => "[Mi_Tar]"
        ],
        [
            "extension" => "vnd.shx",
            "type" => "application/vnd.shx",
            "Reference" => "[Mi_Tar]"
        ],
        [
            "extension" => "vnd.sigrok.session",
            "type" => "application/vnd.sigrok.session",
            "Reference" => "[Uwe_Hermann]"
        ],
        [
            "extension" => "vnd.SimTech-MindMapper",
            "type" => "application/vnd.SimTech-MindMapper",
            "Reference" => "[Patrick_Koh]"
        ],
        [
            "extension" => "vnd.siren+json",
            "type" => "application/vnd.siren+json",
            "Reference" => "[Kevin_Swiber]"
        ],
        [
            "extension" => "vnd.smaf",
            "type" => "application/vnd.smaf",
            "Reference" => "[Hiroaki_Takahashi]"
        ],
        [
            "extension" => "vnd.smart.notebook",
            "type" => "application/vnd.smart.notebook",
            "Reference" => "[Jonathan_Neitz]"
        ],
        [
            "extension" => "vnd.smart.teacher",
            "type" => "application/vnd.smart.teacher",
            "Reference" => "[Michael_Boyle]"
        ],
        [
            "extension" => "vnd.snesdev-page-table",
            "type" => "application/vnd.snesdev-page-table",
            "Reference" => "[Connor_Horman]"
        ],
        [
            "extension" => "vnd.software602.filler.form+xml",
            "type" => "application/vnd.software602.filler.form+xml",
            "Reference" => "[Jakub_Hytka][Martin_Vondrous]"
        ],
        [
            "extension" => "vnd.software602.filler.form-xml-zip",
            "type" => "application/vnd.software602.filler.form-xml-zip",
            "Reference" => "[Jakub_Hytka][Martin_Vondrous]"
        ],
        [
            "extension" => "vnd.solent.sdkm+xml",
            "type" => "application/vnd.solent.sdkm+xml",
            "Reference" => "[Cliff_Gauntlett]"
        ],
        [
            "extension" => "vnd.spotfire.dxp",
            "type" => "application/vnd.spotfire.dxp",
            "Reference" => "[Stefan_Jernberg]"
        ],
        [
            "extension" => "vnd.spotfire.sfs",
            "type" => "application/vnd.spotfire.sfs",
            "Reference" => "[Stefan_Jernberg]"
        ],
        [
            "extension" => "vnd.sqlite3",
            "type" => "application/vnd.sqlite3",
            "Reference" => "[Clemens_Ladisch]"
        ],
        [
            "extension" => "vnd.sss-cod",
            "type" => "application/vnd.sss-cod",
            "Reference" => "[Asang_Dani]"
        ],
        [
            "extension" => "vnd.sss-dtf",
            "type" => "application/vnd.sss-dtf",
            "Reference" => "[Eric_Bruno]"
        ],
        [
            "extension" => "vnd.sss-ntf",
            "type" => "application/vnd.sss-ntf",
            "Reference" => "[Eric_Bruno]"
        ],
        [
            "extension" => "vnd.stepmania.package",
            "type" => "application/vnd.stepmania.package",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.stepmania.stepchart",
            "type" => "application/vnd.stepmania.stepchart",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.street-stream",
            "type" => "application/vnd.street-stream",
            "Reference" => "[Glenn_Levitt]"
        ],
        [
            "extension" => "vnd.sun.wadl+xml",
            "type" => "application/vnd.sun.wadl+xml",
            "Reference" => "[Marc_Hadley]"
        ],
        [
            "extension" => "vnd.sus-calendar",
            "type" => "application/vnd.sus-calendar",
            "Reference" => "[Jonathan_Niedfeldt]"
        ],
        [
            "extension" => "vnd.svd",
            "type" => "application/vnd.svd",
            "Reference" => "[Scott_Becker]"
        ],
        [
            "extension" => "vnd.swiftview-ics",
            "type" => "application/vnd.swiftview-ics",
            "Reference" => "[Glenn_Widener]"
        ],
        [
            "extension" => "vnd.sycle+xml",
            "type" => "application/vnd.sycle+xml",
            "Reference" => "[Johann_Terblanche]"
        ],
        [
            "extension" => "vnd.syncml.dm.notification",
            "type" => "application/vnd.syncml.dm.notification",
            "Reference" => "[Peter_Thompson][OMA-DM_Work_Group]"
        ],
        [
            "extension" => "vnd.syncml.dmddf+xml",
            "type" => "application/vnd.syncml.dmddf+xml",
            "Reference" => "[OMA-DM_Work_Group]"
        ],
        [
            "extension" => "vnd.syncml.dmtnds+wbxml",
            "type" => "application/vnd.syncml.dmtnds+wbxml",
            "Reference" => "[OMA-DM_Work_Group]"
        ],
        [
            "extension" => "vnd.syncml.dmtnds+xml",
            "type" => "application/vnd.syncml.dmtnds+xml",
            "Reference" => "[OMA-DM_Work_Group]"
        ],
        [
            "extension" => "vnd.syncml.dmddf+wbxml",
            "type" => "application/vnd.syncml.dmddf+wbxml",
            "Reference" => "[OMA-DM_Work_Group]"
        ],
        [
            "extension" => "vnd.syncml.dm+wbxml",
            "type" => "application/vnd.syncml.dm+wbxml",
            "Reference" => "[OMA-DM_Work_Group]"
        ],
        [
            "extension" => "vnd.syncml.dm+xml",
            "type" => "application/vnd.syncml.dm+xml",
            "Reference" => "[Bindu_Rama_Rao][OMA-DM_Work_Group]"
        ],
        [
            "extension" => "vnd.syncml.ds.notification",
            "type" => "application/vnd.syncml.ds.notification",
            "Reference" => "[OMA_Data_Synchronization_Working_Group]"
        ],
        [
            "extension" => "vnd.syncml+xml",
            "type" => "application/vnd.syncml+xml",
            "Reference" => "[OMA_Data_Synchronization_Working_Group]"
        ],
        [
            "extension" => "vnd.tableschema+json",
            "type" => "application/vnd.tableschema+json",
            "Reference" => "[Paul_Walsh]"
        ],
        [
            "extension" => "vnd.tao.intent-module-archive",
            "type" => "application/vnd.tao.intent-module-archive",
            "Reference" => "[Daniel_Shelton]"
        ],
        [
            "extension" => "vnd.tcpdump.pcap",
            "type" => "application/vnd.tcpdump.pcap",
            "Reference" => "[Guy_Harris][Glen_Turner]"
        ],
        [
            "extension" => "vnd.think-cell.ppttc+json",
            "type" => "application/vnd.think-cell.ppttc+json",
            "Reference" => "[Arno_Schoedl]"
        ],
        [
            "extension" => "vnd.tml",
            "type" => "application/vnd.tml",
            "Reference" => "[Joey_Smith]"
        ],
        [
            "extension" => "vnd.tmd.mediaflex.api+xml",
            "type" => "application/vnd.tmd.mediaflex.api+xml",
            "Reference" => "[Alex_Sibilev]"
        ],
        [
            "extension" => "vnd.tmobile-livetv",
            "type" => "application/vnd.tmobile-livetv",
            "Reference" => "[Nicolas_Helin]"
        ],
        [
            "extension" => "vnd.tri.onesource",
            "type" => "application/vnd.tri.onesource",
            "Reference" => "[Rick_Rupp]"
        ],
        [
            "extension" => "vnd.trid.tpt",
            "type" => "application/vnd.trid.tpt",
            "Reference" => "[Frank_Cusack]"
        ],
        [
            "extension" => "vnd.triscape.mxs",
            "type" => "application/vnd.triscape.mxs",
            "Reference" => "[Steven_Simonoff]"
        ],
        [
            "extension" => "vnd.trueapp",
            "type" => "application/vnd.trueapp",
            "Reference" => "[J._Scott_Hepler]"
        ],
        [
            "extension" => "vnd.truedoc",
            "type" => "application/vnd.truedoc",
            "Reference" => "[Brad_Chase]"
        ],
        [
            "extension" => "vnd.ubisoft.webplayer",
            "type" => "application/vnd.ubisoft.webplayer",
            "Reference" => "[Martin_Talbot]"
        ],
        [
            "extension" => "vnd.ufdl",
            "type" => "application/vnd.ufdl",
            "Reference" => "[Dave_Manning]"
        ],
        [
            "extension" => "vnd.uiq.theme",
            "type" => "application/vnd.uiq.theme",
            "Reference" => "[Tim_Ocock]"
        ],
        [
            "extension" => "vnd.umajin",
            "type" => "application/vnd.umajin",
            "Reference" => "[Jamie_Riden]"
        ],
        [
            "extension" => "vnd.unity",
            "type" => "application/vnd.unity",
            "Reference" => "[Unity3d]"
        ],
        [
            "extension" => "vnd.uoml+xml",
            "type" => "application/vnd.uoml+xml",
            "Reference" => "[Arne_Gerdes]"
        ],
        [
            "extension" => "vnd.uplanet.alert",
            "type" => "application/vnd.uplanet.alert",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.alert-wbxml",
            "type" => "application/vnd.uplanet.alert-wbxml",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.bearer-choice",
            "type" => "application/vnd.uplanet.bearer-choice",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.bearer-choice-wbxml",
            "type" => "application/vnd.uplanet.bearer-choice-wbxml",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.cacheop",
            "type" => "application/vnd.uplanet.cacheop",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.cacheop-wbxml",
            "type" => "application/vnd.uplanet.cacheop-wbxml",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.channel",
            "type" => "application/vnd.uplanet.channel",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.channel-wbxml",
            "type" => "application/vnd.uplanet.channel-wbxml",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.list",
            "type" => "application/vnd.uplanet.list",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.listcmd",
            "type" => "application/vnd.uplanet.listcmd",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.listcmd-wbxml",
            "type" => "application/vnd.uplanet.listcmd-wbxml",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.list-wbxml",
            "type" => "application/vnd.uplanet.list-wbxml",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uri-map",
            "type" => "application/vnd.uri-map",
            "Reference" => "[Sebastian_Baer]"
        ],
        [
            "extension" => "vnd.uplanet.signal",
            "type" => "application/vnd.uplanet.signal",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.valve.source.material",
            "type" => "application/vnd.valve.source.material",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.vcx",
            "type" => "application/vnd.vcx",
            "Reference" => "[Taisuke_Sugimoto]"
        ],
        [
            "extension" => "vnd.vd-study",
            "type" => "application/vnd.vd-study",
            "Reference" => "[Luc_Rogge]"
        ],
        [
            "extension" => "vnd.vectorworks",
            "type" => "application/vnd.vectorworks",
            "Reference" => "[Lyndsey_Ferguson][Biplab_Sarkar]"
        ],
        [
            "extension" => "vnd.vel+json",
            "type" => "application/vnd.vel+json",
            "Reference" => "[James_Wigger]"
        ],
        [
            "extension" => "vnd.verimatrix.vcas",
            "type" => "application/vnd.verimatrix.vcas",
            "Reference" => "[Petr_Peterka]"
        ],
        [
            "extension" => "vnd.veryant.thin",
            "type" => "application/vnd.veryant.thin",
            "Reference" => "[Massimo_Bertoli]"
        ],
        [
            "extension" => "vnd.ves.encrypted",
            "type" => "application/vnd.ves.encrypted",
            "Reference" => "[Jim_Zubov]"
        ],
        [
            "extension" => "vnd.vidsoft.vidconference",
            "type" => "application/vnd.vidsoft.vidconference",
            "Reference" => "[Robert_Hess]"
        ],
        [
            "extension" => "vnd.visio",
            "type" => "application/vnd.visio",
            "Reference" => "[Troy_Sandal]"
        ],
        [
            "extension" => "vnd.visionary",
            "type" => "application/vnd.visionary",
            "Reference" => "[Gayatri_Aravindakumar]"
        ],
        [
            "extension" => "vnd.vividence.scriptfile",
            "type" => "application/vnd.vividence.scriptfile",
            "Reference" => "[Mark_Risher]"
        ],
        [
            "extension" => "vnd.vsf",
            "type" => "application/vnd.vsf",
            "Reference" => "[Delton_Rowe]"
        ],
        [
            "extension" => "vnd.wap.sic",
            "type" => "application/vnd.wap.sic",
            "Reference" => "[WAP-Forum]"
        ],
        [
            "extension" => "vnd.wap.slc",
            "type" => "application/vnd.wap.slc",
            "Reference" => "[WAP-Forum]"
        ],
        [
            "extension" => "vnd.wap.wbxml",
            "type" => "application/vnd.wap.wbxml",
            "Reference" => "[Peter_Stark]"
        ],
        [
            "extension" => "vnd.wap.wmlc",
            "type" => "application/vnd.wap.wmlc",
            "Reference" => "[Peter_Stark]"
        ],
        [
            "extension" => "vnd.wap.wmlscriptc",
            "type" => "application/vnd.wap.wmlscriptc",
            "Reference" => "[Peter_Stark]"
        ],
        [
            "extension" => "vnd.webturbo",
            "type" => "application/vnd.webturbo",
            "Reference" => "[Yaser_Rehem]"
        ],
        [
            "extension" => "vnd.wfa.p2p",
            "type" => "application/vnd.wfa.p2p",
            "Reference" => "[Mick_Conley]"
        ],
        [
            "extension" => "vnd.wfa.wsc",
            "type" => "application/vnd.wfa.wsc",
            "Reference" => "[Wi-Fi_Alliance]"
        ],
        [
            "extension" => "vnd.windows.devicepairing",
            "type" => "application/vnd.windows.devicepairing",
            "Reference" => "[Priya_Dandawate]"
        ],
        [
            "extension" => "vnd.wmc",
            "type" => "application/vnd.wmc",
            "Reference" => "[Thomas_Kjornes]"
        ],
        [
            "extension" => "vnd.wmf.bootstrap",
            "type" => "application/vnd.wmf.bootstrap",
            "Reference" => "[Thinh_Nguyenphu][Prakash_Iyer]"
        ],
        [
            "extension" => "vnd.wolfram.mathematica",
            "type" => "application/vnd.wolfram.mathematica",
            "Reference" => "[Wolfram]"
        ],
        [
            "extension" => "vnd.wolfram.mathematica.package",
            "type" => "application/vnd.wolfram.mathematica.package",
            "Reference" => "[Wolfram]"
        ],
        [
            "extension" => "vnd.wolfram.player",
            "type" => "application/vnd.wolfram.player",
            "Reference" => "[Wolfram]"
        ],
        [
            "extension" => "vnd.wordperfect",
            "type" => "application/vnd.wordperfect",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.wqd",
            "type" => "application/vnd.wqd",
            "Reference" => "[Jan_Bostrom]"
        ],
        [
            "extension" => "vnd.wrq-hp3000-labelled",
            "type" => "application/vnd.wrq-hp3000-labelled",
            "Reference" => "[Chris_Bartram]"
        ],
        [
            "extension" => "vnd.wt.stf",
            "type" => "application/vnd.wt.stf",
            "Reference" => "[Bill_Wohler]"
        ],
        [
            "extension" => "vnd.wv.csp+xml",
            "type" => "application/vnd.wv.csp+xml",
            "Reference" => "[John_Ingi_Ingimundarson]"
        ],
        [
            "extension" => "vnd.wv.csp+wbxml",
            "type" => "application/vnd.wv.csp+wbxml",
            "Reference" => "[Matti_Salmi]"
        ],
        [
            "extension" => "vnd.wv.ssp+xml",
            "type" => "application/vnd.wv.ssp+xml",
            "Reference" => "[John_Ingi_Ingimundarson]"
        ],
        [
            "extension" => "vnd.xacml+json",
            "type" => "application/vnd.xacml+json",
            "Reference" => "[David_Brossard]"
        ],
        [
            "extension" => "vnd.xara",
            "type" => "application/vnd.xara",
            "Reference" => "[David_Matthewman]"
        ],
        [
            "extension" => "vnd.xfdl",
            "type" => "application/vnd.xfdl",
            "Reference" => "[Dave_Manning]"
        ],
        [
            "extension" => "vnd.xfdl.webform",
            "type" => "application/vnd.xfdl.webform",
            "Reference" => "[Michael_Mansell]"
        ],
        [
            "extension" => "vnd.xmi+xml",
            "type" => "application/vnd.xmi+xml",
            "Reference" => "[Fred_Waskiewicz]"
        ],
        [
            "extension" => "vnd.xmpie.cpkg",
            "type" => "application/vnd.xmpie.cpkg",
            "Reference" => "[Reuven_Sherwin]"
        ],
        [
            "extension" => "vnd.xmpie.dpkg",
            "type" => "application/vnd.xmpie.dpkg",
            "Reference" => "[Reuven_Sherwin]"
        ],
        [
            "extension" => "vnd.xmpie.plan",
            "type" => "application/vnd.xmpie.plan",
            "Reference" => "[Reuven_Sherwin]"
        ],
        [
            "extension" => "vnd.xmpie.ppkg",
            "type" => "application/vnd.xmpie.ppkg",
            "Reference" => "[Reuven_Sherwin]"
        ],
        [
            "extension" => "vnd.xmpie.xlim",
            "type" => "application/vnd.xmpie.xlim",
            "Reference" => "[Reuven_Sherwin]"
        ],
        [
            "extension" => "vnd.yamaha.hv-dic",
            "type" => "application/vnd.yamaha.hv-dic",
            "Reference" => "[Tomohiro_Yamamoto]"
        ],
        [
            "extension" => "vnd.yamaha.hv-script",
            "type" => "application/vnd.yamaha.hv-script",
            "Reference" => "[Tomohiro_Yamamoto]"
        ],
        [
            "extension" => "vnd.yamaha.hv-voice",
            "type" => "application/vnd.yamaha.hv-voice",
            "Reference" => "[Tomohiro_Yamamoto]"
        ],
        [
            "extension" => "vnd.yamaha.openscoreformat.osfpvg+xml",
            "type" => "application/vnd.yamaha.openscoreformat.osfpvg+xml",
            "Reference" => "[Mark_Olleson]"
        ],
        [
            "extension" => "vnd.yamaha.openscoreformat",
            "type" => "application/vnd.yamaha.openscoreformat",
            "Reference" => "[Mark_Olleson]"
        ],
        [
            "extension" => "vnd.yamaha.remote-setup",
            "type" => "application/vnd.yamaha.remote-setup",
            "Reference" => "[Takehiro_Sukizaki]"
        ],
        [
            "extension" => "vnd.yamaha.smaf-audio",
            "type" => "application/vnd.yamaha.smaf-audio",
            "Reference" => "[Keiichi_Shinoda]"
        ],
        [
            "extension" => "vnd.yamaha.smaf-phrase",
            "type" => "application/vnd.yamaha.smaf-phrase",
            "Reference" => "[Keiichi_Shinoda]"
        ],
        [
            "extension" => "vnd.yamaha.through-ngn",
            "type" => "application/vnd.yamaha.through-ngn",
            "Reference" => "[Takehiro_Sukizaki]"
        ],
        [
            "extension" => "vnd.yamaha.tunnel-udpencap",
            "type" => "application/vnd.yamaha.tunnel-udpencap",
            "Reference" => "[Takehiro_Sukizaki]"
        ],
        [
            "extension" => "vnd.yaoweme",
            "type" => "application/vnd.yaoweme",
            "Reference" => "[Jens_Jorgensen]"
        ],
        [
            "extension" => "vnd.yellowriver-custom-menu",
            "type" => "application/vnd.yellowriver-custom-menu",
            "Reference" => "[Mr._Yellow]"
        ],
        [
            "extension" => "vnd.youtube.yt - OBSOLETED in favor of video/vnd.youtube.yt",
            "type" => "application/vnd.youtube.yt",
            "Reference" => "[Laura_Wood]"
        ],
        [
            "extension" => "vnd.zul",
            "type" => "application/vnd.zul",
            "Reference" => "[Rene_Grothmann]"
        ],
        [
            "extension" => "vnd.zzazz.deck+xml",
            "type" => "application/vnd.zzazz.deck+xml",
            "Reference" => "[Micheal_Hewett]"
        ],
        [
            "extension" => "voicexml+xml",
            "type" => "application/voicexml+xml",
            "Reference" => "[RFC4267]"
        ],
        [
            "extension" => "voucher-cms+json",
            "type" => "application/voucher-cms+json",
            "Reference" => "[RFC8366]"
        ],
        [
            "extension" => "vq-rtcpxr",
            "type" => "application/vq-rtcpxr",
            "Reference" => "[RFC6035]"
        ],
        [
            "extension" => "watcherinfo+xml",
            "type" => "application/watcherinfo+xml",
            "Reference" => "[RFC3858]"
        ],
        [
            "extension" => "webpush-options+json",
            "type" => "application/webpush-options+json",
            "Reference" => "[RFC8292]"
        ],
        [
            "extension" => "whoispp-query",
            "type" => "application/whoispp-query",
            "Reference" => "[RFC2957]"
        ],
        [
            "extension" => "whoispp-response",
            "type" => "application/whoispp-response",
            "Reference" => "[RFC2958]"
        ],
        [
            "extension" => "widget",
            "type" => "application/widget",
            "Reference" => "[W3C][Steven_Pemberton][W3C-Widgets-2012]"
        ],
        [
            "extension" => "wita",
            "type" => "application/wita",
            "Reference" => "[Larry_Campbell]"
        ],
        [
            "extension" => "wordperfect5.1",
            "type" => "application/wordperfect5.1",
            "Reference" => "[Paul_Lindner]"
        ],
        [
            "extension" => "wsdl+xml",
            "type" => "application/wsdl+xml",
            "Reference" => "[W3C]"
        ],
        [
            "extension" => "wspolicy+xml",
            "type" => "application/wspolicy+xml",
            "Reference" => "[W3C]"
        ],
        [
            "extension" => "x-pki-message",
            "type" => "application/x-pki-message",
            "Reference" => "[RFC8894]"
        ],
        [
            "extension" => "x-www-form-urlencoded",
            "type" => "application/x-www-form-urlencoded",
            "Reference" => "[WHATWG][Anne_van_Kesteren]"
        ],
        [
            "extension" => "x-x509-ca-cert",
            "type" => "application/x-x509-ca-cert",
            "Reference" => "[RFC8894]"
        ],
        [
            "extension" => "x-x509-ca-ra-cert",
            "type" => "application/x-x509-ca-ra-cert",
            "Reference" => "[RFC8894]"
        ],
        [
            "extension" => "x-x509-next-ca-cert",
            "type" => "application/x-x509-next-ca-cert",
            "Reference" => "[RFC8894]"
        ],
        [
            "extension" => "x400-bp",
            "type" => "application/x400-bp",
            "Reference" => "[RFC1494]"
        ],
        [
            "extension" => "xacml+xml",
            "type" => "application/xacml+xml",
            "Reference" => "[RFC7061]"
        ],
        [
            "extension" => "xcap-att+xml",
            "type" => "application/xcap-att+xml",
            "Reference" => "[RFC4825]"
        ],
        [
            "extension" => "xcap-caps+xml",
            "type" => "application/xcap-caps+xml",
            "Reference" => "[RFC4825]"
        ],
        [
            "extension" => "xcap-diff+xml",
            "type" => "application/xcap-diff+xml",
            "Reference" => "[RFC5874]"
        ],
        [
            "extension" => "xcap-el+xml",
            "type" => "application/xcap-el+xml",
            "Reference" => "[RFC4825]"
        ],
        [
            "extension" => "xcap-error+xml",
            "type" => "application/xcap-error+xml",
            "Reference" => "[RFC4825]"
        ],
        [
            "extension" => "xcap-ns+xml",
            "type" => "application/xcap-ns+xml",
            "Reference" => "[RFC4825]"
        ],
        [
            "extension" => "xcon-conference-info-diff+xml",
            "type" => "application/xcon-conference-info-diff+xml",
            "Reference" => "[RFC6502]"
        ],
        [
            "extension" => "xcon-conference-info+xml",
            "type" => "application/xcon-conference-info+xml",
            "Reference" => "[RFC6502]"
        ],
        [
            "extension" => "xenc+xml",
            "type" => "application/xenc+xml",
            "Reference" => "[Joseph_Reagle][XENC_Working_Group]"
        ],
        [
            "extension" => "xhtml+xml",
            "type" => "application/xhtml+xml",
            "Reference" => "[W3C][Robin_Berjon]"
        ],
        [
            "extension" => "xliff+xml",
            "type" => "application/xliff+xml",
            "Reference" => "[OASIS][Chet_Ensign]"
        ],
        [
            "extension" => "xml",
            "type" => "application/xml",
            "Reference" => "[RFC7303]"
        ],
        [
            "extension" => "xml-dtd",
            "type" => "application/xml-dtd",
            "Reference" => "[RFC7303]"
        ],
        [
            "extension" => "xml-external-parsed-entity",
            "type" => "application/xml-external-parsed-entity",
            "Reference" => "[RFC7303]"
        ],
        [
            "extension" => "xml-patch+xml",
            "type" => "application/xml-patch+xml",
            "Reference" => "[RFC7351]"
        ],
        [
            "extension" => "xmpp+xml",
            "type" => "application/xmpp+xml",
            "Reference" => "[RFC3923]"
        ],
        [
            "extension" => "xop+xml",
            "type" => "application/xop+xml",
            "Reference" => "[Mark_Nottingham]"
        ],
        [
            "extension" => "xslt+xml",
            "type" => "application/xslt+xml",
            "Reference" => "[W3C][http=>//www.w3.org/TR/2007/REC-xslt20-20070123/#media-type-registration]"
        ],
        [
            "extension" => "xv+xml",
            "type" => "application/xv+xml",
            "Reference" => "[RFC4374]"
        ],
        [
            "extension" => "yang",
            "type" => "application/yang",
            "Reference" => "[RFC6020]"
        ],
        [
            "extension" => "yang-data+json",
            "type" => "application/yang-data+json",
            "Reference" => "[RFC8040]"
        ],
        [
            "extension" => "yang-data+xml",
            "type" => "application/yang-data+xml",
            "Reference" => "[RFC8040]"
        ],
        [
            "extension" => "yang-patch+json",
            "type" => "application/yang-patch+json",
            "Reference" => "[RFC8072]"
        ],
        [
            "extension" => "yang-patch+xml",
            "type" => "application/yang-patch+xml",
            "Reference" => "[RFC8072]"
        ],
        [
            "extension" => "yin+xml",
            "type" => "application/yin+xml",
            "Reference" => "[RFC6020]"
        ],
        [
            "extension" => "zip",
            "type" => "application/zip",
            "Reference" => "[Paul_Lindner]"
        ],
        [
            "extension" => "zlib",
            "type" => "application/zlib",
            "Reference" => "[RFC6713]"
        ],
        [
            "extension" => "zstd",
            "type" => "application/zstd",
            "Reference" => "[RFC-kucherawy-rfc8478bis-05]"
        ]
    ];

    /*audio mime list in single constant*/
    public const Audio = [
        [
            "extension" => "1d-interleaved-parityfec",
            "type" => "audio/1d-interleaved-parityfec",
            "Reference" => "[RFC6015]"
        ],
        [
            "extension" => "32kadpcm",
            "type" => "audio/32kadpcm",
            "Reference" => "[RFC3802][RFC2421]"
        ],
        [
            "extension" => "3gpp",
            "type" => "audio/3gpp",
            "Reference" => "[RFC3839][RFC6381]"
        ],
        [
            "extension" => "3gpp2",
            "type" => "audio/3gpp2",
            "Reference" => "[RFC4393][RFC6381]"
        ],
        [
            "extension" => "aac",
            "type" => "audio/aac",
            "Reference" => "[ISO-IEC_JTC1][Max_Neuendorf]"
        ],
        [
            "extension" => "ac3",
            "type" => "audio/ac3",
            "Reference" => "[RFC4184]"
        ],
        [
            "extension" => "AMR",
            "type" => "audio/AMR",
            "Reference" => "[RFC4867]"
        ],
        [
            "extension" => "AMR-WB",
            "type" => "audio/AMR-WB",
            "Reference" => "[RFC4867]"
        ],
        [
            "extension" => "amr-wb+",
            "type" => "audio/amr-wb+",
            "Reference" => "[RFC4352]"
        ],
        [
            "extension" => "aptx",
            "type" => "audio/aptx",
            "Reference" => "[RFC7310]"
        ],
        [
            "extension" => "asc",
            "type" => "audio/asc",
            "Reference" => "[RFC6295]"
        ],
        [
            "extension" => "ATRAC-ADVANCED-LOSSLESS",
            "type" => "audio/ATRAC-ADVANCED-LOSSLESS",
            "Reference" => "[RFC5584]"
        ],
        [
            "extension" => "ATRAC-X",
            "type" => "audio/ATRAC-X",
            "Reference" => "[RFC5584]"
        ],
        [
            "extension" => "ATRAC3",
            "type" => "audio/ATRAC3",
            "Reference" => "[RFC5584]"
        ],
        [
            "extension" => "basic",
            "type" => "audio/basic",
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "BV16",
            "type" => "audio/BV16",
            "Reference" => "[RFC4298]"
        ],
        [
            "extension" => "BV32",
            "type" => "audio/BV32",
            "Reference" => "[RFC4298]"
        ],
        [
            "extension" => "clearmode",
            "type" => "audio/clearmode",
            "Reference" => "[RFC4040]"
        ],
        [
            "extension" => "CN",
            "type" => "audio/CN",
            "Reference" => "[RFC3389]"
        ],
        [
            "extension" => "DAT12",
            "type" => "audio/DAT12",
            "Reference" => "[RFC3190]"
        ],
        [
            "extension" => "dls",
            "type" => "audio/dls",
            "Reference" => "[RFC4613]"
        ],
        [
            "extension" => "dsr-es201108",
            "type" => "audio/dsr-es201108",
            "Reference" => "[RFC3557]"
        ],
        [
            "extension" => "dsr-es202050",
            "type" => "audio/dsr-es202050",
            "Reference" => "[RFC4060]"
        ],
        [
            "extension" => "dsr-es202211",
            "type" => "audio/dsr-es202211",
            "Reference" => "[RFC4060]"
        ],
        [
            "extension" => "dsr-es202212",
            "type" => "audio/dsr-es202212",
            "Reference" => "[RFC4060]"
        ],
        [
            "extension" => "DV",
            "type" => "audio/DV",
            "Reference" => "[RFC6469]"
        ],
        [
            "extension" => "DVI4",
            "type" => "audio/DVI4",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "eac3",
            "type" => "audio/eac3",
            "Reference" => "[RFC4598]"
        ],
        [
            "extension" => "encaprtp",
            "type" => "audio/encaprtp",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "EVRC",
            "type" => "audio/EVRC",
            "Reference" => "[RFC4788]"
        ],
        [
            "extension" => "EVRC-QCP",
            "type" => "audio/EVRC-QCP",
            "Reference" => "[RFC3625]"
        ],
        [
            "extension" => "EVRC0",
            "type" => "audio/EVRC0",
            "Reference" => "[RFC4788]"
        ],
        [
            "extension" => "EVRC1",
            "type" => "audio/EVRC1",
            "Reference" => "[RFC4788]"
        ],
        [
            "extension" => "EVRCB",
            "type" => "audio/EVRCB",
            "Reference" => "[RFC5188]"
        ],
        [
            "extension" => "EVRCB0",
            "type" => "audio/EVRCB0",
            "Reference" => "[RFC5188]"
        ],
        [
            "extension" => "EVRCB1",
            "type" => "audio/EVRCB1",
            "Reference" => "[RFC4788]"
        ],
        [
            "extension" => "EVRCNW",
            "type" => "audio/EVRCNW",
            "Reference" => "[RFC6884]"
        ],
        [
            "extension" => "EVRCNW0",
            "type" => "audio/EVRCNW0",
            "Reference" => "[RFC6884]"
        ],
        [
            "extension" => "EVRCNW1",
            "type" => "audio/EVRCNW1",
            "Reference" => "[RFC6884]"
        ],
        [
            "extension" => "EVRCWB",
            "type" => "audio/EVRCWB",
            "Reference" => "[RFC5188]"
        ],
        [
            "extension" => "EVRCWB0",
            "type" => "audio/EVRCWB0",
            "Reference" => "[RFC5188]"
        ],
        [
            "extension" => "EVRCWB1",
            "type" => "audio/EVRCWB1",
            "Reference" => "[RFC5188]"
        ],
        [
            "extension" => "EVS",
            "type" => "audio/EVS",
            "Reference" => "[_3GPP][Kyunghun_Jung]"
        ],
        [
            "extension" => "example",
            "type" => "audio/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "flexfec",
            "type" => "audio/flexfec",
            "Reference" => "[RFC8627]"
        ],
        [
            "extension" => "fwdred",
            "type" => "audio/fwdred",
            "Reference" => "[RFC6354]"
        ],
        [
            "extension" => "G711-0",
            "type" => "audio/G711-0",
            "Reference" => "[RFC7655]"
        ],
        [
            "extension" => "G719",
            "type" => "audio/G719",
            "Reference" => "[RFC5404][RFC Errata 3245]"
        ],
        [
            "extension" => "G7221",
            "type" => "audio/G7221",
            "Reference" => "[RFC5577]"
        ],
        [
            "extension" => "G722",
            "type" => "audio/G722",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G723",
            "type" => "audio/G723",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G726-16",
            "type" => "audio/G726-16",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G726-24",
            "type" => "audio/G726-24",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G726-32",
            "type" => "audio/G726-32",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G726-40",
            "type" => "audio/G726-40",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G728",
            "type" => "audio/G728",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G729",
            "type" => "audio/G729",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G7291",
            "type" => "audio/G7291",
            "Reference" => "[RFC4749][RFC5459]"
        ],
        [
            "extension" => "G729D",
            "type" => "audio/G729D",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G729E",
            "type" => "audio/G729E",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "GSM",
            "type" => "audio/GSM",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "GSM-EFR",
            "type" => "audio/GSM-EFR",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "GSM-HR-08",
            "type" => "audio/GSM-HR-08",
            "Reference" => "[RFC5993]"
        ],
        [
            "extension" => "iLBC",
            "type" => "audio/iLBC",
            "Reference" => "[RFC3952]"
        ],
        [
            "extension" => "ip-mr_v2.5",
            "type" => "audio/ip-mr_v2.5",
            "Reference" => "[RFC6262]"
        ],
        [
            "extension" => "L8",
            "type" => "audio/L8",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "L16",
            "type" => "audio/L16",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "L20",
            "type" => "audio/L20",
            "Reference" => "[RFC3190]"
        ],
        [
            "extension" => "L24",
            "type" => "audio/L24",
            "Reference" => "[RFC3190]"
        ],
        [
            "extension" => "LPC",
            "type" => "audio/LPC",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "MELP",
            "type" => "audio/MELP",
            "Reference" => "[RFC8130]"
        ],
        [
            "extension" => "MELP600",
            "type" => "audio/MELP600",
            "Reference" => "[RFC8130]"
        ],
        [
            "extension" => "MELP1200",
            "type" => "audio/MELP1200",
            "Reference" => "[RFC8130]"
        ],
        [
            "extension" => "MELP2400",
            "type" => "audio/MELP2400",
            "Reference" => "[RFC8130]"
        ],
        [
            "extension" => "mhas",
            "type" => "audio/mhas",
            "Reference" => "[ISO-IEC_JTC1][Nils_Peters][Ingo_Hofmann]"
        ],
        [
            "extension" => "mobile-xmf",
            "type" => "audio/mobile-xmf",
            "Reference" => "[RFC4723]"
        ],
        [
            "extension" => "MPA",
            "type" => "audio/MPA",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "mp4",
            "type" => "audio/mp4",
            "Reference" => "[RFC4337][RFC6381]"
        ],
        [
            "extension" => "MP4A-LATM",
            "type" => "audio/MP4A-LATM",
            "Reference" => "[RFC6416]"
        ],
        [
            "extension" => "mpa-robust",
            "type" => "audio/mpa-robust",
            "Reference" => "[RFC5219]"
        ],
        [
            "extension" => "mpeg",
            "type" => "audio/mpeg",
            "Reference" => "[RFC3003]"
        ],
        [
            "extension" => "mpeg4-generic",
            "type" => "audio/mpeg4-generic",
            "Reference" => "[RFC3640][RFC5691][RFC6295]"
        ],
        [
            "extension" => "ogg",
            "type" => "audio/ogg",
            "Reference" => "[RFC5334][RFC7845]"
        ],
        [
            "extension" => "opus",
            "type" => "audio/opus",
            "Reference" => "[RFC7587]"
        ],
        [
            "extension" => "parityfec",
            "type" => null,
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "PCMA",
            "type" => "audio/PCMA",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "PCMA-WB",
            "type" => "audio/PCMA-WB",
            "Reference" => "[RFC5391]"
        ],
        [
            "extension" => "PCMU",
            "type" => "audio/PCMU",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "PCMU-WB",
            "type" => "audio/PCMU-WB",
            "Reference" => "[RFC5391]"
        ],
        [
            "extension" => "prs.sid",
            "type" => "audio/prs.sid",
            "Reference" => "[Linus_Walleij]"
        ],
        [
            "extension" => "QCELP",
            "type" => null,
            "Reference" => "[RFC3555][RFC3625]"
        ],
        [
            "extension" => "raptorfec",
            "type" => "audio/raptorfec",
            "Reference" => "[RFC6682]"
        ],
        [
            "extension" => "RED",
            "type" => "audio/RED",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "rtp-enc-aescm128",
            "type" => "audio/rtp-enc-aescm128",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "rtploopback",
            "type" => "audio/rtploopback",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "rtp-midi",
            "type" => "audio/rtp-midi",
            "Reference" => "[RFC6295]"
        ],
        [
            "extension" => "rtx",
            "type" => "audio/rtx",
            "Reference" => "[RFC4588]"
        ],
        [
            "extension" => "SMV",
            "type" => "audio/SMV",
            "Reference" => "[RFC3558]"
        ],
        [
            "extension" => "SMV0",
            "type" => "audio/SMV0",
            "Reference" => "[RFC3558]"
        ],
        [
            "extension" => "SMV-QCP",
            "type" => "audio/SMV-QCP",
            "Reference" => "[RFC3625]"
        ],
        [
            "extension" => "sofa",
            "type" => "audio/sofa",
            "Reference" => "[AES][Piotr_Majdak]"
        ],
        [
            "extension" => "sp-midi",
            "type" => "audio/sp-midi",
            "Reference" => "[Timo_Kosonen][Tom_White]"
        ],
        [
            "extension" => "speex",
            "type" => "audio/speex",
            "Reference" => "[RFC5574]"
        ],
        [
            "extension" => "t140c",
            "type" => "audio/t140c",
            "Reference" => "[RFC4351]"
        ],
        [
            "extension" => "t38",
            "type" => "audio/t38",
            "Reference" => "[RFC4612]"
        ],
        [
            "extension" => "telephone-event",
            "type" => "audio/telephone-event",
            "Reference" => "[RFC4733]"
        ],
        [
            "extension" => "TETRA_ACELP",
            "type" => "audio/TETRA_ACELP",
            "Reference" => "[ETSI][Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "TETRA_ACELP_BB",
            "type" => "audio/TETRA_ACELP_BB",
            "Reference" => "[ETSI][Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "tone",
            "type" => "audio/tone",
            "Reference" => "[RFC4733]"
        ],
        [
            "extension" => "TSVCIS",
            "type" => "audio/TSVCIS",
            "Reference" => "[RFC8817]"
        ],
        [
            "extension" => "UEMCLIP",
            "type" => "audio/UEMCLIP",
            "Reference" => "[RFC5686]"
        ],
        [
            "extension" => "ulpfec",
            "type" => "audio/ulpfec",
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "usac",
            "type" => "audio/usac",
            "Reference" => "[ISO-IEC_JTC1][Max_Neuendorf]"
        ],
        [
            "extension" => "VDVI",
            "type" => "audio/VDVI",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "VMR-WB",
            "type" => "audio/VMR-WB",
            "Reference" => "[RFC4348][RFC4424]"
        ],
        [
            "extension" => "vnd.3gpp.iufp",
            "type" => "audio/vnd.3gpp.iufp",
            "Reference" => "[Thomas_Belling]"
        ],
        [
            "extension" => "vnd.4SB",
            "type" => "audio/vnd.4SB",
            "Reference" => "[Serge_De_Jaham]"
        ],
        [
            "extension" => "vnd.audiokoz",
            "type" => "audio/vnd.audiokoz",
            "Reference" => "[Vicki_DeBarros]"
        ],
        [
            "extension" => "vnd.CELP",
            "type" => "audio/vnd.CELP",
            "Reference" => "[Serge_De_Jaham]"
        ],
        [
            "extension" => "vnd.cisco.nse",
            "type" => "audio/vnd.cisco.nse",
            "Reference" => "[Rajesh_Kumar]"
        ],
        [
            "extension" => "vnd.cmles.radio-events",
            "type" => "audio/vnd.cmles.radio-events",
            "Reference" => "[Jean-Philippe_Goulet]"
        ],
        [
            "extension" => "vnd.cns.anp1",
            "type" => "audio/vnd.cns.anp1",
            "Reference" => "[Ann_McLaughlin]"
        ],
        [
            "extension" => "vnd.cns.inf1",
            "type" => "audio/vnd.cns.inf1",
            "Reference" => "[Ann_McLaughlin]"
        ],
        [
            "extension" => "vnd.dece.audio",
            "type" => "audio/vnd.dece.audio",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.digital-winds",
            "type" => "audio/vnd.digital-winds",
            "Reference" => "[Armands_Strazds]"
        ],
        [
            "extension" => "vnd.dlna.adts",
            "type" => "audio/vnd.dlna.adts",
            "Reference" => "[Edwin_Heredia]"
        ],
        [
            "extension" => "vnd.dolby.heaac.1",
            "type" => "audio/vnd.dolby.heaac.1",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dolby.heaac.2",
            "type" => "audio/vnd.dolby.heaac.2",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dolby.mlp",
            "type" => "audio/vnd.dolby.mlp",
            "Reference" => "[Mike_Ward]"
        ],
        [
            "extension" => "vnd.dolby.mps",
            "type" => "audio/vnd.dolby.mps",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dolby.pl2",
            "type" => "audio/vnd.dolby.pl2",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dolby.pl2x",
            "type" => "audio/vnd.dolby.pl2x",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dolby.pl2z",
            "type" => "audio/vnd.dolby.pl2z",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dolby.pulse.1",
            "type" => "audio/vnd.dolby.pulse.1",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dra",
            "type" => "audio/vnd.dra",
            "Reference" => "[Jiang_Tian]"
        ],
        [
            "extension" => "vnd.dts",
            "type" => "audio/vnd.dts",
            "Reference" => "[William_Zou]"
        ],
        [
            "extension" => "vnd.dts.hd",
            "type" => "audio/vnd.dts.hd",
            "Reference" => "[William_Zou]"
        ],
        [
            "extension" => "vnd.dts.uhd",
            "type" => "audio/vnd.dts.uhd",
            "Reference" => "[Phillip_Maness]"
        ],
        [
            "extension" => "vnd.dvb.file",
            "type" => "audio/vnd.dvb.file",
            "Reference" => "[Peter_Siebert]"
        ],
        [
            "extension" => "vnd.everad.plj",
            "type" => "audio/vnd.everad.plj",
            "Reference" => "[Shay_Cicelsky]"
        ],
        [
            "extension" => "vnd.hns.audio",
            "type" => "audio/vnd.hns.audio",
            "Reference" => "[Swaminathan]"
        ],
        [
            "extension" => "vnd.lucent.voice",
            "type" => "audio/vnd.lucent.voice",
            "Reference" => "[Greg_Vaudreuil]"
        ],
        [
            "extension" => "vnd.ms-playready.media.pya",
            "type" => "audio/vnd.ms-playready.media.pya",
            "Reference" => "[Steve_DiAcetis]"
        ],
        [
            "extension" => "vnd.nokia.mobile-xmf",
            "type" => "audio/vnd.nokia.mobile-xmf",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nortel.vbk",
            "type" => "audio/vnd.nortel.vbk",
            "Reference" => "[Glenn_Parsons]"
        ],
        [
            "extension" => "vnd.nuera.ecelp4800",
            "type" => "audio/vnd.nuera.ecelp4800",
            "Reference" => "[Michael_Fox]"
        ],
        [
            "extension" => "vnd.nuera.ecelp7470",
            "type" => "audio/vnd.nuera.ecelp7470",
            "Reference" => "[Michael_Fox]"
        ],
        [
            "extension" => "vnd.nuera.ecelp9600",
            "type" => "audio/vnd.nuera.ecelp9600",
            "Reference" => "[Michael_Fox]"
        ],
        [
            "extension" => "vnd.octel.sbc",
            "type" => "audio/vnd.octel.sbc",
            "Reference" => "[Greg_Vaudreuil]"
        ],
        [
            "extension" => "vnd.presonus.multitrack",
            "type" => "audio/vnd.presonus.multitrack",
            "Reference" => "[Matthias_Juwan]"
        ],
        [
            "extension" => "vnd.qcelp - DEPRECATED in favor of audio/qcelp",
            "type" => "audio/vnd.qcelp",
            "Reference" => "[RFC3625]"
        ],
        [
            "extension" => "vnd.rhetorex.32kadpcm",
            "type" => "audio/vnd.rhetorex.32kadpcm",
            "Reference" => "[Greg_Vaudreuil]"
        ],
        [
            "extension" => "vnd.rip",
            "type" => "audio/vnd.rip",
            "Reference" => "[Martin_Dawe]"
        ],
        [
            "extension" => "vnd.sealedmedia.softseal.mpeg",
            "type" => "audio/vnd.sealedmedia.softseal.mpeg",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.vmx.cvsd",
            "type" => "audio/vnd.vmx.cvsd",
            "Reference" => "[Greg_Vaudreuil]"
        ],
        [
            "extension" => "vorbis",
            "type" => "audio/vorbis",
            "Reference" => "[RFC5215]"
        ],
        [
            "extension" => "vorbis-config",
            "type" => "audio/vorbis-config",
            "Reference" => "[RFC5215]"
        ]
    ];

    /*font mime list in single constant*/
    public const Font = [
        [
            "extension" => "collection",
            "type" => "font/collection",
            "Reference" => "[RFC8081]"
        ],
        [
            "extension" => "otf",
            "type" => "font/otf",
            "Reference" => "[RFC8081]"
        ],
        [
            "extension" => "sfnt",
            "type" => "font/sfnt",
            "Reference" => "[RFC8081]"
        ],
        [
            "extension" => "ttf",
            "type" => "font/ttf",
            "Reference" => "[RFC8081]"
        ],
        [
            "extension" => "woff",
            "type" => "font/woff",
            "Reference" => "[RFC8081]"
        ],
        [
            "extension" => "woff2",
            "type" => "font/woff2",
            "Reference" => "[RFC8081]"
        ]
    ];

    /*image mime list in single constant*/
    public const Image = [
        [
            "extension" => "aces",
            "type" => "image/aces",
            "Reference" => "[SMPTE][Howard_Lukk]"
        ],
        [
            "extension" => "avci",
            "type" => "image/avci",
            "Reference" => "[ISO-IEC_JTC1][David_Singer]"
        ],
        [
            "extension" => "avcs",
            "type" => "image/avcs",
            "Reference" => "[ISO-IEC_JTC1][David_Singer]"
        ],
        [
            "extension" => "bmp",
            "type" => "image/bmp",
            "Reference" => "[RFC7903]"
        ],
        [
            "extension" => "cgm",
            "type" => "image/cgm",
            "Reference" => "[Alan_Francis]"
        ],
        [
            "extension" => "dicom-rle",
            "type" => "image/dicom-rle",
            "Reference" => "[DICOM_Standards_Committee][David_Clunie]"
        ],
        [
            "extension" => "emf",
            "type" => "image/emf",
            "Reference" => "[RFC7903]"
        ],
        [
            "extension" => "example",
            "type" => "image/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "fits",
            "type" => "image/fits",
            "Reference" => "[RFC4047]"
        ],
        [
            "extension" => "g3fax",
            "type" => "image/g3fax",
            "Reference" => "[RFC1494]"
        ],
        [
            "extension" => "gif",
            "type" => "image/gif",
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "heic",
            "type" => "image/heic",
            "Reference" => "[ISO-IEC_JTC1][David_Singer]"
        ],
        [
            "extension" => "heic-sequence",
            "type" => "image/heic-sequence",
            "Reference" => "[ISO-IEC_JTC1][David_Singer]"
        ],
        [
            "extension" => "heif",
            "type" => "image/heif",
            "Reference" => "[ISO-IEC_JTC1][David_Singer]"
        ],
        [
            "extension" => "heif-sequence",
            "type" => "image/heif-sequence",
            "Reference" => "[ISO-IEC_JTC1][David_Singer]"
        ],
        [
            "extension" => "hej2k",
            "type" => "image/hej2k",
            "Reference" => "[ISO-IEC_JTC1][ITU-T]"
        ],
        [
            "extension" => "hsj2",
            "type" => "image/hsj2",
            "Reference" => "[ISO-IEC_JTC1][ITU-T]"
        ],
        [
            "extension" => "ief",
            "type" => null,
            "Reference" => "[RFC1314]"
        ],
        [
            "extension" => "jls",
            "type" => "image/jls",
            "Reference" => "[DICOM_Standards_Committee][David_Clunie]"
        ],
        [
            "extension" => "jp2",
            "type" => "image/jp2",
            "Reference" => "[RFC3745]"
        ],
        [
            "extension" => "jpg",
            "document" => "JPEG images",
            "type" => "image/jpeg"
        ],
        [
            "extension" => "jpeg",
            "type" => null,
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "jph",
            "type" => "image/jph",
            "Reference" => "[ISO-IEC_JTC1][ITU-T]"
        ],
        [
            "extension" => "jphc",
            "type" => "image/jphc",
            "Reference" => "[ISO-IEC_JTC1][ITU-T]"
        ],
        [
            "extension" => "jpm",
            "type" => "image/jpm",
            "Reference" => "[RFC3745]"
        ],
        [
            "extension" => "jpx",
            "type" => "image/jpx",
            "Reference" => "[RFC3745]"
        ],
        [
            "extension" => "jxr",
            "type" => "image/jxr",
            "Reference" => "[ISO-IEC_JTC1][ITU-T]"
        ],
        [
            "extension" => "jxrA",
            "type" => "image/jxrA",
            "Reference" => "[ISO-IEC_JTC1][ITU-T]"
        ],
        [
            "extension" => "jxrS",
            "type" => "image/jxrS",
            "Reference" => "[ISO-IEC_JTC1][ITU-T]"
        ],
        [
            "extension" => "jxs",
            "type" => "image/jxs",
            "Reference" => "[ISO-IEC_JTC1]"
        ],
        [
            "extension" => "jxsc",
            "type" => "image/jxsc",
            "Reference" => "[ISO-IEC_JTC1]"
        ],
        [
            "extension" => "jxsi",
            "type" => "image/jxsi",
            "Reference" => "[ISO-IEC_JTC1]"
        ],
        [
            "extension" => "jxss",
            "type" => "image/jxss",
            "Reference" => "[ISO-IEC_JTC1]"
        ],
        [
            "extension" => "ktx",
            "type" => "image/ktx",
            "Reference" => "[Khronos][Mark_Callow]"
        ],
        [
            "extension" => "ktx2",
            "type" => "image/ktx2",
            "Reference" => "[Khronos][Mark_Callow]"
        ],
        [
            "extension" => "naplps",
            "type" => "image/naplps",
            "Reference" => "[Ilya_Ferber]"
        ],
        [
            "extension" => "png",
            "type" => "image/png",
            "Reference" => "[Glenn_Randers-Pehrson]"
        ],
        [
            "extension" => "prs.btif",
            "type" => "image/prs.btif",
            "Reference" => "[Ben_Simon]"
        ],
        [
            "extension" => "prs.pti",
            "type" => "image/prs.pti",
            "Reference" => "[Juern_Laun]"
        ],
        [
            "extension" => "pwg-raster",
            "type" => "image/pwg-raster",
            "Reference" => "[Michael_Sweet]"
        ],
        [
            "extension" => "svg+xml",
            "type" => "image/svg+xml",
            "Reference" => "[W3C][http=>//www.w3.org/TR/SVG/mimereg.html]"
        ],
        [
            "extension" => "t38",
            "type" => "image/t38",
            "Reference" => "[RFC3362]"
        ],
        [
            "extension" => "tiff",
            "type" => "image/tiff",
            "Reference" => "[RFC3302]"
        ],
        [
            "extension" => "tiff-fx",
            "type" => "image/tiff-fx",
            "Reference" => "[RFC3950]"
        ],
        [
            "extension" => "vnd.adobe.photoshop",
            "type" => "image/vnd.adobe.photoshop",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.airzip.accelerator.azv",
            "type" => "image/vnd.airzip.accelerator.azv",
            "Reference" => "[Gary_Clueit]"
        ],
        [
            "extension" => "vnd.cns.inf2",
            "type" => "image/vnd.cns.inf2",
            "Reference" => "[Ann_McLaughlin]"
        ],
        [
            "extension" => "vnd.dece.graphic",
            "type" => "image/vnd.dece.graphic",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.djvu",
            "type" => "image/vnd.djvu",
            "Reference" => "[Leon_Bottou]"
        ],
        [
            "extension" => "vnd.dwg",
            "type" => "image/vnd.dwg",
            "Reference" => "[Jodi_Moline]"
        ],
        [
            "extension" => "vnd.dxf",
            "type" => "image/vnd.dxf",
            "Reference" => "[Jodi_Moline]"
        ],
        [
            "extension" => "vnd.dvb.subtitle",
            "type" => "image/vnd.dvb.subtitle",
            "Reference" => "[Peter_Siebert][Michael_Lagally]"
        ],
        [
            "extension" => "vnd.fastbidsheet",
            "type" => "image/vnd.fastbidsheet",
            "Reference" => "[Scott_Becker]"
        ],
        [
            "extension" => "vnd.fpx",
            "type" => "image/vnd.fpx",
            "Reference" => "[Marc_Douglas_Spencer]"
        ],
        [
            "extension" => "vnd.fst",
            "type" => "image/vnd.fst",
            "Reference" => "[Arild_Fuldseth]"
        ],
        [
            "extension" => "vnd.fujixerox.edmics-mmr",
            "type" => "image/vnd.fujixerox.edmics-mmr",
            "Reference" => "[Masanori_Onda]"
        ],
        [
            "extension" => "vnd.fujixerox.edmics-rlc",
            "type" => "image/vnd.fujixerox.edmics-rlc",
            "Reference" => "[Masanori_Onda]"
        ],
        [
            "extension" => "vnd.globalgraphics.pgb",
            "type" => "image/vnd.globalgraphics.pgb",
            "Reference" => "[Martin_Bailey]"
        ],
        [
            "extension" => "vnd.microsoft.icon",
            "type" => "image/vnd.microsoft.icon",
            "Reference" => "[Simon_Butcher]"
        ],
        [
            "extension" => "vnd.mix",
            "type" => "image/vnd.mix",
            "Reference" => "[Saveen_Reddy]"
        ],
        [
            "extension" => "vnd.ms-modi",
            "type" => "image/vnd.ms-modi",
            "Reference" => "[Gregory_Vaughan]"
        ],
        [
            "extension" => "vnd.mozilla.apng",
            "type" => "image/vnd.mozilla.apng",
            "Reference" => "[Stuart_Parmenter]"
        ],
        [
            "extension" => "vnd.net-fpx",
            "type" => "image/vnd.net-fpx",
            "Reference" => "[Marc_Douglas_Spencer]"
        ],
        [
            "extension" => "vnd.radiance",
            "type" => "image/vnd.radiance",
            "Reference" => "[Randolph_Fritz][Greg_Ward]"
        ],
        [
            "extension" => "vnd.sealed.png",
            "type" => "image/vnd.sealed.png",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealedmedia.softseal.gif",
            "type" => "image/vnd.sealedmedia.softseal.gif",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealedmedia.softseal.jpg",
            "type" => "image/vnd.sealedmedia.softseal.jpg",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.svf",
            "type" => "image/vnd.svf",
            "Reference" => "[Jodi_Moline]"
        ],
        [
            "extension" => "vnd.tencent.tap",
            "type" => "image/vnd.tencent.tap",
            "Reference" => "[Ni_Hui]"
        ],
        [
            "extension" => "vnd.valve.source.texture",
            "type" => "image/vnd.valve.source.texture",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.wap.wbmp",
            "type" => "image/vnd.wap.wbmp",
            "Reference" => "[Peter_Stark]"
        ],
        [
            "extension" => "vnd.xiff",
            "type" => "image/vnd.xiff",
            "Reference" => "[Steven_Martin]"
        ],
        [
            "extension" => "vnd.zbrush.pcx",
            "type" => "image/vnd.zbrush.pcx",
            "Reference" => "[Chris_Charabaruk]"
        ],
        [
            "extension" => "wmf",
            "type" => "image/wmf",
            "Reference" => "[RFC7903]"
        ],
        [
            "extension" => "x-emf - DEPRECATED in favor of image/emf",
            "type" => "image/emf",
            "Reference" => "[RFC7903]"
        ],
        [
            "extension" => "x-wmf - DEPRECATED in favor of image/wmf",
            "type" => "image/wmf",
            "Reference" => "[RFC7903]"
        ],
        [
            "extension" => "webp",
            "document" => "WEBP image",
            "type" => "image/webp"
        ]
    ];

    /*message mime list in single constant*/
    public const Message = [
        [
            "extension" => "CPIM",
            "type" => "message/CPIM",
            "Reference" => "[RFC3862]"
        ],
        [
            "extension" => "delivery-status",
            "type" => "message/delivery-status",
            "Reference" => "[RFC1894]"
        ],
        [
            "extension" => "disposition-notification",
            "type" => "message/disposition-notification",
            "Reference" => "[RFC8098]"
        ],
        [
            "extension" => "example",
            "type" => "message/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "external-body",
            "type" => null,
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "feedback-report",
            "type" => "message/feedback-report",
            "Reference" => "[RFC5965]"
        ],
        [
            "extension" => "global",
            "type" => "message/global",
            "Reference" => "[RFC6532]"
        ],
        [
            "extension" => "global-delivery-status",
            "type" => "message/global-delivery-status",
            "Reference" => "[RFC6533]"
        ],
        [
            "extension" => "global-disposition-notification",
            "type" => "message/global-disposition-notification",
            "Reference" => "[RFC6533]"
        ],
        [
            "extension" => "global-headers",
            "type" => "message/global-headers",
            "Reference" => "[RFC6533]"
        ],
        [
            "extension" => "http",
            "type" => "message/http",
            "Reference" => "[RFC7230]"
        ],
        [
            "extension" => "imdn+xml",
            "type" => "message/imdn+xml",
            "Reference" => "[RFC5438]"
        ],
        [
            "extension" => "news - OBSOLETED by RFC5537",
            "type" => "message/news",
            "Reference" => "[RFC5537][Henry_Spencer]"
        ],
        [
            "extension" => "partial",
            "type" => null,
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "rfc822",
            "type" => null,
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "s-http",
            "type" => "message/s-http",
            "Reference" => "[RFC2660]"
        ],
        [
            "extension" => "sip",
            "type" => "message/sip",
            "Reference" => "[RFC3261]"
        ],
        [
            "extension" => "sipfrag",
            "type" => "message/sipfrag",
            "Reference" => "[RFC3420]"
        ],
        [
            "extension" => "tracking-status",
            "type" => "message/tracking-status",
            "Reference" => "[RFC3886]"
        ],
        [
            "extension" => "vnd.si.simp - OBSOLETED by request",
            "type" => "message/vnd.si.simp",
            "Reference" => "[Nicholas_Parks_Young]"
        ],
        [
            "extension" => "vnd.wfa.wsc",
            "type" => "message/vnd.wfa.wsc",
            "Reference" => "[Mick_Conley]"
        ]
    ];

    /*model mime list in single constant*/
    public const Model = [
        [
            "extension" => "3mf",
            "type" => "model/3mf",
            "Reference" => "[http=>//www.3mf.io/specification][_3MF][Michael_Sweet]"
        ],
        [
            "extension" => "e57",
            "type" => "model/e57",
            "Reference" => "[ASTM]"
        ],
        [
            "extension" => "example",
            "type" => "model/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "gltf-binary",
            "type" => "model/gltf-binary",
            "Reference" => "[Khronos][Saurabh_Bhatia]"
        ],
        [
            "extension" => "gltf+json",
            "type" => "model/gltf+json",
            "Reference" => "[Khronos][Uli_Klumpp]"
        ],
        [
            "extension" => "iges",
            "type" => "model/iges",
            "Reference" => "[Curtis_Parks]"
        ],
        [
            "extension" => "mesh",
            "type" => null,
            "Reference" => "[RFC2077]"
        ],
        [
            "extension" => "mtl",
            "type" => "model/mtl",
            "Reference" => "[DICOM_Standards_Committee][Luiza_Kowalczyk]"
        ],
        [
            "extension" => "obj",
            "type" => "model/obj",
            "Reference" => "[DICOM_Standards_Committee][Luiza_Kowalczyk]"
        ],
        [
            "extension" => "stl",
            "type" => "model/stl",
            "Reference" => "[DICOM_Standards_Committee][Lisa_Spellman]"
        ],
        [
            "extension" => "vnd.collada+xml",
            "type" => "model/vnd.collada+xml",
            "Reference" => "[James_Riordon]"
        ],
        [
            "extension" => "vnd.dwf",
            "type" => "model/vnd.dwf",
            "Reference" => "[Jason_Pratt]"
        ],
        [
            "extension" => "vnd.flatland.3dml",
            "type" => "model/vnd.flatland.3dml",
            "Reference" => "[Michael_Powers]"
        ],
        [
            "extension" => "vnd.gdl",
            "type" => "model/vnd.gdl",
            "Reference" => "[Attila_Babits]"
        ],
        [
            "extension" => "vnd.gs-gdl",
            "type" => "model/vnd.gs-gdl",
            "Reference" => "[Attila_Babits]"
        ],
        [
            "extension" => "vnd.gtw",
            "type" => "model/vnd.gtw",
            "Reference" => "[Yutaka_Ozaki]"
        ],
        [
            "extension" => "vnd.moml+xml",
            "type" => "model/vnd.moml+xml",
            "Reference" => "[Christopher_Brooks]"
        ],
        [
            "extension" => "vnd.mts",
            "type" => "model/vnd.mts",
            "Reference" => "[Boris_Rabinovitch]"
        ],
        [
            "extension" => "vnd.opengex",
            "type" => "model/vnd.opengex",
            "Reference" => "[Eric_Lengyel]"
        ],
        [
            "extension" => "vnd.parasolid.transmit.binary",
            "type" => "model/vnd.parasolid.transmit.binary",
            "Reference" => "[Parasolid]"
        ],
        [
            "extension" => "vnd.parasolid.transmit.text",
            "type" => "model/vnd.parasolid.transmit.text",
            "Reference" => "[Parasolid]"
        ],
        [
            "extension" => "vnd.rosette.annotated-data-model",
            "type" => "model/vnd.rosette.annotated-data-model",
            "Reference" => "[Benson_Margulies]"
        ],
        [
            "extension" => "vnd.usdz+zip",
            "type" => "model/vnd.usdz+zip",
            "Reference" => "[Sebastian_Grassia]"
        ],
        [
            "extension" => "vnd.valve.source.compiled-map",
            "type" => "model/vnd.valve.source.compiled-map",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.vtu",
            "type" => "model/vnd.vtu",
            "Reference" => "[Boris_Rabinovitch]"
        ],
        [
            "extension" => "vrml",
            "type" => null,
            "Reference" => "[RFC2077]"
        ],
        [
            "extension" => "x3d-vrml",
            "type" => "model/x3d-vrml",
            "Reference" => "[Web3D][Web3D_X3D]"
        ],
        [
            "extension" => "x3d+fastinfoset",
            "type" => "model/x3d+fastinfoset",
            "Reference" => "[Web3D_X3D]"
        ],
        [
            "extension" => "x3d+xml",
            "type" => "model/x3d+xml",
            "Reference" => "[Web3D][Web3D_X3D]"
        ]
    ];

    /*multipart mime list in single constant*/
    public const Multipart = [
        [
            "extension" => "alternative",
            "type" => null,
            "Reference" => "[RFC2046][RFC2045]"
        ],
        [
            "extension" => "appledouble",
            "type" => "multipart/appledouble",
            "Reference" => "[Patrik_Faltstrom]"
        ],
        [
            "extension" => "byteranges",
            "type" => "multipart/byteranges",
            "Reference" => "[RFC7233]"
        ],
        [
            "extension" => "digest",
            "type" => null,
            "Reference" => "[RFC2046][RFC2045]"
        ],
        [
            "extension" => "encrypted",
            "type" => "multipart/encrypted",
            "Reference" => "[RFC1847]"
        ],
        [
            "extension" => "example",
            "type" => "multipart/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "form-data",
            "type" => "multipart/form-data",
            "Reference" => "[RFC7578]"
        ],
        [
            "extension" => "header-set",
            "type" => "multipart/header-set",
            "Reference" => "[Dave_Crocker]"
        ],
        [
            "extension" => "mixed",
            "type" => null,
            "Reference" => "[RFC2046][RFC2045]"
        ],
        [
            "extension" => "multilingual",
            "type" => "multipart/multilingual",
            "Reference" => "[RFC8255]"
        ],
        [
            "extension" => "parallel",
            "type" => null,
            "Reference" => "[RFC2046][RFC2045]"
        ],
        [
            "extension" => "related",
            "type" => "multipart/related",
            "Reference" => "[RFC2387]"
        ],
        [
            "extension" => "report",
            "type" => "multipart/report",
            "Reference" => "[RFC6522]"
        ],
        [
            "extension" => "signed",
            "type" => "multipart/signed",
            "Reference" => "[RFC1847]"
        ],
        [
            "extension" => "vnd.bint.med-plus",
            "type" => "multipart/vnd.bint.med-plus",
            "Reference" => "[Heinz-Peter_Schütz]"
        ],
        [
            "extension" => "voice-message",
            "type" => "multipart/voice-message",
            "Reference" => "[RFC3801]"
        ],
        [
            "extension" => "x-mixed-replace",
            "type" => "multipart/x-mixed-replace",
            "Reference" => "[W3C][Robin_Berjon]"
        ]
    ];

    /*text mime list in single constant*/
    public const Text = [
        [
            "extension" => "1d-interleaved-parityfec",
            "type" => "text/1d-interleaved-parityfec",
            "Reference" => "[RFC6015]"
        ],
        [
            "extension" => "cache-manifest",
            "type" => "text/cache-manifest",
            "Reference" => "[W3C][Robin_Berjon]"
        ],
        [
            "extension" => "calendar",
            "type" => "text/calendar",
            "Reference" => "[RFC5545]"
        ],
        [
            "extension" => "css",
            "type" => "text/css",
            "Reference" => "[RFC2318]"
        ],
        [
            "extension" => "csv",
            "type" => "text/csv",
            "Reference" => "[RFC4180][RFC7111]"
        ],
        [
            "extension" => "csv-schema",
            "type" => "text/csv-schema",
            "Reference" => "[National_Archives_UK][David_Underdown]"
        ],
        [
            "extension" => "directory - DEPRECATED by RFC6350",
            "type" => "text/directory",
            "Reference" => "[RFC2425][RFC6350]"
        ],
        [
            "extension" => "dns",
            "type" => "text/dns",
            "Reference" => "[RFC4027]"
        ],
        [
            "extension" => "ecmascript - OBSOLETED in favor of application/ecmascript",
            "type" => "text/ecmascript",
            "Reference" => "[RFC4329]"
        ],
        [
            "extension" => "encaprtp",
            "type" => "text/encaprtp",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "enriched",
            "type" => null,
            "Reference" => "[RFC1896]"
        ],
        [
            "extension" => "example",
            "type" => "text/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "flexfec",
            "type" => "text/flexfec",
            "Reference" => "[RFC8627]"
        ],
        [
            "extension" => "fwdred",
            "type" => "text/fwdred",
            "Reference" => "[RFC6354]"
        ],
        [
            "extension" => "gff3",
            "type" => "text/gff3",
            "Reference" => "[Sequence_Ontology]"
        ],
        [
            "extension" => "grammar-ref-list",
            "type" => "text/grammar-ref-list",
            "Reference" => "[RFC6787]"
        ],
        [
            "extension" => "html",
            "type" => "text/html",
            "Reference" => "[W3C][Robin_Berjon]"
        ],
        [
            "extension" => "javascript - OBSOLETED in favor of application/javascript",
            "type" => "text/javascript",
            "Reference" => "[RFC4329]"
        ],
        [
            "extension" => "jcr-cnd",
            "type" => "text/jcr-cnd",
            "Reference" => "[Peeter_Piegaze]"
        ],
        [
            "extension" => "markdown",
            "type" => "text/markdown",
            "Reference" => "[RFC7763]"
        ],
        [
            "extension" => "mizar",
            "type" => "text/mizar",
            "Reference" => "[Jesse_Alama]"
        ],
        [
            "extension" => "n3",
            "type" => "text/n3",
            "Reference" => "[W3C][Eric_Prudhommeaux]"
        ],
        [
            "extension" => "parameters",
            "type" => "text/parameters",
            "Reference" => "[RFC7826]"
        ],
        [
            "extension" => "parityfec",
            "type" => null,
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "plain",
            "type" => null,
            "Reference" => "[RFC2046][RFC3676][RFC5147]"
        ],
        [
            "extension" => "provenance-notation",
            "type" => "text/provenance-notation",
            "Reference" => "[W3C][Ivan_Herman]"
        ],
        [
            "extension" => "prs.fallenstein.rst",
            "type" => "text/prs.fallenstein.rst",
            "Reference" => "[Benja_Fallenstein]"
        ],
        [
            "extension" => "prs.lines.tag",
            "type" => "text/prs.lines.tag",
            "Reference" => "[John_Lines]"
        ],
        [
            "extension" => "prs.prop.logic",
            "type" => "text/prs.prop.logic",
            "Reference" => "[Hans-Dieter_A._Hiep]"
        ],
        [
            "extension" => "raptorfec",
            "type" => "text/raptorfec",
            "Reference" => "[RFC6682]"
        ],
        [
            "extension" => "RED",
            "type" => "text/RED",
            "Reference" => "[RFC4102]"
        ],
        [
            "extension" => "rfc822-headers",
            "type" => "text/rfc822-headers",
            "Reference" => "[RFC6522]"
        ],
        [
            "extension" => "richtext",
            "type" => null,
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "rtf",
            "type" => "text/rtf",
            "Reference" => "[Paul_Lindner]"
        ],
        [
            "extension" => "rtp-enc-aescm128",
            "type" => "text/rtp-enc-aescm128",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "rtploopback",
            "type" => "text/rtploopback",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "rtx",
            "type" => "text/rtx",
            "Reference" => "[RFC4588]"
        ],
        [
            "extension" => "SGML",
            "type" => "text/SGML",
            "Reference" => "[RFC1874]"
        ],
        [
            "extension" => "shaclc",
            "type" => "text/shaclc",
            "Reference" => "[W3C_SHACL_Community_Group][Vladimir_Alexiev]"
        ],
        [
            "extension" => "spdx",
            "type" => "text/spdx",
            "Reference" => "[Linux_Foundation][Rose_Judge]"
        ],
        [
            "extension" => "strings",
            "type" => "text/strings",
            "Reference" => "[IEEE-ISTO-PWG-PPP]"
        ],
        [
            "extension" => "t140",
            "type" => "text/t140",
            "Reference" => "[RFC4103]"
        ],
        [
            "extension" => "tab-separated-values",
            "type" => "text/tab-separated-values",
            "Reference" => "[Paul_Lindner]"
        ],
        [
            "extension" => "troff",
            "type" => "text/troff",
            "Reference" => "[RFC4263]"
        ],
        [
            "extension" => "turtle",
            "type" => "text/turtle",
            "Reference" => "[W3C][Eric_Prudhommeaux]"
        ],
        [
            "extension" => "ulpfec",
            "type" => "text/ulpfec",
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "uri-list",
            "type" => "text/uri-list",
            "Reference" => "[RFC2483]"
        ],
        [
            "extension" => "vcard",
            "type" => "text/vcard",
            "Reference" => "[RFC6350]"
        ],
        [
            "extension" => "vnd.a",
            "type" => "text/vnd.a",
            "Reference" => "[Regis_Dehoux]"
        ],
        [
            "extension" => "vnd.abc",
            "type" => "text/vnd.abc",
            "Reference" => "[Steve_Allen]"
        ],
        [
            "extension" => "vnd.ascii-art",
            "type" => "text/vnd.ascii-art",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.curl",
            "type" => "text/vnd.curl",
            "Reference" => "[Robert_Byrnes]"
        ],
        [
            "extension" => "vnd.debian.copyright",
            "type" => "text/vnd.debian.copyright",
            "Reference" => "[Charles_Plessy]"
        ],
        [
            "extension" => "vnd.DMClientScript",
            "type" => "text/vnd.DMClientScript",
            "Reference" => "[Dan_Bradley]"
        ],
        [
            "extension" => "vnd.dvb.subtitle",
            "type" => "text/vnd.dvb.subtitle",
            "Reference" => "[Peter_Siebert][Michael_Lagally]"
        ],
        [
            "extension" => "vnd.esmertec.theme-descriptor",
            "type" => "text/vnd.esmertec.theme-descriptor",
            "Reference" => "[Stefan_Eilemann]"
        ],
        [
            "extension" => "vnd.ficlab.flt",
            "type" => "text/vnd.ficlab.flt",
            "Reference" => "[Steve_Gilberd]"
        ],
        [
            "extension" => "vnd.fly",
            "type" => "text/vnd.fly",
            "Reference" => "[John-Mark_Gurney]"
        ],
        [
            "extension" => "vnd.fmi.flexstor",
            "type" => "text/vnd.fmi.flexstor",
            "Reference" => "[Kari_E._Hurtta]"
        ],
        [
            "extension" => "vnd.gml",
            "type" => "text/vnd.gml",
            "Reference" => "[Mi_Tar]"
        ],
        [
            "extension" => "vnd.graphviz",
            "type" => "text/vnd.graphviz",
            "Reference" => "[John_Ellson]"
        ],
        [
            "extension" => "vnd.hans",
            "type" => "text/vnd.hans",
            "Reference" => "[Hill_Hanxv]"
        ],
        [
            "extension" => "vnd.hgl",
            "type" => "text/vnd.hgl",
            "Reference" => "[Heungsub_Lee]"
        ],
        [
            "extension" => "vnd.in3d.3dml",
            "type" => "text/vnd.in3d.3dml",
            "Reference" => "[Michael_Powers]"
        ],
        [
            "extension" => "vnd.in3d.spot",
            "type" => "text/vnd.in3d.spot",
            "Reference" => "[Michael_Powers]"
        ],
        [
            "extension" => "vnd.IPTC.NewsML",
            "type" => "text/vnd.IPTC.NewsML",
            "Reference" => "[IPTC]"
        ],
        [
            "extension" => "vnd.IPTC.NITF",
            "type" => "text/vnd.IPTC.NITF",
            "Reference" => "[IPTC]"
        ],
        [
            "extension" => "vnd.latex-z",
            "type" => "text/vnd.latex-z",
            "Reference" => "[Mikusiak_Lubos]"
        ],
        [
            "extension" => "vnd.motorola.reflex",
            "type" => "text/vnd.motorola.reflex",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.ms-mediapackage",
            "type" => "text/vnd.ms-mediapackage",
            "Reference" => "[Jan_Nelson]"
        ],
        [
            "extension" => "vnd.net2phone.commcenter.command",
            "type" => "text/vnd.net2phone.commcenter.command",
            "Reference" => "[Feiyu_Xie]"
        ],
        [
            "extension" => "vnd.radisys.msml-basic-layout",
            "type" => "text/vnd.radisys.msml-basic-layout",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.senx.warpscript",
            "type" => "text/vnd.senx.warpscript",
            "Reference" => "[Pierre_Papin]"
        ],
        [
            "extension" => "vnd.si.uricatalogue - OBSOLETED by request",
            "type" => "text/vnd.si.uricatalogue",
            "Reference" => "[Nicholas_Parks_Young]"
        ],
        [
            "extension" => "vnd.sun.j2me.app-descriptor",
            "type" => "text/vnd.sun.j2me.app-descriptor",
            "Reference" => "[Gary_Adams]"
        ],
        [
            "extension" => "vnd.sosi",
            "type" => "text/vnd.sosi",
            "Reference" => "[Petter_Reinholdtsen]"
        ],
        [
            "extension" => "vnd.trolltech.linguist",
            "type" => "text/vnd.trolltech.linguist",
            "Reference" => "[David_Lee_Lambert]"
        ],
        [
            "extension" => "vnd.wap.si",
            "type" => "text/vnd.wap.si",
            "Reference" => "[WAP-Forum]"
        ],
        [
            "extension" => "vnd.wap.sl",
            "type" => "text/vnd.wap.sl",
            "Reference" => "[WAP-Forum]"
        ],
        [
            "extension" => "vnd.wap.wml",
            "type" => "text/vnd.wap.wml",
            "Reference" => "[Peter_Stark]"
        ],
        [
            "extension" => "vnd.wap.wmlscript",
            "type" => "text/vnd.wap.wmlscript",
            "Reference" => "[Peter_Stark]"
        ],
        [
            "extension" => "vtt",
            "type" => "text/vtt",
            "Reference" => "[W3C][Silvia_Pfeiffer]"
        ],
        [
            "extension" => "xml",
            "type" => "text/xml",
            "Reference" => "[RFC7303]"
        ],
        [
            "extension" => "xml-external-parsed-entity",
            "type" => "text/xml-external-parsed-entity",
            "Reference" => "[RFC7303]"
        ]
    ];

    /*video mime list in single constant*/
    public const Video = [
        [
            "extension" => "1d-interleaved-parityfec",
            "type" => "video/1d-interleaved-parityfec",
            "Reference" => "[RFC6015]"
        ],
        [
            "extension" => "3gpp",
            "type" => "video/3gpp",
            "Reference" => "[RFC3839][RFC6381]"
        ],
        [
            "extension" => "3gpp2",
            "type" => "video/3gpp2",
            "Reference" => "[RFC4393][RFC6381]"
        ],
        [
            "extension" => "3gpp-tt",
            "type" => "video/3gpp-tt",
            "Reference" => "[RFC4396]"
        ],
        [
            "extension" => "BMPEG",
            "type" => "video/BMPEG",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "BT656",
            "type" => "video/BT656",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "CelB",
            "type" => "video/CelB",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "DV",
            "type" => "video/DV",
            "Reference" => "[RFC6469]"
        ],
        [
            "extension" => "encaprtp",
            "type" => "video/encaprtp",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "example",
            "type" => "video/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "flexfec",
            "type" => "video/flexfec",
            "Reference" => "[RFC8627]"
        ],
        [
            "extension" => "H261",
            "type" => "video/H261",
            "Reference" => "[RFC4587]"
        ],
        [
            "extension" => "H263",
            "type" => "video/H263",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "H263-1998",
            "type" => "video/H263-1998",
            "Reference" => "[RFC4629]"
        ],
        [
            "extension" => "H263-2000",
            "type" => "video/H263-2000",
            "Reference" => "[RFC4629]"
        ],
        [
            "extension" => "H264",
            "type" => "video/H264",
            "Reference" => "[RFC6184]"
        ],
        [
            "extension" => "H264-RCDO",
            "type" => "video/H264-RCDO",
            "Reference" => "[RFC6185]"
        ],
        [
            "extension" => "H264-SVC",
            "type" => "video/H264-SVC",
            "Reference" => "[RFC6190]"
        ],
        [
            "extension" => "H265",
            "type" => "video/H265",
            "Reference" => "[RFC7798]"
        ],
        [
            "extension" => "iso.segment",
            "type" => "video/iso.segment",
            "Reference" => "[David_Singer][ISO-IEC_JTC1]"
        ],
        [
            "extension" => "JPEG",
            "type" => "video/JPEG",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "jpeg2000",
            "type" => "video/jpeg2000",
            "Reference" => "[RFC5371][RFC5372]"
        ],
        [
            "extension" => "mj2",
            "type" => "video/mj2",
            "Reference" => "[RFC3745]"
        ],
        [
            "extension" => "MP1S",
            "type" => "video/MP1S",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "MP2P",
            "type" => "video/MP2P",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "MP2T",
            "type" => "video/MP2T",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "mp4",
            "type" => "video/mp4",
            "Reference" => "[RFC4337][RFC6381]"
        ],
        [
            "extension" => "MP4V-ES",
            "type" => "video/MP4V-ES",
            "Reference" => "[RFC6416]"
        ],
        [
            "extension" => "MPV",
            "type" => "video/MPV",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "mpeg",
            "type" => null,
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "mpeg4-generic",
            "type" => "video/mpeg4-generic",
            "Reference" => "[RFC3640]"
        ],
        [
            "extension" => "nv",
            "type" => "video/nv",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "ogg",
            "type" => "video/ogg",
            "Reference" => "[RFC5334][RFC7845]"
        ],
        [
            "extension" => "parityfec",
            "type" => null,
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "pointer",
            "type" => "video/pointer",
            "Reference" => "[RFC2862]"
        ],
        [
            "extension" => "quicktime",
            "type" => "video/quicktime",
            "Reference" => "[RFC6381][Paul_Lindner]"
        ],
        [
            "extension" => "raptorfec",
            "type" => "video/raptorfec",
            "Reference" => "[RFC6682]"
        ],
        [
            "extension" => "raw",
            "type" => "video/raw",
            "Reference" => "[RFC4175]"
        ],
        [
            "extension" => "rtp-enc-aescm128",
            "type" => "video/rtp-enc-aescm128",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "rtploopback",
            "type" => "video/rtploopback",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "rtx",
            "type" => "video/rtx",
            "Reference" => "[RFC4588]"
        ],
        [
            "extension" => "smpte291",
            "type" => "video/smpte291",
            "Reference" => "[RFC8331]"
        ],
        [
            "extension" => "SMPTE292M",
            "type" => "video/SMPTE292M",
            "Reference" => "[RFC3497]"
        ],
        [
            "extension" => "ulpfec",
            "type" => "video/ulpfec",
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "vc1",
            "type" => "video/vc1",
            "Reference" => "[RFC4425]"
        ],
        [
            "extension" => "vc2",
            "type" => "video/vc2",
            "Reference" => "[RFC8450]"
        ],
        [
            "extension" => "vnd.CCTV",
            "type" => "video/vnd.CCTV",
            "Reference" => "[Frank_Rottmann]"
        ],
        [
            "extension" => "vnd.dece.hd",
            "type" => "video/vnd.dece.hd",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.mobile",
            "type" => "video/vnd.dece.mobile",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.mp4",
            "type" => "video/vnd.dece.mp4",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.pd",
            "type" => "video/vnd.dece.pd",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.sd",
            "type" => "video/vnd.dece.sd",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.video",
            "type" => "video/vnd.dece.video",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.directv.mpeg",
            "type" => "video/vnd.directv.mpeg",
            "Reference" => "[Nathan_Zerbe]"
        ],
        [
            "extension" => "vnd.directv.mpeg-tts",
            "type" => "video/vnd.directv.mpeg-tts",
            "Reference" => "[Nathan_Zerbe]"
        ],
        [
            "extension" => "vnd.dlna.mpeg-tts",
            "type" => "video/vnd.dlna.mpeg-tts",
            "Reference" => "[Edwin_Heredia]"
        ],
        [
            "extension" => "vnd.dvb.file",
            "type" => "video/vnd.dvb.file",
            "Reference" => "[Peter_Siebert][Kevin_Murray]"
        ],
        [
            "extension" => "vnd.fvt",
            "type" => "video/vnd.fvt",
            "Reference" => "[Arild_Fuldseth]"
        ],
        [
            "extension" => "vnd.hns.video",
            "type" => "video/vnd.hns.video",
            "Reference" => "[Swaminathan]"
        ],
        [
            "extension" => "vnd.iptvforum.1dparityfec-1010",
            "type" => "video/vnd.iptvforum.1dparityfec-1010",
            "Reference" => "[Shuji_Nakamura]"
        ],
        [
            "extension" => "vnd.iptvforum.1dparityfec-2005",
            "type" => "video/vnd.iptvforum.1dparityfec-2005",
            "Reference" => "[Shuji_Nakamura]"
        ],
        [
            "extension" => "vnd.iptvforum.2dparityfec-1010",
            "type" => "video/vnd.iptvforum.2dparityfec-1010",
            "Reference" => "[Shuji_Nakamura]"
        ],
        [
            "extension" => "vnd.iptvforum.2dparityfec-2005",
            "type" => "video/vnd.iptvforum.2dparityfec-2005",
            "Reference" => "[Shuji_Nakamura]"
        ],
        [
            "extension" => "vnd.iptvforum.ttsavc",
            "type" => "video/vnd.iptvforum.ttsavc",
            "Reference" => "[Shuji_Nakamura]"
        ],
        [
            "extension" => "vnd.iptvforum.ttsmpeg2",
            "type" => "video/vnd.iptvforum.ttsmpeg2",
            "Reference" => "[Shuji_Nakamura]"
        ],
        [
            "extension" => "vnd.motorola.video",
            "type" => "video/vnd.motorola.video",
            "Reference" => "[Tom_McGinty]"
        ],
        [
            "extension" => "vnd.motorola.videop",
            "type" => "video/vnd.motorola.videop",
            "Reference" => "[Tom_McGinty]"
        ],
        [
            "extension" => "vnd.mpegurl",
            "type" => "video/vnd.mpegurl",
            "Reference" => "[Heiko_Recktenwald]"
        ],
        [
            "extension" => "vnd.ms-playready.media.pyv",
            "type" => "video/vnd.ms-playready.media.pyv",
            "Reference" => "[Steve_DiAcetis]"
        ],
        [
            "extension" => "vnd.nokia.interleaved-multimedia",
            "type" => "video/vnd.nokia.interleaved-multimedia",
            "Reference" => "[Petteri_Kangaslampi]"
        ],
        [
            "extension" => "vnd.nokia.mp4vr",
            "type" => "video/vnd.nokia.mp4vr",
            "Reference" => "[Miska_M._Hannuksela]"
        ],
        [
            "extension" => "vnd.nokia.videovoip",
            "type" => "video/vnd.nokia.videovoip",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.objectvideo",
            "type" => "video/vnd.objectvideo",
            "Reference" => "[John_Clark]"
        ],
        [
            "extension" => "vnd.radgamettools.bink",
            "type" => "video/vnd.radgamettools.bink",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.radgamettools.smacker",
            "type" => "video/vnd.radgamettools.smacker",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.sealed.mpeg1",
            "type" => "video/vnd.sealed.mpeg1",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealed.mpeg4",
            "type" => "video/vnd.sealed.mpeg4",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealed.swf",
            "type" => "video/vnd.sealed.swf",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealedmedia.softseal.mov",
            "type" => "video/vnd.sealedmedia.softseal.mov",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.uvvu.mp4",
            "type" => "video/vnd.uvvu.mp4",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.youtube.yt",
            "type" => "video/vnd.youtube.yt",
            "Reference" => "[Google]"
        ],
        [
            "extension" => "vnd.vivo",
            "type" => "video/vnd.vivo",
            "Reference" => "[John_Wolfe]"
        ],
        [
            "extension" => "VP8",
            "type" => "video/VP8",
            "Reference" => "[RFC7741]"
        ]
    ];

    /*common mime list in single constant*/
    public const Common = [
        [
            "extension" => "aac",
            "document" => "AAC audio",
            "type" => "audio/aac"
        ],
        [
            "extension" => "webmanifest",
            "document" => "Web manifest file",
            "type" => "application/manifest+json"
        ],
        [
            "extension" => "abw",
            "document" => "AbiWord document",
            "type" => "application/x-abiword"
        ],
        [
            "extension" => "arc",
            "document" => "Archive document (multiple files embedded)",
            "type" => "application/x-freearc"
        ],
        [
            "extension" => "avi",
            "document" => "AVI=> Audio Video Interleave",
            "type" => "video/x-msvideo"
        ],
        [
            "extension" => "azw",
            "document" => "Amazon Kindle eBook format",
            "type" => "application/vnd.amazon.ebook"
        ],
        [
            "extension" => "bin",
            "document" => "Any kind of binary data",
            "type" => "application/octet-stream"
        ],
        [
            "extension" => "bmp",
            "document" => "Windows OS/2 Bitmap Graphics",
            "type" => "image/bmp"
        ],
        [
            "extension" => "bz",
            "document" => "BZip archive",
            "type" => "application/x-bzip"
        ],
        [
            "extension" => "bz2",
            "document" => "BZip2 archive",
            "type" => "application/x-bzip2"
        ],
        [
            "extension" => "csh",
            "document" => "C-Shell script",
            "type" => "application/x-csh"
        ],
        [
            "extension" => "css",
            "document" => "Cascading Style Sheets (CSS)",
            "type" => "text/css"
        ],
        [
            "extension" => "csv",
            "document" => "Comma-separated values (CSV)",
            "type" => "text/csv"
        ],
        [
            "extension" => "doc",
            "document" => "Microsoft Word",
            "type" => "application/msword"
        ],
        [
            "extension" => "docx",
            "document" => "Microsoft Word (OpenXML)",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ],
        [
            "extension" => "eot",
            "document" => "MS Embedded OpenType fonts",
            "type" => "application/vnd.ms-fontobject"
        ],
        [
            "extension" => "epub",
            "document" => "Electronic publication (EPUB)",
            "type" => "application/epub+zip"
        ],
        [
            "extension" => "gz",
            "document" => "GZip Compressed Archive",
            "type" => "application/gzip"
        ],
        [
            "extension" => "gif",
            "document" => "Graphics Interchange Format (GIF)",
            "type" => "image/gif"
        ],
        [
            "extension" => "htm",
            "document" => "HyperText Markup Language (HTML)",
            "type" => "text/html"
        ],
        [
            "extension" => "html",
            "document" => "HyperText Markup Language (HTML)",
            "type" => "text/html"
        ],
        [
            "extension" => "ico",
            "document" => "Icon format",
            "type" => "image/vnd.microsoft.icon"
        ],
        [
            "extension" => "ics",
            "document" => "iCalendar format",
            "type" => "text/calendar"
        ],
        [
            "extension" => "jar",
            "document" => "Java Archive (JAR)",
            "type" => "application/java-archive"
        ],
        [
            "extension" => "jpeg",
            "document" => "JPEG images",
            "type" => "image/jpeg"
        ],
        [
            "extension" => "jpg",
            "document" => "JPEG images",
            "type" => "image/jpeg"
        ],
        [
            "extension" => "js",
            "document" => "JavaScript",
            "type" => "text/javascript"
        ],
        [
            "extension" => "json",
            "document" => "JSON format",
            "type" => "application/json"
        ],
        [
            "extension" => "map",
            "type" => "application/json",
            "Reference" => "[RFC8259]"
        ],
        [
            "extension" => "jsonld",
            "document" => "JSON-LD format",
            "type" => "application/ld+json"
        ],
        [
            "extension" => "mid",
            "document" => "Musical Instrument Digital Interface (MIDI)",
            "type" => "audio/midi audio/x-midi"
        ],
        [
            "extension" => "midi",
            "document" => "Musical Instrument Digital Interface (MIDI)",
            "type" => "audio/midi audio/x-midi"
        ],
        [
            "extension" => "mjs",
            "document" => "JavaScript module",
            "type" => "text/javascript"
        ],
        [
            "extension" => "mp3",
            "document" => "MP3 audio",
            "type" => "audio/mpeg"
        ],
        [
            "extension" => "mpeg",
            "document" => "MPEG Video",
            "type" => "video/mpeg"
        ],
        [
            "extension" => "mpkg",
            "document" => "Apple Installer Package",
            "type" => "application/vnd.apple.installer+xml"
        ],
        [
            "extension" => "odp",
            "document" => "OpenDocument presentation document",
            "type" => "application/vnd.oasis.opendocument.presentation"
        ],
        [
            "extension" => "ods",
            "document" => "OpenDocument spreadsheet document",
            "type" => "application/vnd.oasis.opendocument.spreadsheet"
        ],
        [
            "extension" => "odt",
            "document" => "OpenDocument text document",
            "type" => "application/vnd.oasis.opendocument.text"
        ],
        [
            "extension" => "oga",
            "document" => "OGG audio",
            "type" => "audio/ogg"
        ],
        [
            "extension" => "ogv",
            "document" => "OGG video",
            "type" => "video/ogg"
        ],
        [
            "extension" => "ogx",
            "document" => "OGG",
            "type" => "application/ogg"
        ],
        [
            "extension" => "opus",
            "document" => "Opus audio",
            "type" => "audio/opus"
        ],
        [
            "extension" => "otf",
            "document" => "OpenType font",
            "type" => "font/otf"
        ],
        [
            "extension" => "png",
            "document" => "Portable Network Graphics",
            "type" => "image/png"
        ],
        [
            "extension" => "pdf",
            "document" => "Adobe Portable Document Format (PDF)",
            "type" => "application/pdf"
        ],
        [
            "extension" => "php",
            "document" => "Hypertext Preprocessor (Personal Home Page)",
            "type" => "application/x-httpd-php"
        ],
        [
            "extension" => "ppt",
            "document" => "Microsoft PowerPoint",
            "type" => "application/vnd.ms-powerpoint"
        ],
        [
            "extension" => "pptx",
            "document" => "Microsoft PowerPoint (OpenXML)",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.presentation"
        ],
        [
            "extension" => "rar",
            "document" => "RAR archive",
            "type" => "application/vnd.rar"
        ],
        [
            "extension" => "rtf",
            "document" => "Rich Text Format (RTF",
            "type" => "application/rtf"
        ],
        [
            "extension" => "sh",
            "document" => "Bourne shell script",
            "type" => "application/x-sh"
        ],
        [
            "extension" => "svg",
            "document" => "Small web format (SWF) or Adobe Flash document",
            "type" => "application/x-shockwave-flash"
        ],
        [
            "extension" => "tar",
            "document" => "Tape Archive (TAR)",
            "type" => "application/x-tar"
        ],
        [
            "extension" => "tif",
            "document" => "Tagged Image File Format (TIFF)",
            "type" => "image/tiff"
        ],
        [
            "extension" => "tiff",
            "document" => "Tagged Image File Format (TIFF)",
            "type" => "image/tiff"
        ],
        [
            "extension" => "typescripts",
            "document" => "MPEG transport stream",
            "type" => "video/mp2t"
        ],
        [
            "extension" => "ttf",
            "document" => "TrueType Font",
            "type" => "font/ttf"
        ],
        [
            "extension" => "txt",
            "document" => "Text, (generally ASCII or ISO 8859-n)",
            "type" => "text/plain"
        ],
        [
            "extension" => "vsd",
            "document" => "Microsoft Visio",
            "type" => "application/vnd.visio"
        ],
        [
            "extension" => "wav",
            "document" => "Waveform Audio Format",
            "type" => "audio/wav"
        ],
        [
            "extension" => "weba",
            "document" => "WEBM audio",
            "type" => "audio/webm"
        ],
        [
            "extension" => "webm",
            "document" => "WEBM video",
            "type" => "video/webm"
        ],
        [
            "extension" => "webp",
            "document" => "WEBP image",
            "type" => "image/webp"
        ],
        [
            "extension" => "woff",
            "document" => "Web Open Font Format (WOFF)",
            "type" => "font/woff"
        ],
        [
            "extension" => "woff2",
            "document" => "Web Open Font Format (WOFF)",
            "type" => "font/woff2"
        ],
        [
            "extension" => "xhtml",
            "document" => "XHTML",
            "type" => "application/xhtml+xml"
        ],
        [
            "extension" => "xls",
            "document" => "Microsoft Excel",
            "type" => "application/vnd.ms-excel"
        ],
        [
            "extension" => "xlsx",
            "document" => "Microsoft Excel (OpenXML)",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ],
        [
            "extension" => "xml",
            "document" => "XML",
            "type" => "text/xml"
        ],
        [
            "extension" => "xul",
            "document" => "XUL",
            "type" => "application/vnd.mozilla.xul+xml"
        ],
        [
            "extension" => "zip",
            "document" => "ZIP archive",
            "type" => "application/zip"
        ],
        [
            "extension" => "zip",
            "document" => "ZIP archive",
            "type" => "application/zip"
        ],
        [
            "extension" => "3gp",
            "document" => "3GPP audio/video container",
            "type" => "video/3gpp"
        ],
        [
            "extension" => "3g2",
            "document" => "3GPP2 audio/video container",
            "type" => "video/3gpp2"
        ],
        [
            "extension" => "7z",
            "document" => "7-zip archive",
            "type" => "application/x-7z-compressed"
        ]
    ];

    /*all mime list in single constant*/
    public const All = [
        [
            "extension" => "1d-interleaved-parityfec",
            "type" => "application/1d-interleaved-parityfec",
            "Reference" => "[RFC6015]"
        ],
        [
            "extension" => "3gpdash-qoe-report+xml",
            "type" => "application/3gpdash-qoe-report+xml",
            "Reference" => "[_3GPP][Ozgur_Oyman]"
        ],
        [
            "extension" => "3gpp-ims+xml",
            "type" => "application/3gpp-ims+xml",
            "Reference" => "[John_M_Meredith]"
        ],
        [
            "extension" => "A2L",
            "type" => "application/A2L",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "activemessage",
            "type" => "application/activemessage",
            "Reference" => "[Ehud_Shapiro]"
        ],
        [
            "extension" => "activity+json",
            "type" => "application/activity+json",
            "Reference" => "[W3C][Benjamin_Goering]"
        ],
        [
            "extension" => "alto-costmap+json",
            "type" => "application/alto-costmap+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-costmapfilter+json",
            "type" => "application/alto-costmapfilter+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-directory+json",
            "type" => "application/alto-directory+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-endpointprop+json",
            "type" => "application/alto-endpointprop+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-endpointpropparams+json",
            "type" => "application/alto-endpointpropparams+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-endpointcost+json",
            "type" => "application/alto-endpointcost+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-endpointcostparams+json",
            "type" => "application/alto-endpointcostparams+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-error+json",
            "type" => "application/alto-error+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-networkmapfilter+json",
            "type" => "application/alto-networkmapfilter+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-networkmap+json",
            "type" => "application/alto-networkmap+json",
            "Reference" => "[RFC7285]"
        ],
        [
            "extension" => "alto-updatestreamcontrol+json",
            "type" => "application/alto-updatestreamcontrol+json",
            "Reference" => "[RFC-ietf-alto-incr-update-sse-22]"
        ],
        [
            "extension" => "alto-updatestreamparams+json",
            "type" => "application/alto-updatestreamparams+json",
            "Reference" => "[RFC-ietf-alto-incr-update-sse-22]"
        ],
        [
            "extension" => "AML",
            "type" => "application/AML",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "andrew-inset",
            "type" => "application/andrew-inset",
            "Reference" => "[Nathaniel_Borenstein]"
        ],
        [
            "extension" => "applefile",
            "type" => "application/applefile",
            "Reference" => "[Patrik_Faltstrom]"
        ],
        [
            "extension" => "ATF",
            "type" => "application/ATF",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "ATFX",
            "type" => "application/ATFX",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "atom+xml",
            "type" => "application/atom+xml",
            "Reference" => "[RFC4287][RFC5023]"
        ],
        [
            "extension" => "atomcat+xml",
            "type" => "application/atomcat+xml",
            "Reference" => "[RFC5023]"
        ],
        [
            "extension" => "atomdeleted+xml",
            "type" => "application/atomdeleted+xml",
            "Reference" => "[RFC6721]"
        ],
        [
            "extension" => "atomicmail",
            "type" => "application/atomicmail",
            "Reference" => "[Nathaniel_Borenstein]"
        ],
        [
            "extension" => "atomsvc+xml",
            "type" => "application/atomsvc+xml",
            "Reference" => "[RFC5023]"
        ],
        [
            "extension" => "atsc-dwd+xml",
            "type" => "application/atsc-dwd+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "atsc-dynamic-event-message",
            "type" => "application/atsc-dynamic-event-message",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "atsc-held+xml",
            "type" => "application/atsc-held+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "atsc-rdt+json",
            "type" => "application/atsc-rdt+json",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "atsc-rsat+xml",
            "type" => "application/atsc-rsat+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "ATXML",
            "type" => "application/ATXML",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "auth-policy+xml",
            "type" => "application/auth-policy+xml",
            "Reference" => "[RFC4745]"
        ],
        [
            "extension" => "bacnet-xdd+zip",
            "type" => "application/bacnet-xdd+zip",
            "Reference" => "[ASHRAE][Dave_Robin]"
        ],
        [
            "extension" => "batch-SMTP",
            "type" => "application/batch-SMTP",
            "Reference" => "[RFC2442]"
        ],
        [
            "extension" => "beep+xml",
            "type" => "application/beep+xml",
            "Reference" => "[RFC3080]"
        ],
        [
            "extension" => "calendar+json",
            "type" => "application/calendar+json",
            "Reference" => "[RFC7265]"
        ],
        [
            "extension" => "calendar+xml",
            "type" => "application/calendar+xml",
            "Reference" => "[RFC6321]"
        ],
        [
            "extension" => "call-completion",
            "type" => "application/call-completion",
            "Reference" => "[RFC6910]"
        ],
        [
            "extension" => "CALS-1840",
            "type" => "application/CALS-1840",
            "Reference" => "[RFC1895]"
        ],
        [
            "extension" => "captive+json",
            "type" => "application/captive+json",
            "Reference" => "[RFC-ietf-capport-api-08]"
        ],
        [
            "extension" => "cbor",
            "type" => "application/cbor",
            "Reference" => "[RFC7049]"
        ],
        [
            "extension" => "cbor-seq",
            "type" => "application/cbor-seq",
            "Reference" => "[RFC8742]"
        ],
        [
            "extension" => "cccex",
            "type" => "application/cccex",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "ccmp+xml",
            "type" => "application/ccmp+xml",
            "Reference" => "[RFC6503]"
        ],
        [
            "extension" => "ccxml+xml",
            "type" => "application/ccxml+xml",
            "Reference" => "[RFC4267]"
        ],
        [
            "extension" => "CDFX+XML",
            "type" => "application/CDFX+XML",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "cdmi-capability",
            "type" => "application/cdmi-capability",
            "Reference" => "[RFC6208]"
        ],
        [
            "extension" => "cdmi-container",
            "type" => "application/cdmi-container",
            "Reference" => "[RFC6208]"
        ],
        [
            "extension" => "cdmi-domain",
            "type" => "application/cdmi-domain",
            "Reference" => "[RFC6208]"
        ],
        [
            "extension" => "cdmi-object",
            "type" => "application/cdmi-object",
            "Reference" => "[RFC6208]"
        ],
        [
            "extension" => "cdmi-queue",
            "type" => "application/cdmi-queue",
            "Reference" => "[RFC6208]"
        ],
        [
            "extension" => "cdni",
            "type" => "application/cdni",
            "Reference" => "[RFC7736]"
        ],
        [
            "extension" => "CEA",
            "type" => "application/CEA",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "cea-2018+xml",
            "type" => "application/cea-2018+xml",
            "Reference" => "[Gottfried_Zimmermann]"
        ],
        [
            "extension" => "cellml+xml",
            "type" => "application/cellml+xml",
            "Reference" => "[RFC4708]"
        ],
        [
            "extension" => "cfw",
            "type" => "application/cfw",
            "Reference" => "[RFC6230]"
        ],
        [
            "extension" => "clue_info+xml",
            "type" => "application/clue_info+xml",
            "Reference" => "[RFC-ietf-clue-data-model-schema-17]"
        ],
        [
            "extension" => "clue+xml",
            "type" => "application/clue+xml",
            "Reference" => "[RFC-ietf-clue-protocol-19]"
        ],
        [
            "extension" => "cms",
            "type" => "application/cms",
            "Reference" => "[RFC7193]"
        ],
        [
            "extension" => "cnrp+xml",
            "type" => "application/cnrp+xml",
            "Reference" => "[RFC3367]"
        ],
        [
            "extension" => "coap-group+json",
            "type" => "application/coap-group+json",
            "Reference" => "[RFC7390]"
        ],
        [
            "extension" => "coap-payload",
            "type" => "application/coap-payload",
            "Reference" => "[RFC8075]"
        ],
        [
            "extension" => "commonground",
            "type" => "application/commonground",
            "Reference" => "[David_Glazer]"
        ],
        [
            "extension" => "conference-info+xml",
            "type" => "application/conference-info+xml",
            "Reference" => "[RFC4575]"
        ],
        [
            "extension" => "cpl+xml",
            "type" => "application/cpl+xml",
            "Reference" => "[RFC3880]"
        ],
        [
            "extension" => "cose",
            "type" => "application/cose",
            "Reference" => "[RFC8152]"
        ],
        [
            "extension" => "cose-key",
            "type" => "application/cose-key",
            "Reference" => "[RFC8152]"
        ],
        [
            "extension" => "cose-key-set",
            "type" => "application/cose-key-set",
            "Reference" => "[RFC8152]"
        ],
        [
            "extension" => "csrattrs",
            "type" => "application/csrattrs",
            "Reference" => "[RFC7030]"
        ],
        [
            "extension" => "csta+xml",
            "type" => "application/csta+xml",
            "Reference" => "[Ecma_International_Helpdesk]"
        ],
        [
            "extension" => "CSTAdata+xml",
            "type" => "application/CSTAdata+xml",
            "Reference" => "[Ecma_International_Helpdesk]"
        ],
        [
            "extension" => "csvm+json",
            "type" => "application/csvm+json",
            "Reference" => "[W3C][Ivan_Herman]"
        ],
        [
            "extension" => "cwt",
            "type" => "application/cwt",
            "Reference" => "[RFC8392]"
        ],
        [
            "extension" => "cybercash",
            "type" => "application/cybercash",
            "Reference" => "[Donald_E._Eastlake_3rd]"
        ],
        [
            "extension" => "dash+xml",
            "type" => "application/dash+xml",
            "Reference" => "[Thomas_Stockhammer][ISO-IEC_JTC1]"
        ],
        [
            "extension" => "dashdelta",
            "type" => "application/dashdelta",
            "Reference" => "[David_Furbeck]"
        ],
        [
            "extension" => "davmount+xml",
            "type" => "application/davmount+xml",
            "Reference" => "[RFC4709]"
        ],
        [
            "extension" => "dca-rft",
            "type" => "application/dca-rft",
            "Reference" => "[Larry_Campbell]"
        ],
        [
            "extension" => "DCD",
            "type" => "application/DCD",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "dec-dx",
            "type" => "application/dec-dx",
            "Reference" => "[Larry_Campbell]"
        ],
        [
            "extension" => "dialog-info+xml",
            "type" => "application/dialog-info+xml",
            "Reference" => "[RFC4235]"
        ],
        [
            "extension" => "dicom",
            "type" => "application/dicom",
            "Reference" => "[RFC3240]"
        ],
        [
            "extension" => "dicom+json",
            "type" => "application/dicom+json",
            "Reference" => "[DICOM_Standards_Committee][David_Clunie][James_F_Philbin]"
        ],
        [
            "extension" => "dicom+xml",
            "type" => "application/dicom+xml",
            "Reference" => "[DICOM_Standards_Committee][David_Clunie][James_F_Philbin]"
        ],
        [
            "extension" => "DII",
            "type" => "application/DII",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "DIT",
            "type" => "application/DIT",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "dns",
            "type" => "application/dns",
            "Reference" => "[RFC4027]"
        ],
        [
            "extension" => "dns+json",
            "type" => "application/dns+json",
            "Reference" => "[RFC8427]"
        ],
        [
            "extension" => "dns-message",
            "type" => "application/dns-message",
            "Reference" => "[RFC8484]"
        ],
        [
            "extension" => "dots+cbor",
            "type" => "application/dots+cbor",
            "Reference" => "[RFC8782]"
        ],
        [
            "extension" => "dskpp+xml",
            "type" => "application/dskpp+xml",
            "Reference" => "[RFC6063]"
        ],
        [
            "extension" => "dssc+der",
            "type" => "application/dssc+der",
            "Reference" => "[RFC5698]"
        ],
        [
            "extension" => "dssc+xml",
            "type" => "application/dssc+xml",
            "Reference" => "[RFC5698]"
        ],
        [
            "extension" => "dvcs",
            "type" => "application/dvcs",
            "Reference" => "[RFC3029]"
        ],
        [
            "extension" => "ecmascript",
            "type" => "application/ecmascript",
            "Reference" => "[RFC4329]"
        ],
        [
            "extension" => "EDI-consent",
            "type" => "application/EDI-consent",
            "Reference" => "[RFC1767]"
        ],
        [
            "extension" => "EDIFACT",
            "type" => "application/EDIFACT",
            "Reference" => "[RFC1767]"
        ],
        [
            "extension" => "EDI-X12",
            "type" => "application/EDI-X12",
            "Reference" => "[RFC1767]"
        ],
        [
            "extension" => "efi",
            "type" => "application/efi",
            "Reference" => "[UEFI_Forum][Samer_El-Haj-Mahmoud]"
        ],
        [
            "extension" => "EmergencyCallData.cap+xml",
            "type" => "application/EmergencyCallData.cap+xml",
            "Reference" => "[RFC-ietf-ecrit-data-only-ea-22]"
        ],
        [
            "extension" => "EmergencyCallData.Comment+xml",
            "type" => "application/EmergencyCallData.Comment+xml",
            "Reference" => "[RFC7852]"
        ],
        [
            "extension" => "EmergencyCallData.Control+xml",
            "type" => "application/EmergencyCallData.Control+xml",
            "Reference" => "[RFC8147]"
        ],
        [
            "extension" => "EmergencyCallData.DeviceInfo+xml",
            "type" => "application/EmergencyCallData.DeviceInfo+xml",
            "Reference" => "[RFC7852]"
        ],
        [
            "extension" => "EmergencyCallData.eCall.MSD",
            "type" => "application/EmergencyCallData.eCall.MSD",
            "Reference" => "[RFC8147]"
        ],
        [
            "extension" => "EmergencyCallData.ProviderInfo+xml",
            "type" => "application/EmergencyCallData.ProviderInfo+xml",
            "Reference" => "[RFC7852]"
        ],
        [
            "extension" => "EmergencyCallData.ServiceInfo+xml",
            "type" => "application/EmergencyCallData.ServiceInfo+xml",
            "Reference" => "[RFC7852]"
        ],
        [
            "extension" => "EmergencyCallData.SubscriberInfo+xml",
            "type" => "application/EmergencyCallData.SubscriberInfo+xml",
            "Reference" => "[RFC7852]"
        ],
        [
            "extension" => "EmergencyCallData.VEDS+xml",
            "type" => "application/EmergencyCallData.VEDS+xml",
            "Reference" => "[RFC8148]"
        ],
        [
            "extension" => "emma+xml",
            "type" => "application/emma+xml",
            "Reference" => "[W3C][http=>//www.w3.org/TR/2007/CR-emma-20071211/#media-type-registration][ISO-IEC_JTC1]"
        ],
        [
            "extension" => "emotionml+xml",
            "type" => "application/emotionml+xml",
            "Reference" => "[W3C][Kazuyuki_Ashimura]"
        ],
        [
            "extension" => "encaprtp",
            "type" => "application/encaprtp",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "epp+xml",
            "type" => "application/epp+xml",
            "Reference" => "[RFC5730]"
        ],
        [
            "extension" => "epub+zip",
            "type" => "application/epub+zip",
            "Reference" => "[International_Digital_Publishing_Forum][William_McCoy]"
        ],
        [
            "extension" => "eshop",
            "type" => "application/eshop",
            "Reference" => "[Steve_Katz]"
        ],
        [
            "extension" => "example",
            "type" => "application/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "exi",
            "type" => "application/exi",
            "Reference" => "[W3C][http=>//www.w3.org/TR/2009/CR-exi-20091208/#mediaTypeRegistration]"
        ],
        [
            "extension" => "expect-ct-report+json",
            "type" => "application/expect-ct-report+json",
            "Reference" => "[RFC-ietf-httpbis-expect-ct-08]"
        ],
        [
            "extension" => "fastinfoset",
            "type" => "application/fastinfoset",
            "Reference" => "[ITU-T_ASN.1_Rapporteur]"
        ],
        [
            "extension" => "fastsoap",
            "type" => "application/fastsoap",
            "Reference" => "[ITU-T_ASN.1_Rapporteur]"
        ],
        [
            "extension" => "fdt+xml",
            "type" => "application/fdt+xml",
            "Reference" => "[RFC6726]"
        ],
        [
            "extension" => "fhir+json",
            "type" => "application/fhir+json",
            "Reference" => "[HL7][Grahame_Grieve]"
        ],
        [
            "extension" => "fhir+xml",
            "type" => "application/fhir+xml",
            "Reference" => "[HL7][Grahame_Grieve]"
        ],
        [
            "extension" => "fits",
            "type" => "application/fits",
            "Reference" => "[RFC4047]"
        ],
        [
            "extension" => "flexfec",
            "type" => "application/flexfec",
            "Reference" => "[RFC8627]"
        ],
        [
            "extension" => "font-sfnt - DEPRECATED in favor of font/sfnt",
            "type" => "application/font-sfnt",
            "Reference" => "[Levantovsky][ISO-IEC_JTC1][RFC8081]"
        ],
        [
            "extension" => "font-tdpfr",
            "type" => "application/font-tdpfr",
            "Reference" => "[RFC3073]"
        ],
        [
            "extension" => "font-woff - DEPRECATED in favor of font/woff",
            "type" => "application/font-woff",
            "Reference" => "[W3C][RFC8081]"
        ],
        [
            "extension" => "framework-attributes+xml",
            "type" => "application/framework-attributes+xml",
            "Reference" => "[RFC6230]"
        ],
        [
            "extension" => "geo+json",
            "type" => "application/geo+json",
            "Reference" => "[RFC7946]"
        ],
        [
            "extension" => "geo+json-seq",
            "type" => "application/geo+json-seq",
            "Reference" => "[RFC8142]"
        ],
        [
            "extension" => "geopackage+sqlite3",
            "type" => "application/geopackage+sqlite3",
            "Reference" => "[OGC][Scott_Simmons]"
        ],
        [
            "extension" => "geoxacml+xml",
            "type" => "application/geoxacml+xml",
            "Reference" => "[OGC][Scott_Simmons]"
        ],
        [
            "extension" => "gltf-buffer",
            "type" => "application/gltf-buffer",
            "Reference" => "[Khronos][Saurabh_Bhatia]"
        ],
        [
            "extension" => "gml+xml",
            "type" => "application/gml+xml",
            "Reference" => "[OGC][Clemens_Portele]"
        ],
        [
            "extension" => "gzip",
            "type" => "application/gzip",
            "Reference" => "[RFC6713]"
        ],
        [
            "extension" => "H224",
            "type" => "application/H224",
            "Reference" => "[RFC4573]"
        ],
        [
            "extension" => "held+xml",
            "type" => "application/held+xml",
            "Reference" => "[RFC5985]"
        ],
        [
            "extension" => "http",
            "type" => "application/http",
            "Reference" => "[RFC7230]"
        ],
        [
            "extension" => "hyperstudio",
            "type" => "application/hyperstudio",
            "Reference" => "[Michael_Domino]"
        ],
        [
            "extension" => "ibe-key-request+xml",
            "type" => "application/ibe-key-request+xml",
            "Reference" => "[RFC5408]"
        ],
        [
            "extension" => "ibe-pkg-reply+xml",
            "type" => "application/ibe-pkg-reply+xml",
            "Reference" => "[RFC5408]"
        ],
        [
            "extension" => "ibe-pp-data",
            "type" => "application/ibe-pp-data",
            "Reference" => "[RFC5408]"
        ],
        [
            "extension" => "iges",
            "type" => "application/iges",
            "Reference" => "[Curtis_Parks]"
        ],
        [
            "extension" => "im-iscomposing+xml",
            "type" => "application/im-iscomposing+xml",
            "Reference" => "[RFC3994]"
        ],
        [
            "extension" => "index",
            "type" => "application/index",
            "Reference" => "[RFC2652]"
        ],
        [
            "extension" => "index.cmd",
            "type" => "application/index.cmd",
            "Reference" => "[RFC2652]"
        ],
        [
            "extension" => "index.obj",
            "type" => "application/index.obj",
            "Reference" => "[RFC2652]"
        ],
        [
            "extension" => "index.response",
            "type" => "application/index.response",
            "Reference" => "[RFC2652]"
        ],
        [
            "extension" => "index.vnd",
            "type" => "application/index.vnd",
            "Reference" => "[RFC2652]"
        ],
        [
            "extension" => "inkml+xml",
            "type" => "application/inkml+xml",
            "Reference" => "[Kazuyuki_Ashimura]"
        ],
        [
            "extension" => "IOTP",
            "type" => "application/IOTP",
            "Reference" => "[RFC2935]"
        ],
        [
            "extension" => "ipfix",
            "type" => "application/ipfix",
            "Reference" => "[RFC5655]"
        ],
        [
            "extension" => "ipp",
            "type" => "application/ipp",
            "Reference" => "[RFC8010]"
        ],
        [
            "extension" => "ISUP",
            "type" => "application/ISUP",
            "Reference" => "[RFC3204]"
        ],
        [
            "extension" => "its+xml",
            "type" => "application/its+xml",
            "Reference" => "[W3C][ITS-IG-W3C]"
        ],
        [
            "extension" => "javascript",
            "type" => "application/javascript",
            "Reference" => "[RFC4329]"
        ],
        [
            "extension" => "jf2feed+json",
            "type" => "application/jf2feed+json",
            "Reference" => "[W3C][Ivan_Herman]"
        ],
        [
            "extension" => "jose",
            "type" => "application/jose",
            "Reference" => "[RFC7515]"
        ],
        [
            "extension" => "jose+json",
            "type" => "application/jose+json",
            "Reference" => "[RFC7515]"
        ],
        [
            "extension" => "jrd+json",
            "type" => "application/jrd+json",
            "Reference" => "[RFC7033]"
        ],
        [
            "extension" => "map",
            "type" => "application/json",
            "Reference" => "[RFC8259]"
        ],
        [
            "extension" => "json",
            "type" => "application/json",
            "Reference" => "[RFC8259]"
        ],
        [
            "extension" => "json-patch+json",
            "type" => "application/json-patch+json",
            "Reference" => "[RFC6902]"
        ],
        [
            "extension" => "json-seq",
            "type" => "application/json-seq",
            "Reference" => "[RFC7464]"
        ],
        [
            "extension" => "jwk+json",
            "type" => "application/jwk+json",
            "Reference" => "[RFC7517]"
        ],
        [
            "extension" => "jwk-set+json",
            "type" => "application/jwk-set+json",
            "Reference" => "[RFC7517]"
        ],
        [
            "extension" => "jwt",
            "type" => "application/jwt",
            "Reference" => "[RFC7519]"
        ],
        [
            "extension" => "kpml-request+xml",
            "type" => "application/kpml-request+xml",
            "Reference" => "[RFC4730]"
        ],
        [
            "extension" => "kpml-response+xml",
            "type" => "application/kpml-response+xml",
            "Reference" => "[RFC4730]"
        ],
        [
            "extension" => "ld+json",
            "type" => "application/ld+json",
            "Reference" => "[W3C][Ivan_Herman]"
        ],
        [
            "extension" => "lgr+xml",
            "type" => "application/lgr+xml",
            "Reference" => "[RFC7940]"
        ],
        [
            "extension" => "link-format",
            "type" => "application/link-format",
            "Reference" => "[RFC6690]"
        ],
        [
            "extension" => "load-control+xml",
            "type" => "application/load-control+xml",
            "Reference" => "[RFC7200]"
        ],
        [
            "extension" => "lost+xml",
            "type" => "application/lost+xml",
            "Reference" => "[RFC5222]"
        ],
        [
            "extension" => "lostsync+xml",
            "type" => "application/lostsync+xml",
            "Reference" => "[RFC6739]"
        ],
        [
            "extension" => "lpf+zip",
            "type" => "application/lpf+zip",
            "Reference" => "[W3C][Ivan_Herman]"
        ],
        [
            "extension" => "LXF",
            "type" => "application/LXF",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "mac-binhex40",
            "type" => "application/mac-binhex40",
            "Reference" => "[Patrik_Faltstrom]"
        ],
        [
            "extension" => "macwriteii",
            "type" => "application/macwriteii",
            "Reference" => "[Paul_Lindner]"
        ],
        [
            "extension" => "mads+xml",
            "type" => "application/mads+xml",
            "Reference" => "[RFC6207]"
        ],
        [
            "extension" => "marc",
            "type" => "application/marc",
            "Reference" => "[RFC2220]"
        ],
        [
            "extension" => "marcxml+xml",
            "type" => "application/marcxml+xml",
            "Reference" => "[RFC6207]"
        ],
        [
            "extension" => "mathematica",
            "type" => "application/mathematica",
            "Reference" => "[Wolfram]"
        ],
        [
            "extension" => "mathml+xml",
            "type" => "application/mathml+xml",
            "Reference" => "[W3C][http=>//www.w3.org/TR/MathML3/appendixb.html]"
        ],
        [
            "extension" => "mathml-content+xml",
            "type" => "application/mathml-content+xml",
            "Reference" => "[W3C][http=>//www.w3.org/TR/MathML3/appendixb.html]"
        ],
        [
            "extension" => "mathml-presentation+xml",
            "type" => "application/mathml-presentation+xml",
            "Reference" => "[W3C][http=>//www.w3.org/TR/MathML3/appendixb.html]"
        ],
        [
            "extension" => "mbms-associated-procedure-description+xml",
            "type" => "application/mbms-associated-procedure-description+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-deregister+xml",
            "type" => "application/mbms-deregister+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-envelope+xml",
            "type" => "application/mbms-envelope+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-msk-response+xml",
            "type" => "application/mbms-msk-response+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-msk+xml",
            "type" => "application/mbms-msk+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-protection-description+xml",
            "type" => "application/mbms-protection-description+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-reception-report+xml",
            "type" => "application/mbms-reception-report+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-register-response+xml",
            "type" => "application/mbms-register-response+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-register+xml",
            "type" => "application/mbms-register+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbms-schedule+xml",
            "type" => "application/mbms-schedule+xml",
            "Reference" => "[_3GPP][Eric_Turcotte]"
        ],
        [
            "extension" => "mbms-user-service-description+xml",
            "type" => "application/mbms-user-service-description+xml",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "mbox",
            "type" => "application/mbox",
            "Reference" => "[RFC4155]"
        ],
        [
            "extension" => "media_control+xml",
            "type" => "application/media_control+xml",
            "Reference" => "[RFC5168]"
        ],
        [
            "extension" => "media-policy-dataset+xml",
            "type" => "application/media-policy-dataset+xml",
            "Reference" => "[RFC6796]"
        ],
        [
            "extension" => "mediaservercontrol+xml",
            "type" => "application/mediaservercontrol+xml",
            "Reference" => "[RFC5022]"
        ],
        [
            "extension" => "merge-patch+json",
            "type" => "application/merge-patch+json",
            "Reference" => "[RFC7396]"
        ],
        [
            "extension" => "metalink4+xml",
            "type" => "application/metalink4+xml",
            "Reference" => "[RFC5854]"
        ],
        [
            "extension" => "mets+xml",
            "type" => "application/mets+xml",
            "Reference" => "[RFC6207]"
        ],
        [
            "extension" => "MF4",
            "type" => "application/MF4",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "mikey",
            "type" => "application/mikey",
            "Reference" => "[RFC3830]"
        ],
        [
            "extension" => "mipc",
            "type" => "application/mipc",
            "Reference" => "[NCGIS][Bryan_Blank]"
        ],
        [
            "extension" => "mmt-aei+xml",
            "type" => "application/mmt-aei+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "mmt-usd+xml",
            "type" => "application/mmt-usd+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "mods+xml",
            "type" => "application/mods+xml",
            "Reference" => "[RFC6207]"
        ],
        [
            "extension" => "moss-keys",
            "type" => "application/moss-keys",
            "Reference" => "[RFC1848]"
        ],
        [
            "extension" => "moss-signature",
            "type" => "application/moss-signature",
            "Reference" => "[RFC1848]"
        ],
        [
            "extension" => "mosskey-data",
            "type" => "application/mosskey-data",
            "Reference" => "[RFC1848]"
        ],
        [
            "extension" => "mosskey-request",
            "type" => "application/mosskey-request",
            "Reference" => "[RFC1848]"
        ],
        [
            "extension" => "mp21",
            "type" => "application/mp21",
            "Reference" => "[RFC6381][David_Singer]"
        ],
        [
            "extension" => "mp4",
            "type" => "application/mp4",
            "Reference" => "[RFC4337][RFC6381]"
        ],
        [
            "extension" => "mpeg4-generic",
            "type" => "application/mpeg4-generic",
            "Reference" => "[RFC3640]"
        ],
        [
            "extension" => "mpeg4-iod",
            "type" => "application/mpeg4-iod",
            "Reference" => "[RFC4337]"
        ],
        [
            "extension" => "mpeg4-iod-xmt",
            "type" => "application/mpeg4-iod-xmt",
            "Reference" => "[RFC4337]"
        ],
        [
            "extension" => "mrb-consumer+xml",
            "type" => "application/mrb-consumer+xml",
            "Reference" => "[RFC6917]"
        ],
        [
            "extension" => "mrb-publish+xml",
            "type" => "application/mrb-publish+xml",
            "Reference" => "[RFC6917]"
        ],
        [
            "extension" => "msc-ivr+xml",
            "type" => "application/msc-ivr+xml",
            "Reference" => "[RFC6231]"
        ],
        [
            "extension" => "msc-mixer+xml",
            "type" => "application/msc-mixer+xml",
            "Reference" => "[RFC6505]"
        ],
        [
            "extension" => "msword",
            "type" => "application/msword",
            "Reference" => "[Paul_Lindner]"
        ],
        [
            "extension" => "mud+json",
            "type" => "application/mud+json",
            "Reference" => "[RFC8520]"
        ],
        [
            "extension" => "multipart-core",
            "type" => "application/multipart-core",
            "Reference" => "[RFC8710]"
        ],
        [
            "extension" => "mxf",
            "type" => "application/mxf",
            "Reference" => "[RFC4539]"
        ],
        [
            "extension" => "n-quads",
            "type" => "application/n-quads",
            "Reference" => "[W3C][Eric_Prudhommeaux]"
        ],
        [
            "extension" => "n-triples",
            "type" => "application/n-triples",
            "Reference" => "[W3C][Eric_Prudhommeaux]"
        ],
        [
            "extension" => "nasdata",
            "type" => "application/nasdata",
            "Reference" => "[RFC4707]"
        ],
        [
            "extension" => "news-checkgroups",
            "type" => "application/news-checkgroups",
            "Reference" => "[RFC5537]"
        ],
        [
            "extension" => "news-groupinfo",
            "type" => "application/news-groupinfo",
            "Reference" => "[RFC5537]"
        ],
        [
            "extension" => "news-transmission",
            "type" => "application/news-transmission",
            "Reference" => "[RFC5537]"
        ],
        [
            "extension" => "nlsml+xml",
            "type" => "application/nlsml+xml",
            "Reference" => "[RFC6787]"
        ],
        [
            "extension" => "node",
            "type" => "application/node",
            "Reference" => "[Node.js_TSC]"
        ],
        [
            "extension" => "nss",
            "type" => "application/nss",
            "Reference" => "[Michael_Hammer]"
        ],
        [
            "extension" => "ocsp-request",
            "type" => "application/ocsp-request",
            "Reference" => "[RFC6960]"
        ],
        [
            "extension" => "ocsp-response",
            "type" => "application/ocsp-response",
            "Reference" => "[RFC6960]"
        ],
        [
            "extension" => "octet-stream",
            "type" => "application/octet-stream",
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "ODA",
            "type" => "application/ODA",
            "Reference" => "[RFC1494]"
        ],
        [
            "extension" => "odm+xml",
            "type" => "application/odm+xml",
            "Reference" => "[CDISC][Sam_Hume]"
        ],
        [
            "extension" => "ODX",
            "type" => "application/ODX",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "oebps-package+xml",
            "type" => "application/oebps-package+xml",
            "Reference" => "[RFC4839]"
        ],
        [
            "extension" => "ogg",
            "type" => "application/ogg",
            "Reference" => "[RFC5334][RFC7845]"
        ],
        [
            "extension" => "opc-nodeset+xml",
            "type" => "application/opc-nodeset+xml",
            "Reference" => "[OPC_Foundation]"
        ],
        [
            "extension" => "oscore",
            "type" => "application/oscore",
            "Reference" => "[RFC8613]"
        ],
        [
            "extension" => "oxps",
            "type" => "application/oxps",
            "Reference" => "[Ecma_International_Helpdesk]"
        ],
        [
            "extension" => "p2p-overlay+xml",
            "type" => "application/p2p-overlay+xml",
            "Reference" => "[RFC6940]"
        ],
        [
            "extension" => "parityfec",
            "type" => null,
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "passport",
            "type" => "application/passport",
            "Reference" => "[RFC8225]"
        ],
        [
            "extension" => "patch-ops-error+xml",
            "type" => "application/patch-ops-error+xml",
            "Reference" => "[RFC5261]"
        ],
        [
            "extension" => "pdf",
            "type" => "application/pdf",
            "Reference" => "[RFC8118]"
        ],
        [
            "extension" => "PDX",
            "type" => "application/PDX",
            "Reference" => "[ASAM][Thomas_Thomsen]"
        ],
        [
            "extension" => "pem-certificate-chain",
            "type" => "application/pem-certificate-chain",
            "Reference" => "[RFC8555]"
        ],
        [
            "extension" => "pgp-encrypted",
            "type" => "application/pgp-encrypted",
            "Reference" => "[RFC3156]"
        ],
        [
            "extension" => "pgp-keys",
            "type" => "application/pgp-keys",
            "Reference" => "[RFC3156]"
        ],
        [
            "extension" => "pgp-signature",
            "type" => "application/pgp-signature",
            "Reference" => "[RFC3156]"
        ],
        [
            "extension" => "pidf-diff+xml",
            "type" => "application/pidf-diff+xml",
            "Reference" => "[RFC5262]"
        ],
        [
            "extension" => "pidf+xml",
            "type" => "application/pidf+xml",
            "Reference" => "[RFC3863]"
        ],
        [
            "extension" => "pkcs10",
            "type" => "application/pkcs10",
            "Reference" => "[RFC5967]"
        ],
        [
            "extension" => "pkcs7-mime",
            "type" => "application/pkcs7-mime",
            "Reference" => "[RFC8551][RFC7114]"
        ],
        [
            "extension" => "pkcs7-signature",
            "type" => "application/pkcs7-signature",
            "Reference" => "[RFC8551]"
        ],
        [
            "extension" => "pkcs8",
            "type" => "application/pkcs8",
            "Reference" => "[RFC5958]"
        ],
        [
            "extension" => "pkcs8-encrypted",
            "type" => "application/pkcs8-encrypted",
            "Reference" => "[RFC8351]"
        ],
        [
            "extension" => "pkcs12",
            "type" => "application/pkcs12",
            "Reference" => "[IETF]"
        ],
        [
            "extension" => "pkix-attr-cert",
            "type" => "application/pkix-attr-cert",
            "Reference" => "[RFC5877]"
        ],
        [
            "extension" => "pkix-cert",
            "type" => "application/pkix-cert",
            "Reference" => "[RFC2585]"
        ],
        [
            "extension" => "pkix-crl",
            "type" => "application/pkix-crl",
            "Reference" => "[RFC2585]"
        ],
        [
            "extension" => "pkix-pkipath",
            "type" => "application/pkix-pkipath",
            "Reference" => "[RFC6066]"
        ],
        [
            "extension" => "pkixcmp",
            "type" => "application/pkixcmp",
            "Reference" => "[RFC2510]"
        ],
        [
            "extension" => "pls+xml",
            "type" => "application/pls+xml",
            "Reference" => "[RFC4267]"
        ],
        [
            "extension" => "poc-settings+xml",
            "type" => "application/poc-settings+xml",
            "Reference" => "[RFC4354]"
        ],
        [
            "extension" => "postscript",
            "type" => "application/postscript",
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "ppsp-tracker+json",
            "type" => "application/ppsp-tracker+json",
            "Reference" => "[RFC7846]"
        ],
        [
            "extension" => "problem+json",
            "type" => "application/problem+json",
            "Reference" => "[RFC7807]"
        ],
        [
            "extension" => "problem+xml",
            "type" => "application/problem+xml",
            "Reference" => "[RFC7807]"
        ],
        [
            "extension" => "provenance+xml",
            "type" => "application/provenance+xml",
            "Reference" => "[W3C][Ivan_Herman]"
        ],
        [
            "extension" => "prs.alvestrand.titrax-sheet",
            "type" => "application/prs.alvestrand.titrax-sheet",
            "Reference" => "[Harald_T._Alvestrand]"
        ],
        [
            "extension" => "prs.cww",
            "type" => "application/prs.cww",
            "Reference" => "[Khemchart_Rungchavalnont]"
        ],
        [
            "extension" => "prs.hpub+zip",
            "type" => "application/prs.hpub+zip",
            "Reference" => "[Giulio_Zambon]"
        ],
        [
            "extension" => "prs.nprend",
            "type" => "application/prs.nprend",
            "Reference" => "[Jay_Doggett]"
        ],
        [
            "extension" => "prs.plucker",
            "type" => "application/prs.plucker",
            "Reference" => "[Bill_Janssen]"
        ],
        [
            "extension" => "prs.rdf-xml-crypt",
            "type" => "application/prs.rdf-xml-crypt",
            "Reference" => "[Toby_Inkster]"
        ],
        [
            "extension" => "prs.xsf+xml",
            "type" => "application/prs.xsf+xml",
            "Reference" => "[Maik_Stührenberg]"
        ],
        [
            "extension" => "pskc+xml",
            "type" => "application/pskc+xml",
            "Reference" => "[RFC6030]"
        ],
        [
            "extension" => "pvd+json",
            "type" => "application/pvd+json",
            "Reference" => "[RFC8801]"
        ],
        [
            "extension" => "rdf+xml",
            "type" => "application/rdf+xml",
            "Reference" => "[RFC3870]"
        ],
        [
            "extension" => "route-apd+xml",
            "type" => "application/route-apd+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "route-s-tsid+xml",
            "type" => "application/route-s-tsid+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "route-usd+xml",
            "type" => "application/route-usd+xml",
            "Reference" => "[ATSC]"
        ],
        [
            "extension" => "QSIG",
            "type" => "application/QSIG",
            "Reference" => "[RFC3204]"
        ],
        [
            "extension" => "raptorfec",
            "type" => "application/raptorfec",
            "Reference" => "[RFC6682]"
        ],
        [
            "extension" => "rdap+json",
            "type" => "application/rdap+json",
            "Reference" => "[RFC7483]"
        ],
        [
            "extension" => "reginfo+xml",
            "type" => "application/reginfo+xml",
            "Reference" => "[RFC3680]"
        ],
        [
            "extension" => "relax-ng-compact-syntax",
            "type" => "application/relax-ng-compact-syntax",
            "Reference" => "[http=>//www.jtc1sc34.org/repository/0661.pdf]"
        ],
        [
            "extension" => "remote-printing",
            "type" => "application/remote-printing",
            "Reference" => "[RFC1486][Marshall_Rose]"
        ],
        [
            "extension" => "reputon+json",
            "type" => "application/reputon+json",
            "Reference" => "[RFC7071]"
        ],
        [
            "extension" => "resource-lists-diff+xml",
            "type" => "application/resource-lists-diff+xml",
            "Reference" => "[RFC5362]"
        ],
        [
            "extension" => "resource-lists+xml",
            "type" => "application/resource-lists+xml",
            "Reference" => "[RFC4826]"
        ],
        [
            "extension" => "rfc+xml",
            "type" => "application/rfc+xml",
            "Reference" => "[RFC7991]"
        ],
        [
            "extension" => "riscos",
            "type" => "application/riscos",
            "Reference" => "[Nick_Smith]"
        ],
        [
            "extension" => "rlmi+xml",
            "type" => "application/rlmi+xml",
            "Reference" => "[RFC4662]"
        ],
        [
            "extension" => "rls-services+xml",
            "type" => "application/rls-services+xml",
            "Reference" => "[RFC4826]"
        ],
        [
            "extension" => "rpki-ghostbusters",
            "type" => "application/rpki-ghostbusters",
            "Reference" => "[RFC6493]"
        ],
        [
            "extension" => "rpki-manifest",
            "type" => "application/rpki-manifest",
            "Reference" => "[RFC6481]"
        ],
        [
            "extension" => "rpki-publication",
            "type" => "application/rpki-publication",
            "Reference" => "[RFC8181]"
        ],
        [
            "extension" => "rpki-roa",
            "type" => "application/rpki-roa",
            "Reference" => "[RFC6481]"
        ],
        [
            "extension" => "rpki-updown",
            "type" => "application/rpki-updown",
            "Reference" => "[RFC6492]"
        ],
        [
            "extension" => "rtf",
            "type" => "application/rtf",
            "Reference" => "[Paul_Lindner]"
        ],
        [
            "extension" => "rtploopback",
            "type" => "application/rtploopback",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "rtx",
            "type" => "application/rtx",
            "Reference" => "[RFC4588]"
        ],
        [
            "extension" => "samlassertion+xml",
            "type" => "application/samlassertion+xml",
            "Reference" => "[OASIS_Security_Services_Technical_Committee_SSTC]"
        ],
        [
            "extension" => "samlmetadata+xml",
            "type" => "application/samlmetadata+xml",
            "Reference" => "[OASIS_Security_Services_Technical_Committee_SSTC]"
        ],
        [
            "extension" => "sarif+json",
            "type" => "application/sarif+json",
            "Reference" => "[OASIS][Michael_C._Fanning][Laurence_J._Golding]"
        ],
        [
            "extension" => "sbe",
            "type" => "application/sbe",
            "Reference" => "[FIX_Trading_Community][Donald_L._Mendelson]"
        ],
        [
            "extension" => "sbml+xml",
            "type" => "application/sbml+xml",
            "Reference" => "[RFC3823]"
        ],
        [
            "extension" => "scaip+xml",
            "type" => "application/scaip+xml",
            "Reference" => "[SIS][Oskar_Jonsson]"
        ],
        [
            "extension" => "scim+json",
            "type" => "application/scim+json",
            "Reference" => "[RFC7644]"
        ],
        [
            "extension" => "scvp-cv-request",
            "type" => "application/scvp-cv-request",
            "Reference" => "[RFC5055]"
        ],
        [
            "extension" => "scvp-cv-response",
            "type" => "application/scvp-cv-response",
            "Reference" => "[RFC5055]"
        ],
        [
            "extension" => "scvp-vp-request",
            "type" => "application/scvp-vp-request",
            "Reference" => "[RFC5055]"
        ],
        [
            "extension" => "scvp-vp-response",
            "type" => "application/scvp-vp-response",
            "Reference" => "[RFC5055]"
        ],
        [
            "extension" => "sdp",
            "type" => "application/sdp",
            "Reference" => "[RFC-ietf-mmusic-rfc4566bis-37]"
        ],
        [
            "extension" => "secevent+jwt",
            "type" => "application/secevent+jwt",
            "Reference" => "[RFC8417]"
        ],
        [
            "extension" => "senml-etch+cbor",
            "type" => "application/senml-etch+cbor",
            "Reference" => "[RFC8790]"
        ],
        [
            "extension" => "senml-etch+json",
            "type" => "application/senml-etch+json",
            "Reference" => "[RFC8790]"
        ],
        [
            "extension" => "senml-exi",
            "type" => "application/senml-exi",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "senml+cbor",
            "type" => "application/senml+cbor",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "senml+json",
            "type" => "application/senml+json",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "senml+xml",
            "type" => "application/senml+xml",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "sensml-exi",
            "type" => "application/sensml-exi",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "sensml+cbor",
            "type" => "application/sensml+cbor",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "sensml+json",
            "type" => "application/sensml+json",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "sensml+xml",
            "type" => "application/sensml+xml",
            "Reference" => "[RFC8428]"
        ],
        [
            "extension" => "sep-exi",
            "type" => "application/sep-exi",
            "Reference" => "[Robby_Simpson][ZigBee]"
        ],
        [
            "extension" => "sep+xml",
            "type" => "application/sep+xml",
            "Reference" => "[Robby_Simpson][ZigBee]"
        ],
        [
            "extension" => "session-info",
            "type" => "application/session-info",
            "Reference" => "[_3GPP][Frederic_Firmin]"
        ],
        [
            "extension" => "set-payment",
            "type" => "application/set-payment",
            "Reference" => "[Brian_Korver]"
        ],
        [
            "extension" => "set-payment-initiation",
            "type" => "application/set-payment-initiation",
            "Reference" => "[Brian_Korver]"
        ],
        [
            "extension" => "set-registration",
            "type" => "application/set-registration",
            "Reference" => "[Brian_Korver]"
        ],
        [
            "extension" => "set-registration-initiation",
            "type" => "application/set-registration-initiation",
            "Reference" => "[Brian_Korver]"
        ],
        [
            "extension" => "SGML",
            "type" => "application/SGML",
            "Reference" => "[RFC1874]"
        ],
        [
            "extension" => "sgml-open-catalog",
            "type" => "application/sgml-open-catalog",
            "Reference" => "[Paul_Grosso]"
        ],
        [
            "extension" => "shf+xml",
            "type" => "application/shf+xml",
            "Reference" => "[RFC4194]"
        ],
        [
            "extension" => "sieve",
            "type" => "application/sieve",
            "Reference" => "[RFC5228]"
        ],
        [
            "extension" => "simple-filter+xml",
            "type" => "application/simple-filter+xml",
            "Reference" => "[RFC4661]"
        ],
        [
            "extension" => "simple-message-summary",
            "type" => "application/simple-message-summary",
            "Reference" => "[RFC3842]"
        ],
        [
            "extension" => "simpleSymbolContainer",
            "type" => "application/simpleSymbolContainer",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "sipc",
            "type" => "application/sipc",
            "Reference" => "[NCGIS][Bryan_Blank]"
        ],
        [
            "extension" => "slate",
            "type" => "application/slate",
            "Reference" => "[Terry_Crowley]"
        ],
        [
            "extension" => "smil - OBSOLETED in favor of application/smil+xml",
            "type" => "application/smil",
            "Reference" => "[RFC4536]"
        ],
        [
            "extension" => "smil+xml",
            "type" => "application/smil+xml",
            "Reference" => "[RFC4536]"
        ],
        [
            "extension" => "smpte336m",
            "type" => "application/smpte336m",
            "Reference" => "[RFC6597]"
        ],
        [
            "extension" => "soap+fastinfoset",
            "type" => "application/soap+fastinfoset",
            "Reference" => "[ITU-T_ASN.1_Rapporteur]"
        ],
        [
            "extension" => "soap+xml",
            "type" => "application/soap+xml",
            "Reference" => "[RFC3902]"
        ],
        [
            "extension" => "sparql-query",
            "type" => "application/sparql-query",
            "Reference" => "[W3C][http=>//www.w3.org/TR/2007/CR-rdf-sparql-query-20070614/#mediaType]"
        ],
        [
            "extension" => "sparql-results+xml",
            "type" => "application/sparql-results+xml",
            "Reference" => "[W3C][http=>//www.w3.org/TR/2007/CR-rdf-sparql-XMLres-20070925/#mime]"
        ],
        [
            "extension" => "spirits-event+xml",
            "type" => "application/spirits-event+xml",
            "Reference" => "[RFC3910]"
        ],
        [
            "extension" => "sql",
            "type" => "application/sql",
            "Reference" => "[RFC6922]"
        ],
        [
            "extension" => "srgs",
            "type" => "application/srgs",
            "Reference" => "[RFC4267]"
        ],
        [
            "extension" => "srgs+xml",
            "type" => "application/srgs+xml",
            "Reference" => "[RFC4267]"
        ],
        [
            "extension" => "sru+xml",
            "type" => "application/sru+xml",
            "Reference" => "[RFC6207]"
        ],
        [
            "extension" => "ssml+xml",
            "type" => "application/ssml+xml",
            "Reference" => "[RFC4267]"
        ],
        [
            "extension" => "stix+json",
            "type" => "application/stix+json",
            "Reference" => "[OASIS][Chet_Ensign]"
        ],
        [
            "extension" => "swid+xml",
            "type" => "application/swid+xml",
            "Reference" => "[ISO-IEC_JTC1][David_Waltermire][Ron_Brill]"
        ],
        [
            "extension" => "tamp-apex-update",
            "type" => "application/tamp-apex-update",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-apex-update-confirm",
            "type" => "application/tamp-apex-update-confirm",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-community-update",
            "type" => "application/tamp-community-update",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-community-update-confirm",
            "type" => "application/tamp-community-update-confirm",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-error",
            "type" => "application/tamp-error",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-sequence-adjust",
            "type" => "application/tamp-sequence-adjust",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-sequence-adjust-confirm",
            "type" => "application/tamp-sequence-adjust-confirm",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-status-query",
            "type" => "application/tamp-status-query",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-status-response",
            "type" => "application/tamp-status-response",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-update",
            "type" => "application/tamp-update",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "tamp-update-confirm",
            "type" => "application/tamp-update-confirm",
            "Reference" => "[RFC5934]"
        ],
        [
            "extension" => "taxii+json",
            "type" => "application/taxii+json",
            "Reference" => "[OASIS][Chet_Ensign]"
        ],
        [
            "extension" => "td+json",
            "type" => "application/td+json",
            "Reference" => "[W3C][Matthias_Kovatsch]"
        ],
        [
            "extension" => "tei+xml",
            "type" => "application/tei+xml",
            "Reference" => "[RFC6129]"
        ],
        [
            "extension" => "TETRA_ISI",
            "type" => "application/TETRA_ISI",
            "Reference" => "[ETSI][Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "thraud+xml",
            "type" => "application/thraud+xml",
            "Reference" => "[RFC5941]"
        ],
        [
            "extension" => "timestamp-query",
            "type" => "application/timestamp-query",
            "Reference" => "[RFC3161]"
        ],
        [
            "extension" => "timestamp-reply",
            "type" => "application/timestamp-reply",
            "Reference" => "[RFC3161]"
        ],
        [
            "extension" => "timestamped-data",
            "type" => "application/timestamped-data",
            "Reference" => "[RFC5955]"
        ],
        [
            "extension" => "tlsrpt+gzip",
            "type" => "application/tlsrpt+gzip",
            "Reference" => "[RFC8460]"
        ],
        [
            "extension" => "tlsrpt+json",
            "type" => "application/tlsrpt+json",
            "Reference" => "[RFC8460]"
        ],
        [
            "extension" => "tnauthlist",
            "type" => "application/tnauthlist",
            "Reference" => "[RFC8226]"
        ],
        [
            "extension" => "trickle-ice-sdpfrag",
            "type" => "application/trickle-ice-sdpfrag",
            "Reference" => "[RFC-ietf-mmusic-trickle-ice-sip-18]"
        ],
        [
            "extension" => "trig",
            "type" => "application/trig",
            "Reference" => "[W3C][W3C_RDF_Working_Group]"
        ],
        [
            "extension" => "ttml+xml",
            "type" => "application/ttml+xml",
            "Reference" => "[W3C][W3C_Timed_Text_Working_Group]"
        ],
        [
            "extension" => "tve-trigger",
            "type" => "application/tve-trigger",
            "Reference" => "[Linda_Welsh]"
        ],
        [
            "extension" => "tzif",
            "type" => "application/tzif",
            "Reference" => "[RFC8536]"
        ],
        [
            "extension" => "tzif-leap",
            "type" => "application/tzif-leap",
            "Reference" => "[RFC8536]"
        ],
        [
            "extension" => "ulpfec",
            "type" => "application/ulpfec",
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "urc-grpsheet+xml",
            "type" => "application/urc-grpsheet+xml",
            "Reference" => "[Gottfried_Zimmermann][ISO-IEC_JTC1]"
        ],
        [
            "extension" => "urc-ressheet+xml",
            "type" => "application/urc-ressheet+xml",
            "Reference" => "[Gottfried_Zimmermann][ISO-IEC_JTC1]"
        ],
        [
            "extension" => "urc-targetdesc+xml",
            "type" => "application/urc-targetdesc+xml",
            "Reference" => "[Gottfried_Zimmermann][ISO-IEC_JTC1]"
        ],
        [
            "extension" => "urc-uisocketdesc+xml",
            "type" => "application/urc-uisocketdesc+xml",
            "Reference" => "[Gottfried_Zimmermann]"
        ],
        [
            "extension" => "vcard+json",
            "type" => "application/vcard+json",
            "Reference" => "[RFC7095]"
        ],
        [
            "extension" => "vcard+xml",
            "type" => "application/vcard+xml",
            "Reference" => "[RFC6351]"
        ],
        [
            "extension" => "vemmi",
            "type" => "application/vemmi",
            "Reference" => "[RFC2122]"
        ],
        [
            "extension" => "vnd.1000minds.decision-model+xml",
            "type" => "application/vnd.1000minds.decision-model+xml",
            "Reference" => "[Franz_Ombler]"
        ],
        [
            "extension" => "vnd.3gpp.access-transfer-events+xml",
            "type" => "application/vnd.3gpp.access-transfer-events+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.bsf+xml",
            "type" => "application/vnd.3gpp.bsf+xml",
            "Reference" => "[John_M_Meredith]"
        ],
        [
            "extension" => "vnd.3gpp.GMOP+xml",
            "type" => "application/vnd.3gpp.GMOP+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mc-signalling-ear",
            "type" => "application/vnd.3gpp.mc-signalling-ear",
            "Reference" => "[Tim_Woodward]"
        ],
        [
            "extension" => "vnd.3gpp.mcdata-affiliation-command+xml",
            "type" => "application/vnd.3gpp.mcdata-affiliation-command+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcdata-info+xml",
            "type" => "application/vnd.3gpp.mcdata-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcdata-payload",
            "type" => "application/vnd.3gpp.mcdata-payload",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcdata-service-config+xml",
            "type" => "application/vnd.3gpp.mcdata-service-config+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcdata-signalling",
            "type" => "application/vnd.3gpp.mcdata-signalling",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcdata-ue-config+xml",
            "type" => "application/vnd.3gpp.mcdata-ue-config+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcdata-user-profile+xml",
            "type" => "application/vnd.3gpp.mcdata-user-profile+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-affiliation-command+xml",
            "type" => "application/vnd.3gpp.mcptt-affiliation-command+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-floor-request+xml",
            "type" => "application/vnd.3gpp.mcptt-floor-request+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-info+xml",
            "type" => "application/vnd.3gpp.mcptt-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-location-info+xml",
            "type" => "application/vnd.3gpp.mcptt-location-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-mbms-usage-info+xml",
            "type" => "application/vnd.3gpp.mcptt-mbms-usage-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-service-config+xml",
            "type" => "application/vnd.3gpp.mcptt-service-config+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-signed+xml",
            "type" => "application/vnd.3gpp.mcptt-signed+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-ue-config+xml",
            "type" => "application/vnd.3gpp.mcptt-ue-config+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-ue-init-config+xml",
            "type" => "application/vnd.3gpp.mcptt-ue-init-config+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcptt-user-profile+xml",
            "type" => "application/vnd.3gpp.mcptt-user-profile+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-affiliation-command+xml",
            "type" => "application/vnd.3gpp.mcvideo-affiliation-command+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-affiliation-info+xml - OBSOLETED in favor of application/vnd.3gpp.mcvideo-info+xml",
            "type" => "application/vnd.3gpp.mcvideo-affiliation-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-info+xml",
            "type" => "application/vnd.3gpp.mcvideo-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-location-info+xml",
            "type" => "application/vnd.3gpp.mcvideo-location-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-mbms-usage-info+xml",
            "type" => "application/vnd.3gpp.mcvideo-mbms-usage-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-service-config+xml",
            "type" => "application/vnd.3gpp.mcvideo-service-config+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-transmission-request+xml",
            "type" => "application/vnd.3gpp.mcvideo-transmission-request+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-ue-config+xml",
            "type" => "application/vnd.3gpp.mcvideo-ue-config+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mcvideo-user-profile+xml",
            "type" => "application/vnd.3gpp.mcvideo-user-profile+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.mid-call+xml",
            "type" => "application/vnd.3gpp.mid-call+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.pic-bw-large",
            "type" => "application/vnd.3gpp.pic-bw-large",
            "Reference" => "[John_M_Meredith]"
        ],
        [
            "extension" => "vnd.3gpp.pic-bw-small",
            "type" => "application/vnd.3gpp.pic-bw-small",
            "Reference" => "[John_M_Meredith]"
        ],
        [
            "extension" => "vnd.3gpp.pic-bw-var",
            "type" => "application/vnd.3gpp.pic-bw-var",
            "Reference" => "[John_M_Meredith]"
        ],
        [
            "extension" => "vnd.3gpp-prose-pc3ch+xml",
            "type" => "application/vnd.3gpp-prose-pc3ch+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp-prose+xml",
            "type" => "application/vnd.3gpp-prose+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.sms",
            "type" => "application/vnd.3gpp.sms",
            "Reference" => "[John_M_Meredith]"
        ],
        [
            "extension" => "vnd.3gpp.sms+xml",
            "type" => "application/vnd.3gpp.sms+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.srvcc-ext+xml",
            "type" => "application/vnd.3gpp.srvcc-ext+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.SRVCC-info+xml",
            "type" => "application/vnd.3gpp.SRVCC-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.state-and-event-info+xml",
            "type" => "application/vnd.3gpp.state-and-event-info+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp.ussd+xml",
            "type" => "application/vnd.3gpp.ussd+xml",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp-v2x-local-service-information",
            "type" => "application/vnd.3gpp-v2x-local-service-information",
            "Reference" => "[Frederic_Firmin]"
        ],
        [
            "extension" => "vnd.3gpp2.bcmcsinfo+xml",
            "type" => "application/vnd.3gpp2.bcmcsinfo+xml",
            "Reference" => "[Andy_Dryden]"
        ],
        [
            "extension" => "vnd.3gpp2.sms",
            "type" => "application/vnd.3gpp2.sms",
            "Reference" => "[AC_Mahendran]"
        ],
        [
            "extension" => "vnd.3gpp2.tcap",
            "type" => "application/vnd.3gpp2.tcap",
            "Reference" => "[AC_Mahendran]"
        ],
        [
            "extension" => "vnd.3lightssoftware.imagescal",
            "type" => "application/vnd.3lightssoftware.imagescal",
            "Reference" => "[Gus_Asadi]"
        ],
        [
            "extension" => "vnd.3M.Post-it-Notes",
            "type" => "application/vnd.3M.Post-it-Notes",
            "Reference" => "[Michael_OBrien]"
        ],
        [
            "extension" => "vnd.accpac.simply.aso",
            "type" => "application/vnd.accpac.simply.aso",
            "Reference" => "[Steve_Leow]"
        ],
        [
            "extension" => "vnd.accpac.simply.imp",
            "type" => "application/vnd.accpac.simply.imp",
            "Reference" => "[Steve_Leow]"
        ],
        [
            "extension" => "vnd.acucobol",
            "type" => "application/vnd.acucobol",
            "Reference" => "[Dovid_Lubin]"
        ],
        [
            "extension" => "vnd.acucorp",
            "type" => "application/vnd.acucorp",
            "Reference" => "[Dovid_Lubin]"
        ],
        [
            "extension" => "vnd.adobe.flash.movie",
            "type" => "application/vnd.adobe.flash.movie",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.adobe.formscentral.fcdt",
            "type" => "application/vnd.adobe.formscentral.fcdt",
            "Reference" => "[Chris_Solc]"
        ],
        [
            "extension" => "vnd.adobe.fxp",
            "type" => "application/vnd.adobe.fxp",
            "Reference" => "[Robert_Brambley][Steven_Heintz]"
        ],
        [
            "extension" => "vnd.adobe.partial-upload",
            "type" => "application/vnd.adobe.partial-upload",
            "Reference" => "[Tapani_Otala]"
        ],
        [
            "extension" => "vnd.adobe.xdp+xml",
            "type" => "application/vnd.adobe.xdp+xml",
            "Reference" => "[John_Brinkman]"
        ],
        [
            "extension" => "vnd.adobe.xfdf",
            "type" => "application/vnd.adobe.xfdf",
            "Reference" => "[Roberto_Perelman]"
        ],
        [
            "extension" => "vnd.aether.imp",
            "type" => "application/vnd.aether.imp",
            "Reference" => "[Jay_Moskowitz]"
        ],
        [
            "extension" => "vnd.afpc.afplinedata",
            "type" => "application/vnd.afpc.afplinedata",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.afplinedata-pagedef",
            "type" => "application/vnd.afpc.afplinedata-pagedef",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.foca-charset",
            "type" => "application/vnd.afpc.foca-charset",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.foca-codedfont",
            "type" => "application/vnd.afpc.foca-codedfont",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.foca-codepage",
            "type" => "application/vnd.afpc.foca-codepage",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.modca",
            "type" => "application/vnd.afpc.modca",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.modca-formdef",
            "type" => "application/vnd.afpc.modca-formdef",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.modca-mediummap",
            "type" => "application/vnd.afpc.modca-mediummap",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.modca-objectcontainer",
            "type" => "application/vnd.afpc.modca-objectcontainer",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.modca-overlay",
            "type" => "application/vnd.afpc.modca-overlay",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.afpc.modca-pagesegment",
            "type" => "application/vnd.afpc.modca-pagesegment",
            "Reference" => "[Jörg_Palmer]"
        ],
        [
            "extension" => "vnd.ah-barcode",
            "type" => "application/vnd.ah-barcode",
            "Reference" => "[Katsuhiko_Ichinose]"
        ],
        [
            "extension" => "vnd.ahead.space",
            "type" => "application/vnd.ahead.space",
            "Reference" => "[Tor_Kristensen]"
        ],
        [
            "extension" => "vnd.airzip.filesecure.azf",
            "type" => "application/vnd.airzip.filesecure.azf",
            "Reference" => "[Daniel_Mould][Gary_Clueit]"
        ],
        [
            "extension" => "vnd.airzip.filesecure.azs",
            "type" => "application/vnd.airzip.filesecure.azs",
            "Reference" => "[Daniel_Mould][Gary_Clueit]"
        ],
        [
            "extension" => "vnd.amadeus+json",
            "type" => "application/vnd.amadeus+json",
            "Reference" => "[Patrick_Brosse]"
        ],
        [
            "extension" => "vnd.amazon.mobi8-ebook",
            "type" => "application/vnd.amazon.mobi8-ebook",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.americandynamics.acc",
            "type" => "application/vnd.americandynamics.acc",
            "Reference" => "[Gary_Sands]"
        ],
        [
            "extension" => "vnd.amiga.ami",
            "type" => "application/vnd.amiga.ami",
            "Reference" => "[Kevin_Blumberg]"
        ],
        [
            "extension" => "vnd.amundsen.maze+xml",
            "type" => "application/vnd.amundsen.maze+xml",
            "Reference" => "[Mike_Amundsen]"
        ],
        [
            "extension" => "vnd.android.ota",
            "type" => "application/vnd.android.ota",
            "Reference" => "[Greg_Kaiser]"
        ],
        [
            "extension" => "vnd.anki",
            "type" => "application/vnd.anki",
            "Reference" => "[Kerrick_Staley]"
        ],
        [
            "extension" => "vnd.anser-web-certificate-issue-initiation",
            "type" => "application/vnd.anser-web-certificate-issue-initiation",
            "Reference" => "[Hiroyoshi_Mori]"
        ],
        [
            "extension" => "vnd.antix.game-component",
            "type" => "application/vnd.antix.game-component",
            "Reference" => "[Daniel_Shelton]"
        ],
        [
            "extension" => "vnd.apache.thrift.binary",
            "type" => "application/vnd.apache.thrift.binary",
            "Reference" => "[Roger_Meier]"
        ],
        [
            "extension" => "vnd.apache.thrift.compact",
            "type" => "application/vnd.apache.thrift.compact",
            "Reference" => "[Roger_Meier]"
        ],
        [
            "extension" => "vnd.apache.thrift.json",
            "type" => "application/vnd.apache.thrift.json",
            "Reference" => "[Roger_Meier]"
        ],
        [
            "extension" => "vnd.api+json",
            "type" => "application/vnd.api+json",
            "Reference" => "[Steve_Klabnik]"
        ],
        [
            "extension" => "vnd.aplextor.warrp+json",
            "type" => "application/vnd.aplextor.warrp+json",
            "Reference" => "[Oleg_Uryutin]"
        ],
        [
            "extension" => "vnd.apothekende.reservation+json",
            "type" => "application/vnd.apothekende.reservation+json",
            "Reference" => "[Adrian_Föder]"
        ],
        [
            "extension" => "vnd.apple.installer+xml",
            "type" => "application/vnd.apple.installer+xml",
            "Reference" => "[Peter_Bierman]"
        ],
        [
            "extension" => "vnd.apple.keynote",
            "type" => "application/vnd.apple.keynote",
            "Reference" => "[Manichandra_Sajjanapu]"
        ],
        [
            "extension" => "vnd.apple.mpegurl",
            "type" => "application/vnd.apple.mpegurl",
            "Reference" => "[RFC8216]"
        ],
        [
            "extension" => "vnd.apple.numbers",
            "type" => "application/vnd.apple.numbers",
            "Reference" => "[Manichandra_Sajjanapu]"
        ],
        [
            "extension" => "vnd.apple.pages",
            "type" => "application/vnd.apple.pages",
            "Reference" => "[Manichandra_Sajjanapu]"
        ],
        [
            "extension" => "vnd.arastra.swi - OBSOLETED in favor of application/vnd.aristanetworks.swi",
            "type" => "application/vnd.arastra.swi",
            "Reference" => "[Bill_Fenner]"
        ],
        [
            "extension" => "vnd.aristanetworks.swi",
            "type" => "application/vnd.aristanetworks.swi",
            "Reference" => "[Bill_Fenner]"
        ],
        [
            "extension" => "vnd.artisan+json",
            "type" => "application/vnd.artisan+json",
            "Reference" => "[Brad_Turner]"
        ],
        [
            "extension" => "vnd.artsquare",
            "type" => "application/vnd.artsquare",
            "Reference" => "[Christopher_Smith]"
        ],
        [
            "extension" => "vnd.astraea-software.iota",
            "type" => "application/vnd.astraea-software.iota",
            "Reference" => "[Christopher_Snazell]"
        ],
        [
            "extension" => "vnd.audiograph",
            "type" => "application/vnd.audiograph",
            "Reference" => "[Horia_Cristian_Slusanschi]"
        ],
        [
            "extension" => "vnd.autopackage",
            "type" => "application/vnd.autopackage",
            "Reference" => "[Mike_Hearn]"
        ],
        [
            "extension" => "vnd.avalon+json",
            "type" => "application/vnd.avalon+json",
            "Reference" => "[Ben_Hinman]"
        ],
        [
            "extension" => "vnd.avistar+xml",
            "type" => "application/vnd.avistar+xml",
            "Reference" => "[Vladimir_Vysotsky]"
        ],
        [
            "extension" => "vnd.balsamiq.bmml+xml",
            "type" => "application/vnd.balsamiq.bmml+xml",
            "Reference" => "[Giacomo_Guilizzoni]"
        ],
        [
            "extension" => "vnd.banana-accounting",
            "type" => "application/vnd.banana-accounting",
            "Reference" => "[José_Del_Romano]"
        ],
        [
            "extension" => "vnd.bbf.usp.error",
            "type" => "application/vnd.bbf.usp.error",
            "Reference" => "[Broadband_Forum]"
        ],
        [
            "extension" => "vnd.bbf.usp.msg",
            "type" => "application/vnd.bbf.usp.msg",
            "Reference" => "[Broadband_Forum]"
        ],
        [
            "extension" => "vnd.bbf.usp.msg+json",
            "type" => "application/vnd.bbf.usp.msg+json",
            "Reference" => "[Broadband_Forum]"
        ],
        [
            "extension" => "vnd.balsamiq.bmpr",
            "type" => "application/vnd.balsamiq.bmpr",
            "Reference" => "[Giacomo_Guilizzoni]"
        ],
        [
            "extension" => "vnd.bekitzur-stech+json",
            "type" => "application/vnd.bekitzur-stech+json",
            "Reference" => "[Jegulsky]"
        ],
        [
            "extension" => "vnd.bint.med-content",
            "type" => "application/vnd.bint.med-content",
            "Reference" => "[Heinz-Peter_Schütz]"
        ],
        [
            "extension" => "vnd.biopax.rdf+xml",
            "type" => "application/vnd.biopax.rdf+xml",
            "Reference" => "[Pathway_Commons]"
        ],
        [
            "extension" => "vnd.blink-idb-value-wrapper",
            "type" => "application/vnd.blink-idb-value-wrapper",
            "Reference" => "[Victor_Costan]"
        ],
        [
            "extension" => "vnd.blueice.multipass",
            "type" => "application/vnd.blueice.multipass",
            "Reference" => "[Thomas_Holmstrom]"
        ],
        [
            "extension" => "vnd.bluetooth.ep.oob",
            "type" => "application/vnd.bluetooth.ep.oob",
            "Reference" => "[Mike_Foley]"
        ],
        [
            "extension" => "vnd.bluetooth.le.oob",
            "type" => "application/vnd.bluetooth.le.oob",
            "Reference" => "[Mark_Powell]"
        ],
        [
            "extension" => "vnd.bmi",
            "type" => "application/vnd.bmi",
            "Reference" => "[Tadashi_Gotoh]"
        ],
        [
            "extension" => "vnd.bpf",
            "type" => "application/vnd.bpf",
            "Reference" => "[NCGIS][Bryan_Blank]"
        ],
        [
            "extension" => "vnd.bpf3",
            "type" => "application/vnd.bpf3",
            "Reference" => "[NCGIS][Bryan_Blank]"
        ],
        [
            "extension" => "vnd.businessobjects",
            "type" => "application/vnd.businessobjects",
            "Reference" => "[Philippe_Imoucha]"
        ],
        [
            "extension" => "vnd.byu.uapi+json",
            "type" => "application/vnd.byu.uapi+json",
            "Reference" => "[Brent_Moore]"
        ],
        [
            "extension" => "vnd.cab-jscript",
            "type" => "application/vnd.cab-jscript",
            "Reference" => "[Joerg_Falkenberg]"
        ],
        [
            "extension" => "vnd.canon-cpdl",
            "type" => "application/vnd.canon-cpdl",
            "Reference" => "[Shin_Muto]"
        ],
        [
            "extension" => "vnd.canon-lips",
            "type" => "application/vnd.canon-lips",
            "Reference" => "[Shin_Muto]"
        ],
        [
            "extension" => "vnd.capasystems-pg+json",
            "type" => "application/vnd.capasystems-pg+json",
            "Reference" => "[Yüksel_Aydemir]"
        ],
        [
            "extension" => "vnd.cendio.thinlinc.clientconf",
            "type" => "application/vnd.cendio.thinlinc.clientconf",
            "Reference" => "[Peter_Astrand]"
        ],
        [
            "extension" => "vnd.century-systems.tcp_stream",
            "type" => "application/vnd.century-systems.tcp_stream",
            "Reference" => "[Shuji_Fujii]"
        ],
        [
            "extension" => "vnd.chemdraw+xml",
            "type" => "application/vnd.chemdraw+xml",
            "Reference" => "[Glenn_Howes]"
        ],
        [
            "extension" => "vnd.chess-pgn",
            "type" => "application/vnd.chess-pgn",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.chipnuts.karaoke-mmd",
            "type" => "application/vnd.chipnuts.karaoke-mmd",
            "Reference" => "[Chunyun_Xiong]"
        ],
        [
            "extension" => "vnd.ciedi",
            "type" => "application/vnd.ciedi",
            "Reference" => "[Hidekazu_Enjo]"
        ],
        [
            "extension" => "vnd.cinderella",
            "type" => "application/vnd.cinderella",
            "Reference" => "[Ulrich_Kortenkamp]"
        ],
        [
            "extension" => "vnd.cirpack.isdn-ext",
            "type" => "application/vnd.cirpack.isdn-ext",
            "Reference" => "[Pascal_Mayeux]"
        ],
        [
            "extension" => "vnd.citationstyles.style+xml",
            "type" => "application/vnd.citationstyles.style+xml",
            "Reference" => "[Rintze_M._Zelle]"
        ],
        [
            "extension" => "vnd.claymore",
            "type" => "application/vnd.claymore",
            "Reference" => "[Ray_Simpson]"
        ],
        [
            "extension" => "vnd.cloanto.rp9",
            "type" => "application/vnd.cloanto.rp9",
            "Reference" => "[Mike_Labatt]"
        ],
        [
            "extension" => "vnd.clonk.c4group",
            "type" => "application/vnd.clonk.c4group",
            "Reference" => "[Guenther_Brammer]"
        ],
        [
            "extension" => "vnd.cluetrust.cartomobile-config",
            "type" => "application/vnd.cluetrust.cartomobile-config",
            "Reference" => "[Gaige_Paulsen]"
        ],
        [
            "extension" => "vnd.cluetrust.cartomobile-config-pkg",
            "type" => "application/vnd.cluetrust.cartomobile-config-pkg",
            "Reference" => "[Gaige_Paulsen]"
        ],
        [
            "extension" => "vnd.coffeescript",
            "type" => "application/vnd.coffeescript",
            "Reference" => "[Devyn_Collier_Johnson]"
        ],
        [
            "extension" => "vnd.collabio.xodocuments.document",
            "type" => "application/vnd.collabio.xodocuments.document",
            "Reference" => "[Alexey_Meandrov]"
        ],
        [
            "extension" => "vnd.collabio.xodocuments.document-template",
            "type" => "application/vnd.collabio.xodocuments.document-template",
            "Reference" => "[Alexey_Meandrov]"
        ],
        [
            "extension" => "vnd.collabio.xodocuments.presentation",
            "type" => "application/vnd.collabio.xodocuments.presentation",
            "Reference" => "[Alexey_Meandrov]"
        ],
        [
            "extension" => "vnd.collabio.xodocuments.presentation-template",
            "type" => "application/vnd.collabio.xodocuments.presentation-template",
            "Reference" => "[Alexey_Meandrov]"
        ],
        [
            "extension" => "vnd.collabio.xodocuments.spreadsheet",
            "type" => "application/vnd.collabio.xodocuments.spreadsheet",
            "Reference" => "[Alexey_Meandrov]"
        ],
        [
            "extension" => "vnd.collabio.xodocuments.spreadsheet-template",
            "type" => "application/vnd.collabio.xodocuments.spreadsheet-template",
            "Reference" => "[Alexey_Meandrov]"
        ],
        [
            "extension" => "vnd.collection.doc+json",
            "type" => "application/vnd.collection.doc+json",
            "Reference" => "[Irakli_Nadareishvili]"
        ],
        [
            "extension" => "vnd.collection+json",
            "type" => "application/vnd.collection+json",
            "Reference" => "[Mike_Amundsen]"
        ],
        [
            "extension" => "vnd.collection.next+json",
            "type" => "application/vnd.collection.next+json",
            "Reference" => "[Ioseb_Dzmanashvili]"
        ],
        [
            "extension" => "vnd.comicbook-rar",
            "type" => "application/vnd.comicbook-rar",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.comicbook+zip",
            "type" => "application/vnd.comicbook+zip",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.commerce-battelle",
            "type" => "application/vnd.commerce-battelle",
            "Reference" => "[David_Applebaum]"
        ],
        [
            "extension" => "vnd.commonspace",
            "type" => "application/vnd.commonspace",
            "Reference" => "[Ravinder_Chandhok]"
        ],
        [
            "extension" => "vnd.coreos.ignition+json",
            "type" => "application/vnd.coreos.ignition+json",
            "Reference" => "[Alex_Crawford]"
        ],
        [
            "extension" => "vnd.cosmocaller",
            "type" => "application/vnd.cosmocaller",
            "Reference" => "[Steve_Dellutri]"
        ],
        [
            "extension" => "vnd.contact.cmsg",
            "type" => "application/vnd.contact.cmsg",
            "Reference" => "[Frank_Patz]"
        ],
        [
            "extension" => "vnd.crick.clicker",
            "type" => "application/vnd.crick.clicker",
            "Reference" => "[Andrew_Burt]"
        ],
        [
            "extension" => "vnd.crick.clicker.keyboard",
            "type" => "application/vnd.crick.clicker.keyboard",
            "Reference" => "[Andrew_Burt]"
        ],
        [
            "extension" => "vnd.crick.clicker.palette",
            "type" => "application/vnd.crick.clicker.palette",
            "Reference" => "[Andrew_Burt]"
        ],
        [
            "extension" => "vnd.crick.clicker.template",
            "type" => "application/vnd.crick.clicker.template",
            "Reference" => "[Andrew_Burt]"
        ],
        [
            "extension" => "vnd.crick.clicker.wordbank",
            "type" => "application/vnd.crick.clicker.wordbank",
            "Reference" => "[Andrew_Burt]"
        ],
        [
            "extension" => "vnd.criticaltools.wbs+xml",
            "type" => "application/vnd.criticaltools.wbs+xml",
            "Reference" => "[Jim_Spiller]"
        ],
        [
            "extension" => "vnd.cryptii.pipe+json",
            "type" => "application/vnd.cryptii.pipe+json",
            "Reference" => "[Fränz_Friederes]"
        ],
        [
            "extension" => "vnd.crypto-shade-file",
            "type" => "application/vnd.crypto-shade-file",
            "Reference" => "[Connor_Horman]"
        ],
        [
            "extension" => "vnd.ctc-posml",
            "type" => "application/vnd.ctc-posml",
            "Reference" => "[Bayard_Kohlhepp]"
        ],
        [
            "extension" => "vnd.ctct.ws+xml",
            "type" => "application/vnd.ctct.ws+xml",
            "Reference" => "[Jim_Ancona]"
        ],
        [
            "extension" => "vnd.cups-pdf",
            "type" => "application/vnd.cups-pdf",
            "Reference" => "[Michael_Sweet]"
        ],
        [
            "extension" => "vnd.cups-postscript",
            "type" => "application/vnd.cups-postscript",
            "Reference" => "[Michael_Sweet]"
        ],
        [
            "extension" => "vnd.cups-ppd",
            "type" => "application/vnd.cups-ppd",
            "Reference" => "[Michael_Sweet]"
        ],
        [
            "extension" => "vnd.cups-raster",
            "type" => "application/vnd.cups-raster",
            "Reference" => "[Michael_Sweet]"
        ],
        [
            "extension" => "vnd.cups-raw",
            "type" => "application/vnd.cups-raw",
            "Reference" => "[Michael_Sweet]"
        ],
        [
            "extension" => "vnd.curl",
            "type" => "application/vnd.curl",
            "Reference" => "[Robert_Byrnes]"
        ],
        [
            "extension" => "vnd.cyan.dean.root+xml",
            "type" => "application/vnd.cyan.dean.root+xml",
            "Reference" => "[Matt_Kern]"
        ],
        [
            "extension" => "vnd.cybank",
            "type" => "application/vnd.cybank",
            "Reference" => "[Nor_Helmee]"
        ],
        [
            "extension" => "vnd.d2l.coursepackage1p0+zip",
            "type" => "application/vnd.d2l.coursepackage1p0+zip",
            "Reference" => "[Viktor_Haag]"
        ],
        [
            "extension" => "vnd.dart",
            "type" => "application/vnd.dart",
            "Reference" => "[Anders_Sandholm]"
        ],
        [
            "extension" => "vnd.data-vision.rdz",
            "type" => "application/vnd.data-vision.rdz",
            "Reference" => "[James_Fields]"
        ],
        [
            "extension" => "vnd.datapackage+json",
            "type" => "application/vnd.datapackage+json",
            "Reference" => "[Paul_Walsh]"
        ],
        [
            "extension" => "vnd.dataresource+json",
            "type" => "application/vnd.dataresource+json",
            "Reference" => "[Paul_Walsh]"
        ],
        [
            "extension" => "vnd.dbf",
            "type" => "application/vnd.dbf",
            "Reference" => "[Mi_Tar]"
        ],
        [
            "extension" => "vnd.debian.binary-package",
            "type" => "application/vnd.debian.binary-package",
            "Reference" => "[Charles_Plessy]"
        ],
        [
            "extension" => "vnd.dece.data",
            "type" => "application/vnd.dece.data",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.ttml+xml",
            "type" => "application/vnd.dece.ttml+xml",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.unspecified",
            "type" => "application/vnd.dece.unspecified",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.zip",
            "type" => "application/vnd.dece.zip",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.denovo.fcselayout-link",
            "type" => "application/vnd.denovo.fcselayout-link",
            "Reference" => "[Michael_Dixon]"
        ],
        [
            "extension" => "vnd.desmume.movie",
            "type" => "application/vnd.desmume.movie",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.dir-bi.plate-dl-nosuffix",
            "type" => "application/vnd.dir-bi.plate-dl-nosuffix",
            "Reference" => "[Yamanaka]"
        ],
        [
            "extension" => "vnd.dm.delegation+xml",
            "type" => "application/vnd.dm.delegation+xml",
            "Reference" => "[Axel_Ferrazzini]"
        ],
        [
            "extension" => "vnd.dna",
            "type" => "application/vnd.dna",
            "Reference" => "[Meredith_Searcy]"
        ],
        [
            "extension" => "vnd.document+json",
            "type" => "application/vnd.document+json",
            "Reference" => "[Tom_Christie]"
        ],
        [
            "extension" => "vnd.dolby.mobile.1",
            "type" => "application/vnd.dolby.mobile.1",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dolby.mobile.2",
            "type" => "application/vnd.dolby.mobile.2",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.doremir.scorecloud-binary-document",
            "type" => "application/vnd.doremir.scorecloud-binary-document",
            "Reference" => "[Erik_Ronström]"
        ],
        [
            "extension" => "vnd.dpgraph",
            "type" => "application/vnd.dpgraph",
            "Reference" => "[David_Parker]"
        ],
        [
            "extension" => "vnd.dreamfactory",
            "type" => "application/vnd.dreamfactory",
            "Reference" => "[William_C._Appleton]"
        ],
        [
            "extension" => "vnd.drive+json",
            "type" => "application/vnd.drive+json",
            "Reference" => "[Keith_Kester]"
        ],
        [
            "extension" => "vnd.dtg.local",
            "type" => "application/vnd.dtg.local",
            "Reference" => "[Ali_Teffahi]"
        ],
        [
            "extension" => "vnd.dtg.local.flash",
            "type" => "application/vnd.dtg.local.flash",
            "Reference" => "[Ali_Teffahi]"
        ],
        [
            "extension" => "vnd.dtg.local.html",
            "type" => "application/vnd.dtg.local.html",
            "Reference" => "[Ali_Teffahi]"
        ],
        [
            "extension" => "vnd.dvb.ait",
            "type" => "application/vnd.dvb.ait",
            "Reference" => "[Peter_Siebert][Michael_Lagally]"
        ],
        [
            "extension" => "vnd.dvb.dvbisl+xml",
            "type" => "application/vnd.dvb.dvbisl+xml",
            "Reference" => "[Emily_DUBS]"
        ],
        [
            "extension" => "vnd.dvb.dvbj",
            "type" => "application/vnd.dvb.dvbj",
            "Reference" => "[Peter_Siebert][Michael_Lagally]"
        ],
        [
            "extension" => "vnd.dvb.esgcontainer",
            "type" => "application/vnd.dvb.esgcontainer",
            "Reference" => "[Joerg_Heuer]"
        ],
        [
            "extension" => "vnd.dvb.ipdcdftnotifaccess",
            "type" => "application/vnd.dvb.ipdcdftnotifaccess",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.ipdcesgaccess",
            "type" => "application/vnd.dvb.ipdcesgaccess",
            "Reference" => "[Joerg_Heuer]"
        ],
        [
            "extension" => "vnd.dvb.ipdcesgaccess2",
            "type" => "application/vnd.dvb.ipdcesgaccess2",
            "Reference" => "[Jerome_Marcon]"
        ],
        [
            "extension" => "vnd.dvb.ipdcesgpdd",
            "type" => "application/vnd.dvb.ipdcesgpdd",
            "Reference" => "[Jerome_Marcon]"
        ],
        [
            "extension" => "vnd.dvb.ipdcroaming",
            "type" => "application/vnd.dvb.ipdcroaming",
            "Reference" => "[Yiling_Xu]"
        ],
        [
            "extension" => "vnd.dvb.iptv.alfec-base",
            "type" => "application/vnd.dvb.iptv.alfec-base",
            "Reference" => "[Jean-Baptiste_Henry]"
        ],
        [
            "extension" => "vnd.dvb.iptv.alfec-enhancement",
            "type" => "application/vnd.dvb.iptv.alfec-enhancement",
            "Reference" => "[Jean-Baptiste_Henry]"
        ],
        [
            "extension" => "vnd.dvb.notif-aggregate-root+xml",
            "type" => "application/vnd.dvb.notif-aggregate-root+xml",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.notif-container+xml",
            "type" => "application/vnd.dvb.notif-container+xml",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.notif-generic+xml",
            "type" => "application/vnd.dvb.notif-generic+xml",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.notif-ia-msglist+xml",
            "type" => "application/vnd.dvb.notif-ia-msglist+xml",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.notif-ia-registration-request+xml",
            "type" => "application/vnd.dvb.notif-ia-registration-request+xml",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.notif-ia-registration-response+xml",
            "type" => "application/vnd.dvb.notif-ia-registration-response+xml",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.notif-init+xml",
            "type" => "application/vnd.dvb.notif-init+xml",
            "Reference" => "[Roy_Yue]"
        ],
        [
            "extension" => "vnd.dvb.pfr",
            "type" => "application/vnd.dvb.pfr",
            "Reference" => "[Peter_Siebert][Michael_Lagally]"
        ],
        [
            "extension" => "vnd.dvb.service",
            "type" => "application/vnd.dvb.service",
            "Reference" => "[Peter_Siebert][Michael_Lagally]"
        ],
        [
            "extension" => "vnd.dxr",
            "type" => "application/vnd.dxr",
            "Reference" => "[Michael_Duffy]"
        ],
        [
            "extension" => "vnd.dynageo",
            "type" => "application/vnd.dynageo",
            "Reference" => "[Roland_Mechling]"
        ],
        [
            "extension" => "vnd.dzr",
            "type" => "application/vnd.dzr",
            "Reference" => "[Carl_Anderson]"
        ],
        [
            "extension" => "vnd.easykaraoke.cdgdownload",
            "type" => "application/vnd.easykaraoke.cdgdownload",
            "Reference" => "[Iain_Downs]"
        ],
        [
            "extension" => "vnd.ecip.rlp",
            "type" => "application/vnd.ecip.rlp",
            "Reference" => "[Wei_Tang]"
        ],
        [
            "extension" => "vnd.ecdis-update",
            "type" => "application/vnd.ecdis-update",
            "Reference" => "[Gert_Buettgenbach]"
        ],
        [
            "extension" => "vnd.ecowin.chart",
            "type" => "application/vnd.ecowin.chart",
            "Reference" => "[Thomas_Olsson]"
        ],
        [
            "extension" => "vnd.ecowin.filerequest",
            "type" => "application/vnd.ecowin.filerequest",
            "Reference" => "[Thomas_Olsson]"
        ],
        [
            "extension" => "vnd.ecowin.fileupdate",
            "type" => "application/vnd.ecowin.fileupdate",
            "Reference" => "[Thomas_Olsson]"
        ],
        [
            "extension" => "vnd.ecowin.series",
            "type" => "application/vnd.ecowin.series",
            "Reference" => "[Thomas_Olsson]"
        ],
        [
            "extension" => "vnd.ecowin.seriesrequest",
            "type" => "application/vnd.ecowin.seriesrequest",
            "Reference" => "[Thomas_Olsson]"
        ],
        [
            "extension" => "vnd.ecowin.seriesupdate",
            "type" => "application/vnd.ecowin.seriesupdate",
            "Reference" => "[Thomas_Olsson]"
        ],
        [
            "extension" => "vnd.efi.img",
            "type" => "application/vnd.efi.img",
            "Reference" => "[UEFI_Forum][Fu_Siyuan]"
        ],
        [
            "extension" => "vnd.efi.iso",
            "type" => "application/vnd.efi.iso",
            "Reference" => "[UEFI_Forum][Fu_Siyuan]"
        ],
        [
            "extension" => "vnd.emclient.accessrequest+xml",
            "type" => "application/vnd.emclient.accessrequest+xml",
            "Reference" => "[Filip_Navara]"
        ],
        [
            "extension" => "vnd.enliven",
            "type" => "application/vnd.enliven",
            "Reference" => "[Paul_Santinelli_Jr.]"
        ],
        [
            "extension" => "vnd.enphase.envoy",
            "type" => "application/vnd.enphase.envoy",
            "Reference" => "[Chris_Eich]"
        ],
        [
            "extension" => "vnd.eprints.data+xml",
            "type" => "application/vnd.eprints.data+xml",
            "Reference" => "[Tim_Brody]"
        ],
        [
            "extension" => "vnd.epson.esf",
            "type" => "application/vnd.epson.esf",
            "Reference" => "[Shoji_Hoshina]"
        ],
        [
            "extension" => "vnd.epson.msf",
            "type" => "application/vnd.epson.msf",
            "Reference" => "[Shoji_Hoshina]"
        ],
        [
            "extension" => "vnd.epson.quickanime",
            "type" => "application/vnd.epson.quickanime",
            "Reference" => "[Yu_Gu]"
        ],
        [
            "extension" => "vnd.epson.salt",
            "type" => "application/vnd.epson.salt",
            "Reference" => "[Yasuhito_Nagatomo]"
        ],
        [
            "extension" => "vnd.epson.ssf",
            "type" => "application/vnd.epson.ssf",
            "Reference" => "[Shoji_Hoshina]"
        ],
        [
            "extension" => "vnd.ericsson.quickcall",
            "type" => "application/vnd.ericsson.quickcall",
            "Reference" => "[Paul_Tidwell]"
        ],
        [
            "extension" => "vnd.espass-espass+zip",
            "type" => "application/vnd.espass-espass+zip",
            "Reference" => "[Marcus_Ligi_Büschleb]"
        ],
        [
            "extension" => "vnd.eszigno3+xml",
            "type" => "application/vnd.eszigno3+xml",
            "Reference" => "[Szilveszter_Tóth]"
        ],
        [
            "extension" => "vnd.etsi.aoc+xml",
            "type" => "application/vnd.etsi.aoc+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.asic-s+zip",
            "type" => "application/vnd.etsi.asic-s+zip",
            "Reference" => "[Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "vnd.etsi.asic-e+zip",
            "type" => "application/vnd.etsi.asic-e+zip",
            "Reference" => "[Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "vnd.etsi.cug+xml",
            "type" => "application/vnd.etsi.cug+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.iptvcommand+xml",
            "type" => "application/vnd.etsi.iptvcommand+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.iptvdiscovery+xml",
            "type" => "application/vnd.etsi.iptvdiscovery+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.iptvprofile+xml",
            "type" => "application/vnd.etsi.iptvprofile+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.iptvsad-bc+xml",
            "type" => "application/vnd.etsi.iptvsad-bc+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.iptvsad-cod+xml",
            "type" => "application/vnd.etsi.iptvsad-cod+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.iptvsad-npvr+xml",
            "type" => "application/vnd.etsi.iptvsad-npvr+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.iptvservice+xml",
            "type" => "application/vnd.etsi.iptvservice+xml",
            "Reference" => "[Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "vnd.etsi.iptvsync+xml",
            "type" => "application/vnd.etsi.iptvsync+xml",
            "Reference" => "[Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "vnd.etsi.iptvueprofile+xml",
            "type" => "application/vnd.etsi.iptvueprofile+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.mcid+xml",
            "type" => "application/vnd.etsi.mcid+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.mheg5",
            "type" => "application/vnd.etsi.mheg5",
            "Reference" => "[Miguel_Angel_Reina_Ortega][Ian_Medland]"
        ],
        [
            "extension" => "vnd.etsi.overload-control-policy-dataset+xml",
            "type" => "application/vnd.etsi.overload-control-policy-dataset+xml",
            "Reference" => "[Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "vnd.etsi.pstn+xml",
            "type" => "application/vnd.etsi.pstn+xml",
            "Reference" => "[Jiwan_Han][Thomas_Belling]"
        ],
        [
            "extension" => "vnd.etsi.sci+xml",
            "type" => "application/vnd.etsi.sci+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.simservs+xml",
            "type" => "application/vnd.etsi.simservs+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.timestamp-token",
            "type" => "application/vnd.etsi.timestamp-token",
            "Reference" => "[Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "vnd.etsi.tsl+xml",
            "type" => "application/vnd.etsi.tsl+xml",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.etsi.tsl.der",
            "type" => "application/vnd.etsi.tsl.der",
            "Reference" => "[Shicheng_Hu]"
        ],
        [
            "extension" => "vnd.evolv.ecig.profile",
            "type" => "application/vnd.evolv.ecig.profile",
            "Reference" => "[James_Bellinger]"
        ],
        [
            "extension" => "vnd.evolv.ecig.settings",
            "type" => "application/vnd.evolv.ecig.settings",
            "Reference" => "[James_Bellinger]"
        ],
        [
            "extension" => "vnd.evolv.ecig.theme",
            "type" => "application/vnd.evolv.ecig.theme",
            "Reference" => "[James_Bellinger]"
        ],
        [
            "extension" => "vnd.eudora.data",
            "type" => "application/vnd.eudora.data",
            "Reference" => "[Pete_Resnick]"
        ],
        [
            "extension" => "vnd.exstream-empower+zip",
            "type" => "application/vnd.exstream-empower+zip",
            "Reference" => "[Bill_Kidwell]"
        ],
        [
            "extension" => "vnd.exstream-package",
            "type" => "application/vnd.exstream-package",
            "Reference" => "[Bill_Kidwell]"
        ],
        [
            "extension" => "vnd.ezpix-album",
            "type" => "application/vnd.ezpix-album",
            "Reference" => "[ElectronicZombieCorp]"
        ],
        [
            "extension" => "vnd.ezpix-package",
            "type" => "application/vnd.ezpix-package",
            "Reference" => "[ElectronicZombieCorp]"
        ],
        [
            "extension" => "vnd.f-secure.mobile",
            "type" => "application/vnd.f-secure.mobile",
            "Reference" => "[Samu_Sarivaara]"
        ],
        [
            "extension" => "vnd.fastcopy-disk-image",
            "type" => "application/vnd.fastcopy-disk-image",
            "Reference" => "[Thomas_Huth]"
        ],
        [
            "extension" => "vnd.fdf",
            "type" => "application/vnd.fdf",
            "Reference" => "[Steve_Zilles]"
        ],
        [
            "extension" => "vnd.fdsn.mseed",
            "type" => "application/vnd.fdsn.mseed",
            "Reference" => "[Chad_Trabant]"
        ],
        [
            "extension" => "vnd.fdsn.seed",
            "type" => "application/vnd.fdsn.seed",
            "Reference" => "[Chad_Trabant]"
        ],
        [
            "extension" => "vnd.ffsns",
            "type" => "application/vnd.ffsns",
            "Reference" => "[Holstage]"
        ],
        [
            "extension" => "vnd.ficlab.flb+zip",
            "type" => "application/vnd.ficlab.flb+zip",
            "Reference" => "[Steve_Gilberd]"
        ],
        [
            "extension" => "vnd.filmit.zfc",
            "type" => "application/vnd.filmit.zfc",
            "Reference" => "[Harms_Moeller]"
        ],
        [
            "extension" => "vnd.fints",
            "type" => "application/vnd.fints",
            "Reference" => "[Ingo_Hammann]"
        ],
        [
            "extension" => "vnd.firemonkeys.cloudcell",
            "type" => "application/vnd.firemonkeys.cloudcell",
            "Reference" => "[Alex_Dubov]"
        ],
        [
            "extension" => "vnd.FloGraphIt",
            "type" => "application/vnd.FloGraphIt",
            "Reference" => "[Dick_Floersch]"
        ],
        [
            "extension" => "vnd.fluxtime.clip",
            "type" => "application/vnd.fluxtime.clip",
            "Reference" => "[Marc_Winter]"
        ],
        [
            "extension" => "vnd.font-fontforge-sfd",
            "type" => "application/vnd.font-fontforge-sfd",
            "Reference" => "[George_Williams]"
        ],
        [
            "extension" => "vnd.framemaker",
            "type" => "application/vnd.framemaker",
            "Reference" => "[Mike_Wexler]"
        ],
        [
            "extension" => "vnd.frogans.fnc - OBSOLETE",
            "type" => "application/vnd.frogans.fnc",
            "Reference" => "[OP3FT][Alexis_Tamas]"
        ],
        [
            "extension" => "vnd.frogans.ltf - OBSOLETE",
            "type" => "application/vnd.frogans.ltf",
            "Reference" => "[OP3FT][Alexis_Tamas]"
        ],
        [
            "extension" => "vnd.fsc.weblaunch",
            "type" => "application/vnd.fsc.weblaunch",
            "Reference" => "[Derek_Smith]"
        ],
        [
            "extension" => "vnd.fujitsu.oasys",
            "type" => "application/vnd.fujitsu.oasys",
            "Reference" => "[Nobukazu_Togashi]"
        ],
        [
            "extension" => "vnd.fujitsu.oasys2",
            "type" => "application/vnd.fujitsu.oasys2",
            "Reference" => "[Nobukazu_Togashi]"
        ],
        [
            "extension" => "vnd.fujitsu.oasys3",
            "type" => "application/vnd.fujitsu.oasys3",
            "Reference" => "[Seiji_Okudaira]"
        ],
        [
            "extension" => "vnd.fujitsu.oasysgp",
            "type" => "application/vnd.fujitsu.oasysgp",
            "Reference" => "[Masahiko_Sugimoto]"
        ],
        [
            "extension" => "vnd.fujitsu.oasysprs",
            "type" => "application/vnd.fujitsu.oasysprs",
            "Reference" => "[Masumi_Ogita]"
        ],
        [
            "extension" => "vnd.fujixerox.ART4",
            "type" => "application/vnd.fujixerox.ART4",
            "Reference" => "[Fumio_Tanabe]"
        ],
        [
            "extension" => "vnd.fujixerox.ART-EX",
            "type" => "application/vnd.fujixerox.ART-EX",
            "Reference" => "[Fumio_Tanabe]"
        ],
        [
            "extension" => "vnd.fujixerox.ddd",
            "type" => "application/vnd.fujixerox.ddd",
            "Reference" => "[Masanori_Onda]"
        ],
        [
            "extension" => "vnd.fujixerox.docuworks",
            "type" => "application/vnd.fujixerox.docuworks",
            "Reference" => "[Takatomo_Wakibayashi]"
        ],
        [
            "extension" => "vnd.fujixerox.docuworks.binder",
            "type" => "application/vnd.fujixerox.docuworks.binder",
            "Reference" => "[Takashi_Matsumoto]"
        ],
        [
            "extension" => "vnd.fujixerox.docuworks.container",
            "type" => "application/vnd.fujixerox.docuworks.container",
            "Reference" => "[Kiyoshi_Tashiro]"
        ],
        [
            "extension" => "vnd.fujixerox.HBPL",
            "type" => "application/vnd.fujixerox.HBPL",
            "Reference" => "[Fumio_Tanabe]"
        ],
        [
            "extension" => "vnd.fut-misnet",
            "type" => "application/vnd.fut-misnet",
            "Reference" => "[Jann_Pruulman]"
        ],
        [
            "extension" => "vnd.futoin+cbor",
            "type" => "application/vnd.futoin+cbor",
            "Reference" => "[Andrey_Galkin]"
        ],
        [
            "extension" => "vnd.futoin+json",
            "type" => "application/vnd.futoin+json",
            "Reference" => "[Andrey_Galkin]"
        ],
        [
            "extension" => "vnd.fuzzysheet",
            "type" => "application/vnd.fuzzysheet",
            "Reference" => "[Simon_Birtwistle]"
        ],
        [
            "extension" => "vnd.genomatix.tuxedo",
            "type" => "application/vnd.genomatix.tuxedo",
            "Reference" => "[Torben_Frey]"
        ],
        [
            "extension" => "vnd.gentics.grd+json",
            "type" => "application/vnd.gentics.grd+json",
            "Reference" => "[Philipp_Gortan]"
        ],
        [
            "extension" => "vnd.geo+json (OBSOLETED by [RFC7946] in favor of application/geo+json)",
            "type" => "application/vnd.geo+json",
            "Reference" => "[Sean_Gillies]"
        ],
        [
            "extension" => "vnd.geocube+xml - OBSOLETED by request",
            "type" => "application/vnd.geocube+xml",
            "Reference" => "[Francois_Pirsch]"
        ],
        [
            "extension" => "vnd.geogebra.file",
            "type" => "application/vnd.geogebra.file",
            "Reference" => "[GeoGebra][Yves_Kreis]"
        ],
        [
            "extension" => "vnd.geogebra.tool",
            "type" => "application/vnd.geogebra.tool",
            "Reference" => "[GeoGebra][Yves_Kreis]"
        ],
        [
            "extension" => "vnd.geometry-explorer",
            "type" => "application/vnd.geometry-explorer",
            "Reference" => "[Michael_Hvidsten]"
        ],
        [
            "extension" => "vnd.geonext",
            "type" => "application/vnd.geonext",
            "Reference" => "[Matthias_Ehmann]"
        ],
        [
            "extension" => "vnd.geoplan",
            "type" => "application/vnd.geoplan",
            "Reference" => "[Christian_Mercat]"
        ],
        [
            "extension" => "vnd.geospace",
            "type" => "application/vnd.geospace",
            "Reference" => "[Christian_Mercat]"
        ],
        [
            "extension" => "vnd.gerber",
            "type" => "application/vnd.gerber",
            "Reference" => "[Thomas_Weyn]"
        ],
        [
            "extension" => "vnd.globalplatform.card-content-mgt",
            "type" => "application/vnd.globalplatform.card-content-mgt",
            "Reference" => "[Gil_Bernabeu]"
        ],
        [
            "extension" => "vnd.globalplatform.card-content-mgt-response",
            "type" => "application/vnd.globalplatform.card-content-mgt-response",
            "Reference" => "[Gil_Bernabeu]"
        ],
        [
            "extension" => "vnd.gmx - DEPRECATED",
            "type" => "application/vnd.gmx",
            "Reference" => "[Christian_V._Sciberras]"
        ],
        [
            "extension" => "vnd.google-earth.kml+xml",
            "type" => "application/vnd.google-earth.kml+xml",
            "Reference" => "[Michael_Ashbridge]"
        ],
        [
            "extension" => "vnd.google-earth.kmz",
            "type" => "application/vnd.google-earth.kmz",
            "Reference" => "[Michael_Ashbridge]"
        ],
        [
            "extension" => "vnd.gov.sk.e-form+xml",
            "type" => "application/vnd.gov.sk.e-form+xml",
            "Reference" => "[Peter_Biro][Stefan_Szilva]"
        ],
        [
            "extension" => "vnd.gov.sk.e-form+zip",
            "type" => "application/vnd.gov.sk.e-form+zip",
            "Reference" => "[Peter_Biro][Stefan_Szilva]"
        ],
        [
            "extension" => "vnd.gov.sk.xmldatacontainer+xml",
            "type" => "application/vnd.gov.sk.xmldatacontainer+xml",
            "Reference" => "[Peter_Biro][Stefan_Szilva]"
        ],
        [
            "extension" => "vnd.grafeq",
            "type" => "application/vnd.grafeq",
            "Reference" => "[Jeff_Tupper]"
        ],
        [
            "extension" => "vnd.gridmp",
            "type" => "application/vnd.gridmp",
            "Reference" => "[Jeff_Lawson]"
        ],
        [
            "extension" => "vnd.groove-account",
            "type" => "application/vnd.groove-account",
            "Reference" => "[Todd_Joseph]"
        ],
        [
            "extension" => "vnd.groove-help",
            "type" => "application/vnd.groove-help",
            "Reference" => "[Todd_Joseph]"
        ],
        [
            "extension" => "vnd.groove-identity-message",
            "type" => "application/vnd.groove-identity-message",
            "Reference" => "[Todd_Joseph]"
        ],
        [
            "extension" => "vnd.groove-injector",
            "type" => "application/vnd.groove-injector",
            "Reference" => "[Todd_Joseph]"
        ],
        [
            "extension" => "vnd.groove-tool-message",
            "type" => "application/vnd.groove-tool-message",
            "Reference" => "[Todd_Joseph]"
        ],
        [
            "extension" => "vnd.groove-tool-template",
            "type" => "application/vnd.groove-tool-template",
            "Reference" => "[Todd_Joseph]"
        ],
        [
            "extension" => "vnd.groove-vcard",
            "type" => "application/vnd.groove-vcard",
            "Reference" => "[Todd_Joseph]"
        ],
        [
            "extension" => "vnd.hal+json",
            "type" => "application/vnd.hal+json",
            "Reference" => "[Mike_Kelly]"
        ],
        [
            "extension" => "vnd.hal+xml",
            "type" => "application/vnd.hal+xml",
            "Reference" => "[Mike_Kelly]"
        ],
        [
            "extension" => "vnd.HandHeld-Entertainment+xml",
            "type" => "application/vnd.HandHeld-Entertainment+xml",
            "Reference" => "[Eric_Hamilton]"
        ],
        [
            "extension" => "vnd.hbci",
            "type" => "application/vnd.hbci",
            "Reference" => "[Ingo_Hammann]"
        ],
        [
            "extension" => "vnd.hc+json",
            "type" => "application/vnd.hc+json",
            "Reference" => "[Jan_Schütze]"
        ],
        [
            "extension" => "vnd.hcl-bireports",
            "type" => "application/vnd.hcl-bireports",
            "Reference" => "[Doug_R._Serres]"
        ],
        [
            "extension" => "vnd.hdt",
            "type" => "application/vnd.hdt",
            "Reference" => "[Javier_D._Fernández]"
        ],
        [
            "extension" => "vnd.heroku+json",
            "type" => "application/vnd.heroku+json",
            "Reference" => "[Wesley_Beary]"
        ],
        [
            "extension" => "vnd.hhe.lesson-player",
            "type" => "application/vnd.hhe.lesson-player",
            "Reference" => "[Randy_Jones]"
        ],
        [
            "extension" => "vnd.hp-HPGL",
            "type" => "application/vnd.hp-HPGL",
            "Reference" => "[Bob_Pentecost]"
        ],
        [
            "extension" => "vnd.hp-hpid",
            "type" => "application/vnd.hp-hpid",
            "Reference" => "[Aloke_Gupta]"
        ],
        [
            "extension" => "vnd.hp-hps",
            "type" => "application/vnd.hp-hps",
            "Reference" => "[Steve_Aubrey]"
        ],
        [
            "extension" => "vnd.hp-jlyt",
            "type" => "application/vnd.hp-jlyt",
            "Reference" => "[Amir_Gaash]"
        ],
        [
            "extension" => "vnd.hp-PCL",
            "type" => "application/vnd.hp-PCL",
            "Reference" => "[Bob_Pentecost]"
        ],
        [
            "extension" => "vnd.hp-PCLXL",
            "type" => "application/vnd.hp-PCLXL",
            "Reference" => "[Bob_Pentecost]"
        ],
        [
            "extension" => "vnd.httphone",
            "type" => "application/vnd.httphone",
            "Reference" => "[Franck_Lefevre]"
        ],
        [
            "extension" => "vnd.hydrostatix.sof-data",
            "type" => "application/vnd.hydrostatix.sof-data",
            "Reference" => "[Allen_Gillam]"
        ],
        [
            "extension" => "vnd.hyper-item+json",
            "type" => "application/vnd.hyper-item+json",
            "Reference" => "[Mario_Demuth]"
        ],
        [
            "extension" => "vnd.hyper+json",
            "type" => "application/vnd.hyper+json",
            "Reference" => "[Irakli_Nadareishvili]"
        ],
        [
            "extension" => "vnd.hyperdrive+json",
            "type" => "application/vnd.hyperdrive+json",
            "Reference" => "[Daniel_Sims]"
        ],
        [
            "extension" => "vnd.hzn-3d-crossword",
            "type" => "application/vnd.hzn-3d-crossword",
            "Reference" => "[James_Minnis]"
        ],
        [
            "extension" => "vnd.ibm.afplinedata - OBSOLETED in favor of vnd.afpc.afplinedata",
            "type" => "application/vnd.ibm.afplinedata",
            "Reference" => "[Roger_Buis]"
        ],
        [
            "extension" => "vnd.ibm.electronic-media",
            "type" => "application/vnd.ibm.electronic-media",
            "Reference" => "[Bruce_Tantlinger]"
        ],
        [
            "extension" => "vnd.ibm.MiniPay",
            "type" => "application/vnd.ibm.MiniPay",
            "Reference" => "[Amir_Herzberg]"
        ],
        [
            "extension" => "vnd.ibm.modcap - OBSOLETED in favor of application/vnd.afpc.modca",
            "type" => "application/vnd.ibm.modcap",
            "Reference" => "[Reinhard_Hohensee]"
        ],
        [
            "extension" => "vnd.ibm.rights-management",
            "type" => "application/vnd.ibm.rights-management",
            "Reference" => "[Bruce_Tantlinger]"
        ],
        [
            "extension" => "vnd.ibm.secure-container",
            "type" => "application/vnd.ibm.secure-container",
            "Reference" => "[Bruce_Tantlinger]"
        ],
        [
            "extension" => "vnd.iccprofile",
            "type" => "application/vnd.iccprofile",
            "Reference" => "[Phil_Green]"
        ],
        [
            "extension" => "vnd.ieee.1905",
            "type" => "application/vnd.ieee.1905",
            "Reference" => "[Purva_R_Rajkotia]"
        ],
        [
            "extension" => "vnd.igloader",
            "type" => "application/vnd.igloader",
            "Reference" => "[Tim_Fisher]"
        ],
        [
            "extension" => "vnd.imagemeter.folder+zip",
            "type" => "application/vnd.imagemeter.folder+zip",
            "Reference" => "[Dirk_Farin]"
        ],
        [
            "extension" => "vnd.imagemeter.image+zip",
            "type" => "application/vnd.imagemeter.image+zip",
            "Reference" => "[Dirk_Farin]"
        ],
        [
            "extension" => "vnd.immervision-ivp",
            "type" => "application/vnd.immervision-ivp",
            "Reference" => "[Mathieu_Villegas]"
        ],
        [
            "extension" => "vnd.immervision-ivu",
            "type" => "application/vnd.immervision-ivu",
            "Reference" => "[Mathieu_Villegas]"
        ],
        [
            "extension" => "vnd.ims.imsccv1p1",
            "type" => "application/vnd.ims.imsccv1p1",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.imsccv1p2",
            "type" => "application/vnd.ims.imsccv1p2",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.imsccv1p3",
            "type" => "application/vnd.ims.imsccv1p3",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.lis.v2.result+json",
            "type" => "application/vnd.ims.lis.v2.result+json",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.lti.v2.toolconsumerprofile+json",
            "type" => "application/vnd.ims.lti.v2.toolconsumerprofile+json",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.lti.v2.toolproxy.id+json",
            "type" => "application/vnd.ims.lti.v2.toolproxy.id+json",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.lti.v2.toolproxy+json",
            "type" => "application/vnd.ims.lti.v2.toolproxy+json",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.lti.v2.toolsettings+json",
            "type" => "application/vnd.ims.lti.v2.toolsettings+json",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.ims.lti.v2.toolsettings.simple+json",
            "type" => "application/vnd.ims.lti.v2.toolsettings.simple+json",
            "Reference" => "[Lisa_Mattson]"
        ],
        [
            "extension" => "vnd.informedcontrol.rms+xml",
            "type" => "application/vnd.informedcontrol.rms+xml",
            "Reference" => "[Mark_Wahl]"
        ],
        [
            "extension" => "vnd.infotech.project",
            "type" => "application/vnd.infotech.project",
            "Reference" => "[Charles_Engelke]"
        ],
        [
            "extension" => "vnd.infotech.project+xml",
            "type" => "application/vnd.infotech.project+xml",
            "Reference" => "[Charles_Engelke]"
        ],
        [
            "extension" => "vnd.informix-visionary - OBSOLETED in favor of application/vnd.visionary",
            "type" => "application/vnd.informix-visionary",
            "Reference" => "[Christopher_Gales]"
        ],
        [
            "extension" => "vnd.innopath.wamp.notification",
            "type" => "application/vnd.innopath.wamp.notification",
            "Reference" => "[Takanori_Sudo]"
        ],
        [
            "extension" => "vnd.insors.igm",
            "type" => "application/vnd.insors.igm",
            "Reference" => "[Jon_Swanson]"
        ],
        [
            "extension" => "vnd.intercon.formnet",
            "type" => "application/vnd.intercon.formnet",
            "Reference" => "[Tom_Gurak]"
        ],
        [
            "extension" => "vnd.intergeo",
            "type" => "application/vnd.intergeo",
            "Reference" => "[Yves_Kreis_2]"
        ],
        [
            "extension" => "vnd.intertrust.digibox",
            "type" => "application/vnd.intertrust.digibox",
            "Reference" => "[Luke_Tomasello]"
        ],
        [
            "extension" => "vnd.intertrust.nncp",
            "type" => "application/vnd.intertrust.nncp",
            "Reference" => "[Luke_Tomasello]"
        ],
        [
            "extension" => "vnd.intu.qbo",
            "type" => "application/vnd.intu.qbo",
            "Reference" => "[Greg_Scratchley]"
        ],
        [
            "extension" => "vnd.intu.qfx",
            "type" => "application/vnd.intu.qfx",
            "Reference" => "[Greg_Scratchley]"
        ],
        [
            "extension" => "vnd.iptc.g2.catalogitem+xml",
            "type" => "application/vnd.iptc.g2.catalogitem+xml",
            "Reference" => "[Michael_Steidl]"
        ],
        [
            "extension" => "vnd.iptc.g2.conceptitem+xml",
            "type" => "application/vnd.iptc.g2.conceptitem+xml",
            "Reference" => "[Michael_Steidl]"
        ],
        [
            "extension" => "vnd.iptc.g2.knowledgeitem+xml",
            "type" => "application/vnd.iptc.g2.knowledgeitem+xml",
            "Reference" => "[Michael_Steidl]"
        ],
        [
            "extension" => "vnd.iptc.g2.newsitem+xml",
            "type" => "application/vnd.iptc.g2.newsitem+xml",
            "Reference" => "[Michael_Steidl]"
        ],
        [
            "extension" => "vnd.iptc.g2.newsmessage+xml",
            "type" => "application/vnd.iptc.g2.newsmessage+xml",
            "Reference" => "[Michael_Steidl]"
        ],
        [
            "extension" => "vnd.iptc.g2.packageitem+xml",
            "type" => "application/vnd.iptc.g2.packageitem+xml",
            "Reference" => "[Michael_Steidl]"
        ],
        [
            "extension" => "vnd.iptc.g2.planningitem+xml",
            "type" => "application/vnd.iptc.g2.planningitem+xml",
            "Reference" => "[Michael_Steidl]"
        ],
        [
            "extension" => "vnd.ipunplugged.rcprofile",
            "type" => "application/vnd.ipunplugged.rcprofile",
            "Reference" => "[Per_Ersson]"
        ],
        [
            "extension" => "vnd.irepository.package+xml",
            "type" => "application/vnd.irepository.package+xml",
            "Reference" => "[Martin_Knowles]"
        ],
        [
            "extension" => "vnd.is-xpr",
            "type" => "application/vnd.is-xpr",
            "Reference" => "[Satish_Navarajan]"
        ],
        [
            "extension" => "vnd.isac.fcs",
            "type" => "application/vnd.isac.fcs",
            "Reference" => "[Ryan_Brinkman]"
        ],
        [
            "extension" => "vnd.jam",
            "type" => "application/vnd.jam",
            "Reference" => "[Brijesh_Kumar]"
        ],
        [
            "extension" => "vnd.iso11783-10+zip",
            "type" => "application/vnd.iso11783-10+zip",
            "Reference" => "[Frank_Wiebeler]"
        ],
        [
            "extension" => "vnd.japannet-directory-service",
            "type" => "application/vnd.japannet-directory-service",
            "Reference" => "[Kiyofusa_Fujii]"
        ],
        [
            "extension" => "vnd.japannet-jpnstore-wakeup",
            "type" => "application/vnd.japannet-jpnstore-wakeup",
            "Reference" => "[Jun_Yoshitake]"
        ],
        [
            "extension" => "vnd.japannet-payment-wakeup",
            "type" => "application/vnd.japannet-payment-wakeup",
            "Reference" => "[Kiyofusa_Fujii]"
        ],
        [
            "extension" => "vnd.japannet-registration",
            "type" => "application/vnd.japannet-registration",
            "Reference" => "[Jun_Yoshitake]"
        ],
        [
            "extension" => "vnd.japannet-registration-wakeup",
            "type" => "application/vnd.japannet-registration-wakeup",
            "Reference" => "[Kiyofusa_Fujii]"
        ],
        [
            "extension" => "vnd.japannet-setstore-wakeup",
            "type" => "application/vnd.japannet-setstore-wakeup",
            "Reference" => "[Jun_Yoshitake]"
        ],
        [
            "extension" => "vnd.japannet-verification",
            "type" => "application/vnd.japannet-verification",
            "Reference" => "[Jun_Yoshitake]"
        ],
        [
            "extension" => "vnd.japannet-verification-wakeup",
            "type" => "application/vnd.japannet-verification-wakeup",
            "Reference" => "[Kiyofusa_Fujii]"
        ],
        [
            "extension" => "vnd.jcp.javame.midlet-rms",
            "type" => "application/vnd.jcp.javame.midlet-rms",
            "Reference" => "[Mikhail_Gorshenev]"
        ],
        [
            "extension" => "vnd.jisp",
            "type" => "application/vnd.jisp",
            "Reference" => "[Sebastiaan_Deckers]"
        ],
        [
            "extension" => "vnd.joost.joda-archive",
            "type" => "application/vnd.joost.joda-archive",
            "Reference" => "[Joost]"
        ],
        [
            "extension" => "vnd.jsk.isdn-ngn",
            "type" => "application/vnd.jsk.isdn-ngn",
            "Reference" => "[Yokoyama_Kiyonobu]"
        ],
        [
            "extension" => "vnd.kahootz",
            "type" => "application/vnd.kahootz",
            "Reference" => "[Tim_Macdonald]"
        ],
        [
            "extension" => "vnd.kde.karbon",
            "type" => "application/vnd.kde.karbon",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kde.kchart",
            "type" => "application/vnd.kde.kchart",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kde.kformula",
            "type" => "application/vnd.kde.kformula",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kde.kivio",
            "type" => "application/vnd.kde.kivio",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kde.kontour",
            "type" => "application/vnd.kde.kontour",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kde.kpresenter",
            "type" => "application/vnd.kde.kpresenter",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kde.kspread",
            "type" => "application/vnd.kde.kspread",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kde.kword",
            "type" => "application/vnd.kde.kword",
            "Reference" => "[David_Faure]"
        ],
        [
            "extension" => "vnd.kenameaapp",
            "type" => "application/vnd.kenameaapp",
            "Reference" => "[Dirk_DiGiorgio-Haag]"
        ],
        [
            "extension" => "vnd.kidspiration",
            "type" => "application/vnd.kidspiration",
            "Reference" => "[Jack_Bennett]"
        ],
        [
            "extension" => "vnd.Kinar",
            "type" => "application/vnd.Kinar",
            "Reference" => "[Hemant_Thakkar]"
        ],
        [
            "extension" => "vnd.koan",
            "type" => "application/vnd.koan",
            "Reference" => "[Pete_Cole]"
        ],
        [
            "extension" => "vnd.kodak-descriptor",
            "type" => "application/vnd.kodak-descriptor",
            "Reference" => "[Michael_J._Donahue]"
        ],
        [
            "extension" => "vnd.las",
            "type" => "application/vnd.las",
            "Reference" => "[NCGIS][Bryan_Blank]"
        ],
        [
            "extension" => "vnd.las.las+json",
            "type" => "application/vnd.las.las+json",
            "Reference" => "[Rob_Bailey]"
        ],
        [
            "extension" => "vnd.las.las+xml",
            "type" => "application/vnd.las.las+xml",
            "Reference" => "[Rob_Bailey]"
        ],
        [
            "extension" => "vnd.laszip",
            "type" => "application/vnd.laszip",
            "Reference" => "[NCGIS][Bryan_Blank]"
        ],
        [
            "extension" => "vnd.leap+json",
            "type" => "application/vnd.leap+json",
            "Reference" => "[Mark_C_Fralick]"
        ],
        [
            "extension" => "vnd.liberty-request+xml",
            "type" => "application/vnd.liberty-request+xml",
            "Reference" => "[Brett_McDowell]"
        ],
        [
            "extension" => "vnd.llamagraphics.life-balance.desktop",
            "type" => "application/vnd.llamagraphics.life-balance.desktop",
            "Reference" => "[Catherine_E._White]"
        ],
        [
            "extension" => "vnd.llamagraphics.life-balance.exchange+xml",
            "type" => "application/vnd.llamagraphics.life-balance.exchange+xml",
            "Reference" => "[Catherine_E._White]"
        ],
        [
            "extension" => "vnd.logipipe.circuit+zip",
            "type" => "application/vnd.logipipe.circuit+zip",
            "Reference" => "[Victor_Kuchynsky]"
        ],
        [
            "extension" => "vnd.loom",
            "type" => "application/vnd.loom",
            "Reference" => "[Sten_Linnarsson]"
        ],
        [
            "extension" => "vnd.lotus-1-2-3",
            "type" => "application/vnd.lotus-1-2-3",
            "Reference" => "[Paul_Wattenberger]"
        ],
        [
            "extension" => "vnd.lotus-approach",
            "type" => "application/vnd.lotus-approach",
            "Reference" => "[Paul_Wattenberger]"
        ],
        [
            "extension" => "vnd.lotus-freelance",
            "type" => "application/vnd.lotus-freelance",
            "Reference" => "[Paul_Wattenberger]"
        ],
        [
            "extension" => "vnd.lotus-notes",
            "type" => "application/vnd.lotus-notes",
            "Reference" => "[Michael_Laramie]"
        ],
        [
            "extension" => "vnd.lotus-organizer",
            "type" => "application/vnd.lotus-organizer",
            "Reference" => "[Paul_Wattenberger]"
        ],
        [
            "extension" => "vnd.lotus-screencam",
            "type" => "application/vnd.lotus-screencam",
            "Reference" => "[Paul_Wattenberger]"
        ],
        [
            "extension" => "vnd.lotus-wordpro",
            "type" => "application/vnd.lotus-wordpro",
            "Reference" => "[Paul_Wattenberger]"
        ],
        [
            "extension" => "vnd.macports.portpkg",
            "type" => "application/vnd.macports.portpkg",
            "Reference" => "[James_Berry]"
        ],
        [
            "extension" => "vnd.mapbox-vector-tile",
            "type" => "application/vnd.mapbox-vector-tile",
            "Reference" => "[Blake_Thompson]"
        ],
        [
            "extension" => "vnd.marlin.drm.actiontoken+xml",
            "type" => "application/vnd.marlin.drm.actiontoken+xml",
            "Reference" => "[Gary_Ellison]"
        ],
        [
            "extension" => "vnd.marlin.drm.conftoken+xml",
            "type" => "application/vnd.marlin.drm.conftoken+xml",
            "Reference" => "[Gary_Ellison]"
        ],
        [
            "extension" => "vnd.marlin.drm.license+xml",
            "type" => "application/vnd.marlin.drm.license+xml",
            "Reference" => "[Gary_Ellison]"
        ],
        [
            "extension" => "vnd.marlin.drm.mdcf",
            "type" => "application/vnd.marlin.drm.mdcf",
            "Reference" => "[Gary_Ellison]"
        ],
        [
            "extension" => "vnd.mason+json",
            "type" => "application/vnd.mason+json",
            "Reference" => "[Jorn_Wildt]"
        ],
        [
            "extension" => "vnd.maxmind.maxmind-db",
            "type" => "application/vnd.maxmind.maxmind-db",
            "Reference" => "[William_Stevenson]"
        ],
        [
            "extension" => "vnd.mcd",
            "type" => "application/vnd.mcd",
            "Reference" => "[Tadashi_Gotoh]"
        ],
        [
            "extension" => "vnd.medcalcdata",
            "type" => "application/vnd.medcalcdata",
            "Reference" => "[Frank_Schoonjans]"
        ],
        [
            "extension" => "vnd.mediastation.cdkey",
            "type" => "application/vnd.mediastation.cdkey",
            "Reference" => "[Henry_Flurry]"
        ],
        [
            "extension" => "vnd.meridian-slingshot",
            "type" => "application/vnd.meridian-slingshot",
            "Reference" => "[Eric_Wedel]"
        ],
        [
            "extension" => "vnd.MFER",
            "type" => "application/vnd.MFER",
            "Reference" => "[Masaaki_Hirai]"
        ],
        [
            "extension" => "vnd.mfmp",
            "type" => "application/vnd.mfmp",
            "Reference" => "[Yukari_Ikeda]"
        ],
        [
            "extension" => "vnd.micro+json",
            "type" => "application/vnd.micro+json",
            "Reference" => "[Dali_Zheng]"
        ],
        [
            "extension" => "vnd.micrografx.flo",
            "type" => "application/vnd.micrografx.flo",
            "Reference" => "[Joe_Prevo]"
        ],
        [
            "extension" => "vnd.micrografx.igx",
            "type" => "application/vnd.micrografx.igx",
            "Reference" => "[Joe_Prevo]"
        ],
        [
            "extension" => "vnd.microsoft.portable-executable",
            "type" => "application/vnd.microsoft.portable-executable",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.microsoft.windows.thumbnail-cache",
            "type" => "application/vnd.microsoft.windows.thumbnail-cache",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.miele+json",
            "type" => "application/vnd.miele+json",
            "Reference" => "[Nils_Langhammer]"
        ],
        [
            "extension" => "vnd.mif",
            "type" => "application/vnd.mif",
            "Reference" => "[Mike_Wexler]"
        ],
        [
            "extension" => "vnd.minisoft-hp3000-save",
            "type" => "application/vnd.minisoft-hp3000-save",
            "Reference" => "[Chris_Bartram]"
        ],
        [
            "extension" => "vnd.mitsubishi.misty-guard.trustweb",
            "type" => "application/vnd.mitsubishi.misty-guard.trustweb",
            "Reference" => "[Tanaka]"
        ],
        [
            "extension" => "vnd.Mobius.DAF",
            "type" => "application/vnd.Mobius.DAF",
            "Reference" => "[Allen_K._Kabayama]"
        ],
        [
            "extension" => "vnd.Mobius.DIS",
            "type" => "application/vnd.Mobius.DIS",
            "Reference" => "[Allen_K._Kabayama]"
        ],
        [
            "extension" => "vnd.Mobius.MBK",
            "type" => "application/vnd.Mobius.MBK",
            "Reference" => "[Alex_Devasia]"
        ],
        [
            "extension" => "vnd.Mobius.MQY",
            "type" => "application/vnd.Mobius.MQY",
            "Reference" => "[Alex_Devasia]"
        ],
        [
            "extension" => "vnd.Mobius.MSL",
            "type" => "application/vnd.Mobius.MSL",
            "Reference" => "[Allen_K._Kabayama]"
        ],
        [
            "extension" => "vnd.Mobius.PLC",
            "type" => "application/vnd.Mobius.PLC",
            "Reference" => "[Allen_K._Kabayama]"
        ],
        [
            "extension" => "vnd.Mobius.TXF",
            "type" => "application/vnd.Mobius.TXF",
            "Reference" => "[Allen_K._Kabayama]"
        ],
        [
            "extension" => "vnd.mophun.application",
            "type" => "application/vnd.mophun.application",
            "Reference" => "[Bjorn_Wennerstrom]"
        ],
        [
            "extension" => "vnd.mophun.certificate",
            "type" => "application/vnd.mophun.certificate",
            "Reference" => "[Bjorn_Wennerstrom]"
        ],
        [
            "extension" => "vnd.motorola.flexsuite",
            "type" => "application/vnd.motorola.flexsuite",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.motorola.flexsuite.adsi",
            "type" => "application/vnd.motorola.flexsuite.adsi",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.motorola.flexsuite.fis",
            "type" => "application/vnd.motorola.flexsuite.fis",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.motorola.flexsuite.gotap",
            "type" => "application/vnd.motorola.flexsuite.gotap",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.motorola.flexsuite.kmr",
            "type" => "application/vnd.motorola.flexsuite.kmr",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.motorola.flexsuite.ttc",
            "type" => "application/vnd.motorola.flexsuite.ttc",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.motorola.flexsuite.wem",
            "type" => "application/vnd.motorola.flexsuite.wem",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.motorola.iprm",
            "type" => "application/vnd.motorola.iprm",
            "Reference" => "[Rafie_Shamsaasef]"
        ],
        [
            "extension" => "vnd.mozilla.xul+xml",
            "type" => "application/vnd.mozilla.xul+xml",
            "Reference" => "[Braden_N_McDaniel]"
        ],
        [
            "extension" => "vnd.ms-artgalry",
            "type" => "application/vnd.ms-artgalry",
            "Reference" => "[Dean_Slawson]"
        ],
        [
            "extension" => "vnd.ms-asf",
            "type" => "application/vnd.ms-asf",
            "Reference" => "[Eric_Fleischman]"
        ],
        [
            "extension" => "vnd.ms-cab-compressed",
            "type" => "application/vnd.ms-cab-compressed",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.ms-3mfdocument",
            "type" => "application/vnd.ms-3mfdocument",
            "Reference" => "[Shawn_Maloney]"
        ],
        [
            "extension" => "vnd.ms-excel",
            "type" => "application/vnd.ms-excel",
            "Reference" => "[Sukvinder_S._Gill]"
        ],
        [
            "extension" => "vnd.ms-excel.addin.macroEnabled.12",
            "type" => "application/vnd.ms-excel.addin.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-excel.sheet.binary.macroEnabled.12",
            "type" => "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-excel.sheet.macroEnabled.12",
            "type" => "application/vnd.ms-excel.sheet.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-excel.template.macroEnabled.12",
            "type" => "application/vnd.ms-excel.template.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-fontobject",
            "type" => "application/vnd.ms-fontobject",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.ms-htmlhelp",
            "type" => "application/vnd.ms-htmlhelp",
            "Reference" => "[Anatoly_Techtonik]"
        ],
        [
            "extension" => "vnd.ms-ims",
            "type" => "application/vnd.ms-ims",
            "Reference" => "[Eric_Ledoux]"
        ],
        [
            "extension" => "vnd.ms-lrm",
            "type" => "application/vnd.ms-lrm",
            "Reference" => "[Eric_Ledoux]"
        ],
        [
            "extension" => "vnd.ms-office.activeX+xml",
            "type" => "application/vnd.ms-office.activeX+xml",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-officetheme",
            "type" => "application/vnd.ms-officetheme",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-playready.initiator+xml",
            "type" => "application/vnd.ms-playready.initiator+xml",
            "Reference" => "[Daniel_Schneider]"
        ],
        [
            "extension" => "vnd.ms-powerpoint",
            "type" => "application/vnd.ms-powerpoint",
            "Reference" => "[Sukvinder_S._Gill]"
        ],
        [
            "extension" => "vnd.ms-powerpoint.addin.macroEnabled.12",
            "type" => "application/vnd.ms-powerpoint.addin.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-powerpoint.presentation.macroEnabled.12",
            "type" => "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-powerpoint.slide.macroEnabled.12",
            "type" => "application/vnd.ms-powerpoint.slide.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-powerpoint.slideshow.macroEnabled.12",
            "type" => "application/vnd.ms-powerpoint.slideshow.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-powerpoint.template.macroEnabled.12",
            "type" => "application/vnd.ms-powerpoint.template.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-PrintDeviceCapabilities+xml",
            "type" => "application/vnd.ms-PrintDeviceCapabilities+xml",
            "Reference" => "[Justin_Hutchings]"
        ],
        [
            "extension" => "vnd.ms-PrintSchemaTicket+xml",
            "type" => "application/vnd.ms-PrintSchemaTicket+xml",
            "Reference" => "[Justin_Hutchings]"
        ],
        [
            "extension" => "vnd.ms-project",
            "type" => "application/vnd.ms-project",
            "Reference" => "[Sukvinder_S._Gill]"
        ],
        [
            "extension" => "vnd.ms-tnef",
            "type" => "application/vnd.ms-tnef",
            "Reference" => "[Sukvinder_S._Gill]"
        ],
        [
            "extension" => "vnd.ms-windows.devicepairing",
            "type" => "application/vnd.ms-windows.devicepairing",
            "Reference" => "[Justin_Hutchings]"
        ],
        [
            "extension" => "vnd.ms-windows.nwprinting.oob",
            "type" => "application/vnd.ms-windows.nwprinting.oob",
            "Reference" => "[Justin_Hutchings]"
        ],
        [
            "extension" => "vnd.ms-windows.printerpairing",
            "type" => "application/vnd.ms-windows.printerpairing",
            "Reference" => "[Justin_Hutchings]"
        ],
        [
            "extension" => "vnd.ms-windows.wsd.oob",
            "type" => "application/vnd.ms-windows.wsd.oob",
            "Reference" => "[Justin_Hutchings]"
        ],
        [
            "extension" => "vnd.ms-wmdrm.lic-chlg-req",
            "type" => "application/vnd.ms-wmdrm.lic-chlg-req",
            "Reference" => "[Kevin_Lau]"
        ],
        [
            "extension" => "vnd.ms-wmdrm.lic-resp",
            "type" => "application/vnd.ms-wmdrm.lic-resp",
            "Reference" => "[Kevin_Lau]"
        ],
        [
            "extension" => "vnd.ms-wmdrm.meter-chlg-req",
            "type" => "application/vnd.ms-wmdrm.meter-chlg-req",
            "Reference" => "[Kevin_Lau]"
        ],
        [
            "extension" => "vnd.ms-wmdrm.meter-resp",
            "type" => "application/vnd.ms-wmdrm.meter-resp",
            "Reference" => "[Kevin_Lau]"
        ],
        [
            "extension" => "vnd.ms-word.document.macroEnabled.12",
            "type" => "application/vnd.ms-word.document.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-word.template.macroEnabled.12",
            "type" => "application/vnd.ms-word.template.macroEnabled.12",
            "Reference" => "[Chris_Rae]"
        ],
        [
            "extension" => "vnd.ms-works",
            "type" => "application/vnd.ms-works",
            "Reference" => "[Sukvinder_S._Gill]"
        ],
        [
            "extension" => "vnd.ms-wpl",
            "type" => "application/vnd.ms-wpl",
            "Reference" => "[Dan_Plastina]"
        ],
        [
            "extension" => "vnd.ms-xpsdocument",
            "type" => "application/vnd.ms-xpsdocument",
            "Reference" => "[Jesse_McGatha]"
        ],
        [
            "extension" => "vnd.msa-disk-image",
            "type" => "application/vnd.msa-disk-image",
            "Reference" => "[Thomas_Huth]"
        ],
        [
            "extension" => "vnd.mseq",
            "type" => "application/vnd.mseq",
            "Reference" => "[Gwenael_Le_Bodic]"
        ],
        [
            "extension" => "vnd.msign",
            "type" => "application/vnd.msign",
            "Reference" => "[Malte_Borcherding]"
        ],
        [
            "extension" => "vnd.multiad.creator",
            "type" => "application/vnd.multiad.creator",
            "Reference" => "[Steve_Mills]"
        ],
        [
            "extension" => "vnd.multiad.creator.cif",
            "type" => "application/vnd.multiad.creator.cif",
            "Reference" => "[Steve_Mills]"
        ],
        [
            "extension" => "vnd.musician",
            "type" => "application/vnd.musician",
            "Reference" => "[Greg_Adams]"
        ],
        [
            "extension" => "vnd.music-niff",
            "type" => "application/vnd.music-niff",
            "Reference" => "[Tim_Butler]"
        ],
        [
            "extension" => "vnd.muvee.style",
            "type" => "application/vnd.muvee.style",
            "Reference" => "[Chandrashekhara_Anantharamu]"
        ],
        [
            "extension" => "vnd.mynfc",
            "type" => "application/vnd.mynfc",
            "Reference" => "[Franck_Lefevre]"
        ],
        [
            "extension" => "vnd.ncd.control",
            "type" => "application/vnd.ncd.control",
            "Reference" => "[Lauri_Tarkkala]"
        ],
        [
            "extension" => "vnd.ncd.reference",
            "type" => "application/vnd.ncd.reference",
            "Reference" => "[Lauri_Tarkkala]"
        ],
        [
            "extension" => "vnd.nearst.inv+json",
            "type" => "application/vnd.nearst.inv+json",
            "Reference" => "[Thomas_Schoffelen]"
        ],
        [
            "extension" => "vnd.nervana",
            "type" => "application/vnd.nervana",
            "Reference" => "[Steve_Judkins]"
        ],
        [
            "extension" => "vnd.netfpx",
            "type" => "application/vnd.netfpx",
            "Reference" => "[Andy_Mutz]"
        ],
        [
            "extension" => "vnd.neurolanguage.nlu",
            "type" => "application/vnd.neurolanguage.nlu",
            "Reference" => "[Dan_DuFeu]"
        ],
        [
            "extension" => "vnd.nimn",
            "type" => "application/vnd.nimn",
            "Reference" => "[Amit_Kumar_Gupta]"
        ],
        [
            "extension" => "vnd.nintendo.snes.rom",
            "type" => "application/vnd.nintendo.snes.rom",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.nintendo.nitro.rom",
            "type" => "application/vnd.nintendo.nitro.rom",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.nitf",
            "type" => "application/vnd.nitf",
            "Reference" => "[Steve_Rogan]"
        ],
        [
            "extension" => "vnd.noblenet-directory",
            "type" => "application/vnd.noblenet-directory",
            "Reference" => "[Monty_Solomon]"
        ],
        [
            "extension" => "vnd.noblenet-sealer",
            "type" => "application/vnd.noblenet-sealer",
            "Reference" => "[Monty_Solomon]"
        ],
        [
            "extension" => "vnd.noblenet-web",
            "type" => "application/vnd.noblenet-web",
            "Reference" => "[Monty_Solomon]"
        ],
        [
            "extension" => "vnd.nokia.catalogs",
            "type" => "application/vnd.nokia.catalogs",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.conml+wbxml",
            "type" => "application/vnd.nokia.conml+wbxml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.conml+xml",
            "type" => "application/vnd.nokia.conml+xml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.iptv.config+xml",
            "type" => "application/vnd.nokia.iptv.config+xml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.iSDS-radio-presets",
            "type" => "application/vnd.nokia.iSDS-radio-presets",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.landmark+wbxml",
            "type" => "application/vnd.nokia.landmark+wbxml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.landmark+xml",
            "type" => "application/vnd.nokia.landmark+xml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.landmarkcollection+xml",
            "type" => "application/vnd.nokia.landmarkcollection+xml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.ncd",
            "type" => "application/vnd.nokia.ncd",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.n-gage.ac+xml",
            "type" => "application/vnd.nokia.n-gage.ac+xml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.n-gage.data",
            "type" => "application/vnd.nokia.n-gage.data",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.n-gage.symbian.install - OBSOLETE; no replacement given",
            "type" => "application/vnd.nokia.n-gage.symbian.install",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.pcd+wbxml",
            "type" => "application/vnd.nokia.pcd+wbxml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.pcd+xml",
            "type" => "application/vnd.nokia.pcd+xml",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.radio-preset",
            "type" => "application/vnd.nokia.radio-preset",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nokia.radio-presets",
            "type" => "application/vnd.nokia.radio-presets",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.novadigm.EDM",
            "type" => "application/vnd.novadigm.EDM",
            "Reference" => "[Janine_Swenson]"
        ],
        [
            "extension" => "vnd.novadigm.EDX",
            "type" => "application/vnd.novadigm.EDX",
            "Reference" => "[Janine_Swenson]"
        ],
        [
            "extension" => "vnd.novadigm.EXT",
            "type" => "application/vnd.novadigm.EXT",
            "Reference" => "[Janine_Swenson]"
        ],
        [
            "extension" => "vnd.ntt-local.content-share",
            "type" => "application/vnd.ntt-local.content-share",
            "Reference" => "[Akinori_Taya]"
        ],
        [
            "extension" => "vnd.ntt-local.file-transfer",
            "type" => "application/vnd.ntt-local.file-transfer",
            "Reference" => "[NTT-local]"
        ],
        [
            "extension" => "vnd.ntt-local.ogw_remote-access",
            "type" => "application/vnd.ntt-local.ogw_remote-access",
            "Reference" => "[NTT-local]"
        ],
        [
            "extension" => "vnd.ntt-local.sip-ta_remote",
            "type" => "application/vnd.ntt-local.sip-ta_remote",
            "Reference" => "[NTT-local]"
        ],
        [
            "extension" => "vnd.ntt-local.sip-ta_tcp_stream",
            "type" => "application/vnd.ntt-local.sip-ta_tcp_stream",
            "Reference" => "[NTT-local]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.chart",
            "type" => "application/vnd.oasis.opendocument.chart",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.chart-template",
            "type" => "application/vnd.oasis.opendocument.chart-template",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.database",
            "type" => "application/vnd.oasis.opendocument.database",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.formula",
            "type" => "application/vnd.oasis.opendocument.formula",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.formula-template",
            "type" => "application/vnd.oasis.opendocument.formula-template",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.graphics",
            "type" => "application/vnd.oasis.opendocument.graphics",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.graphics-template",
            "type" => "application/vnd.oasis.opendocument.graphics-template",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.image",
            "type" => "application/vnd.oasis.opendocument.image",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.image-template",
            "type" => "application/vnd.oasis.opendocument.image-template",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.presentation",
            "type" => "application/vnd.oasis.opendocument.presentation",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.presentation-template",
            "type" => "application/vnd.oasis.opendocument.presentation-template",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.spreadsheet",
            "type" => "application/vnd.oasis.opendocument.spreadsheet",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.spreadsheet-template",
            "type" => "application/vnd.oasis.opendocument.spreadsheet-template",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.text",
            "type" => "application/vnd.oasis.opendocument.text",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.text-master",
            "type" => "application/vnd.oasis.opendocument.text-master",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.text-template",
            "type" => "application/vnd.oasis.opendocument.text-template",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.oasis.opendocument.text-web",
            "type" => "application/vnd.oasis.opendocument.text-web",
            "Reference" => "[Svante_Schubert][OASIS]"
        ],
        [
            "extension" => "vnd.obn",
            "type" => "application/vnd.obn",
            "Reference" => "[Matthias_Hessling]"
        ],
        [
            "extension" => "vnd.ocf+cbor",
            "type" => "application/vnd.ocf+cbor",
            "Reference" => "[Michael_Koster]"
        ],
        [
            "extension" => "vnd.oci.image.manifest.v1+json",
            "type" => "application/vnd.oci.image.manifest.v1+json",
            "Reference" => "[Steven_Lasker]"
        ],
        [
            "extension" => "vnd.oftn.l10n+json",
            "type" => "application/vnd.oftn.l10n+json",
            "Reference" => "[Eli_Grey]"
        ],
        [
            "extension" => "vnd.oipf.contentaccessdownload+xml",
            "type" => "application/vnd.oipf.contentaccessdownload+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.contentaccessstreaming+xml",
            "type" => "application/vnd.oipf.contentaccessstreaming+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.cspg-hexbinary",
            "type" => "application/vnd.oipf.cspg-hexbinary",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.dae.svg+xml",
            "type" => "application/vnd.oipf.dae.svg+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.dae.xhtml+xml",
            "type" => "application/vnd.oipf.dae.xhtml+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.mippvcontrolmessage+xml",
            "type" => "application/vnd.oipf.mippvcontrolmessage+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.pae.gem",
            "type" => "application/vnd.oipf.pae.gem",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.spdiscovery+xml",
            "type" => "application/vnd.oipf.spdiscovery+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.spdlist+xml",
            "type" => "application/vnd.oipf.spdlist+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.ueprofile+xml",
            "type" => "application/vnd.oipf.ueprofile+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.oipf.userprofile+xml",
            "type" => "application/vnd.oipf.userprofile+xml",
            "Reference" => "[Claire_DEsclercs]"
        ],
        [
            "extension" => "vnd.olpc-sugar",
            "type" => "application/vnd.olpc-sugar",
            "Reference" => "[John_Palmieri]"
        ],
        [
            "extension" => "vnd.oma.bcast.associated-procedure-parameter+xml",
            "type" => "application/vnd.oma.bcast.associated-procedure-parameter+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.drm-trigger+xml",
            "type" => "application/vnd.oma.bcast.drm-trigger+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.imd+xml",
            "type" => "application/vnd.oma.bcast.imd+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.ltkm",
            "type" => "application/vnd.oma.bcast.ltkm",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.notification+xml",
            "type" => "application/vnd.oma.bcast.notification+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.provisioningtrigger",
            "type" => "application/vnd.oma.bcast.provisioningtrigger",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.sgboot",
            "type" => "application/vnd.oma.bcast.sgboot",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.sgdd+xml",
            "type" => "application/vnd.oma.bcast.sgdd+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.sgdu",
            "type" => "application/vnd.oma.bcast.sgdu",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.simple-symbol-container",
            "type" => "application/vnd.oma.bcast.simple-symbol-container",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.smartcard-trigger+xml",
            "type" => "application/vnd.oma.bcast.smartcard-trigger+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.sprov+xml",
            "type" => "application/vnd.oma.bcast.sprov+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.bcast.stkm",
            "type" => "application/vnd.oma.bcast.stkm",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.cab-address-book+xml",
            "type" => "application/vnd.oma.cab-address-book+xml",
            "Reference" => "[Hao_Wang][OMA]"
        ],
        [
            "extension" => "vnd.oma.cab-feature-handler+xml",
            "type" => "application/vnd.oma.cab-feature-handler+xml",
            "Reference" => "[Hao_Wang][OMA]"
        ],
        [
            "extension" => "vnd.oma.cab-pcc+xml",
            "type" => "application/vnd.oma.cab-pcc+xml",
            "Reference" => "[Hao_Wang][OMA]"
        ],
        [
            "extension" => "vnd.oma.cab-subs-invite+xml",
            "type" => "application/vnd.oma.cab-subs-invite+xml",
            "Reference" => "[Hao_Wang][OMA]"
        ],
        [
            "extension" => "vnd.oma.cab-user-prefs+xml",
            "type" => "application/vnd.oma.cab-user-prefs+xml",
            "Reference" => "[Hao_Wang][OMA]"
        ],
        [
            "extension" => "vnd.oma.dcd",
            "type" => "application/vnd.oma.dcd",
            "Reference" => "[Avi_Primo][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.dcdc",
            "type" => "application/vnd.oma.dcdc",
            "Reference" => "[Avi_Primo][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.dd2+xml",
            "type" => "application/vnd.oma.dd2+xml",
            "Reference" => "[Jun_Sato][Open_Mobile_Alliance_BAC_DLDRM_Working_Group]"
        ],
        [
            "extension" => "vnd.oma.drm.risd+xml",
            "type" => "application/vnd.oma.drm.risd+xml",
            "Reference" => "[Uwe_Rauschenbach][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.group-usage-list+xml",
            "type" => "application/vnd.oma.group-usage-list+xml",
            "Reference" => "[Sean_Kelley][OMA_Presence_and_Availability_PAG_Working_Group]"
        ],
        [
            "extension" => "vnd.oma.lwm2m+cbor",
            "type" => "application/vnd.oma.lwm2m+cbor",
            "Reference" => "[Open_Mobile_Naming_Authority][John_Mudge]"
        ],
        [
            "extension" => "vnd.oma.lwm2m+json",
            "type" => "application/vnd.oma.lwm2m+json",
            "Reference" => "[Open_Mobile_Naming_Authority][John_Mudge]"
        ],
        [
            "extension" => "vnd.oma.lwm2m+tlv",
            "type" => "application/vnd.oma.lwm2m+tlv",
            "Reference" => "[Open_Mobile_Naming_Authority][John_Mudge]"
        ],
        [
            "extension" => "vnd.oma.pal+xml",
            "type" => "application/vnd.oma.pal+xml",
            "Reference" => "[Brian_McColgan][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.poc.detailed-progress-report+xml",
            "type" => "application/vnd.oma.poc.detailed-progress-report+xml",
            "Reference" => "[OMA_Push_to_Talk_over_Cellular_POC_Working_Group]"
        ],
        [
            "extension" => "vnd.oma.poc.final-report+xml",
            "type" => "application/vnd.oma.poc.final-report+xml",
            "Reference" => "[OMA_Push_to_Talk_over_Cellular_POC_Working_Group]"
        ],
        [
            "extension" => "vnd.oma.poc.groups+xml",
            "type" => "application/vnd.oma.poc.groups+xml",
            "Reference" => "[Sean_Kelley][OMA_Push_to_Talk_over_Cellular_POC_Working_Group]"
        ],
        [
            "extension" => "vnd.oma.poc.invocation-descriptor+xml",
            "type" => "application/vnd.oma.poc.invocation-descriptor+xml",
            "Reference" => "[OMA_Push_to_Talk_over_Cellular_POC_Working_Group]"
        ],
        [
            "extension" => "vnd.oma.poc.optimized-progress-report+xml",
            "type" => "application/vnd.oma.poc.optimized-progress-report+xml",
            "Reference" => "[OMA_Push_to_Talk_over_Cellular_POC_Working_Group]"
        ],
        [
            "extension" => "vnd.oma.push",
            "type" => "application/vnd.oma.push",
            "Reference" => "[Bryan_Sullivan][OMA]"
        ],
        [
            "extension" => "vnd.oma.scidm.messages+xml",
            "type" => "application/vnd.oma.scidm.messages+xml",
            "Reference" => "[Wenjun_Zeng][Open_Mobile_Naming_Authority]"
        ],
        [
            "extension" => "vnd.oma.xcap-directory+xml",
            "type" => "application/vnd.oma.xcap-directory+xml",
            "Reference" => "[Sean_Kelley][OMA_Presence_and_Availability_PAG_Working_Group]"
        ],
        [
            "extension" => "vnd.omads-email+xml",
            "type" => "application/vnd.omads-email+xml",
            "Reference" => "[OMA_Data_Synchronization_Working_Group]"
        ],
        [
            "extension" => "vnd.omads-file+xml",
            "type" => "application/vnd.omads-file+xml",
            "Reference" => "[OMA_Data_Synchronization_Working_Group]"
        ],
        [
            "extension" => "vnd.omads-folder+xml",
            "type" => "application/vnd.omads-folder+xml",
            "Reference" => "[OMA_Data_Synchronization_Working_Group]"
        ],
        [
            "extension" => "vnd.omaloc-supl-init",
            "type" => "application/vnd.omaloc-supl-init",
            "Reference" => "[Julien_Grange]"
        ],
        [
            "extension" => "vnd.oma-scws-config",
            "type" => "application/vnd.oma-scws-config",
            "Reference" => "[Ilan_Mahalal]"
        ],
        [
            "extension" => "vnd.oma-scws-http-request",
            "type" => "application/vnd.oma-scws-http-request",
            "Reference" => "[Ilan_Mahalal]"
        ],
        [
            "extension" => "vnd.oma-scws-http-response",
            "type" => "application/vnd.oma-scws-http-response",
            "Reference" => "[Ilan_Mahalal]"
        ],
        [
            "extension" => "vnd.onepager",
            "type" => "application/vnd.onepager",
            "Reference" => "[Nathan_Black]"
        ],
        [
            "extension" => "vnd.onepagertamp",
            "type" => "application/vnd.onepagertamp",
            "Reference" => "[Nathan_Black]"
        ],
        [
            "extension" => "vnd.onepagertamx",
            "type" => "application/vnd.onepagertamx",
            "Reference" => "[Nathan_Black]"
        ],
        [
            "extension" => "vnd.onepagertat",
            "type" => "application/vnd.onepagertat",
            "Reference" => "[Nathan_Black]"
        ],
        [
            "extension" => "vnd.onepagertatp",
            "type" => "application/vnd.onepagertatp",
            "Reference" => "[Nathan_Black]"
        ],
        [
            "extension" => "vnd.onepagertatx",
            "type" => "application/vnd.onepagertatx",
            "Reference" => "[Nathan_Black]"
        ],
        [
            "extension" => "vnd.openblox.game-binary",
            "type" => "application/vnd.openblox.game-binary",
            "Reference" => "[Mark_Otaris]"
        ],
        [
            "extension" => "vnd.openblox.game+xml",
            "type" => "application/vnd.openblox.game+xml",
            "Reference" => "[Mark_Otaris]"
        ],
        [
            "extension" => "vnd.openeye.oeb",
            "type" => "application/vnd.openeye.oeb",
            "Reference" => "[Craig_Bruce]"
        ],
        [
            "extension" => "vnd.openstreetmap.data+xml",
            "type" => "application/vnd.openstreetmap.data+xml",
            "Reference" => "[Paul_Norman]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.custom-properties+xml",
            "type" => "application/vnd.openxmlformats-officedocument.custom-properties+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.customXmlProperties+xml",
            "type" => "application/vnd.openxmlformats-officedocument.customXmlProperties+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.drawing+xml",
            "type" => "application/vnd.openxmlformats-officedocument.drawing+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.drawingml.chart+xml",
            "type" => "application/vnd.openxmlformats-officedocument.drawingml.chart+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.drawingml.chartshapes+xml",
            "type" => "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.drawingml.diagramColors+xml",
            "type" => "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.drawingml.diagramData+xml",
            "type" => "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml",
            "type" => "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml",
            "type" => "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.extended-properties+xml",
            "type" => "application/vnd.openxmlformats-officedocument.extended-properties+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.commentAuthors+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.commentAuthors+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.comments+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.comments+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.handoutMaster+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.handoutMaster+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.notesMaster+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.notesMaster+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.notesSlide+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.notesSlide+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.presentation",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.presentation.main+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.presProps+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.presProps+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.slide",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.slide",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.slide+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.slide+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.slideLayout+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.slideMaster+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.slideshow",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.slideUpdateInfo+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.slideUpdateInfo+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.tableStyles+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.tableStyles+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.tags+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.tags+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.template",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.template",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.template.main+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.presentationml.viewProps+xml",
            "type" => "application/vnd.openxmlformats-officedocument.presentationml.viewProps+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.connections+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.table+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.template",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
            "type" => "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.theme+xml",
            "type" => "application/vnd.openxmlformats-officedocument.theme+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.themeOverride+xml",
            "type" => "application/vnd.openxmlformats-officedocument.themeOverride+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.vmlDrawing",
            "type" => "application/vnd.openxmlformats-officedocument.vmlDrawing",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.comments+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.document",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.footer+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.settings+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.styles+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.template",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-officedocument.wordprocessingml.webSettings+xml",
            "type" => "application/vnd.openxmlformats-officedocument.wordprocessingml.webSettings+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-package.core-properties+xml",
            "type" => "application/vnd.openxmlformats-package.core-properties+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-package.digital-signature-xmlsignature+xml",
            "type" => "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.openxmlformats-package.relationships+xml",
            "type" => "application/vnd.openxmlformats-package.relationships+xml",
            "Reference" => "[Makoto_Murata]"
        ],
        [
            "extension" => "vnd.oracle.resource+json",
            "type" => "application/vnd.oracle.resource+json",
            "Reference" => "[Ning_Dong]"
        ],
        [
            "extension" => "vnd.orange.indata",
            "type" => "application/vnd.orange.indata",
            "Reference" => "[CHATRAS_Bruno]"
        ],
        [
            "extension" => "vnd.osa.netdeploy",
            "type" => "application/vnd.osa.netdeploy",
            "Reference" => "[Steven_Klos]"
        ],
        [
            "extension" => "vnd.osgeo.mapguide.package",
            "type" => "application/vnd.osgeo.mapguide.package",
            "Reference" => "[Jason_Birch]"
        ],
        [
            "extension" => "vnd.osgi.bundle",
            "type" => "application/vnd.osgi.bundle",
            "Reference" => "[Peter_Kriens]"
        ],
        [
            "extension" => "vnd.osgi.dp",
            "type" => "application/vnd.osgi.dp",
            "Reference" => "[Peter_Kriens]"
        ],
        [
            "extension" => "vnd.osgi.subsystem",
            "type" => "application/vnd.osgi.subsystem",
            "Reference" => "[Peter_Kriens]"
        ],
        [
            "extension" => "vnd.otps.ct-kip+xml",
            "type" => "application/vnd.otps.ct-kip+xml",
            "Reference" => "[Magnus_Nystrom]"
        ],
        [
            "extension" => "vnd.oxli.countgraph",
            "type" => "application/vnd.oxli.countgraph",
            "Reference" => "[C._Titus_Brown]"
        ],
        [
            "extension" => "vnd.pagerduty+json",
            "type" => "application/vnd.pagerduty+json",
            "Reference" => "[Steve_Rice]"
        ],
        [
            "extension" => "vnd.palm",
            "type" => "application/vnd.palm",
            "Reference" => "[Gavin_Peacock]"
        ],
        [
            "extension" => "vnd.panoply",
            "type" => "application/vnd.panoply",
            "Reference" => "[Natarajan_Balasundara]"
        ],
        [
            "extension" => "vnd.paos.xml",
            "type" => "application/vnd.paos.xml",
            "Reference" => "[John_Kemp]"
        ],
        [
            "extension" => "vnd.patentdive",
            "type" => "application/vnd.patentdive",
            "Reference" => "[Christian_Trosclair]"
        ],
        [
            "extension" => "vnd.patientecommsdoc",
            "type" => "application/vnd.patientecommsdoc",
            "Reference" => "[Andrew_David_Kendall]"
        ],
        [
            "extension" => "vnd.pawaafile",
            "type" => "application/vnd.pawaafile",
            "Reference" => "[Prakash_Baskaran]"
        ],
        [
            "extension" => "vnd.pcos",
            "type" => "application/vnd.pcos",
            "Reference" => "[Slawomir_Lisznianski]"
        ],
        [
            "extension" => "vnd.pg.format",
            "type" => "application/vnd.pg.format",
            "Reference" => "[April_Gandert]"
        ],
        [
            "extension" => "vnd.pg.osasli",
            "type" => "application/vnd.pg.osasli",
            "Reference" => "[April_Gandert]"
        ],
        [
            "extension" => "vnd.piaccess.application-licence",
            "type" => "application/vnd.piaccess.application-licence",
            "Reference" => "[Lucas_Maneos]"
        ],
        [
            "extension" => "vnd.picsel",
            "type" => "application/vnd.picsel",
            "Reference" => "[Giuseppe_Naccarato]"
        ],
        [
            "extension" => "vnd.pmi.widget",
            "type" => "application/vnd.pmi.widget",
            "Reference" => "[Rhys_Lewis]"
        ],
        [
            "extension" => "vnd.poc.group-advertisement+xml",
            "type" => "application/vnd.poc.group-advertisement+xml",
            "Reference" => "[Sean_Kelley][OMA_Push_to_Talk_over_Cellular_POC_Working_Group]"
        ],
        [
            "extension" => "vnd.pocketlearn",
            "type" => "application/vnd.pocketlearn",
            "Reference" => "[Jorge_Pando]"
        ],
        [
            "extension" => "vnd.powerbuilder6",
            "type" => "application/vnd.powerbuilder6",
            "Reference" => "[David_Guy]"
        ],
        [
            "extension" => "vnd.powerbuilder6-s",
            "type" => "application/vnd.powerbuilder6-s",
            "Reference" => "[David_Guy]"
        ],
        [
            "extension" => "vnd.powerbuilder7",
            "type" => "application/vnd.powerbuilder7",
            "Reference" => "[Reed_Shilts]"
        ],
        [
            "extension" => "vnd.powerbuilder75",
            "type" => "application/vnd.powerbuilder75",
            "Reference" => "[Reed_Shilts]"
        ],
        [
            "extension" => "vnd.powerbuilder75-s",
            "type" => "application/vnd.powerbuilder75-s",
            "Reference" => "[Reed_Shilts]"
        ],
        [
            "extension" => "vnd.powerbuilder7-s",
            "type" => "application/vnd.powerbuilder7-s",
            "Reference" => "[Reed_Shilts]"
        ],
        [
            "extension" => "vnd.preminet",
            "type" => "application/vnd.preminet",
            "Reference" => "[Juoko_Tenhunen]"
        ],
        [
            "extension" => "vnd.previewsystems.box",
            "type" => "application/vnd.previewsystems.box",
            "Reference" => "[Roman_Smolgovsky]"
        ],
        [
            "extension" => "vnd.proteus.magazine",
            "type" => "application/vnd.proteus.magazine",
            "Reference" => "[Pete_Hoch]"
        ],
        [
            "extension" => "vnd.psfs",
            "type" => "application/vnd.psfs",
            "Reference" => "[Kristopher_Durski]"
        ],
        [
            "extension" => "vnd.publishare-delta-tree",
            "type" => "application/vnd.publishare-delta-tree",
            "Reference" => "[Oren_Ben-Kiki]"
        ],
        [
            "extension" => "vnd.pvi.ptid1",
            "type" => "application/vnd.pvi.ptid1",
            "Reference" => "[Charles_P._Lamb]"
        ],
        [
            "extension" => "vnd.pwg-multiplexed",
            "type" => "application/vnd.pwg-multiplexed",
            "Reference" => "[RFC3391]"
        ],
        [
            "extension" => "vnd.pwg-xhtml-print+xml",
            "type" => "application/vnd.pwg-xhtml-print+xml",
            "Reference" => "[Don_Wright]"
        ],
        [
            "extension" => "vnd.qualcomm.brew-app-res",
            "type" => "application/vnd.qualcomm.brew-app-res",
            "Reference" => "[Glenn_Forrester]"
        ],
        [
            "extension" => "vnd.quarantainenet",
            "type" => "application/vnd.quarantainenet",
            "Reference" => "[Casper_Joost_Eyckelhof]"
        ],
        [
            "extension" => "vnd.Quark.QuarkXPress",
            "type" => "application/vnd.Quark.QuarkXPress",
            "Reference" => "[Hannes_Scheidler]"
        ],
        [
            "extension" => "vnd.quobject-quoxdocument",
            "type" => "application/vnd.quobject-quoxdocument",
            "Reference" => "[Matthias_Ludwig]"
        ],
        [
            "extension" => "vnd.radisys.moml+xml",
            "type" => "application/vnd.radisys.moml+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-audit-conf+xml",
            "type" => "application/vnd.radisys.msml-audit-conf+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-audit-conn+xml",
            "type" => "application/vnd.radisys.msml-audit-conn+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-audit-dialog+xml",
            "type" => "application/vnd.radisys.msml-audit-dialog+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-audit-stream+xml",
            "type" => "application/vnd.radisys.msml-audit-stream+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-audit+xml",
            "type" => "application/vnd.radisys.msml-audit+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-conf+xml",
            "type" => "application/vnd.radisys.msml-conf+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-dialog-base+xml",
            "type" => "application/vnd.radisys.msml-dialog-base+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-dialog-fax-detect+xml",
            "type" => "application/vnd.radisys.msml-dialog-fax-detect+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-dialog-fax-sendrecv+xml",
            "type" => "application/vnd.radisys.msml-dialog-fax-sendrecv+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-dialog-group+xml",
            "type" => "application/vnd.radisys.msml-dialog-group+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-dialog-speech+xml",
            "type" => "application/vnd.radisys.msml-dialog-speech+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-dialog-transform+xml",
            "type" => "application/vnd.radisys.msml-dialog-transform+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml-dialog+xml",
            "type" => "application/vnd.radisys.msml-dialog+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.radisys.msml+xml",
            "type" => "application/vnd.radisys.msml+xml",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.rainstor.data",
            "type" => "application/vnd.rainstor.data",
            "Reference" => "[Kevin_Crook]"
        ],
        [
            "extension" => "vnd.rapid",
            "type" => "application/vnd.rapid",
            "Reference" => "[Etay_Szekely]"
        ],
        [
            "extension" => "vnd.rar",
            "type" => "application/vnd.rar",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.realvnc.bed",
            "type" => "application/vnd.realvnc.bed",
            "Reference" => "[Nick_Reeves]"
        ],
        [
            "extension" => "vnd.recordare.musicxml",
            "type" => "application/vnd.recordare.musicxml",
            "Reference" => "[W3C_Music_Notation_Community_Group]"
        ],
        [
            "extension" => "vnd.recordare.musicxml+xml",
            "type" => "application/vnd.recordare.musicxml+xml",
            "Reference" => "[W3C_Music_Notation_Community_Group]"
        ],
        [
            "extension" => "vnd.RenLearn.rlprint",
            "type" => "application/vnd.RenLearn.rlprint",
            "Reference" => "[James_Wick]"
        ],
        [
            "extension" => "vnd.restful+json",
            "type" => "application/vnd.restful+json",
            "Reference" => "[Stephen_Mizell]"
        ],
        [
            "extension" => "vnd.rig.cryptonote",
            "type" => "application/vnd.rig.cryptonote",
            "Reference" => "[Ken_Jibiki]"
        ],
        [
            "extension" => "vnd.route66.link66+xml",
            "type" => "application/vnd.route66.link66+xml",
            "Reference" => "[Sybren_Kikstra]"
        ],
        [
            "extension" => "vnd.rs-274x",
            "type" => "application/vnd.rs-274x",
            "Reference" => "[Lee_Harding]"
        ],
        [
            "extension" => "vnd.ruckus.download",
            "type" => "application/vnd.ruckus.download",
            "Reference" => "[Jerry_Harris]"
        ],
        [
            "extension" => "vnd.s3sms",
            "type" => "application/vnd.s3sms",
            "Reference" => "[Lauri_Tarkkala]"
        ],
        [
            "extension" => "vnd.sailingtracker.track",
            "type" => "application/vnd.sailingtracker.track",
            "Reference" => "[Heikki_Vesalainen]"
        ],
        [
            "extension" => "vnd.sar",
            "type" => "application/vnd.sar",
            "Reference" => "[Markus_Strehle]"
        ],
        [
            "extension" => "vnd.sbm.cid",
            "type" => "application/vnd.sbm.cid",
            "Reference" => "[Shinji_Kusakari]"
        ],
        [
            "extension" => "vnd.sbm.mid2",
            "type" => "application/vnd.sbm.mid2",
            "Reference" => "[Masanori_Murai]"
        ],
        [
            "extension" => "vnd.scribus",
            "type" => "application/vnd.scribus",
            "Reference" => "[Craig_Bradney]"
        ],
        [
            "extension" => "vnd.sealed.3df",
            "type" => "application/vnd.sealed.3df",
            "Reference" => "[John_Kwan]"
        ],
        [
            "extension" => "vnd.sealed.csf",
            "type" => "application/vnd.sealed.csf",
            "Reference" => "[John_Kwan]"
        ],
        [
            "extension" => "vnd.sealed.doc",
            "type" => "application/vnd.sealed.doc",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealed.eml",
            "type" => "application/vnd.sealed.eml",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealed.mht",
            "type" => "application/vnd.sealed.mht",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealed.net",
            "type" => "application/vnd.sealed.net",
            "Reference" => "[Martin_Lambert]"
        ],
        [
            "extension" => "vnd.sealed.ppt",
            "type" => "application/vnd.sealed.ppt",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealed.tiff",
            "type" => "application/vnd.sealed.tiff",
            "Reference" => "[John_Kwan][Martin_Lambert]"
        ],
        [
            "extension" => "vnd.sealed.xls",
            "type" => "application/vnd.sealed.xls",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealedmedia.softseal.html",
            "type" => "application/vnd.sealedmedia.softseal.html",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealedmedia.softseal.pdf",
            "type" => "application/vnd.sealedmedia.softseal.pdf",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.seemail",
            "type" => "application/vnd.seemail",
            "Reference" => "[Steve_Webb]"
        ],
        [
            "extension" => "vnd.sema",
            "type" => "application/vnd.sema",
            "Reference" => "[Anders_Hansson]"
        ],
        [
            "extension" => "vnd.semd",
            "type" => "application/vnd.semd",
            "Reference" => "[Anders_Hansson]"
        ],
        [
            "extension" => "vnd.semf",
            "type" => "application/vnd.semf",
            "Reference" => "[Anders_Hansson]"
        ],
        [
            "extension" => "vnd.shade-save-file",
            "type" => "application/vnd.shade-save-file",
            "Reference" => "[Connor_Horman]"
        ],
        [
            "extension" => "vnd.shana.informed.formdata",
            "type" => "application/vnd.shana.informed.formdata",
            "Reference" => "[Guy_Selzler]"
        ],
        [
            "extension" => "vnd.shana.informed.formtemplate",
            "type" => "application/vnd.shana.informed.formtemplate",
            "Reference" => "[Guy_Selzler]"
        ],
        [
            "extension" => "vnd.shana.informed.interchange",
            "type" => "application/vnd.shana.informed.interchange",
            "Reference" => "[Guy_Selzler]"
        ],
        [
            "extension" => "vnd.shana.informed.package",
            "type" => "application/vnd.shana.informed.package",
            "Reference" => "[Guy_Selzler]"
        ],
        [
            "extension" => "vnd.shootproof+json",
            "type" => "application/vnd.shootproof+json",
            "Reference" => "[Ben_Ramsey]"
        ],
        [
            "extension" => "vnd.shopkick+json",
            "type" => "application/vnd.shopkick+json",
            "Reference" => "[Ronald_Jacobs]"
        ],
        [
            "extension" => "vnd.shp",
            "type" => "application/vnd.shp",
            "Reference" => "[Mi_Tar]"
        ],
        [
            "extension" => "vnd.shx",
            "type" => "application/vnd.shx",
            "Reference" => "[Mi_Tar]"
        ],
        [
            "extension" => "vnd.sigrok.session",
            "type" => "application/vnd.sigrok.session",
            "Reference" => "[Uwe_Hermann]"
        ],
        [
            "extension" => "vnd.SimTech-MindMapper",
            "type" => "application/vnd.SimTech-MindMapper",
            "Reference" => "[Patrick_Koh]"
        ],
        [
            "extension" => "vnd.siren+json",
            "type" => "application/vnd.siren+json",
            "Reference" => "[Kevin_Swiber]"
        ],
        [
            "extension" => "vnd.smaf",
            "type" => "application/vnd.smaf",
            "Reference" => "[Hiroaki_Takahashi]"
        ],
        [
            "extension" => "vnd.smart.notebook",
            "type" => "application/vnd.smart.notebook",
            "Reference" => "[Jonathan_Neitz]"
        ],
        [
            "extension" => "vnd.smart.teacher",
            "type" => "application/vnd.smart.teacher",
            "Reference" => "[Michael_Boyle]"
        ],
        [
            "extension" => "vnd.snesdev-page-table",
            "type" => "application/vnd.snesdev-page-table",
            "Reference" => "[Connor_Horman]"
        ],
        [
            "extension" => "vnd.software602.filler.form+xml",
            "type" => "application/vnd.software602.filler.form+xml",
            "Reference" => "[Jakub_Hytka][Martin_Vondrous]"
        ],
        [
            "extension" => "vnd.software602.filler.form-xml-zip",
            "type" => "application/vnd.software602.filler.form-xml-zip",
            "Reference" => "[Jakub_Hytka][Martin_Vondrous]"
        ],
        [
            "extension" => "vnd.solent.sdkm+xml",
            "type" => "application/vnd.solent.sdkm+xml",
            "Reference" => "[Cliff_Gauntlett]"
        ],
        [
            "extension" => "vnd.spotfire.dxp",
            "type" => "application/vnd.spotfire.dxp",
            "Reference" => "[Stefan_Jernberg]"
        ],
        [
            "extension" => "vnd.spotfire.sfs",
            "type" => "application/vnd.spotfire.sfs",
            "Reference" => "[Stefan_Jernberg]"
        ],
        [
            "extension" => "vnd.sqlite3",
            "type" => "application/vnd.sqlite3",
            "Reference" => "[Clemens_Ladisch]"
        ],
        [
            "extension" => "vnd.sss-cod",
            "type" => "application/vnd.sss-cod",
            "Reference" => "[Asang_Dani]"
        ],
        [
            "extension" => "vnd.sss-dtf",
            "type" => "application/vnd.sss-dtf",
            "Reference" => "[Eric_Bruno]"
        ],
        [
            "extension" => "vnd.sss-ntf",
            "type" => "application/vnd.sss-ntf",
            "Reference" => "[Eric_Bruno]"
        ],
        [
            "extension" => "vnd.stepmania.package",
            "type" => "application/vnd.stepmania.package",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.stepmania.stepchart",
            "type" => "application/vnd.stepmania.stepchart",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.street-stream",
            "type" => "application/vnd.street-stream",
            "Reference" => "[Glenn_Levitt]"
        ],
        [
            "extension" => "vnd.sun.wadl+xml",
            "type" => "application/vnd.sun.wadl+xml",
            "Reference" => "[Marc_Hadley]"
        ],
        [
            "extension" => "vnd.sus-calendar",
            "type" => "application/vnd.sus-calendar",
            "Reference" => "[Jonathan_Niedfeldt]"
        ],
        [
            "extension" => "vnd.svd",
            "type" => "application/vnd.svd",
            "Reference" => "[Scott_Becker]"
        ],
        [
            "extension" => "vnd.swiftview-ics",
            "type" => "application/vnd.swiftview-ics",
            "Reference" => "[Glenn_Widener]"
        ],
        [
            "extension" => "vnd.sycle+xml",
            "type" => "application/vnd.sycle+xml",
            "Reference" => "[Johann_Terblanche]"
        ],
        [
            "extension" => "vnd.syncml.dm.notification",
            "type" => "application/vnd.syncml.dm.notification",
            "Reference" => "[Peter_Thompson][OMA-DM_Work_Group]"
        ],
        [
            "extension" => "vnd.syncml.dmddf+xml",
            "type" => "application/vnd.syncml.dmddf+xml",
            "Reference" => "[OMA-DM_Work_Group]"
        ],
        [
            "extension" => "vnd.syncml.dmtnds+wbxml",
            "type" => "application/vnd.syncml.dmtnds+wbxml",
            "Reference" => "[OMA-DM_Work_Group]"
        ],
        [
            "extension" => "vnd.syncml.dmtnds+xml",
            "type" => "application/vnd.syncml.dmtnds+xml",
            "Reference" => "[OMA-DM_Work_Group]"
        ],
        [
            "extension" => "vnd.syncml.dmddf+wbxml",
            "type" => "application/vnd.syncml.dmddf+wbxml",
            "Reference" => "[OMA-DM_Work_Group]"
        ],
        [
            "extension" => "vnd.syncml.dm+wbxml",
            "type" => "application/vnd.syncml.dm+wbxml",
            "Reference" => "[OMA-DM_Work_Group]"
        ],
        [
            "extension" => "vnd.syncml.dm+xml",
            "type" => "application/vnd.syncml.dm+xml",
            "Reference" => "[Bindu_Rama_Rao][OMA-DM_Work_Group]"
        ],
        [
            "extension" => "vnd.syncml.ds.notification",
            "type" => "application/vnd.syncml.ds.notification",
            "Reference" => "[OMA_Data_Synchronization_Working_Group]"
        ],
        [
            "extension" => "vnd.syncml+xml",
            "type" => "application/vnd.syncml+xml",
            "Reference" => "[OMA_Data_Synchronization_Working_Group]"
        ],
        [
            "extension" => "vnd.tableschema+json",
            "type" => "application/vnd.tableschema+json",
            "Reference" => "[Paul_Walsh]"
        ],
        [
            "extension" => "vnd.tao.intent-module-archive",
            "type" => "application/vnd.tao.intent-module-archive",
            "Reference" => "[Daniel_Shelton]"
        ],
        [
            "extension" => "vnd.tcpdump.pcap",
            "type" => "application/vnd.tcpdump.pcap",
            "Reference" => "[Guy_Harris][Glen_Turner]"
        ],
        [
            "extension" => "vnd.think-cell.ppttc+json",
            "type" => "application/vnd.think-cell.ppttc+json",
            "Reference" => "[Arno_Schoedl]"
        ],
        [
            "extension" => "vnd.tml",
            "type" => "application/vnd.tml",
            "Reference" => "[Joey_Smith]"
        ],
        [
            "extension" => "vnd.tmd.mediaflex.api+xml",
            "type" => "application/vnd.tmd.mediaflex.api+xml",
            "Reference" => "[Alex_Sibilev]"
        ],
        [
            "extension" => "vnd.tmobile-livetv",
            "type" => "application/vnd.tmobile-livetv",
            "Reference" => "[Nicolas_Helin]"
        ],
        [
            "extension" => "vnd.tri.onesource",
            "type" => "application/vnd.tri.onesource",
            "Reference" => "[Rick_Rupp]"
        ],
        [
            "extension" => "vnd.trid.tpt",
            "type" => "application/vnd.trid.tpt",
            "Reference" => "[Frank_Cusack]"
        ],
        [
            "extension" => "vnd.triscape.mxs",
            "type" => "application/vnd.triscape.mxs",
            "Reference" => "[Steven_Simonoff]"
        ],
        [
            "extension" => "vnd.trueapp",
            "type" => "application/vnd.trueapp",
            "Reference" => "[J._Scott_Hepler]"
        ],
        [
            "extension" => "vnd.truedoc",
            "type" => "application/vnd.truedoc",
            "Reference" => "[Brad_Chase]"
        ],
        [
            "extension" => "vnd.ubisoft.webplayer",
            "type" => "application/vnd.ubisoft.webplayer",
            "Reference" => "[Martin_Talbot]"
        ],
        [
            "extension" => "vnd.ufdl",
            "type" => "application/vnd.ufdl",
            "Reference" => "[Dave_Manning]"
        ],
        [
            "extension" => "vnd.uiq.theme",
            "type" => "application/vnd.uiq.theme",
            "Reference" => "[Tim_Ocock]"
        ],
        [
            "extension" => "vnd.umajin",
            "type" => "application/vnd.umajin",
            "Reference" => "[Jamie_Riden]"
        ],
        [
            "extension" => "vnd.unity",
            "type" => "application/vnd.unity",
            "Reference" => "[Unity3d]"
        ],
        [
            "extension" => "vnd.uoml+xml",
            "type" => "application/vnd.uoml+xml",
            "Reference" => "[Arne_Gerdes]"
        ],
        [
            "extension" => "vnd.uplanet.alert",
            "type" => "application/vnd.uplanet.alert",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.alert-wbxml",
            "type" => "application/vnd.uplanet.alert-wbxml",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.bearer-choice",
            "type" => "application/vnd.uplanet.bearer-choice",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.bearer-choice-wbxml",
            "type" => "application/vnd.uplanet.bearer-choice-wbxml",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.cacheop",
            "type" => "application/vnd.uplanet.cacheop",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.cacheop-wbxml",
            "type" => "application/vnd.uplanet.cacheop-wbxml",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.channel",
            "type" => "application/vnd.uplanet.channel",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.channel-wbxml",
            "type" => "application/vnd.uplanet.channel-wbxml",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.list",
            "type" => "application/vnd.uplanet.list",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.listcmd",
            "type" => "application/vnd.uplanet.listcmd",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.listcmd-wbxml",
            "type" => "application/vnd.uplanet.listcmd-wbxml",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uplanet.list-wbxml",
            "type" => "application/vnd.uplanet.list-wbxml",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.uri-map",
            "type" => "application/vnd.uri-map",
            "Reference" => "[Sebastian_Baer]"
        ],
        [
            "extension" => "vnd.uplanet.signal",
            "type" => "application/vnd.uplanet.signal",
            "Reference" => "[Bruce_Martin]"
        ],
        [
            "extension" => "vnd.valve.source.material",
            "type" => "application/vnd.valve.source.material",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.vcx",
            "type" => "application/vnd.vcx",
            "Reference" => "[Taisuke_Sugimoto]"
        ],
        [
            "extension" => "vnd.vd-study",
            "type" => "application/vnd.vd-study",
            "Reference" => "[Luc_Rogge]"
        ],
        [
            "extension" => "vnd.vectorworks",
            "type" => "application/vnd.vectorworks",
            "Reference" => "[Lyndsey_Ferguson][Biplab_Sarkar]"
        ],
        [
            "extension" => "vnd.vel+json",
            "type" => "application/vnd.vel+json",
            "Reference" => "[James_Wigger]"
        ],
        [
            "extension" => "vnd.verimatrix.vcas",
            "type" => "application/vnd.verimatrix.vcas",
            "Reference" => "[Petr_Peterka]"
        ],
        [
            "extension" => "vnd.veryant.thin",
            "type" => "application/vnd.veryant.thin",
            "Reference" => "[Massimo_Bertoli]"
        ],
        [
            "extension" => "vnd.ves.encrypted",
            "type" => "application/vnd.ves.encrypted",
            "Reference" => "[Jim_Zubov]"
        ],
        [
            "extension" => "vnd.vidsoft.vidconference",
            "type" => "application/vnd.vidsoft.vidconference",
            "Reference" => "[Robert_Hess]"
        ],
        [
            "extension" => "vnd.visio",
            "type" => "application/vnd.visio",
            "Reference" => "[Troy_Sandal]"
        ],
        [
            "extension" => "vnd.visionary",
            "type" => "application/vnd.visionary",
            "Reference" => "[Gayatri_Aravindakumar]"
        ],
        [
            "extension" => "vnd.vividence.scriptfile",
            "type" => "application/vnd.vividence.scriptfile",
            "Reference" => "[Mark_Risher]"
        ],
        [
            "extension" => "vnd.vsf",
            "type" => "application/vnd.vsf",
            "Reference" => "[Delton_Rowe]"
        ],
        [
            "extension" => "vnd.wap.sic",
            "type" => "application/vnd.wap.sic",
            "Reference" => "[WAP-Forum]"
        ],
        [
            "extension" => "vnd.wap.slc",
            "type" => "application/vnd.wap.slc",
            "Reference" => "[WAP-Forum]"
        ],
        [
            "extension" => "vnd.wap.wbxml",
            "type" => "application/vnd.wap.wbxml",
            "Reference" => "[Peter_Stark]"
        ],
        [
            "extension" => "vnd.wap.wmlc",
            "type" => "application/vnd.wap.wmlc",
            "Reference" => "[Peter_Stark]"
        ],
        [
            "extension" => "vnd.wap.wmlscriptc",
            "type" => "application/vnd.wap.wmlscriptc",
            "Reference" => "[Peter_Stark]"
        ],
        [
            "extension" => "vnd.webturbo",
            "type" => "application/vnd.webturbo",
            "Reference" => "[Yaser_Rehem]"
        ],
        [
            "extension" => "vnd.wfa.p2p",
            "type" => "application/vnd.wfa.p2p",
            "Reference" => "[Mick_Conley]"
        ],
        [
            "extension" => "vnd.wfa.wsc",
            "type" => "application/vnd.wfa.wsc",
            "Reference" => "[Wi-Fi_Alliance]"
        ],
        [
            "extension" => "vnd.windows.devicepairing",
            "type" => "application/vnd.windows.devicepairing",
            "Reference" => "[Priya_Dandawate]"
        ],
        [
            "extension" => "vnd.wmc",
            "type" => "application/vnd.wmc",
            "Reference" => "[Thomas_Kjornes]"
        ],
        [
            "extension" => "vnd.wmf.bootstrap",
            "type" => "application/vnd.wmf.bootstrap",
            "Reference" => "[Thinh_Nguyenphu][Prakash_Iyer]"
        ],
        [
            "extension" => "vnd.wolfram.mathematica",
            "type" => "application/vnd.wolfram.mathematica",
            "Reference" => "[Wolfram]"
        ],
        [
            "extension" => "vnd.wolfram.mathematica.package",
            "type" => "application/vnd.wolfram.mathematica.package",
            "Reference" => "[Wolfram]"
        ],
        [
            "extension" => "vnd.wolfram.player",
            "type" => "application/vnd.wolfram.player",
            "Reference" => "[Wolfram]"
        ],
        [
            "extension" => "vnd.wordperfect",
            "type" => "application/vnd.wordperfect",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.wqd",
            "type" => "application/vnd.wqd",
            "Reference" => "[Jan_Bostrom]"
        ],
        [
            "extension" => "vnd.wrq-hp3000-labelled",
            "type" => "application/vnd.wrq-hp3000-labelled",
            "Reference" => "[Chris_Bartram]"
        ],
        [
            "extension" => "vnd.wt.stf",
            "type" => "application/vnd.wt.stf",
            "Reference" => "[Bill_Wohler]"
        ],
        [
            "extension" => "vnd.wv.csp+xml",
            "type" => "application/vnd.wv.csp+xml",
            "Reference" => "[John_Ingi_Ingimundarson]"
        ],
        [
            "extension" => "vnd.wv.csp+wbxml",
            "type" => "application/vnd.wv.csp+wbxml",
            "Reference" => "[Matti_Salmi]"
        ],
        [
            "extension" => "vnd.wv.ssp+xml",
            "type" => "application/vnd.wv.ssp+xml",
            "Reference" => "[John_Ingi_Ingimundarson]"
        ],
        [
            "extension" => "vnd.xacml+json",
            "type" => "application/vnd.xacml+json",
            "Reference" => "[David_Brossard]"
        ],
        [
            "extension" => "vnd.xara",
            "type" => "application/vnd.xara",
            "Reference" => "[David_Matthewman]"
        ],
        [
            "extension" => "vnd.xfdl",
            "type" => "application/vnd.xfdl",
            "Reference" => "[Dave_Manning]"
        ],
        [
            "extension" => "vnd.xfdl.webform",
            "type" => "application/vnd.xfdl.webform",
            "Reference" => "[Michael_Mansell]"
        ],
        [
            "extension" => "vnd.xmi+xml",
            "type" => "application/vnd.xmi+xml",
            "Reference" => "[Fred_Waskiewicz]"
        ],
        [
            "extension" => "vnd.xmpie.cpkg",
            "type" => "application/vnd.xmpie.cpkg",
            "Reference" => "[Reuven_Sherwin]"
        ],
        [
            "extension" => "vnd.xmpie.dpkg",
            "type" => "application/vnd.xmpie.dpkg",
            "Reference" => "[Reuven_Sherwin]"
        ],
        [
            "extension" => "vnd.xmpie.plan",
            "type" => "application/vnd.xmpie.plan",
            "Reference" => "[Reuven_Sherwin]"
        ],
        [
            "extension" => "vnd.xmpie.ppkg",
            "type" => "application/vnd.xmpie.ppkg",
            "Reference" => "[Reuven_Sherwin]"
        ],
        [
            "extension" => "vnd.xmpie.xlim",
            "type" => "application/vnd.xmpie.xlim",
            "Reference" => "[Reuven_Sherwin]"
        ],
        [
            "extension" => "vnd.yamaha.hv-dic",
            "type" => "application/vnd.yamaha.hv-dic",
            "Reference" => "[Tomohiro_Yamamoto]"
        ],
        [
            "extension" => "vnd.yamaha.hv-script",
            "type" => "application/vnd.yamaha.hv-script",
            "Reference" => "[Tomohiro_Yamamoto]"
        ],
        [
            "extension" => "vnd.yamaha.hv-voice",
            "type" => "application/vnd.yamaha.hv-voice",
            "Reference" => "[Tomohiro_Yamamoto]"
        ],
        [
            "extension" => "vnd.yamaha.openscoreformat.osfpvg+xml",
            "type" => "application/vnd.yamaha.openscoreformat.osfpvg+xml",
            "Reference" => "[Mark_Olleson]"
        ],
        [
            "extension" => "vnd.yamaha.openscoreformat",
            "type" => "application/vnd.yamaha.openscoreformat",
            "Reference" => "[Mark_Olleson]"
        ],
        [
            "extension" => "vnd.yamaha.remote-setup",
            "type" => "application/vnd.yamaha.remote-setup",
            "Reference" => "[Takehiro_Sukizaki]"
        ],
        [
            "extension" => "vnd.yamaha.smaf-audio",
            "type" => "application/vnd.yamaha.smaf-audio",
            "Reference" => "[Keiichi_Shinoda]"
        ],
        [
            "extension" => "vnd.yamaha.smaf-phrase",
            "type" => "application/vnd.yamaha.smaf-phrase",
            "Reference" => "[Keiichi_Shinoda]"
        ],
        [
            "extension" => "vnd.yamaha.through-ngn",
            "type" => "application/vnd.yamaha.through-ngn",
            "Reference" => "[Takehiro_Sukizaki]"
        ],
        [
            "extension" => "vnd.yamaha.tunnel-udpencap",
            "type" => "application/vnd.yamaha.tunnel-udpencap",
            "Reference" => "[Takehiro_Sukizaki]"
        ],
        [
            "extension" => "vnd.yaoweme",
            "type" => "application/vnd.yaoweme",
            "Reference" => "[Jens_Jorgensen]"
        ],
        [
            "extension" => "vnd.yellowriver-custom-menu",
            "type" => "application/vnd.yellowriver-custom-menu",
            "Reference" => "[Mr._Yellow]"
        ],
        [
            "extension" => "vnd.youtube.yt - OBSOLETED in favor of video/vnd.youtube.yt",
            "type" => "application/vnd.youtube.yt",
            "Reference" => "[Laura_Wood]"
        ],
        [
            "extension" => "vnd.zul",
            "type" => "application/vnd.zul",
            "Reference" => "[Rene_Grothmann]"
        ],
        [
            "extension" => "vnd.zzazz.deck+xml",
            "type" => "application/vnd.zzazz.deck+xml",
            "Reference" => "[Micheal_Hewett]"
        ],
        [
            "extension" => "voicexml+xml",
            "type" => "application/voicexml+xml",
            "Reference" => "[RFC4267]"
        ],
        [
            "extension" => "voucher-cms+json",
            "type" => "application/voucher-cms+json",
            "Reference" => "[RFC8366]"
        ],
        [
            "extension" => "vq-rtcpxr",
            "type" => "application/vq-rtcpxr",
            "Reference" => "[RFC6035]"
        ],
        [
            "extension" => "watcherinfo+xml",
            "type" => "application/watcherinfo+xml",
            "Reference" => "[RFC3858]"
        ],
        [
            "extension" => "webpush-options+json",
            "type" => "application/webpush-options+json",
            "Reference" => "[RFC8292]"
        ],
        [
            "extension" => "whoispp-query",
            "type" => "application/whoispp-query",
            "Reference" => "[RFC2957]"
        ],
        [
            "extension" => "whoispp-response",
            "type" => "application/whoispp-response",
            "Reference" => "[RFC2958]"
        ],
        [
            "extension" => "widget",
            "type" => "application/widget",
            "Reference" => "[W3C][Steven_Pemberton][W3C-Widgets-2012]"
        ],
        [
            "extension" => "wita",
            "type" => "application/wita",
            "Reference" => "[Larry_Campbell]"
        ],
        [
            "extension" => "wordperfect5.1",
            "type" => "application/wordperfect5.1",
            "Reference" => "[Paul_Lindner]"
        ],
        [
            "extension" => "wsdl+xml",
            "type" => "application/wsdl+xml",
            "Reference" => "[W3C]"
        ],
        [
            "extension" => "wspolicy+xml",
            "type" => "application/wspolicy+xml",
            "Reference" => "[W3C]"
        ],
        [
            "extension" => "x-pki-message",
            "type" => "application/x-pki-message",
            "Reference" => "[RFC8894]"
        ],
        [
            "extension" => "x-www-form-urlencoded",
            "type" => "application/x-www-form-urlencoded",
            "Reference" => "[WHATWG][Anne_van_Kesteren]"
        ],
        [
            "extension" => "x-x509-ca-cert",
            "type" => "application/x-x509-ca-cert",
            "Reference" => "[RFC8894]"
        ],
        [
            "extension" => "x-x509-ca-ra-cert",
            "type" => "application/x-x509-ca-ra-cert",
            "Reference" => "[RFC8894]"
        ],
        [
            "extension" => "x-x509-next-ca-cert",
            "type" => "application/x-x509-next-ca-cert",
            "Reference" => "[RFC8894]"
        ],
        [
            "extension" => "x400-bp",
            "type" => "application/x400-bp",
            "Reference" => "[RFC1494]"
        ],
        [
            "extension" => "xacml+xml",
            "type" => "application/xacml+xml",
            "Reference" => "[RFC7061]"
        ],
        [
            "extension" => "xcap-att+xml",
            "type" => "application/xcap-att+xml",
            "Reference" => "[RFC4825]"
        ],
        [
            "extension" => "xcap-caps+xml",
            "type" => "application/xcap-caps+xml",
            "Reference" => "[RFC4825]"
        ],
        [
            "extension" => "xcap-diff+xml",
            "type" => "application/xcap-diff+xml",
            "Reference" => "[RFC5874]"
        ],
        [
            "extension" => "xcap-el+xml",
            "type" => "application/xcap-el+xml",
            "Reference" => "[RFC4825]"
        ],
        [
            "extension" => "xcap-error+xml",
            "type" => "application/xcap-error+xml",
            "Reference" => "[RFC4825]"
        ],
        [
            "extension" => "xcap-ns+xml",
            "type" => "application/xcap-ns+xml",
            "Reference" => "[RFC4825]"
        ],
        [
            "extension" => "xcon-conference-info-diff+xml",
            "type" => "application/xcon-conference-info-diff+xml",
            "Reference" => "[RFC6502]"
        ],
        [
            "extension" => "xcon-conference-info+xml",
            "type" => "application/xcon-conference-info+xml",
            "Reference" => "[RFC6502]"
        ],
        [
            "extension" => "xenc+xml",
            "type" => "application/xenc+xml",
            "Reference" => "[Joseph_Reagle][XENC_Working_Group]"
        ],
        [
            "extension" => "xhtml+xml",
            "type" => "application/xhtml+xml",
            "Reference" => "[W3C][Robin_Berjon]"
        ],
        [
            "extension" => "xliff+xml",
            "type" => "application/xliff+xml",
            "Reference" => "[OASIS][Chet_Ensign]"
        ],
        [
            "extension" => "xml",
            "type" => "application/xml",
            "Reference" => "[RFC7303]"
        ],
        [
            "extension" => "xml-dtd",
            "type" => "application/xml-dtd",
            "Reference" => "[RFC7303]"
        ],
        [
            "extension" => "xml-external-parsed-entity",
            "type" => "application/xml-external-parsed-entity",
            "Reference" => "[RFC7303]"
        ],
        [
            "extension" => "xml-patch+xml",
            "type" => "application/xml-patch+xml",
            "Reference" => "[RFC7351]"
        ],
        [
            "extension" => "xmpp+xml",
            "type" => "application/xmpp+xml",
            "Reference" => "[RFC3923]"
        ],
        [
            "extension" => "xop+xml",
            "type" => "application/xop+xml",
            "Reference" => "[Mark_Nottingham]"
        ],
        [
            "extension" => "xslt+xml",
            "type" => "application/xslt+xml",
            "Reference" => "[W3C][http=>//www.w3.org/TR/2007/REC-xslt20-20070123/#media-type-registration]"
        ],
        [
            "extension" => "xv+xml",
            "type" => "application/xv+xml",
            "Reference" => "[RFC4374]"
        ],
        [
            "extension" => "yang",
            "type" => "application/yang",
            "Reference" => "[RFC6020]"
        ],
        [
            "extension" => "yang-data+json",
            "type" => "application/yang-data+json",
            "Reference" => "[RFC8040]"
        ],
        [
            "extension" => "yang-data+xml",
            "type" => "application/yang-data+xml",
            "Reference" => "[RFC8040]"
        ],
        [
            "extension" => "yang-patch+json",
            "type" => "application/yang-patch+json",
            "Reference" => "[RFC8072]"
        ],
        [
            "extension" => "yang-patch+xml",
            "type" => "application/yang-patch+xml",
            "Reference" => "[RFC8072]"
        ],
        [
            "extension" => "yin+xml",
            "type" => "application/yin+xml",
            "Reference" => "[RFC6020]"
        ],
        [
            "extension" => "zip",
            "type" => "application/zip",
            "Reference" => "[Paul_Lindner]"
        ],
        [
            "extension" => "zlib",
            "type" => "application/zlib",
            "Reference" => "[RFC6713]"
        ],
        [
            "extension" => "zstd",
            "type" => "application/zstd",
            "Reference" => "[RFC-kucherawy-rfc8478bis-05]"
        ],
        [
            "extension" => "1d-interleaved-parityfec",
            "type" => "audio/1d-interleaved-parityfec",
            "Reference" => "[RFC6015]"
        ],
        [
            "extension" => "32kadpcm",
            "type" => "audio/32kadpcm",
            "Reference" => "[RFC3802][RFC2421]"
        ],
        [
            "extension" => "3gpp",
            "type" => "audio/3gpp",
            "Reference" => "[RFC3839][RFC6381]"
        ],
        [
            "extension" => "3gpp2",
            "type" => "audio/3gpp2",
            "Reference" => "[RFC4393][RFC6381]"
        ],
        [
            "extension" => "aac",
            "type" => "audio/aac",
            "Reference" => "[ISO-IEC_JTC1][Max_Neuendorf]"
        ],
        [
            "extension" => "ac3",
            "type" => "audio/ac3",
            "Reference" => "[RFC4184]"
        ],
        [
            "extension" => "AMR",
            "type" => "audio/AMR",
            "Reference" => "[RFC4867]"
        ],
        [
            "extension" => "AMR-WB",
            "type" => "audio/AMR-WB",
            "Reference" => "[RFC4867]"
        ],
        [
            "extension" => "amr-wb+",
            "type" => "audio/amr-wb+",
            "Reference" => "[RFC4352]"
        ],
        [
            "extension" => "aptx",
            "type" => "audio/aptx",
            "Reference" => "[RFC7310]"
        ],
        [
            "extension" => "asc",
            "type" => "audio/asc",
            "Reference" => "[RFC6295]"
        ],
        [
            "extension" => "ATRAC-ADVANCED-LOSSLESS",
            "type" => "audio/ATRAC-ADVANCED-LOSSLESS",
            "Reference" => "[RFC5584]"
        ],
        [
            "extension" => "ATRAC-X",
            "type" => "audio/ATRAC-X",
            "Reference" => "[RFC5584]"
        ],
        [
            "extension" => "ATRAC3",
            "type" => "audio/ATRAC3",
            "Reference" => "[RFC5584]"
        ],
        [
            "extension" => "basic",
            "type" => "audio/basic",
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "BV16",
            "type" => "audio/BV16",
            "Reference" => "[RFC4298]"
        ],
        [
            "extension" => "BV32",
            "type" => "audio/BV32",
            "Reference" => "[RFC4298]"
        ],
        [
            "extension" => "clearmode",
            "type" => "audio/clearmode",
            "Reference" => "[RFC4040]"
        ],
        [
            "extension" => "CN",
            "type" => "audio/CN",
            "Reference" => "[RFC3389]"
        ],
        [
            "extension" => "DAT12",
            "type" => "audio/DAT12",
            "Reference" => "[RFC3190]"
        ],
        [
            "extension" => "dls",
            "type" => "audio/dls",
            "Reference" => "[RFC4613]"
        ],
        [
            "extension" => "dsr-es201108",
            "type" => "audio/dsr-es201108",
            "Reference" => "[RFC3557]"
        ],
        [
            "extension" => "dsr-es202050",
            "type" => "audio/dsr-es202050",
            "Reference" => "[RFC4060]"
        ],
        [
            "extension" => "dsr-es202211",
            "type" => "audio/dsr-es202211",
            "Reference" => "[RFC4060]"
        ],
        [
            "extension" => "dsr-es202212",
            "type" => "audio/dsr-es202212",
            "Reference" => "[RFC4060]"
        ],
        [
            "extension" => "DV",
            "type" => "audio/DV",
            "Reference" => "[RFC6469]"
        ],
        [
            "extension" => "DVI4",
            "type" => "audio/DVI4",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "eac3",
            "type" => "audio/eac3",
            "Reference" => "[RFC4598]"
        ],
        [
            "extension" => "encaprtp",
            "type" => "audio/encaprtp",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "EVRC",
            "type" => "audio/EVRC",
            "Reference" => "[RFC4788]"
        ],
        [
            "extension" => "EVRC-QCP",
            "type" => "audio/EVRC-QCP",
            "Reference" => "[RFC3625]"
        ],
        [
            "extension" => "EVRC0",
            "type" => "audio/EVRC0",
            "Reference" => "[RFC4788]"
        ],
        [
            "extension" => "EVRC1",
            "type" => "audio/EVRC1",
            "Reference" => "[RFC4788]"
        ],
        [
            "extension" => "EVRCB",
            "type" => "audio/EVRCB",
            "Reference" => "[RFC5188]"
        ],
        [
            "extension" => "EVRCB0",
            "type" => "audio/EVRCB0",
            "Reference" => "[RFC5188]"
        ],
        [
            "extension" => "EVRCB1",
            "type" => "audio/EVRCB1",
            "Reference" => "[RFC4788]"
        ],
        [
            "extension" => "EVRCNW",
            "type" => "audio/EVRCNW",
            "Reference" => "[RFC6884]"
        ],
        [
            "extension" => "EVRCNW0",
            "type" => "audio/EVRCNW0",
            "Reference" => "[RFC6884]"
        ],
        [
            "extension" => "EVRCNW1",
            "type" => "audio/EVRCNW1",
            "Reference" => "[RFC6884]"
        ],
        [
            "extension" => "EVRCWB",
            "type" => "audio/EVRCWB",
            "Reference" => "[RFC5188]"
        ],
        [
            "extension" => "EVRCWB0",
            "type" => "audio/EVRCWB0",
            "Reference" => "[RFC5188]"
        ],
        [
            "extension" => "EVRCWB1",
            "type" => "audio/EVRCWB1",
            "Reference" => "[RFC5188]"
        ],
        [
            "extension" => "EVS",
            "type" => "audio/EVS",
            "Reference" => "[_3GPP][Kyunghun_Jung]"
        ],
        [
            "extension" => "example",
            "type" => "audio/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "flexfec",
            "type" => "audio/flexfec",
            "Reference" => "[RFC8627]"
        ],
        [
            "extension" => "fwdred",
            "type" => "audio/fwdred",
            "Reference" => "[RFC6354]"
        ],
        [
            "extension" => "G711-0",
            "type" => "audio/G711-0",
            "Reference" => "[RFC7655]"
        ],
        [
            "extension" => "G719",
            "type" => "audio/G719",
            "Reference" => "[RFC5404][RFC Errata 3245]"
        ],
        [
            "extension" => "G7221",
            "type" => "audio/G7221",
            "Reference" => "[RFC5577]"
        ],
        [
            "extension" => "G722",
            "type" => "audio/G722",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G723",
            "type" => "audio/G723",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G726-16",
            "type" => "audio/G726-16",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G726-24",
            "type" => "audio/G726-24",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G726-32",
            "type" => "audio/G726-32",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G726-40",
            "type" => "audio/G726-40",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G728",
            "type" => "audio/G728",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G729",
            "type" => "audio/G729",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G7291",
            "type" => "audio/G7291",
            "Reference" => "[RFC4749][RFC5459]"
        ],
        [
            "extension" => "G729D",
            "type" => "audio/G729D",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "G729E",
            "type" => "audio/G729E",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "GSM",
            "type" => "audio/GSM",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "GSM-EFR",
            "type" => "audio/GSM-EFR",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "GSM-HR-08",
            "type" => "audio/GSM-HR-08",
            "Reference" => "[RFC5993]"
        ],
        [
            "extension" => "iLBC",
            "type" => "audio/iLBC",
            "Reference" => "[RFC3952]"
        ],
        [
            "extension" => "ip-mr_v2.5",
            "type" => "audio/ip-mr_v2.5",
            "Reference" => "[RFC6262]"
        ],
        [
            "extension" => "L8",
            "type" => "audio/L8",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "L16",
            "type" => "audio/L16",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "L20",
            "type" => "audio/L20",
            "Reference" => "[RFC3190]"
        ],
        [
            "extension" => "L24",
            "type" => "audio/L24",
            "Reference" => "[RFC3190]"
        ],
        [
            "extension" => "LPC",
            "type" => "audio/LPC",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "MELP",
            "type" => "audio/MELP",
            "Reference" => "[RFC8130]"
        ],
        [
            "extension" => "MELP600",
            "type" => "audio/MELP600",
            "Reference" => "[RFC8130]"
        ],
        [
            "extension" => "MELP1200",
            "type" => "audio/MELP1200",
            "Reference" => "[RFC8130]"
        ],
        [
            "extension" => "MELP2400",
            "type" => "audio/MELP2400",
            "Reference" => "[RFC8130]"
        ],
        [
            "extension" => "mhas",
            "type" => "audio/mhas",
            "Reference" => "[ISO-IEC_JTC1][Nils_Peters][Ingo_Hofmann]"
        ],
        [
            "extension" => "mobile-xmf",
            "type" => "audio/mobile-xmf",
            "Reference" => "[RFC4723]"
        ],
        [
            "extension" => "MPA",
            "type" => "audio/MPA",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "mp4",
            "type" => "audio/mp4",
            "Reference" => "[RFC4337][RFC6381]"
        ],
        [
            "extension" => "MP4A-LATM",
            "type" => "audio/MP4A-LATM",
            "Reference" => "[RFC6416]"
        ],
        [
            "extension" => "mpa-robust",
            "type" => "audio/mpa-robust",
            "Reference" => "[RFC5219]"
        ],
        [
            "extension" => "mpeg",
            "type" => "audio/mpeg",
            "Reference" => "[RFC3003]"
        ],
        [
            "extension" => "mpeg4-generic",
            "type" => "audio/mpeg4-generic",
            "Reference" => "[RFC3640][RFC5691][RFC6295]"
        ],
        [
            "extension" => "ogg",
            "type" => "audio/ogg",
            "Reference" => "[RFC5334][RFC7845]"
        ],
        [
            "extension" => "opus",
            "type" => "audio/opus",
            "Reference" => "[RFC7587]"
        ],
        [
            "extension" => "parityfec",
            "type" => null,
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "PCMA",
            "type" => "audio/PCMA",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "PCMA-WB",
            "type" => "audio/PCMA-WB",
            "Reference" => "[RFC5391]"
        ],
        [
            "extension" => "PCMU",
            "type" => "audio/PCMU",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "PCMU-WB",
            "type" => "audio/PCMU-WB",
            "Reference" => "[RFC5391]"
        ],
        [
            "extension" => "prs.sid",
            "type" => "audio/prs.sid",
            "Reference" => "[Linus_Walleij]"
        ],
        [
            "extension" => "QCELP",
            "type" => null,
            "Reference" => "[RFC3555][RFC3625]"
        ],
        [
            "extension" => "raptorfec",
            "type" => "audio/raptorfec",
            "Reference" => "[RFC6682]"
        ],
        [
            "extension" => "RED",
            "type" => "audio/RED",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "rtp-enc-aescm128",
            "type" => "audio/rtp-enc-aescm128",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "rtploopback",
            "type" => "audio/rtploopback",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "rtp-midi",
            "type" => "audio/rtp-midi",
            "Reference" => "[RFC6295]"
        ],
        [
            "extension" => "rtx",
            "type" => "audio/rtx",
            "Reference" => "[RFC4588]"
        ],
        [
            "extension" => "SMV",
            "type" => "audio/SMV",
            "Reference" => "[RFC3558]"
        ],
        [
            "extension" => "SMV0",
            "type" => "audio/SMV0",
            "Reference" => "[RFC3558]"
        ],
        [
            "extension" => "SMV-QCP",
            "type" => "audio/SMV-QCP",
            "Reference" => "[RFC3625]"
        ],
        [
            "extension" => "sofa",
            "type" => "audio/sofa",
            "Reference" => "[AES][Piotr_Majdak]"
        ],
        [
            "extension" => "sp-midi",
            "type" => "audio/sp-midi",
            "Reference" => "[Timo_Kosonen][Tom_White]"
        ],
        [
            "extension" => "speex",
            "type" => "audio/speex",
            "Reference" => "[RFC5574]"
        ],
        [
            "extension" => "t140c",
            "type" => "audio/t140c",
            "Reference" => "[RFC4351]"
        ],
        [
            "extension" => "t38",
            "type" => "audio/t38",
            "Reference" => "[RFC4612]"
        ],
        [
            "extension" => "telephone-event",
            "type" => "audio/telephone-event",
            "Reference" => "[RFC4733]"
        ],
        [
            "extension" => "TETRA_ACELP",
            "type" => "audio/TETRA_ACELP",
            "Reference" => "[ETSI][Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "TETRA_ACELP_BB",
            "type" => "audio/TETRA_ACELP_BB",
            "Reference" => "[ETSI][Miguel_Angel_Reina_Ortega]"
        ],
        [
            "extension" => "tone",
            "type" => "audio/tone",
            "Reference" => "[RFC4733]"
        ],
        [
            "extension" => "TSVCIS",
            "type" => "audio/TSVCIS",
            "Reference" => "[RFC8817]"
        ],
        [
            "extension" => "UEMCLIP",
            "type" => "audio/UEMCLIP",
            "Reference" => "[RFC5686]"
        ],
        [
            "extension" => "ulpfec",
            "type" => "audio/ulpfec",
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "usac",
            "type" => "audio/usac",
            "Reference" => "[ISO-IEC_JTC1][Max_Neuendorf]"
        ],
        [
            "extension" => "VDVI",
            "type" => "audio/VDVI",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "VMR-WB",
            "type" => "audio/VMR-WB",
            "Reference" => "[RFC4348][RFC4424]"
        ],
        [
            "extension" => "vnd.3gpp.iufp",
            "type" => "audio/vnd.3gpp.iufp",
            "Reference" => "[Thomas_Belling]"
        ],
        [
            "extension" => "vnd.4SB",
            "type" => "audio/vnd.4SB",
            "Reference" => "[Serge_De_Jaham]"
        ],
        [
            "extension" => "vnd.audiokoz",
            "type" => "audio/vnd.audiokoz",
            "Reference" => "[Vicki_DeBarros]"
        ],
        [
            "extension" => "vnd.CELP",
            "type" => "audio/vnd.CELP",
            "Reference" => "[Serge_De_Jaham]"
        ],
        [
            "extension" => "vnd.cisco.nse",
            "type" => "audio/vnd.cisco.nse",
            "Reference" => "[Rajesh_Kumar]"
        ],
        [
            "extension" => "vnd.cmles.radio-events",
            "type" => "audio/vnd.cmles.radio-events",
            "Reference" => "[Jean-Philippe_Goulet]"
        ],
        [
            "extension" => "vnd.cns.anp1",
            "type" => "audio/vnd.cns.anp1",
            "Reference" => "[Ann_McLaughlin]"
        ],
        [
            "extension" => "vnd.cns.inf1",
            "type" => "audio/vnd.cns.inf1",
            "Reference" => "[Ann_McLaughlin]"
        ],
        [
            "extension" => "vnd.dece.audio",
            "type" => "audio/vnd.dece.audio",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.digital-winds",
            "type" => "audio/vnd.digital-winds",
            "Reference" => "[Armands_Strazds]"
        ],
        [
            "extension" => "vnd.dlna.adts",
            "type" => "audio/vnd.dlna.adts",
            "Reference" => "[Edwin_Heredia]"
        ],
        [
            "extension" => "vnd.dolby.heaac.1",
            "type" => "audio/vnd.dolby.heaac.1",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dolby.heaac.2",
            "type" => "audio/vnd.dolby.heaac.2",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dolby.mlp",
            "type" => "audio/vnd.dolby.mlp",
            "Reference" => "[Mike_Ward]"
        ],
        [
            "extension" => "vnd.dolby.mps",
            "type" => "audio/vnd.dolby.mps",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dolby.pl2",
            "type" => "audio/vnd.dolby.pl2",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dolby.pl2x",
            "type" => "audio/vnd.dolby.pl2x",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dolby.pl2z",
            "type" => "audio/vnd.dolby.pl2z",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dolby.pulse.1",
            "type" => "audio/vnd.dolby.pulse.1",
            "Reference" => "[Steve_Hattersley]"
        ],
        [
            "extension" => "vnd.dra",
            "type" => "audio/vnd.dra",
            "Reference" => "[Jiang_Tian]"
        ],
        [
            "extension" => "vnd.dts",
            "type" => "audio/vnd.dts",
            "Reference" => "[William_Zou]"
        ],
        [
            "extension" => "vnd.dts.hd",
            "type" => "audio/vnd.dts.hd",
            "Reference" => "[William_Zou]"
        ],
        [
            "extension" => "vnd.dts.uhd",
            "type" => "audio/vnd.dts.uhd",
            "Reference" => "[Phillip_Maness]"
        ],
        [
            "extension" => "vnd.dvb.file",
            "type" => "audio/vnd.dvb.file",
            "Reference" => "[Peter_Siebert]"
        ],
        [
            "extension" => "vnd.everad.plj",
            "type" => "audio/vnd.everad.plj",
            "Reference" => "[Shay_Cicelsky]"
        ],
        [
            "extension" => "vnd.hns.audio",
            "type" => "audio/vnd.hns.audio",
            "Reference" => "[Swaminathan]"
        ],
        [
            "extension" => "vnd.lucent.voice",
            "type" => "audio/vnd.lucent.voice",
            "Reference" => "[Greg_Vaudreuil]"
        ],
        [
            "extension" => "vnd.ms-playready.media.pya",
            "type" => "audio/vnd.ms-playready.media.pya",
            "Reference" => "[Steve_DiAcetis]"
        ],
        [
            "extension" => "vnd.nokia.mobile-xmf",
            "type" => "audio/vnd.nokia.mobile-xmf",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.nortel.vbk",
            "type" => "audio/vnd.nortel.vbk",
            "Reference" => "[Glenn_Parsons]"
        ],
        [
            "extension" => "vnd.nuera.ecelp4800",
            "type" => "audio/vnd.nuera.ecelp4800",
            "Reference" => "[Michael_Fox]"
        ],
        [
            "extension" => "vnd.nuera.ecelp7470",
            "type" => "audio/vnd.nuera.ecelp7470",
            "Reference" => "[Michael_Fox]"
        ],
        [
            "extension" => "vnd.nuera.ecelp9600",
            "type" => "audio/vnd.nuera.ecelp9600",
            "Reference" => "[Michael_Fox]"
        ],
        [
            "extension" => "vnd.octel.sbc",
            "type" => "audio/vnd.octel.sbc",
            "Reference" => "[Greg_Vaudreuil]"
        ],
        [
            "extension" => "vnd.presonus.multitrack",
            "type" => "audio/vnd.presonus.multitrack",
            "Reference" => "[Matthias_Juwan]"
        ],
        [
            "extension" => "vnd.qcelp - DEPRECATED in favor of audio/qcelp",
            "type" => "audio/vnd.qcelp",
            "Reference" => "[RFC3625]"
        ],
        [
            "extension" => "vnd.rhetorex.32kadpcm",
            "type" => "audio/vnd.rhetorex.32kadpcm",
            "Reference" => "[Greg_Vaudreuil]"
        ],
        [
            "extension" => "vnd.rip",
            "type" => "audio/vnd.rip",
            "Reference" => "[Martin_Dawe]"
        ],
        [
            "extension" => "vnd.sealedmedia.softseal.mpeg",
            "type" => "audio/vnd.sealedmedia.softseal.mpeg",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.vmx.cvsd",
            "type" => "audio/vnd.vmx.cvsd",
            "Reference" => "[Greg_Vaudreuil]"
        ],
        [
            "extension" => "vorbis",
            "type" => "audio/vorbis",
            "Reference" => "[RFC5215]"
        ],
        [
            "extension" => "vorbis-config",
            "type" => "audio/vorbis-config",
            "Reference" => "[RFC5215]"
        ],
        [
            "extension" => "collection",
            "type" => "font/collection",
            "Reference" => "[RFC8081]"
        ],
        [
            "extension" => "otf",
            "type" => "font/otf",
            "Reference" => "[RFC8081]"
        ],
        [
            "extension" => "sfnt",
            "type" => "font/sfnt",
            "Reference" => "[RFC8081]"
        ],
        [
            "extension" => "ttf",
            "type" => "font/ttf",
            "Reference" => "[RFC8081]"
        ],
        [
            "extension" => "woff",
            "type" => "font/woff",
            "Reference" => "[RFC8081]"
        ],
        [
            "extension" => "woff2",
            "type" => "font/woff2",
            "Reference" => "[RFC8081]"
        ],
        [
            "extension" => "aces",
            "type" => "image/aces",
            "Reference" => "[SMPTE][Howard_Lukk]"
        ],
        [
            "extension" => "avci",
            "type" => "image/avci",
            "Reference" => "[ISO-IEC_JTC1][David_Singer]"
        ],
        [
            "extension" => "avcs",
            "type" => "image/avcs",
            "Reference" => "[ISO-IEC_JTC1][David_Singer]"
        ],
        [
            "extension" => "bmp",
            "type" => "image/bmp",
            "Reference" => "[RFC7903]"
        ],
        [
            "extension" => "cgm",
            "type" => "image/cgm",
            "Reference" => "[Alan_Francis]"
        ],
        [
            "extension" => "dicom-rle",
            "type" => "image/dicom-rle",
            "Reference" => "[DICOM_Standards_Committee][David_Clunie]"
        ],
        [
            "extension" => "emf",
            "type" => "image/emf",
            "Reference" => "[RFC7903]"
        ],
        [
            "extension" => "example",
            "type" => "image/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "fits",
            "type" => "image/fits",
            "Reference" => "[RFC4047]"
        ],
        [
            "extension" => "g3fax",
            "type" => "image/g3fax",
            "Reference" => "[RFC1494]"
        ],
        [
            "extension" => "gif",
            "type" => null,
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "heic",
            "type" => "image/heic",
            "Reference" => "[ISO-IEC_JTC1][David_Singer]"
        ],
        [
            "extension" => "heic-sequence",
            "type" => "image/heic-sequence",
            "Reference" => "[ISO-IEC_JTC1][David_Singer]"
        ],
        [
            "extension" => "heif",
            "type" => "image/heif",
            "Reference" => "[ISO-IEC_JTC1][David_Singer]"
        ],
        [
            "extension" => "heif-sequence",
            "type" => "image/heif-sequence",
            "Reference" => "[ISO-IEC_JTC1][David_Singer]"
        ],
        [
            "extension" => "hej2k",
            "type" => "image/hej2k",
            "Reference" => "[ISO-IEC_JTC1][ITU-T]"
        ],
        [
            "extension" => "hsj2",
            "type" => "image/hsj2",
            "Reference" => "[ISO-IEC_JTC1][ITU-T]"
        ],
        [
            "extension" => "ief",
            "type" => null,
            "Reference" => "[RFC1314]"
        ],
        [
            "extension" => "jls",
            "type" => "image/jls",
            "Reference" => "[DICOM_Standards_Committee][David_Clunie]"
        ],
        [
            "extension" => "jp2",
            "type" => "image/jp2",
            "Reference" => "[RFC3745]"
        ],
        [
            "extension" => "jpeg",
            "type" => null,
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "jph",
            "type" => "image/jph",
            "Reference" => "[ISO-IEC_JTC1][ITU-T]"
        ],
        [
            "extension" => "jphc",
            "type" => "image/jphc",
            "Reference" => "[ISO-IEC_JTC1][ITU-T]"
        ],
        [
            "extension" => "jpm",
            "type" => "image/jpm",
            "Reference" => "[RFC3745]"
        ],
        [
            "extension" => "jpx",
            "type" => "image/jpx",
            "Reference" => "[RFC3745]"
        ],
        [
            "extension" => "jxr",
            "type" => "image/jxr",
            "Reference" => "[ISO-IEC_JTC1][ITU-T]"
        ],
        [
            "extension" => "jxrA",
            "type" => "image/jxrA",
            "Reference" => "[ISO-IEC_JTC1][ITU-T]"
        ],
        [
            "extension" => "jxrS",
            "type" => "image/jxrS",
            "Reference" => "[ISO-IEC_JTC1][ITU-T]"
        ],
        [
            "extension" => "jxs",
            "type" => "image/jxs",
            "Reference" => "[ISO-IEC_JTC1]"
        ],
        [
            "extension" => "jxsc",
            "type" => "image/jxsc",
            "Reference" => "[ISO-IEC_JTC1]"
        ],
        [
            "extension" => "jxsi",
            "type" => "image/jxsi",
            "Reference" => "[ISO-IEC_JTC1]"
        ],
        [
            "extension" => "jxss",
            "type" => "image/jxss",
            "Reference" => "[ISO-IEC_JTC1]"
        ],
        [
            "extension" => "ktx",
            "type" => "image/ktx",
            "Reference" => "[Khronos][Mark_Callow]"
        ],
        [
            "extension" => "ktx2",
            "type" => "image/ktx2",
            "Reference" => "[Khronos][Mark_Callow]"
        ],
        [
            "extension" => "naplps",
            "type" => "image/naplps",
            "Reference" => "[Ilya_Ferber]"
        ],
        [
            "extension" => "png",
            "type" => "image/png",
            "Reference" => "[Glenn_Randers-Pehrson]"
        ],
        [
            "extension" => "prs.btif",
            "type" => "image/prs.btif",
            "Reference" => "[Ben_Simon]"
        ],
        [
            "extension" => "prs.pti",
            "type" => "image/prs.pti",
            "Reference" => "[Juern_Laun]"
        ],
        [
            "extension" => "pwg-raster",
            "type" => "image/pwg-raster",
            "Reference" => "[Michael_Sweet]"
        ],
        [
            "extension" => "svg+xml",
            "type" => "image/svg+xml",
            "Reference" => "[W3C][http=>//www.w3.org/TR/SVG/mimereg.html]"
        ],
        [
            "extension" => "t38",
            "type" => "image/t38",
            "Reference" => "[RFC3362]"
        ],
        [
            "extension" => "tiff",
            "type" => "image/tiff",
            "Reference" => "[RFC3302]"
        ],
        [
            "extension" => "tiff-fx",
            "type" => "image/tiff-fx",
            "Reference" => "[RFC3950]"
        ],
        [
            "extension" => "vnd.adobe.photoshop",
            "type" => "image/vnd.adobe.photoshop",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.airzip.accelerator.azv",
            "type" => "image/vnd.airzip.accelerator.azv",
            "Reference" => "[Gary_Clueit]"
        ],
        [
            "extension" => "vnd.cns.inf2",
            "type" => "image/vnd.cns.inf2",
            "Reference" => "[Ann_McLaughlin]"
        ],
        [
            "extension" => "vnd.dece.graphic",
            "type" => "image/vnd.dece.graphic",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.djvu",
            "type" => "image/vnd.djvu",
            "Reference" => "[Leon_Bottou]"
        ],
        [
            "extension" => "vnd.dwg",
            "type" => "image/vnd.dwg",
            "Reference" => "[Jodi_Moline]"
        ],
        [
            "extension" => "vnd.dxf",
            "type" => "image/vnd.dxf",
            "Reference" => "[Jodi_Moline]"
        ],
        [
            "extension" => "vnd.dvb.subtitle",
            "type" => "image/vnd.dvb.subtitle",
            "Reference" => "[Peter_Siebert][Michael_Lagally]"
        ],
        [
            "extension" => "vnd.fastbidsheet",
            "type" => "image/vnd.fastbidsheet",
            "Reference" => "[Scott_Becker]"
        ],
        [
            "extension" => "vnd.fpx",
            "type" => "image/vnd.fpx",
            "Reference" => "[Marc_Douglas_Spencer]"
        ],
        [
            "extension" => "vnd.fst",
            "type" => "image/vnd.fst",
            "Reference" => "[Arild_Fuldseth]"
        ],
        [
            "extension" => "vnd.fujixerox.edmics-mmr",
            "type" => "image/vnd.fujixerox.edmics-mmr",
            "Reference" => "[Masanori_Onda]"
        ],
        [
            "extension" => "vnd.fujixerox.edmics-rlc",
            "type" => "image/vnd.fujixerox.edmics-rlc",
            "Reference" => "[Masanori_Onda]"
        ],
        [
            "extension" => "vnd.globalgraphics.pgb",
            "type" => "image/vnd.globalgraphics.pgb",
            "Reference" => "[Martin_Bailey]"
        ],
        [
            "extension" => "vnd.microsoft.icon",
            "type" => "image/vnd.microsoft.icon",
            "Reference" => "[Simon_Butcher]"
        ],
        [
            "extension" => "vnd.mix",
            "type" => "image/vnd.mix",
            "Reference" => "[Saveen_Reddy]"
        ],
        [
            "extension" => "vnd.ms-modi",
            "type" => "image/vnd.ms-modi",
            "Reference" => "[Gregory_Vaughan]"
        ],
        [
            "extension" => "vnd.mozilla.apng",
            "type" => "image/vnd.mozilla.apng",
            "Reference" => "[Stuart_Parmenter]"
        ],
        [
            "extension" => "vnd.net-fpx",
            "type" => "image/vnd.net-fpx",
            "Reference" => "[Marc_Douglas_Spencer]"
        ],
        [
            "extension" => "vnd.radiance",
            "type" => "image/vnd.radiance",
            "Reference" => "[Randolph_Fritz][Greg_Ward]"
        ],
        [
            "extension" => "vnd.sealed.png",
            "type" => "image/vnd.sealed.png",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealedmedia.softseal.gif",
            "type" => "image/vnd.sealedmedia.softseal.gif",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealedmedia.softseal.jpg",
            "type" => "image/vnd.sealedmedia.softseal.jpg",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.svf",
            "type" => "image/vnd.svf",
            "Reference" => "[Jodi_Moline]"
        ],
        [
            "extension" => "vnd.tencent.tap",
            "type" => "image/vnd.tencent.tap",
            "Reference" => "[Ni_Hui]"
        ],
        [
            "extension" => "vnd.valve.source.texture",
            "type" => "image/vnd.valve.source.texture",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.wap.wbmp",
            "type" => "image/vnd.wap.wbmp",
            "Reference" => "[Peter_Stark]"
        ],
        [
            "extension" => "vnd.xiff",
            "type" => "image/vnd.xiff",
            "Reference" => "[Steven_Martin]"
        ],
        [
            "extension" => "vnd.zbrush.pcx",
            "type" => "image/vnd.zbrush.pcx",
            "Reference" => "[Chris_Charabaruk]"
        ],
        [
            "extension" => "wmf",
            "type" => "image/wmf",
            "Reference" => "[RFC7903]"
        ],
        [
            "extension" => "x-emf - DEPRECATED in favor of image/emf",
            "type" => "image/emf",
            "Reference" => "[RFC7903]"
        ],
        [
            "extension" => "x-wmf - DEPRECATED in favor of image/wmf",
            "type" => "image/wmf",
            "Reference" => "[RFC7903]"
        ],
        [
            "extension" => "CPIM",
            "type" => "message/CPIM",
            "Reference" => "[RFC3862]"
        ],
        [
            "extension" => "delivery-status",
            "type" => "message/delivery-status",
            "Reference" => "[RFC1894]"
        ],
        [
            "extension" => "disposition-notification",
            "type" => "message/disposition-notification",
            "Reference" => "[RFC8098]"
        ],
        [
            "extension" => "example",
            "type" => "message/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "external-body",
            "type" => null,
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "feedback-report",
            "type" => "message/feedback-report",
            "Reference" => "[RFC5965]"
        ],
        [
            "extension" => "global",
            "type" => "message/global",
            "Reference" => "[RFC6532]"
        ],
        [
            "extension" => "global-delivery-status",
            "type" => "message/global-delivery-status",
            "Reference" => "[RFC6533]"
        ],
        [
            "extension" => "global-disposition-notification",
            "type" => "message/global-disposition-notification",
            "Reference" => "[RFC6533]"
        ],
        [
            "extension" => "global-headers",
            "type" => "message/global-headers",
            "Reference" => "[RFC6533]"
        ],
        [
            "extension" => "http",
            "type" => "message/http",
            "Reference" => "[RFC7230]"
        ],
        [
            "extension" => "imdn+xml",
            "type" => "message/imdn+xml",
            "Reference" => "[RFC5438]"
        ],
        [
            "extension" => "news - OBSOLETED by RFC5537",
            "type" => "message/news",
            "Reference" => "[RFC5537][Henry_Spencer]"
        ],
        [
            "extension" => "partial",
            "type" => null,
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "rfc822",
            "type" => null,
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "s-http",
            "type" => "message/s-http",
            "Reference" => "[RFC2660]"
        ],
        [
            "extension" => "sip",
            "type" => "message/sip",
            "Reference" => "[RFC3261]"
        ],
        [
            "extension" => "sipfrag",
            "type" => "message/sipfrag",
            "Reference" => "[RFC3420]"
        ],
        [
            "extension" => "tracking-status",
            "type" => "message/tracking-status",
            "Reference" => "[RFC3886]"
        ],
        [
            "extension" => "vnd.si.simp - OBSOLETED by request",
            "type" => "message/vnd.si.simp",
            "Reference" => "[Nicholas_Parks_Young]"
        ],
        [
            "extension" => "vnd.wfa.wsc",
            "type" => "message/vnd.wfa.wsc",
            "Reference" => "[Mick_Conley]"
        ],
        [
            "extension" => "3mf",
            "type" => "model/3mf",
            "Reference" => "[http=>//www.3mf.io/specification][_3MF][Michael_Sweet]"
        ],
        [
            "extension" => "e57",
            "type" => "model/e57",
            "Reference" => "[ASTM]"
        ],
        [
            "extension" => "example",
            "type" => "model/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "gltf-binary",
            "type" => "model/gltf-binary",
            "Reference" => "[Khronos][Saurabh_Bhatia]"
        ],
        [
            "extension" => "gltf+json",
            "type" => "model/gltf+json",
            "Reference" => "[Khronos][Uli_Klumpp]"
        ],
        [
            "extension" => "iges",
            "type" => "model/iges",
            "Reference" => "[Curtis_Parks]"
        ],
        [
            "extension" => "mesh",
            "type" => null,
            "Reference" => "[RFC2077]"
        ],
        [
            "extension" => "mtl",
            "type" => "model/mtl",
            "Reference" => "[DICOM_Standards_Committee][Luiza_Kowalczyk]"
        ],
        [
            "extension" => "obj",
            "type" => "model/obj",
            "Reference" => "[DICOM_Standards_Committee][Luiza_Kowalczyk]"
        ],
        [
            "extension" => "stl",
            "type" => "model/stl",
            "Reference" => "[DICOM_Standards_Committee][Lisa_Spellman]"
        ],
        [
            "extension" => "vnd.collada+xml",
            "type" => "model/vnd.collada+xml",
            "Reference" => "[James_Riordon]"
        ],
        [
            "extension" => "vnd.dwf",
            "type" => "model/vnd.dwf",
            "Reference" => "[Jason_Pratt]"
        ],
        [
            "extension" => "vnd.flatland.3dml",
            "type" => "model/vnd.flatland.3dml",
            "Reference" => "[Michael_Powers]"
        ],
        [
            "extension" => "vnd.gdl",
            "type" => "model/vnd.gdl",
            "Reference" => "[Attila_Babits]"
        ],
        [
            "extension" => "vnd.gs-gdl",
            "type" => "model/vnd.gs-gdl",
            "Reference" => "[Attila_Babits]"
        ],
        [
            "extension" => "vnd.gtw",
            "type" => "model/vnd.gtw",
            "Reference" => "[Yutaka_Ozaki]"
        ],
        [
            "extension" => "vnd.moml+xml",
            "type" => "model/vnd.moml+xml",
            "Reference" => "[Christopher_Brooks]"
        ],
        [
            "extension" => "vnd.mts",
            "type" => "model/vnd.mts",
            "Reference" => "[Boris_Rabinovitch]"
        ],
        [
            "extension" => "vnd.opengex",
            "type" => "model/vnd.opengex",
            "Reference" => "[Eric_Lengyel]"
        ],
        [
            "extension" => "vnd.parasolid.transmit.binary",
            "type" => "model/vnd.parasolid.transmit.binary",
            "Reference" => "[Parasolid]"
        ],
        [
            "extension" => "vnd.parasolid.transmit.text",
            "type" => "model/vnd.parasolid.transmit.text",
            "Reference" => "[Parasolid]"
        ],
        [
            "extension" => "vnd.rosette.annotated-data-model",
            "type" => "model/vnd.rosette.annotated-data-model",
            "Reference" => "[Benson_Margulies]"
        ],
        [
            "extension" => "vnd.usdz+zip",
            "type" => "model/vnd.usdz+zip",
            "Reference" => "[Sebastian_Grassia]"
        ],
        [
            "extension" => "vnd.valve.source.compiled-map",
            "type" => "model/vnd.valve.source.compiled-map",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.vtu",
            "type" => "model/vnd.vtu",
            "Reference" => "[Boris_Rabinovitch]"
        ],
        [
            "extension" => "vrml",
            "type" => null,
            "Reference" => "[RFC2077]"
        ],
        [
            "extension" => "x3d-vrml",
            "type" => "model/x3d-vrml",
            "Reference" => "[Web3D][Web3D_X3D]"
        ],
        [
            "extension" => "x3d+fastinfoset",
            "type" => "model/x3d+fastinfoset",
            "Reference" => "[Web3D_X3D]"
        ],
        [
            "extension" => "x3d+xml",
            "type" => "model/x3d+xml",
            "Reference" => "[Web3D][Web3D_X3D]"
        ],
        [
            "extension" => "alternative",
            "type" => null,
            "Reference" => "[RFC2046][RFC2045]"
        ],
        [
            "extension" => "appledouble",
            "type" => "multipart/appledouble",
            "Reference" => "[Patrik_Faltstrom]"
        ],
        [
            "extension" => "byteranges",
            "type" => "multipart/byteranges",
            "Reference" => "[RFC7233]"
        ],
        [
            "extension" => "digest",
            "type" => null,
            "Reference" => "[RFC2046][RFC2045]"
        ],
        [
            "extension" => "encrypted",
            "type" => "multipart/encrypted",
            "Reference" => "[RFC1847]"
        ],
        [
            "extension" => "example",
            "type" => "multipart/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "form-data",
            "type" => "multipart/form-data",
            "Reference" => "[RFC7578]"
        ],
        [
            "extension" => "header-set",
            "type" => "multipart/header-set",
            "Reference" => "[Dave_Crocker]"
        ],
        [
            "extension" => "mixed",
            "type" => null,
            "Reference" => "[RFC2046][RFC2045]"
        ],
        [
            "extension" => "multilingual",
            "type" => "multipart/multilingual",
            "Reference" => "[RFC8255]"
        ],
        [
            "extension" => "parallel",
            "type" => null,
            "Reference" => "[RFC2046][RFC2045]"
        ],
        [
            "extension" => "related",
            "type" => "multipart/related",
            "Reference" => "[RFC2387]"
        ],
        [
            "extension" => "report",
            "type" => "multipart/report",
            "Reference" => "[RFC6522]"
        ],
        [
            "extension" => "signed",
            "type" => "multipart/signed",
            "Reference" => "[RFC1847]"
        ],
        [
            "extension" => "vnd.bint.med-plus",
            "type" => "multipart/vnd.bint.med-plus",
            "Reference" => "[Heinz-Peter_Schütz]"
        ],
        [
            "extension" => "voice-message",
            "type" => "multipart/voice-message",
            "Reference" => "[RFC3801]"
        ],
        [
            "extension" => "x-mixed-replace",
            "type" => "multipart/x-mixed-replace",
            "Reference" => "[W3C][Robin_Berjon]"
        ],
        [
            "extension" => "1d-interleaved-parityfec",
            "type" => "text/1d-interleaved-parityfec",
            "Reference" => "[RFC6015]"
        ],
        [
            "extension" => "cache-manifest",
            "type" => "text/cache-manifest",
            "Reference" => "[W3C][Robin_Berjon]"
        ],
        [
            "extension" => "calendar",
            "type" => "text/calendar",
            "Reference" => "[RFC5545]"
        ],
        [
            "extension" => "css",
            "type" => "text/css",
            "Reference" => "[RFC2318]"
        ],
        [
            "extension" => "csv",
            "type" => "text/csv",
            "Reference" => "[RFC4180][RFC7111]"
        ],
        [
            "extension" => "csv-schema",
            "type" => "text/csv-schema",
            "Reference" => "[National_Archives_UK][David_Underdown]"
        ],
        [
            "extension" => "directory - DEPRECATED by RFC6350",
            "type" => "text/directory",
            "Reference" => "[RFC2425][RFC6350]"
        ],
        [
            "extension" => "dns",
            "type" => "text/dns",
            "Reference" => "[RFC4027]"
        ],
        [
            "extension" => "ecmascript - OBSOLETED in favor of application/ecmascript",
            "type" => "text/ecmascript",
            "Reference" => "[RFC4329]"
        ],
        [
            "extension" => "encaprtp",
            "type" => "text/encaprtp",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "enriched",
            "type" => null,
            "Reference" => "[RFC1896]"
        ],
        [
            "extension" => "example",
            "type" => "text/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "flexfec",
            "type" => "text/flexfec",
            "Reference" => "[RFC8627]"
        ],
        [
            "extension" => "fwdred",
            "type" => "text/fwdred",
            "Reference" => "[RFC6354]"
        ],
        [
            "extension" => "gff3",
            "type" => "text/gff3",
            "Reference" => "[Sequence_Ontology]"
        ],
        [
            "extension" => "grammar-ref-list",
            "type" => "text/grammar-ref-list",
            "Reference" => "[RFC6787]"
        ],
        [
            "extension" => "html",
            "type" => "text/html",
            "Reference" => "[W3C][Robin_Berjon]"
        ],
        [
            "extension" => "javascript - OBSOLETED in favor of application/javascript",
            "type" => "text/javascript",
            "Reference" => "[RFC4329]"
        ],
        [
            "extension" => "jcr-cnd",
            "type" => "text/jcr-cnd",
            "Reference" => "[Peeter_Piegaze]"
        ],
        [
            "extension" => "markdown",
            "type" => "text/markdown",
            "Reference" => "[RFC7763]"
        ],
        [
            "extension" => "mizar",
            "type" => "text/mizar",
            "Reference" => "[Jesse_Alama]"
        ],
        [
            "extension" => "n3",
            "type" => "text/n3",
            "Reference" => "[W3C][Eric_Prudhommeaux]"
        ],
        [
            "extension" => "parameters",
            "type" => "text/parameters",
            "Reference" => "[RFC7826]"
        ],
        [
            "extension" => "parityfec",
            "type" => null,
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "plain",
            "type" => null,
            "Reference" => "[RFC2046][RFC3676][RFC5147]"
        ],
        [
            "extension" => "provenance-notation",
            "type" => "text/provenance-notation",
            "Reference" => "[W3C][Ivan_Herman]"
        ],
        [
            "extension" => "prs.fallenstein.rst",
            "type" => "text/prs.fallenstein.rst",
            "Reference" => "[Benja_Fallenstein]"
        ],
        [
            "extension" => "prs.lines.tag",
            "type" => "text/prs.lines.tag",
            "Reference" => "[John_Lines]"
        ],
        [
            "extension" => "prs.prop.logic",
            "type" => "text/prs.prop.logic",
            "Reference" => "[Hans-Dieter_A._Hiep]"
        ],
        [
            "extension" => "raptorfec",
            "type" => "text/raptorfec",
            "Reference" => "[RFC6682]"
        ],
        [
            "extension" => "RED",
            "type" => "text/RED",
            "Reference" => "[RFC4102]"
        ],
        [
            "extension" => "rfc822-headers",
            "type" => "text/rfc822-headers",
            "Reference" => "[RFC6522]"
        ],
        [
            "extension" => "richtext",
            "type" => null,
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "rtf",
            "type" => "text/rtf",
            "Reference" => "[Paul_Lindner]"
        ],
        [
            "extension" => "rtp-enc-aescm128",
            "type" => "text/rtp-enc-aescm128",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "rtploopback",
            "type" => "text/rtploopback",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "rtx",
            "type" => "text/rtx",
            "Reference" => "[RFC4588]"
        ],
        [
            "extension" => "SGML",
            "type" => "text/SGML",
            "Reference" => "[RFC1874]"
        ],
        [
            "extension" => "shaclc",
            "type" => "text/shaclc",
            "Reference" => "[W3C_SHACL_Community_Group][Vladimir_Alexiev]"
        ],
        [
            "extension" => "spdx",
            "type" => "text/spdx",
            "Reference" => "[Linux_Foundation][Rose_Judge]"
        ],
        [
            "extension" => "strings",
            "type" => "text/strings",
            "Reference" => "[IEEE-ISTO-PWG-PPP]"
        ],
        [
            "extension" => "t140",
            "type" => "text/t140",
            "Reference" => "[RFC4103]"
        ],
        [
            "extension" => "tab-separated-values",
            "type" => "text/tab-separated-values",
            "Reference" => "[Paul_Lindner]"
        ],
        [
            "extension" => "troff",
            "type" => "text/troff",
            "Reference" => "[RFC4263]"
        ],
        [
            "extension" => "turtle",
            "type" => "text/turtle",
            "Reference" => "[W3C][Eric_Prudhommeaux]"
        ],
        [
            "extension" => "ulpfec",
            "type" => "text/ulpfec",
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "uri-list",
            "type" => "text/uri-list",
            "Reference" => "[RFC2483]"
        ],
        [
            "extension" => "vcard",
            "type" => "text/vcard",
            "Reference" => "[RFC6350]"
        ],
        [
            "extension" => "vnd.a",
            "type" => "text/vnd.a",
            "Reference" => "[Regis_Dehoux]"
        ],
        [
            "extension" => "vnd.abc",
            "type" => "text/vnd.abc",
            "Reference" => "[Steve_Allen]"
        ],
        [
            "extension" => "vnd.ascii-art",
            "type" => "text/vnd.ascii-art",
            "Reference" => "[Kim_Scarborough]"
        ],
        [
            "extension" => "vnd.curl",
            "type" => "text/vnd.curl",
            "Reference" => "[Robert_Byrnes]"
        ],
        [
            "extension" => "vnd.debian.copyright",
            "type" => "text/vnd.debian.copyright",
            "Reference" => "[Charles_Plessy]"
        ],
        [
            "extension" => "vnd.DMClientScript",
            "type" => "text/vnd.DMClientScript",
            "Reference" => "[Dan_Bradley]"
        ],
        [
            "extension" => "vnd.dvb.subtitle",
            "type" => "text/vnd.dvb.subtitle",
            "Reference" => "[Peter_Siebert][Michael_Lagally]"
        ],
        [
            "extension" => "vnd.esmertec.theme-descriptor",
            "type" => "text/vnd.esmertec.theme-descriptor",
            "Reference" => "[Stefan_Eilemann]"
        ],
        [
            "extension" => "vnd.ficlab.flt",
            "type" => "text/vnd.ficlab.flt",
            "Reference" => "[Steve_Gilberd]"
        ],
        [
            "extension" => "vnd.fly",
            "type" => "text/vnd.fly",
            "Reference" => "[John-Mark_Gurney]"
        ],
        [
            "extension" => "vnd.fmi.flexstor",
            "type" => "text/vnd.fmi.flexstor",
            "Reference" => "[Kari_E._Hurtta]"
        ],
        [
            "extension" => "vnd.gml",
            "type" => "text/vnd.gml",
            "Reference" => "[Mi_Tar]"
        ],
        [
            "extension" => "vnd.graphviz",
            "type" => "text/vnd.graphviz",
            "Reference" => "[John_Ellson]"
        ],
        [
            "extension" => "vnd.hans",
            "type" => "text/vnd.hans",
            "Reference" => "[Hill_Hanxv]"
        ],
        [
            "extension" => "vnd.hgl",
            "type" => "text/vnd.hgl",
            "Reference" => "[Heungsub_Lee]"
        ],
        [
            "extension" => "vnd.in3d.3dml",
            "type" => "text/vnd.in3d.3dml",
            "Reference" => "[Michael_Powers]"
        ],
        [
            "extension" => "vnd.in3d.spot",
            "type" => "text/vnd.in3d.spot",
            "Reference" => "[Michael_Powers]"
        ],
        [
            "extension" => "vnd.IPTC.NewsML",
            "type" => "text/vnd.IPTC.NewsML",
            "Reference" => "[IPTC]"
        ],
        [
            "extension" => "vnd.IPTC.NITF",
            "type" => "text/vnd.IPTC.NITF",
            "Reference" => "[IPTC]"
        ],
        [
            "extension" => "vnd.latex-z",
            "type" => "text/vnd.latex-z",
            "Reference" => "[Mikusiak_Lubos]"
        ],
        [
            "extension" => "vnd.motorola.reflex",
            "type" => "text/vnd.motorola.reflex",
            "Reference" => "[Mark_Patton]"
        ],
        [
            "extension" => "vnd.ms-mediapackage",
            "type" => "text/vnd.ms-mediapackage",
            "Reference" => "[Jan_Nelson]"
        ],
        [
            "extension" => "vnd.net2phone.commcenter.command",
            "type" => "text/vnd.net2phone.commcenter.command",
            "Reference" => "[Feiyu_Xie]"
        ],
        [
            "extension" => "vnd.radisys.msml-basic-layout",
            "type" => "text/vnd.radisys.msml-basic-layout",
            "Reference" => "[RFC5707]"
        ],
        [
            "extension" => "vnd.senx.warpscript",
            "type" => "text/vnd.senx.warpscript",
            "Reference" => "[Pierre_Papin]"
        ],
        [
            "extension" => "vnd.si.uricatalogue - OBSOLETED by request",
            "type" => "text/vnd.si.uricatalogue",
            "Reference" => "[Nicholas_Parks_Young]"
        ],
        [
            "extension" => "vnd.sun.j2me.app-descriptor",
            "type" => "text/vnd.sun.j2me.app-descriptor",
            "Reference" => "[Gary_Adams]"
        ],
        [
            "extension" => "vnd.sosi",
            "type" => "text/vnd.sosi",
            "Reference" => "[Petter_Reinholdtsen]"
        ],
        [
            "extension" => "vnd.trolltech.linguist",
            "type" => "text/vnd.trolltech.linguist",
            "Reference" => "[David_Lee_Lambert]"
        ],
        [
            "extension" => "vnd.wap.si",
            "type" => "text/vnd.wap.si",
            "Reference" => "[WAP-Forum]"
        ],
        [
            "extension" => "vnd.wap.sl",
            "type" => "text/vnd.wap.sl",
            "Reference" => "[WAP-Forum]"
        ],
        [
            "extension" => "vnd.wap.wml",
            "type" => "text/vnd.wap.wml",
            "Reference" => "[Peter_Stark]"
        ],
        [
            "extension" => "vnd.wap.wmlscript",
            "type" => "text/vnd.wap.wmlscript",
            "Reference" => "[Peter_Stark]"
        ],
        [
            "extension" => "vtt",
            "type" => "text/vtt",
            "Reference" => "[W3C][Silvia_Pfeiffer]"
        ],
        [
            "extension" => "xml",
            "type" => "text/xml",
            "Reference" => "[RFC7303]"
        ],
        [
            "extension" => "xml-external-parsed-entity",
            "type" => "text/xml-external-parsed-entity",
            "Reference" => "[RFC7303]"
        ],
        [
            "extension" => "1d-interleaved-parityfec",
            "type" => "video/1d-interleaved-parityfec",
            "Reference" => "[RFC6015]"
        ],
        [
            "extension" => "3gpp",
            "type" => "video/3gpp",
            "Reference" => "[RFC3839][RFC6381]"
        ],
        [
            "extension" => "3gpp2",
            "type" => "video/3gpp2",
            "Reference" => "[RFC4393][RFC6381]"
        ],
        [
            "extension" => "3gpp-tt",
            "type" => "video/3gpp-tt",
            "Reference" => "[RFC4396]"
        ],
        [
            "extension" => "BMPEG",
            "type" => "video/BMPEG",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "BT656",
            "type" => "video/BT656",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "CelB",
            "type" => "video/CelB",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "DV",
            "type" => "video/DV",
            "Reference" => "[RFC6469]"
        ],
        [
            "extension" => "encaprtp",
            "type" => "video/encaprtp",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "example",
            "type" => "video/example",
            "Reference" => "[RFC4735]"
        ],
        [
            "extension" => "flexfec",
            "type" => "video/flexfec",
            "Reference" => "[RFC8627]"
        ],
        [
            "extension" => "H261",
            "type" => "video/H261",
            "Reference" => "[RFC4587]"
        ],
        [
            "extension" => "H263",
            "type" => "video/H263",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "H263-1998",
            "type" => "video/H263-1998",
            "Reference" => "[RFC4629]"
        ],
        [
            "extension" => "H263-2000",
            "type" => "video/H263-2000",
            "Reference" => "[RFC4629]"
        ],
        [
            "extension" => "H264",
            "type" => "video/H264",
            "Reference" => "[RFC6184]"
        ],
        [
            "extension" => "H264-RCDO",
            "type" => "video/H264-RCDO",
            "Reference" => "[RFC6185]"
        ],
        [
            "extension" => "H264-SVC",
            "type" => "video/H264-SVC",
            "Reference" => "[RFC6190]"
        ],
        [
            "extension" => "H265",
            "type" => "video/H265",
            "Reference" => "[RFC7798]"
        ],
        [
            "extension" => "iso.segment",
            "type" => "video/iso.segment",
            "Reference" => "[David_Singer][ISO-IEC_JTC1]"
        ],
        [
            "extension" => "JPEG",
            "type" => "video/JPEG",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "jpeg2000",
            "type" => "video/jpeg2000",
            "Reference" => "[RFC5371][RFC5372]"
        ],
        [
            "extension" => "mj2",
            "type" => "video/mj2",
            "Reference" => "[RFC3745]"
        ],
        [
            "extension" => "MP1S",
            "type" => "video/MP1S",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "MP2P",
            "type" => "video/MP2P",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "MP2T",
            "type" => "video/MP2T",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "mp4",
            "type" => "video/mp4",
            "Reference" => "[RFC4337][RFC6381]"
        ],
        [
            "extension" => "MP4V-ES",
            "type" => "video/MP4V-ES",
            "Reference" => "[RFC6416]"
        ],
        [
            "extension" => "MPV",
            "type" => "video/MPV",
            "Reference" => "[RFC3555]"
        ],
        [
            "extension" => "mpeg",
            "type" => null,
            "Reference" => "[RFC2045][RFC2046]"
        ],
        [
            "extension" => "mpeg4-generic",
            "type" => "video/mpeg4-generic",
            "Reference" => "[RFC3640]"
        ],
        [
            "extension" => "nv",
            "type" => "video/nv",
            "Reference" => "[RFC4856]"
        ],
        [
            "extension" => "ogg",
            "type" => "video/ogg",
            "Reference" => "[RFC5334][RFC7845]"
        ],
        [
            "extension" => "parityfec",
            "type" => null,
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "pointer",
            "type" => "video/pointer",
            "Reference" => "[RFC2862]"
        ],
        [
            "extension" => "quicktime",
            "type" => "video/quicktime",
            "Reference" => "[RFC6381][Paul_Lindner]"
        ],
        [
            "extension" => "raptorfec",
            "type" => "video/raptorfec",
            "Reference" => "[RFC6682]"
        ],
        [
            "extension" => "raw",
            "type" => "video/raw",
            "Reference" => "[RFC4175]"
        ],
        [
            "extension" => "rtp-enc-aescm128",
            "type" => "video/rtp-enc-aescm128",
            "Reference" => "[_3GPP]"
        ],
        [
            "extension" => "rtploopback",
            "type" => "video/rtploopback",
            "Reference" => "[RFC6849]"
        ],
        [
            "extension" => "rtx",
            "type" => "video/rtx",
            "Reference" => "[RFC4588]"
        ],
        [
            "extension" => "smpte291",
            "type" => "video/smpte291",
            "Reference" => "[RFC8331]"
        ],
        [
            "extension" => "SMPTE292M",
            "type" => "video/SMPTE292M",
            "Reference" => "[RFC3497]"
        ],
        [
            "extension" => "ulpfec",
            "type" => "video/ulpfec",
            "Reference" => "[RFC5109]"
        ],
        [
            "extension" => "vc1",
            "type" => "video/vc1",
            "Reference" => "[RFC4425]"
        ],
        [
            "extension" => "vc2",
            "type" => "video/vc2",
            "Reference" => "[RFC8450]"
        ],
        [
            "extension" => "vnd.CCTV",
            "type" => "video/vnd.CCTV",
            "Reference" => "[Frank_Rottmann]"
        ],
        [
            "extension" => "vnd.dece.hd",
            "type" => "video/vnd.dece.hd",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.mobile",
            "type" => "video/vnd.dece.mobile",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.mp4",
            "type" => "video/vnd.dece.mp4",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.pd",
            "type" => "video/vnd.dece.pd",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.sd",
            "type" => "video/vnd.dece.sd",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.dece.video",
            "type" => "video/vnd.dece.video",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.directv.mpeg",
            "type" => "video/vnd.directv.mpeg",
            "Reference" => "[Nathan_Zerbe]"
        ],
        [
            "extension" => "vnd.directv.mpeg-tts",
            "type" => "video/vnd.directv.mpeg-tts",
            "Reference" => "[Nathan_Zerbe]"
        ],
        [
            "extension" => "vnd.dlna.mpeg-tts",
            "type" => "video/vnd.dlna.mpeg-tts",
            "Reference" => "[Edwin_Heredia]"
        ],
        [
            "extension" => "vnd.dvb.file",
            "type" => "video/vnd.dvb.file",
            "Reference" => "[Peter_Siebert][Kevin_Murray]"
        ],
        [
            "extension" => "vnd.fvt",
            "type" => "video/vnd.fvt",
            "Reference" => "[Arild_Fuldseth]"
        ],
        [
            "extension" => "vnd.hns.video",
            "type" => "video/vnd.hns.video",
            "Reference" => "[Swaminathan]"
        ],
        [
            "extension" => "vnd.iptvforum.1dparityfec-1010",
            "type" => "video/vnd.iptvforum.1dparityfec-1010",
            "Reference" => "[Shuji_Nakamura]"
        ],
        [
            "extension" => "vnd.iptvforum.1dparityfec-2005",
            "type" => "video/vnd.iptvforum.1dparityfec-2005",
            "Reference" => "[Shuji_Nakamura]"
        ],
        [
            "extension" => "vnd.iptvforum.2dparityfec-1010",
            "type" => "video/vnd.iptvforum.2dparityfec-1010",
            "Reference" => "[Shuji_Nakamura]"
        ],
        [
            "extension" => "vnd.iptvforum.2dparityfec-2005",
            "type" => "video/vnd.iptvforum.2dparityfec-2005",
            "Reference" => "[Shuji_Nakamura]"
        ],
        [
            "extension" => "vnd.iptvforum.ttsavc",
            "type" => "video/vnd.iptvforum.ttsavc",
            "Reference" => "[Shuji_Nakamura]"
        ],
        [
            "extension" => "vnd.iptvforum.ttsmpeg2",
            "type" => "video/vnd.iptvforum.ttsmpeg2",
            "Reference" => "[Shuji_Nakamura]"
        ],
        [
            "extension" => "vnd.motorola.video",
            "type" => "video/vnd.motorola.video",
            "Reference" => "[Tom_McGinty]"
        ],
        [
            "extension" => "vnd.motorola.videop",
            "type" => "video/vnd.motorola.videop",
            "Reference" => "[Tom_McGinty]"
        ],
        [
            "extension" => "vnd.mpegurl",
            "type" => "video/vnd.mpegurl",
            "Reference" => "[Heiko_Recktenwald]"
        ],
        [
            "extension" => "vnd.ms-playready.media.pyv",
            "type" => "video/vnd.ms-playready.media.pyv",
            "Reference" => "[Steve_DiAcetis]"
        ],
        [
            "extension" => "vnd.nokia.interleaved-multimedia",
            "type" => "video/vnd.nokia.interleaved-multimedia",
            "Reference" => "[Petteri_Kangaslampi]"
        ],
        [
            "extension" => "vnd.nokia.mp4vr",
            "type" => "video/vnd.nokia.mp4vr",
            "Reference" => "[Miska_M._Hannuksela]"
        ],
        [
            "extension" => "vnd.nokia.videovoip",
            "type" => "video/vnd.nokia.videovoip",
            "Reference" => "[Nokia]"
        ],
        [
            "extension" => "vnd.objectvideo",
            "type" => "video/vnd.objectvideo",
            "Reference" => "[John_Clark]"
        ],
        [
            "extension" => "vnd.radgamettools.bink",
            "type" => "video/vnd.radgamettools.bink",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.radgamettools.smacker",
            "type" => "video/vnd.radgamettools.smacker",
            "Reference" => "[Henrik_Andersson]"
        ],
        [
            "extension" => "vnd.sealed.mpeg1",
            "type" => "video/vnd.sealed.mpeg1",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealed.mpeg4",
            "type" => "video/vnd.sealed.mpeg4",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealed.swf",
            "type" => "video/vnd.sealed.swf",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.sealedmedia.softseal.mov",
            "type" => "video/vnd.sealedmedia.softseal.mov",
            "Reference" => "[David_Petersen]"
        ],
        [
            "extension" => "vnd.uvvu.mp4",
            "type" => "video/vnd.uvvu.mp4",
            "Reference" => "[Michael_A_Dolan]"
        ],
        [
            "extension" => "vnd.youtube.yt",
            "type" => "video/vnd.youtube.yt",
            "Reference" => "[Google]"
        ],
        [
            "extension" => "vnd.vivo",
            "type" => "video/vnd.vivo",
            "Reference" => "[John_Wolfe]"
        ],
        [
            "extension" => "VP8",
            "type" => "video/VP8",
            "Reference" => "[RFC7741]"
        ]
    ];
}