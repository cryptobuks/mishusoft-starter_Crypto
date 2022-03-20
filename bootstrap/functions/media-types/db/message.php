<?php

/**
 * The loader of backup database functions for mishusoft application
 *
 * Php version 8.0
 *
 * @category Loader
 * @package  Mishusoft_Framework
 * @author   Al-Amin Ahamed <alamin@mishusoft.com>
 * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
 * @link     https://mishusoft.com
 */


function media_types_message ():array { return [
    0 => [
        'extension' => [
            0 => 'ez',
        ],
        'type' => 'application/andrew-inset',
        'document' => 'ATK inset',
        'acronym' => 'ATK',
        'expanded-acronym' => 'Andrew Toolkit',
    ],
    1 => [
        'extension' => [
            0 => 'anx',
        ],
        'type' => 'application/annodex',
        'document' => 'Annodex exchange format',
        'alias' => 'application/x-annodex',
    ],
    2 => [
        'extension' => [
            0 => 'atom',
        ],
        'type' => 'application/atom+xml',
        'document' => 'Atom syndication feed',
        'sub-class-of' => 'application/xml',
    ],
    3 => [
        'extension' => [
            0 => 'dicomdir',
            1 => 'dcm',
        ],
        'type' => 'application/dicom',
        'document' => 'DICOM image',
        'acronym' => 'DICOM',
        'expanded-acronym' => 'Digital Imaging and Communications in Medicine',
    ],
    4 => [
        'extension' => [
            0 => 'es',
        ],
        'type' => 'application/ecmascript',
        'document' => 'ECMAScript program',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/ecmascript',
    ],
    5 => [
        'extension' => [
            0 => 'epub',
            1 => 'epub',
        ],
        'type' => 'application/epub+zip',
        'document' => 'electronic book document',
        'sub-class-of' => 'application/zip',
    ],
    6 => [
        'extension' => [
            0 => 'geojson',
            1 => 'geo.json',
        ],
        'type' => 'application/geo+json',
        'document' => 'GeoJSON geospatial data',
        'sub-class-of' => 'application/json',
        'alias' => 'application/vnd.geo+json',
    ],
    7 => [
        'extension' => [
            0 => 'gml',
        ],
        'type' => 'application/gml+xml',
        'document' => 'GML document',
        'acronym' => 'GML',
        'expanded-acronym' => 'Geography Markup Language',
        'sub-class-of' => 'application/xml',
    ],
    8 => [
        'extension' => [
            0 => 'gnd',
        ],
        'type' => 'application/gnunet-directory',
        'document' => 'GNUnet search file',
    ],
    9 => [
        'extension' => [
            0 => 'gpx',
        ],
        'type' => 'application/gpx+xml',
        'document' => 'GPX geographic data',
        'acronym' => 'GPX',
        'expanded-acronym' => 'GPS Exchange Format',
        'sub-class-of' => 'application/xml',
        'alias' => 'application/x-gpx',
    ],
    10 => [
        'extension' => [
            0 => 'gz',
        ],
        'type' => 'application/gzip',
        'document' => 'Gzip archive',
        'alias' => 'application/x-gzip',
    ],
    11 => [
        'extension' => [
            0 => 'ai',
        ],
        'type' => 'application/illustrator',
        'document' => 'Adobe Illustrator document',
        'alias' => 'application/vnd.adobe.illustrator',
    ],
    12 => [
        'extension' => [
            0 => 'js',
            1 => 'jsm',
            2 => 'mjs',
        ],
        'type' => 'application/javascript',
        'document' => 'JavaScript program',
        'sub-class-of' => 'application/ecmascript',
        'alias' => 'text/javascript',
    ],
    13 => [
        'extension' => [
            0 => 'jrd',
        ],
        'type' => 'application/jrd+json',
        'document' => 'JRD document',
        'acronym' => 'JRD',
        'expanded-acronym' => 'JSON Resource Descriptor',
        'sub-class-of' => 'application/json',
    ],
    14 => [
        'extension' => [
            0 => 'json-patch',
        ],
        'type' => 'application/json-patch+json',
        'document' => 'JSON patch',
        'acronym' => 'JSON',
        'expanded-acronym' => 'JavaScript Object Notation',
        'sub-class-of' => 'application/json',
    ],
    15 => [
        'extension' => [
            0 => 'json',
        ],
        'type' => 'application/json',
        'document' => 'JSON document',
        'acronym' => 'JSON',
        'expanded-acronym' => 'JavaScript Object Notation',
        'sub-class-of' => 'application/javascript',
    ],
    16 => [
        'extension' => [
            0 => 'jsonld',
        ],
        'type' => 'application/ld+json',
        'document' => 'JSON-LD document',
        'acronym' => 'JSON-LD',
        'expanded-acronym' => 'JavaScript Object Notation for Linked Data',
        'sub-class-of' => 'application/json',
    ],
    17 => [
        'extension' => [
        ],
        'type' => 'application/mac-binhex40',
        'document' => 'Macintosh BinHex-encoded file',
    ],
    18 => [
        'extension' => [
            0 => 'nb',
        ],
        'type' => 'application/mathematica',
        'document' => 'Mathematica Notebook file',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/x-mathematica',
    ],
    19 => [
        'extension' => [
            0 => 'mml',
        ],
        'type' => 'application/mathml+xml',
        'document' => 'MathML document',
        'acronym' => 'MathML',
        'expanded-acronym' => 'Mathematical Markup Language',
        'sub-class-of' => 'application/xml',
        'alias' => 'text/mathml',
    ],
    20 => [
        'extension' => [
            0 => 'mbox',
        ],
        'type' => 'application/mbox',
        'document' => 'mailbox file',
        'sub-class-of' => 'text/plain',
    ],
    21 => [
        'extension' => [
            0 => 'metalink',
        ],
        'type' => 'application/metalink+xml',
        'document' => 'Metalink file',
        'sub-class-of' => 'application/xml',
    ],
    22 => [
        'extension' => [
            0 => 'meta4',
        ],
        'type' => 'application/metalink4+xml',
        'document' => 'Metalink file',
        'sub-class-of' => 'application/xml',
    ],
    23 => [
        'extension' => [
            0 => 'dot',
        ],
        'type' => 'application/msword-template',
        'document' => 'Word template',
        'sub-class-of' => 'application/msword',
    ],
    24 => [
        'extension' => [
            0 => 'doc',
        ],
        'type' => 'application/msword',
        'document' => 'Word document',
        'sub-class-of' => 'application/x-ole-storage',
        'alias' => 'zz-application/zz-winassoc-doc',
    ],
    25 => [
        'extension' => [
            0 => 'mxf',
        ],
        'type' => 'application/mxf',
        'document' => 'MXF video',
        'acronym' => 'MXF',
        'expanded-acronym' => 'Material Exchange Format',
    ],
    26 => [
        'extension' => [
        ],
        'type' => 'application/octet-stream',
        'document' => 'unknown',
    ],
    27 => [
        'extension' => [
            0 => 'oda',
        ],
        'type' => 'application/oda',
        'document' => 'ODA document',
        'acronym' => 'ODA',
        'expanded-acronym' => 'Office Document Architecture',
    ],
    28 => [
        'extension' => [
            0 => 'ogx',
        ],
        'type' => 'application/ogg',
        'document' => 'Ogg multimedia file',
        'alias' => 'application/x-ogg',
    ],
    29 => [
        'extension' => [
            0 => 'ova',
        ],
        'type' => 'application/ovf',
        'document' => 'OVF disk image',
        'acronym' => 'OVF',
        'expanded-acronym' => 'Open Virtualization Format',
        'sub-class-of' => 'application/x-tar',
        'alias' => 'application/x-virtualbox-ova',
    ],
    30 => [
        'extension' => [
            0 => 'owx',
        ],
        'type' => 'application/owl+xml',
        'document' => 'OWL XML file',
        'acronym' => 'OWL',
        'expanded-acronym' => 'Web Ontology Language',
        'sub-class-of' => 'application/xml',
    ],
    31 => [
        'extension' => [
            0 => 'oxps',
        ],
        'type' => 'application/oxps',
        'document' => 'OpenXPS document',
        'acronym' => 'OpenXPS',
        'expanded-acronym' => 'Open XML Paper Specification',
        'sub-class-of' => 'application/zip',
    ],
    32 => [
        'extension' => [
            0 => 'pdf',
        ],
        'type' => 'application/pdf',
        'document' => 'PDF document',
        'acronym' => 'PDF',
        'expanded-acronym' => 'Portable Document Format',
        'alias' => 'application/nappdf',
    ],
    33 => [
        'extension' => [
            0 => 'pgp',
            1 => 'gpg',
            2 => 'asc',
        ],
        'type' => 'application/pgp-encrypted',
        'document' => 'PGP/MIME-encrypted message header',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/pgp',
    ],
    34 => [
        'extension' => [
            0 => 'skr',
            1 => 'pkr',
            2 => 'asc',
            3 => 'pgp',
            4 => 'gpg',
            5 => 'key',
        ],
        'type' => 'application/pgp-keys',
        'document' => 'PGP keys',
        'acronym' => 'PGP',
        'expanded-acronym' => 'Pretty Good Privacy',
        'sub-class-of' => 'text/plain',
    ],
    35 => [
        'extension' => [
            0 => 'asc',
            1 => 'sig',
            2 => 'pgp',
            3 => 'gpg',
        ],
        'type' => 'application/pgp-signature',
        'document' => 'detached OpenPGP signature',
        'sub-class-of' => 'text/plain',
    ],
    36 => [
        'extension' => [
        ],
        'type' => 'application/pkcs10+pem',
        'document' => 'PKCS#10 Certificate Request in PEM format',
        'sub-class-of' => 'application/x-pem-file',
    ],
    37 => [
        'extension' => [
            0 => 'p10',
            1 => 'p10',
            2 => 'csr',
        ],
        'type' => 'application/pkcs10',
        'document' => 'PKCS#10 Certificate Request',
        'acronym' => 'PKCS#10',
        'expanded-acronym' => 'Public-Key Cryptography Standards',
    ],
    38 => [
        'extension' => [
        ],
        'type' => 'application/pkcs12+pem',
        'document' => 'PKCS#12 Personal Key and Certificates in PEM format',
        'sub-class-of' => 'application/x-pem-file',
    ],
    39 => [
        'extension' => [
            0 => 'p12',
            1 => 'pfx',
        ],
        'type' => 'application/pkcs12',
        'document' => 'PKCS#12 certificate bundle',
        'acronym' => 'PKCS',
        'expanded-acronym' => 'Public-Key Cryptography Standards',
        'alias' => 'application/x-pkcs12',
    ],
    40 => [
        'extension' => [
        ],
        'type' => 'application/pkcs7-mime+pem',
        'document' => 'PKCS#7 Message and Certificates in PEM format',
        'sub-class-of' => 'application/x-pem-file',
    ],
    41 => [
        'extension' => [
            0 => 'p7c',
            1 => 'p7m',
            2 => 'p7c',
            3 => 'p7m',
            4 => 'spc',
            5 => 'p7b',
        ],
        'type' => 'application/pkcs7-mime',
        'document' => 'PKCS#7 Message and Certificates',
        'acronym' => 'PKCS#7',
        'expanded-acronym' => 'Public-Key Cryptography Standards',
        'alias' => 'application/x-pkcs7-certificates',
    ],
    42 => [
        'extension' => [
            0 => 'p7s',
            1 => 'p7s',
        ],
        'type' => 'application/pkcs7-signature',
        'document' => 'PKCS#7 Signature',
        'acronym' => 'PKCS#7',
        'expanded-acronym' => 'Secure/Multipurpose Internet Mail Extensions',
        'sub-class-of' => 'text/plain',
    ],
    43 => [
        'extension' => [
        ],
        'type' => 'application/pkcs8+pem',
        'document' => 'PKCS#8 Personal Key in PEM format',
        'sub-class-of' => 'application/x-pem-file',
    ],
    44 => [
        'extension' => [
            0 => 'p8e',
        ],
        'type' => 'application/pkcs8-encrypted',
        'document' => 'PKCS#8 private key (encrypted)',
        'acronym' => 'PKCS',
        'expanded-acronym' => 'Public-Key Cryptography Standards',
    ],
    45 => [
        'extension' => [
            0 => 'p8',
            1 => 'p8',
            2 => 'pkcs8',
        ],
        'type' => 'application/pkcs8',
        'document' => 'PKCS#8 Personal Key',
        'acronym' => 'PKCS#8',
        'expanded-acronym' => 'Public-Key Cryptography Standards',
    ],
    46 => [
        'extension' => [
        ],
        'type' => 'application/pkix-cert+pem',
        'document' => 'X.509 Certificate in PEM format',
        'sub-class-of' => 'application/x-pem-file',
    ],
    47 => [
        'extension' => [
            0 => 'cer',
            1 => 'cer',
            2 => 'crt',
            3 => 'cert',
        ],
        'type' => 'application/pkix-cert',
        'document' => 'X.509 Certificate',
        'alias' => 'application/x-x509-user-cert',
    ],
    48 => [
        'extension' => [
        ],
        'type' => 'application/pkix-crl+pem',
        'document' => 'Certificate Revocation List in PEM format',
        'sub-class-of' => 'application/x-pem-file',
    ],
    49 => [
        'extension' => [
            0 => 'crl',
            1 => 'crl',
        ],
        'type' => 'application/pkix-crl',
        'document' => 'Certificate Revocation List',
        'acronym' => 'CRL',
        'expanded-acronym' => 'Certificate Revocation List',
    ],
    50 => [
        'extension' => [
            0 => 'pkipath',
        ],
        'type' => 'application/pkix-pkipath',
        'document' => 'PkiPath certification path',
    ],
    51 => [
        'extension' => [
            0 => 'ps',
        ],
        'type' => 'application/postscript',
        'document' => 'PostScript document',
        'sub-class-of' => 'text/plain',
    ],
    52 => [
        'extension' => [
        ],
        'type' => 'application/prs.plucker',
        'document' => 'Plucker document',
    ],
    53 => [
        'extension' => [
            0 => 'ram',
        ],
        'type' => 'application/ram',
        'document' => 'RealMedia playlist',
    ],
    54 => [
        'extension' => [
            0 => 'raml',
        ],
        'type' => 'application/raml+yaml',
        'document' => 'RAML document',
        'acronym' => 'RAML',
        'expanded-acronym' => 'RESTful API Modeling Language',
        'sub-class-of' => 'application/x-yaml',
    ],
    55 => [
        'extension' => [
            0 => 'rdf',
            1 => 'rdfs',
            2 => 'owl',
        ],
        'type' => 'application/rdf+xml',
        'document' => 'RDF file',
        'acronym' => 'RDF',
        'expanded-acronym' => 'Resource Description Framework',
        'sub-class-of' => 'application/xml',
        'alias' => 'text/rdf',
    ],
    56 => [
        'extension' => [
            0 => 'rnc',
        ],
        'type' => 'application/relax-ng-compact-syntax',
        'document' => 'RELAX NG XML schema',
        'acronym' => 'RELAX NG',
        'expanded-acronym' => 'REgular LAnguage for XML Next Generation',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/x-rnc',
    ],
    57 => [
        'extension' => [
            0 => 'rng',
        ],
        'type' => 'application/relaxng',
        'document' => 'RELAX NG',
        'sub-class-of' => 'application/xml',
    ],
    58 => [
        'extension' => [
            0 => 'rss',
        ],
        'type' => 'application/rss+xml',
        'document' => 'RSS summary',
        'acronym' => 'RSS',
        'expanded-acronym' => 'RDF Site Summary',
        'sub-class-of' => 'application/xml',
        'alias' => 'text/rss',
    ],
    59 => [
        'extension' => [
            0 => 'rtf',
        ],
        'type' => 'application/rtf',
        'document' => 'RTF document',
        'acronym' => 'RTF',
        'expanded-acronym' => 'Rich Text Format',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/rtf',
    ],
    60 => [
        'extension' => [
            0 => 'json',
        ],
        'type' => 'application/schema+json',
        'document' => 'JSON schema',
        'sub-class-of' => 'application/json',
    ],
    61 => [
        'extension' => [
            0 => 'sdp',
        ],
        'type' => 'application/sdp',
        'document' => 'SDP multicast stream file',
        'acronym' => 'SDP',
        'expanded-acronym' => 'Session Description Protocol',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/vnd.sdp',
    ],
    62 => [
        'extension' => [
            0 => 'siv',
        ],
        'type' => 'application/sieve',
        'document' => 'Sieve mail filter script',
        'sub-class-of' => 'application/xml',
    ],
    63 => [
        'extension' => [
            0 => 'smil',
            1 => 'smi',
            2 => 'sml',
            3 => 'kino',
        ],
        'type' => 'application/smil+xml',
        'document' => 'SMIL document',
        'acronym' => 'SMIL',
        'expanded-acronym' => 'Synchronized Multimedia Integration Language',
        'sub-class-of' => 'application/xml',
        'alias' => 'application/smil',
    ],
    64 => [
        'extension' => [
            0 => 'sql',
        ],
        'type' => 'application/sql',
        'document' => 'SQL code',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-sql',
    ],
    65 => [
        'extension' => [
            0 => 'toml',
        ],
        'type' => 'application/toml',
        'document' => 'TOML document',
        'acronym' => 'TOML',
        'expanded-acronym' => 'Tom\'s Obvious Minimal Language',
        'sub-class-of' => 'text/plain',
    ],
    66 => [
        'extension' => [
            0 => 'trig',
        ],
        'type' => 'application/trig',
        'document' => 'TriG RDF document',
        'acronym' => 'TriG',
        'expanded-acronym' => 'TriG RDF Graph Triple Language',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/x-trig',
    ],
    67 => [
        'extension' => [
            0 => 'swf',
            1 => 'spl',
        ],
        'type' => 'application/vnd.adobe.flash.movie',
        'document' => 'Shockwave Flash file',
        'alias' => 'application/futuresplash',
    ],
    68 => [
        'extension' => [
            0 => 'azw3',
            1 => 'kfx',
        ],
        'type' => 'application/vnd.amazon.mobi8-ebook',
        'document' => 'Kindle book document',
        'sub-class-of' => 'application/x-mobipocket-ebook',
        'alias' => 'application/x-mobi8-ebook',
    ],
    69 => [
        'extension' => [
            0 => 'apk',
        ],
        'type' => 'application/vnd.android.package-archive',
        'document' => 'Android package',
        'sub-class-of' => 'application/x-java-archive',
    ],
    70 => [
        'extension' => [
            0 => 'appimage',
        ],
        'type' => 'application/vnd.appimage',
        'document' => 'AppImage application bundle',
        'sub-class-of' => 'application/vnd.squashfs',
    ],
    71 => [
        'extension' => [
            0 => 'key',
        ],
        'type' => 'application/vnd.apple.keynote',
        'document' => 'Apple Keynote 5 presentation',
        'sub-class-of' => 'application/zip',
        'alias' => 'application/x-iwork-keynote-sffkey',
    ],
    72 => [
        'extension' => [
            0 => 'm3u',
            1 => 'm3u8',
        ],
        'type' => 'application/vnd.apple.mpegurl',
        'document' => 'Media playlist',
        'sub-class-of' => 'text/plain',
    ],
    73 => [
        'extension' => [
            0 => 'numbers',
        ],
        'type' => 'application/vnd.apple.numbers',
        'document' => 'Apple Numbers spreadsheet',
        'sub-class-of' => 'application/zip',
        'alias' => 'application/x-iwork-numbers-sffnumbers',
    ],
    74 => [
        'extension' => [
            0 => 'pages',
        ],
        'type' => 'application/vnd.apple.pages',
        'document' => 'Apple Pages document',
        'sub-class-of' => 'application/zip',
        'alias' => 'application/x-iwork-pages-sffpages',
    ],
    75 => [
        'extension' => [
            0 => 'pgn',
        ],
        'type' => 'application/vnd.chess-pgn',
        'document' => 'PGN chess game notation',
        'acronym' => 'PGN',
        'expanded-acronym' => 'Portable Game Notation',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/x-chess-pgn',
    ],
    76 => [
        'extension' => [
            0 => 'coffee',
        ],
        'type' => 'application/vnd.coffeescript',
        'document' => 'CoffeeScript document',
        'sub-class-of' => 'text/plain',
    ],
    77 => [
        'extension' => [
            0 => 'cbz',
        ],
        'type' => 'application/vnd.comicbook+zip',
        'document' => 'comic book archive',
        'sub-class-of' => 'application/zip',
        'alias' => 'application/x-cbz',
    ],
    78 => [
        'extension' => [
            0 => 'cbr',
        ],
        'type' => 'application/vnd.comicbook-rar',
        'document' => 'comic book archive',
        'sub-class-of' => 'application/vnd.rar',
        'alias' => 'application/x-cbr',
    ],
    79 => [
        'extension' => [
            0 => 'cdr',
        ],
        'type' => 'application/vnd.corel-draw',
        'document' => 'Corel Draw drawing',
        'alias' => 'zz-application/zz-winassoc-cdr',
    ],
    80 => [
        'extension' => [
            0 => 'deb',
            1 => 'udeb',
        ],
        'type' => 'application/vnd.debian.binary-package',
        'document' => 'Debian package',
        'alias' => 'application/x-debian-package',
    ],
    81 => [
        'extension' => [
            0 => 'emp',
        ],
        'type' => 'application/vnd.emusic-emusic_package',
        'document' => 'eMusic download package',
    ],
    82 => [
        'extension' => [
            0 => 'flatpakref',
        ],
        'type' => 'application/vnd.flatpak.ref',
        'document' => 'Flatpak repository reference',
        'sub-class-of' => 'text/plain',
    ],
    83 => [
        'extension' => [
            0 => 'flatpakrepo',
        ],
        'type' => 'application/vnd.flatpak.repo',
        'document' => 'Flatpak repository description',
        'sub-class-of' => 'text/plain',
    ],
    84 => [
        'extension' => [
            0 => 'flatpak',
            1 => 'xdgapp',
        ],
        'type' => 'application/vnd.flatpak',
        'document' => 'Flatpak application bundle',
        'alias' => 'application/vnd.xdgapp',
    ],
    85 => [
        'extension' => [
            0 => 'fm',
        ],
        'type' => 'application/vnd.framemaker',
        'document' => 'Adobe FrameMaker document',
        'alias' => 'application/x-frame',
    ],
    86 => [
        'extension' => [
            0 => 'kml',
        ],
        'type' => 'application/vnd.google-earth.kml+xml',
        'document' => 'KML geographic data',
        'acronym' => 'KML',
        'expanded-acronym' => 'Keyhole Markup Language',
        'sub-class-of' => 'application/xml',
    ],
    87 => [
        'extension' => [
            0 => 'kmz',
        ],
        'type' => 'application/vnd.google-earth.kmz',
        'document' => 'KML geographic compressed data',
        'acronym' => 'KML',
        'expanded-acronym' => 'Keyhole Markup Language',
        'sub-class-of' => 'application/zip',
    ],
    88 => [
        'extension' => [
            0 => 'hpgl',
        ],
        'type' => 'application/vnd.hp-hpgl',
        'document' => 'HPGL file',
        'acronym' => 'HPGL',
        'expanded-acronym' => 'HP Graphics Language',
    ],
    89 => [
        'extension' => [
            0 => 'pcl',
        ],
        'type' => 'application/vnd.hp-pcl',
        'document' => 'PCL file',
        'acronym' => 'PCL',
        'expanded-acronym' => 'HP Printer Control Language',
    ],
    90 => [
        'extension' => [
            0 => 'icc',
            1 => 'icm',
        ],
        'type' => 'application/vnd.iccprofile',
        'document' => 'ICC profile',
    ],
    91 => [
        'extension' => [
            0 => 'fonts.zip',
        ],
        'type' => 'application/vnd.kde.fontspackage',
        'document' => 'fonts package',
        'sub-class-of' => 'application/zip',
    ],
    92 => [
        'extension' => [
            0 => 'kcfg',
        ],
        'type' => 'application/vnd.kde.kcfg',
        'document' => 'KConfigXT Configuration Options',
        'sub-class-of' => 'application/xml',
    ],
    93 => [
        'extension' => [
            0 => 'kcfgc',
        ],
        'type' => 'application/vnd.kde.kcfgc',
        'document' => 'KConfigXT Code Generation Options',
        'sub-class-of' => 'text/plain',
    ],
    94 => [
        'extension' => [
            0 => 'notifyrc',
        ],
        'type' => 'application/vnd.kde.knotificationrc',
        'document' => 'KNotification Declaration',
        'sub-class-of' => 'text/plain',
    ],
    95 => [
        'extension' => [
            0 => 'kim',
        ],
        'type' => 'application/vnd.kde.kphotoalbum-import',
        'document' => 'KPhotoAlbum import',
    ],
    96 => [
        'extension' => [
            0 => 'rc',
        ],
        'type' => 'application/vnd.kde.kxmlguirc',
        'document' => 'KXMLGUI UI Declaration',
        'sub-class-of' => 'application/xml',
    ],
    97 => [
        'extension' => [
            0 => 'okular',
        ],
        'type' => 'application/vnd.kde.okular-archive',
        'document' => 'Okular document archive',
    ],
    98 => [
        'extension' => [
            0 => '123',
            1 => 'wk1',
            2 => 'wk3',
            3 => 'wk4',
            4 => 'wks',
        ],
        'type' => 'application/vnd.lotus-1-2-3',
        'document' => 'Lotus 1-2-3 spreadsheet',
        'alias' => 'zz-application/zz-winassoc-123',
    ],
    99 => [
        'extension' => [
            0 => 'lwp',
        ],
        'type' => 'application/vnd.lotus-wordpro',
        'document' => 'Lotus Word Pro document',
    ],
    100 => [
        'extension' => [
            0 => 'xul',
        ],
        'type' => 'application/vnd.mozilla.xul+xml',
        'document' => 'XUL interface document',
        'acronym' => 'XUL',
        'expanded-acronym' => 'XML User interface markup Language',
        'sub-class-of' => 'application/xml',
    ],
    101 => [
        'extension' => [
            0 => 'mdb',
        ],
        'type' => 'application/vnd.ms-access',
        'document' => 'JET database',
        'acronym' => 'JET',
        'expanded-acronym' => 'Joint Engine Technology',
        'alias' => 'zz-application/zz-winassoc-mdb',
    ],
    102 => [
        'extension' => [
            0 => 'asf',
        ],
        'type' => 'application/vnd.ms-asf',
        'document' => 'ASF video',
        'acronym' => 'ASF',
        'expanded-acronym' => 'Advanced Streaming Format',
        'alias' => 'video/x-ms-asf-plugin',
    ],
    103 => [
        'extension' => [
            0 => 'cab',
        ],
        'type' => 'application/vnd.ms-cab-compressed',
        'document' => 'Microsoft Cabinet archive',
        'alias' => 'zz-application/zz-winassoc-cab',
    ],
    104 => [
        'extension' => [
            0 => 'xlam',
        ],
        'type' => 'application/vnd.ms-excel.addin.macroEnabled.12',
        'document' => 'Excel add-in',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    105 => [
        'extension' => [
            0 => 'xlsb',
        ],
        'type' => 'application/vnd.ms-excel.sheet.binary.macroEnabled.12',
        'document' => 'Excel 2007 binary spreadsheet',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    106 => [
        'extension' => [
            0 => 'xlsm',
        ],
        'type' => 'application/vnd.ms-excel.sheet.macroEnabled.12',
        'document' => 'Excel spreadsheet',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    107 => [
        'extension' => [
            0 => 'xltm',
        ],
        'type' => 'application/vnd.ms-excel.template.macroEnabled.12',
        'document' => 'Excel spreadsheet template',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    ],
    108 => [
        'extension' => [
            0 => 'xls',
            1 => 'xlc',
            2 => 'xll',
            3 => 'xlm',
            4 => 'xlw',
            5 => 'xla',
            6 => 'xlt',
            7 => 'xld',
        ],
        'type' => 'application/vnd.ms-excel',
        'document' => 'Excel spreadsheet',
        'alias' => 'zz-application/zz-winassoc-xls',
    ],
    109 => [
        'extension' => [
            0 => 'chm',
        ],
        'type' => 'application/vnd.ms-htmlhelp',
        'document' => 'CHM document',
        'acronym' => 'CHM',
        'expanded-acronym' => 'Compiled Help Modules',
        'alias' => 'application/x-chm',
    ],
    110 => [
        'extension' => [
            0 => 'ppam',
        ],
        'type' => 'application/vnd.ms-powerpoint.addin.macroEnabled.12',
        'document' => 'PowerPoint add-in',
    ],
    111 => [
        'extension' => [
            0 => 'pptm',
        ],
        'type' => 'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'document' => 'PowerPoint presentation',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    ],
    112 => [
        'extension' => [
            0 => 'sldm',
        ],
        'type' => 'application/vnd.ms-powerpoint.slide.macroEnabled.12',
        'document' => 'PowerPoint slide',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.presentationml.slide',
    ],
    113 => [
        'extension' => [
            0 => 'ppsm',
        ],
        'type' => 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12',
        'document' => 'PowerPoint presentation',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    ],
    114 => [
        'extension' => [
            0 => 'potm',
        ],
        'type' => 'application/vnd.ms-powerpoint.template.macroEnabled.12',
        'document' => 'PowerPoint presentation template',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.presentationml.template',
    ],
    115 => [
        'extension' => [
            0 => 'ppz',
            1 => 'ppt',
            2 => 'pps',
            3 => 'pot',
        ],
        'type' => 'application/vnd.ms-powerpoint',
        'document' => 'PowerPoint presentation',
        'alias' => 'application/x-mspowerpoint',
    ],
    116 => [
        'extension' => [
            0 => 'pub',
        ],
        'type' => 'application/vnd.ms-publisher',
        'document' => 'Microsoft Publisher document',
        'sub-class-of' => 'application/x-ole-storage',
    ],
    117 => [
        'extension' => [
            0 => 'tnef',
            1 => 'tnf',
            2 => 'winmail.dat',
        ],
        'type' => 'application/vnd.ms-tnef',
        'document' => 'TNEF message',
        'acronym' => 'TNEF',
        'expanded-acronym' => 'Transport Neutral Encapsulation Format',
        'alias' => 'application/ms-tnef',
    ],
    118 => [
        'extension' => [
            0 => 'vsdm',
        ],
        'type' => 'application/vnd.ms-visio.drawing.macroEnabled.main+xml',
        'document' => 'Office Open XML Visio drawing',
        'sub-class-of' => 'application/zip',
    ],
    119 => [
        'extension' => [
            0 => 'vsdx',
        ],
        'type' => 'application/vnd.ms-visio.drawing.main+xml',
        'document' => 'Office Open XML Visio drawing',
        'sub-class-of' => 'application/zip',
    ],
    120 => [
        'extension' => [
            0 => 'vssm',
        ],
        'type' => 'application/vnd.ms-visio.stencil.macroEnabled.main+xml',
        'document' => 'Office Open XML Visio stencil',
        'sub-class-of' => 'application/zip',
    ],
    121 => [
        'extension' => [
            0 => 'vssx',
        ],
        'type' => 'application/vnd.ms-visio.stencil.main+xml',
        'document' => 'Office Open XML Visio stencil',
        'sub-class-of' => 'application/zip',
    ],
    122 => [
        'extension' => [
            0 => 'vstm',
        ],
        'type' => 'application/vnd.ms-visio.template.macroEnabled.main+xml',
        'document' => 'Office Open XML Visio template',
        'sub-class-of' => 'application/zip',
    ],
    123 => [
        'extension' => [
            0 => 'vstx',
        ],
        'type' => 'application/vnd.ms-visio.template.main+xml',
        'document' => 'Office Open XML Visio template',
        'sub-class-of' => 'application/zip',
    ],
    124 => [
        'extension' => [
            0 => 'docm',
        ],
        'type' => 'application/vnd.ms-word.document.macroEnabled.12',
        'document' => 'Word document',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
    125 => [
        'extension' => [
            0 => 'dotm',
        ],
        'type' => 'application/vnd.ms-word.template.macroEnabled.12',
        'document' => 'Word document template',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    ],
    126 => [
        'extension' => [
            0 => 'wcm',
            1 => 'wdb',
            2 => 'wks',
            3 => 'wps',
            4 => 'xlr',
        ],
        'type' => 'application/vnd.ms-works',
        'document' => 'Microsoft Works document',
        'sub-class-of' => 'application/x-ole-storage',
    ],
    127 => [
        'extension' => [
            0 => 'wpl',
        ],
        'type' => 'application/vnd.ms-wpl',
        'document' => 'WPL playlist',
        'acronym' => 'WPL',
        'expanded-acronym' => 'Windows Media Player Playlist',
    ],
    128 => [
        'extension' => [
            0 => 'xps',
        ],
        'type' => 'application/vnd.ms-xpsdocument',
        'document' => 'XPS document',
        'acronym' => 'XPS',
        'expanded-acronym' => 'XML Paper Specification',
        'sub-class-of' => 'application/zip',
        'alias' => 'application/xps',
    ],
    129 => [
        'extension' => [
            0 => 'sfc',
            1 => 'smc',
        ],
        'type' => 'application/vnd.nintendo.snes.rom',
        'document' => 'Super NES ROM',
        'alias' => 'application/x-snes-rom',
    ],
    130 => [
        'extension' => [
            0 => 'otc',
        ],
        'type' => 'application/vnd.oasis.opendocument.chart-template',
        'document' => 'ODC template',
        'acronym' => 'ODC',
        'expanded-acronym' => 'OpenDocument Chart',
        'sub-class-of' => 'application/zip',
    ],
    131 => [
        'extension' => [
            0 => 'odc',
        ],
        'type' => 'application/vnd.oasis.opendocument.chart',
        'document' => 'ODC chart',
        'acronym' => 'ODC',
        'expanded-acronym' => 'OpenDocument Chart',
        'sub-class-of' => 'application/zip',
    ],
    132 => [
        'extension' => [
            0 => 'odb',
        ],
        'type' => 'application/vnd.oasis.opendocument.database',
        'document' => 'ODB database',
        'acronym' => 'ODB',
        'expanded-acronym' => 'OpenDocument Database',
        'sub-class-of' => 'application/zip',
        'alias' => 'application/vnd.sun.xml.base',
    ],
    133 => [
        'extension' => [
            0 => 'otf',
        ],
        'type' => 'application/vnd.oasis.opendocument.formula-template',
        'document' => 'ODF template',
        'acronym' => 'ODF',
        'expanded-acronym' => 'OpenDocument Formula',
        'sub-class-of' => 'application/zip',
    ],
    134 => [
        'extension' => [
            0 => 'odf',
        ],
        'type' => 'application/vnd.oasis.opendocument.formula',
        'document' => 'ODF formula',
        'acronym' => 'ODF',
        'expanded-acronym' => 'OpenDocument Formula',
        'sub-class-of' => 'application/zip',
    ],
    135 => [
        'extension' => [
            0 => 'fodg',
        ],
        'type' => 'application/vnd.oasis.opendocument.graphics-flat-xml',
        'document' => 'ODG drawing (Flat XML)',
        'acronym' => 'FODG',
        'expanded-acronym' => 'OpenDocument Drawing (Flat XML)',
        'sub-class-of' => 'application/xml',
    ],
    136 => [
        'extension' => [
            0 => 'otg',
        ],
        'type' => 'application/vnd.oasis.opendocument.graphics-template',
        'document' => 'ODG template',
        'acronym' => 'ODG',
        'expanded-acronym' => 'OpenDocument Drawing',
        'sub-class-of' => 'application/zip',
    ],
    137 => [
        'extension' => [
            0 => 'odg',
        ],
        'type' => 'application/vnd.oasis.opendocument.graphics',
        'document' => 'ODG drawing',
        'acronym' => 'ODG',
        'expanded-acronym' => 'OpenDocument Drawing',
        'sub-class-of' => 'application/zip',
    ],
    138 => [
        'extension' => [
            0 => 'odi',
        ],
        'type' => 'application/vnd.oasis.opendocument.image',
        'document' => 'ODI image',
        'acronym' => 'ODI',
        'expanded-acronym' => 'OpenDocument Image',
        'sub-class-of' => 'application/zip',
    ],
    139 => [
        'extension' => [
            0 => 'fodp',
        ],
        'type' => 'application/vnd.oasis.opendocument.presentation-flat-xml',
        'document' => 'ODP presentation (Flat XML)',
        'acronym' => 'FODP',
        'expanded-acronym' => 'OpenDocument Presentation (Flat XML)',
        'sub-class-of' => 'application/xml',
    ],
    140 => [
        'extension' => [
            0 => 'otp',
        ],
        'type' => 'application/vnd.oasis.opendocument.presentation-template',
        'document' => 'ODP template',
        'acronym' => 'ODP',
        'expanded-acronym' => 'OpenDocument Presentation',
        'sub-class-of' => 'application/zip',
    ],
    141 => [
        'extension' => [
            0 => 'odp',
        ],
        'type' => 'application/vnd.oasis.opendocument.presentation',
        'document' => 'ODP presentation',
        'acronym' => 'ODP',
        'expanded-acronym' => 'OpenDocument Presentation',
        'sub-class-of' => 'application/zip',
    ],
    142 => [
        'extension' => [
            0 => 'fods',
        ],
        'type' => 'application/vnd.oasis.opendocument.spreadsheet-flat-xml',
        'document' => 'ODS spreadsheet (Flat XML)',
        'acronym' => 'FODS',
        'expanded-acronym' => 'OpenDocument Spreadsheet (Flat XML)',
        'sub-class-of' => 'application/xml',
    ],
    143 => [
        'extension' => [
            0 => 'ots',
        ],
        'type' => 'application/vnd.oasis.opendocument.spreadsheet-template',
        'document' => 'ODS template',
        'acronym' => 'ODS',
        'expanded-acronym' => 'OpenDocument Spreadsheet',
        'sub-class-of' => 'application/zip',
    ],
    144 => [
        'extension' => [
            0 => 'ods',
        ],
        'type' => 'application/vnd.oasis.opendocument.spreadsheet',
        'document' => 'ODS spreadsheet',
        'acronym' => 'ODS',
        'expanded-acronym' => 'OpenDocument Spreadsheet',
        'sub-class-of' => 'application/zip',
    ],
    145 => [
        'extension' => [
            0 => 'fodt',
        ],
        'type' => 'application/vnd.oasis.opendocument.text-flat-xml',
        'document' => 'ODT document (Flat XML)',
        'acronym' => 'FODT',
        'expanded-acronym' => 'OpenDocument Text (Flat XML)',
        'sub-class-of' => 'application/xml',
    ],
    146 => [
        'extension' => [
            0 => 'odm',
        ],
        'type' => 'application/vnd.oasis.opendocument.text-master',
        'document' => 'ODM document',
        'acronym' => 'ODM',
        'expanded-acronym' => 'OpenDocument Master',
        'sub-class-of' => 'application/zip',
    ],
    147 => [
        'extension' => [
            0 => 'ott',
        ],
        'type' => 'application/vnd.oasis.opendocument.text-template',
        'document' => 'ODT template',
        'acronym' => 'ODT',
        'expanded-acronym' => 'OpenDocument Text',
        'sub-class-of' => 'application/zip',
    ],
    148 => [
        'extension' => [
            0 => 'oth',
        ],
        'type' => 'application/vnd.oasis.opendocument.text-web',
        'document' => 'OTH template',
        'acronym' => 'OTH',
        'expanded-acronym' => 'OpenDocument HTML',
        'sub-class-of' => 'application/zip',
    ],
    149 => [
        'extension' => [
            0 => 'odt',
        ],
        'type' => 'application/vnd.oasis.opendocument.text',
        'document' => 'ODT document',
        'acronym' => 'ODT',
        'expanded-acronym' => 'OpenDocument Text',
        'sub-class-of' => 'application/zip',
    ],
    150 => [
        'extension' => [
            0 => 'oxt',
        ],
        'type' => 'application/vnd.openofficeorg.extension',
        'document' => 'OpenOffice.org extension',
        'sub-class-of' => 'application/zip',
    ],
    151 => [
        'extension' => [
            0 => 'pptx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'document' => 'PowerPoint 2007 presentation',
        'sub-class-of' => 'application/zip',
    ],
    152 => [
        'extension' => [
            0 => 'sldx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.presentationml.slide',
        'document' => 'PowerPoint 2007 slide',
        'sub-class-of' => 'application/zip',
    ],
    153 => [
        'extension' => [
            0 => 'ppsx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
        'document' => 'PowerPoint 2007 show',
        'sub-class-of' => 'application/zip',
    ],
    154 => [
        'extension' => [
            0 => 'potx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.presentationml.template',
        'document' => 'PowerPoint 2007 presentation template',
        'sub-class-of' => 'application/zip',
    ],
    155 => [
        'extension' => [
            0 => 'xlsx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'document' => 'Excel 2007 spreadsheet',
        'sub-class-of' => 'application/zip',
    ],
    156 => [
        'extension' => [
            0 => 'xltx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
        'document' => 'Excel 2007 spreadsheet template',
        'sub-class-of' => 'application/zip',
    ],
    157 => [
        'extension' => [
            0 => 'docx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'document' => 'Word 2007 document',
        'sub-class-of' => 'application/zip',
    ],
    158 => [
        'extension' => [
            0 => 'dotx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
        'document' => 'Word 2007 document template',
        'sub-class-of' => 'application/zip',
    ],
    159 => [
        'extension' => [
            0 => 'prc',
            1 => 'pdb',
            2 => 'pqa',
            3 => 'oprc',
        ],
        'type' => 'application/vnd.palm',
        'document' => 'Palm OS database',
        'alias' => 'application/x-palm-database',
    ],
    160 => [
        'extension' => [
            0 => 'rar',
        ],
        'type' => 'application/vnd.rar',
        'document' => 'RAR archive',
        'acronym' => 'RAR',
        'expanded-acronym' => 'Roshal ARchive',
        'alias' => 'application/x-rar-compressed',
    ],
    161 => [
        'extension' => [
            0 => 'rm',
            1 => 'rmj',
            2 => 'rmm',
            3 => 'rms',
            4 => 'rmx',
            5 => 'rmvb',
        ],
        'type' => 'application/vnd.rn-realmedia',
        'document' => 'RealMedia document',
        'alias' => 'application/vnd.rn-realmedia-vbr',
    ],
    162 => [
        'extension' => [
            0 => 'mmf',
            1 => 'smaf',
        ],
        'type' => 'application/vnd.smaf',
        'document' => 'SMAF audio',
        'acronym' => 'SMAF',
        'expanded-acronym' => 'Synthetic music Mobile Application Format',
        'alias' => 'application/x-smaf',
    ],
    163 => [
        'extension' => [
            0 => 'snap',
        ],
        'type' => 'application/vnd.snap',
        'document' => 'Snap package',
        'sub-class-of' => 'application/vnd.squashfs',
    ],
    164 => [
        'extension' => [
            0 => 'sqlite3',
        ],
        'type' => 'application/vnd.sqlite3',
        'document' => 'SQLite3 database',
        'alias' => 'application/x-sqlite3',
    ],
    165 => [
        'extension' => [
            0 => 'sqsh',
        ],
        'type' => 'application/vnd.squashfs',
        'document' => 'Squashfs filesystem image',
    ],
    166 => [
        'extension' => [
            0 => 'sdc',
        ],
        'type' => 'application/vnd.stardivision.calc',
        'document' => 'StarCalc spreadsheet',
    ],
    167 => [
        'extension' => [
            0 => 'sds',
        ],
        'type' => 'application/vnd.stardivision.chart',
        'document' => 'StarChart chart',
    ],
    168 => [
        'extension' => [
            0 => 'sda',
        ],
        'type' => 'application/vnd.stardivision.draw',
        'document' => 'StarDraw drawing',
    ],
    169 => [
        'extension' => [
            0 => 'sdd',
            1 => 'sdp',
        ],
        'type' => 'application/vnd.stardivision.impress',
        'document' => 'StarImpress presentation',
    ],
    170 => [
        'extension' => [
            0 => 'smd',
        ],
        'type' => 'application/vnd.stardivision.mail',
        'document' => 'StarMail email',
    ],
    171 => [
        'extension' => [
            0 => 'smf',
        ],
        'type' => 'application/vnd.stardivision.math',
        'document' => 'StarMath formula',
    ],
    172 => [
        'extension' => [
            0 => 'sdw',
            1 => 'vor',
            2 => 'sgl',
        ],
        'type' => 'application/vnd.stardivision.writer',
        'document' => 'StarWriter document',
        'alias' => 'application/vnd.stardivision.writer-global',
    ],
    173 => [
        'extension' => [
            0 => 'stc',
        ],
        'type' => 'application/vnd.sun.xml.calc.template',
        'document' => 'OpenOffice Calc template',
        'sub-class-of' => 'application/zip',
    ],
    174 => [
        'extension' => [
            0 => 'sxc',
        ],
        'type' => 'application/vnd.sun.xml.calc',
        'document' => 'OpenOffice Calc spreadsheet',
        'sub-class-of' => 'application/zip',
    ],
    175 => [
        'extension' => [
            0 => 'std',
        ],
        'type' => 'application/vnd.sun.xml.draw.template',
        'document' => 'OpenOffice Draw template',
        'sub-class-of' => 'application/zip',
    ],
    176 => [
        'extension' => [
            0 => 'sxd',
        ],
        'type' => 'application/vnd.sun.xml.draw',
        'document' => 'OpenOffice Draw drawing',
        'sub-class-of' => 'application/zip',
    ],
    177 => [
        'extension' => [
            0 => 'sti',
        ],
        'type' => 'application/vnd.sun.xml.impress.template',
        'document' => 'OpenOffice Impress template',
        'sub-class-of' => 'application/zip',
    ],
    178 => [
        'extension' => [
            0 => 'sxi',
        ],
        'type' => 'application/vnd.sun.xml.impress',
        'document' => 'OpenOffice Impress presentation',
        'sub-class-of' => 'application/zip',
    ],
    179 => [
        'extension' => [
            0 => 'sxm',
        ],
        'type' => 'application/vnd.sun.xml.math',
        'document' => 'OpenOffice Math formula',
        'sub-class-of' => 'application/zip',
    ],
    180 => [
        'extension' => [
            0 => 'sxg',
        ],
        'type' => 'application/vnd.sun.xml.writer.global',
        'document' => 'OpenOffice Writer global document',
        'sub-class-of' => 'application/zip',
    ],
    181 => [
        'extension' => [
            0 => 'stw',
        ],
        'type' => 'application/vnd.sun.xml.writer.template',
        'document' => 'OpenOffice Writer template',
        'sub-class-of' => 'application/zip',
    ],
    182 => [
        'extension' => [
            0 => 'sxw',
        ],
        'type' => 'application/vnd.sun.xml.writer',
        'document' => 'OpenOffice Writer document',
        'sub-class-of' => 'application/zip',
    ],
    183 => [
        'extension' => [
            0 => 'sis',
        ],
        'type' => 'application/vnd.symbian.install',
        'document' => 'SIS package',
        'acronym' => 'SIS',
        'expanded-acronym' => 'Symbian Installation File',
    ],
    184 => [
        'extension' => [
            0 => 'pcap',
            1 => 'cap',
            2 => 'dmp',
        ],
        'type' => 'application/vnd.tcpdump.pcap',
        'document' => 'network packet capture',
        'alias' => 'application/pcap',
    ],
    185 => [
        'extension' => [
            0 => 'vsd',
            1 => 'vst',
            2 => 'vsw',
            3 => 'vss',
        ],
        'type' => 'application/vnd.visio',
        'document' => 'Microsoft Visio document',
        'sub-class-of' => 'application/x-ole-storage',
    ],
    186 => [
        'extension' => [
            0 => 'wp',
            1 => 'wp4',
            2 => 'wp5',
            3 => 'wp6',
            4 => 'wpd',
            5 => 'wpp',
        ],
        'type' => 'application/vnd.wordperfect',
        'document' => 'WordPerfect document',
        'alias' => 'application/wordperfect',
    ],
    187 => [
        'extension' => [
            0 => 'yt',
        ],
        'type' => 'application/vnd.youtube.yt',
        'document' => 'YouTube media archive',
        'sub-class-of' => 'application/zip',
    ],
    188 => [
        'extension' => [
            0 => 'hlp',
        ],
        'type' => 'application/winhlp',
        'document' => 'WinHelp help file',
        'alias' => 'zz-application/zz-winassoc-hlp',
    ],
    189 => [
        'extension' => [
            0 => 'doc',
            1 => 'docm',
            2 => 'rtf',
        ],
        'type' => 'application/wps-office.doc',
        'document' => 'Microsoft Word',
        'sub-class-of' => 'application/vnd.ms-word.document.macroenabled.12',
    ],
    190 => [
        'extension' => [
            0 => 'docx',
        ],
        'type' => 'application/wps-office.docx',
        'document' => 'Microsoft Word',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
    191 => [
        'extension' => [
            0 => 'dot',
            1 => 'dotm',
        ],
        'type' => 'application/wps-office.dot',
        'document' => 'Microsoft Word Template',
        'sub-class-of' => 'application/msword',
    ],
    192 => [
        'extension' => [
            0 => 'dotx',
        ],
        'type' => 'application/wps-office.dotx',
        'document' => 'Microsoft Word Template',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    ],
    193 => [
        'extension' => [
            0 => 'dps',
        ],
        'type' => 'application/wps-office.dps',
        'document' => 'WPS Presentation File',
    ],
    194 => [
        'extension' => [
            0 => 'dpso',
        ],
        'type' => 'application/wps-office.dpso',
        'document' => 'WPS Presentation Outgoing Documen',
    ],
    195 => [
        'extension' => [
            0 => 'dpss',
        ],
        'type' => 'application/wps-office.dpss',
        'document' => 'WPS Presentation Security',
    ],
    196 => [
        'extension' => [
            0 => 'dpt',
        ],
        'type' => 'application/wps-office.dpt',
        'document' => 'WPS Presentation Template',
    ],
    197 => [
        'extension' => [
            0 => 'et',
        ],
        'type' => 'application/wps-office.et',
        'document' => 'WPS Spreadsheets Workbook',
    ],
    198 => [
        'extension' => [
            0 => 'eto',
        ],
        'type' => 'application/wps-office.eto',
        'document' => 'WPS Spreadsheets Outgoing Documen',
    ],
    199 => [
        'extension' => [
            0 => 'ets',
        ],
        'type' => 'application/wps-office.ets',
        'document' => 'WPS Spreadsheets Security',
    ],
    200 => [
        'extension' => [
            0 => 'ett',
        ],
        'type' => 'application/wps-office.ett',
        'document' => 'WPS Spreadsheets Template',
    ],
    201 => [
        'extension' => [
            0 => 'pot',
            1 => 'potm',
        ],
        'type' => 'application/wps-office.pot',
        'document' => 'Microsoft Powerpoint Template',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.presentationml.template',
    ],
    202 => [
        'extension' => [
            0 => 'potx',
        ],
        'type' => 'application/wps-office.potx',
        'document' => 'Microsoft Powerpoint Template',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.presentationml.template',
    ],
    203 => [
        'extension' => [
            0 => 'ppt',
            1 => 'pptm',
            2 => 'pps',
        ],
        'type' => 'application/wps-office.ppt',
        'document' => 'Microsoft Powerpoint',
        'sub-class-of' => 'application/vnd.ms-powerpoint',
    ],
    204 => [
        'extension' => [
            0 => 'pptx',
            1 => 'ppsx',
        ],
        'type' => 'application/wps-office.pptx',
        'document' => 'Microsoft Powerpoint',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    ],
    205 => [
        'extension' => [
            0 => 'wps',
        ],
        'type' => 'application/wps-office.wps',
        'document' => 'WPS Writer Document',
        'sub-class-of' => 'application/x-ole-storage',
    ],
    206 => [
        'extension' => [
            0 => 'wpso',
        ],
        'type' => 'application/wps-office.wpso',
        'document' => 'WPS Writer Outgoing Document',
    ],
    207 => [
        'extension' => [
            0 => 'wpss',
        ],
        'type' => 'application/wps-office.wpss',
        'document' => 'WPS Writer Security',
    ],
    208 => [
        'extension' => [
            0 => 'wpt',
        ],
        'type' => 'application/wps-office.wpt',
        'document' => 'WPS Writer Template',
        'sub-class-of' => 'application/x-ole-storage',
    ],
    209 => [
        'extension' => [
            0 => 'xls',
            1 => 'xlsm',
        ],
        'type' => 'application/wps-office.xls',
        'document' => 'Microsoft Excel Spreadsheet',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    210 => [
        'extension' => [
            0 => 'xlsx',
        ],
        'type' => 'application/wps-office.xlsx',
        'document' => 'Microsoft Excel Spreadsheet',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    211 => [
        'extension' => [
            0 => 'xlt',
            1 => 'xltm',
        ],
        'type' => 'application/wps-office.xlt',
        'document' => 'Microsoft Excel Template',
        'sub-class-of' => 'application/vnd.ms-excel',
    ],
    212 => [
        'extension' => [
            0 => 'xltx',
        ],
        'type' => 'application/wps-office.xltx',
        'document' => 'Microsoft Excel Template',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    ],
    213 => [
        'extension' => [
            0 => '7z',
            1 => '7z.001',
        ],
        'type' => 'application/x-7z-compressed',
        'document' => '7-zip archive',
    ],
    214 => [
        'extension' => [
            0 => 'abw',
            1 => 'abw.CRASHED',
            2 => 'abw.gz',
            3 => 'zabw',
        ],
        'type' => 'application/x-abiword',
        'document' => 'AbiWord document',
        'sub-class-of' => 'application/xml',
    ],
    215 => [
        'extension' => [
            0 => 'ace',
        ],
        'type' => 'application/x-ace',
        'document' => 'ACE archive',
    ],
    216 => [
        'extension' => [
            0 => 'pkg.tar.xz',
            1 => 'pkg.tar.gz',
            2 => 'pkg.tar.zst',
            3 => 'pkg.tar.bz2',
            4 => 'pkg.tar.lrz',
            5 => 'pkg.tar.lzo',
            6 => 'pkg.tar.Z',
            7 => 'pkg.tar.lz4',
            8 => 'pkg.tar.lz',
            9 => 'pkg.tar',
        ],
        'type' => 'application/x-alpm-package',
        'document' => 'Alpm Package',
    ],
    217 => [
        'extension' => [
            0 => 'alz',
        ],
        'type' => 'application/x-alz',
        'document' => 'Alzip archive',
    ],
    218 => [
        'extension' => [
            0 => 'adf',
        ],
        'type' => 'application/x-amiga-disk-format',
        'document' => 'Amiga disk image',
    ],
    219 => [
        'extension' => [
            0 => 'sam',
        ],
        'type' => 'application/x-amipro',
        'document' => 'Lotus AmiPro document',
    ],
    220 => [
        'extension' => [
            0 => 'pdb',
            1 => 'pdc',
        ],
        'type' => 'application/x-aportisdoc',
        'document' => 'AportisDoc document',
        'sub-class-of' => 'application/vnd.palm',
    ],
    221 => [
        'extension' => [
            0 => 'dmg',
        ],
        'type' => 'application/x-apple-diskimage',
        'document' => 'Apple disk image',
    ],
    222 => [
        'extension' => [
            0 => 'spx',
        ],
        'type' => 'application/x-apple-systemprofiler+xml',
        'document' => 'Apple System Profiler',
        'sub-class-of' => 'application/xml',
    ],
    223 => [
        'extension' => [
            0 => 'cwk',
        ],
        'type' => 'application/x-appleworks-document',
        'document' => 'AppleWorks document',
    ],
    224 => [
        'extension' => [
            0 => 'as',
        ],
        'type' => 'application/x-applix-spreadsheet',
        'document' => 'Applix Spreadsheets spreadsheet',
    ],
    225 => [
        'extension' => [
            0 => 'aw',
        ],
        'type' => 'application/x-applix-word',
        'document' => 'Applix Words document',
    ],
    226 => [
        'extension' => [
        ],
        'type' => 'application/x-arc',
        'document' => 'ARC archive',
    ],
    227 => [
        'extension' => [
            0 => 'a',
            1 => 'ar',
        ],
        'type' => 'application/x-archive',
        'document' => 'AR archive',
    ],
    228 => [
        'extension' => [
            0 => 'arj',
        ],
        'type' => 'application/x-arj',
        'document' => 'ARJ archive',
        'acronym' => 'ARJ',
        'expanded-acronym' => 'Archived by Robert Jung',
    ],
    229 => [
        'extension' => [
            0 => 'asp',
        ],
        'type' => 'application/x-asp',
        'document' => 'ASP page',
        'acronym' => 'ASP',
        'expanded-acronym' => 'Active Server Page',
        'sub-class-of' => 'text/plain',
    ],
    230 => [
        'extension' => [
            0 => 'a26',
        ],
        'type' => 'application/x-atari-2600-rom',
        'document' => 'Atari 2600 ROM',
    ],
    231 => [
        'extension' => [
            0 => 'a78',
        ],
        'type' => 'application/x-atari-7800-rom',
        'document' => 'Atari 7800 ROM',
    ],
    232 => [
        'extension' => [
            0 => 'lnx',
        ],
        'type' => 'application/x-atari-lynx-rom',
        'document' => 'Atari Lynx ROM',
    ],
    233 => [
        'extension' => [
            0 => 'awk',
        ],
        'type' => 'application/x-awk',
        'document' => 'AWK script',
        'sub-class-of' => 'text/plain',
    ],
    234 => [
        'extension' => [
            0 => 'bcpio',
        ],
        'type' => 'application/x-bcpio',
        'document' => 'BCPIO document',
        'acronym' => 'BCPIO',
        'expanded-acronym' => 'Binary CPIO',
    ],
    235 => [
        'extension' => [
            0 => 'torrent',
        ],
        'type' => 'application/x-bittorrent',
        'document' => 'BitTorrent seed file',
    ],
    236 => [
        'extension' => [
            0 => 'blender',
            1 => 'blend',
            2 => 'BLEND',
        ],
        'type' => 'application/x-blender',
        'document' => 'Blender scene',
    ],
    237 => [
        'extension' => [
            0 => 'bps',
        ],
        'type' => 'application/x-bps-patch',
        'document' => 'BPS patch',
        'acronym' => 'BPS',
        'expanded-acronym' => 'Binary Patching System',
    ],
    238 => [
        'extension' => [
            0 => 'bsdiff',
        ],
        'type' => 'application/x-bsdiff',
        'document' => 'binary differences between files',
    ],
    239 => [
        'extension' => [
            0 => 'dvi.bz2',
        ],
        'type' => 'application/x-bzdvi',
        'document' => 'TeX DVI document (bzip-compressed)',
        'sub-class-of' => 'application/x-bzip',
    ],
    240 => [
        'extension' => [
            0 => 'tar.bz2',
            1 => 'tar.bz',
            2 => 'tbz2',
            3 => 'tbz',
            4 => 'tb2',
        ],
        'type' => 'application/x-bzip-compressed-tar',
        'document' => 'Tar archive (bzip-compressed)',
        'sub-class-of' => 'application/x-bzip',
    ],
    241 => [
        'extension' => [
            0 => 'bz2',
            1 => 'bz',
        ],
        'type' => 'application/x-bzip',
        'document' => 'Bzip archive',
        'alias' => 'application/bzip2',
    ],
    242 => [
        'extension' => [
            0 => 'pdf.bz2',
        ],
        'type' => 'application/x-bzpdf',
        'document' => 'PDF document (bzip-compressed)',
        'sub-class-of' => 'application/x-bzip',
    ],
    243 => [
        'extension' => [
            0 => 'ps.bz2',
        ],
        'type' => 'application/x-bzpostscript',
        'document' => 'PostScript document (bzip-compressed)',
        'sub-class-of' => 'application/x-bzip',
    ],
    244 => [
        'extension' => [
            0 => 'fig',
        ],
        'type' => 'application/x-cabri',
        'document' => 'Cabri figure',
    ],
    245 => [
        'extension' => [
            0 => 'cb7',
        ],
        'type' => 'application/x-cb7',
        'document' => 'comic book archive',
        'sub-class-of' => 'application/x-7z-compressed',
    ],
    246 => [
        'extension' => [
            0 => 'cbt',
        ],
        'type' => 'application/x-cbt',
        'document' => 'comic book archive',
        'sub-class-of' => 'application/x-tar',
    ],
    247 => [
        'extension' => [
            0 => 'ccmx',
        ],
        'type' => 'application/x-ccmx',
        'document' => 'CCMX color correction file',
        'sub-class-of' => 'text/plain',
    ],
    248 => [
        'extension' => [
            0 => 'iso',
            1 => 'iso9660',
        ],
        'type' => 'application/x-cd-image',
        'document' => 'raw CD image',
        'sub-class-of' => 'application/x-raw-disk-image',
        'alias' => 'application/x-iso9660-image',
    ],
    249 => [
        'extension' => [
            0 => 'cda',
        ],
        'type' => 'application/x-cda',
        'document' => 'CD audio',
    ],
    250 => [
        'extension' => [
            0 => 'toc',
        ],
        'type' => 'application/x-cdrdao-toc',
        'document' => 'CD Table Of Contents',
        'sub-class-of' => 'text/plain',
    ],
    251 => [
        'extension' => [
            0 => 'pcf',
        ],
        'type' => 'application/x-cisco-vpn-settings',
        'document' => 'Cisco VPN settings',
        'sub-class-of' => 'text/plain',
    ],
    252 => [
        'extension' => [
        ],
        'type' => 'application/x-class-file',
        'document' => 'Java byte code',
    ],
    253 => [
        'extension' => [
            0 => 'CMakeCache.txt',
        ],
        'type' => 'application/x-cmakecache',
        'document' => 'CMake cache file',
        'sub-class-of' => 'text/plain',
    ],
    254 => [
        'extension' => [
            0 => 'Z',
        ],
        'type' => 'application/x-compress',
        'document' => 'UNIX-compressed file',
    ],
    255 => [
        'extension' => [
            0 => 'cso',
        ],
        'type' => 'application/x-compressed-iso',
        'document' => 'Compressed CD image',
    ],
    256 => [
        'extension' => [
            0 => 'tar.gz',
            1 => 'tgz',
        ],
        'type' => 'application/x-compressed-tar',
        'document' => 'Tar archive (gzip-compressed)',
        'sub-class-of' => 'application/gzip',
    ],
    257 => [
        'extension' => [
            0 => 'core',
        ],
        'type' => 'application/x-core',
        'document' => 'program crash data',
    ],
    258 => [
        'extension' => [
            0 => 'cpio.gz',
        ],
        'type' => 'application/x-cpio-compressed',
        'document' => 'CPIO archive (gzip-compressed)',
        'sub-class-of' => 'application/gzip',
    ],
    259 => [
        'extension' => [
            0 => 'cpio',
        ],
        'type' => 'application/x-cpio',
        'document' => 'CPIO archive',
    ],
    260 => [
        'extension' => [
            0 => 'csh',
        ],
        'type' => 'application/x-csh',
        'document' => 'C shell script',
        'sub-class-of' => 'text/plain',
    ],
    261 => [
        'extension' => [
            0 => 'cue',
        ],
        'type' => 'application/x-cue',
        'document' => 'CD image cuesheet',
        'sub-class-of' => 'text/plain',
    ],
    262 => [
        'extension' => [
            0 => 'dar',
        ],
        'type' => 'application/x-dar',
        'document' => 'DAR archive',
    ],
    263 => [
        'extension' => [
            0 => 'dbf',
        ],
        'type' => 'application/x-dbf',
        'document' => 'Xbase document',
        'alias' => 'application/dbase',
    ],
    264 => [
        'extension' => [
            0 => 'ui',
        ],
        'type' => 'application/x-designer',
        'document' => 'Qt Designer interface document',
        'sub-class-of' => 'application/xml',
    ],
    265 => [
        'extension' => [
            0 => 'desktop',
            1 => 'kdelnk',
        ],
        'type' => 'application/x-desktop',
        'document' => 'desktop entry',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/x-gnome-app-info',
    ],
    266 => [
        'extension' => [
            0 => 'dia',
        ],
        'type' => 'application/x-dia-diagram',
        'document' => 'Dia diagram',
        'sub-class-of' => 'application/xml',
    ],
    267 => [
        'extension' => [
            0 => 'shape',
        ],
        'type' => 'application/x-dia-shape',
        'document' => 'Dia shape',
        'sub-class-of' => 'application/xml',
    ],
    268 => [
        'extension' => [
            0 => 'cdi',
        ],
        'type' => 'application/x-discjuggler-cd-image',
        'document' => 'Padus DiscJuggler CD image',
    ],
    269 => [
        'extension' => [
            0 => 'dbk',
            1 => 'docbook',
        ],
        'type' => 'application/x-docbook+xml',
        'document' => 'DocBook document',
        'sub-class-of' => 'application/xml',
        'alias' => 'application/vnd.oasis.docbook+xml',
    ],
    270 => [
        'extension' => [
            0 => 'wad',
        ],
        'type' => 'application/x-doom-wad',
        'document' => 'Doom WAD file',
        'acronym' => 'WAD',
        'expanded-acronym' => 'Where\'s All the Data',
    ],
    271 => [
        'extension' => [
            0 => 'iso',
        ],
        'type' => 'application/x-dreamcast-rom',
        'document' => 'Dreamcast disc image',
    ],
    272 => [
        'extension' => [
            0 => 'fgeo',
        ],
        'type' => 'application/x-drgeo',
        'document' => 'Dr. Geo figure',
    ],
    273 => [
        'extension' => [
            0 => 'dvi',
        ],
        'type' => 'application/x-dvi',
        'document' => 'TeX DVI document',
        'acronym' => 'DVI',
        'expanded-acronym' => 'Device independent file format',
    ],
    274 => [
        'extension' => [
            0 => 'etheme',
        ],
        'type' => 'application/x-e-theme',
        'document' => 'Enlightenment theme',
    ],
    275 => [
        'extension' => [
            0 => 'egon',
        ],
        'type' => 'application/x-egon',
        'document' => 'Egon Animator animation',
    ],
    276 => [
        'extension' => [
        ],
        'type' => 'application/x-executable',
        'document' => 'executable',
    ],
    277 => [
        'extension' => [
            0 => 'fds',
        ],
        'type' => 'application/x-fds-disk',
        'document' => 'Nintendo FDS disk image',
        'acronym' => 'FDS',
        'expanded-acronym' => 'Famicom Disk System',
    ],
    278 => [
        'extension' => [
            0 => 'fb2',
        ],
        'type' => 'application/x-fictionbook+xml',
        'document' => 'FictionBook document',
        'sub-class-of' => 'application/xml',
        'alias' => 'application/x-fictionbook',
    ],
    279 => [
        'extension' => [
            0 => 'fl',
        ],
        'type' => 'application/x-fluid',
        'document' => 'FLTK Fluid file',
        'acronym' => 'FLTK',
        'expanded-acronym' => 'Fast Light Toolkit',
        'sub-class-of' => 'text/plain',
    ],
    280 => [
        'extension' => [
            0 => 'afm',
        ],
        'type' => 'application/x-font-afm',
        'document' => 'Adobe font metrics',
    ],
    281 => [
        'extension' => [
            0 => 'bdf',
        ],
        'type' => 'application/x-font-bdf',
        'document' => 'BDF font',
    ],
    282 => [
        'extension' => [
        ],
        'type' => 'application/x-font-dos',
        'document' => 'DOS font',
    ],
    283 => [
        'extension' => [
        ],
        'type' => 'application/x-font-framemaker',
        'document' => 'Adobe FrameMaker font',
    ],
    284 => [
        'extension' => [
        ],
        'type' => 'application/x-font-libgrx',
        'document' => 'LIBGRX font',
    ],
    285 => [
        'extension' => [
            0 => 'psf',
        ],
        'type' => 'application/x-font-linux-psf',
        'document' => 'Linux PSF console font',
    ],
    286 => [
        'extension' => [
            0 => 'pcf',
            1 => 'pcf.Z',
            2 => 'pcf.gz',
        ],
        'type' => 'application/x-font-pcf',
        'document' => 'PCF font',
    ],
    287 => [
        'extension' => [
            0 => 'snf',
            1 => 'snf.Z',
            2 => 'snf.gz',
        ],
        'type' => 'application/x-font-snf',
        'document' => 'SNF bitmap font',
    ],
    288 => [
        'extension' => [
            0 => 'spd',
        ],
        'type' => 'application/x-font-speedo',
        'document' => 'Speedo font',
    ],
    289 => [
        'extension' => [
        ],
        'type' => 'application/x-font-sunos-news',
        'document' => 'SunOS News font',
    ],
    290 => [
        'extension' => [
        ],
        'type' => 'application/x-font-tex-tfm',
        'document' => 'TeX font metrics',
    ],
    291 => [
        'extension' => [
        ],
        'type' => 'application/x-font-tex',
        'document' => 'TeX font',
    ],
    292 => [
        'extension' => [
            0 => 'ttx',
        ],
        'type' => 'application/x-font-ttx',
        'document' => 'TrueType XML font',
        'sub-class-of' => 'application/xml',
    ],
    293 => [
        'extension' => [
            0 => 'pfa',
            1 => 'pfb',
            2 => 'gsf',
        ],
        'type' => 'application/x-font-type1',
        'document' => 'PostScript type-1 font',
        'sub-class-of' => 'application/postscript',
    ],
    294 => [
        'extension' => [
        ],
        'type' => 'application/x-font-vfont',
        'document' => 'V font',
    ],
    295 => [
        'extension' => [
            0 => 'gbc',
            1 => 'cgb',
        ],
        'type' => 'application/x-gameboy-color-rom',
        'document' => 'Game Boy Color ROM',
    ],
    296 => [
        'extension' => [
            0 => 'gb',
            1 => 'sgb',
        ],
        'type' => 'application/x-gameboy-rom',
        'document' => 'Game Boy ROM',
    ],
    297 => [
        'extension' => [
            0 => 'iso',
        ],
        'type' => 'application/x-gamecube-rom',
        'document' => 'GameCube disc image',
        'alias' => 'application/x-gamecube-iso-image',
    ],
    298 => [
        'extension' => [
            0 => 'gg',
        ],
        'type' => 'application/x-gamegear-rom',
        'document' => 'Game Gear ROM',
    ],
    299 => [
        'extension' => [
            0 => 'gba',
            1 => 'agb',
        ],
        'type' => 'application/x-gba-rom',
        'document' => 'Game Boy Advance ROM',
    ],
    300 => [
        'extension' => [
            0 => 'gdi',
        ],
        'type' => 'application/x-gd-rom-cue',
        'document' => 'GD-ROM image cuesheet',
        'sub-class-of' => 'text/plain',
    ],
    301 => [
        'extension' => [
        ],
        'type' => 'application/x-gdbm',
        'document' => 'GDBM database',
        'acronym' => 'GDBM',
        'expanded-acronym' => 'GNU Database Manager',
    ],
    302 => [
        'extension' => [
            0 => 'ged',
            1 => 'gedcom',
        ],
        'type' => 'application/x-gedcom',
        'document' => 'GEDCOM family history',
        'acronym' => 'GEDCOM',
        'expanded-acronym' => 'GEnealogical Data COMmunication',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/gedcom',
    ],
    303 => [
        'extension' => [
            0 => '32x',
            1 => 'mdx',
        ],
        'type' => 'application/x-genesis-32x-rom',
        'document' => 'Genesis 32X ROM',
    ],
    304 => [
        'extension' => [
            0 => 'gen',
            1 => 'smd',
            2 => 'sgd',
        ],
        'type' => 'application/x-genesis-rom',
        'document' => 'Genesis ROM',
    ],
    305 => [
        'extension' => [
            0 => 'gmo',
            1 => 'mo',
        ],
        'type' => 'application/x-gettext-translation',
        'document' => 'translated messages (machine-readable)',
    ],
    306 => [
        'extension' => [
            0 => 'glade',
        ],
        'type' => 'application/x-glade',
        'document' => 'Glade project',
        'sub-class-of' => 'application/xml',
    ],
    307 => [
        'extension' => [
            0 => 'gnucash',
            1 => 'gnc',
            2 => 'xac',
        ],
        'type' => 'application/x-gnucash',
        'document' => 'GnuCash financial data',
    ],
    308 => [
        'extension' => [
            0 => 'gnumeric',
        ],
        'type' => 'application/x-gnumeric',
        'document' => 'Gnumeric spreadsheet',
    ],
    309 => [
        'extension' => [
            0 => 'gp',
            1 => 'gplt',
            2 => 'gnuplot',
        ],
        'type' => 'application/x-gnuplot',
        'document' => 'Gnuplot document',
        'sub-class-of' => 'text/plain',
    ],
    310 => [
        'extension' => [
            0 => 'sgf',
        ],
        'type' => 'application/x-go-sgf',
        'document' => 'SGF record',
        'acronym' => 'SGF',
        'expanded-acronym' => 'Smart Game Format',
        'sub-class-of' => 'text/plain',
    ],
    311 => [
        'extension' => [
            0 => 'gra',
        ],
        'type' => 'application/x-graphite',
        'document' => 'Graphite scientific graph',
    ],
    312 => [
        'extension' => [
            0 => 'ui',
        ],
        'type' => 'application/x-gtk-builder',
        'document' => 'GTK+ Builder interface document',
        'sub-class-of' => 'application/xml',
    ],
    313 => [
        'extension' => [
        ],
        'type' => 'application/x-gtktalog',
        'document' => 'GTKtalog catalog',
    ],
    314 => [
        'extension' => [
            0 => 'psf.gz',
        ],
        'type' => 'application/x-gz-font-linux-psf',
        'document' => 'Linux PSF console font (gzip-compressed)',
        'sub-class-of' => 'application/gzip',
    ],
    315 => [
        'extension' => [
            0 => 'dvi.gz',
        ],
        'type' => 'application/x-gzdvi',
        'document' => 'TeX DVI document (gzip-compressed)',
        'sub-class-of' => 'application/gzip',
    ],
    316 => [
        'extension' => [
            0 => 'pdf.gz',
        ],
        'type' => 'application/x-gzpdf',
        'document' => 'PDF document (gzip-compressed)',
        'sub-class-of' => 'application/gzip',
    ],
    317 => [
        'extension' => [
            0 => 'ps.gz',
        ],
        'type' => 'application/x-gzpostscript',
        'document' => 'PostScript document (gzip-compressed)',
        'sub-class-of' => 'application/gzip',
    ],
    318 => [
        'extension' => [
            0 => 'hdf',
            1 => 'hdf4',
            2 => 'h4',
            3 => 'hdf5',
            4 => 'h5',
        ],
        'type' => 'application/x-hdf',
        'document' => 'HDF document',
        'acronym' => 'HDF',
        'expanded-acronym' => 'Hierarchical Data Format',
    ],
    319 => [
        'extension' => [
            0 => 'hfe',
        ],
        'type' => 'application/x-hfe-floppy-image',
        'document' => 'HFE floppy disk image',
        'acronym' => 'HFE',
        'expanded-acronym' => 'HxC Floppy Emulator',
        'alias' => 'application/x-hfe-file',
    ],
    320 => [
        'extension' => [
            0 => 'hwp',
        ],
        'type' => 'application/x-hwp',
        'document' => 'Haansoft Hangul document',
        'alias' => 'application/vnd.haansoft-hwp',
    ],
    321 => [
        'extension' => [
            0 => 'hwt',
        ],
        'type' => 'application/x-hwt',
        'document' => 'Haansoft Hangul document template',
        'alias' => 'application/vnd.haansoft-hwt',
    ],
    322 => [
        'extension' => [
            0 => 'ica',
        ],
        'type' => 'application/x-ica',
        'document' => 'Citrix ICA settings file',
        'acronym' => 'ICA',
        'expanded-acronym' => 'Independent Computing Architecture',
        'sub-class-of' => 'text/plain',
    ],
    323 => [
        'extension' => [
            0 => 'uin',
            1 => 'icq',
        ],
        'type' => 'application/x-icq',
        'document' => 'ICQ contact',
    ],
    324 => [
        'extension' => [
        ],
        'type' => 'application/x-iff',
        'document' => 'IFF file',
        'acronym' => 'IFF',
        'expanded-acronym' => 'Interchange File Format',
    ],
    325 => [
        'extension' => [
        ],
        'type' => 'application/x-ipod-firmware',
        'document' => 'iPod firmware',
    ],
    326 => [
        'extension' => [
            0 => 'ips',
        ],
        'type' => 'application/x-ips-patch',
        'document' => 'IPS patch',
        'acronym' => 'IPS',
        'expanded-acronym' => 'International Patching System',
    ],
    327 => [
        'extension' => [
            0 => 'ipynb',
        ],
        'type' => 'application/x-ipynb+json',
        'document' => 'Jupyter notebook document',
        'sub-class-of' => 'application/json',
    ],
    328 => [
        'extension' => [
            0 => 'appimage',
        ],
        'type' => 'application/x-iso9660-appimage',
        'document' => 'AppImage application bundle',
        'sub-class-of' => 'application/x-cd-image',
    ],
    329 => [
        'extension' => [
            0 => 'it87',
        ],
        'type' => 'application/x-it87',
        'document' => 'IT 8.7 color calibration file',
        'sub-class-of' => 'text/plain',
    ],
    330 => [
        'extension' => [
        ],
        'type' => 'application/x-java-applet',
        'document' => 'Java applet',
    ],
    331 => [
        'extension' => [
            0 => 'jar',
        ],
        'type' => 'application/x-java-archive',
        'document' => 'Java archive',
        'sub-class-of' => 'application/zip',
        'alias' => 'application/java-archive',
    ],
    332 => [
        'extension' => [
            0 => 'jceks',
        ],
        'type' => 'application/x-java-jce-keystore',
        'document' => 'Java JCE keystore',
        'acronym' => 'JCE',
        'expanded-acronym' => 'Java Cryptography Extension',
    ],
    333 => [
        'extension' => [
            0 => 'jnlp',
        ],
        'type' => 'application/x-java-jnlp-file',
        'document' => 'JNLP file',
        'acronym' => 'JNLP',
        'expanded-acronym' => 'Java Network Launching Protocol',
        'sub-class-of' => 'application/xml',
    ],
    334 => [
        'extension' => [
            0 => 'jks',
            1 => 'ks',
            2 => 'cacerts',
        ],
        'type' => 'application/x-java-keystore',
        'document' => 'Java keystore',
    ],
    335 => [
        'extension' => [
            0 => 'pack',
        ],
        'type' => 'application/x-java-pack200',
        'document' => 'Pack200 Java archive',
    ],
    336 => [
        'extension' => [
            0 => 'class',
        ],
        'type' => 'application/x-java',
        'document' => 'Java class',
        'alias' => 'application/x-java-vm',
    ],
    337 => [
        'extension' => [
            0 => 'jpr',
            1 => 'jpx',
        ],
        'type' => 'application/x-jbuilder-project',
        'document' => 'JBuilder project',
    ],
    338 => [
        'extension' => [
            0 => 'karbon',
        ],
        'type' => 'application/x-karbon',
        'document' => 'Karbon14 drawing',
    ],
    339 => [
        'extension' => [
            0 => 'cachegrind.out*',
            1 => 'callgrind.out*',
        ],
        'type' => 'application/x-kcachegrind',
        'document' => 'Cachegrind/Callgrind profile dump',
    ],
    340 => [
        'extension' => [
            0 => 'chrt',
        ],
        'type' => 'application/x-kchart',
        'document' => 'KChart chart',
    ],
    341 => [
        'extension' => [
            0 => 'kcsrc',
        ],
        'type' => 'application/x-kcsrc',
        'document' => 'KDE color scheme',
        'acronym' => 'KDE',
        'expanded-acronym' => 'K Desktop Environment',
    ],
    342 => [
        'extension' => [
            0 => 'kexic',
        ],
        'type' => 'application/x-kexi-connectiondata',
        'document' => 'Kexi settings',
    ],
    343 => [
        'extension' => [
            0 => 'kexis',
        ],
        'type' => 'application/x-kexiproject-shortcut',
        'document' => 'Kexi shortcut',
    ],
    344 => [
        'extension' => [
            0 => 'kexi',
        ],
        'type' => 'application/x-kexiproject-sqlite2',
        'document' => 'Kexi database file',
        'sub-class-of' => 'application/x-sqlite2',
    ],
    345 => [
        'extension' => [
            0 => 'kexi',
        ],
        'type' => 'application/x-kexiproject-sqlite3',
        'document' => 'Kexi database file',
        'sub-class-of' => 'application/vnd.sqlite3',
        'alias' => 'application/x-kexiproject-sqlite',
    ],
    346 => [
        'extension' => [
            0 => 'kfo',
        ],
        'type' => 'application/x-kformula',
        'document' => 'KFormula formula',
    ],
    347 => [
        'extension' => [
            0 => 'kgeo',
        ],
        'type' => 'application/x-kgeo',
        'document' => 'KGeo figure',
    ],
    348 => [
        'extension' => [
            0 => 'kgt',
        ],
        'type' => 'application/x-kgetlist',
        'document' => 'KGet download list',
        'sub-class-of' => 'application/xml',
    ],
    349 => [
        'extension' => [
        ],
        'type' => 'application/x-khtml-adaptor',
        'document' => 'KHTML Extension Adaptor',
    ],
    350 => [
        'extension' => [
            0 => 'kig',
            1 => 'kigz',
        ],
        'type' => 'application/x-kig',
        'document' => 'Kig figure',
    ],
    351 => [
        'extension' => [
            0 => 'kil',
        ],
        'type' => 'application/x-killustrator',
        'document' => 'KIllustrator drawing',
    ],
    352 => [
        'extension' => [
            0 => 'azw2',
        ],
        'type' => 'application/x-kindle-application',
        'document' => 'Amazon Kindle Application (Kindlet)',
        'sub-class-of' => 'application/x-java-archive',
    ],
    353 => [
        'extension' => [
            0 => 'flw',
        ],
        'type' => 'application/x-kivio',
        'document' => 'Kivio flowchart',
    ],
    354 => [
        'extension' => [
            0 => 'fkt',
        ],
        'type' => 'application/x-kmplot',
        'document' => 'KmPlot file',
    ],
    355 => [
        'extension' => [
            0 => 'kns',
        ],
        'type' => 'application/x-kns',
        'document' => 'KNewStuff package',
        'sub-class-of' => 'application/zip',
    ],
    356 => [
        'extension' => [
            0 => 'kolfgame',
        ],
        'type' => 'application/x-kolf',
        'document' => 'Kolf saved game',
    ],
    357 => [
        'extension' => [
            0 => 'kmdr',
        ],
        'type' => 'application/x-kommander',
        'document' => 'Kommander file',
        'sub-class-of' => 'text/plain',
    ],
    358 => [
        'extension' => [
            0 => 'kon',
        ],
        'type' => 'application/x-kontour',
        'document' => 'Kontour drawing',
    ],
    359 => [
        'extension' => [
            0 => 'kopete-emoticons',
        ],
        'type' => 'application/x-kopete-emoticons',
        'document' => 'Kopete emoticons archive',
    ],
    360 => [
        'extension' => [
            0 => 'kolf',
            1 => 'course',
            2 => 'kourse',
        ],
        'type' => 'application/x-kourse',
        'document' => 'Kolf course',
    ],
    361 => [
        'extension' => [
            0 => 'kpm',
        ],
        'type' => 'application/x-kpovmodeler',
        'document' => 'KPovModeler scene',
    ],
    362 => [
        'extension' => [
            0 => 'kpr',
            1 => 'kpt',
        ],
        'type' => 'application/x-kpresenter',
        'document' => 'KPresenter presentation',
    ],
    363 => [
        'extension' => [
            0 => 'kra',
            1 => 'krz',
        ],
        'type' => 'application/x-krita',
        'document' => 'Krita document',
    ],
    364 => [
        'extension' => [
            0 => 'seg',
        ],
        'type' => 'application/x-kseg',
        'document' => 'KSeg document',
    ],
    365 => [
        'extension' => [
        ],
        'type' => 'application/x-kspread-crypt',
        'document' => 'KSpread spreadsheet (encrypted)',
    ],
    366 => [
        'extension' => [
            0 => 'ksp',
        ],
        'type' => 'application/x-kspread',
        'document' => 'KSpread spreadsheet',
    ],
    367 => [
        'extension' => [
            0 => 'sgrd',
        ],
        'type' => 'application/x-ksysguard',
        'document' => 'KDE system monitor',
    ],
    368 => [
        'extension' => [
        ],
        'type' => 'application/x-ksysv-package',
        'document' => 'KSysV init package',
    ],
    369 => [
        'extension' => [
            0 => 'kth',
        ],
        'type' => 'application/x-ktheme',
        'document' => 'KDE theme',
        'sub-class-of' => 'application/zip',
    ],
    370 => [
        'extension' => [
            0 => 'kut',
        ],
        'type' => 'application/x-kudesigner',
        'document' => 'Kugar report template',
    ],
    371 => [
        'extension' => [
            0 => 'kud',
        ],
        'type' => 'application/x-kugar',
        'document' => 'Kugar document',
    ],
    372 => [
        'extension' => [
            0 => 'kvtml',
        ],
        'type' => 'application/x-kvtml',
        'document' => 'vocabulary trainer document',
        'sub-class-of' => 'application/xml',
    ],
    373 => [
        'extension' => [
            0 => 'kwl',
        ],
        'type' => 'application/x-kwallet',
        'document' => 'KWallet wallet',
    ],
    374 => [
        'extension' => [
        ],
        'type' => 'application/x-kword-crypt',
        'document' => 'KWord document (encrypted)',
    ],
    375 => [
        'extension' => [
            0 => 'kwd',
            1 => 'kwt',
        ],
        'type' => 'application/x-kword',
        'document' => 'KWord document',
    ],
    376 => [
        'extension' => [
            0 => 'wql',
        ],
        'type' => 'application/x-kwordquiz',
        'document' => 'KWordQuiz vocabulary',
    ],
    377 => [
        'extension' => [
            0 => 'lha',
            1 => 'lzh',
        ],
        'type' => 'application/x-lha',
        'document' => 'LHA archive',
        'alias' => 'application/x-lzh-compressed',
    ],
    378 => [
        'extension' => [
            0 => 'lhz',
        ],
        'type' => 'application/x-lhz',
        'document' => 'LHZ archive',
    ],
    379 => [
        'extension' => [
            0 => 'tar.lrz',
            1 => 'tlrz',
        ],
        'type' => 'application/x-lrzip-compressed-tar',
        'document' => 'Tar archive (lrzip-compressed)',
        'sub-class-of' => 'application/x-lrzip',
    ],
    380 => [
        'extension' => [
            0 => 'lrz',
        ],
        'type' => 'application/x-lrzip',
        'document' => 'Lrzip archive',
    ],
    381 => [
        'extension' => [
            0 => 'lyx',
        ],
        'type' => 'application/x-lyx',
        'document' => 'LyX document',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-lyx',
    ],
    382 => [
        'extension' => [
            0 => 'tar.lz4',
        ],
        'type' => 'application/x-lz4-compressed-tar',
        'document' => 'Tar archive (LZ4-compressed)',
        'sub-class-of' => 'application/x-lz4',
    ],
    383 => [
        'extension' => [
            0 => 'lz4',
        ],
        'type' => 'application/x-lz4',
        'document' => 'LZ4 archive',
    ],
    384 => [
        'extension' => [
            0 => 'tar.lz',
        ],
        'type' => 'application/x-lzip-compressed-tar',
        'document' => 'Tar archive (lzip-compressed)',
        'sub-class-of' => 'application/x-lzip',
    ],
    385 => [
        'extension' => [
            0 => 'lz',
        ],
        'type' => 'application/x-lzip',
        'document' => 'Lzip archive',
    ],
    386 => [
        'extension' => [
            0 => 'tar.lzma',
            1 => 'tlz',
        ],
        'type' => 'application/x-lzma-compressed-tar',
        'document' => 'Tar archive (LZMA-compressed)',
        'sub-class-of' => 'application/x-lzma',
    ],
    387 => [
        'extension' => [
            0 => 'lzma',
        ],
        'type' => 'application/x-lzma',
        'document' => 'LZMA archive',
        'acronym' => 'LZMA',
        'expanded-acronym' => 'Lempel-Ziv-Markov chain-Algorithm',
    ],
    388 => [
        'extension' => [
            0 => 'lzo',
        ],
        'type' => 'application/x-lzop',
        'document' => 'LZO archive',
        'acronym' => 'LZO',
        'expanded-acronym' => 'Lempel-Ziv-Oberhumer',
    ],
    389 => [
        'extension' => [
            0 => 'pdf.lz',
        ],
        'type' => 'application/x-lzpdf',
        'document' => 'PDF document (lzip-compressed)',
        'sub-class-of' => 'application/x-lzip',
    ],
    390 => [
        'extension' => [
            0 => 'm4',
        ],
        'type' => 'application/x-m4',
        'document' => 'M4 macro',
        'sub-class-of' => 'text/plain',
    ],
    391 => [
        'extension' => [
        ],
        'type' => 'application/x-macbinary',
        'document' => 'Macintosh MacBinary file',
    ],
    392 => [
        'extension' => [
            0 => 'mgp',
        ],
        'type' => 'application/x-magicpoint',
        'document' => 'MagicPoint presentation',
        'sub-class-of' => 'text/plain',
    ],
    393 => [
        'extension' => [
            0 => 'chd',
        ],
        'type' => 'application/x-mame-chd',
        'document' => 'MAME compressed hard disk image',
    ],
    394 => [
        'extension' => [
            0 => 'mab',
        ],
        'type' => 'application/x-markaby',
        'document' => 'Markaby script',
        'sub-class-of' => 'application/x-ruby',
    ],
    395 => [
        'extension' => [
        ],
        'type' => 'application/x-matroska',
        'document' => 'Matroska stream',
    ],
    396 => [
        'extension' => [
            0 => 'mif',
        ],
        'type' => 'application/x-mif',
        'document' => 'Adobe FrameMaker MIF document',
    ],
    397 => [
        'extension' => [
            0 => 'mhtml',
            1 => 'mht',
        ],
        'type' => 'application/x-mimearchive',
        'document' => 'MHTML web archive',
        'acronym' => 'MHTML',
        'expanded-acronym' => 'MIME HTML',
        'sub-class-of' => 'multipart/related',
    ],
    398 => [
        'extension' => [
            0 => 'azw3',
        ],
        'type' => 'application/x-mobi8-ebook',
        'document' => 'Amazon KF8 ebook format',
        'sub-class-of' => 'application/x-palm-database',
    ],
    399 => [
        'extension' => [
            0 => 'azw',
            1 => 'mobi',
            2 => 'prc',
        ],
        'type' => 'application/x-mobipocket-ebook',
        'document' => 'Mobipocket e-book',
        'sub-class-of' => 'application/vnd.palm',
    ],
    400 => [
        'extension' => [
            0 => 'pobi',
        ],
        'type' => 'application/x-mobipocket-subscription',
        'document' => 'Amazon Mobipocket ebook newspaper format',
        'sub-class-of' => 'application/x-mobipocket-ebook',
        'alias' => 'application/x-mobipocket-subscription-magazine',
    ],
    401 => [
        'extension' => [
        ],
        'type' => 'application/x-mozilla-bookmarks',
        'document' => 'Mozilla bookmarks',
        'sub-class-of' => 'text/html',
        'alias' => 'application/x-netscape-bookmarks',
    ],
    402 => [
        'extension' => [
            0 => 'exe',
        ],
        'type' => 'application/x-ms-dos-executable',
        'document' => 'DOS/Windows executable',
    ],
    403 => [
        'extension' => [
            0 => 'lnk',
        ],
        'type' => 'application/x-ms-shortcut',
        'document' => 'Windows link',
        'alias' => 'application/x-win-lnk',
    ],
    404 => [
        'extension' => [
            0 => 'wim',
            1 => 'swm',
        ],
        'type' => 'application/x-ms-wim',
        'document' => 'WIM disk image',
        'acronym' => 'WIM',
        'expanded-acronym' => 'Windows Imaging Format',
    ],
    405 => [
        'extension' => [
            0 => 'msi',
        ],
        'type' => 'application/x-msi',
        'document' => 'Windows Installer package',
        'sub-class-of' => 'application/x-ole-storage',
    ],
    406 => [
        'extension' => [
            0 => 'url',
        ],
        'type' => 'application/x-mswinurl',
        'document' => 'Internet shortcut',
        'sub-class-of' => 'text/plain',
    ],
    407 => [
        'extension' => [
            0 => 'wri',
        ],
        'type' => 'application/x-mswrite',
        'document' => 'WRI document',
    ],
    408 => [
        'extension' => [
            0 => 'msx',
        ],
        'type' => 'application/x-msx-rom',
        'document' => 'MSX ROM',
    ],
    409 => [
        'extension' => [
            0 => 'n64',
            1 => 'z64',
            2 => 'v64',
        ],
        'type' => 'application/x-n64-rom',
        'document' => 'Nintendo64 ROM',
    ],
    410 => [
        'extension' => [
        ],
        'type' => 'application/x-nautilus-link',
        'document' => 'Nautilus link',
        'sub-class-of' => 'text/plain',
    ],
    411 => [
        'extension' => [
            0 => 'ani',
        ],
        'type' => 'application/x-navi-animation',
        'document' => 'Windows animated cursor',
    ],
    412 => [
        'extension' => [
            0 => 'ngc',
        ],
        'type' => 'application/x-neo-geo-pocket-color-rom',
        'document' => 'Neo-Geo Pocket Color ROM',
    ],
    413 => [
        'extension' => [
            0 => 'ngp',
        ],
        'type' => 'application/x-neo-geo-pocket-rom',
        'document' => 'Neo-Geo Pocket ROM',
    ],
    414 => [
        'extension' => [
            0 => 'nes',
            1 => 'nez',
            2 => 'unf',
            3 => 'unif',
        ],
        'type' => 'application/x-nes-rom',
        'document' => 'NES ROM',
    ],
    415 => [
        'extension' => [
            0 => 'cdf',
            1 => 'nc',
        ],
        'type' => 'application/x-netcdf',
        'document' => 'Unidata NetCDF document',
        'acronym' => 'NetCDF',
        'expanded-acronym' => 'Network Common Data Form',
    ],
    416 => [
        'extension' => [
            0 => 'nsc',
        ],
        'type' => 'application/x-netshow-channel',
        'document' => 'Windows Media Station file',
        'sub-class-of' => 'application/vnd.ms-asf',
    ],
    417 => [
        'extension' => [
            0 => '3dsx',
        ],
        'type' => 'application/x-nintendo-3ds-executable',
        'document' => 'Nintendo 3DS Executable',
    ],
    418 => [
        'extension' => [
            0 => '3ds',
            1 => 'cci',
        ],
        'type' => 'application/x-nintendo-3ds-rom',
        'document' => 'Nintendo 3DS ROM',
    ],
    419 => [
        'extension' => [
            0 => 'nds',
        ],
        'type' => 'application/x-nintendo-ds-rom',
        'document' => 'Nintendo DS ROM',
    ],
    420 => [
        'extension' => [
            0 => 'note',
        ],
        'type' => 'application/x-note',
        'document' => 'Notes',
    ],
    421 => [
        'extension' => [
            0 => 'nzb',
        ],
        'type' => 'application/x-nzb',
        'document' => 'NewzBin usenet index',
        'sub-class-of' => 'application/xml',
    ],
    422 => [
        'extension' => [
            0 => 'o',
            1 => 'mod',
        ],
        'type' => 'application/x-object',
        'document' => 'object code',
    ],
    423 => [
        'extension' => [
        ],
        'type' => 'application/x-ole-storage',
        'document' => 'OLE2 compound document storage',
    ],
    424 => [
        'extension' => [
            0 => 'oleo',
        ],
        'type' => 'application/x-oleo',
        'document' => 'GNU Oleo spreadsheet',
    ],
    425 => [
        'extension' => [
            0 => 'zim',
        ],
        'type' => 'application/x-openzim',
        'document' => 'OpenZIM file',
        'acronym' => 'ZIM',
        'expanded-acronym' => 'Zeno IMproved',
    ],
    426 => [
        'extension' => [
            0 => 'opdownload',
        ],
        'type' => 'application/x-opera-download',
    ],
    427 => [
        'extension' => [
            0 => 'p65',
            1 => 'pm',
            2 => 'pm6',
            3 => 'pmd',
        ],
        'type' => 'application/x-pagemaker',
        'document' => 'Adobe PageMaker document',
        'sub-class-of' => 'application/x-ole-storage',
    ],
    428 => [
        'extension' => [
            0 => 'pak',
        ],
        'type' => 'application/x-pak',
        'document' => 'PAK archive',
    ],
    429 => [
        'extension' => [
            0 => 'PAR2',
            1 => 'par2',
        ],
        'type' => 'application/x-par2',
        'document' => 'Parchive archive',
        'acronym' => 'Parchive',
        'expanded-acronym' => 'Parity Volume Set Archive',
    ],
    430 => [
        'extension' => [
            0 => 'wkdownload',
            1 => 'crdownload',
            2 => 'part',
        ],
        'type' => 'application/x-partial-download',
        'document' => 'Partially downloaded file',
    ],
    431 => [
        'extension' => [
            0 => 'pce',
        ],
        'type' => 'application/x-pc-engine-rom',
        'document' => 'PC Engine ROM',
    ],
    432 => [
        'extension' => [
        ],
        'type' => 'application/x-pef-executable',
        'document' => 'PEF executable',
    ],
    433 => [
        'extension' => [
            0 => 'pem',
        ],
        'type' => 'application/x-pem-file',
        'document' => 'Openssl PEM format',
        'acronym' => 'PEM',
        'sub-class-of' => 'text/plain',
    ],
    434 => [
        'extension' => [
        ],
        'type' => 'application/x-pem-key',
        'document' => 'Private Key in PEM format',
        'sub-class-of' => 'application/x-pem-file',
    ],
    435 => [
        'extension' => [
            0 => 'pl',
            1 => 'PL',
            2 => 'pm',
            3 => 'al',
            4 => 'perl',
            5 => 'pod',
            6 => 't',
        ],
        'type' => 'application/x-perl',
        'document' => 'Perl script',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-perl',
    ],
    436 => [
        'extension' => [
            0 => 'php',
            1 => 'php3',
            2 => 'php4',
            3 => 'php5',
            4 => 'phps',
        ],
        'type' => 'application/x-php',
        'document' => 'PHP script',
        'sub-class-of' => 'text/plain',
    ],
    437 => [
        'extension' => [
            0 => 'p12',
            1 => 'pfx',
        ],
        'type' => 'application/x-pkcs12',
        'document' => 'PKCS#12 Personal Key and Certificates',
        'acronym' => 'PKCS#12',
        'alias' => 'application/pkcs12',
    ],
    438 => [
        'extension' => [
            0 => 'p7b',
            1 => 'spc',
        ],
        'type' => 'application/x-pkcs7-certificates',
        'document' => 'PKCS#7 certificate bundle',
        'acronym' => 'PKCS',
        'expanded-acronym' => 'Public-Key Cryptography Standards',
    ],
    439 => [
        'extension' => [
            0 => 'pln',
        ],
        'type' => 'application/x-planperfect',
        'document' => 'PlanPerfect spreadsheet',
    ],
    440 => [
        'extension' => [
            0 => 'plasmoid',
        ],
        'type' => 'application/x-plasma',
        'document' => 'plasmoid',
        'sub-class-of' => 'application/zip',
    ],
    441 => [
        'extension' => [
            0 => 'psw',
        ],
        'type' => 'application/x-pocket-word',
        'document' => 'Pocket Word document',
    ],
    442 => [
        'extension' => [
            0 => 'gmon.out',
        ],
        'type' => 'application/x-profile',
        'document' => 'profiler results',
        'sub-class-of' => 'text/plain',
    ],
    443 => [
        'extension' => [
            0 => 'pw',
        ],
        'type' => 'application/x-pw',
        'document' => 'Pathetic Writer document',
    ],
    444 => [
        'extension' => [
            0 => 'pys',
        ],
        'type' => 'application/x-pyspread-bz-spreadsheet',
        'document' => 'Pyspread spreadsheet (bzip-compressed)',
        'sub-class-of' => 'application/x-bzip',
    ],
    445 => [
        'extension' => [
            0 => 'pysu',
        ],
        'type' => 'application/x-pyspread-spreadsheet',
        'document' => 'Pyspread spreadsheet',
    ],
    446 => [
        'extension' => [
            0 => 'pyc',
            1 => 'pyo',
        ],
        'type' => 'application/x-python-bytecode',
        'document' => 'Python bytecode',
    ],
    447 => [
        'extension' => [
            0 => 'qed',
        ],
        'type' => 'application/x-qed-disk',
        'document' => 'QEMU QED disk image',
        'acronym' => 'QED',
        'expanded-acronym' => 'QEMU Enhanced Disk',
    ],
    448 => [
        'extension' => [
            0 => 'qcow2',
            1 => 'qcow',
        ],
        'type' => 'application/x-qemu-disk',
        'document' => 'QEMU QCOW disk image',
        'acronym' => 'QCOW',
        'expanded-acronym' => 'QEMU Copy On Write',
    ],
    449 => [
        'extension' => [
            0 => 'qp',
        ],
        'type' => 'application/x-qpress',
        'document' => 'Qpress archive',
    ],
    450 => [
        'extension' => [
            0 => 'qti',
            1 => 'qti.gz',
        ],
        'type' => 'application/x-qtiplot',
        'document' => 'QtiPlot document',
        'sub-class-of' => 'text/plain',
    ],
    451 => [
        'extension' => [
            0 => 'quanta',
        ],
        'type' => 'application/x-quanta',
        'document' => 'Quanta project',
        'sub-class-of' => 'text/plain',
    ],
    452 => [
        'extension' => [
            0 => 'wb1',
            1 => 'wb2',
            2 => 'wb3',
        ],
        'type' => 'application/x-quattropro',
        'document' => 'Quattro Pro spreadsheet',
    ],
    453 => [
        'extension' => [
            0 => 'qtl',
        ],
        'type' => 'application/x-quicktime-media-link',
        'document' => 'QuickTime playlist',
        'sub-class-of' => 'video/quicktime',
        'alias' => 'application/x-quicktimeplayer',
    ],
    454 => [
        'extension' => [
            0 => 'qif',
        ],
        'type' => 'application/x-qw',
        'document' => 'Quicken document',
    ],
    455 => [
        'extension' => [
            0 => 'raw-disk-image.xz',
            1 => 'img.xz',
        ],
        'type' => 'application/x-raw-disk-image-xz-compressed',
        'document' => 'Raw disk image (XZ-compressed)',
        'sub-class-of' => 'application/x-xz',
    ],
    456 => [
        'extension' => [
            0 => 'raw-disk-image',
            1 => 'img',
        ],
        'type' => 'application/x-raw-disk-image',
        'document' => 'Raw disk image',
    ],
    457 => [
        'extension' => [
            0 => 'fd',
            1 => 'qd',
        ],
        'type' => 'application/x-raw-floppy-disk-image',
        'document' => 'Floppy disk image',
        'sub-class-of' => 'application/x-raw-disk-image',
        'alias' => 'application/x-fd-file',
    ],
    458 => [
        'extension' => [
        ],
        'type' => 'application/x-riff',
        'document' => 'RIFF container',
    ],
    459 => [
        'extension' => [
            0 => 'rpm',
        ],
        'type' => 'application/x-rpm',
        'document' => 'RPM package',
        'alias' => 'application/x-redhat-package-manager',
    ],
    460 => [
        'extension' => [
            0 => 'rb',
        ],
        'type' => 'application/x-ruby',
        'document' => 'Ruby script',
        'sub-class-of' => 'text/plain',
    ],
    461 => [
        'extension' => [
            0 => 'smi',
            1 => 'sami',
        ],
        'type' => 'application/x-sami',
        'document' => 'SAMI subtitles',
        'acronym' => 'SAMI',
        'expanded-acronym' => 'Synchronized Accessible Media Interchange',
        'sub-class-of' => 'text/plain',
    ],
    462 => [
        'extension' => [
            0 => 'iso',
        ],
        'type' => 'application/x-saturn-rom',
        'document' => 'Sega Saturn disc image',
    ],
    463 => [
        'extension' => [
        ],
        'type' => 'application/x-sc',
        'document' => 'SC/Xspread spreadsheet',
    ],
    464 => [
        'extension' => [
            0 => 'iso',
        ],
        'type' => 'application/x-sega-cd-rom',
        'document' => 'Sega CD disc image',
    ],
    465 => [
        'extension' => [
            0 => 'iso',
        ],
        'type' => 'application/x-sega-pico-rom',
        'document' => 'Sega Pico ROM',
    ],
    466 => [
        'extension' => [
            0 => 'sg',
        ],
        'type' => 'application/x-sg1000-rom',
        'document' => 'SG-1000 ROM',
    ],
    467 => [
        'extension' => [
            0 => 'shar',
        ],
        'type' => 'application/x-shar',
        'document' => 'shell archive',
    ],
    468 => [
        'extension' => [
            0 => 'la',
        ],
        'type' => 'application/x-shared-library-la',
        'document' => 'libtool shared library',
        'sub-class-of' => 'text/plain',
    ],
    469 => [
        'extension' => [
            0 => 'so',
        ],
        'type' => 'application/x-sharedlib',
        'document' => 'shared library',
    ],
    470 => [
        'extension' => [
            0 => 'sh',
        ],
        'type' => 'application/x-shellscript',
        'document' => 'shell script',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-sh',
    ],
    471 => [
        'extension' => [
            0 => 'shn',
        ],
        'type' => 'application/x-shorten',
        'document' => 'Shorten audio',
        'alias' => 'audio/x-shorten',
    ],
    472 => [
        'extension' => [
            0 => 'siag',
        ],
        'type' => 'application/x-siag',
        'document' => 'Siag spreadsheet',
    ],
    473 => [
        'extension' => [
        ],
        'type' => 'application/x-slp',
        'document' => 'Stampede package',
    ],
    474 => [
        'extension' => [
        ],
        'type' => 'application/x-smb-server',
        'document' => 'Windows server',
        'sub-class-of' => 'inode/directory',
    ],
    475 => [
        'extension' => [
        ],
        'type' => 'application/x-smb-workgroup',
        'document' => 'Windows workgroup',
        'sub-class-of' => 'inode/directory',
    ],
    476 => [
        'extension' => [
            0 => 'sms',
        ],
        'type' => 'application/x-sms-rom',
        'document' => 'Master System ROM',
    ],
    477 => [
        'extension' => [
            0 => 'lrf',
        ],
        'type' => 'application/x-sony-bbeb',
        'document' => 'SONY E-book compiled format',
    ],
    478 => [
        'extension' => [
            0 => 'src.rpm',
            1 => 'spm',
        ],
        'type' => 'application/x-source-rpm',
        'document' => 'Source RPM package',
        'sub-class-of' => 'application/x-rpm',
    ],
    479 => [
        'extension' => [
        ],
        'type' => 'application/x-spkac+base64',
        'document' => 'SPKAC Certificate Request in OpenSSL format',
        'sub-class-of' => 'text/plain',
    ],
    480 => [
        'extension' => [
            0 => 'spkac',
        ],
        'type' => 'application/x-spkac',
        'document' => 'SPKAC Certificate Request',
    ],
    481 => [
        'extension' => [
            0 => 'por',
        ],
        'type' => 'application/x-spss-por',
        'document' => 'SPSS portable data file',
        'acronym' => 'SPSS',
        'expanded-acronym' => 'Statistical Package for the Social Sciences',
    ],
    482 => [
        'extension' => [
            0 => 'sav',
            1 => 'zsav',
        ],
        'type' => 'application/x-spss-sav',
        'document' => 'SPSS data file',
        'acronym' => 'SPSS',
        'expanded-acronym' => 'Statistical Package for the Social Sciences',
        'alias' => 'application/x-spss-savefile',
    ],
    483 => [
        'extension' => [
            0 => 'sqlite2',
        ],
        'type' => 'application/x-sqlite2',
        'document' => 'SQLite2 database',
    ],
    484 => [
        'extension' => [
            0 => 'sit',
        ],
        'type' => 'application/x-stuffit',
        'document' => 'StuffIt archive',
        'alias' => 'application/x-sit',
    ],
    485 => [
        'extension' => [
            0 => 'srt',
        ],
        'type' => 'application/x-subrip',
        'document' => 'SubRip subtitles',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/x-srt',
    ],
    486 => [
        'extension' => [
            0 => 'skz',
        ],
        'type' => 'application/x-superkaramba',
        'document' => 'SuperKaramba theme',
        'sub-class-of' => 'application/zip',
    ],
    487 => [
        'extension' => [
            0 => 'sv4cpio',
        ],
        'type' => 'application/x-sv4cpio',
        'document' => 'SV4 CPIO archive',
    ],
    488 => [
        'extension' => [
            0 => 'sv4crc',
        ],
        'type' => 'application/x-sv4crc',
        'document' => 'SV4 CPIO archive (with CRC)',
    ],
    489 => [
        'extension' => [
            0 => '602',
        ],
        'type' => 'application/x-t602',
        'document' => 'T602 document',
    ],
    490 => [
        'extension' => [
            0 => 'tar',
            1 => 'gtar',
            2 => 'gem',
        ],
        'type' => 'application/x-tar',
        'document' => 'Tar archive',
        'alias' => 'application/x-gtar',
    ],
    491 => [
        'extension' => [
            0 => 'tar.Z',
            1 => 'taz',
        ],
        'type' => 'application/x-tarz',
        'document' => 'Tar archive (compressed)',
        'sub-class-of' => 'application/x-compress',
    ],
    492 => [
        'extension' => [
            0 => 'gf',
        ],
        'type' => 'application/x-tex-gf',
        'document' => 'generic font file',
    ],
    493 => [
        'extension' => [
            0 => 'pk',
        ],
        'type' => 'application/x-tex-pk',
        'document' => 'packed font file',
    ],
    494 => [
        'extension' => [
            0 => 'obj',
        ],
        'type' => 'application/x-tgif',
        'document' => 'TGIF document',
    ],
    495 => [
        'extension' => [
            0 => 'theme',
        ],
        'type' => 'application/x-theme',
        'document' => 'theme',
        'sub-class-of' => 'application/x-desktop',
    ],
    496 => [
        'extension' => [
            0 => 'm7',
        ],
        'type' => 'application/x-thomson-cartridge-memo7',
        'document' => 'Thomson Mémo7 cartridge',
    ],
    497 => [
        'extension' => [
            0 => 'k7',
        ],
        'type' => 'application/x-thomson-cassette',
        'document' => 'Thomson cassette',
    ],
    498 => [
        'extension' => [
            0 => 'sap',
        ],
        'type' => 'application/x-thomson-sap-image',
        'document' => 'SAP Thomson floppy disk image',
        'acronym' => 'SAP',
        'expanded-acronym' => 'Système d\'Archivage Pukall',
        'alias' => 'application/x-sap-file',
    ],
    499 => [
        'extension' => [
            0 => 'tpz',
            1 => 'azw1',
        ],
        'type' => 'application/x-topaz-ebook',
        'document' => 'Amazon Topaz ebook format',
    ],
    500 => [
        'extension' => [
        ],
        'type' => 'application/x-toutdoux',
        'document' => 'ToutDoux document',
    ],
    501 => [
        'extension' => [
            0 => '*~',
            1 => '*%',
            2 => 'bak',
            3 => 'old',
            4 => 'sik',
        ],
        'type' => 'application/x-trash',
        'document' => 'backup file',
    ],
    502 => [
        'extension' => [
        ],
        'type' => 'application/x-troff-man-compressed',
        'document' => 'manual page (compressed)',
    ],
    503 => [
        'extension' => [
            0 => 'man',
            1 => '[1-9]',
        ],
        'type' => 'application/x-troff-man',
        'document' => 'Manpage manual document',
        'sub-class-of' => 'text/plain',
    ],
    504 => [
        'extension' => [
            0 => 'tuberling',
        ],
        'type' => 'application/x-tuberling',
        'document' => 'potato',
    ],
    505 => [
        'extension' => [
        ],
        'type' => 'application/x-turtle',
        'document' => 'Turtle RDF document',
        'sub-class-of' => 'text/plain',
    ],
    506 => [
        'extension' => [
            0 => 'tar.lzo',
            1 => 'tzo',
        ],
        'type' => 'application/x-tzo',
        'document' => 'Tar archive (LZO-compressed)',
        'sub-class-of' => 'application/x-lzop',
    ],
    507 => [
        'extension' => [
            0 => 'ufraw',
        ],
        'type' => 'application/x-ufraw',
        'document' => 'UFRaw ID image',
        'acronym' => 'UFRaw',
        'expanded-acronym' => 'Unidentified Flying Raw',
        'sub-class-of' => 'application/xml',
    ],
    508 => [
        'extension' => [
            0 => 'xmi',
            1 => 'xmi.tgz',
            2 => 'xmi.tar.bz2',
        ],
        'type' => 'application/x-uml',
        'document' => 'Umbrello UML Modeller file',
    ],
    509 => [
        'extension' => [
            0 => 'ustar',
        ],
        'type' => 'application/x-ustar',
        'document' => 'Ustar archive',
    ],
    510 => [
        'extension' => [
            0 => 'vdi',
        ],
        'type' => 'application/x-vdi-disk',
        'document' => 'VDI disk image',
        'acronym' => 'VDI',
        'expanded-acronym' => 'Virtual Disk Image',
        'alias' => 'application/x-virtualbox-vdi',
    ],
    511 => [
        'extension' => [
            0 => 'vhd',
            1 => 'vpc',
        ],
        'type' => 'application/x-vhd-disk',
        'document' => 'VHD disk image',
        'acronym' => 'VHD',
        'expanded-acronym' => 'Virtual Hard Disk',
        'alias' => 'application/x-virtualbox-vhd',
    ],
    512 => [
        'extension' => [
            0 => 'vhdx',
        ],
        'type' => 'application/x-vhdx-disk',
        'document' => 'VHDX disk image',
        'acronym' => 'VHDX',
        'expanded-acronym' => 'Virtual Hard Disk v2',
        'alias' => 'application/x-virtualbox-vhdx',
    ],
    513 => [
        'extension' => [
            0 => 'vb',
        ],
        'type' => 'application/x-virtual-boy-rom',
        'document' => 'Virtual Boy ROM',
    ],
    514 => [
        'extension' => [
            0 => 'hdd',
        ],
        'type' => 'application/x-virtualbox-hdd',
        'document' => 'Virtual Hard Disk',
    ],
    515 => [
        'extension' => [
            0 => 'ova',
        ],
        'type' => 'application/x-virtualbox-ova',
        'document' => 'Open Virtualization Format Archive',
    ],
    516 => [
        'extension' => [
            0 => 'ovf',
        ],
        'type' => 'application/x-virtualbox-ovf',
        'document' => 'Open Virtualization Format',
    ],
    517 => [
        'extension' => [
            0 => 'vbox-extpack',
        ],
        'type' => 'application/x-virtualbox-vbox-extpack',
        'document' => 'VirtualBox Extension Pack',
    ],
    518 => [
        'extension' => [
            0 => 'vbox',
        ],
        'type' => 'application/x-virtualbox-vbox',
        'document' => 'VirtualBox Machine Definition',
    ],
    519 => [
        'extension' => [
            0 => 'vdi',
        ],
        'type' => 'application/x-virtualbox-vdi',
        'document' => 'Virtual Disk Image',
    ],
    520 => [
        'extension' => [
            0 => 'vhd',
        ],
        'type' => 'application/x-virtualbox-vhd',
        'document' => 'Virtual Hard Disk',
    ],
    521 => [
        'extension' => [
            0 => 'vmdk',
        ],
        'type' => 'application/x-virtualbox-vmdk',
        'document' => 'Virtual Machine Disk Format',
    ],
    522 => [
        'extension' => [
            0 => 'vmdk',
        ],
        'type' => 'application/x-vmdk-disk',
        'document' => 'VMDK disk image',
        'acronym' => 'VMDK',
        'expanded-acronym' => 'Virtual Machine Disk',
        'alias' => 'application/x-virtualbox-vmdk',
    ],
    523 => [
        'extension' => [
            0 => 'kplatowork',
        ],
        'type' => 'application/x-vnd.kde.kplato.work',
        'document' => 'KPlato project management work package',
    ],
    524 => [
        'extension' => [
            0 => 'kplato',
        ],
        'type' => 'application/x-vnd.kde.kplato',
        'document' => 'KPlato project management document',
    ],
    525 => [
        'extension' => [
            0 => 'kug',
        ],
        'type' => 'application/x-vnd.kde.kugar.mixed',
        'document' => 'Kugar archive',
    ],
    526 => [
        'extension' => [
            0 => 'planwork',
        ],
        'type' => 'application/x-vnd.kde.plan.work',
        'document' => 'Calligra Plan work package document',
    ],
    527 => [
        'extension' => [
            0 => 'plan',
        ],
        'type' => 'application/x-vnd.kde.plan',
        'document' => 'Calligra Plan project management document',
    ],
    528 => [
        'extension' => [
            0 => 'src',
        ],
        'type' => 'application/x-wais-source',
        'document' => 'WAIS source code',
        'sub-class-of' => 'text/plain',
    ],
    529 => [
        'extension' => [
            0 => 'war',
        ],
        'type' => 'application/x-webarchive',
        'document' => 'web archive',
        'sub-class-of' => 'application/x-compressed-tar',
    ],
    530 => [
        'extension' => [
            0 => 'iso',
        ],
        'type' => 'application/x-wii-rom',
        'document' => 'Wii disc image',
        'alias' => 'application/x-wia',
    ],
    531 => [
        'extension' => [
            0 => 'wad',
        ],
        'type' => 'application/x-wii-wad',
        'document' => 'WiiWare bundle',
    ],
    532 => [
        'extension' => [
            0 => 'themepack',
        ],
        'type' => 'application/x-windows-themepack',
        'document' => 'Microsoft Windows theme pack',
        'sub-class-of' => 'application/vnd.ms-cab-compressed',
    ],
    533 => [
        'extension' => [
            0 => 'wsc',
        ],
        'type' => 'application/x-wonderswan-color-rom',
        'document' => 'Bandai WonderSwan Color ROM',
    ],
    534 => [
        'extension' => [
            0 => 'ws',
        ],
        'type' => 'application/x-wonderswan-rom',
        'document' => 'Bandai WonderSwan ROM',
    ],
    535 => [
        'extension' => [
            0 => 'wpg',
        ],
        'type' => 'application/x-wpg',
        'document' => 'WordPerfect/Drawperfect image',
    ],
    536 => [
        'extension' => [
            0 => 'wwf',
        ],
        'type' => 'application/x-wwf',
        'document' => 'WWF document',
        'sub-class-of' => 'application/pdf',
        'alias' => 'application/wwf',
    ],
    537 => [
        'extension' => [
            0 => 'der',
            1 => 'crt',
            2 => 'cert',
            3 => 'pem',
        ],
        'type' => 'application/x-x509-ca-cert',
        'document' => 'DER/PEM/Netscape-encoded X.509 certificate',
    ],
    538 => [
        'extension' => [
            0 => 'xar',
            1 => 'pkg',
        ],
        'type' => 'application/x-xar',
        'document' => 'XAR archive',
        'acronym' => 'XAR',
        'expanded-acronym' => 'eXtensible ARchive',
    ],
    539 => [
        'extension' => [
            0 => 'xbel',
        ],
        'type' => 'application/x-xbel',
        'document' => 'XBEL bookmarks',
        'acronym' => 'XBEL',
        'expanded-acronym' => 'XML Bookmark Exchange Language',
        'sub-class-of' => 'application/xml',
    ],
    540 => [
        'extension' => [
            0 => 'xpi',
        ],
        'type' => 'application/x-xpinstall',
        'document' => 'XPInstall installer module',
        'sub-class-of' => 'application/zip',
    ],
    541 => [
        'extension' => [
            0 => 'tar.xz',
            1 => 'txz',
        ],
        'type' => 'application/x-xz-compressed-tar',
        'document' => 'Tar archive (XZ-compressed)',
        'sub-class-of' => 'application/x-xz',
    ],
    542 => [
        'extension' => [
            0 => 'xz',
        ],
        'type' => 'application/x-xz',
        'document' => 'XZ archive',
    ],
    543 => [
        'extension' => [
            0 => 'pdf.xz',
        ],
        'type' => 'application/x-xzpdf',
        'document' => 'PDF document (XZ-compressed)',
        'sub-class-of' => 'application/x-xz',
    ],
    544 => [
        'extension' => [
            0 => 'yaml',
            1 => 'yml',
        ],
        'type' => 'application/x-yaml',
        'document' => 'YAML document',
        'acronym' => 'YAML',
        'expanded-acronym' => 'YAML Ain\'t Markup Language',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-yaml',
    ],
    545 => [
        'extension' => [
        ],
        'type' => 'application/x-zerosize',
        'document' => 'empty document',
    ],
    546 => [
        'extension' => [
            0 => 'fb2.zip',
        ],
        'type' => 'application/x-zip-compressed-fb2',
        'document' => 'Compressed FictionBook document',
        'sub-class-of' => 'application/zip',
    ],
    547 => [
        'extension' => [
            0 => 'zoo',
        ],
        'type' => 'application/x-zoo',
        'document' => 'Zoo archive',
    ],
    548 => [
        'extension' => [
            0 => 'tar.zst',
            1 => 'tzst',
        ],
        'type' => 'application/x-zstd-compressed-tar',
        'document' => 'Tar archive (Zstandard-compressed)',
        'sub-class-of' => 'application/zstd',
    ],
    549 => [
        'extension' => [
            0 => 'xhtml',
            1 => 'xht',
            2 => 'html',
            3 => 'htm',
        ],
        'type' => 'application/xhtml+xml',
        'document' => 'XHTML page',
        'acronym' => 'XHTML',
        'expanded-acronym' => 'Extensible HyperText Markup Language',
        'sub-class-of' => 'application/xml',
    ],
    550 => [
        'extension' => [
            0 => 'xlf',
            1 => 'xliff',
        ],
        'type' => 'application/xliff+xml',
        'document' => 'XLIFF translation file',
        'acronym' => 'XLIFF',
        'expanded-acronym' => 'XML Localization Interchange File Format',
        'sub-class-of' => 'application/xml',
        'alias' => 'application/x-xliff',
    ],
    551 => [
        'extension' => [
            0 => 'dtd',
        ],
        'type' => 'application/xml-dtd',
        'document' => 'DTD file',
        'acronym' => 'DTD',
        'expanded-acronym' => 'Document Type Definition',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-dtd',
    ],
    552 => [
        'extension' => [
            0 => 'ent',
        ],
        'type' => 'application/xml-external-parsed-entity',
        'document' => 'XML entities document',
        'acronym' => 'XML',
        'expanded-acronym' => 'eXtensible Markup Language',
        'sub-class-of' => 'application/xml',
        'alias' => 'text/xml-external-parsed-entity',
    ],
    553 => [
        'extension' => [
            0 => 'xml',
            1 => 'xbl',
            2 => 'xsd',
            3 => 'rng',
        ],
        'type' => 'application/xml',
        'document' => 'XML document',
        'acronym' => 'XML',
        'expanded-acronym' => 'eXtensible Markup Language',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/xml',
    ],
    554 => [
        'extension' => [
            0 => 'xsd',
        ],
        'type' => 'application/xsd',
        'document' => 'W3C XML schema',
        'sub-class-of' => 'application/xml',
    ],
    555 => [
        'extension' => [
            0 => 'xsl',
            1 => 'xslt',
        ],
        'type' => 'application/xslt+xml',
        'document' => 'XSLT stylesheet',
        'acronym' => 'XSLT',
        'expanded-acronym' => 'eXtensible Stylesheet Language Transformation',
        'sub-class-of' => 'application/xml',
    ],
    556 => [
        'extension' => [
            0 => 'xspf',
        ],
        'type' => 'application/xspf+xml',
        'document' => 'XSPF playlist',
        'acronym' => 'XSPF',
        'expanded-acronym' => 'XML Shareable Playlist Format',
        'sub-class-of' => 'application/xml',
        'alias' => 'application/x-xspf+xml',
    ],
    557 => [
        'extension' => [
            0 => 'zip',
        ],
        'type' => 'application/zip',
        'document' => 'Zip archive',
        'alias' => 'application/x-zip',
    ],
    558 => [
        'extension' => [
            0 => 'zz',
        ],
        'type' => 'application/zlib',
        'document' => 'Zlib archive',
    ],
    559 => [
        'extension' => [
            0 => 'zst',
        ],
        'type' => 'application/zstd',
        'document' => 'Zstandard archive',
    ],
    560 => [
        'extension' => [
            0 => 'aac',
            1 => 'adts',
            2 => 'ass',
        ],
        'type' => 'audio/aac',
        'document' => 'AAC audio',
        'acronym' => 'AAC',
        'expanded-acronym' => 'Advanced Audio Coding',
        'alias' => 'audio/x-aac',
    ],
    561 => [
        'extension' => [
            0 => 'ac3',
        ],
        'type' => 'audio/ac3',
        'document' => 'Dolby Digital audio',
    ],
    562 => [
        'extension' => [
            0 => 'awb',
        ],
        'type' => 'audio/AMR-WB',
        'document' => 'AMR-WB audio',
        'acronym' => 'AMR-WB',
        'expanded-acronym' => 'Adaptive Multi-Rate Wideband',
        'alias' => 'audio/amr-wb-encrypted',
    ],
    563 => [
        'extension' => [
            0 => 'amr',
        ],
        'type' => 'audio/AMR',
        'document' => 'AMR audio',
        'acronym' => 'AMR',
        'expanded-acronym' => 'Adaptive Multi-Rate',
        'alias' => 'audio/amr-encrypted',
    ],
    564 => [
        'extension' => [
            0 => 'axa',
        ],
        'type' => 'audio/annodex',
        'document' => 'Annodex audio',
        'sub-class-of' => 'application/annodex',
        'alias' => 'audio/x-annodex',
    ],
    565 => [
        'extension' => [
            0 => 'au',
            1 => 'snd',
        ],
        'type' => 'audio/basic',
        'document' => 'ULAW (Sun) audio',
    ],
    566 => [
        'extension' => [
            0 => 'flac',
        ],
        'type' => 'audio/flac',
        'document' => 'FLAC audio',
        'alias' => 'audio/x-flac',
    ],
    567 => [
        'extension' => [
            0 => 'mid',
            1 => 'midi',
            2 => 'kar',
        ],
        'type' => 'audio/midi',
        'document' => 'MIDI audio',
        'alias' => 'audio/x-midi',
    ],
    568 => [
        'extension' => [
            0 => 'mxmf',
        ],
        'type' => 'audio/mobile-xmf',
        'document' => 'Mobile XMF audio',
        'acronym' => 'XMF',
        'expanded-acronym' => 'eXtensible Music Format',
        'alias' => 'audio/vnd.nokia.mobile-xmf',
    ],
    569 => [
        'extension' => [
            0 => 'mp2',
        ],
        'type' => 'audio/mp2',
        'document' => 'MP2 audio',
        'alias' => 'audio/x-mp2',
    ],
    570 => [
        'extension' => [
            0 => 'm4a',
            1 => 'f4a',
        ],
        'type' => 'audio/mp4',
        'document' => 'MPEG-4 audio',
        'alias' => 'audio/m4a',
    ],
    571 => [
        'extension' => [
            0 => 'mp3',
            1 => 'mpga',
        ],
        'type' => 'audio/mpeg',
        'document' => 'MP3 audio',
        'alias' => 'audio/mp3',
    ],
    572 => [
        'extension' => [
            0 => 'oga',
            1 => 'ogg',
            2 => 'opus',
        ],
        'type' => 'audio/ogg',
        'document' => 'Ogg audio',
        'sub-class-of' => 'application/ogg',
        'alias' => 'audio/x-ogg',
    ],
    573 => [
        'extension' => [
            0 => 'sid',
            1 => 'psid',
        ],
        'type' => 'audio/prs.sid',
        'document' => 'Commodore 64 audio',
    ],
    574 => [
        'extension' => [
            0 => 'loas',
            1 => 'xhe',
        ],
        'type' => 'audio/usac',
        'document' => 'USAC audio',
        'acronym' => 'USAC',
        'expanded-acronym' => 'Unified Speech and Audio Coding',
    ],
    575 => [
        'extension' => [
            0 => 'aax',
        ],
        'type' => 'audio/vnd.audible.aax',
        'document' => 'Audible Enhanced audio',
    ],
    576 => [
        'extension' => [
            0 => 'dtshd',
        ],
        'type' => 'audio/vnd.dts.hd',
        'document' => 'DTSHD audio',
        'sub-class-of' => 'audio/vnd.dts',
        'alias' => 'audio/x-dtshd',
    ],
    577 => [
        'extension' => [
            0 => 'dts',
        ],
        'type' => 'audio/vnd.dts',
        'document' => 'DTS audio',
        'alias' => 'audio/x-dts',
    ],
    578 => [
        'extension' => [
            0 => 'ra',
            1 => 'rax',
        ],
        'type' => 'audio/vnd.rn-realaudio',
        'document' => 'RealAudio document',
        'alias' => 'audio/vnd.m-realaudio',
    ],
    579 => [
        'extension' => [
        ],
        'type' => 'audio/webm',
        'document' => 'WebM audio',
        'sub-class-of' => 'video/webm',
    ],
    580 => [
        'extension' => [
        ],
        'type' => 'audio/x-adpcm',
        'document' => 'PCM audio',
    ],
    581 => [
        'extension' => [
            0 => 'aifc',
            1 => 'aiffc',
        ],
        'type' => 'audio/x-aifc',
        'document' => 'AIFC audio',
        'acronym' => 'AIFC',
        'expanded-acronym' => 'Audio Interchange File format Compressed',
        'sub-class-of' => 'application/x-iff',
        'alias' => 'audio/x-aiffc',
    ],
    582 => [
        'extension' => [
            0 => 'aiff',
            1 => 'aif',
        ],
        'type' => 'audio/x-aiff',
        'document' => 'AIFF/Amiga/Mac audio',
        'acronym' => 'AIFF',
        'expanded-acronym' => 'Audio Interchange File Format',
        'sub-class-of' => 'application/x-iff',
    ],
    583 => [
        'extension' => [
            0 => 'amz',
        ],
        'type' => 'audio/x-amzxml',
        'document' => 'AmazonMP3 download file',
    ],
    584 => [
        'extension' => [
            0 => 'ape',
        ],
        'type' => 'audio/x-ape',
        'document' => 'Monkey\'s audio',
    ],
    585 => [
        'extension' => [
            0 => 'oga',
            1 => 'ogg',
        ],
        'type' => 'audio/x-flac+ogg',
        'document' => 'Ogg FLAC audio',
        'sub-class-of' => 'audio/ogg',
        'alias' => 'audio/x-oggflac',
    ],
    586 => [
        'extension' => [
            0 => 'gsm',
        ],
        'type' => 'audio/x-gsm',
        'document' => 'GSM 06.10 audio',
        'acronym' => 'GSM',
        'expanded-acronym' => 'Global System for Mobile communications',
    ],
    587 => [
        'extension' => [
            0 => 'pla',
        ],
        'type' => 'audio/x-iriver-pla',
        'document' => 'iRiver playlist',
    ],
    588 => [
        'extension' => [
            0 => 'it',
        ],
        'type' => 'audio/x-it',
        'document' => 'Impulse Tracker audio',
    ],
    589 => [
        'extension' => [
            0 => 'm4b',
            1 => 'f4b',
        ],
        'type' => 'audio/x-m4b',
        'document' => 'MPEG-4 audio book',
        'sub-class-of' => 'audio/mp4',
    ],
    590 => [
        'extension' => [
            0 => 'm4r',
        ],
        'type' => 'audio/x-m4r',
        'document' => 'MPEG-4 ringtone',
        'sub-class-of' => 'video/mp4',
    ],
    591 => [
        'extension' => [
            0 => 'mka',
        ],
        'type' => 'audio/x-matroska',
        'document' => 'Matroska audio',
        'sub-class-of' => 'application/x-matroska',
    ],
    592 => [
        'extension' => [
            0 => 'minipsf',
        ],
        'type' => 'audio/x-minipsf',
        'document' => 'MiniPSF audio',
        'acronym' => 'MiniPSF',
        'expanded-acronym' => 'Miniature Portable Sound Format',
        'sub-class-of' => 'audio/x-psf',
    ],
    593 => [
        'extension' => [
            0 => 'mo3',
        ],
        'type' => 'audio/x-mo3',
        'document' => 'compressed Tracker audio',
    ],
    594 => [
        'extension' => [
            0 => 'mod',
            1 => 'ult',
            2 => 'uni',
            3 => 'm15',
            4 => 'mtm',
            5 => '669',
            6 => 'med',
        ],
        'type' => 'audio/x-mod',
        'document' => 'Amiga SoundTracker audio',
    ],
    595 => [
        'extension' => [
            0 => 'm3u',
            1 => 'm3u8',
            2 => 'vlc',
        ],
        'type' => 'audio/x-mpegurl',
        'document' => 'Media playlist',
        'sub-class-of' => 'text/plain',
        'alias' => 'audio/x-m3u',
    ],
    596 => [
        'extension' => [
            0 => 'asx',
            1 => 'wax',
            2 => 'wvx',
            3 => 'wmx',
        ],
        'type' => 'audio/x-ms-asx',
        'document' => 'Microsoft ASX playlist',
        'alias' => 'application/x-ms-asx',
    ],
    597 => [
        'extension' => [
            0 => 'wma',
        ],
        'type' => 'audio/x-ms-wma',
        'document' => 'Windows Media audio',
        'sub-class-of' => 'application/vnd.ms-asf',
        'alias' => 'audio/wma',
    ],
    598 => [
        'extension' => [
            0 => 'mpc',
            1 => 'mpp',
            2 => 'mp+',
        ],
        'type' => 'audio/x-musepack',
        'document' => 'Musepack audio',
    ],
    599 => [
        'extension' => [
            0 => 'opus',
        ],
        'type' => 'audio/x-opus+ogg',
        'document' => 'Opus audio',
        'sub-class-of' => 'audio/ogg',
    ],
    600 => [
        'extension' => [
            0 => 'aa',
        ],
        'type' => 'audio/x-pn-audibleaudio',
        'document' => 'Audible.Com audio',
        'alias' => 'audio/vnd.audible',
    ],
    601 => [
        'extension' => [
        ],
        'type' => 'audio/x-pn-realaudio-plugin',
        'document' => 'RealAudio plugin file',
    ],
    602 => [
        'extension' => [
            0 => 'psf',
        ],
        'type' => 'audio/x-psf',
        'document' => 'PSF audio',
        'acronym' => 'PSF',
        'expanded-acronym' => 'Portable Sound Format',
    ],
    603 => [
        'extension' => [
            0 => 'psflib',
        ],
        'type' => 'audio/x-psflib',
        'document' => 'PSFlib audio library',
        'acronym' => 'PSFlib',
        'expanded-acronym' => 'Portable Sound Format Library',
        'sub-class-of' => 'audio/x-psf',
    ],
    604 => [
        'extension' => [
        ],
        'type' => 'audio/x-riff',
        'document' => 'RIFF audio',
    ],
    605 => [
        'extension' => [
            0 => 's3m',
        ],
        'type' => 'audio/x-s3m',
        'document' => 'Scream Tracker 3 audio',
    ],
    606 => [
        'extension' => [
            0 => 'pls',
        ],
        'type' => 'audio/x-scpls',
        'document' => 'MP3 ShoutCast playlist',
        'alias' => 'audio/scpls',
    ],
    607 => [
        'extension' => [
            0 => 'oga',
            1 => 'ogg',
            2 => 'spx',
        ],
        'type' => 'audio/x-speex+ogg',
        'document' => 'Ogg Speex audio',
        'sub-class-of' => 'audio/ogg',
    ],
    608 => [
        'extension' => [
            0 => 'spx',
        ],
        'type' => 'audio/x-speex',
        'document' => 'Speex audio',
    ],
    609 => [
        'extension' => [
            0 => 'stm',
        ],
        'type' => 'audio/x-stm',
        'document' => 'Scream Tracker audio',
    ],
    610 => [
        'extension' => [
            0 => 'tta',
        ],
        'type' => 'audio/x-tta',
        'document' => 'TrueAudio audio',
        'alias' => 'audio/tta',
    ],
    611 => [
        'extension' => [
            0 => 'voc',
        ],
        'type' => 'audio/x-voc',
        'document' => 'VOC audio',
    ],
    612 => [
        'extension' => [
            0 => 'oga',
            1 => 'ogg',
        ],
        'type' => 'audio/x-vorbis+ogg',
        'document' => 'Ogg Vorbis audio',
        'sub-class-of' => 'audio/ogg',
        'alias' => 'audio/x-vorbis',
    ],
    613 => [
        'extension' => [
            0 => 'wav',
        ],
        'type' => 'audio/x-wav',
        'document' => 'WAV audio',
        'alias' => 'audio/vnd.wave',
    ],
    614 => [
        'extension' => [
            0 => 'wvc',
        ],
        'type' => 'audio/x-wavpack-correction',
        'document' => 'WavPack audio correction file',
    ],
    615 => [
        'extension' => [
            0 => 'wv',
            1 => 'wvp',
        ],
        'type' => 'audio/x-wavpack',
        'document' => 'WavPack audio',
    ],
    616 => [
        'extension' => [
            0 => 'xi',
        ],
        'type' => 'audio/x-xi',
        'document' => 'Scream Tracker instrument',
    ],
    617 => [
        'extension' => [
            0 => 'xm',
        ],
        'type' => 'audio/x-xm',
        'document' => 'FastTracker II audio',
    ],
    618 => [
        'extension' => [
            0 => 'xmf',
        ],
        'type' => 'audio/x-xmf',
        'document' => 'XMF audio',
        'acronym' => 'XMF',
        'expanded-acronym' => 'eXtensible Music Format',
        'alias' => 'audio/xmf',
    ],
    619 => [
        'extension' => [
            0 => 'ttc',
        ],
        'type' => 'font/collection',
        'document' => 'Font collection',
    ],
    620 => [
        'extension' => [
            0 => 'otf',
        ],
        'type' => 'font/otf',
        'document' => 'OpenType font',
        'sub-class-of' => 'font/ttf',
        'alias' => 'application/x-font-otf',
    ],
    621 => [
        'extension' => [
            0 => 'ttf',
        ],
        'type' => 'font/ttf',
        'document' => 'TrueType font',
        'alias' => 'application/x-font-ttf',
    ],
    622 => [
        'extension' => [
            0 => 'woff',
        ],
        'type' => 'font/woff',
        'document' => 'WOFF font',
        'acronym' => 'WOFF',
        'expanded-acronym' => 'Web Open Font Format',
        'alias' => 'application/font-woff',
    ],
    623 => [
        'extension' => [
            0 => 'woff2',
        ],
        'type' => 'font/woff2',
        'document' => 'WOFF2 font',
        'acronym' => 'WOFF2',
        'expanded-acronym' => 'Web Open Font Format 2.0',
    ],
    624 => [
        'extension' => [
            0 => 'astc',
        ],
        'type' => 'image/astc',
        'document' => 'ASTC texture',
        'acronym' => 'ASTC',
        'expanded-acronym' => 'Advanced Scalable Texture Compression',
    ],
    625 => [
        'extension' => [
            0 => 'avif',
            1 => 'avif',
            2 => 'avifs',
        ],
        'type' => 'image/avif',
        'document' => 'AVIF image',
        'acronym' => 'AVIF',
        'expanded-acronym' => 'AV1 Image File Format',
        'alias' => 'image/avif-sequence',
    ],
    626 => [
        'extension' => [
            0 => 'bmp',
            1 => 'dib',
        ],
        'type' => 'image/bmp',
        'document' => 'Windows BMP image',
        'alias' => 'image/x-MS-bmp',
    ],
    627 => [
        'extension' => [
            0 => 'cgm',
        ],
        'type' => 'image/cgm',
        'document' => 'CGM image',
        'acronym' => 'CGM',
        'expanded-acronym' => 'Computer Graphics Metafile',
    ],
    628 => [
        'extension' => [
        ],
        'type' => 'image/dpx',
        'document' => 'DPX image',
        'acronym' => 'DPX',
        'expanded-acronym' => 'Digital Moving Picture Exchange',
    ],
    629 => [
        'extension' => [
            0 => 'emf',
        ],
        'type' => 'image/emf',
        'document' => 'EMF image',
        'acronym' => 'EMF',
        'expanded-acronym' => 'Enhanced MetaFile',
        'alias' => 'application/emf',
    ],
    630 => [
        'extension' => [
            0 => 'fits',
        ],
        'type' => 'image/fits',
        'document' => 'FITS document',
        'acronym' => 'FITS',
        'expanded-acronym' => 'Flexible Image Transport System',
        'alias' => 'image/x-fits',
    ],
    631 => [
        'extension' => [
            0 => 'g3',
        ],
        'type' => 'image/g3fax',
        'document' => 'CCITT G3 fax image',
        'alias' => 'image/fax-g3',
    ],
    632 => [
        'extension' => [
            0 => 'gif',
        ],
        'type' => 'image/gif',
        'document' => 'GIF image',
    ],
    633 => [
        'extension' => [
            0 => 'heic',
            1 => 'heif',
            2 => 'heic',
            3 => 'heif',
        ],
        'type' => 'image/heif',
        'document' => 'HEIF image',
        'acronym' => 'HEIF',
        'expanded-acronym' => 'High Efficiency Image File',
        'alias' => 'image/heic',
    ],
    634 => [
        'extension' => [
            0 => 'ief',
        ],
        'type' => 'image/ief',
        'document' => 'IEF image',
    ],
    635 => [
        'extension' => [
            0 => 'jp2',
            1 => 'jpg2',
        ],
        'type' => 'image/jp2',
        'document' => 'JPEG-2000 JP2 image',
        'acronym' => 'JP2',
        'expanded-acronym' => 'JPEG-2000',
        'alias' => 'image/x-jpeg2000-image',
    ],
    636 => [
        'extension' => [
            0 => 'jpg',
            1 => 'jpeg',
            2 => 'jpe',
        ],
        'type' => 'image/jpeg',
        'document' => 'JPEG image',
        'alias' => 'image/pjpeg',
    ],
    637 => [
        'extension' => [
            0 => 'jpm',
            1 => 'jpgm',
        ],
        'type' => 'image/jpm',
        'document' => 'JPEG-2000 JPM image',
        'acronym' => 'JPM',
        'expanded-acronym' => 'JPEG-2000 Mixed',
    ],
    638 => [
        'extension' => [
            0 => 'jpf',
            1 => 'jpx',
        ],
        'type' => 'image/jpx',
        'document' => 'JPEG-2000 JPX image',
        'acronym' => 'JPX',
        'expanded-acronym' => 'JPEG-2000 eXtended',
    ],
    639 => [
        'extension' => [
            0 => 'jxl',
            1 => 'jxl',
        ],
        'type' => 'image/jxl',
        'document' => 'JPEG XL image',
    ],
    640 => [
        'extension' => [
            0 => 'ktx',
        ],
        'type' => 'image/ktx',
        'document' => 'Khronos texture image',
    ],
    641 => [
        'extension' => [
            0 => 'ktx2',
        ],
        'type' => 'image/ktx2',
        'document' => 'Khronos texture image',
    ],
    642 => [
        'extension' => [
            0 => 'ora',
        ],
        'type' => 'image/openraster',
        'document' => 'OpenRaster image',
        'sub-class-of' => 'application/zip',
    ],
    643 => [
        'extension' => [
            0 => 'png',
        ],
        'type' => 'image/png',
        'document' => 'PNG image',
    ],
    644 => [
        'extension' => [
            0 => 'rle',
        ],
        'type' => 'image/rle',
        'document' => 'RLE bitmap image',
        'acronym' => 'RLE',
        'expanded-acronym' => 'Run Length Encoded',
    ],
    645 => [
        'extension' => [
            0 => 'svgz',
        ],
        'type' => 'image/svg+xml-compressed',
        'document' => 'compressed SVG image',
        'acronym' => 'SVG',
        'expanded-acronym' => 'Scalable Vector Graphics',
        'sub-class-of' => 'application/gzip',
    ],
    646 => [
        'extension' => [
            0 => 'svg',
        ],
        'type' => 'image/svg+xml',
        'document' => 'SVG image',
        'acronym' => 'SVG',
        'expanded-acronym' => 'Scalable Vector Graphics',
        'sub-class-of' => 'application/xml',
    ],
    647 => [
        'extension' => [
            0 => 'tif',
            1 => 'tiff',
        ],
        'type' => 'image/tiff',
        'document' => 'TIFF image',
        'acronym' => 'TIFF',
        'expanded-acronym' => 'Tagged Image File Format',
    ],
    648 => [
        'extension' => [
            0 => 'psd',
        ],
        'type' => 'image/vnd.adobe.photoshop',
        'document' => 'Photoshop image',
        'alias' => 'application/x-photoshop',
    ],
    649 => [
        'extension' => [
            0 => 'djvu',
            1 => 'djv',
        ],
        'type' => 'image/vnd.djvu+multipage',
        'document' => 'DjVu document',
        'sub-class-of' => 'image/vnd.djvu',
    ],
    650 => [
        'extension' => [
            0 => 'djvu',
            1 => 'djv',
        ],
        'type' => 'image/vnd.djvu',
        'document' => 'DjVu image',
        'alias' => 'image/x.djvu',
    ],
    651 => [
        'extension' => [
            0 => 'dwg',
        ],
        'type' => 'image/vnd.dwg',
        'document' => 'AutoCAD image',
    ],
    652 => [
        'extension' => [
            0 => 'dxf',
        ],
        'type' => 'image/vnd.dxf',
        'document' => 'DXF vector image',
    ],
    653 => [
        'extension' => [
            0 => 'ico',
        ],
        'type' => 'image/vnd.microsoft.icon',
        'document' => 'Windows icon',
        'alias' => 'text/ico',
    ],
    654 => [
        'extension' => [
            0 => 'mdi',
        ],
        'type' => 'image/vnd.ms-modi',
        'document' => 'MDI image',
        'acronym' => 'MDI',
        'expanded-acronym' => 'Microsoft Document Imaging',
    ],
    655 => [
        'extension' => [
            0 => 'rp',
        ],
        'type' => 'image/vnd.rn-realpix',
        'document' => 'RealPix document',
    ],
    656 => [
        'extension' => [
            0 => 'wbmp',
        ],
        'type' => 'image/vnd.wap.wbmp',
        'document' => 'WBMP image',
        'acronym' => 'WBMP',
        'expanded-acronym' => 'WAP bitmap',
    ],
    657 => [
        'extension' => [
            0 => 'pcx',
        ],
        'type' => 'image/vnd.zbrush.pcx',
        'document' => 'PCX image',
        'acronym' => 'PCX',
        'expanded-acronym' => 'PiCture eXchange',
        'alias' => 'image/x-pcx',
    ],
    658 => [
        'extension' => [
            0 => 'webp',
        ],
        'type' => 'image/webp',
        'document' => 'WebP image',
    ],
    659 => [
        'extension' => [
            0 => 'wmf',
        ],
        'type' => 'image/wmf',
        'document' => 'WMF image',
        'acronym' => 'WMF',
        'expanded-acronym' => 'Windows Metafile',
        'alias' => 'application/x-msmetafile',
    ],
    660 => [
        'extension' => [
            0 => '3ds',
        ],
        'type' => 'image/x-3ds',
        'document' => '3D Studio image',
    ],
    661 => [
        'extension' => [
            0 => 'dng',
        ],
        'type' => 'image/x-adobe-dng',
        'document' => 'Adobe DNG negative',
        'acronym' => 'DNG',
        'expanded-acronym' => 'Digital Negative',
        'sub-class-of' => 'image/tiff',
    ],
    662 => [
        'extension' => [
            0 => 'ag',
        ],
        'type' => 'image/x-applix-graphics',
        'document' => 'Applix Graphics image',
    ],
    663 => [
        'extension' => [
            0 => 'eps.bz2',
            1 => 'epsi.bz2',
            2 => 'epsf.bz2',
        ],
        'type' => 'image/x-bzeps',
        'document' => 'EPS image (bzip-compressed)',
        'sub-class-of' => 'application/x-bzip',
    ],
    664 => [
        'extension' => [
            0 => 'cr2',
        ],
        'type' => 'image/x-canon-cr2',
        'document' => 'Canon CR2 raw image',
        'acronym' => 'CR2',
        'expanded-acronym' => 'Canon Raw 2',
        'sub-class-of' => 'image/tiff',
    ],
    665 => [
        'extension' => [
            0 => 'cr3',
        ],
        'type' => 'image/x-canon-cr3',
        'document' => 'Canon CR3 raw image',
        'acronym' => 'CR3',
        'expanded-acronym' => 'Canon Raw 3',
        'sub-class-of' => 'image/x-dcraw',
    ],
    666 => [
        'extension' => [
            0 => 'crw',
        ],
        'type' => 'image/x-canon-crw',
        'document' => 'Canon CRW raw image',
        'acronym' => 'CRW',
        'expanded-acronym' => 'Canon RaW',
        'sub-class-of' => 'image/x-dcraw',
    ],
    667 => [
        'extension' => [
            0 => 'ras',
        ],
        'type' => 'image/x-cmu-raster',
        'document' => 'CMU raster image',
    ],
    668 => [
        'extension' => [
            0 => 'xcf.gz',
            1 => 'xcf.bz2',
        ],
        'type' => 'image/x-compressed-xcf',
        'document' => 'compressed GIMP image',
    ],
    669 => [
        'extension' => [
        ],
        'type' => 'image/x-dcraw',
        'document' => 'digital raw image',
    ],
    670 => [
        'extension' => [
            0 => 'dds',
        ],
        'type' => 'image/x-dds',
        'document' => 'DirectDraw surface',
    ],
    671 => [
        'extension' => [
        ],
        'type' => 'image/x-dib',
        'document' => 'DIB image',
        'acronym' => 'DIB',
        'expanded-acronym' => 'Device Independent Bitmap',
    ],
    672 => [
        'extension' => [
            0 => 'eps',
            1 => 'epsi',
            2 => 'epsf',
        ],
        'type' => 'image/x-eps',
        'document' => 'EPS image',
        'acronym' => 'EPS',
        'expanded-acronym' => 'Encapsulated PostScript',
        'sub-class-of' => 'application/postscript',
    ],
    673 => [
        'extension' => [
            0 => 'exr',
        ],
        'type' => 'image/x-exr',
        'document' => 'EXR image',
    ],
    674 => [
        'extension' => [
        ],
        'type' => 'image/x-fpx',
        'document' => 'FPX image',
        'acronym' => 'FPX',
        'expanded-acronym' => 'FlashPiX',
    ],
    675 => [
        'extension' => [
            0 => 'raf',
        ],
        'type' => 'image/x-fuji-raf',
        'document' => 'Fuji RAF raw image',
        'acronym' => 'RAF',
        'expanded-acronym' => 'RAw Format',
        'sub-class-of' => 'image/x-dcraw',
    ],
    676 => [
        'extension' => [
            0 => 'gbr',
        ],
        'type' => 'image/x-gimp-gbr',
        'document' => 'GIMP brush',
    ],
    677 => [
        'extension' => [
            0 => 'gih',
        ],
        'type' => 'image/x-gimp-gih',
        'document' => 'GIMP brush pipe',
    ],
    678 => [
        'extension' => [
            0 => 'pat',
        ],
        'type' => 'image/x-gimp-pat',
        'document' => 'GIMP pattern',
    ],
    679 => [
        'extension' => [
            0 => 'eps.gz',
            1 => 'epsi.gz',
            2 => 'epsf.gz',
        ],
        'type' => 'image/x-gzeps',
        'document' => 'EPS image (gzip-compressed)',
        'sub-class-of' => 'application/gzip',
    ],
    680 => [
        'extension' => [
            0 => 'hdr',
            1 => 'pic',
        ],
        'type' => 'image/x-hdr',
        'document' => 'HDR image',
        'acronym' => 'HDR',
        'expanded-acronym' => 'High Dynamic Range',
    ],
    681 => [
        'extension' => [
            0 => 'icns',
        ],
        'type' => 'image/x-icns',
        'document' => 'MacOS X icon',
    ],
    682 => [
        'extension' => [
            0 => 'iff',
            1 => 'ilbm',
            2 => 'lbm',
        ],
        'type' => 'image/x-ilbm',
        'document' => 'ILBM image',
        'acronym' => 'ILBM',
        'expanded-acronym' => 'InterLeaved BitMap',
        'sub-class-of' => 'application/x-iff',
        'alias' => 'image/x-iff',
    ],
    683 => [
        'extension' => [
            0 => 'jng',
        ],
        'type' => 'image/x-jng',
        'document' => 'JNG image',
        'acronym' => 'JNG',
        'expanded-acronym' => 'JPEG Network Graphics',
    ],
    684 => [
        'extension' => [
            0 => 'j2c',
            1 => 'j2k',
            2 => 'jpc',
        ],
        'type' => 'image/x-jp2-codestream',
        'document' => 'JPEG-2000 codestream',
    ],
    685 => [
        'extension' => [
            0 => 'bay',
            1 => 'bmq',
            2 => 'cs1',
            3 => 'cs2',
            4 => 'erf',
            5 => 'fff',
            6 => 'hrd',
            7 => 'mdc',
            8 => 'mos',
            9 => 'pnx',
            10 => 'rdc',
        ],
        'type' => 'image/x-kde-raw',
        'document' => 'KDE raw image formats',
        'sub-class-of' => 'image/x-dcraw',
    ],
    686 => [
        'extension' => [
            0 => 'dcr',
        ],
        'type' => 'image/x-kodak-dcr',
        'document' => 'Kodak DCR raw image',
        'acronym' => 'DCR',
        'expanded-acronym' => 'Digital Camera Raw',
        'sub-class-of' => 'image/tiff',
    ],
    687 => [
        'extension' => [
            0 => 'k25',
        ],
        'type' => 'image/x-kodak-k25',
        'document' => 'Kodak K25 raw image',
        'acronym' => 'K25',
        'expanded-acronym' => 'Kodak DC25',
        'sub-class-of' => 'image/tiff',
    ],
    688 => [
        'extension' => [
            0 => 'kdc',
        ],
        'type' => 'image/x-kodak-kdc',
        'document' => 'Kodak KDC raw image',
        'acronym' => 'KDC',
        'expanded-acronym' => 'Kodak Digital Camera',
        'sub-class-of' => 'image/tiff',
    ],
    689 => [
        'extension' => [
            0 => 'lwo',
            1 => 'lwob',
        ],
        'type' => 'image/x-lwo',
        'document' => 'LightWave object',
    ],
    690 => [
        'extension' => [
            0 => 'lws',
        ],
        'type' => 'image/x-lws',
        'document' => 'LightWave scene',
    ],
    691 => [
        'extension' => [
            0 => 'pntg',
        ],
        'type' => 'image/x-macpaint',
        'document' => 'MacPaint Bitmap image',
    ],
    692 => [
        'extension' => [
            0 => 'mrw',
        ],
        'type' => 'image/x-minolta-mrw',
        'document' => 'Minolta MRW raw image',
        'acronym' => 'MRW',
        'expanded-acronym' => 'Minolta RaW',
        'sub-class-of' => 'image/x-dcraw',
    ],
    693 => [
        'extension' => [
            0 => 'msod',
        ],
        'type' => 'image/x-msod',
        'document' => 'Office drawing',
    ],
    694 => [
        'extension' => [
        ],
        'type' => 'image/x-niff',
        'document' => 'NIFF image',
    ],
    695 => [
        'extension' => [
            0 => 'nef',
        ],
        'type' => 'image/x-nikon-nef',
        'document' => 'Nikon NEF raw image',
        'acronym' => 'NEF',
        'expanded-acronym' => 'Nikon Electronic Format',
        'sub-class-of' => 'image/tiff',
    ],
    696 => [
        'extension' => [
            0 => 'nrw',
        ],
        'type' => 'image/x-nikon-nrw',
        'document' => 'Nikon NRW raw image',
        'sub-class-of' => 'image/tiff',
    ],
    697 => [
        'extension' => [
            0 => 'orf',
        ],
        'type' => 'image/x-olympus-orf',
        'document' => 'Olympus ORF raw image',
        'acronym' => 'ORF',
        'expanded-acronym' => 'Olympus Raw Format',
        'sub-class-of' => 'image/x-dcraw',
    ],
    698 => [
        'extension' => [
            0 => 'raw',
        ],
        'type' => 'image/x-panasonic-rw',
        'document' => 'Panasonic raw image',
        'sub-class-of' => 'image/x-dcraw',
        'alias' => 'image/x-panasonic-raw',
    ],
    699 => [
        'extension' => [
            0 => 'rw2',
        ],
        'type' => 'image/x-panasonic-rw2',
        'document' => 'Panasonic raw image',
        'sub-class-of' => 'image/x-dcraw',
        'alias' => 'image/x-panasonic-raw2',
    ],
    700 => [
        'extension' => [
            0 => 'pef',
        ],
        'type' => 'image/x-pentax-pef',
        'document' => 'Pentax PEF raw image',
        'acronym' => 'PEF',
        'expanded-acronym' => 'Pentax Electronic Format',
        'sub-class-of' => 'image/tiff',
    ],
    701 => [
        'extension' => [
            0 => 'pcd',
        ],
        'type' => 'image/x-photo-cd',
        'document' => 'PCD image',
        'acronym' => 'PCD',
        'expanded-acronym' => 'PhotoCD',
    ],
    702 => [
        'extension' => [
            0 => 'pic',
        ],
        'type' => 'image/x-pic',
        'document' => 'Softimage PIC image',
    ],
    703 => [
        'extension' => [
            0 => 'pct',
            1 => 'pict',
            2 => 'pict1',
            3 => 'pict2',
        ],
        'type' => 'image/x-pict',
        'document' => 'Macintosh Quickdraw/PICT drawing',
    ],
    704 => [
        'extension' => [
            0 => 'pnm',
        ],
        'type' => 'image/x-portable-anymap',
        'document' => 'PNM image',
    ],
    705 => [
        'extension' => [
            0 => 'pbm',
        ],
        'type' => 'image/x-portable-bitmap',
        'document' => 'PBM image',
        'acronym' => 'PBM',
        'expanded-acronym' => 'Portable BitMap',
        'sub-class-of' => 'image/x-portable-anymap',
    ],
    706 => [
        'extension' => [
            0 => 'pgm',
        ],
        'type' => 'image/x-portable-graymap',
        'document' => 'PGM image',
        'acronym' => 'PGM',
        'expanded-acronym' => 'Portable GrayMap',
        'sub-class-of' => 'image/x-portable-anymap',
    ],
    707 => [
        'extension' => [
            0 => 'ppm',
        ],
        'type' => 'image/x-portable-pixmap',
        'document' => 'PPM image',
        'acronym' => 'PPM',
        'expanded-acronym' => 'Portable PixMap',
        'sub-class-of' => 'image/x-portable-anymap',
    ],
    708 => [
        'extension' => [
            0 => 'qtif',
            1 => 'qif',
        ],
        'type' => 'image/x-quicktime',
        'document' => 'QuickTime image',
    ],
    709 => [
        'extension' => [
            0 => 'rgb',
        ],
        'type' => 'image/x-rgb',
        'document' => 'RGB image',
    ],
    710 => [
        'extension' => [
            0 => 'sgi',
        ],
        'type' => 'image/x-sgi',
        'document' => 'SGI image',
    ],
    711 => [
        'extension' => [
            0 => 'x3f',
        ],
        'type' => 'image/x-sigma-x3f',
        'document' => 'Sigma X3F raw image',
        'acronym' => 'X3F',
        'expanded-acronym' => 'X3 Foveon',
        'sub-class-of' => 'image/x-dcraw',
    ],
    712 => [
        'extension' => [
            0 => 'sk',
            1 => 'sk1',
        ],
        'type' => 'image/x-skencil',
        'document' => 'Skencil document',
    ],
    713 => [
        'extension' => [
            0 => 'arw',
        ],
        'type' => 'image/x-sony-arw',
        'document' => 'Sony ARW raw image',
        'acronym' => 'ARW',
        'expanded-acronym' => 'Alpha Raw format',
        'sub-class-of' => 'image/tiff',
    ],
    714 => [
        'extension' => [
            0 => 'sr2',
        ],
        'type' => 'image/x-sony-sr2',
        'document' => 'Sony SR2 raw image',
        'acronym' => 'SR2',
        'expanded-acronym' => 'Sony Raw format 2',
        'sub-class-of' => 'image/tiff',
    ],
    715 => [
        'extension' => [
            0 => 'srf',
        ],
        'type' => 'image/x-sony-srf',
        'document' => 'Sony SRF raw image',
        'acronym' => 'SRF',
        'expanded-acronym' => 'Sony Raw Format',
        'sub-class-of' => 'image/tiff',
    ],
    716 => [
        'extension' => [
            0 => 'sun',
        ],
        'type' => 'image/x-sun-raster',
        'document' => 'Sun raster image',
    ],
    717 => [
        'extension' => [
            0 => 'tga',
            1 => 'icb',
            2 => 'tpic',
            3 => 'vda',
            4 => 'vst',
        ],
        'type' => 'image/x-tga',
        'document' => 'TGA image',
        'acronym' => 'TGA',
        'expanded-acronym' => 'Truevision Graphics Adapter',
        'alias' => 'image/x-targa',
    ],
    718 => [
        'extension' => [
        ],
        'type' => 'image/x-tiff-multipage',
        'document' => 'Multi-page TIFF image',
        'acronym' => 'TIFF',
        'expanded-acronym' => 'Tagged Image File Format',
        'sub-class-of' => 'image/tiff',
    ],
    719 => [
        'extension' => [
            0 => 'cur',
        ],
        'type' => 'image/x-win-bitmap',
        'document' => 'Windows cursor',
    ],
    720 => [
        'extension' => [
            0 => 'xbm',
        ],
        'type' => 'image/x-xbitmap',
        'document' => 'XBM image',
        'acronym' => 'XBM',
        'expanded-acronym' => 'X BitMap',
    ],
    721 => [
        'extension' => [
            0 => 'xcf',
        ],
        'type' => 'image/x-xcf',
        'document' => 'GIMP image',
    ],
    722 => [
        'extension' => [
        ],
        'type' => 'image/x-xcursor',
        'document' => 'X11 cursor',
    ],
    723 => [
        'extension' => [
            0 => 'fig',
        ],
        'type' => 'image/x-xfig',
        'document' => 'XFig image',
    ],
    724 => [
        'extension' => [
            0 => 'xpm',
        ],
        'type' => 'image/x-xpixmap',
        'document' => 'XPM image',
        'acronym' => 'XPM',
        'expanded-acronym' => 'X PixMap',
        'alias' => 'image/x-xpm',
    ],
    725 => [
        'extension' => [
            0 => 'xwd',
        ],
        'type' => 'image/x-xwindowdump',
        'document' => 'X window image',
    ],
    726 => [
        'extension' => [
        ],
        'type' => 'inode/blockdevice',
        'document' => 'block device',
    ],
    727 => [
        'extension' => [
        ],
        'type' => 'inode/chardevice',
        'document' => 'character device',
    ],
    728 => [
        'extension' => [
        ],
        'type' => 'inode/directory',
        'document' => 'folder',
        'alias' => 'x-directory/normal',
    ],
    729 => [
        'extension' => [
        ],
        'type' => 'inode/fifo',
        'document' => 'pipe',
    ],
    730 => [
        'extension' => [
        ],
        'type' => 'inode/mount-point',
        'document' => 'mount point',
        'sub-class-of' => 'inode/directory',
    ],
    731 => [
        'extension' => [
        ],
        'type' => 'inode/socket',
        'document' => 'socket',
    ],
    732 => [
        'extension' => [
        ],
        'type' => 'inode/symlink',
        'document' => 'symbolic link',
    ],
    733 => [
        'extension' => [
        ],
        'type' => 'message/delivery-status',
        'document' => 'mail delivery report',
        'sub-class-of' => 'text/plain',
    ],
    734 => [
        'extension' => [
        ],
        'type' => 'message/disposition-notification',
        'document' => 'mail disposition report',
        'sub-class-of' => 'text/plain',
    ],
    735 => [
        'extension' => [
        ],
        'type' => 'message/external-body',
        'document' => 'reference to remote file',
    ],
    736 => [
        'extension' => [
        ],
        'type' => 'message/news',
        'document' => 'Usenet news message',
        'sub-class-of' => 'text/plain',
    ],
    737 => [
        'extension' => [
        ],
        'type' => 'message/partial',
        'document' => 'partial email message',
        'sub-class-of' => 'text/plain',
    ],
    738 => [
        'extension' => [
            0 => 'eml',
        ],
        'type' => 'message/rfc822',
        'document' => 'email message',
        'sub-class-of' => 'text/plain',
    ],
    739 => [
        'extension' => [
            0 => 'RMAIL',
        ],
        'type' => 'message/x-gnu-rmail',
        'document' => 'GNU mail message',
    ],
];}