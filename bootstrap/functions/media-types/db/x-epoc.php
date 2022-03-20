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


function media_types_x_epoc ():array { return [
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
    740 => [
        'extension' => [
            0 => 'gltf',
        ],
        'type' => 'model/gltf+json',
        'document' => 'glTF model',
        'acronym' => 'glTF',
        'expanded-acronym' => 'GL Transmission Format',
        'sub-class-of' => 'application/json',
    ],
    741 => [
        'extension' => [
            0 => 'glb',
        ],
        'type' => 'model/gltf-binary',
        'document' => 'glTF model',
        'acronym' => 'glTF',
        'expanded-acronym' => 'GL Transmission Format',
    ],
    742 => [
        'extension' => [
            0 => 'igs',
            1 => 'iges',
        ],
        'type' => 'model/iges',
        'document' => 'IGES document',
        'acronym' => 'IGES',
        'expanded-acronym' => 'Initial Graphics Exchange Specification',
        'sub-class-of' => 'text/plain',
    ],
    743 => [
        'extension' => [
            0 => 'stl',
        ],
        'type' => 'model/stl',
        'document' => 'STL 3D model',
        'acronym' => 'STL',
        'expanded-acronym' => 'StereoLithography',
        'alias' => 'model/x.stl-binary',
    ],
    744 => [
        'extension' => [
            0 => 'vrm',
            1 => 'vrml',
            2 => 'wrl',
        ],
        'type' => 'model/vrml',
        'document' => 'VRML document',
        'acronym' => 'VRML',
        'expanded-acronym' => 'Virtual Reality Modeling Language',
        'sub-class-of' => 'text/plain',
    ],
    745 => [
        'extension' => [
        ],
        'type' => 'multipart/alternative',
        'document' => 'message in several formats',
    ],
    746 => [
        'extension' => [
        ],
        'type' => 'multipart/appledouble',
        'document' => 'Macintosh AppleDouble-encoded file',
    ],
    747 => [
        'extension' => [
        ],
        'type' => 'multipart/digest',
        'document' => 'message digest',
    ],
    748 => [
        'extension' => [
        ],
        'type' => 'multipart/encrypted',
        'document' => 'encrypted message',
    ],
    749 => [
        'extension' => [
        ],
        'type' => 'multipart/mixed',
        'document' => 'compound documents',
    ],
    750 => [
        'extension' => [
        ],
        'type' => 'multipart/related',
        'document' => 'compound document',
    ],
    751 => [
        'extension' => [
        ],
        'type' => 'multipart/report',
        'document' => 'mail system report',
    ],
    752 => [
        'extension' => [
        ],
        'type' => 'multipart/signed',
        'document' => 'signed message',
    ],
    753 => [
        'extension' => [
        ],
        'type' => 'multipart/x-mixed-replace',
        'document' => 'stream of data (server push)',
    ],
    754 => [
        'extension' => [
            0 => 'avif',
        ],
        'type' => 'image/avif',
        'document' => 'AVIF image',
    ],
    755 => [
        'extension' => [
            0 => 'lrf',
        ],
        'type' => 'application/x-sony-bbeb',
        'document' => 'SONY E-book compiled format',
    ],
    756 => [
        'extension' => [
            0 => 'epub',
        ],
        'type' => 'application/epub+zip',
        'document' => 'EPUB ebook format',
    ],
    757 => [
        'extension' => [
            0 => 'lrs',
        ],
        'type' => 'text/lrs',
        'document' => 'SONY E-book source format',
    ],
    758 => [
        'extension' => [
            0 => 'azw',
        ],
        'type' => 'application/x-mobipocket-ebook',
        'document' => 'Amazon Mobipocket e-book format',
        'sub-class-of' => 'application/x-palm-database',
    ],
    759 => [
        'extension' => [
            0 => 'tpz',
            1 => 'azw1',
        ],
        'type' => 'application/x-topaz-ebook',
        'document' => 'Amazon Topaz ebook format',
    ],
    760 => [
        'extension' => [
            0 => 'azw2',
        ],
        'type' => 'application/x-kindle-application',
        'document' => 'Amazon Kindle Application (Kindlet)',
        'sub-class-of' => 'application/x-java-archive',
    ],
    761 => [
        'extension' => [
            0 => 'pobi',
        ],
        'type' => 'application/x-mobipocket-subscription',
        'document' => 'Amazon Mobipocket ebook newspaper format',
        'sub-class-of' => 'application/x-mobipocket-ebook',
        'alias' => 'application/x-mobipocket-subscription-magazine',
    ],
    762 => [
        'extension' => [
            0 => 'azw3',
        ],
        'type' => 'application/x-mobi8-ebook',
        'document' => 'Amazon KF8 ebook format',
        'sub-class-of' => 'application/x-palm-database',
    ],
    763 => [
        'extension' => [
            0 => 'CMakeCache.txt',
        ],
        'type' => 'application/x-cmakecache',
        'document' => 'CMake cache file',
        'sub-class-of' => 'text/plain',
    ],
    764 => [
        'extension' => [
            0 => 'a26',
        ],
        'type' => 'application/x-atari-2600-rom',
        'document' => 'Atari 2600 ROM',
    ],
    765 => [
        'extension' => [
            0 => 'a78',
        ],
        'type' => 'application/x-atari-7800-rom',
        'document' => 'Atari 7800 ROM',
    ],
    766 => [
        'extension' => [
            0 => 'lnx',
        ],
        'type' => 'application/x-atari-lynx-rom',
        'document' => 'Atari Lynx ROM',
    ],
    767 => [
        'extension' => [
            0 => 'ez',
        ],
        'type' => 'application/andrew-inset',
        'document' => 'ATK inset',
        'acronym' => 'ATK',
        'expanded-acronym' => 'Andrew Toolkit',
    ],
    768 => [
        'extension' => [
            0 => 'epub',
        ],
        'type' => 'application/epub+zip',
        'document' => 'electronic book document',
        'sub-class-of' => 'application/zip',
    ],
    769 => [
        'extension' => [
            0 => 'azw3',
            1 => 'kfx',
        ],
        'type' => 'application/vnd.amazon.mobi8-ebook',
        'document' => 'Kindle book document',
        'sub-class-of' => 'application/x-mobipocket-ebook',
        'alias' => 'application/x-mobi8-ebook',
    ],
    770 => [
        'extension' => [
            0 => 'ai',
        ],
        'type' => 'application/illustrator',
        'document' => 'Adobe Illustrator document',
        'alias' => 'application/vnd.adobe.illustrator',
    ],
    771 => [
        'extension' => [
            0 => 'must be converted with BinHex',
        ],
        'type' => 'application/mac-binhex40',
        'document' => 'Macintosh BinHex-encoded file',
    ],
    772 => [
        'extension' => [
            0 => 'nb',
        ],
        'type' => 'application/mathematica',
        'document' => 'Mathematica Notebook file',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/x-mathematica',
    ],
    773 => [
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
    774 => [
        'extension' => [
            0 => 'mbox',
        ],
        'type' => 'application/mbox',
        'document' => 'mailbox file',
        'sub-class-of' => 'text/plain',
    ],
    775 => [
        'extension' => [
            0 => 'metalink',
        ],
        'type' => 'application/metalink+xml',
        'document' => 'Metalink file',
        'sub-class-of' => 'application/xml',
    ],
    776 => [
        'extension' => [
            0 => 'meta4',
        ],
        'type' => 'application/metalink4+xml',
        'document' => 'Metalink file',
        'sub-class-of' => 'application/xml',
    ],
    777 => [
        'extension' => [
        ],
        'type' => 'application/octet-stream',
        'document' => 'unknown',
    ],
    778 => [
        'extension' => [
            0 => 'wkdownload',
            1 => 'crdownload',
            2 => 'part',
        ],
        'type' => 'application/x-partial-download',
        'document' => 'Partially downloaded file',
    ],
    779 => [
        'extension' => [
            0 => 'oda',
        ],
        'type' => 'application/oda',
        'document' => 'ODA document',
        'acronym' => 'ODA',
        'expanded-acronym' => 'Office Document Architecture',
    ],
    780 => [
        'extension' => [
            0 => 'wwf',
        ],
        'type' => 'application/x-wwf',
        'document' => 'WWF document',
        'sub-class-of' => 'application/pdf',
        'alias' => 'application/wwf',
    ],
    781 => [
        'extension' => [
            0 => 'pdf',
        ],
        'type' => 'application/pdf',
        'document' => 'PDF document',
        'acronym' => 'PDF',
        'expanded-acronym' => 'Portable Document Format',
        'alias' => 'application/nappdf',
    ],
    782 => [
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
    783 => [
        'extension' => [
            0 => 'themepack',
        ],
        'type' => 'application/x-windows-themepack',
        'document' => 'Microsoft Windows theme pack',
        'sub-class-of' => 'application/vnd.ms-cab-compressed',
    ],
    784 => [
        'extension' => [
            0 => 'amz',
        ],
        'type' => 'audio/x-amzxml',
        'document' => 'AmazonMP3 download file',
    ],
    785 => [
        'extension' => [
            0 => 'gsm',
        ],
        'type' => 'audio/x-gsm',
        'document' => 'GSM 06.10 audio',
        'acronym' => 'GSM',
        'expanded-acronym' => 'Global System for Mobile communications',
    ],
    786 => [
        'extension' => [
            0 => 'pla',
        ],
        'type' => 'audio/x-iriver-pla',
        'document' => 'iRiver playlist',
    ],
    787 => [
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
    788 => [
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
    789 => [
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
    790 => [
        'extension' => [
            0 => 'p7c',
            1 => 'p7m',
        ],
        'type' => 'application/pkcs7-mime',
        'document' => 'PKCS#7 file',
        'acronym' => 'PKCS',
        'expanded-acronym' => 'Public-Key Cryptography Standards',
    ],
    791 => [
        'extension' => [
            0 => 'p7s',
        ],
        'type' => 'application/pkcs7-signature',
        'document' => 'detached S/MIME signature',
        'acronym' => 'S/MIME',
        'expanded-acronym' => 'Secure/Multipurpose Internet Mail Extensions',
        'sub-class-of' => 'text/plain',
    ],
    792 => [
        'extension' => [
            0 => 'p8',
        ],
        'type' => 'application/pkcs8',
        'document' => 'PKCS#8 private key',
        'acronym' => 'PKCS',
        'expanded-acronym' => 'Public-Key Cryptography Standards',
    ],
    793 => [
        'extension' => [
            0 => 'p8e',
        ],
        'type' => 'application/pkcs8-encrypted',
        'document' => 'PKCS#8 private key (encrypted)',
        'acronym' => 'PKCS',
        'expanded-acronym' => 'Public-Key Cryptography Standards',
    ],
    794 => [
        'extension' => [
            0 => 'p10',
        ],
        'type' => 'application/pkcs10',
        'document' => 'PKCS#10 certification request',
        'acronym' => 'PKCS',
        'expanded-acronym' => 'Public-Key Cryptography Standards',
    ],
    795 => [
        'extension' => [
            0 => 'cer',
        ],
        'type' => 'application/pkix-cert',
        'document' => 'X.509 certificate',
    ],
    796 => [
        'extension' => [
            0 => 'crl',
        ],
        'type' => 'application/pkix-crl',
        'document' => 'certificate revocation list',
    ],
    797 => [
        'extension' => [
            0 => 'pkipath',
        ],
        'type' => 'application/pkix-pkipath',
        'document' => 'PkiPath certification path',
    ],
    798 => [
        'extension' => [
            0 => 'ps',
        ],
        'type' => 'application/postscript',
        'document' => 'PostScript document',
        'sub-class-of' => 'text/plain',
    ],
    799 => [
        'extension' => [
            0 => 'DataPlkr',
        ],
        'type' => 'application/prs.plucker',
        'document' => 'Plucker document',
    ],
    800 => [
        'extension' => [
            0 => 'raml',
        ],
        'type' => 'application/raml+yaml',
        'document' => 'RAML document',
        'acronym' => 'RAML',
        'expanded-acronym' => 'RESTful API Modeling Language',
        'sub-class-of' => 'application/x-yaml',
    ],
    801 => [
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
    802 => [
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
    803 => [
        'extension' => [
            0 => 'siv',
        ],
        'type' => 'application/sieve',
        'document' => 'Sieve mail filter script',
        'sub-class-of' => 'application/xml',
    ],
    804 => [
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
    805 => [
        'extension' => [
            0 => 'wpl',
        ],
        'type' => 'application/vnd.ms-wpl',
        'document' => 'WPL playlist',
        'acronym' => 'WPL',
        'expanded-acronym' => 'Windows Media Player Playlist',
    ],
    806 => [
        'extension' => [
            0 => 'sqlite2',
        ],
        'type' => 'application/x-sqlite2',
        'document' => 'SQLite2 database',
    ],
    807 => [
        'extension' => [
            0 => 'sqlite3',
        ],
        'type' => 'application/vnd.sqlite3',
        'document' => 'SQLite3 database',
        'alias' => 'application/x-sqlite3',
    ],
    808 => [
        'extension' => [
            0 => 'spx',
        ],
        'type' => 'application/x-apple-systemprofiler+xml',
        'document' => 'Apple System Profiler',
        'sub-class-of' => 'application/xml',
    ],
    809 => [
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
    810 => [
        'extension' => [
            0 => 'flv',
        ],
        'type' => 'video/x-flv',
        'document' => 'Flash video',
        'alias' => 'video/flv',
    ],
    811 => [
        'extension' => [
            0 => 'fxm',
        ],
        'type' => 'video/x-javafx',
        'document' => 'JavaFX video',
        'sub-class-of' => 'video/x-flv',
    ],
    812 => [
        'extension' => [
            0 => 'sgf',
        ],
        'type' => 'application/x-go-sgf',
        'document' => 'SGF record',
        'acronym' => 'SGF',
        'expanded-acronym' => 'Smart Game Format',
        'sub-class-of' => 'text/plain',
    ],
    813 => [
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
    814 => [
        'extension' => [
            0 => 'toml',
        ],
        'type' => 'application/toml',
        'document' => 'TOML document',
        'acronym' => 'TOML',
        'expanded-acronym' => 'Tom\'s Obvious Minimal Language',
        'sub-class-of' => 'text/plain',
    ],
    815 => [
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
    816 => [
        'extension' => [
            0 => 'cdr',
        ],
        'type' => 'application/vnd.corel-draw',
        'document' => 'Corel Draw drawing',
        'alias' => 'zz-application/zz-winassoc-cdr',
    ],
    817 => [
        'extension' => [
            0 => 'hpgl',
        ],
        'type' => 'application/vnd.hp-hpgl',
        'document' => 'HPGL file',
        'acronym' => 'HPGL',
        'expanded-acronym' => 'HP Graphics Language',
    ],
    818 => [
        'extension' => [
            0 => 'pcl',
        ],
        'type' => 'application/vnd.hp-pcl',
        'document' => 'PCL file',
        'acronym' => 'PCL',
        'expanded-acronym' => 'HP Printer Control Language',
    ],
    819 => [
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
    820 => [
        'extension' => [
            0 => 'lwp',
        ],
        'type' => 'application/vnd.lotus-wordpro',
        'document' => 'Lotus Word Pro document',
    ],
    821 => [
        'extension' => [
            0 => 'mdb',
        ],
        'type' => 'application/vnd.ms-access',
        'document' => 'JET database',
        'acronym' => 'JET',
        'expanded-acronym' => 'Joint Engine Technology',
        'alias' => 'zz-application/zz-winassoc-mdb',
    ],
    822 => [
        'extension' => [
            0 => 'cab',
        ],
        'type' => 'application/vnd.ms-cab-compressed',
        'document' => 'Microsoft Cabinet archive',
        'alias' => 'zz-application/zz-winassoc-cab',
    ],
    823 => [
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
    824 => [
        'extension' => [
            0 => 'xlam',
        ],
        'type' => 'application/vnd.ms-excel.addin.macroEnabled.12',
        'document' => 'Excel add-in',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    825 => [
        'extension' => [
            0 => 'xlsb',
        ],
        'type' => 'application/vnd.ms-excel.sheet.binary.macroEnabled.12',
        'document' => 'Excel 2007 binary spreadsheet',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    826 => [
        'extension' => [
            0 => 'xlsm',
        ],
        'type' => 'application/vnd.ms-excel.sheet.macroEnabled.12',
        'document' => 'Excel spreadsheet',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    827 => [
        'extension' => [
            0 => 'xltm',
        ],
        'type' => 'application/vnd.ms-excel.template.macroEnabled.12',
        'document' => 'Excel spreadsheet template',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    ],
    828 => [
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
    829 => [
        'extension' => [
            0 => 'ppam',
        ],
        'type' => 'application/vnd.ms-powerpoint.addin.macroEnabled.12',
        'document' => 'PowerPoint add-in',
    ],
    830 => [
        'extension' => [
            0 => 'pptm',
        ],
        'type' => 'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
        'document' => 'PowerPoint presentation',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    ],
    831 => [
        'extension' => [
            0 => 'sldm',
        ],
        'type' => 'application/vnd.ms-powerpoint.slide.macroEnabled.12',
        'document' => 'PowerPoint slide',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.presentationml.slide',
    ],
    832 => [
        'extension' => [
            0 => 'ppsm',
        ],
        'type' => 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12',
        'document' => 'PowerPoint presentation',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    ],
    833 => [
        'extension' => [
            0 => 'potm',
        ],
        'type' => 'application/vnd.ms-powerpoint.template.macroEnabled.12',
        'document' => 'PowerPoint presentation template',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.presentationml.template',
    ],
    834 => [
        'extension' => [
            0 => 'vsdx',
        ],
        'type' => 'application/vnd.ms-visio.drawing.main+xml',
        'document' => 'Office Open XML Visio drawing',
        'sub-class-of' => 'application/zip',
    ],
    835 => [
        'extension' => [
            0 => 'vstx',
        ],
        'type' => 'application/vnd.ms-visio.template.main+xml',
        'document' => 'Office Open XML Visio template',
        'sub-class-of' => 'application/zip',
    ],
    836 => [
        'extension' => [
            0 => 'vssx',
        ],
        'type' => 'application/vnd.ms-visio.stencil.main+xml',
        'document' => 'Office Open XML Visio stencil',
        'sub-class-of' => 'application/zip',
    ],
    837 => [
        'extension' => [
            0 => 'vsdm',
        ],
        'type' => 'application/vnd.ms-visio.drawing.macroEnabled.main+xml',
        'document' => 'Office Open XML Visio drawing',
        'sub-class-of' => 'application/zip',
    ],
    838 => [
        'extension' => [
            0 => 'vstm',
        ],
        'type' => 'application/vnd.ms-visio.template.macroEnabled.main+xml',
        'document' => 'Office Open XML Visio template',
        'sub-class-of' => 'application/zip',
    ],
    839 => [
        'extension' => [
            0 => 'vssm',
        ],
        'type' => 'application/vnd.ms-visio.stencil.macroEnabled.main+xml',
        'document' => 'Office Open XML Visio stencil',
        'sub-class-of' => 'application/zip',
    ],
    840 => [
        'extension' => [
            0 => 'docm',
        ],
        'type' => 'application/vnd.ms-word.document.macroEnabled.12',
        'document' => 'Word document',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
    841 => [
        'extension' => [
            0 => 'dotm',
        ],
        'type' => 'application/vnd.ms-word.template.macroEnabled.12',
        'document' => 'Word document template',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    ],
    842 => [
        'extension' => [
            0 => 'oxps',
        ],
        'type' => 'application/oxps',
        'document' => 'OpenXPS document',
        'acronym' => 'OpenXPS',
        'expanded-acronym' => 'Open XML Paper Specification',
        'sub-class-of' => 'application/zip',
    ],
    843 => [
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
    844 => [
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
    845 => [
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
    846 => [
        'extension' => [
            0 => 'doc',
        ],
        'type' => 'application/msword',
        'document' => 'Word document',
        'sub-class-of' => 'application/x-ole-storage',
        'alias' => 'zz-application/zz-winassoc-doc',
    ],
    847 => [
        'extension' => [
            0 => 'dot',
        ],
        'type' => 'application/msword-template',
        'document' => 'Word template',
        'sub-class-of' => 'application/msword',
    ],
    848 => [
        'extension' => [
            0 => 'gml',
        ],
        'type' => 'application/gml+xml',
        'document' => 'GML document',
        'acronym' => 'GML',
        'expanded-acronym' => 'Geography Markup Language',
        'sub-class-of' => 'application/xml',
    ],
    849 => [
        'extension' => [
            0 => 'gnd',
        ],
        'type' => 'application/gnunet-directory',
        'document' => 'GNUnet search file',
    ],
    850 => [
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
    851 => [
        'extension' => [
            0 => 'sdc',
        ],
        'type' => 'application/vnd.stardivision.calc',
        'document' => 'StarCalc spreadsheet',
    ],
    852 => [
        'extension' => [
            0 => 'sds',
        ],
        'type' => 'application/vnd.stardivision.chart',
        'document' => 'StarChart chart',
    ],
    853 => [
        'extension' => [
            0 => 'sda',
        ],
        'type' => 'application/vnd.stardivision.draw',
        'document' => 'StarDraw drawing',
    ],
    854 => [
        'extension' => [
            0 => 'sdd',
            1 => 'sdp',
        ],
        'type' => 'application/vnd.stardivision.impress',
        'document' => 'StarImpress presentation',
    ],
    855 => [
        'extension' => [
            0 => 'smd',
        ],
        'type' => 'application/vnd.stardivision.mail',
        'document' => 'StarMail email',
    ],
    856 => [
        'extension' => [
            0 => 'smf',
        ],
        'type' => 'application/vnd.stardivision.math',
        'document' => 'StarMath formula',
    ],
    857 => [
        'extension' => [
            0 => 'sdw',
            1 => 'vor',
            2 => 'sgl',
        ],
        'type' => 'application/vnd.stardivision.writer',
        'document' => 'StarWriter document',
        'alias' => 'application/vnd.stardivision.writer-global',
    ],
    858 => [
        'extension' => [
            0 => 'sxc',
        ],
        'type' => 'application/vnd.sun.xml.calc',
        'document' => 'OpenOffice Calc spreadsheet',
        'sub-class-of' => 'application/zip',
    ],
    859 => [
        'extension' => [
            0 => 'stc',
        ],
        'type' => 'application/vnd.sun.xml.calc.template',
        'document' => 'OpenOffice Calc template',
        'sub-class-of' => 'application/zip',
    ],
    860 => [
        'extension' => [
            0 => 'sxd',
        ],
        'type' => 'application/vnd.sun.xml.draw',
        'document' => 'OpenOffice Draw drawing',
        'sub-class-of' => 'application/zip',
    ],
    861 => [
        'extension' => [
            0 => 'std',
        ],
        'type' => 'application/vnd.sun.xml.draw.template',
        'document' => 'OpenOffice Draw template',
        'sub-class-of' => 'application/zip',
    ],
    862 => [
        'extension' => [
            0 => 'sxi',
        ],
        'type' => 'application/vnd.sun.xml.impress',
        'document' => 'OpenOffice Impress presentation',
        'sub-class-of' => 'application/zip',
    ],
    863 => [
        'extension' => [
            0 => 'sti',
        ],
        'type' => 'application/vnd.sun.xml.impress.template',
        'document' => 'OpenOffice Impress template',
        'sub-class-of' => 'application/zip',
    ],
    864 => [
        'extension' => [
            0 => 'sxm',
        ],
        'type' => 'application/vnd.sun.xml.math',
        'document' => 'OpenOffice Math formula',
        'sub-class-of' => 'application/zip',
    ],
    865 => [
        'extension' => [
            0 => 'sxw',
        ],
        'type' => 'application/vnd.sun.xml.writer',
        'document' => 'OpenOffice Writer document',
        'sub-class-of' => 'application/zip',
    ],
    866 => [
        'extension' => [
            0 => 'sxg',
        ],
        'type' => 'application/vnd.sun.xml.writer.global',
        'document' => 'OpenOffice Writer global document',
        'sub-class-of' => 'application/zip',
    ],
    867 => [
        'extension' => [
            0 => 'stw',
        ],
        'type' => 'application/vnd.sun.xml.writer.template',
        'document' => 'OpenOffice Writer template',
        'sub-class-of' => 'application/zip',
    ],
    868 => [
        'extension' => [
            0 => 'odt',
        ],
        'type' => 'application/vnd.oasis.opendocument.text',
        'document' => 'ODT document',
        'acronym' => 'ODT',
        'expanded-acronym' => 'OpenDocument Text',
        'sub-class-of' => 'application/zip',
    ],
    869 => [
        'extension' => [
            0 => 'fodt',
        ],
        'type' => 'application/vnd.oasis.opendocument.text-flat-xml',
        'document' => 'ODT document (Flat XML)',
        'acronym' => 'FODT',
        'expanded-acronym' => 'OpenDocument Text (Flat XML)',
        'sub-class-of' => 'application/xml',
    ],
    870 => [
        'extension' => [
            0 => 'ott',
        ],
        'type' => 'application/vnd.oasis.opendocument.text-template',
        'document' => 'ODT template',
        'acronym' => 'ODT',
        'expanded-acronym' => 'OpenDocument Text',
        'sub-class-of' => 'application/zip',
    ],
    871 => [
        'extension' => [
            0 => 'oth',
        ],
        'type' => 'application/vnd.oasis.opendocument.text-web',
        'document' => 'OTH template',
        'acronym' => 'OTH',
        'expanded-acronym' => 'OpenDocument HTML',
        'sub-class-of' => 'application/zip',
    ],
    872 => [
        'extension' => [
            0 => 'odm',
        ],
        'type' => 'application/vnd.oasis.opendocument.text-master',
        'document' => 'ODM document',
        'acronym' => 'ODM',
        'expanded-acronym' => 'OpenDocument Master',
        'sub-class-of' => 'application/zip',
    ],
    873 => [
        'extension' => [
            0 => 'odg',
        ],
        'type' => 'application/vnd.oasis.opendocument.graphics',
        'document' => 'ODG drawing',
        'acronym' => 'ODG',
        'expanded-acronym' => 'OpenDocument Drawing',
        'sub-class-of' => 'application/zip',
    ],
    874 => [
        'extension' => [
            0 => 'fodg',
        ],
        'type' => 'application/vnd.oasis.opendocument.graphics-flat-xml',
        'document' => 'ODG drawing (Flat XML)',
        'acronym' => 'FODG',
        'expanded-acronym' => 'OpenDocument Drawing (Flat XML)',
        'sub-class-of' => 'application/xml',
    ],
    875 => [
        'extension' => [
            0 => 'otg',
        ],
        'type' => 'application/vnd.oasis.opendocument.graphics-template',
        'document' => 'ODG template',
        'acronym' => 'ODG',
        'expanded-acronym' => 'OpenDocument Drawing',
        'sub-class-of' => 'application/zip',
    ],
    876 => [
        'extension' => [
            0 => 'odp',
        ],
        'type' => 'application/vnd.oasis.opendocument.presentation',
        'document' => 'ODP presentation',
        'acronym' => 'ODP',
        'expanded-acronym' => 'OpenDocument Presentation',
        'sub-class-of' => 'application/zip',
    ],
    877 => [
        'extension' => [
            0 => 'fodp',
        ],
        'type' => 'application/vnd.oasis.opendocument.presentation-flat-xml',
        'document' => 'ODP presentation (Flat XML)',
        'acronym' => 'FODP',
        'expanded-acronym' => 'OpenDocument Presentation (Flat XML)',
        'sub-class-of' => 'application/xml',
    ],
    878 => [
        'extension' => [
            0 => 'otp',
        ],
        'type' => 'application/vnd.oasis.opendocument.presentation-template',
        'document' => 'ODP template',
        'acronym' => 'ODP',
        'expanded-acronym' => 'OpenDocument Presentation',
        'sub-class-of' => 'application/zip',
    ],
    879 => [
        'extension' => [
            0 => 'ods',
        ],
        'type' => 'application/vnd.oasis.opendocument.spreadsheet',
        'document' => 'ODS spreadsheet',
        'acronym' => 'ODS',
        'expanded-acronym' => 'OpenDocument Spreadsheet',
        'sub-class-of' => 'application/zip',
    ],
    880 => [
        'extension' => [
            0 => 'fods',
        ],
        'type' => 'application/vnd.oasis.opendocument.spreadsheet-flat-xml',
        'document' => 'ODS spreadsheet (Flat XML)',
        'acronym' => 'FODS',
        'expanded-acronym' => 'OpenDocument Spreadsheet (Flat XML)',
        'sub-class-of' => 'application/xml',
    ],
    881 => [
        'extension' => [
            0 => 'ots',
        ],
        'type' => 'application/vnd.oasis.opendocument.spreadsheet-template',
        'document' => 'ODS template',
        'acronym' => 'ODS',
        'expanded-acronym' => 'OpenDocument Spreadsheet',
        'sub-class-of' => 'application/zip',
    ],
    882 => [
        'extension' => [
            0 => 'odc',
        ],
        'type' => 'application/vnd.oasis.opendocument.chart',
        'document' => 'ODC chart',
        'acronym' => 'ODC',
        'expanded-acronym' => 'OpenDocument Chart',
        'sub-class-of' => 'application/zip',
    ],
    883 => [
        'extension' => [
            0 => 'otc',
        ],
        'type' => 'application/vnd.oasis.opendocument.chart-template',
        'document' => 'ODC template',
        'acronym' => 'ODC',
        'expanded-acronym' => 'OpenDocument Chart',
        'sub-class-of' => 'application/zip',
    ],
    884 => [
        'extension' => [
            0 => 'odf',
        ],
        'type' => 'application/vnd.oasis.opendocument.formula',
        'document' => 'ODF formula',
        'acronym' => 'ODF',
        'expanded-acronym' => 'OpenDocument Formula',
        'sub-class-of' => 'application/zip',
    ],
    885 => [
        'extension' => [
            0 => 'otf',
        ],
        'type' => 'application/vnd.oasis.opendocument.formula-template',
        'document' => 'ODF template',
        'acronym' => 'ODF',
        'expanded-acronym' => 'OpenDocument Formula',
        'sub-class-of' => 'application/zip',
    ],
    886 => [
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
    887 => [
        'extension' => [
            0 => 'odi',
        ],
        'type' => 'application/vnd.oasis.opendocument.image',
        'document' => 'ODI image',
        'acronym' => 'ODI',
        'expanded-acronym' => 'OpenDocument Image',
        'sub-class-of' => 'application/zip',
    ],
    888 => [
        'extension' => [
            0 => 'oxt',
        ],
        'type' => 'application/vnd.openofficeorg.extension',
        'document' => 'OpenOffice.org extension',
        'sub-class-of' => 'application/zip',
    ],
    889 => [
        'extension' => [
            0 => 'apk',
        ],
        'type' => 'application/vnd.android.package-archive',
        'document' => 'Android package',
        'sub-class-of' => 'application/x-java-archive',
    ],
    890 => [
        'extension' => [
            0 => 'sis',
        ],
        'type' => 'application/vnd.symbian.install',
        'document' => 'SIS package',
        'acronym' => 'SIS',
        'expanded-acronym' => 'Symbian Installation File',
    ],
    891 => [
        'extension' => [
            0 => 'sisx',
        ],
        'type' => 'x-epoc/x-sisx-app',
        'document' => 'SISX package',
        'acronym' => 'SIS',
        'expanded-acronym' => 'Symbian Installation File',
    ],
    892 => [
        'extension' => [
            0 => 'pcap',
            1 => 'cap',
            2 => 'dmp',
        ],
        'type' => 'application/vnd.tcpdump.pcap',
        'document' => 'network packet capture',
        'alias' => 'application/pcap',
    ],
    893 => [
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
    894 => [
        'extension' => [
            0 => 'yt',
        ],
        'type' => 'application/vnd.youtube.yt',
        'document' => 'YouTube media archive',
        'sub-class-of' => 'application/zip',
    ],
    895 => [
        'extension' => [
            0 => 'por',
        ],
        'type' => 'application/x-spss-por',
        'document' => 'SPSS portable data file',
        'acronym' => 'SPSS',
        'expanded-acronym' => 'Statistical Package for the Social Sciences',
    ],
    896 => [
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
    897 => [
        'extension' => [
            0 => 'xbel',
        ],
        'type' => 'application/x-xbel',
        'document' => 'XBEL bookmarks',
        'acronym' => 'XBEL',
        'expanded-acronym' => 'XML Bookmark Exchange Language',
        'sub-class-of' => 'application/xml',
    ],
    898 => [
        'extension' => [
            0 => '7z',
            1 => '7z.001',
        ],
        'type' => 'application/x-7z-compressed',
        'document' => '7-zip archive',
    ],
    899 => [
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
    900 => [
        'extension' => [
            0 => 'cue',
        ],
        'type' => 'application/x-cue',
        'document' => 'CD image cuesheet',
        'sub-class-of' => 'text/plain',
    ],
    901 => [
        'extension' => [
            0 => 'sam',
        ],
        'type' => 'application/x-amipro',
        'document' => 'Lotus AmiPro document',
    ],
    902 => [
        'extension' => [
            0 => 'pdb',
            1 => 'pdc',
        ],
        'type' => 'application/x-aportisdoc',
        'document' => 'AportisDoc document',
        'sub-class-of' => 'application/vnd.palm',
    ],
    903 => [
        'extension' => [
            0 => 'as',
        ],
        'type' => 'application/x-applix-spreadsheet',
        'document' => 'Applix Spreadsheets spreadsheet',
    ],
    904 => [
        'extension' => [
            0 => 'aw',
        ],
        'type' => 'application/x-applix-word',
        'document' => 'Applix Words document',
    ],
    905 => [
        'extension' => [
            0 => '0x0000081a',
            1 => '0x0000091a',
            2 => '0x0000021a',
            3 => '0x0000031a',
            4 => '0x0000041a',
            5 => '0x0000061a',
        ],
        'type' => 'application/x-arc',
        'document' => 'ARC archive',
    ],
    906 => [
        'extension' => [
            0 => 'a',
            1 => 'ar',
        ],
        'type' => 'application/x-archive',
        'document' => 'AR archive',
    ],
    907 => [
        'extension' => [
            0 => 'arj',
        ],
        'type' => 'application/x-arj',
        'document' => 'ARJ archive',
        'acronym' => 'ARJ',
        'expanded-acronym' => 'Archived by Robert Jung',
    ],
    908 => [
        'extension' => [
            0 => 'asp',
        ],
        'type' => 'application/x-asp',
        'document' => 'ASP page',
        'acronym' => 'ASP',
        'expanded-acronym' => 'Active Server Page',
        'sub-class-of' => 'text/plain',
    ],
    909 => [
        'extension' => [
            0 => 'awk',
        ],
        'type' => 'application/x-awk',
        'document' => 'AWK script',
        'sub-class-of' => 'text/plain',
    ],
    910 => [
        'extension' => [
            0 => 'bcpio',
        ],
        'type' => 'application/x-bcpio',
        'document' => 'BCPIO document',
        'acronym' => 'BCPIO',
        'expanded-acronym' => 'Binary CPIO',
    ],
    911 => [
        'extension' => [
            0 => 'torrent',
        ],
        'type' => 'application/x-bittorrent',
        'document' => 'BitTorrent seed file',
    ],
    912 => [
        'extension' => [
            0 => 'blender',
            1 => 'blend',
            2 => 'BLEND',
        ],
        'type' => 'application/x-blender',
        'document' => 'Blender scene',
    ],
    913 => [
        'extension' => [
            0 => 'dvi.bz2',
        ],
        'type' => 'application/x-bzdvi',
        'document' => 'TeX DVI document (bzip-compressed)',
        'sub-class-of' => 'application/x-bzip',
    ],
    914 => [
        'extension' => [
            0 => 'bz2',
            1 => 'bz',
        ],
        'type' => 'application/x-bzip',
        'document' => 'Bzip archive',
        'alias' => 'application/bzip2',
    ],
    915 => [
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
    916 => [
        'extension' => [
            0 => 'pdf.bz2',
        ],
        'type' => 'application/x-bzpdf',
        'document' => 'PDF document (bzip-compressed)',
        'sub-class-of' => 'application/x-bzip',
    ],
    917 => [
        'extension' => [
            0 => 'ps.bz2',
        ],
        'type' => 'application/x-bzpostscript',
        'document' => 'PostScript document (bzip-compressed)',
        'sub-class-of' => 'application/x-bzip',
    ],
    918 => [
        'extension' => [
            0 => 'cbr',
        ],
        'type' => 'application/vnd.comicbook-rar',
        'document' => 'comic book archive',
        'sub-class-of' => 'application/vnd.rar',
        'alias' => 'application/x-cbr',
    ],
    919 => [
        'extension' => [
            0 => 'cb7',
        ],
        'type' => 'application/x-cb7',
        'document' => 'comic book archive',
        'sub-class-of' => 'application/x-7z-compressed',
    ],
    920 => [
        'extension' => [
            0 => 'cbt',
        ],
        'type' => 'application/x-cbt',
        'document' => 'comic book archive',
        'sub-class-of' => 'application/x-tar',
    ],
    921 => [
        'extension' => [
            0 => 'cbz',
        ],
        'type' => 'application/vnd.comicbook+zip',
        'document' => 'comic book archive',
        'sub-class-of' => 'application/zip',
        'alias' => 'application/x-cbz',
    ],
    922 => [
        'extension' => [
            0 => 'lrz',
        ],
        'type' => 'application/x-lrzip',
        'document' => 'Lrzip archive',
    ],
    923 => [
        'extension' => [
            0 => 'tar.lrz',
            1 => 'tlrz',
        ],
        'type' => 'application/x-lrzip-compressed-tar',
        'document' => 'Tar archive (lrzip-compressed)',
        'sub-class-of' => 'application/x-lrzip',
    ],
    924 => [
        'extension' => [
            0 => 'dmg',
        ],
        'type' => 'application/x-apple-diskimage',
        'document' => 'Apple disk image',
    ],
    925 => [
        'extension' => [
            0 => 'raw-disk-image',
            1 => 'img',
        ],
        'type' => 'application/x-raw-disk-image',
        'document' => 'Raw disk image',
    ],
    926 => [
        'extension' => [
            0 => 'fd',
            1 => 'qd',
        ],
        'type' => 'application/x-raw-floppy-disk-image',
        'document' => 'Floppy disk image',
        'sub-class-of' => 'application/x-raw-disk-image',
        'alias' => 'application/x-fd-file',
    ],
    927 => [
        'extension' => [
            0 => 'raw-disk-image.xz',
            1 => 'img.xz',
        ],
        'type' => 'application/x-raw-disk-image-xz-compressed',
        'document' => 'Raw disk image (XZ-compressed)',
        'sub-class-of' => 'application/x-xz',
    ],
    928 => [
        'extension' => [
            0 => 'iso',
            1 => 'iso9660',
        ],
        'type' => 'application/x-cd-image',
        'document' => 'raw CD image',
        'sub-class-of' => 'application/x-raw-disk-image',
        'alias' => 'application/x-iso9660-image',
    ],
    929 => [
        'extension' => [
            0 => 'cso',
        ],
        'type' => 'application/x-compressed-iso',
        'document' => 'Compressed CD image',
    ],
    930 => [
        'extension' => [
            0 => 'appimage',
        ],
        'type' => 'application/x-iso9660-appimage',
        'document' => 'AppImage application bundle',
        'sub-class-of' => 'application/x-cd-image',
    ],
    931 => [
        'extension' => [
            0 => 'toc',
        ],
        'type' => 'application/x-cdrdao-toc',
        'document' => 'CD Table Of Contents',
        'sub-class-of' => 'text/plain',
    ],
    932 => [
        'extension' => [
            0 => 'gdi',
        ],
        'type' => 'application/x-gd-rom-cue',
        'document' => 'GD-ROM image cuesheet',
        'sub-class-of' => 'text/plain',
    ],
    933 => [
        'extension' => [
            0 => 'cdi',
        ],
        'type' => 'application/x-discjuggler-cd-image',
        'document' => 'Padus DiscJuggler CD image',
    ],
    934 => [
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
    935 => [
        'extension' => [
            0 => 'chm',
        ],
        'type' => 'application/vnd.ms-htmlhelp',
        'document' => 'CHM document',
        'acronym' => 'CHM',
        'expanded-acronym' => 'Compiled Help Modules',
        'alias' => 'application/x-chm',
    ],
    936 => [
        'extension' => [
        ],
        'type' => 'application/x-class-file',
        'document' => 'Java byte code',
    ],
    937 => [
        'extension' => [
            0 => 'Z',
        ],
        'type' => 'application/x-compress',
        'document' => 'UNIX-compressed file',
    ],
    938 => [
        'extension' => [
            0 => 'tar.gz',
            1 => 'tgz',
        ],
        'type' => 'application/x-compressed-tar',
        'document' => 'Tar archive (gzip-compressed)',
        'sub-class-of' => 'application/gzip',
    ],
    939 => [
        'extension' => [
            0 => 'core',
        ],
        'type' => 'application/x-core',
        'document' => 'program crash data',
    ],
    940 => [
        'extension' => [
            0 => 'cpio',
        ],
        'type' => 'application/x-cpio',
        'document' => 'CPIO archive',
    ],
    941 => [
        'extension' => [
            0 => 'cpio.gz',
        ],
        'type' => 'application/x-cpio-compressed',
        'document' => 'CPIO archive (gzip-compressed)',
        'sub-class-of' => 'application/gzip',
    ],
    942 => [
        'extension' => [
            0 => 'csh',
        ],
        'type' => 'application/x-csh',
        'document' => 'C shell script',
        'sub-class-of' => 'text/plain',
    ],
    943 => [
        'extension' => [
            0 => 'dbf',
        ],
        'type' => 'application/x-dbf',
        'document' => 'Xbase document',
        'alias' => 'application/dbase',
    ],
    944 => [
        'extension' => [
            0 => 'es',
        ],
        'type' => 'application/ecmascript',
        'document' => 'ECMAScript program',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/ecmascript',
    ],
    945 => [
        'extension' => [
            0 => 'chd',
        ],
        'type' => 'application/x-mame-chd',
        'document' => 'MAME compressed hard disk image',
    ],
    946 => [
        'extension' => [
            0 => 'iso',
        ],
        'type' => 'application/x-sega-cd-rom',
        'document' => 'Sega CD disc image',
    ],
    947 => [
        'extension' => [
            0 => 'iso',
        ],
        'type' => 'application/x-sega-pico-rom',
        'document' => 'Sega Pico ROM',
    ],
    948 => [
        'extension' => [
            0 => 'iso',
        ],
        'type' => 'application/x-saturn-rom',
        'document' => 'Sega Saturn disc image',
    ],
    949 => [
        'extension' => [
            0 => 'iso',
        ],
        'type' => 'application/x-dreamcast-rom',
        'document' => 'Dreamcast disc image',
    ],
    950 => [
        'extension' => [
            0 => 'nds',
        ],
        'type' => 'application/x-nintendo-ds-rom',
        'document' => 'Nintendo DS ROM',
    ],
    951 => [
        'extension' => [
            0 => '3ds',
            1 => 'cci',
        ],
        'type' => 'application/x-nintendo-3ds-rom',
        'document' => 'Nintendo 3DS ROM',
    ],
    952 => [
        'extension' => [
            0 => '3dsx',
        ],
        'type' => 'application/x-nintendo-3ds-executable',
        'document' => 'Nintendo 3DS Executable',
    ],
    953 => [
        'extension' => [
            0 => 'pce',
        ],
        'type' => 'application/x-pc-engine-rom',
        'document' => 'PC Engine ROM',
    ],
    954 => [
        'extension' => [
            0 => 'iso',
        ],
        'type' => 'application/x-wii-rom',
        'document' => 'Wii disc image',
        'alias' => 'application/x-wia',
    ],
    955 => [
        'extension' => [
            0 => 'wad',
        ],
        'type' => 'application/x-wii-wad',
        'document' => 'WiiWare bundle',
    ],
    956 => [
        'extension' => [
            0 => 'iso',
        ],
        'type' => 'application/x-gamecube-rom',
        'document' => 'GameCube disc image',
        'alias' => 'application/x-gamecube-iso-image',
    ],
    957 => [
        'extension' => [
            0 => 'm7',
        ],
        'type' => 'application/x-thomson-cartridge-memo7',
        'document' => 'Thomson Mémo7 cartridge',
    ],
    958 => [
        'extension' => [
            0 => 'k7',
        ],
        'type' => 'application/x-thomson-cassette',
        'document' => 'Thomson cassette',
    ],
    959 => [
        'extension' => [
            0 => 'hfe',
        ],
        'type' => 'application/x-hfe-floppy-image',
        'document' => 'HFE floppy disk image',
        'acronym' => 'HFE',
        'expanded-acronym' => 'HxC Floppy Emulator',
        'alias' => 'application/x-hfe-file',
    ],
    960 => [
        'extension' => [
            0 => 'sap',
        ],
        'type' => 'application/x-thomson-sap-image',
        'document' => 'SAP Thomson floppy disk image',
        'acronym' => 'SAP',
        'expanded-acronym' => 'Système d\'Archivage Pukall',
        'alias' => 'application/x-sap-file',
    ],
    961 => [
        'extension' => [
            0 => 'deb',
            1 => 'udeb',
        ],
        'type' => 'application/vnd.debian.binary-package',
        'document' => 'Debian package',
        'alias' => 'application/x-debian-package',
    ],
    962 => [
        'extension' => [
            0 => 'ui',
        ],
        'type' => 'application/x-designer',
        'document' => 'Qt Designer interface document',
        'sub-class-of' => 'application/xml',
    ],
    963 => [
        'extension' => [
            0 => 'ksy',
        ],
        'type' => 'text/x-kaitai-struct',
        'document' => 'Kaitai Struct definition file',
        'sub-class-of' => 'application/x-yaml',
    ],
    964 => [
        'extension' => [
            0 => 'qml',
            1 => 'qmltypes',
            2 => 'qmlproject',
        ],
        'type' => 'text/x-qml',
        'document' => 'Qt Markup Language file',
        'sub-class-of' => 'text/plain',
    ],
    965 => [
        'extension' => [
            0 => 'desktop',
            1 => 'kdelnk',
        ],
        'type' => 'application/x-desktop',
        'document' => 'desktop entry',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/x-gnome-app-info',
    ],
    966 => [
        'extension' => [
            0 => 'fb2',
        ],
        'type' => 'application/x-fictionbook+xml',
        'document' => 'FictionBook document',
        'sub-class-of' => 'application/xml',
        'alias' => 'application/x-fictionbook',
    ],
    967 => [
        'extension' => [
            0 => 'fb2.zip',
        ],
        'type' => 'application/x-zip-compressed-fb2',
        'document' => 'Compressed FictionBook document',
        'sub-class-of' => 'application/zip',
    ],
    968 => [
        'extension' => [
            0 => 'dia',
        ],
        'type' => 'application/x-dia-diagram',
        'document' => 'Dia diagram',
        'sub-class-of' => 'application/xml',
    ],
    969 => [
        'extension' => [
            0 => 'shape',
        ],
        'type' => 'application/x-dia-shape',
        'document' => 'Dia shape',
        'sub-class-of' => 'application/xml',
    ],
    970 => [
        'extension' => [
            0 => 'dvi',
        ],
        'type' => 'application/x-dvi',
        'document' => 'TeX DVI document',
        'acronym' => 'DVI',
        'expanded-acronym' => 'Device independent file format',
    ],
    971 => [
        'extension' => [
            0 => 'etheme',
        ],
        'type' => 'application/x-e-theme',
        'document' => 'Enlightenment theme',
    ],
    972 => [
        'extension' => [
            0 => 'egon',
        ],
        'type' => 'application/x-egon',
        'document' => 'Egon Animator animation',
    ],
    973 => [
        'extension' => [
            0 => '\\177ELF',
            1 => '1',
            2 => '\\177ELF',
            3 => '2',
            4 => 'MZ',
            5 => '0x521c',
            6 => '0420',
            7 => '0421',
            8 => '0603',
        ],
        'type' => 'application/x-executable',
        'document' => 'executable',
    ],
    974 => [
        'extension' => [
            0 => 'fl',
        ],
        'type' => 'application/x-fluid',
        'document' => 'FLTK Fluid file',
        'acronym' => 'FLTK',
        'expanded-acronym' => 'Fast Light Toolkit',
        'sub-class-of' => 'text/plain',
    ],
    975 => [
        'extension' => [
            0 => 'woff',
        ],
        'type' => 'font/woff',
        'document' => 'WOFF font',
        'acronym' => 'WOFF',
        'expanded-acronym' => 'Web Open Font Format',
        'alias' => 'application/font-woff',
    ],
    976 => [
        'extension' => [
            0 => 'woff2',
        ],
        'type' => 'font/woff2',
        'document' => 'WOFF2 font',
        'acronym' => 'WOFF2',
        'expanded-acronym' => 'Web Open Font Format 2.0',
    ],
    977 => [
        'extension' => [
            0 => 'pfa',
            1 => 'pfb',
            2 => 'gsf',
        ],
        'type' => 'application/x-font-type1',
        'document' => 'PostScript type-1 font',
        'sub-class-of' => 'application/postscript',
    ],
    978 => [
        'extension' => [
            0 => 'afm',
        ],
        'type' => 'application/x-font-afm',
        'document' => 'Adobe font metrics',
    ],
    979 => [
        'extension' => [
            0 => 'bdf',
        ],
        'type' => 'application/x-font-bdf',
        'document' => 'BDF font',
    ],
    980 => [
        'extension' => [
            0 => '\\xff\\x46\\x4f\\x4e',
            1 => '\\x00\\x45\\x47\\x41',
            2 => '\\x00\\x56\\x49\\x44',
        ],
        'type' => 'application/x-font-dos',
        'document' => 'DOS font',
    ],
    981 => [
        'extension' => [
            0 => '<MakerScreenFont',
        ],
        'type' => 'application/x-font-framemaker',
        'document' => 'Adobe FrameMaker font',
    ],
    982 => [
        'extension' => [
            0 => '\\x14\\x02\\x59\\x19',
        ],
        'type' => 'application/x-font-libgrx',
        'document' => 'LIBGRX font',
    ],
    983 => [
        'extension' => [
            0 => 'psf',
        ],
        'type' => 'application/x-font-linux-psf',
        'document' => 'Linux PSF console font',
    ],
    984 => [
        'extension' => [
            0 => 'psf.gz',
        ],
        'type' => 'application/x-gz-font-linux-psf',
        'document' => 'Linux PSF console font (gzip-compressed)',
        'sub-class-of' => 'application/gzip',
    ],
    985 => [
        'extension' => [
            0 => 'pcf',
            1 => 'pcf.Z',
            2 => 'pcf.gz',
        ],
        'type' => 'application/x-font-pcf',
        'document' => 'PCF font',
    ],
    986 => [
        'extension' => [
            0 => 'otf',
        ],
        'type' => 'font/otf',
        'document' => 'OpenType font',
        'sub-class-of' => 'font/ttf',
        'alias' => 'application/x-font-otf',
    ],
    987 => [
        'extension' => [
            0 => 'spd',
        ],
        'type' => 'application/x-font-speedo',
        'document' => 'Speedo font',
    ],
    988 => [
        'extension' => [
            0 => 'StartFont',
            1 => '\\x13\\x7A\\x29',
            2 => '\\x13\\x7A\\x2B',
        ],
        'type' => 'application/x-font-sunos-news',
        'document' => 'SunOS News font',
    ],
    989 => [
        'extension' => [
            0 => '\\367\\203',
            1 => '\\367\\131',
            2 => '\\367\\312',
        ],
        'type' => 'application/x-font-tex',
        'document' => 'TeX font',
    ],
    990 => [
        'extension' => [
            0 => '\\000\\021',
            1 => '\\000\\022',
        ],
        'type' => 'application/x-font-tex-tfm',
        'document' => 'TeX font metrics',
    ],
    991 => [
        'extension' => [
            0 => 'ttf',
        ],
        'type' => 'font/ttf',
        'document' => 'TrueType font',
        'alias' => 'application/x-font-ttf',
    ],
    992 => [
        'extension' => [
            0 => 'ttc',
        ],
        'type' => 'font/collection',
        'document' => 'Font collection',
    ],
    993 => [
        'extension' => [
            0 => 'ttx',
        ],
        'type' => 'application/x-font-ttx',
        'document' => 'TrueType XML font',
        'sub-class-of' => 'application/xml',
    ],
    994 => [
        'extension' => [
            0 => 'FONT',
        ],
        'type' => 'application/x-font-vfont',
        'document' => 'V font',
    ],
    995 => [
        'extension' => [
            0 => 'fm',
        ],
        'type' => 'application/vnd.framemaker',
        'document' => 'Adobe FrameMaker document',
        'alias' => 'application/x-frame',
    ],
    996 => [
        'extension' => [
            0 => 'gb',
            1 => 'sgb',
        ],
        'type' => 'application/x-gameboy-rom',
        'document' => 'Game Boy ROM',
    ],
    997 => [
        'extension' => [
            0 => 'gbc',
            1 => 'cgb',
        ],
        'type' => 'application/x-gameboy-color-rom',
        'document' => 'Game Boy Color ROM',
    ],
    998 => [
        'extension' => [
            0 => 'gba',
            1 => 'agb',
        ],
        'type' => 'application/x-gba-rom',
        'document' => 'Game Boy Advance ROM',
    ],
    999 => [
        'extension' => [
            0 => 'vb',
        ],
        'type' => 'application/x-virtual-boy-rom',
        'document' => 'Virtual Boy ROM',
    ],
    1000 => [
        'extension' => [
            0 => '0x13579ace',
            1 => '0x13579ace',
            2 => 'GDBM',
        ],
        'type' => 'application/x-gdbm',
        'document' => 'GDBM database',
        'acronym' => 'GDBM',
        'expanded-acronym' => 'GNU Database Manager',
    ],
    1001 => [
        'extension' => [
            0 => 'gen',
            1 => 'smd',
            2 => 'sgd',
        ],
        'type' => 'application/x-genesis-rom',
        'document' => 'Genesis ROM',
    ],
    1002 => [
        'extension' => [
            0 => '32x',
            1 => 'mdx',
        ],
        'type' => 'application/x-genesis-32x-rom',
        'document' => 'Genesis 32X ROM',
    ],
    1003 => [
        'extension' => [
            0 => 'gmo',
            1 => 'mo',
        ],
        'type' => 'application/x-gettext-translation',
        'document' => 'translated messages (machine-readable)',
    ],
    1004 => [
        'extension' => [
            0 => 'ui',
        ],
        'type' => 'application/x-gtk-builder',
        'document' => 'GTK+ Builder interface document',
        'sub-class-of' => 'application/xml',
    ],
    1005 => [
        'extension' => [
            0 => 'glade',
        ],
        'type' => 'application/x-glade',
        'document' => 'Glade project',
        'sub-class-of' => 'application/xml',
    ],
    1006 => [
        'extension' => [
            0 => 'gnucash',
            1 => 'gnc',
            2 => 'xac',
        ],
        'type' => 'application/x-gnucash',
        'document' => 'GnuCash financial data',
    ],
    1007 => [
        'extension' => [
            0 => 'gnumeric',
        ],
        'type' => 'application/x-gnumeric',
        'document' => 'Gnumeric spreadsheet',
    ],
    1008 => [
        'extension' => [
            0 => 'gp',
            1 => 'gplt',
            2 => 'gnuplot',
        ],
        'type' => 'application/x-gnuplot',
        'document' => 'Gnuplot document',
        'sub-class-of' => 'text/plain',
    ],
    1009 => [
        'extension' => [
            0 => 'gra',
        ],
        'type' => 'application/x-graphite',
        'document' => 'Graphite scientific graph',
    ],
    1010 => [
        'extension' => [
            0 => 'gtktalog ',
        ],
        'type' => 'application/x-gtktalog',
        'document' => 'GTKtalog catalog',
    ],
    1011 => [
        'extension' => [
            0 => 'dvi.gz',
        ],
        'type' => 'application/x-gzdvi',
        'document' => 'TeX DVI document (gzip-compressed)',
        'sub-class-of' => 'application/gzip',
    ],
    1012 => [
        'extension' => [
            0 => 'gz',
        ],
        'type' => 'application/gzip',
        'document' => 'Gzip archive',
        'alias' => 'application/x-gzip',
    ],
    1013 => [
        'extension' => [
            0 => 'pdf.gz',
        ],
        'type' => 'application/x-gzpdf',
        'document' => 'PDF document (gzip-compressed)',
        'sub-class-of' => 'application/gzip',
    ],
    1014 => [
        'extension' => [
            0 => 'ps.gz',
        ],
        'type' => 'application/x-gzpostscript',
        'document' => 'PostScript document (gzip-compressed)',
        'sub-class-of' => 'application/gzip',
    ],
    1015 => [
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
    1016 => [
        'extension' => [
            0 => 'FORM',
        ],
        'type' => 'application/x-iff',
        'document' => 'IFF file',
        'acronym' => 'IFF',
        'expanded-acronym' => 'Interchange File Format',
    ],
    1017 => [
        'extension' => [
            0 => 'S T O P',
        ],
        'type' => 'application/x-ipod-firmware',
        'document' => 'iPod firmware',
    ],
    1018 => [
        'extension' => [
            0 => 'jar',
        ],
        'type' => 'application/x-java-archive',
        'document' => 'Java archive',
        'sub-class-of' => 'application/zip',
        'alias' => 'application/java-archive',
    ],
    1019 => [
        'extension' => [
            0 => 'class',
        ],
        'type' => 'application/x-java',
        'document' => 'Java class',
        'alias' => 'application/x-java-vm',
    ],
    1020 => [
        'extension' => [
            0 => 'groovy',
            1 => 'gvy',
            2 => 'gy',
            3 => 'gsh',
        ],
        'type' => 'text/x-groovy',
        'document' => 'Groovy source code',
        'sub-class-of' => 'text/x-csrc',
    ],
    1021 => [
        'extension' => [
            0 => 'gradle',
        ],
        'type' => 'text/x-gradle',
        'document' => 'Gradle scripts',
        'sub-class-of' => 'text/x-groovy',
    ],
    1022 => [
        'extension' => [
            0 => 'jnlp',
        ],
        'type' => 'application/x-java-jnlp-file',
        'document' => 'JNLP file',
        'acronym' => 'JNLP',
        'expanded-acronym' => 'Java Network Launching Protocol',
        'sub-class-of' => 'application/xml',
    ],
    1023 => [
        'extension' => [
            0 => 'jks',
            1 => 'ks',
            2 => 'cacerts',
        ],
        'type' => 'application/x-java-keystore',
        'document' => 'Java keystore',
    ],
    1024 => [
        'extension' => [
            0 => 'jceks',
        ],
        'type' => 'application/x-java-jce-keystore',
        'document' => 'Java JCE keystore',
        'acronym' => 'JCE',
        'expanded-acronym' => 'Java Cryptography Extension',
    ],
    1025 => [
        'extension' => [
            0 => 'pack',
        ],
        'type' => 'application/x-java-pack200',
        'document' => 'Pack200 Java archive',
    ],
    1026 => [
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
    1027 => [
        'extension' => [
            0 => 'json',
        ],
        'type' => 'application/json',
        'document' => 'JSON document',
        'acronym' => 'JSON',
        'expanded-acronym' => 'JavaScript Object Notation',
        'sub-class-of' => 'application/javascript',
    ],
    1028 => [
        'extension' => [
            0 => 'jrd',
        ],
        'type' => 'application/jrd+json',
        'document' => 'JRD document',
        'acronym' => 'JRD',
        'expanded-acronym' => 'JSON Resource Descriptor',
        'sub-class-of' => 'application/json',
    ],
    1029 => [
        'extension' => [
            0 => 'json-patch',
        ],
        'type' => 'application/json-patch+json',
        'document' => 'JSON patch',
        'acronym' => 'JSON',
        'expanded-acronym' => 'JavaScript Object Notation',
        'sub-class-of' => 'application/json',
    ],
    1030 => [
        'extension' => [
            0 => 'jsonld',
        ],
        'type' => 'application/ld+json',
        'document' => 'JSON-LD document',
        'acronym' => 'JSON-LD',
        'expanded-acronym' => 'JavaScript Object Notation for Linked Data',
        'sub-class-of' => 'application/json',
    ],
    1031 => [
        'extension' => [
            0 => 'json',
        ],
        'type' => 'application/schema+json',
        'document' => 'JSON schema',
        'sub-class-of' => 'application/json',
    ],
    1032 => [
        'extension' => [
            0 => 'ipynb',
        ],
        'type' => 'application/x-ipynb+json',
        'document' => 'Jupyter notebook document',
        'sub-class-of' => 'application/json',
    ],
    1033 => [
        'extension' => [
            0 => 'coffee',
        ],
        'type' => 'application/vnd.coffeescript',
        'document' => 'CoffeeScript document',
        'sub-class-of' => 'text/plain',
    ],
    1034 => [
        'extension' => [
            0 => 'jpr',
            1 => 'jpx',
        ],
        'type' => 'application/x-jbuilder-project',
        'document' => 'JBuilder project',
    ],
    1035 => [
        'extension' => [
            0 => 'karbon',
        ],
        'type' => 'application/x-karbon',
        'document' => 'Karbon14 drawing',
    ],
    1036 => [
        'extension' => [
            0 => 'chrt',
        ],
        'type' => 'application/x-kchart',
        'document' => 'KChart chart',
    ],
    1037 => [
        'extension' => [
            0 => 'kexic',
        ],
        'type' => 'application/x-kexi-connectiondata',
        'document' => 'Kexi settings',
    ],
    1038 => [
        'extension' => [
            0 => 'kexis',
        ],
        'type' => 'application/x-kexiproject-shortcut',
        'document' => 'Kexi shortcut',
    ],
    1039 => [
        'extension' => [
            0 => 'kexi',
        ],
        'type' => 'application/x-kexiproject-sqlite2',
        'document' => 'Kexi database file',
        'sub-class-of' => 'application/x-sqlite2',
    ],
    1040 => [
        'extension' => [
            0 => 'kexi',
        ],
        'type' => 'application/x-kexiproject-sqlite3',
        'document' => 'Kexi database file',
        'sub-class-of' => 'application/vnd.sqlite3',
        'alias' => 'application/x-kexiproject-sqlite',
    ],
    1041 => [
        'extension' => [
            0 => 'kfo',
        ],
        'type' => 'application/x-kformula',
        'document' => 'KFormula formula',
    ],
    1042 => [
        'extension' => [
            0 => 'kil',
        ],
        'type' => 'application/x-killustrator',
        'document' => 'KIllustrator drawing',
    ],
    1043 => [
        'extension' => [
            0 => 'flw',
        ],
        'type' => 'application/x-kivio',
        'document' => 'Kivio flowchart',
    ],
    1044 => [
        'extension' => [
            0 => 'kon',
        ],
        'type' => 'application/x-kontour',
        'document' => 'Kontour drawing',
    ],
    1045 => [
        'extension' => [
            0 => 'kpm',
        ],
        'type' => 'application/x-kpovmodeler',
        'document' => 'KPovModeler scene',
    ],
    1046 => [
        'extension' => [
            0 => 'kpr',
            1 => 'kpt',
        ],
        'type' => 'application/x-kpresenter',
        'document' => 'KPresenter presentation',
    ],
    1047 => [
        'extension' => [
            0 => 'kra',
            1 => 'krz',
        ],
        'type' => 'application/x-krita',
        'document' => 'Krita document',
    ],
    1048 => [
        'extension' => [
            0 => 'ksp',
        ],
        'type' => 'application/x-kspread',
        'document' => 'KSpread spreadsheet',
    ],
    1049 => [
        'extension' => [
            0 => '0x0d1a2702',
        ],
        'type' => 'application/x-kspread-crypt',
        'document' => 'KSpread spreadsheet (encrypted)',
    ],
    1050 => [
        'extension' => [
            0 => 'KSysV',
            1 => '1',
        ],
        'type' => 'application/x-ksysv-package',
        'document' => 'KSysV init package',
    ],
    1051 => [
        'extension' => [
            0 => 'kud',
        ],
        'type' => 'application/x-kugar',
        'document' => 'Kugar document',
    ],
    1052 => [
        'extension' => [
            0 => 'kwd',
            1 => 'kwt',
        ],
        'type' => 'application/x-kword',
        'document' => 'KWord document',
    ],
    1053 => [
        'extension' => [
            0 => '0x0d1a2701',
        ],
        'type' => 'application/x-kword-crypt',
        'document' => 'KWord document (encrypted)',
    ],
    1054 => [
        'extension' => [
            0 => 'lha',
            1 => 'lzh',
        ],
        'type' => 'application/x-lha',
        'document' => 'LHA archive',
        'alias' => 'application/x-lzh-compressed',
    ],
    1055 => [
        'extension' => [
            0 => 'lhz',
        ],
        'type' => 'application/x-lhz',
        'document' => 'LHZ archive',
    ],
    1056 => [
        'extension' => [
            0 => 'ts',
        ],
        'type' => 'text/vnd.trolltech.linguist',
        'document' => 'message catalog',
        'sub-class-of' => 'application/xml',
        'alias' => 'text/vnd.qt.linguist',
    ],
    1057 => [
        'extension' => [
            0 => 'lyx',
        ],
        'type' => 'application/x-lyx',
        'document' => 'LyX document',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-lyx',
    ],
    1058 => [
        'extension' => [
            0 => 'lz4',
        ],
        'type' => 'application/x-lz4',
        'document' => 'LZ4 archive',
    ],
    1059 => [
        'extension' => [
            0 => 'tar.lz4',
        ],
        'type' => 'application/x-lz4-compressed-tar',
        'document' => 'Tar archive (LZ4-compressed)',
        'sub-class-of' => 'application/x-lz4',
    ],
    1060 => [
        'extension' => [
            0 => 'lz',
        ],
        'type' => 'application/x-lzip',
        'document' => 'Lzip archive',
    ],
    1061 => [
        'extension' => [
            0 => 'tar.lz',
        ],
        'type' => 'application/x-lzip-compressed-tar',
        'document' => 'Tar archive (lzip-compressed)',
        'sub-class-of' => 'application/x-lzip',
    ],
    1062 => [
        'extension' => [
            0 => 'pdf.lz',
        ],
        'type' => 'application/x-lzpdf',
        'document' => 'PDF document (lzip-compressed)',
        'sub-class-of' => 'application/x-lzip',
    ],
    1063 => [
        'extension' => [
            0 => 'lzma',
        ],
        'type' => 'application/x-lzma',
        'document' => 'LZMA archive',
        'acronym' => 'LZMA',
        'expanded-acronym' => 'Lempel-Ziv-Markov chain-Algorithm',
    ],
    1064 => [
        'extension' => [
            0 => 'tar.lzma',
            1 => 'tlz',
        ],
        'type' => 'application/x-lzma-compressed-tar',
        'document' => 'Tar archive (LZMA-compressed)',
        'sub-class-of' => 'application/x-lzma',
    ],
    1065 => [
        'extension' => [
            0 => 'lzo',
        ],
        'type' => 'application/x-lzop',
        'document' => 'LZO archive',
        'acronym' => 'LZO',
        'expanded-acronym' => 'Lempel-Ziv-Oberhumer',
    ],
    1066 => [
        'extension' => [
            0 => 'qp',
        ],
        'type' => 'application/x-qpress',
        'document' => 'Qpress archive',
    ],
    1067 => [
        'extension' => [
            0 => 'xar',
            1 => 'pkg',
        ],
        'type' => 'application/x-xar',
        'document' => 'XAR archive',
        'acronym' => 'XAR',
        'expanded-acronym' => 'eXtensible ARchive',
    ],
    1068 => [
        'extension' => [
            0 => 'zz',
        ],
        'type' => 'application/zlib',
        'document' => 'Zlib archive',
    ],
    1069 => [
        'extension' => [
            0 => 'mgp',
        ],
        'type' => 'application/x-magicpoint',
        'document' => 'MagicPoint presentation',
        'sub-class-of' => 'text/plain',
    ],
    1070 => [
        'extension' => [
            0 => 'mBIN',
        ],
        'type' => 'application/x-macbinary',
        'document' => 'Macintosh MacBinary file',
    ],
    1071 => [
        'extension' => [
            0 => '0x1a45dfa3',
            1 => '0x4282',
            2 => 'matroska',
        ],
        'type' => 'application/x-matroska',
        'document' => 'Matroska stream',
    ],
    1072 => [
        'extension' => [
            0 => 'mkv',
        ],
        'type' => 'video/x-matroska',
        'document' => 'Matroska video',
        'sub-class-of' => 'application/x-matroska',
    ],
    1073 => [
        'extension' => [
            0 => 'mk3d',
        ],
        'type' => 'video/x-matroska-3d',
        'document' => 'Matroska 3D video',
        'sub-class-of' => 'application/x-matroska',
    ],
    1074 => [
        'extension' => [
            0 => 'mka',
        ],
        'type' => 'audio/x-matroska',
        'document' => 'Matroska audio',
        'sub-class-of' => 'application/x-matroska',
    ],
    1075 => [
        'extension' => [
            0 => 'webm',
        ],
        'type' => 'video/webm',
        'document' => 'WebM video',
    ],
    1076 => [
        'extension' => [
        ],
        'type' => 'audio/webm',
        'document' => 'WebM audio',
        'sub-class-of' => 'video/webm',
    ],
    1077 => [
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
    1078 => [
        'extension' => [
            0 => 'mxf',
        ],
        'type' => 'application/mxf',
        'document' => 'MXF video',
        'acronym' => 'MXF',
        'expanded-acronym' => 'Material Exchange Format',
    ],
    1079 => [
        'extension' => [
            0 => 'ocl',
        ],
        'type' => 'text/x-ocl',
        'document' => 'OCL file',
        'acronym' => 'OCL',
        'expanded-acronym' => 'Object Constraint Language',
        'sub-class-of' => 'text/plain',
    ],
    1080 => [
        'extension' => [
            0 => 'cbl',
            1 => 'cob',
        ],
        'type' => 'text/x-cobol',
        'document' => 'COBOL source code',
        'acronym' => 'COBOL',
        'expanded-acronym' => 'COmmon Business Oriented Language',
        'sub-class-of' => 'text/plain',
    ],
    1081 => [
        'extension' => [
            0 => 'mobi',
            1 => 'prc',
        ],
        'type' => 'application/x-mobipocket-ebook',
        'document' => 'Mobipocket e-book',
        'sub-class-of' => 'application/vnd.palm',
    ],
    1082 => [
        'extension' => [
            0 => 'mif',
        ],
        'type' => 'application/x-mif',
        'document' => 'Adobe FrameMaker MIF document',
    ],
    1083 => [
        'extension' => [
            0 => '<!DOCTYPE NETSCAPE-Bookmark-file-1>',
        ],
        'type' => 'application/x-mozilla-bookmarks',
        'document' => 'Mozilla bookmarks',
        'sub-class-of' => 'text/html',
        'alias' => 'application/x-netscape-bookmarks',
    ],
    1084 => [
        'extension' => [
            0 => 'exe',
        ],
        'type' => 'application/x-ms-dos-executable',
        'document' => 'DOS/Windows executable',
    ],
    1085 => [
        'extension' => [
            0 => 'url',
        ],
        'type' => 'application/x-mswinurl',
        'document' => 'Internet shortcut',
        'sub-class-of' => 'text/plain',
    ],
    1086 => [
        'extension' => [
            0 => 'wri',
        ],
        'type' => 'application/x-mswrite',
        'document' => 'WRI document',
    ],
    1087 => [
        'extension' => [
            0 => 'msx',
        ],
        'type' => 'application/x-msx-rom',
        'document' => 'MSX ROM',
    ],
    1088 => [
        'extension' => [
            0 => 'm4',
        ],
        'type' => 'application/x-m4',
        'document' => 'M4 macro',
        'sub-class-of' => 'text/plain',
    ],
    1089 => [
        'extension' => [
            0 => 'n64',
            1 => 'z64',
            2 => 'v64',
        ],
        'type' => 'application/x-n64-rom',
        'document' => 'Nintendo64 ROM',
    ],
    1090 => [
        'extension' => [
            0 => '<nautilus_object nautilus_link',
        ],
        'type' => 'application/x-nautilus-link',
        'document' => 'Nautilus link',
        'sub-class-of' => 'text/plain',
    ],
    1091 => [
        'extension' => [
            0 => 'ngp',
        ],
        'type' => 'application/x-neo-geo-pocket-rom',
        'document' => 'Neo-Geo Pocket ROM',
    ],
    1092 => [
        'extension' => [
            0 => 'ngc',
        ],
        'type' => 'application/x-neo-geo-pocket-color-rom',
        'document' => 'Neo-Geo Pocket Color ROM',
    ],
    1093 => [
        'extension' => [
            0 => 'nes',
            1 => 'nez',
            2 => 'unf',
            3 => 'unif',
        ],
        'type' => 'application/x-nes-rom',
        'document' => 'NES ROM',
    ],
    1094 => [
        'extension' => [
            0 => 'cdf',
            1 => 'nc',
        ],
        'type' => 'application/x-netcdf',
        'document' => 'Unidata NetCDF document',
        'acronym' => 'NetCDF',
        'expanded-acronym' => 'Network Common Data Form',
    ],
    1095 => [
        'extension' => [
            0 => 'nzb',
        ],
        'type' => 'application/x-nzb',
        'document' => 'NewzBin usenet index',
        'sub-class-of' => 'application/xml',
    ],
    1096 => [
        'extension' => [
            0 => 'o',
            1 => 'mod',
        ],
        'type' => 'application/x-object',
        'document' => 'object code',
    ],
    1097 => [
        'extension' => [
            0 => 'anx',
        ],
        'type' => 'application/annodex',
        'document' => 'Annodex exchange format',
        'alias' => 'application/x-annodex',
    ],
    1098 => [
        'extension' => [
            0 => 'axv',
        ],
        'type' => 'video/annodex',
        'document' => 'Annodex video',
        'sub-class-of' => 'application/annodex',
        'alias' => 'video/x-annodex',
    ],
    1099 => [
        'extension' => [
            0 => 'axa',
        ],
        'type' => 'audio/annodex',
        'document' => 'Annodex audio',
        'sub-class-of' => 'application/annodex',
        'alias' => 'audio/x-annodex',
    ],
    1100 => [
        'extension' => [
            0 => 'ogx',
        ],
        'type' => 'application/ogg',
        'document' => 'Ogg multimedia file',
        'alias' => 'application/x-ogg',
    ],
    1101 => [
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
    1102 => [
        'extension' => [
            0 => 'ogv',
            1 => 'ogg',
        ],
        'type' => 'video/ogg',
        'document' => 'Ogg video',
        'sub-class-of' => 'application/ogg',
        'alias' => 'video/x-ogg',
    ],
    1103 => [
        'extension' => [
            0 => 'oga',
            1 => 'ogg',
        ],
        'type' => 'audio/x-vorbis+ogg',
        'document' => 'Ogg Vorbis audio',
        'sub-class-of' => 'audio/ogg',
        'alias' => 'audio/x-vorbis',
    ],
    1104 => [
        'extension' => [
            0 => 'oga',
            1 => 'ogg',
        ],
        'type' => 'audio/x-flac+ogg',
        'document' => 'Ogg FLAC audio',
        'sub-class-of' => 'audio/ogg',
        'alias' => 'audio/x-oggflac',
    ],
    1105 => [
        'extension' => [
            0 => 'opus',
        ],
        'type' => 'audio/x-opus+ogg',
        'document' => 'Opus audio',
        'sub-class-of' => 'audio/ogg',
    ],
    1106 => [
        'extension' => [
            0 => 'oga',
            1 => 'ogg',
            2 => 'spx',
        ],
        'type' => 'audio/x-speex+ogg',
        'document' => 'Ogg Speex audio',
        'sub-class-of' => 'audio/ogg',
    ],
    1107 => [
        'extension' => [
            0 => 'spx',
        ],
        'type' => 'audio/x-speex',
        'document' => 'Speex audio',
    ],
    1108 => [
        'extension' => [
            0 => 'ogg',
        ],
        'type' => 'video/x-theora+ogg',
        'document' => 'Ogg Theora video',
        'sub-class-of' => 'video/ogg',
        'alias' => 'video/x-theora',
    ],
    1109 => [
        'extension' => [
            0 => 'ogm',
        ],
        'type' => 'video/x-ogm+ogg',
        'document' => 'OGM video',
        'sub-class-of' => 'video/ogg',
        'alias' => 'video/x-ogm',
    ],
    1110 => [
        'extension' => [
            0 => '\\320\\317\\021\\340\\241\\261\\032\\341',
            1 => '0xe011cfd0',
        ],
        'type' => 'application/x-ole-storage',
        'document' => 'OLE2 compound document storage',
    ],
    1111 => [
        'extension' => [
            0 => 'pub',
        ],
        'type' => 'application/vnd.ms-publisher',
        'document' => 'Microsoft Publisher document',
        'sub-class-of' => 'application/x-ole-storage',
    ],
    1112 => [
        'extension' => [
            0 => 'msi',
        ],
        'type' => 'application/x-msi',
        'document' => 'Windows Installer package',
        'sub-class-of' => 'application/x-ole-storage',
    ],
    1113 => [
        'extension' => [
            0 => 'oleo',
        ],
        'type' => 'application/x-oleo',
        'document' => 'GNU Oleo spreadsheet',
    ],
    1114 => [
        'extension' => [
            0 => 'pak',
        ],
        'type' => 'application/x-pak',
        'document' => 'PAK archive',
    ],
    1115 => [
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
    1116 => [
        'extension' => [
            0 => 'PAR2',
            1 => 'par2',
        ],
        'type' => 'application/x-par2',
        'document' => 'Parchive archive',
        'acronym' => 'Parchive',
        'expanded-acronym' => 'Parity Volume Set Archive',
    ],
    1117 => [
        'extension' => [
            0 => 'Joy!',
        ],
        'type' => 'application/x-pef-executable',
        'document' => 'PEF executable',
    ],
    1118 => [
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
    1119 => [
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
    1120 => [
        'extension' => [
            0 => 'p7b',
            1 => 'spc',
        ],
        'type' => 'application/x-pkcs7-certificates',
        'document' => 'PKCS#7 certificate bundle',
        'acronym' => 'PKCS',
        'expanded-acronym' => 'Public-Key Cryptography Standards',
    ],
    1121 => [
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
    1122 => [
        'extension' => [
            0 => 'pln',
        ],
        'type' => 'application/x-planperfect',
        'document' => 'PlanPerfect spreadsheet',
    ],
    1123 => [
        'extension' => [
            0 => 'psw',
        ],
        'type' => 'application/x-pocket-word',
        'document' => 'Pocket Word document',
    ],
    1124 => [
        'extension' => [
            0 => 'gmon.out',
        ],
        'type' => 'application/x-profile',
        'document' => 'profiler results',
        'sub-class-of' => 'text/plain',
    ],
    1125 => [
        'extension' => [
            0 => 'pw',
        ],
        'type' => 'application/x-pw',
        'document' => 'Pathetic Writer document',
    ],
    1126 => [
        'extension' => [
            0 => 'pyc',
            1 => 'pyo',
        ],
        'type' => 'application/x-python-bytecode',
        'document' => 'Python bytecode',
    ],
    1127 => [
        'extension' => [
            0 => 'qti',
            1 => 'qti.gz',
        ],
        'type' => 'application/x-qtiplot',
        'document' => 'QtiPlot document',
        'sub-class-of' => 'text/plain',
    ],
    1128 => [
        'extension' => [
            0 => 'wb1',
            1 => 'wb2',
            2 => 'wb3',
        ],
        'type' => 'application/x-quattropro',
        'document' => 'Quattro Pro spreadsheet',
    ],
    1129 => [
        'extension' => [
            0 => 'qtl',
        ],
        'type' => 'application/x-quicktime-media-link',
        'document' => 'QuickTime playlist',
        'sub-class-of' => 'video/quicktime',
        'alias' => 'application/x-quicktimeplayer',
    ],
    1130 => [
        'extension' => [
            0 => 'qif',
        ],
        'type' => 'application/x-qw',
        'document' => 'Quicken document',
    ],
    1131 => [
        'extension' => [
            0 => 'rar',
        ],
        'type' => 'application/vnd.rar',
        'document' => 'RAR archive',
        'acronym' => 'RAR',
        'expanded-acronym' => 'Roshal ARchive',
        'alias' => 'application/x-rar-compressed',
    ],
    1132 => [
        'extension' => [
            0 => 'dar',
        ],
        'type' => 'application/x-dar',
        'document' => 'DAR archive',
    ],
    1133 => [
        'extension' => [
            0 => 'alz',
        ],
        'type' => 'application/x-alz',
        'document' => 'Alzip archive',
    ],
    1134 => [
        'extension' => [
            0 => 'rej',
        ],
        'type' => 'text/x-reject',
        'document' => 'rejected patch',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/x-reject',
    ],
    1135 => [
        'extension' => [
            0 => 'rpm',
        ],
        'type' => 'application/x-rpm',
        'document' => 'RPM package',
        'alias' => 'application/x-redhat-package-manager',
    ],
    1136 => [
        'extension' => [
            0 => 'src.rpm',
            1 => 'spm',
        ],
        'type' => 'application/x-source-rpm',
        'document' => 'Source RPM package',
        'sub-class-of' => 'application/x-rpm',
    ],
    1137 => [
        'extension' => [
            0 => 'rb',
        ],
        'type' => 'application/x-ruby',
        'document' => 'Ruby script',
        'sub-class-of' => 'text/plain',
    ],
    1138 => [
        'extension' => [
            0 => 'mab',
        ],
        'type' => 'application/x-markaby',
        'document' => 'Markaby script',
        'sub-class-of' => 'application/x-ruby',
    ],
    1139 => [
        'extension' => [
            0 => 'cr',
        ],
        'type' => 'text/x-crystal',
        'document' => 'Crystal source code',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/crystal',
    ],
    1140 => [
        'extension' => [
            0 => 'rs',
        ],
        'type' => 'text/rust',
        'document' => 'Rust source code',
        'sub-class-of' => 'text/plain',
    ],
    1141 => [
        'extension' => [
            0 => 'Spreadsheet',
        ],
        'type' => 'application/x-sc',
        'document' => 'SC/Xspread spreadsheet',
    ],
    1142 => [
        'extension' => [
            0 => 'shar',
        ],
        'type' => 'application/x-shar',
        'document' => 'shell archive',
    ],
    1143 => [
        'extension' => [
            0 => 'la',
        ],
        'type' => 'application/x-shared-library-la',
        'document' => 'libtool shared library',
        'sub-class-of' => 'text/plain',
    ],
    1144 => [
        'extension' => [
            0 => 'so',
        ],
        'type' => 'application/x-sharedlib',
        'document' => 'shared library',
    ],
    1145 => [
        'extension' => [
            0 => 'sh',
        ],
        'type' => 'application/x-shellscript',
        'document' => 'shell script',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-sh',
    ],
    1146 => [
        'extension' => [
            0 => 'swf',
            1 => 'spl',
        ],
        'type' => 'application/vnd.adobe.flash.movie',
        'document' => 'Shockwave Flash file',
        'alias' => 'application/futuresplash',
    ],
    1147 => [
        'extension' => [
            0 => 'shn',
        ],
        'type' => 'application/x-shorten',
        'document' => 'Shorten audio',
        'alias' => 'audio/x-shorten',
    ],
    1148 => [
        'extension' => [
            0 => 'siag',
        ],
        'type' => 'application/x-siag',
        'document' => 'Siag spreadsheet',
    ],
    1149 => [
        'extension' => [
            0 => 'sk',
            1 => 'sk1',
        ],
        'type' => 'image/x-skencil',
        'document' => 'Skencil document',
    ],
    1150 => [
        'extension' => [
        ],
        'type' => 'application/x-slp',
        'document' => 'Stampede package',
    ],
    1151 => [
        'extension' => [
            0 => 'sg',
        ],
        'type' => 'application/x-sg1000-rom',
        'document' => 'SG-1000 ROM',
    ],
    1152 => [
        'extension' => [
            0 => 'sms',
        ],
        'type' => 'application/x-sms-rom',
        'document' => 'Master System ROM',
    ],
    1153 => [
        'extension' => [
            0 => 'gg',
        ],
        'type' => 'application/x-gamegear-rom',
        'document' => 'Game Gear ROM',
    ],
    1154 => [
        'extension' => [
            0 => 'sfc',
            1 => 'smc',
        ],
        'type' => 'application/vnd.nintendo.snes.rom',
        'document' => 'Super NES ROM',
        'alias' => 'application/x-snes-rom',
    ],
    1155 => [
        'extension' => [
            0 => 'sit',
        ],
        'type' => 'application/x-stuffit',
        'document' => 'StuffIt archive',
        'alias' => 'application/x-sit',
    ],
    1156 => [
        'extension' => [
            0 => 'srt',
        ],
        'type' => 'application/x-subrip',
        'document' => 'SubRip subtitles',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/x-srt',
    ],
    1157 => [
        'extension' => [
            0 => 'vtt',
        ],
        'type' => 'text/vtt',
        'document' => 'WebVTT subtitles',
        'acronym' => 'VTT',
        'expanded-acronym' => 'Video Text Tracks',
        'sub-class-of' => 'text/plain',
    ],
    1158 => [
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
    1159 => [
        'extension' => [
            0 => 'sub',
        ],
        'type' => 'text/x-microdvd',
        'document' => 'MicroDVD subtitles',
        'sub-class-of' => 'text/plain',
    ],
    1160 => [
        'extension' => [
            0 => 'mpl',
        ],
        'type' => 'text/x-mpl2',
        'document' => 'MPlayer2 subtitles',
        'sub-class-of' => 'text/plain',
    ],
    1161 => [
        'extension' => [
            0 => 'sub',
        ],
        'type' => 'text/x-mpsub',
        'document' => 'MPSub subtitles',
        'acronym' => 'MPSub',
        'expanded-acronym' => 'MPlayer Subtitle',
        'sub-class-of' => 'text/plain',
    ],
    1162 => [
        'extension' => [
            0 => 'ssa',
            1 => 'ass',
        ],
        'type' => 'text/x-ssa',
        'document' => 'SSA subtitles',
        'acronym' => 'SSA',
        'expanded-acronym' => 'SubStation Alpha',
        'sub-class-of' => 'text/plain',
    ],
    1163 => [
        'extension' => [
            0 => 'sub',
        ],
        'type' => 'text/x-subviewer',
        'document' => 'SubViewer subtitles',
        'sub-class-of' => 'text/plain',
    ],
    1164 => [
        'extension' => [
            0 => 'imy',
            1 => 'ime',
        ],
        'type' => 'text/x-iMelody',
        'document' => 'iMelody ringtone',
        'sub-class-of' => 'text/plain',
        'alias' => 'audio/iMelody',
    ],
    1165 => [
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
    1166 => [
        'extension' => [
            0 => 'mrml',
            1 => 'mrl',
        ],
        'type' => 'text/x-mrml',
        'document' => 'MRML playlist',
        'acronym' => 'MRML',
        'expanded-acronym' => 'Multimedia Retrieval Markup Language',
        'sub-class-of' => 'application/xml',
    ],
    1167 => [
        'extension' => [
            0 => 'xmf',
        ],
        'type' => 'audio/x-xmf',
        'document' => 'XMF audio',
        'acronym' => 'XMF',
        'expanded-acronym' => 'eXtensible Music Format',
        'alias' => 'audio/xmf',
    ],
    1168 => [
        'extension' => [
            0 => 'mxmf',
        ],
        'type' => 'audio/mobile-xmf',
        'document' => 'Mobile XMF audio',
        'acronym' => 'XMF',
        'expanded-acronym' => 'eXtensible Music Format',
        'alias' => 'audio/vnd.nokia.mobile-xmf',
    ],
    1169 => [
        'extension' => [
            0 => 'sv4cpio',
        ],
        'type' => 'application/x-sv4cpio',
        'document' => 'SV4 CPIO archive',
    ],
    1170 => [
        'extension' => [
            0 => 'sv4crc',
        ],
        'type' => 'application/x-sv4crc',
        'document' => 'SV4 CPIO archive (with CRC)',
    ],
    1171 => [
        'extension' => [
            0 => 'tar',
            1 => 'gtar',
            2 => 'gem',
        ],
        'type' => 'application/x-tar',
        'document' => 'Tar archive',
        'alias' => 'application/x-gtar',
    ],
    1172 => [
        'extension' => [
            0 => 'tar.Z',
            1 => 'taz',
        ],
        'type' => 'application/x-tarz',
        'document' => 'Tar archive (compressed)',
        'sub-class-of' => 'application/x-compress',
    ],
    1173 => [
        'extension' => [
            0 => 'gf',
        ],
        'type' => 'application/x-tex-gf',
        'document' => 'generic font file',
    ],
    1174 => [
        'extension' => [
            0 => 'pk',
        ],
        'type' => 'application/x-tex-pk',
        'document' => 'packed font file',
    ],
    1175 => [
        'extension' => [
            0 => 'obj',
        ],
        'type' => 'application/x-tgif',
        'document' => 'TGIF document',
    ],
    1176 => [
        'extension' => [
            0 => 'theme',
        ],
        'type' => 'application/x-theme',
        'document' => 'theme',
        'sub-class-of' => 'application/x-desktop',
    ],
    1177 => [
        'extension' => [
        ],
        'type' => 'application/x-toutdoux',
        'document' => 'ToutDoux document',
    ],
    1178 => [
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
    1179 => [
        'extension' => [
            0 => 'tr',
            1 => 'roff',
            2 => 't',
        ],
        'type' => 'text/troff',
        'document' => 'Troff document',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-troff',
    ],
    1180 => [
        'extension' => [
            0 => 'man',
            1 => '[1-9]',
        ],
        'type' => 'application/x-troff-man',
        'document' => 'Manpage manual document',
        'sub-class-of' => 'text/plain',
    ],
    1181 => [
        'extension' => [
        ],
        'type' => 'application/x-troff-man-compressed',
        'document' => 'manual page (compressed)',
    ],
    1182 => [
        'extension' => [
            0 => 'tar.lzo',
            1 => 'tzo',
        ],
        'type' => 'application/x-tzo',
        'document' => 'Tar archive (LZO-compressed)',
        'sub-class-of' => 'application/x-lzop',
    ],
    1183 => [
        'extension' => [
            0 => 'xz',
        ],
        'type' => 'application/x-xz',
        'document' => 'XZ archive',
    ],
    1184 => [
        'extension' => [
            0 => 'tar.xz',
            1 => 'txz',
        ],
        'type' => 'application/x-xz-compressed-tar',
        'document' => 'Tar archive (XZ-compressed)',
        'sub-class-of' => 'application/x-xz',
    ],
    1185 => [
        'extension' => [
            0 => 'zst',
        ],
        'type' => 'application/zstd',
        'document' => 'Zstandard archive',
    ],
    1186 => [
        'extension' => [
            0 => 'tar.zst',
            1 => 'tzst',
        ],
        'type' => 'application/x-zstd-compressed-tar',
        'document' => 'Tar archive (Zstandard-compressed)',
        'sub-class-of' => 'application/zstd',
    ],
    1187 => [
        'extension' => [
            0 => 'pdf.xz',
        ],
        'type' => 'application/x-xzpdf',
        'document' => 'PDF document (XZ-compressed)',
        'sub-class-of' => 'application/x-xz',
    ],
    1188 => [
        'extension' => [
            0 => 'ustar',
        ],
        'type' => 'application/x-ustar',
        'document' => 'Ustar archive',
    ],
    1189 => [
        'extension' => [
            0 => 'src',
        ],
        'type' => 'application/x-wais-source',
        'document' => 'WAIS source code',
        'sub-class-of' => 'text/plain',
    ],
    1190 => [
        'extension' => [
            0 => 'wpg',
        ],
        'type' => 'application/x-wpg',
        'document' => 'WordPerfect/Drawperfect image',
    ],
    1191 => [
        'extension' => [
            0 => 'ws',
        ],
        'type' => 'application/x-wonderswan-rom',
        'document' => 'Bandai WonderSwan ROM',
    ],
    1192 => [
        'extension' => [
            0 => 'wsc',
        ],
        'type' => 'application/x-wonderswan-color-rom',
        'document' => 'Bandai WonderSwan Color ROM',
    ],
    1193 => [
        'extension' => [
            0 => 'der',
            1 => 'crt',
            2 => 'cert',
            3 => 'pem',
        ],
        'type' => 'application/x-x509-ca-cert',
        'document' => 'DER/PEM/Netscape-encoded X.509 certificate',
    ],
    1194 => [
        'extension' => [
        ],
        'type' => 'application/x-zerosize',
        'document' => 'empty document',
    ],
    1195 => [
        'extension' => [
            0 => 'zoo',
        ],
        'type' => 'application/x-zoo',
        'document' => 'Zoo archive',
    ],
    1196 => [
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
    1197 => [
        'extension' => [
            0 => 'zip',
        ],
        'type' => 'application/zip',
        'document' => 'Zip archive',
        'alias' => 'application/x-zip',
    ],
    1198 => [
        'extension' => [
            0 => 'wim',
            1 => 'swm',
        ],
        'type' => 'application/x-ms-wim',
        'document' => 'WIM disk image',
        'acronym' => 'WIM',
        'expanded-acronym' => 'Windows Imaging Format',
    ],
    1199 => [
        'extension' => [
            0 => 'ac3',
        ],
        'type' => 'audio/ac3',
        'document' => 'Dolby Digital audio',
    ],
    1200 => [
        'extension' => [
            0 => 'dts',
        ],
        'type' => 'audio/vnd.dts',
        'document' => 'DTS audio',
        'alias' => 'audio/x-dts',
    ],
    1201 => [
        'extension' => [
            0 => 'dtshd',
        ],
        'type' => 'audio/vnd.dts.hd',
        'document' => 'DTSHD audio',
        'sub-class-of' => 'audio/vnd.dts',
        'alias' => 'audio/x-dtshd',
    ],
    1202 => [
        'extension' => [
            0 => 'amr',
        ],
        'type' => 'audio/AMR',
        'document' => 'AMR audio',
        'acronym' => 'AMR',
        'expanded-acronym' => 'Adaptive Multi-Rate',
        'alias' => 'audio/amr-encrypted',
    ],
    1203 => [
        'extension' => [
            0 => 'awb',
        ],
        'type' => 'audio/AMR-WB',
        'document' => 'AMR-WB audio',
        'acronym' => 'AMR-WB',
        'expanded-acronym' => 'Adaptive Multi-Rate Wideband',
        'alias' => 'audio/amr-wb-encrypted',
    ],
    1204 => [
        'extension' => [
            0 => 'au',
            1 => 'snd',
        ],
        'type' => 'audio/basic',
        'document' => 'ULAW (Sun) audio',
    ],
    1205 => [
        'extension' => [
            0 => 'sid',
            1 => 'psid',
        ],
        'type' => 'audio/prs.sid',
        'document' => 'Commodore 64 audio',
    ],
    1206 => [
        'extension' => [
            0 => '.snd',
            1 => '23',
            2 => '0x0064732E',
            3 => '1',
            4 => '2',
            5 => '3',
            6 => '4',
            7 => '5',
            8 => '6',
            9 => '7',
            10 => '23',
        ],
        'type' => 'audio/x-adpcm',
        'document' => 'PCM audio',
    ],
    1207 => [
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
    1208 => [
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
    1209 => [
        'extension' => [
            0 => 'ape',
        ],
        'type' => 'audio/x-ape',
        'document' => 'Monkey\'s audio',
    ],
    1210 => [
        'extension' => [
            0 => 'aa',
        ],
        'type' => 'audio/x-pn-audibleaudio',
        'document' => 'Audible.Com audio',
        'alias' => 'audio/vnd.audible',
    ],
    1211 => [
        'extension' => [
            0 => 'aax',
        ],
        'type' => 'audio/vnd.audible.aax',
        'document' => 'Audible Enhanced audio',
    ],
    1212 => [
        'extension' => [
            0 => 'it',
        ],
        'type' => 'audio/x-it',
        'document' => 'Impulse Tracker audio',
    ],
    1213 => [
        'extension' => [
            0 => 'flac',
        ],
        'type' => 'audio/flac',
        'document' => 'FLAC audio',
        'alias' => 'audio/x-flac',
    ],
    1214 => [
        'extension' => [
            0 => 'wv',
            1 => 'wvp',
        ],
        'type' => 'audio/x-wavpack',
        'document' => 'WavPack audio',
    ],
    1215 => [
        'extension' => [
            0 => 'wvc',
        ],
        'type' => 'audio/x-wavpack-correction',
        'document' => 'WavPack audio correction file',
    ],
    1216 => [
        'extension' => [
            0 => 'mid',
            1 => 'midi',
            2 => 'kar',
        ],
        'type' => 'audio/midi',
        'document' => 'MIDI audio',
        'alias' => 'audio/x-midi',
    ],
    1217 => [
        'extension' => [
            0 => 'mo3',
        ],
        'type' => 'audio/x-mo3',
        'document' => 'compressed Tracker audio',
    ],
    1218 => [
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
    1219 => [
        'extension' => [
            0 => 'loas',
            1 => 'xhe',
        ],
        'type' => 'audio/usac',
        'document' => 'USAC audio',
        'acronym' => 'USAC',
        'expanded-acronym' => 'Unified Speech and Audio Coding',
    ],
    1220 => [
        'extension' => [
            0 => 'm4a',
            1 => 'f4a',
        ],
        'type' => 'audio/mp4',
        'document' => 'MPEG-4 audio',
        'alias' => 'audio/m4a',
    ],
    1221 => [
        'extension' => [
            0 => 'm4r',
        ],
        'type' => 'audio/x-m4r',
        'document' => 'MPEG-4 ringtone',
        'sub-class-of' => 'video/mp4',
    ],
    1222 => [
        'extension' => [
            0 => 'mp4',
            1 => 'm4v',
            2 => 'f4v',
            3 => 'lrv',
        ],
        'type' => 'video/mp4',
        'document' => 'MPEG-4 video',
        'alias' => 'video/x-m4v',
    ],
    1223 => [
        'extension' => [
            0 => 'm4b',
            1 => 'f4b',
        ],
        'type' => 'audio/x-m4b',
        'document' => 'MPEG-4 audio book',
        'sub-class-of' => 'audio/mp4',
    ],
    1224 => [
        'extension' => [
            0 => '3gp',
            1 => '3gpp',
            2 => '3ga',
        ],
        'type' => 'video/3gpp',
        'document' => '3GPP multimedia file',
        'acronym' => '3GPP',
        'expanded-acronym' => '3rd Generation Partnership Project',
        'sub-class-of' => 'video/mp4',
        'alias' => 'audio/x-rn-3gpp-amr-wb-encrypted',
    ],
    1225 => [
        'extension' => [
            0 => '3g2',
            1 => '3gp2',
            2 => '3gpp2',
        ],
        'type' => 'video/3gpp2',
        'document' => '3GPP2 multimedia file',
        'acronym' => '3GPP2',
        'expanded-acronym' => '3rd Generation Partnership Project 2',
        'alias' => 'audio/3gpp2',
    ],
    1226 => [
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
    1227 => [
        'extension' => [
            0 => 'mp2',
        ],
        'type' => 'audio/mp2',
        'document' => 'MP2 audio',
        'alias' => 'audio/x-mp2',
    ],
    1228 => [
        'extension' => [
            0 => 'mp3',
            1 => 'mpga',
        ],
        'type' => 'audio/mpeg',
        'document' => 'MP3 audio',
        'alias' => 'audio/mp3',
    ],
    1229 => [
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
    1230 => [
        'extension' => [
            0 => 'm3u',
            1 => 'm3u8',
        ],
        'type' => 'application/vnd.apple.mpegurl',
        'document' => 'Media playlist',
        'sub-class-of' => 'text/plain',
    ],
    1231 => [
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
    1232 => [
        'extension' => [
            0 => 'psf',
        ],
        'type' => 'audio/x-psf',
        'document' => 'PSF audio',
        'acronym' => 'PSF',
        'expanded-acronym' => 'Portable Sound Format',
    ],
    1233 => [
        'extension' => [
            0 => 'minipsf',
        ],
        'type' => 'audio/x-minipsf',
        'document' => 'MiniPSF audio',
        'acronym' => 'MiniPSF',
        'expanded-acronym' => 'Miniature Portable Sound Format',
        'sub-class-of' => 'audio/x-psf',
    ],
    1234 => [
        'extension' => [
            0 => 'psflib',
        ],
        'type' => 'audio/x-psflib',
        'document' => 'PSFlib audio library',
        'acronym' => 'PSFlib',
        'expanded-acronym' => 'Portable Sound Format Library',
        'sub-class-of' => 'audio/x-psf',
    ],
    1235 => [
        'extension' => [
            0 => 'wma',
        ],
        'type' => 'audio/x-ms-wma',
        'document' => 'Windows Media audio',
        'sub-class-of' => 'application/vnd.ms-asf',
        'alias' => 'audio/wma',
    ],
    1236 => [
        'extension' => [
            0 => 'mpc',
            1 => 'mpp',
            2 => 'mp+',
        ],
        'type' => 'audio/x-musepack',
        'document' => 'Musepack audio',
    ],
    1237 => [
        'extension' => [
            0 => 'ra',
            1 => 'rax',
        ],
        'type' => 'audio/vnd.rn-realaudio',
        'document' => 'RealAudio document',
        'alias' => 'audio/vnd.m-realaudio',
    ],
    1238 => [
        'extension' => [
            0 => 'ram',
        ],
        'type' => 'application/ram',
        'document' => 'RealMedia playlist',
    ],
    1239 => [
        'extension' => [
            0 => 'rv',
            1 => 'rvx',
        ],
        'type' => 'video/vnd.rn-realvideo',
        'document' => 'RealVideo document',
        'alias' => 'video/x-real-video',
    ],
    1240 => [
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
    1241 => [
        'extension' => [
            0 => 'rp',
        ],
        'type' => 'image/vnd.rn-realpix',
        'document' => 'RealPix document',
    ],
    1242 => [
        'extension' => [
            0 => 'rt',
        ],
        'type' => 'text/vnd.rn-realtext',
        'document' => 'RealText document',
        'sub-class-of' => 'text/plain',
    ],
    1243 => [
        'extension' => [
        ],
        'type' => 'audio/x-riff',
        'document' => 'RIFF audio',
    ],
    1244 => [
        'extension' => [
            0 => 'RIFF',
        ],
        'type' => 'application/x-riff',
        'document' => 'RIFF container',
    ],
    1245 => [
        'extension' => [
            0 => 's3m',
        ],
        'type' => 'audio/x-s3m',
        'document' => 'Scream Tracker 3 audio',
    ],
    1246 => [
        'extension' => [
            0 => 'pls',
        ],
        'type' => 'audio/x-scpls',
        'document' => 'MP3 ShoutCast playlist',
        'alias' => 'audio/scpls',
    ],
    1247 => [
        'extension' => [
            0 => 'stm',
        ],
        'type' => 'audio/x-stm',
        'document' => 'Scream Tracker audio',
    ],
    1248 => [
        'extension' => [
            0 => 'voc',
        ],
        'type' => 'audio/x-voc',
        'document' => 'VOC audio',
    ],
    1249 => [
        'extension' => [
            0 => 'wav',
        ],
        'type' => 'audio/x-wav',
        'document' => 'WAV audio',
        'alias' => 'audio/vnd.wave',
    ],
    1250 => [
        'extension' => [
            0 => 'xi',
        ],
        'type' => 'audio/x-xi',
        'document' => 'Scream Tracker instrument',
    ],
    1251 => [
        'extension' => [
            0 => 'xm',
        ],
        'type' => 'audio/x-xm',
        'document' => 'FastTracker II audio',
    ],
    1252 => [
        'extension' => [
            0 => 'tta',
        ],
        'type' => 'audio/x-tta',
        'document' => 'TrueAudio audio',
        'alias' => 'audio/tta',
    ],
    1253 => [
        'extension' => [
            0 => 'bmp',
            1 => 'dib',
        ],
        'type' => 'image/bmp',
        'document' => 'Windows BMP image',
        'alias' => 'image/x-MS-bmp',
    ],
    1254 => [
        'extension' => [
            0 => 'wbmp',
        ],
        'type' => 'image/vnd.wap.wbmp',
        'document' => 'WBMP image',
        'acronym' => 'WBMP',
        'expanded-acronym' => 'WAP bitmap',
    ],
    1255 => [
        'extension' => [
            0 => 'cgm',
        ],
        'type' => 'image/cgm',
        'document' => 'CGM image',
        'acronym' => 'CGM',
        'expanded-acronym' => 'Computer Graphics Metafile',
    ],
    1256 => [
        'extension' => [
            0 => 'g3',
        ],
        'type' => 'image/g3fax',
        'document' => 'CCITT G3 fax image',
        'alias' => 'image/fax-g3',
    ],
    1257 => [
        'extension' => [
            0 => 'gif',
        ],
        'type' => 'image/gif',
        'document' => 'GIF image',
    ],
    1258 => [
        'extension' => [
            0 => 'heic',
            1 => 'heif',
        ],
        'type' => 'image/heif',
        'document' => 'HEIF image',
        'acronym' => 'HEIF',
        'expanded-acronym' => 'High Efficiency Image File',
        'alias' => 'image/heif-sequence',
    ],
    1259 => [
        'extension' => [
            0 => 'ief',
        ],
        'type' => 'image/ief',
        'document' => 'IEF image',
    ],
    1260 => [
        'extension' => [
            0 => 'jpg',
            1 => 'jpeg',
            2 => 'jpe',
        ],
        'type' => 'image/jpeg',
        'document' => 'JPEG image',
        'alias' => 'image/pjpeg',
    ],
    1261 => [
        'extension' => [
            0 => 'mjpeg',
            1 => 'mjpg',
        ],
        'type' => 'video/x-mjpeg',
        'document' => 'MJPEG video stream',
        'acronym' => 'MJPEG',
        'expanded-acronym' => 'Motion JPEG',
        'sub-class-of' => 'image/jpeg',
    ],
    1262 => [
        'extension' => [
            0 => 'j2c',
            1 => 'j2k',
            2 => 'jpc',
        ],
        'type' => 'image/x-jp2-codestream',
        'document' => 'JPEG-2000 codestream',
    ],
    1263 => [
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
    1264 => [
        'extension' => [
            0 => 'jpf',
            1 => 'jpx',
        ],
        'type' => 'image/jpx',
        'document' => 'JPEG-2000 JPX image',
        'acronym' => 'JPX',
        'expanded-acronym' => 'JPEG-2000 eXtended',
    ],
    1265 => [
        'extension' => [
            0 => 'jpm',
            1 => 'jpgm',
        ],
        'type' => 'image/jpm',
        'document' => 'JPEG-2000 JPM image',
        'acronym' => 'JPM',
        'expanded-acronym' => 'JPEG-2000 Mixed',
    ],
    1266 => [
        'extension' => [
            0 => 'mj2',
            1 => 'mjp2',
        ],
        'type' => 'video/mj2',
        'document' => 'JPEG-2000 MJ2 video',
        'acronym' => 'MJ2',
        'expanded-acronym' => 'Motion JPEG-2000',
    ],
    1267 => [
        'extension' => [
            0 => 'jxl',
        ],
        'type' => 'image/jxl',
        'document' => 'JPEG XL image',
    ],
    1268 => [
        'extension' => [
            0 => 'ora',
        ],
        'type' => 'image/openraster',
        'document' => 'OpenRaster image',
        'sub-class-of' => 'application/zip',
    ],
    1269 => [
        'extension' => [
            0 => 'dds',
        ],
        'type' => 'image/x-dds',
        'document' => 'DirectDraw surface',
    ],
    1270 => [
        'extension' => [
            0 => 'Xcur',
        ],
        'type' => 'image/x-xcursor',
        'document' => 'X11 cursor',
    ],
    1271 => [
        'extension' => [
            0 => 'exr',
        ],
        'type' => 'image/x-exr',
        'document' => 'EXR image',
    ],
    1272 => [
        'extension' => [
            0 => 'pct',
            1 => 'pict',
            2 => 'pict1',
            3 => 'pict2',
        ],
        'type' => 'image/x-pict',
        'document' => 'Macintosh Quickdraw/PICT drawing',
    ],
    1273 => [
        'extension' => [
            0 => 'ufraw',
        ],
        'type' => 'application/x-ufraw',
        'document' => 'UFRaw ID image',
        'acronym' => 'UFRaw',
        'expanded-acronym' => 'Unidentified Flying Raw',
        'sub-class-of' => 'application/xml',
    ],
    1274 => [
        'extension' => [
        ],
        'type' => 'image/x-dcraw',
        'document' => 'digital raw image',
    ],
    1275 => [
        'extension' => [
            0 => 'dng',
        ],
        'type' => 'image/x-adobe-dng',
        'document' => 'Adobe DNG negative',
        'acronym' => 'DNG',
        'expanded-acronym' => 'Digital Negative',
        'sub-class-of' => 'image/tiff',
    ],
    1276 => [
        'extension' => [
            0 => 'crw',
        ],
        'type' => 'image/x-canon-crw',
        'document' => 'Canon CRW raw image',
        'acronym' => 'CRW',
        'expanded-acronym' => 'Canon RaW',
        'sub-class-of' => 'image/x-dcraw',
    ],
    1277 => [
        'extension' => [
            0 => 'cr2',
        ],
        'type' => 'image/x-canon-cr2',
        'document' => 'Canon CR2 raw image',
        'acronym' => 'CR2',
        'expanded-acronym' => 'Canon Raw 2',
        'sub-class-of' => 'image/tiff',
    ],
    1278 => [
        'extension' => [
            0 => 'cr3',
        ],
        'type' => 'image/x-canon-cr3',
        'document' => 'Canon CR3 raw image',
        'acronym' => 'CR3',
        'expanded-acronym' => 'Canon Raw 3',
        'sub-class-of' => 'image/x-dcraw',
    ],
    1279 => [
        'extension' => [
            0 => 'raf',
        ],
        'type' => 'image/x-fuji-raf',
        'document' => 'Fuji RAF raw image',
        'acronym' => 'RAF',
        'expanded-acronym' => 'RAw Format',
        'sub-class-of' => 'image/x-dcraw',
    ],
    1280 => [
        'extension' => [
            0 => 'dcr',
        ],
        'type' => 'image/x-kodak-dcr',
        'document' => 'Kodak DCR raw image',
        'acronym' => 'DCR',
        'expanded-acronym' => 'Digital Camera Raw',
        'sub-class-of' => 'image/tiff',
    ],
    1281 => [
        'extension' => [
            0 => 'k25',
        ],
        'type' => 'image/x-kodak-k25',
        'document' => 'Kodak K25 raw image',
        'acronym' => 'K25',
        'expanded-acronym' => 'Kodak DC25',
        'sub-class-of' => 'image/tiff',
    ],
    1282 => [
        'extension' => [
            0 => 'kdc',
        ],
        'type' => 'image/x-kodak-kdc',
        'document' => 'Kodak KDC raw image',
        'acronym' => 'KDC',
        'expanded-acronym' => 'Kodak Digital Camera',
        'sub-class-of' => 'image/tiff',
    ],
    1283 => [
        'extension' => [
            0 => 'mrw',
        ],
        'type' => 'image/x-minolta-mrw',
        'document' => 'Minolta MRW raw image',
        'acronym' => 'MRW',
        'expanded-acronym' => 'Minolta RaW',
        'sub-class-of' => 'image/x-dcraw',
    ],
    1284 => [
        'extension' => [
            0 => 'nef',
        ],
        'type' => 'image/x-nikon-nef',
        'document' => 'Nikon NEF raw image',
        'acronym' => 'NEF',
        'expanded-acronym' => 'Nikon Electronic Format',
        'sub-class-of' => 'image/tiff',
    ],
    1285 => [
        'extension' => [
            0 => 'nrw',
        ],
        'type' => 'image/x-nikon-nrw',
        'document' => 'Nikon NRW raw image',
        'sub-class-of' => 'image/tiff',
    ],
    1286 => [
        'extension' => [
            0 => 'orf',
        ],
        'type' => 'image/x-olympus-orf',
        'document' => 'Olympus ORF raw image',
        'acronym' => 'ORF',
        'expanded-acronym' => 'Olympus Raw Format',
        'sub-class-of' => 'image/x-dcraw',
    ],
    1287 => [
        'extension' => [
            0 => 'raw',
        ],
        'type' => 'image/x-panasonic-rw',
        'document' => 'Panasonic raw image',
        'sub-class-of' => 'image/x-dcraw',
        'alias' => 'image/x-panasonic-raw',
    ],
    1288 => [
        'extension' => [
            0 => 'rw2',
        ],
        'type' => 'image/x-panasonic-rw2',
        'document' => 'Panasonic raw image',
        'sub-class-of' => 'image/x-dcraw',
        'alias' => 'image/x-panasonic-raw2',
    ],
    1289 => [
        'extension' => [
            0 => 'pef',
        ],
        'type' => 'image/x-pentax-pef',
        'document' => 'Pentax PEF raw image',
        'acronym' => 'PEF',
        'expanded-acronym' => 'Pentax Electronic Format',
        'sub-class-of' => 'image/tiff',
    ],
    1290 => [
        'extension' => [
            0 => 'x3f',
        ],
        'type' => 'image/x-sigma-x3f',
        'document' => 'Sigma X3F raw image',
        'acronym' => 'X3F',
        'expanded-acronym' => 'X3 Foveon',
        'sub-class-of' => 'image/x-dcraw',
    ],
    1291 => [
        'extension' => [
            0 => 'srf',
        ],
        'type' => 'image/x-sony-srf',
        'document' => 'Sony SRF raw image',
        'acronym' => 'SRF',
        'expanded-acronym' => 'Sony Raw Format',
        'sub-class-of' => 'image/tiff',
    ],
    1292 => [
        'extension' => [
            0 => 'sr2',
        ],
        'type' => 'image/x-sony-sr2',
        'document' => 'Sony SR2 raw image',
        'acronym' => 'SR2',
        'expanded-acronym' => 'Sony Raw format 2',
        'sub-class-of' => 'image/tiff',
    ],
    1293 => [
        'extension' => [
            0 => 'arw',
        ],
        'type' => 'image/x-sony-arw',
        'document' => 'Sony ARW raw image',
        'acronym' => 'ARW',
        'expanded-acronym' => 'Alpha Raw format',
        'sub-class-of' => 'image/tiff',
    ],
    1294 => [
        'extension' => [
            0 => 'png',
        ],
        'type' => 'image/png',
        'document' => 'PNG image',
    ],
    1295 => [
        'extension' => [
            0 => 'rle',
        ],
        'type' => 'image/rle',
        'document' => 'RLE bitmap image',
        'acronym' => 'RLE',
        'expanded-acronym' => 'Run Length Encoded',
    ],
    1296 => [
        'extension' => [
            0 => 'svg',
        ],
        'type' => 'image/svg+xml',
        'document' => 'SVG image',
        'acronym' => 'SVG',
        'expanded-acronym' => 'Scalable Vector Graphics',
        'sub-class-of' => 'application/xml',
    ],
    1297 => [
        'extension' => [
            0 => 'svgz',
        ],
        'type' => 'image/svg+xml-compressed',
        'document' => 'compressed SVG image',
        'acronym' => 'SVG',
        'expanded-acronym' => 'Scalable Vector Graphics',
        'sub-class-of' => 'application/gzip',
    ],
    1298 => [
        'extension' => [
            0 => 'tif',
            1 => 'tiff',
        ],
        'type' => 'image/tiff',
        'document' => 'TIFF image',
        'acronym' => 'TIFF',
        'expanded-acronym' => 'Tagged Image File Format',
    ],
    1299 => [
        'extension' => [
        ],
        'type' => 'image/x-tiff-multipage',
        'document' => 'Multi-page TIFF image',
        'acronym' => 'TIFF',
        'expanded-acronym' => 'Tagged Image File Format',
        'sub-class-of' => 'image/tiff',
    ],
    1300 => [
        'extension' => [
            0 => 'dwg',
        ],
        'type' => 'image/vnd.dwg',
        'document' => 'AutoCAD image',
    ],
    1301 => [
        'extension' => [
            0 => 'dxf',
        ],
        'type' => 'image/vnd.dxf',
        'document' => 'DXF vector image',
    ],
    1302 => [
        'extension' => [
            0 => 'mdi',
        ],
        'type' => 'image/vnd.ms-modi',
        'document' => 'MDI image',
        'acronym' => 'MDI',
        'expanded-acronym' => 'Microsoft Document Imaging',
    ],
    1303 => [
        'extension' => [
            0 => 'webp',
        ],
        'type' => 'image/webp',
        'document' => 'WebP image',
    ],
    1304 => [
        'extension' => [
            0 => '3ds',
        ],
        'type' => 'image/x-3ds',
        'document' => '3D Studio image',
    ],
    1305 => [
        'extension' => [
            0 => 'ag',
        ],
        'type' => 'image/x-applix-graphics',
        'document' => 'Applix Graphics image',
    ],
    1306 => [
        'extension' => [
            0 => 'eps.bz2',
            1 => 'epsi.bz2',
            2 => 'epsf.bz2',
        ],
        'type' => 'image/x-bzeps',
        'document' => 'EPS image (bzip-compressed)',
        'sub-class-of' => 'application/x-bzip',
    ],
    1307 => [
        'extension' => [
            0 => 'ras',
        ],
        'type' => 'image/x-cmu-raster',
        'document' => 'CMU raster image',
    ],
    1308 => [
        'extension' => [
            0 => 'xcf.gz',
            1 => 'xcf.bz2',
        ],
        'type' => 'image/x-compressed-xcf',
        'document' => 'compressed GIMP image',
    ],
    1309 => [
        'extension' => [
            0 => 'dicomdir',
            1 => 'dcm',
        ],
        'type' => 'application/dicom',
        'document' => 'DICOM image',
        'acronym' => 'DICOM',
        'expanded-acronym' => 'Digital Imaging and Communications in Medicine',
    ],
    1310 => [
        'extension' => [
            0 => 'dbk',
            1 => 'docbook',
        ],
        'type' => 'application/x-docbook+xml',
        'document' => 'DocBook document',
        'sub-class-of' => 'application/xml',
        'alias' => 'application/vnd.oasis.docbook+xml',
    ],
    1311 => [
        'extension' => [
            0 => '\\x28\\00\\00\\00',
        ],
        'type' => 'image/x-dib',
        'document' => 'DIB image',
        'acronym' => 'DIB',
        'expanded-acronym' => 'Device Independent Bitmap',
    ],
    1312 => [
        'extension' => [
            0 => 'djvu',
            1 => 'djv',
        ],
        'type' => 'image/vnd.djvu',
        'document' => 'DjVu image',
        'alias' => 'image/x.djvu',
    ],
    1313 => [
        'extension' => [
            0 => 'djvu',
            1 => 'djv',
        ],
        'type' => 'image/vnd.djvu+multipage',
        'document' => 'DjVu document',
        'sub-class-of' => 'image/vnd.djvu',
    ],
    1314 => [
        'extension' => [
            0 => '0x53445058',
        ],
        'type' => 'image/dpx',
        'document' => 'DPX image',
        'acronym' => 'DPX',
        'expanded-acronym' => 'Digital Moving Picture Exchange',
    ],
    1315 => [
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
    1316 => [
        'extension' => [
            0 => 'fits',
        ],
        'type' => 'image/fits',
        'document' => 'FITS document',
        'acronym' => 'FITS',
        'expanded-acronym' => 'Flexible Image Transport System',
        'alias' => 'image/x-fits',
    ],
    1317 => [
        'extension' => [
            0 => '0x46506978',
        ],
        'type' => 'image/x-fpx',
        'document' => 'FPX image',
        'acronym' => 'FPX',
        'expanded-acronym' => 'FlashPiX',
    ],
    1318 => [
        'extension' => [
            0 => 'eps.gz',
            1 => 'epsi.gz',
            2 => 'epsf.gz',
        ],
        'type' => 'image/x-gzeps',
        'document' => 'EPS image (gzip-compressed)',
        'sub-class-of' => 'application/gzip',
    ],
    1319 => [
        'extension' => [
            0 => 'ico',
        ],
        'type' => 'image/vnd.microsoft.icon',
        'document' => 'Windows icon',
        'alias' => 'text/ico',
    ],
    1320 => [
        'extension' => [
            0 => 'icns',
        ],
        'type' => 'image/x-icns',
        'document' => 'MacOS X icon',
    ],
    1321 => [
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
    1322 => [
        'extension' => [
            0 => 'jng',
        ],
        'type' => 'image/x-jng',
        'document' => 'JNG image',
        'acronym' => 'JNG',
        'expanded-acronym' => 'JPEG Network Graphics',
    ],
    1323 => [
        'extension' => [
            0 => 'lwo',
            1 => 'lwob',
        ],
        'type' => 'image/x-lwo',
        'document' => 'LightWave object',
    ],
    1324 => [
        'extension' => [
            0 => 'lws',
        ],
        'type' => 'image/x-lws',
        'document' => 'LightWave scene',
    ],
    1325 => [
        'extension' => [
            0 => 'pntg',
        ],
        'type' => 'image/x-macpaint',
        'document' => 'MacPaint Bitmap image',
    ],
    1326 => [
        'extension' => [
            0 => 'msod',
        ],
        'type' => 'image/x-msod',
        'document' => 'Office drawing',
    ],
    1327 => [
        'extension' => [
            0 => 'IIN1',
        ],
        'type' => 'image/x-niff',
        'document' => 'NIFF image',
    ],
    1328 => [
        'extension' => [
            0 => 'pcx',
        ],
        'type' => 'image/vnd.zbrush.pcx',
        'document' => 'PCX image',
        'acronym' => 'PCX',
        'expanded-acronym' => 'PiCture eXchange',
        'alias' => 'image/x-pcx',
    ],
    1329 => [
        'extension' => [
            0 => 'pcd',
        ],
        'type' => 'image/x-photo-cd',
        'document' => 'PCD image',
        'acronym' => 'PCD',
        'expanded-acronym' => 'PhotoCD',
    ],
    1330 => [
        'extension' => [
            0 => 'pnm',
        ],
        'type' => 'image/x-portable-anymap',
        'document' => 'PNM image',
    ],
    1331 => [
        'extension' => [
            0 => 'pbm',
        ],
        'type' => 'image/x-portable-bitmap',
        'document' => 'PBM image',
        'acronym' => 'PBM',
        'expanded-acronym' => 'Portable BitMap',
        'sub-class-of' => 'image/x-portable-anymap',
    ],
    1332 => [
        'extension' => [
            0 => 'pgm',
        ],
        'type' => 'image/x-portable-graymap',
        'document' => 'PGM image',
        'acronym' => 'PGM',
        'expanded-acronym' => 'Portable GrayMap',
        'sub-class-of' => 'image/x-portable-anymap',
    ],
    1333 => [
        'extension' => [
            0 => 'ppm',
        ],
        'type' => 'image/x-portable-pixmap',
        'document' => 'PPM image',
        'acronym' => 'PPM',
        'expanded-acronym' => 'Portable PixMap',
        'sub-class-of' => 'image/x-portable-anymap',
    ],
    1334 => [
        'extension' => [
            0 => 'psd',
        ],
        'type' => 'image/vnd.adobe.photoshop',
        'document' => 'Photoshop image',
        'alias' => 'application/x-photoshop',
    ],
    1335 => [
        'extension' => [
            0 => 'rgb',
        ],
        'type' => 'image/x-rgb',
        'document' => 'RGB image',
    ],
    1336 => [
        'extension' => [
            0 => 'sgi',
        ],
        'type' => 'image/x-sgi',
        'document' => 'SGI image',
    ],
    1337 => [
        'extension' => [
            0 => 'sun',
        ],
        'type' => 'image/x-sun-raster',
        'document' => 'Sun raster image',
    ],
    1338 => [
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
    1339 => [
        'extension' => [
            0 => 'cur',
        ],
        'type' => 'image/x-win-bitmap',
        'document' => 'Windows cursor',
    ],
    1340 => [
        'extension' => [
            0 => 'ani',
        ],
        'type' => 'application/x-navi-animation',
        'document' => 'Windows animated cursor',
    ],
    1341 => [
        'extension' => [
            0 => 'emf',
        ],
        'type' => 'image/emf',
        'document' => 'EMF image',
        'acronym' => 'EMF',
        'expanded-acronym' => 'Enhanced MetaFile',
        'alias' => 'application/emf',
    ],
    1342 => [
        'extension' => [
            0 => 'wmf',
        ],
        'type' => 'image/wmf',
        'document' => 'WMF image',
        'acronym' => 'WMF',
        'expanded-acronym' => 'Windows Metafile',
        'alias' => 'application/x-msmetafile',
    ],
    1343 => [
        'extension' => [
            0 => 'xbm',
        ],
        'type' => 'image/x-xbitmap',
        'document' => 'XBM image',
        'acronym' => 'XBM',
        'expanded-acronym' => 'X BitMap',
    ],
    1344 => [
        'extension' => [
            0 => 'xcf',
        ],
        'type' => 'image/x-xcf',
        'document' => 'GIMP image',
    ],
    1345 => [
        'extension' => [
            0 => 'gbr',
        ],
        'type' => 'image/x-gimp-gbr',
        'document' => 'GIMP brush',
    ],
    1346 => [
        'extension' => [
            0 => 'gih',
        ],
        'type' => 'image/x-gimp-gih',
        'document' => 'GIMP brush pipe',
    ],
    1347 => [
        'extension' => [
            0 => 'pat',
        ],
        'type' => 'image/x-gimp-pat',
        'document' => 'GIMP pattern',
    ],
    1348 => [
        'extension' => [
            0 => 'fig',
        ],
        'type' => 'image/x-xfig',
        'document' => 'XFig image',
    ],
    1349 => [
        'extension' => [
            0 => 'xpm',
        ],
        'type' => 'image/x-xpixmap',
        'document' => 'XPM image',
        'acronym' => 'XPM',
        'expanded-acronym' => 'X PixMap',
        'alias' => 'image/x-xpm',
    ],
    1350 => [
        'extension' => [
            0 => 'xwd',
        ],
        'type' => 'image/x-xwindowdump',
        'document' => 'X window image',
    ],
    1351 => [
        'extension' => [
        ],
        'type' => 'inode/blockdevice',
        'document' => 'block device',
    ],
    1352 => [
        'extension' => [
        ],
        'type' => 'inode/chardevice',
        'document' => 'character device',
    ],
    1353 => [
        'extension' => [
        ],
        'type' => 'inode/directory',
        'document' => 'folder',
        'alias' => 'x-directory/normal',
    ],
    1354 => [
        'extension' => [
        ],
        'type' => 'inode/fifo',
        'document' => 'pipe',
    ],
    1355 => [
        'extension' => [
        ],
        'type' => 'inode/mount-point',
        'document' => 'mount point',
        'sub-class-of' => 'inode/directory',
    ],
    1356 => [
        'extension' => [
        ],
        'type' => 'inode/socket',
        'document' => 'socket',
    ],
    1357 => [
        'extension' => [
        ],
        'type' => 'inode/symlink',
        'document' => 'symbolic link',
    ],
    1358 => [
        'extension' => [
        ],
        'type' => 'message/delivery-status',
        'document' => 'mail delivery report',
        'sub-class-of' => 'text/plain',
    ],
    1359 => [
        'extension' => [
        ],
        'type' => 'message/disposition-notification',
        'document' => 'mail disposition report',
        'sub-class-of' => 'text/plain',
    ],
    1360 => [
        'extension' => [
        ],
        'type' => 'message/external-body',
        'document' => 'reference to remote file',
    ],
    1361 => [
        'extension' => [
            0 => 'Article',
            1 => 'Path:',
            2 => 'Xref:',
        ],
        'type' => 'message/news',
        'document' => 'Usenet news message',
        'sub-class-of' => 'text/plain',
    ],
    1362 => [
        'extension' => [
        ],
        'type' => 'message/partial',
        'document' => 'partial email message',
        'sub-class-of' => 'text/plain',
    ],
    1363 => [
        'extension' => [
            0 => 'eml',
        ],
        'type' => 'message/rfc822',
        'document' => 'email message',
        'sub-class-of' => 'text/plain',
    ],
    1364 => [
        'extension' => [
            0 => 'RMAIL',
        ],
        'type' => 'message/x-gnu-rmail',
        'document' => 'GNU mail message',
    ],
    1365 => [
        'extension' => [
            0 => 'igs',
            1 => 'iges',
        ],
        'type' => 'model/iges',
        'document' => 'IGES document',
        'acronym' => 'IGES',
        'expanded-acronym' => 'Initial Graphics Exchange Specification',
        'sub-class-of' => 'text/plain',
    ],
    1366 => [
        'extension' => [
            0 => 'glb',
        ],
        'type' => 'model/gltf-binary',
        'document' => 'glTF model',
        'acronym' => 'glTF',
        'expanded-acronym' => 'GL Transmission Format',
    ],
    1367 => [
        'extension' => [
            0 => 'gltf',
        ],
        'type' => 'model/gltf+json',
        'document' => 'glTF model',
        'acronym' => 'glTF',
        'expanded-acronym' => 'GL Transmission Format',
        'sub-class-of' => 'application/json',
    ],
    1368 => [
        'extension' => [
            0 => 'vrm',
            1 => 'vrml',
            2 => 'wrl',
        ],
        'type' => 'model/vrml',
        'document' => 'VRML document',
        'acronym' => 'VRML',
        'expanded-acronym' => 'Virtual Reality Modeling Language',
        'sub-class-of' => 'text/plain',
    ],
    1369 => [
        'extension' => [
        ],
        'type' => 'multipart/alternative',
        'document' => 'message in several formats',
    ],
    1370 => [
        'extension' => [
        ],
        'type' => 'multipart/appledouble',
        'document' => 'Macintosh AppleDouble-encoded file',
    ],
    1371 => [
        'extension' => [
        ],
        'type' => 'multipart/digest',
        'document' => 'message digest',
    ],
    1372 => [
        'extension' => [
        ],
        'type' => 'multipart/encrypted',
        'document' => 'encrypted message',
    ],
    1373 => [
        'extension' => [
        ],
        'type' => 'multipart/mixed',
        'document' => 'compound documents',
    ],
    1374 => [
        'extension' => [
        ],
        'type' => 'multipart/related',
        'document' => 'compound document',
    ],
    1375 => [
        'extension' => [
        ],
        'type' => 'multipart/report',
        'document' => 'mail system report',
    ],
    1376 => [
        'extension' => [
        ],
        'type' => 'multipart/signed',
        'document' => 'signed message',
    ],
    1377 => [
        'extension' => [
        ],
        'type' => 'multipart/x-mixed-replace',
        'document' => 'stream of data (server push)',
    ],
    1378 => [
        'extension' => [
            0 => 'vcs',
            1 => 'ics',
        ],
        'type' => 'text/calendar',
        'document' => 'VCS/ICS calendar',
        'acronym' => 'VCS/ICS',
        'expanded-acronym' => 'vCalendar/iCalendar',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/ics',
    ],
    1379 => [
        'extension' => [
            0 => 'css',
        ],
        'type' => 'text/css',
        'document' => 'CSS stylesheet',
        'acronym' => 'CSS',
        'expanded-acronym' => 'Cascading Style Sheets',
        'sub-class-of' => 'text/plain',
    ],
    1380 => [
        'extension' => [
            0 => 'vcard',
            1 => 'vcf',
            2 => 'vct',
            3 => 'gcrd',
        ],
        'type' => 'text/vcard',
        'document' => 'electronic business card',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-vcard',
    ],
    1381 => [
        'extension' => [
            0 => 'ttl',
        ],
        'type' => 'text/turtle',
        'document' => 'Turtle document',
        'sub-class-of' => 'text/plain',
    ],
    1382 => [
        'extension' => [
            0 => 't2t',
        ],
        'type' => 'text/x-txt2tags',
        'document' => 'txt2tags document',
        'sub-class-of' => 'text/plain',
    ],
    1383 => [
        'extension' => [
            0 => 'v',
        ],
        'type' => 'text/x-verilog',
        'document' => 'Verilog source code',
        'sub-class-of' => 'text/plain',
    ],
    1384 => [
        'extension' => [
            0 => 'svh',
        ],
        'type' => 'text/x-svhdr',
        'document' => 'SystemVerilog header',
        'sub-class-of' => 'text/x-verilog',
    ],
    1385 => [
        'extension' => [
            0 => 'sv',
        ],
        'type' => 'text/x-svsrc',
        'document' => 'SystemVerilog source code',
        'sub-class-of' => 'text/x-verilog',
    ],
    1386 => [
        'extension' => [
            0 => 'vhd',
            1 => 'vhdl',
        ],
        'type' => 'text/x-vhdl',
        'document' => 'VHDL source code',
        'acronym' => 'VHDL',
        'expanded-acronym' => 'Very-High-Speed Integrated Circuit Hardware Description Language',
        'sub-class-of' => 'text/plain',
    ],
    1387 => [
        'extension' => [
        ],
        'type' => 'text/enriched',
        'document' => 'enriched text document',
        'sub-class-of' => 'text/plain',
    ],
    1388 => [
        'extension' => [
        ],
        'type' => 'text/htmlh',
        'document' => 'help page',
        'sub-class-of' => 'text/plain',
    ],
    1389 => [
        'extension' => [
            0 => 'txt',
            1 => 'asc',
            2 => '*,v',
        ],
        'type' => 'text/plain',
        'document' => 'plain text document',
    ],
    1390 => [
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
    1391 => [
        'extension' => [
            0 => 'rst',
        ],
        'type' => 'text/x-rst',
        'document' => 'reStructuredText document',
        'sub-class-of' => 'text/plain',
    ],
    1392 => [
        'extension' => [
            0 => 'owx',
        ],
        'type' => 'application/owl+xml',
        'document' => 'OWL XML file',
        'acronym' => 'OWL',
        'expanded-acronym' => 'Web Ontology Language',
        'sub-class-of' => 'application/xml',
    ],
    1393 => [
        'extension' => [
        ],
        'type' => 'text/rfc822-headers',
        'document' => 'email headers',
        'sub-class-of' => 'text/plain',
    ],
    1394 => [
        'extension' => [
            0 => 'rtx',
        ],
        'type' => 'text/richtext',
        'document' => 'rich text document',
        'sub-class-of' => 'text/plain',
    ],
    1395 => [
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
    1396 => [
        'extension' => [
            0 => 'atom',
        ],
        'type' => 'application/atom+xml',
        'document' => 'Atom syndication feed',
        'sub-class-of' => 'application/xml',
    ],
    1397 => [
        'extension' => [
            0 => 'opml',
        ],
        'type' => 'text/x-opml+xml',
        'document' => 'OPML syndication feed',
        'sub-class-of' => 'application/xml',
        'alias' => 'text/x-opml',
    ],
    1398 => [
        'extension' => [
            0 => 'sgml',
            1 => 'sgm',
        ],
        'type' => 'text/sgml',
        'document' => 'SGML document',
        'acronym' => 'SGML',
        'expanded-acronym' => 'Standard Generalized Markup Language',
        'sub-class-of' => 'text/plain',
    ],
    1399 => [
        'extension' => [
            0 => 'sylk',
            1 => 'slk',
        ],
        'type' => 'text/spreadsheet',
        'document' => 'spreadsheet interchange document',
        'sub-class-of' => 'text/plain',
    ],
    1400 => [
        'extension' => [
            0 => 'tsv',
        ],
        'type' => 'text/tab-separated-values',
        'document' => 'TSV document',
        'acronym' => 'TSV',
        'expanded-acronym' => 'Tab Separated Values',
        'sub-class-of' => 'text/plain',
    ],
    1401 => [
        'extension' => [
            0 => 'gv',
            1 => 'dot',
        ],
        'type' => 'text/vnd.graphviz',
        'document' => 'Graphviz DOT graph',
        'sub-class-of' => 'text/plain',
    ],
    1402 => [
        'extension' => [
            0 => 'jad',
        ],
        'type' => 'text/vnd.sun.j2me.app-descriptor',
        'document' => 'JAD document',
        'acronym' => 'JAD',
        'expanded-acronym' => 'Java Application Descriptor',
        'sub-class-of' => 'text/plain',
    ],
    1403 => [
        'extension' => [
            0 => 'wml',
        ],
        'type' => 'text/vnd.wap.wml',
        'document' => 'WML document',
        'acronym' => 'WML',
        'expanded-acronym' => 'Wireless Markup Language',
        'sub-class-of' => 'application/xml',
    ],
    1404 => [
        'extension' => [
            0 => 'wmls',
        ],
        'type' => 'text/vnd.wap.wmlscript',
        'document' => 'WMLScript program',
        'sub-class-of' => 'text/plain',
    ],
    1405 => [
        'extension' => [
            0 => 'mc2',
        ],
        'type' => 'text/vnd.senx.warpscript',
        'document' => 'WarpScript source code',
        'sub-class-of' => 'text/plain',
    ],
    1406 => [
        'extension' => [
            0 => 'ace',
        ],
        'type' => 'application/x-ace',
        'document' => 'ACE archive',
    ],
    1407 => [
        'extension' => [
            0 => 'adb',
            1 => 'ads',
        ],
        'type' => 'text/x-adasrc',
        'document' => 'Ada source code',
        'sub-class-of' => 'text/plain',
    ],
    1408 => [
        'extension' => [
            0 => 'AUTHORS',
        ],
        'type' => 'text/x-authors',
        'document' => 'author list',
        'sub-class-of' => 'text/plain',
    ],
    1409 => [
        'extension' => [
            0 => 'bib',
        ],
        'type' => 'text/x-bibtex',
        'document' => 'BibTeX document',
        'sub-class-of' => 'text/plain',
    ],
    1410 => [
        'extension' => [
            0 => 'hh',
            1 => 'hp',
            2 => 'hpp',
            3 => 'h++',
            4 => 'hxx',
        ],
        'type' => 'text/x-c++hdr',
        'document' => 'C++ header',
        'sub-class-of' => 'text/x-chdr',
    ],
    1411 => [
        'extension' => [
            0 => 'cpp',
            1 => 'cxx',
            2 => 'cc',
            3 => 'C',
            4 => 'c++',
        ],
        'type' => 'text/x-c++src',
        'document' => 'C++ source code',
        'sub-class-of' => 'text/x-csrc',
    ],
    1412 => [
        'extension' => [
            0 => 'ChangeLog',
        ],
        'type' => 'text/x-changelog',
        'document' => 'ChangeLog document',
        'sub-class-of' => 'text/plain',
    ],
    1413 => [
        'extension' => [
            0 => 'h',
        ],
        'type' => 'text/x-chdr',
        'document' => 'C header',
        'sub-class-of' => 'text/x-csrc',
    ],
    1414 => [
        'extension' => [
            0 => 'cmake',
            1 => 'CMakeLists.txt',
        ],
        'type' => 'text/x-cmake',
        'document' => 'CMake source code',
        'sub-class-of' => 'text/plain',
    ],
    1415 => [
        'extension' => [
            0 => 'asd',
            1 => 'fasl',
            2 => 'lisp',
            3 => 'ros',
        ],
        'type' => 'text/x-common-lisp',
        'document' => 'Common Lisp source code',
        'sub-class-of' => 'text/plain',
    ],
    1416 => [
        'extension' => [
            0 => 'csv',
        ],
        'type' => 'text/csv',
        'document' => 'CSV document',
        'acronym' => 'CSV',
        'expanded-acronym' => 'Comma Separated Values',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-csv',
    ],
    1417 => [
        'extension' => [
            0 => 'csvs',
        ],
        'type' => 'text/csv-schema',
        'document' => 'CSV Schema document',
        'acronym' => 'CSV',
        'expanded-acronym' => 'Comma Separated Values',
        'sub-class-of' => 'text/plain',
    ],
    1418 => [
        'extension' => [
            0 => 'COPYING',
        ],
        'type' => 'text/x-copying',
        'document' => 'license terms',
        'sub-class-of' => 'text/plain',
    ],
    1419 => [
        'extension' => [
            0 => 'CREDITS',
        ],
        'type' => 'text/x-credits',
        'document' => 'author credits',
        'sub-class-of' => 'text/plain',
    ],
    1420 => [
        'extension' => [
            0 => 'c',
        ],
        'type' => 'text/x-csrc',
        'document' => 'C source code',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-c',
    ],
    1421 => [
        'extension' => [
            0 => 'cs',
        ],
        'type' => 'text/x-csharp',
        'document' => 'C# source code',
        'sub-class-of' => 'text/x-csrc',
    ],
    1422 => [
        'extension' => [
            0 => 'vala',
            1 => 'vapi',
        ],
        'type' => 'text/x-vala',
        'document' => 'Vala source code',
        'sub-class-of' => 'text/x-csrc',
    ],
    1423 => [
        'extension' => [
            0 => 'ooc',
        ],
        'type' => 'text/x-ooc',
        'document' => 'OOC source code',
        'acronym' => 'OOC',
        'expanded-acronym' => 'Out Of Class',
        'sub-class-of' => 'text/x-csrc',
    ],
    1424 => [
        'extension' => [
            0 => 'dcl',
        ],
        'type' => 'text/x-dcl',
        'document' => 'DCL script',
        'acronym' => 'DCL',
        'expanded-acronym' => 'Data Conversion Laboratory',
        'sub-class-of' => 'text/plain',
    ],
    1425 => [
        'extension' => [
            0 => 'dsl',
        ],
        'type' => 'text/x-dsl',
        'document' => 'DSSSL document',
        'acronym' => 'DSSSL',
        'expanded-acronym' => 'Document Style Semantics and Specification Language',
        'sub-class-of' => 'text/plain',
    ],
    1426 => [
        'extension' => [
            0 => 'd',
            1 => 'di',
        ],
        'type' => 'text/x-dsrc',
        'document' => 'D source code',
        'sub-class-of' => 'text/x-csrc',
    ],
    1427 => [
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
    1428 => [
        'extension' => [
            0 => 'e',
            1 => 'eif',
        ],
        'type' => 'text/x-eiffel',
        'document' => 'Eiffel source code',
        'sub-class-of' => 'text/plain',
    ],
    1429 => [
        'extension' => [
            0 => 'el',
        ],
        'type' => 'text/x-emacs-lisp',
        'document' => 'Emacs Lisp source code',
        'sub-class-of' => 'text/plain',
    ],
    1430 => [
        'extension' => [
            0 => 'ex',
            1 => 'exs',
        ],
        'type' => 'text/x-elixir',
        'document' => 'Elixir source code',
        'sub-class-of' => 'text/plain',
    ],
    1431 => [
        'extension' => [
            0 => 'erl',
        ],
        'type' => 'text/x-erlang',
        'document' => 'Erlang source code',
        'sub-class-of' => 'text/plain',
    ],
    1432 => [
        'extension' => [
            0 => 'f',
            1 => 'f90',
            2 => 'f95',
            3 => 'for',
        ],
        'type' => 'text/x-fortran',
        'document' => 'Fortran source code',
        'sub-class-of' => 'text/plain',
    ],
    1433 => [
        'extension' => [
            0 => 'gs',
        ],
        'type' => 'text/x-genie',
        'document' => 'Genie source code',
        'sub-class-of' => 'text/plain',
    ],
    1434 => [
        'extension' => [
            0 => 'po',
        ],
        'type' => 'text/x-gettext-translation',
        'document' => 'translation file',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/x-gettext',
    ],
    1435 => [
        'extension' => [
            0 => 'pot',
        ],
        'type' => 'text/x-gettext-translation-template',
        'document' => 'translation template',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-pot',
    ],
    1436 => [
        'extension' => [
            0 => 'feature',
        ],
        'type' => 'text/x-gherkin',
        'document' => 'Gherkin document',
        'sub-class-of' => 'text/plain',
    ],
    1437 => [
        'extension' => [
            0 => 'html',
            1 => 'htm',
        ],
        'type' => 'text/html',
        'document' => 'HTML document',
        'acronym' => 'HTML',
        'expanded-acronym' => 'HyperText Markup Language',
        'sub-class-of' => 'text/plain',
    ],
    1438 => [
        'extension' => [
            0 => 'manifest',
        ],
        'type' => 'text/cache-manifest',
        'document' => 'Web application cache file',
        'sub-class-of' => 'text/plain',
    ],
    1439 => [
        'extension' => [
            0 => 'gvp',
        ],
        'type' => 'text/x-google-video-pointer',
        'document' => 'Google Video Pointer shortcut',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/google-video-pointer',
    ],
    1440 => [
        'extension' => [
            0 => 'hs',
        ],
        'type' => 'text/x-haskell',
        'document' => 'Haskell source code',
        'sub-class-of' => 'text/plain',
    ],
    1441 => [
        'extension' => [
            0 => 'idl',
        ],
        'type' => 'text/x-idl',
        'document' => 'IDL document',
        'acronym' => 'IDL',
        'expanded-acronym' => 'Interface Definition Language',
        'sub-class-of' => 'text/plain',
    ],
    1442 => [
        'extension' => [
            0 => 'INSTALL',
        ],
        'type' => 'text/x-install',
        'document' => 'installation instructions',
        'sub-class-of' => 'text/plain',
    ],
    1443 => [
        'extension' => [
            0 => 'java',
        ],
        'type' => 'text/x-java',
        'document' => 'Java source code',
        'sub-class-of' => 'text/x-csrc',
    ],
    1444 => [
        'extension' => [
            0 => 'ldif',
        ],
        'type' => 'text/x-ldif',
        'document' => 'LDIF address book',
        'acronym' => 'LDIF',
        'expanded-acronym' => 'LDAP Data Interchange Format',
        'sub-class-of' => 'text/plain',
    ],
    1445 => [
        'extension' => [
            0 => 'ly',
        ],
        'type' => 'text/x-lilypond',
        'document' => 'Lilypond music sheet',
        'sub-class-of' => 'text/plain',
    ],
    1446 => [
        'extension' => [
            0 => 'lhs',
        ],
        'type' => 'text/x-literate-haskell',
        'document' => 'LHS source code',
        'acronym' => 'LHS',
        'expanded-acronym' => 'Literate Haskell source code',
        'sub-class-of' => 'text/plain',
    ],
    1447 => [
        'extension' => [
            0 => 'log',
        ],
        'type' => 'text/x-log',
        'document' => 'application log',
        'sub-class-of' => 'text/plain',
    ],
    1448 => [
        'extension' => [
            0 => 'makefile',
            1 => 'GNUmakefile',
            2 => 'mk',
            3 => 'mak',
            4 => 'Makefile.*',
        ],
        'type' => 'text/x-makefile',
        'document' => 'Makefile build file',
        'sub-class-of' => 'text/plain',
    ],
    1449 => [
        'extension' => [
            0 => 'md',
            1 => 'mkd',
            2 => 'markdown',
        ],
        'type' => 'text/markdown',
        'document' => 'Markdown document',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-markdown',
    ],
    1450 => [
        'extension' => [
            0 => 'moc',
        ],
        'type' => 'text/x-moc',
        'document' => 'Qt MOC file',
        'acronym' => 'Qt MOC',
        'expanded-acronym' => 'Qt Meta Object Compiler',
        'sub-class-of' => 'text/plain',
    ],
    1451 => [
        'extension' => [
            0 => 'reg',
        ],
        'type' => 'text/x-ms-regedit',
        'document' => 'Windows Registry extract',
        'sub-class-of' => 'text/plain',
    ],
    1452 => [
        'extension' => [
            0 => 'mof',
        ],
        'type' => 'text/x-mof',
        'document' => 'MOF file',
        'acronym' => 'MOF',
        'expanded-acronym' => 'Windows Managed Object File',
        'sub-class-of' => 'text/x-csrc',
    ],
    1453 => [
        'extension' => [
            0 => 'mup',
            1 => 'not',
        ],
        'type' => 'text/x-mup',
        'document' => 'Mup musical composition document',
        'sub-class-of' => 'text/plain',
    ],
    1454 => [
        'extension' => [
            0 => 'm',
        ],
        'type' => 'text/x-objcsrc',
        'document' => 'Objective-C source code',
        'sub-class-of' => 'text/x-csrc',
    ],
    1455 => [
        'extension' => [
            0 => 'ml',
            1 => 'mli',
        ],
        'type' => 'text/x-ocaml',
        'document' => 'OCaml source code',
        'sub-class-of' => 'text/plain',
    ],
    1456 => [
        'extension' => [
            0 => 'cl',
        ],
        'type' => 'text/x-opencl-src',
        'document' => 'OpenCL source code',
        'acronym' => 'OpenCL',
        'expanded-acronym' => 'Open Computing Language',
        'sub-class-of' => 'text/x-csrc',
    ],
    1457 => [
        'extension' => [
            0 => 'm',
        ],
        'type' => 'text/x-matlab',
        'document' => 'MATLAB file',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-octave',
    ],
    1458 => [
        'extension' => [
            0 => 'meson.build',
            1 => 'meson_options.txt',
        ],
        'type' => 'text/x-meson',
        'document' => 'Meson source code',
        'sub-class-of' => 'text/plain',
    ],
    1459 => [
        'extension' => [
            0 => 'mo',
        ],
        'type' => 'text/x-modelica',
        'document' => 'Modelica model',
        'sub-class-of' => 'text/plain',
    ],
    1460 => [
        'extension' => [
            0 => 'p',
            1 => 'pas',
        ],
        'type' => 'text/x-pascal',
        'document' => 'Pascal source code',
        'sub-class-of' => 'text/plain',
    ],
    1461 => [
        'extension' => [
            0 => 'diff',
            1 => 'patch',
        ],
        'type' => 'text/x-patch',
        'document' => 'differences between files',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-diff',
    ],
    1462 => [
        'extension' => [
            0 => 'dart',
        ],
        'type' => 'text/x-dart',
        'document' => 'Dart source code',
        'sub-class-of' => 'text/plain',
    ],
    1463 => [
        'extension' => [
            0 => 'go',
        ],
        'type' => 'text/x-go',
        'document' => 'Go source code',
        'sub-class-of' => 'text/plain',
    ],
    1464 => [
        'extension' => [
            0 => 'SConstruct',
            1 => 'SConscript',
            2 => 'SConscript.*',
        ],
        'type' => 'text/x-scons',
        'document' => 'SCons configuration file',
        'sub-class-of' => 'text/x-python',
    ],
    1465 => [
        'extension' => [
            0 => 'py',
            1 => 'py3',
            2 => 'py3x',
            3 => 'pyi',
        ],
        'type' => 'text/x-python3',
        'document' => 'Python 3 script',
        'sub-class-of' => 'text/x-python',
    ],
    1466 => [
        'extension' => [
            0 => 'py',
            1 => 'pyx',
            2 => 'wsgi',
        ],
        'type' => 'text/x-python',
        'document' => 'Python script',
        'sub-class-of' => 'text/plain',
    ],
    1467 => [
        'extension' => [
            0 => 'sage',
        ],
        'type' => 'text/x-sagemath',
        'document' => 'SageMath script',
        'sub-class-of' => 'text/x-python',
    ],
    1468 => [
        'extension' => [
            0 => 'lua',
        ],
        'type' => 'text/x-lua',
        'document' => 'Lua script',
        'sub-class-of' => 'text/plain',
    ],
    1469 => [
        'extension' => [
            0 => 'README*',
        ],
        'type' => 'text/x-readme',
        'document' => 'README document',
        'sub-class-of' => 'text/plain',
    ],
    1470 => [
        'extension' => [
            0 => 'nfo',
        ],
        'type' => 'text/x-nfo',
        'document' => 'NFO document',
        'sub-class-of' => 'text/x-readme',
    ],
    1471 => [
        'extension' => [
            0 => 'spec',
        ],
        'type' => 'text/x-rpm-spec',
        'document' => 'RPM spec file',
        'acronym' => 'RPM',
        'expanded-acronym' => 'Red Hat Package Manager',
        'sub-class-of' => 'text/plain',
    ],
    1472 => [
        'extension' => [
            0 => 'sass',
        ],
        'type' => 'text/x-sass',
        'document' => 'Sass CSS pre-processor file',
        'acronym' => 'Sass',
        'expanded-acronym' => 'Syntactically Awesome Style Sheets',
        'sub-class-of' => 'text/plain',
    ],
    1473 => [
        'extension' => [
            0 => 'scala',
            1 => 'sc',
        ],
        'type' => 'text/x-scala',
        'document' => 'Scala source code',
        'sub-class-of' => 'text/plain',
    ],
    1474 => [
        'extension' => [
            0 => 'scm',
            1 => 'ss',
        ],
        'type' => 'text/x-scheme',
        'document' => 'Scheme source code',
        'sub-class-of' => 'text/plain',
    ],
    1475 => [
        'extension' => [
            0 => 'scss',
        ],
        'type' => 'text/x-scss',
        'document' => 'SCSS pre-processor file',
        'acronym' => 'SCSS',
        'expanded-acronym' => 'Sassy CSS',
        'sub-class-of' => 'text/plain',
    ],
    1476 => [
        'extension' => [
            0 => 'etx',
        ],
        'type' => 'text/x-setext',
        'document' => 'Setext document',
        'sub-class-of' => 'text/plain',
    ],
    1477 => [
        'extension' => [
            0 => 'sql',
        ],
        'type' => 'application/sql',
        'document' => 'SQL code',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-sql',
    ],
    1478 => [
        'extension' => [
            0 => 'tcl',
            1 => 'tk',
        ],
        'type' => 'text/tcl',
        'document' => 'Tcl script',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-tcl',
    ],
    1479 => [
        'extension' => [
            0 => 'tex',
            1 => 'ltx',
            2 => 'sty',
            3 => 'cls',
            4 => 'dtx',
            5 => 'ins',
            6 => 'latex',
        ],
        'type' => 'text/x-tex',
        'document' => 'TeX document',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/x-tex',
    ],
    1480 => [
        'extension' => [
            0 => 'texi',
            1 => 'texinfo',
        ],
        'type' => 'text/x-texinfo',
        'document' => 'TeXInfo document',
        'sub-class-of' => 'text/plain',
    ],
    1481 => [
        'extension' => [
            0 => 'me',
        ],
        'type' => 'text/x-troff-me',
        'document' => 'Troff ME input document',
        'sub-class-of' => 'text/plain',
    ],
    1482 => [
        'extension' => [
            0 => 'mm',
        ],
        'type' => 'text/x-troff-mm',
        'document' => 'Troff MM input document',
        'sub-class-of' => 'text/plain',
    ],
    1483 => [
        'extension' => [
            0 => 'ms',
        ],
        'type' => 'text/x-troff-ms',
        'document' => 'Troff MS input document',
        'sub-class-of' => 'text/plain',
    ],
    1484 => [
        'extension' => [
            0 => 'twig',
        ],
        'type' => 'text/x-twig',
        'document' => 'Twig template',
        'sub-class-of' => 'text/plain',
    ],
    1485 => [
        'extension' => [
            0 => 'uil',
        ],
        'type' => 'text/x-uil',
        'document' => 'X-Motif UIL table',
        'sub-class-of' => 'text/plain',
    ],
    1486 => [
        'extension' => [
        ],
        'type' => 'text/x-uri',
        'document' => 'resource location',
        'sub-class-of' => 'text/plain',
    ],
    1487 => [
        'extension' => [
            0 => 'uue',
        ],
        'type' => 'text/x-uuencode',
        'document' => 'uuencoded file',
        'sub-class-of' => 'text/plain',
        'alias' => 'zz-application/zz-winassoc-uu',
    ],
    1488 => [
        'extension' => [
            0 => 'vbs',
        ],
        'type' => 'text/vbscript',
        'document' => 'VBScript program',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/vbs',
    ],
    1489 => [
        'extension' => [
            0 => 'xmi',
        ],
        'type' => 'text/x-xmi',
        'document' => 'XMI file',
        'acronym' => 'XMI',
        'expanded-acronym' => 'XML Metadata Interchange',
        'sub-class-of' => 'application/xml',
    ],
    1490 => [
        'extension' => [
            0 => 'fo',
            1 => 'xslfo',
        ],
        'type' => 'text/x-xslfo',
        'document' => 'XSL FO file',
        'acronym' => 'XSL FO',
        'expanded-acronym' => 'XSL Formatting Objects',
        'sub-class-of' => 'application/xml',
    ],
    1491 => [
        'extension' => [
            0 => 'iptables',
        ],
        'type' => 'text/x-iptables',
        'document' => 'iptables configuration file',
        'sub-class-of' => 'text/plain',
    ],
    1492 => [
        'extension' => [
            0 => 'service',
        ],
        'type' => 'text/x-dbus-service',
        'document' => 'D-Bus service file',
        'sub-class-of' => 'text/plain',
    ],
    1493 => [
        'extension' => [
            0 => 'automount',
            1 => 'device',
            2 => 'mount',
            3 => 'path',
            4 => 'scope',
            5 => 'service',
            6 => 'slice',
            7 => 'socket',
            8 => 'swap',
            9 => 'target',
            10 => 'timer',
        ],
        'type' => 'text/x-systemd-unit',
        'document' => 'systemd unit file',
        'sub-class-of' => 'text/plain',
    ],
    1494 => [
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
    1495 => [
        'extension' => [
            0 => 'pom.xml',
            1 => 'settings.xml',
        ],
        'type' => 'text/x-maven+xml',
        'document' => 'Maven description file',
        'sub-class-of' => 'application/xml',
    ],
    1496 => [
        'extension' => [
            0 => '# xmcd',
        ],
        'type' => 'text/xmcd',
        'document' => 'XMCD CD database',
        'sub-class-of' => 'text/plain',
    ],
    1497 => [
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
    1498 => [
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
    1499 => [
        'extension' => [
            0 => 'dv',
        ],
        'type' => 'video/dv',
        'document' => 'DV video',
        'acronym' => 'DV',
        'expanded-acronym' => 'Digital Video',
    ],
    1500 => [
        'extension' => [
        ],
        'type' => 'video/isivideo',
        'document' => 'ISI video',
    ],
    1501 => [
        'extension' => [
            0 => 'm2t',
            1 => 'm2ts',
            2 => 'ts',
            3 => 'mts',
            4 => 'cpi',
            5 => 'clpi',
            6 => 'mpl',
            7 => 'mpls',
            8 => 'bdm',
            9 => 'bdmv',
        ],
        'type' => 'video/mp2t',
        'document' => 'MPEG-2 transport stream',
        'acronym' => 'MPEG-2 TS',
        'expanded-acronym' => 'Moving Picture Experts Group 2 Transport Stream',
    ],
    1502 => [
        'extension' => [
            0 => 'mpeg',
            1 => 'mpg',
            2 => 'mp2',
            3 => 'mpe',
            4 => 'vob',
            5 => '[0-9][0-9][0-9].vdr',
        ],
        'type' => 'video/mpeg',
        'document' => 'MPEG video',
        'acronym' => 'MPEG',
        'expanded-acronym' => 'Moving Picture Experts Group',
        'alias' => 'video/x-mpeg2',
    ],
    1503 => [
        'extension' => [
            0 => 'm1u',
            1 => 'm4u',
            2 => 'mxu',
        ],
        'type' => 'video/vnd.mpegurl',
        'document' => 'Video playlist',
        'sub-class-of' => 'text/plain',
        'alias' => 'video/x-mpegurl',
    ],
    1504 => [
        'extension' => [
            0 => 'qt',
            1 => 'mov',
            2 => 'moov',
            3 => 'qtvr',
        ],
        'type' => 'video/quicktime',
        'document' => 'QuickTime video',
    ],
    1505 => [
        'extension' => [
            0 => 'qtif',
            1 => 'qif',
        ],
        'type' => 'image/x-quicktime',
        'document' => 'QuickTime image',
    ],
    1506 => [
        'extension' => [
            0 => 'ktx',
        ],
        'type' => 'image/ktx',
        'document' => 'Khronos texture image',
    ],
    1507 => [
        'extension' => [
            0 => 'ktx2',
        ],
        'type' => 'image/ktx2',
        'document' => 'Khronos texture image',
    ],
    1508 => [
        'extension' => [
            0 => 'astc',
        ],
        'type' => 'image/astc',
        'document' => 'ASTC texture',
        'acronym' => 'ASTC',
        'expanded-acronym' => 'Advanced Scalable Texture Compression',
    ],
    1509 => [
        'extension' => [
            0 => 'viv',
            1 => 'vivo',
        ],
        'type' => 'video/vnd.vivo',
        'document' => 'Vivo video',
        'alias' => 'video/vivo',
    ],
    1510 => [
        'extension' => [
        ],
        'type' => 'video/wavelet',
        'document' => 'Wavelet video',
    ],
    1511 => [
        'extension' => [
            0 => 'anim[1-9j]',
        ],
        'type' => 'video/x-anim',
        'document' => 'ANIM animation',
    ],
    1512 => [
        'extension' => [
            0 => 'fli',
            1 => 'flc',
        ],
        'type' => 'video/x-flic',
        'document' => 'FLIC animation',
        'alias' => 'video/x-fli',
    ],
    1513 => [
        'extension' => [
            0 => 'hwp',
        ],
        'type' => 'application/x-hwp',
        'document' => 'Haansoft Hangul document',
        'alias' => 'application/vnd.haansoft-hwp',
    ],
    1514 => [
        'extension' => [
            0 => 'hwt',
        ],
        'type' => 'application/x-hwt',
        'document' => 'Haansoft Hangul document template',
        'alias' => 'application/vnd.haansoft-hwt',
    ],
    1515 => [
        'extension' => [
            0 => 'mng',
        ],
        'type' => 'video/x-mng',
        'document' => 'MNG animation',
        'acronym' => 'MNG',
        'expanded-acronym' => 'Multiple-Image Network Graphics',
    ],
    1516 => [
        'extension' => [
            0 => 'asf',
        ],
        'type' => 'application/vnd.ms-asf',
        'document' => 'ASF video',
        'acronym' => 'ASF',
        'expanded-acronym' => 'Advanced Streaming Format',
        'alias' => 'video/x-ms-asf-plugin',
    ],
    1517 => [
        'extension' => [
            0 => 'nsc',
        ],
        'type' => 'application/x-netshow-channel',
        'document' => 'Windows Media Station file',
        'sub-class-of' => 'application/vnd.ms-asf',
    ],
    1518 => [
        'extension' => [
            0 => 'wmv',
        ],
        'type' => 'video/x-ms-wmv',
        'document' => 'Windows Media video',
        'sub-class-of' => 'application/vnd.ms-asf',
    ],
    1519 => [
        'extension' => [
            0 => 'avi',
            1 => 'avf',
            2 => 'divx',
        ],
        'type' => 'video/x-msvideo',
        'document' => 'AVI video',
        'acronym' => 'AVI',
        'expanded-acronym' => 'Audio Video Interleave',
        'alias' => 'video/vnd.divx',
    ],
    1520 => [
        'extension' => [
            0 => 'nsv',
        ],
        'type' => 'video/x-nsv',
        'document' => 'NullSoft video',
    ],
    1521 => [
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
    1522 => [
        'extension' => [
            0 => 'movie',
        ],
        'type' => 'video/x-sgi-movie',
        'document' => 'SGI video',
    ],
    1523 => [
        'extension' => [
            0 => 'emp',
        ],
        'type' => 'application/vnd.emusic-emusic_package',
        'document' => 'eMusic download package',
    ],
    1524 => [
        'extension' => [
            0 => 'kml',
        ],
        'type' => 'application/vnd.google-earth.kml+xml',
        'document' => 'KML geographic data',
        'acronym' => 'KML',
        'expanded-acronym' => 'Keyhole Markup Language',
        'sub-class-of' => 'application/xml',
    ],
    1525 => [
        'extension' => [
            0 => 'kmz',
        ],
        'type' => 'application/vnd.google-earth.kmz',
        'document' => 'KML geographic compressed data',
        'acronym' => 'KML',
        'expanded-acronym' => 'Keyhole Markup Language',
        'sub-class-of' => 'application/zip',
    ],
    1526 => [
        'extension' => [
            0 => 'geojson',
            1 => 'geo.json',
        ],
        'type' => 'application/geo+json',
        'document' => 'GeoJSON geospatial data',
        'sub-class-of' => 'application/json',
        'alias' => 'application/vnd.geo+json',
    ],
    1527 => [
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
    1528 => [
        'extension' => [
            0 => 'ica',
        ],
        'type' => 'application/x-ica',
        'document' => 'Citrix ICA settings file',
        'acronym' => 'ICA',
        'expanded-acronym' => 'Independent Computing Architecture',
        'sub-class-of' => 'text/plain',
    ],
    1529 => [
        'extension' => [
            0 => 'xul',
        ],
        'type' => 'application/vnd.mozilla.xul+xml',
        'document' => 'XUL interface document',
        'acronym' => 'XUL',
        'expanded-acronym' => 'XML User interface markup Language',
        'sub-class-of' => 'application/xml',
    ],
    1530 => [
        'extension' => [
            0 => 'xpi',
        ],
        'type' => 'application/x-xpinstall',
        'document' => 'XPInstall installer module',
        'sub-class-of' => 'application/zip',
    ],
    1531 => [
        'extension' => [
            0 => 'docx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'document' => 'Word 2007 document',
        'sub-class-of' => 'application/zip',
    ],
    1532 => [
        'extension' => [
            0 => 'dotx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
        'document' => 'Word 2007 document template',
        'sub-class-of' => 'application/zip',
    ],
    1533 => [
        'extension' => [
            0 => 'pptx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'document' => 'PowerPoint 2007 presentation',
        'sub-class-of' => 'application/zip',
    ],
    1534 => [
        'extension' => [
            0 => 'sldx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.presentationml.slide',
        'document' => 'PowerPoint 2007 slide',
        'sub-class-of' => 'application/zip',
    ],
    1535 => [
        'extension' => [
            0 => 'ppsx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
        'document' => 'PowerPoint 2007 show',
        'sub-class-of' => 'application/zip',
    ],
    1536 => [
        'extension' => [
            0 => 'potx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.presentationml.template',
        'document' => 'PowerPoint 2007 presentation template',
        'sub-class-of' => 'application/zip',
    ],
    1537 => [
        'extension' => [
            0 => 'xlsx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'document' => 'Excel 2007 spreadsheet',
        'sub-class-of' => 'application/zip',
    ],
    1538 => [
        'extension' => [
            0 => 'xltx',
        ],
        'type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
        'document' => 'Excel 2007 spreadsheet template',
        'sub-class-of' => 'application/zip',
    ],
    1539 => [
        'extension' => [
            0 => '602',
        ],
        'type' => 'application/x-t602',
        'document' => 'T602 document',
    ],
    1540 => [
        'extension' => [
            0 => 'pcf',
        ],
        'type' => 'application/x-cisco-vpn-settings',
        'document' => 'Cisco VPN settings',
        'sub-class-of' => 'text/plain',
    ],
    1541 => [
        'extension' => [
            0 => 'icc',
            1 => 'icm',
        ],
        'type' => 'application/vnd.iccprofile',
        'document' => 'ICC profile',
    ],
    1542 => [
        'extension' => [
            0 => 'it87',
        ],
        'type' => 'application/x-it87',
        'document' => 'IT 8.7 color calibration file',
        'sub-class-of' => 'text/plain',
    ],
    1543 => [
        'extension' => [
            0 => 'ccmx',
        ],
        'type' => 'application/x-ccmx',
        'document' => 'CCMX color correction file',
        'sub-class-of' => 'text/plain',
    ],
    1544 => [
        'extension' => [
            0 => 'hlp',
        ],
        'type' => 'application/winhlp',
        'document' => 'WinHelp help file',
        'alias' => 'zz-application/zz-winassoc-hlp',
    ],
    1545 => [
        'extension' => [
            0 => 'bsdiff',
        ],
        'type' => 'application/x-bsdiff',
        'document' => 'binary differences between files',
    ],
    1546 => [
        'extension' => [
            0 => 'dcim',
        ],
        'type' => 'x-content/image-dcf',
        'document' => 'digital photos',
    ],
    1547 => [
        'extension' => [
            0 => 'mpegav/AVSEQ01.DAT',
        ],
        'type' => 'x-content/video-vcd',
        'document' => 'Video CD',
    ],
    1548 => [
        'extension' => [
            0 => 'MPEG2/AVSEQ01.MPG',
        ],
        'type' => 'x-content/video-svcd',
        'document' => 'Super Video CD',
    ],
    1549 => [
        'extension' => [
            0 => 'VIDEO_TS/VIDEO_TS.IFO',
            1 => 'VIDEO_TS/VIDEO_TS.IFO;1',
            2 => 'VIDEO_TS.IFO',
            3 => 'VIDEO_TS.IFO;1',
        ],
        'type' => 'x-content/video-dvd',
        'document' => 'video DVD',
    ],
    1550 => [
        'extension' => [
        ],
        'type' => 'x-content/audio-cdda',
        'document' => 'audio CD',
    ],
    1551 => [
        'extension' => [
        ],
        'type' => 'x-content/blank-cd',
        'document' => 'blank CD disc',
    ],
    1552 => [
        'extension' => [
        ],
        'type' => 'x-content/blank-dvd',
        'document' => 'blank DVD disc',
    ],
    1553 => [
        'extension' => [
        ],
        'type' => 'x-content/blank-bd',
        'document' => 'blank Blu-ray disc',
    ],
    1554 => [
        'extension' => [
        ],
        'type' => 'x-content/blank-hddvd',
        'document' => 'blank HD DVD disc',
    ],
    1555 => [
        'extension' => [
            0 => 'AUDIO_TS/AUDIO_TS.IFO',
            1 => 'AUDIO_TS/AUDIO_TS.IFO;1',
        ],
        'type' => 'x-content/audio-dvd',
        'document' => 'audio DVD',
    ],
    1556 => [
        'extension' => [
            0 => 'BDAV',
            1 => 'BDMV',
        ],
        'type' => 'x-content/video-bluray',
        'document' => 'Blu-ray video disc',
    ],
    1557 => [
        'extension' => [
            0 => 'HVDVD_TS/HV000I01.IFO',
            1 => 'HVDVD_TS/HV001I01.IFO',
            2 => 'HVDVD_TS/HVA00001.VTI',
        ],
        'type' => 'x-content/video-hddvd',
        'document' => 'HD DVD video disc',
    ],
    1558 => [
        'extension' => [
            0 => '.kobo',
            1 => 'system/com.amazon.ebook.booklet.reader',
        ],
        'type' => 'x-content/ebook-reader',
        'document' => 'e-book reader',
    ],
    1559 => [
        'extension' => [
            0 => 'PICTURES',
        ],
        'type' => 'x-content/image-picturecd',
        'document' => 'Picture CD',
    ],
    1560 => [
        'extension' => [
        ],
        'type' => 'x-content/audio-player',
        'document' => 'portable audio player',
    ],
    1561 => [
        'extension' => [
            0 => '.ostree',
            1 => 'ostree/repo',
            2 => 'var/lib/flatpak/repo',
        ],
        'type' => 'x-content/ostree-repository',
        'document' => 'OSTree software updates',
    ],
    1562 => [
        'extension' => [
        ],
        'type' => 'x-content/software',
        'document' => 'software',
    ],
    1563 => [
        'extension' => [
            0 => '.autorun',
            1 => 'autorun',
            2 => 'autorun.sh',
        ],
        'type' => 'x-content/unix-software',
        'document' => 'UNIX software',
        'sub-class-of' => 'x-content/software',
    ],
    1564 => [
        'extension' => [
            0 => 'autorun.exe',
            1 => 'autorun.inf',
        ],
        'type' => 'x-content/win32-software',
        'document' => 'Windows software',
        'sub-class-of' => 'x-content/software',
    ],
    1565 => [
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
    1566 => [
        'extension' => [
            0 => 'key',
        ],
        'type' => 'application/vnd.apple.keynote',
        'document' => 'Apple Keynote 5 presentation',
        'sub-class-of' => 'application/zip',
        'alias' => 'application/x-iwork-keynote-sffkey',
    ],
    1567 => [
        'extension' => [
            0 => 'numbers',
        ],
        'type' => 'application/vnd.apple.numbers',
        'document' => 'Apple Numbers spreadsheet',
        'sub-class-of' => 'application/zip',
        'alias' => 'application/x-iwork-numbers-sffnumbers',
    ],
    1568 => [
        'extension' => [
            0 => 'pages',
        ],
        'type' => 'application/vnd.apple.pages',
        'document' => 'Apple Pages document',
        'sub-class-of' => 'application/zip',
        'alias' => 'application/x-iwork-pages-sffpages',
    ],
    1569 => [
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
    1570 => [
        'extension' => [
            0 => 'wad',
        ],
        'type' => 'application/x-doom-wad',
        'document' => 'Doom WAD file',
        'acronym' => 'WAD',
        'expanded-acronym' => 'Where\'s All the Data',
    ],
    1571 => [
        'extension' => [
            0 => 'adf',
        ],
        'type' => 'application/x-amiga-disk-format',
        'document' => 'Amiga disk image',
    ],
    1572 => [
        'extension' => [
            0 => 'flatpak',
            1 => 'xdgapp',
        ],
        'type' => 'application/vnd.flatpak',
        'document' => 'Flatpak application bundle',
        'alias' => 'application/vnd.xdgapp',
    ],
    1573 => [
        'extension' => [
            0 => 'flatpakrepo',
        ],
        'type' => 'application/vnd.flatpak.repo',
        'document' => 'Flatpak repository description',
        'sub-class-of' => 'text/plain',
    ],
    1574 => [
        'extension' => [
            0 => 'flatpakref',
        ],
        'type' => 'application/vnd.flatpak.ref',
        'document' => 'Flatpak repository reference',
        'sub-class-of' => 'text/plain',
    ],
    1575 => [
        'extension' => [
            0 => 'sqsh',
        ],
        'type' => 'application/vnd.squashfs',
        'document' => 'Squashfs filesystem image',
    ],
    1576 => [
        'extension' => [
            0 => 'appimage',
        ],
        'type' => 'application/vnd.appimage',
        'document' => 'AppImage application bundle',
        'sub-class-of' => 'application/vnd.squashfs',
    ],
    1577 => [
        'extension' => [
            0 => 'snap',
        ],
        'type' => 'application/vnd.snap',
        'document' => 'Snap package',
        'sub-class-of' => 'application/vnd.squashfs',
    ],
    1578 => [
        'extension' => [
            0 => 'stl',
        ],
        'type' => 'model/stl',
        'document' => 'STL 3D model',
        'acronym' => 'STL',
        'expanded-acronym' => 'StereoLithography',
        'alias' => 'model/x.stl-binary',
    ],
    1579 => [
        'extension' => [
            0 => 'gcode',
        ],
        'type' => 'text/x.gcode',
        'document' => 'G-code file',
        'sub-class-of' => 'text/plain',
    ],
    1580 => [
        'extension' => [
            0 => 'fds',
        ],
        'type' => 'application/x-fds-disk',
        'document' => 'Nintendo FDS disk image',
        'acronym' => 'FDS',
        'expanded-acronym' => 'Famicom Disk System',
    ],
    1581 => [
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
    1582 => [
        'extension' => [
            0 => 'qed',
        ],
        'type' => 'application/x-qed-disk',
        'document' => 'QEMU QED disk image',
        'acronym' => 'QED',
        'expanded-acronym' => 'QEMU Enhanced Disk',
    ],
    1583 => [
        'extension' => [
            0 => 'qcow2',
            1 => 'qcow',
        ],
        'type' => 'application/x-qemu-disk',
        'document' => 'QEMU QCOW disk image',
        'acronym' => 'QCOW',
        'expanded-acronym' => 'QEMU Copy On Write',
    ],
    1584 => [
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
    1585 => [
        'extension' => [
            0 => 'vhdx',
        ],
        'type' => 'application/x-vhdx-disk',
        'document' => 'VHDX disk image',
        'acronym' => 'VHDX',
        'expanded-acronym' => 'Virtual Hard Disk v2',
        'alias' => 'application/x-virtualbox-vhdx',
    ],
    1586 => [
        'extension' => [
            0 => 'vmdk',
        ],
        'type' => 'application/x-vmdk-disk',
        'document' => 'VMDK disk image',
        'acronym' => 'VMDK',
        'expanded-acronym' => 'Virtual Machine Disk',
        'alias' => 'application/x-virtualbox-vmdk',
    ],
    1587 => [
        'extension' => [
            0 => 'vdi',
        ],
        'type' => 'application/x-vdi-disk',
        'document' => 'VDI disk image',
        'acronym' => 'VDI',
        'expanded-acronym' => 'Virtual Disk Image',
        'alias' => 'application/x-virtualbox-vdi',
    ],
    1588 => [
        'extension' => [
            0 => 'cwk',
        ],
        'type' => 'application/x-appleworks-document',
        'document' => 'AppleWorks document',
    ],
    1589 => [
        'extension' => [
            0 => 'bps',
        ],
        'type' => 'application/x-bps-patch',
        'document' => 'BPS patch',
        'acronym' => 'BPS',
        'expanded-acronym' => 'Binary Patching System',
    ],
    1590 => [
        'extension' => [
            0 => 'ips',
        ],
        'type' => 'application/x-ips-patch',
        'document' => 'IPS patch',
        'acronym' => 'IPS',
        'expanded-acronym' => 'International Patching System',
    ],
    1591 => [
        'extension' => [
            0 => 'pysu',
        ],
        'type' => 'application/x-pyspread-spreadsheet',
        'document' => 'Pyspread spreadsheet',
    ],
    1592 => [
        'extension' => [
            0 => 'pys',
        ],
        'type' => 'application/x-pyspread-bz-spreadsheet',
        'document' => 'Pyspread spreadsheet (bzip-compressed)',
        'sub-class-of' => 'application/x-bzip',
    ],
    1593 => [
        'extension' => [
            0 => 'kt',
        ],
        'type' => 'text/x-kotlin',
        'document' => 'Kotlin source code',
        'sub-class-of' => 'text/plain',
    ],
    1594 => [
        'extension' => [
            0 => 'avif',
            1 => 'avifs',
        ],
        'type' => 'image/avif',
        'document' => 'AVIF image',
        'acronym' => 'AVIF',
        'expanded-acronym' => 'AV1 Image File Format',
        'alias' => 'image/avif-sequence',
    ],
    1595 => [
        'extension' => [
            0 => 'bik',
            1 => 'bk2',
        ],
        'type' => 'video/vnd.radgamettools.bink',
        'document' => 'Bink Video',
    ],
    1596 => [
        'extension' => [
            0 => 'smk',
        ],
        'type' => 'video/vnd.radgamettools.smacker',
        'document' => 'Smacker Video',
    ],
    1597 => [
        'extension' => [
            0 => 'org',
        ],
        'type' => 'text/org',
        'document' => 'Org-mode file',
        'sub-class-of' => 'text/plain',
    ],
    1598 => [
        'extension' => [
            0 => 'zim',
        ],
        'type' => 'application/x-openzim',
        'document' => 'OpenZIM file',
        'acronym' => 'ZIM',
        'expanded-acronym' => 'Zeno IMproved',
    ],
    1599 => [
        'extension' => [
            0 => 'pem',
        ],
        'type' => 'application/x-pem-file',
        'document' => 'Openssl PEM format',
        'acronym' => 'PEM',
        'sub-class-of' => 'text/plain',
    ],
    1600 => [
        'extension' => [
            0 => 'cer',
            1 => 'crt',
            2 => 'cert',
        ],
        'type' => 'application/pkix-cert',
        'document' => 'X.509 Certificate',
        'alias' => 'application/x-x509-user-cert',
    ],
    1601 => [
        'extension' => [
            0 => '-----BEGIN CERTIFICATE-----',
        ],
        'type' => 'application/pkix-cert+pem',
        'document' => 'X.509 Certificate in PEM format',
        'sub-class-of' => 'application/x-pem-file',
    ],
    1602 => [
        'extension' => [
            0 => 'crl',
        ],
        'type' => 'application/pkix-crl',
        'document' => 'Certificate Revocation List',
        'acronym' => 'CRL',
        'expanded-acronym' => 'Certificate Revocation List',
    ],
    1603 => [
        'extension' => [
            0 => '-----BEGIN X509 CRL-----',
        ],
        'type' => 'application/pkix-crl+pem',
        'document' => 'Certificate Revocation List in PEM format',
        'sub-class-of' => 'application/x-pem-file',
    ],
    1604 => [
        'extension' => [
            0 => 'p12',
            1 => 'pfx',
        ],
        'type' => 'application/x-pkcs12',
        'document' => 'PKCS#12 Personal Key and Certificates',
        'acronym' => 'PKCS#12',
        'alias' => 'application/pkcs12',
    ],
    1605 => [
        'extension' => [
            0 => '-----BEGIN PKCS12-----',
        ],
        'type' => 'application/pkcs12+pem',
        'document' => 'PKCS#12 Personal Key and Certificates in PEM format',
        'sub-class-of' => 'application/x-pem-file',
    ],
    1606 => [
        'extension' => [
            0 => 'p8',
            1 => 'pkcs8',
        ],
        'type' => 'application/pkcs8',
        'document' => 'PKCS#8 Personal Key',
        'acronym' => 'PKCS#8',
    ],
    1607 => [
        'extension' => [
            0 => '-----BEGIN PRIVATE KEY-----',
            1 => '-----BEGIN ENCRYPTED PRIVATE KEY-----',
        ],
        'type' => 'application/pkcs8+pem',
        'document' => 'PKCS#8 Personal Key in PEM format',
        'sub-class-of' => 'application/x-pem-file',
    ],
    1608 => [
        'extension' => [
            0 => 'p7c',
            1 => 'p7m',
            2 => 'spc',
            3 => 'p7b',
        ],
        'type' => 'application/pkcs7-mime',
        'document' => 'PKCS#7 Message and Certificates',
        'acronym' => 'PKCS#7',
        'alias' => 'application/x-pkcs7-certificates',
    ],
    1609 => [
        'extension' => [
            0 => '-----BEGIN PKCS7-----',
        ],
        'type' => 'application/pkcs7-mime+pem',
        'document' => 'PKCS#7 Message and Certificates in PEM format',
        'sub-class-of' => 'application/x-pem-file',
    ],
    1610 => [
        'extension' => [
            0 => 'p7s',
        ],
        'type' => 'application/pkcs7-signature',
        'document' => 'PKCS#7 Signature',
        'acronym' => 'PKCS#7',
    ],
    1611 => [
        'extension' => [
            0 => 'p10',
            1 => 'csr',
        ],
        'type' => 'application/pkcs10',
        'document' => 'PKCS#10 Certificate Request',
        'acronym' => 'PKCS#10',
    ],
    1612 => [
        'extension' => [
            0 => '-----BEGIN CERTIFICATE REQUEST-----',
            1 => '-----BEGIN NEW CERTIFICATE REQUEST-----',
        ],
        'type' => 'application/pkcs10+pem',
        'document' => 'PKCS#10 Certificate Request in PEM format',
        'sub-class-of' => 'application/x-pem-file',
    ],
    1613 => [
        'extension' => [
            0 => 'spkac',
        ],
        'type' => 'application/x-spkac',
        'document' => 'SPKAC Certificate Request',
    ],
    1614 => [
        'extension' => [
            0 => 'SPKAC=',
        ],
        'type' => 'application/x-spkac+base64',
        'document' => 'SPKAC Certificate Request in OpenSSL format',
        'sub-class-of' => 'text/plain',
    ],
    1615 => [
        'extension' => [
            0 => '-----BEGIN RSA PRIVATE KEY-----',
            1 => '-----BEGIN DSA PRIVATE KEY-----',
            2 => '-----BEGIN EC PRIVATE KEY-----',
        ],
        'type' => 'application/x-pem-key',
        'document' => 'Private Key in PEM format',
        'sub-class-of' => 'application/x-pem-file',
    ],
    1616 => [
        'extension' => [
            0 => 'heic',
            1 => 'heif',
        ],
        'type' => 'image/heif',
        'document' => 'HEIF image',
        'alias' => 'image/heic',
    ],
    1617 => [
        'extension' => [
            0 => 'jxl',
        ],
        'type' => 'image/jxl',
        'document' => 'JPEG XL image',
    ],
    1618 => [
        'extension' => [
            0 => 'rng',
        ],
        'type' => 'application/relaxng',
        'document' => 'RELAX NG',
        'sub-class-of' => 'application/xml',
    ],
    1619 => [
        'extension' => [
            0 => 'cda',
        ],
        'type' => 'application/x-cda',
        'document' => 'CD audio',
    ],
    1620 => [
        'extension' => [
            0 => 'snf',
            1 => 'snf.Z',
            2 => 'snf.gz',
        ],
        'type' => 'application/x-font-snf',
        'document' => 'SNF bitmap font',
    ],
    1621 => [
        'extension' => [
        ],
        'type' => 'application/x-java-applet',
        'document' => 'Java applet',
    ],
    1622 => [
        'extension' => [
        ],
        'type' => 'application/x-khtml-adaptor',
        'document' => 'KHTML Extension Adaptor',
    ],
    1623 => [
        'extension' => [
            0 => 'kcsrc',
        ],
        'type' => 'application/x-kcsrc',
        'document' => 'KDE color scheme',
        'acronym' => 'KDE',
        'expanded-acronym' => 'K Desktop Environment',
    ],
    1624 => [
        'extension' => [
            0 => 'kns',
        ],
        'type' => 'application/x-kns',
        'document' => 'KNewStuff package',
        'sub-class-of' => 'application/zip',
    ],
    1625 => [
        'extension' => [
            0 => 'kwl',
        ],
        'type' => 'application/x-kwallet',
        'document' => 'KWallet wallet',
    ],
    1626 => [
        'extension' => [
            0 => 'kut',
        ],
        'type' => 'application/x-kudesigner',
        'document' => 'Kugar report template',
    ],
    1627 => [
        'extension' => [
            0 => 'plasmoid',
        ],
        'type' => 'application/x-plasma',
        'document' => 'plasmoid',
        'sub-class-of' => 'application/zip',
    ],
    1628 => [
        'extension' => [
            0 => 'skz',
        ],
        'type' => 'application/x-superkaramba',
        'document' => 'SuperKaramba theme',
        'sub-class-of' => 'application/zip',
    ],
    1629 => [
        'extension' => [
            0 => 'plan',
        ],
        'type' => 'application/x-vnd.kde.plan',
        'document' => 'Calligra Plan project management document',
    ],
    1630 => [
        'extension' => [
            0 => 'planwork',
        ],
        'type' => 'application/x-vnd.kde.plan.work',
        'document' => 'Calligra Plan work package document',
    ],
    1631 => [
        'extension' => [
            0 => 'kplato',
        ],
        'type' => 'application/x-vnd.kde.kplato',
        'document' => 'KPlato project management document',
    ],
    1632 => [
        'extension' => [
            0 => 'kplatowork',
        ],
        'type' => 'application/x-vnd.kde.kplato.work',
        'document' => 'KPlato project management work package',
    ],
    1633 => [
        'extension' => [
            0 => 'kug',
        ],
        'type' => 'application/x-vnd.kde.kugar.mixed',
        'document' => 'Kugar archive',
    ],
    1634 => [
        'extension' => [
            0 => 'war',
        ],
        'type' => 'application/x-webarchive',
        'document' => 'web archive',
        'sub-class-of' => 'application/x-compressed-tar',
    ],
    1635 => [
        'extension' => [
            0 => 'xsd',
        ],
        'type' => 'application/xsd',
        'document' => 'W3C XML schema',
        'sub-class-of' => 'application/xml',
    ],
    1636 => [
        'extension' => [
        ],
        'type' => 'audio/x-pn-realaudio-plugin',
        'document' => 'RealAudio plugin file',
    ],
    1637 => [
        'extension' => [
            0 => 'kim',
        ],
        'type' => 'application/vnd.kde.kphotoalbum-import',
        'document' => 'KPhotoAlbum import',
    ],
    1638 => [
        'extension' => [
            0 => 'hdr',
            1 => 'pic',
        ],
        'type' => 'image/x-hdr',
        'document' => 'HDR image',
        'acronym' => 'HDR',
        'expanded-acronym' => 'High Dynamic Range',
    ],
    1639 => [
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
    1640 => [
        'extension' => [
            0 => 'doc',
        ],
        'type' => 'text/plain',
    ],
    1641 => [
        'extension' => [
            0 => 'hex',
        ],
        'type' => 'text/x-hex',
        'document' => 'Intel® hexadecimal object file',
        'sub-class-of' => 'text/plain',
    ],
    1642 => [
        'extension' => [
            0 => 'katefl',
        ],
        'type' => 'text/x-katefilelist',
        'document' => 'Kate file list loader plugin list',
        'sub-class-of' => 'text/plain',
    ],
    1643 => [
        'extension' => [
            0 => 'abc',
        ],
        'type' => 'text/vnd.abc',
        'document' => 'abc musical notation file',
        'sub-class-of' => 'text/plain',
    ],
    1644 => [
        'extension' => [
            0 => 'fonts.zip',
        ],
        'type' => 'application/vnd.kde.fontspackage',
        'document' => 'fonts package',
        'sub-class-of' => 'application/zip',
    ],
    1645 => [
        'extension' => [
        ],
        'type' => 'application/x-smb-server',
        'document' => 'Windows server',
        'sub-class-of' => 'inode/directory',
    ],
    1646 => [
        'extension' => [
        ],
        'type' => 'application/x-smb-workgroup',
        'document' => 'Windows workgroup',
        'sub-class-of' => 'inode/directory',
    ],
    1647 => [
        'extension' => [
            0 => 'sgrd',
        ],
        'type' => 'application/x-ksysguard',
        'document' => 'KDE system monitor',
    ],
    1648 => [
        'extension' => [
            0 => 'kth',
        ],
        'type' => 'application/x-ktheme',
        'document' => 'KDE theme',
        'sub-class-of' => 'application/zip',
    ],
    1649 => [
        'extension' => [
            0 => 'quanta',
        ],
        'type' => 'application/x-quanta',
        'document' => 'Quanta project',
        'sub-class-of' => 'text/plain',
    ],
    1650 => [
        'extension' => [
            0 => 'kmdr',
        ],
        'type' => 'application/x-kommander',
        'document' => 'Kommander file',
        'sub-class-of' => 'text/plain',
    ],
    1651 => [
        'extension' => [
            0 => 'tuberling',
        ],
        'type' => 'application/x-tuberling',
        'document' => 'potato',
    ],
    1652 => [
        'extension' => [
            0 => 'kolfgame',
        ],
        'type' => 'application/x-kolf',
        'document' => 'Kolf saved game',
    ],
    1653 => [
        'extension' => [
            0 => 'kolf',
            1 => 'course',
            2 => 'kourse',
        ],
        'type' => 'application/x-kourse',
        'document' => 'Kolf course',
    ],
    1654 => [
        'extension' => [
            0 => 'okular',
        ],
        'type' => 'application/vnd.kde.okular-archive',
        'document' => 'Okular document archive',
    ],
    1655 => [
        'extension' => [
            0 => 'fig',
        ],
        'type' => 'application/x-cabri',
        'document' => 'Cabri figure',
    ],
    1656 => [
        'extension' => [
            0 => 'fgeo',
        ],
        'type' => 'application/x-drgeo',
        'document' => 'Dr. Geo figure',
    ],
    1657 => [
        'extension' => [
            0 => 'kgeo',
        ],
        'type' => 'application/x-kgeo',
        'document' => 'KGeo figure',
    ],
    1658 => [
        'extension' => [
            0 => 'kig',
            1 => 'kigz',
        ],
        'type' => 'application/x-kig',
        'document' => 'Kig figure',
    ],
    1659 => [
        'extension' => [
            0 => 'seg',
        ],
        'type' => 'application/x-kseg',
        'document' => 'KSeg document',
    ],
    1660 => [
        'extension' => [
            0 => 'kvtml',
        ],
        'type' => 'application/x-kvtml',
        'document' => 'vocabulary trainer document',
        'sub-class-of' => 'application/xml',
    ],
    1661 => [
        'extension' => [
            0 => 'fkt',
        ],
        'type' => 'application/x-kmplot',
        'document' => 'KmPlot file',
    ],
    1662 => [
        'extension' => [
            0 => 'wql',
        ],
        'type' => 'application/x-kwordquiz',
        'document' => 'KWordQuiz vocabulary',
    ],
    1663 => [
        'extension' => [
            0 => 'cachegrind.out*',
            1 => 'callgrind.out*',
        ],
        'type' => 'application/x-kcachegrind',
        'document' => 'Cachegrind/Callgrind profile dump',
    ],
    1664 => [
        'extension' => [
            0 => 'xmi',
            1 => 'xmi.tgz',
            2 => 'xmi.tar.bz2',
        ],
        'type' => 'application/x-uml',
        'document' => 'Umbrello UML Modeller file',
    ],
    1665 => [
        'extension' => [
            0 => 'lnk',
        ],
        'type' => 'application/x-ms-shortcut',
        'document' => 'Windows link',
        'alias' => 'application/x-win-lnk',
    ],
    1666 => [
        'extension' => [
            0 => 'kgt',
        ],
        'type' => 'application/x-kgetlist',
        'document' => 'KGet download list',
        'sub-class-of' => 'application/xml',
    ],
    1667 => [
        'extension' => [
            0 => 'kopete-emoticons',
        ],
        'type' => 'application/x-kopete-emoticons',
        'document' => 'Kopete emoticons archive',
    ],
    1668 => [
        'extension' => [
            0 => 'uin',
            1 => 'icq',
        ],
        'type' => 'application/x-icq',
        'document' => 'ICQ contact',
    ],
    1669 => [
        'extension' => [
            0 => 'wmp',
        ],
        'type' => 'video/x-ms-wmp',
        'document' => 'Microsoft Media Format',
        'sub-class-of' => 'video/x-ms-wmv',
        'alias' => 'application/x-mplayer2',
    ],
    1670 => [
        'extension' => [
        ],
        'type' => 'application/x-turtle',
        'document' => 'Turtle RDF document',
        'sub-class-of' => 'text/plain',
    ],
    1671 => [
        'extension' => [
            0 => 'pic',
        ],
        'type' => 'image/x-pic',
        'document' => 'Softimage PIC image',
    ],
    1672 => [
        'extension' => [
            0 => 'qml',
            1 => 'qmltypes',
            2 => 'qmlproject',
        ],
        'type' => 'text/x-qml',
        'document' => 'Qt Markup Language file',
    ],
    1673 => [
        'extension' => [
            0 => 'kcfg',
        ],
        'type' => 'application/vnd.kde.kcfg',
        'document' => 'KConfigXT Configuration Options',
        'sub-class-of' => 'application/xml',
    ],
    1674 => [
        'extension' => [
            0 => 'kcfgc',
        ],
        'type' => 'application/vnd.kde.kcfgc',
        'document' => 'KConfigXT Code Generation Options',
        'sub-class-of' => 'text/plain',
    ],
    1675 => [
        'extension' => [
            0 => 'rc',
        ],
        'type' => 'application/vnd.kde.kxmlguirc',
        'document' => 'KXMLGUI UI Declaration',
        'sub-class-of' => 'application/xml',
    ],
    1676 => [
        'extension' => [
            0 => 'notifyrc',
        ],
        'type' => 'application/vnd.kde.knotificationrc',
        'document' => 'KNotification Declaration',
        'sub-class-of' => 'text/plain',
    ],
    1677 => [
        'extension' => [
            0 => 'kcrash',
            1 => 'kcrash.txt',
        ],
        'type' => 'text/vnd.kde.kcrash-report',
        'document' => 'KCrash Report',
        'sub-class-of' => 'text/plain',
    ],
    1678 => [
        'extension' => [
            0 => 'opdownload',
        ],
        'type' => 'application/x-opera-download',
    ],
    1679 => [
        'extension' => [
            0 => 'note',
        ],
        'type' => 'application/x-note',
        'document' => 'Notes',
    ],
    1680 => [
        'extension' => [
            0 => 'PKGBUILD',
        ],
        'type' => 'text/x-pkgbuild',
        'document' => 'PKGBUILD files',
        'sub-class-of' => 'text/plain',
    ],
    1681 => [
        'extension' => [
            0 => 'vbox',
        ],
        'type' => 'application/x-virtualbox-vbox',
        'document' => 'VirtualBox Machine Definition',
    ],
    1682 => [
        'extension' => [
            0 => 'vbox-extpack',
        ],
        'type' => 'application/x-virtualbox-vbox-extpack',
        'document' => 'VirtualBox Extension Pack',
    ],
    1683 => [
        'extension' => [
            0 => 'ovf',
        ],
        'type' => 'application/x-virtualbox-ovf',
        'document' => 'Open Virtualization Format',
    ],
    1684 => [
        'extension' => [
            0 => 'ova',
        ],
        'type' => 'application/x-virtualbox-ova',
        'document' => 'Open Virtualization Format Archive',
    ],
    1685 => [
        'extension' => [
            0 => 'vdi',
        ],
        'type' => 'application/x-virtualbox-vdi',
        'document' => 'Virtual Disk Image',
    ],
    1686 => [
        'extension' => [
            0 => 'vmdk',
        ],
        'type' => 'application/x-virtualbox-vmdk',
        'document' => 'Virtual Machine Disk Format',
    ],
    1687 => [
        'extension' => [
            0 => 'vhd',
        ],
        'type' => 'application/x-virtualbox-vhd',
        'document' => 'Virtual Hard Disk',
    ],
    1688 => [
        'extension' => [
            0 => 'hdd',
        ],
        'type' => 'application/x-virtualbox-hdd',
        'document' => 'Virtual Hard Disk',
    ],
    1689 => [
        'extension' => [
            0 => 'xls',
            1 => 'xlsm',
        ],
        'type' => 'application/wps-office.xls',
        'document' => 'Microsoft Excel Spreadsheet',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    1690 => [
        'extension' => [
            0 => 'xlt',
            1 => 'xltm',
        ],
        'type' => 'application/wps-office.xlt',
        'document' => 'Microsoft Excel Template',
        'sub-class-of' => 'application/vnd.ms-excel',
    ],
    1691 => [
        'extension' => [
            0 => 'xltx',
        ],
        'type' => 'application/wps-office.xltx',
        'document' => 'Microsoft Excel Template',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    ],
    1692 => [
        'extension' => [
            0 => 'xlsx',
        ],
        'type' => 'application/wps-office.xlsx',
        'document' => 'Microsoft Excel Spreadsheet',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    1693 => [
        'extension' => [
            0 => 'et',
        ],
        'type' => 'application/wps-office.et',
        'document' => 'WPS Spreadsheets Workbook',
    ],
    1694 => [
        'extension' => [
            0 => 'ett',
        ],
        'type' => 'application/wps-office.ett',
        'document' => 'WPS Spreadsheets Template',
    ],
    1695 => [
        'extension' => [
            0 => 'ets',
        ],
        'type' => 'application/wps-office.ets',
        'document' => 'WPS Spreadsheets Security',
    ],
    1696 => [
        'extension' => [
            0 => 'eto',
        ],
        'type' => 'application/wps-office.eto',
        'document' => 'WPS Spreadsheets Outgoing Documen',
    ],
    1697 => [
        'extension' => [
            0 => 'ppt',
            1 => 'pptm',
            2 => 'pps',
        ],
        'type' => 'application/wps-office.ppt',
        'document' => 'Microsoft Powerpoint',
        'sub-class-of' => 'application/vnd.ms-powerpoint',
    ],
    1698 => [
        'extension' => [
            0 => 'pot',
            1 => 'potm',
        ],
        'type' => 'application/wps-office.pot',
        'document' => 'Microsoft Powerpoint Template',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.presentationml.template',
    ],
    1699 => [
        'extension' => [
            0 => 'potx',
        ],
        'type' => 'application/wps-office.potx',
        'document' => 'Microsoft Powerpoint Template',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.presentationml.template',
    ],
    1700 => [
        'extension' => [
            0 => 'pptx',
            1 => 'ppsx',
        ],
        'type' => 'application/wps-office.pptx',
        'document' => 'Microsoft Powerpoint',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    ],
    1701 => [
        'extension' => [
            0 => 'dps',
        ],
        'type' => 'application/wps-office.dps',
        'document' => 'WPS Presentation File',
    ],
    1702 => [
        'extension' => [
            0 => 'dpt',
        ],
        'type' => 'application/wps-office.dpt',
        'document' => 'WPS Presentation Template',
    ],
    1703 => [
        'extension' => [
            0 => 'dpss',
        ],
        'type' => 'application/wps-office.dpss',
        'document' => 'WPS Presentation Security',
    ],
    1704 => [
        'extension' => [
            0 => 'dpso',
        ],
        'type' => 'application/wps-office.dpso',
        'document' => 'WPS Presentation Outgoing Documen',
    ],
    1705 => [
        'extension' => [
            0 => 'doc',
            1 => 'docm',
            2 => 'rtf',
        ],
        'type' => 'application/wps-office.doc',
        'document' => 'Microsoft Word',
        'sub-class-of' => 'application/vnd.ms-word.document.macroenabled.12',
    ],
    1706 => [
        'extension' => [
            0 => 'dot',
            1 => 'dotm',
        ],
        'type' => 'application/wps-office.dot',
        'document' => 'Microsoft Word Template',
        'sub-class-of' => 'application/msword',
    ],
    1707 => [
        'extension' => [
            0 => 'dotx',
        ],
        'type' => 'application/wps-office.dotx',
        'document' => 'Microsoft Word Template',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    ],
    1708 => [
        'extension' => [
            0 => 'docx',
        ],
        'type' => 'application/wps-office.docx',
        'document' => 'Microsoft Word',
        'sub-class-of' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
    1709 => [
        'extension' => [
            0 => 'wps',
        ],
        'type' => 'application/wps-office.wps',
        'document' => 'WPS Writer Document',
        'sub-class-of' => 'application/x-ole-storage',
    ],
    1710 => [
        'extension' => [
            0 => 'wpt',
        ],
        'type' => 'application/wps-office.wpt',
        'document' => 'WPS Writer Template',
        'sub-class-of' => 'application/x-ole-storage',
    ],
    1711 => [
        'extension' => [
            0 => 'wpss',
        ],
        'type' => 'application/wps-office.wpss',
        'document' => 'WPS Writer Security',
    ],
    1712 => [
        'extension' => [
            0 => 'wpso',
        ],
        'type' => 'application/wps-office.wpso',
        'document' => 'WPS Writer Outgoing Document',
    ],
    1713 => [
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
    1714 => [
        'extension' => [
            0 => 'manifest',
        ],
        'type' => 'text/cache-manifest',
        'document' => 'Web application cache file',
        'sub-class-of' => 'text/plain',
    ],
    1715 => [
        'extension' => [
            0 => 'vcs',
            1 => 'ics',
        ],
        'type' => 'text/calendar',
        'document' => 'VCS/ICS calendar',
        'acronym' => 'VCS/ICS',
        'expanded-acronym' => 'vCalendar/iCalendar',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/ics',
    ],
    1716 => [
        'extension' => [
            0 => 'css',
        ],
        'type' => 'text/css',
        'document' => 'CSS stylesheet',
        'acronym' => 'CSS',
        'expanded-acronym' => 'Cascading Style Sheets',
        'sub-class-of' => 'text/plain',
    ],
    1717 => [
        'extension' => [
            0 => 'csvs',
        ],
        'type' => 'text/csv-schema',
        'document' => 'CSV Schema document',
        'acronym' => 'CSV',
        'expanded-acronym' => 'Comma Separated Values',
        'sub-class-of' => 'text/plain',
    ],
    1718 => [
        'extension' => [
            0 => 'csv',
        ],
        'type' => 'text/csv',
        'document' => 'CSV document',
        'acronym' => 'CSV',
        'expanded-acronym' => 'Comma Separated Values',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-csv',
    ],
    1719 => [
        'extension' => [
        ],
        'type' => 'text/enriched',
        'document' => 'enriched text document',
        'sub-class-of' => 'text/plain',
    ],
    1720 => [
        'extension' => [
            0 => 'html',
            1 => 'htm',
        ],
        'type' => 'text/html',
        'document' => 'HTML document',
        'acronym' => 'HTML',
        'expanded-acronym' => 'HyperText Markup Language',
        'sub-class-of' => 'text/plain',
    ],
    1721 => [
        'extension' => [
        ],
        'type' => 'text/htmlh',
        'document' => 'help page',
        'sub-class-of' => 'text/plain',
    ],
    1722 => [
        'extension' => [
            0 => 'lrs',
        ],
        'type' => 'text/lrs',
        'document' => 'SONY E-book source format',
    ],
    1723 => [
        'extension' => [
            0 => 'md',
            1 => 'mkd',
            2 => 'markdown',
        ],
        'type' => 'text/markdown',
        'document' => 'Markdown document',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-markdown',
    ],
    1724 => [
        'extension' => [
            0 => 'org',
        ],
        'type' => 'text/org',
        'document' => 'Org-mode file',
        'sub-class-of' => 'text/plain',
    ],
    1725 => [
        'extension' => [
            0 => 'txt',
            1 => 'asc',
            2 => '*,v',
            3 => 'doc',
        ],
        'type' => 'text/plain',
        'document' => 'plain text document',
    ],
    1726 => [
        'extension' => [
        ],
        'type' => 'text/rfc822-headers',
        'document' => 'email headers',
        'sub-class-of' => 'text/plain',
    ],
    1727 => [
        'extension' => [
            0 => 'rtx',
        ],
        'type' => 'text/richtext',
        'document' => 'rich text document',
        'sub-class-of' => 'text/plain',
    ],
    1728 => [
        'extension' => [
            0 => 'rs',
        ],
        'type' => 'text/rust',
        'document' => 'Rust source code',
        'sub-class-of' => 'text/plain',
    ],
    1729 => [
        'extension' => [
            0 => 'sgml',
            1 => 'sgm',
        ],
        'type' => 'text/sgml',
        'document' => 'SGML document',
        'acronym' => 'SGML',
        'expanded-acronym' => 'Standard Generalized Markup Language',
        'sub-class-of' => 'text/plain',
    ],
    1730 => [
        'extension' => [
            0 => 'sylk',
            1 => 'slk',
        ],
        'type' => 'text/spreadsheet',
        'document' => 'spreadsheet interchange document',
        'sub-class-of' => 'text/plain',
    ],
    1731 => [
        'extension' => [
            0 => 'tsv',
        ],
        'type' => 'text/tab-separated-values',
        'document' => 'TSV document',
        'acronym' => 'TSV',
        'expanded-acronym' => 'Tab Separated Values',
        'sub-class-of' => 'text/plain',
    ],
    1732 => [
        'extension' => [
            0 => 'tcl',
            1 => 'tk',
        ],
        'type' => 'text/tcl',
        'document' => 'Tcl script',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-tcl',
    ],
    1733 => [
        'extension' => [
            0 => 'tr',
            1 => 'roff',
            2 => 't',
        ],
        'type' => 'text/troff',
        'document' => 'Troff document',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-troff',
    ],
    1734 => [
        'extension' => [
            0 => 'ttl',
        ],
        'type' => 'text/turtle',
        'document' => 'Turtle document',
        'sub-class-of' => 'text/plain',
    ],
    1735 => [
        'extension' => [
            0 => 'vbs',
        ],
        'type' => 'text/vbscript',
        'document' => 'VBScript program',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/vbs',
    ],
    1736 => [
        'extension' => [
            0 => 'vcard',
            1 => 'vcf',
            2 => 'vct',
            3 => 'gcrd',
        ],
        'type' => 'text/vcard',
        'document' => 'electronic business card',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-vcard',
    ],
    1737 => [
        'extension' => [
            0 => 'abc',
        ],
        'type' => 'text/vnd.abc',
        'document' => 'abc musical notation file',
        'sub-class-of' => 'text/plain',
    ],
    1738 => [
        'extension' => [
            0 => 'gv',
            1 => 'dot',
        ],
        'type' => 'text/vnd.graphviz',
        'document' => 'Graphviz DOT graph',
        'sub-class-of' => 'text/plain',
    ],
    1739 => [
        'extension' => [
            0 => 'kcrash',
            1 => 'kcrash.txt',
        ],
        'type' => 'text/vnd.kde.kcrash-report',
        'document' => 'KCrash Report',
        'sub-class-of' => 'text/plain',
    ],
    1740 => [
        'extension' => [
            0 => 'rt',
        ],
        'type' => 'text/vnd.rn-realtext',
        'document' => 'RealText document',
        'sub-class-of' => 'text/plain',
    ],
    1741 => [
        'extension' => [
            0 => 'mc2',
        ],
        'type' => 'text/vnd.senx.warpscript',
        'document' => 'WarpScript source code',
        'sub-class-of' => 'text/plain',
    ],
    1742 => [
        'extension' => [
            0 => 'jad',
        ],
        'type' => 'text/vnd.sun.j2me.app-descriptor',
        'document' => 'JAD document',
        'acronym' => 'JAD',
        'expanded-acronym' => 'Java Application Descriptor',
        'sub-class-of' => 'text/plain',
    ],
    1743 => [
        'extension' => [
            0 => 'ts',
        ],
        'type' => 'text/vnd.trolltech.linguist',
        'document' => 'message catalog',
        'sub-class-of' => 'application/xml',
        'alias' => 'text/vnd.qt.linguist',
    ],
    1744 => [
        'extension' => [
            0 => 'wml',
        ],
        'type' => 'text/vnd.wap.wml',
        'document' => 'WML document',
        'acronym' => 'WML',
        'expanded-acronym' => 'Wireless Markup Language',
        'sub-class-of' => 'application/xml',
    ],
    1745 => [
        'extension' => [
            0 => 'wmls',
        ],
        'type' => 'text/vnd.wap.wmlscript',
        'document' => 'WMLScript program',
        'sub-class-of' => 'text/plain',
    ],
    1746 => [
        'extension' => [
            0 => 'vtt',
        ],
        'type' => 'text/vtt',
        'document' => 'WebVTT subtitles',
        'acronym' => 'VTT',
        'expanded-acronym' => 'Video Text Tracks',
        'sub-class-of' => 'text/plain',
    ],
    1747 => [
        'extension' => [
            0 => 'adb',
            1 => 'ads',
        ],
        'type' => 'text/x-adasrc',
        'document' => 'Ada source code',
        'sub-class-of' => 'text/plain',
    ],
    1748 => [
        'extension' => [
            0 => 'AUTHORS',
        ],
        'type' => 'text/x-authors',
        'document' => 'author list',
        'sub-class-of' => 'text/plain',
    ],
    1749 => [
        'extension' => [
            0 => 'bib',
        ],
        'type' => 'text/x-bibtex',
        'document' => 'BibTeX document',
        'sub-class-of' => 'text/plain',
    ],
    1750 => [
        'extension' => [
            0 => 'hh',
            1 => 'hp',
            2 => 'hpp',
            3 => 'h++',
            4 => 'hxx',
        ],
        'type' => 'text/x-c++hdr',
        'document' => 'C++ header',
        'sub-class-of' => 'text/x-chdr',
    ],
    1751 => [
        'extension' => [
            0 => 'cpp',
            1 => 'cxx',
            2 => 'cc',
            3 => 'C',
            4 => 'c++',
        ],
        'type' => 'text/x-c++src',
        'document' => 'C++ source code',
        'sub-class-of' => 'text/x-csrc',
    ],
    1752 => [
        'extension' => [
            0 => 'ChangeLog',
        ],
        'type' => 'text/x-changelog',
        'document' => 'ChangeLog document',
        'sub-class-of' => 'text/plain',
    ],
    1753 => [
        'extension' => [
            0 => 'h',
        ],
        'type' => 'text/x-chdr',
        'document' => 'C header',
        'sub-class-of' => 'text/x-csrc',
    ],
    1754 => [
        'extension' => [
            0 => 'cmake',
            1 => 'CMakeLists.txt',
        ],
        'type' => 'text/x-cmake',
        'document' => 'CMake source code',
        'sub-class-of' => 'text/plain',
    ],
    1755 => [
        'extension' => [
            0 => 'cbl',
            1 => 'cob',
        ],
        'type' => 'text/x-cobol',
        'document' => 'COBOL source code',
        'acronym' => 'COBOL',
        'expanded-acronym' => 'COmmon Business Oriented Language',
        'sub-class-of' => 'text/plain',
    ],
    1756 => [
        'extension' => [
            0 => 'asd',
            1 => 'fasl',
            2 => 'lisp',
            3 => 'ros',
        ],
        'type' => 'text/x-common-lisp',
        'document' => 'Common Lisp source code',
        'sub-class-of' => 'text/plain',
    ],
    1757 => [
        'extension' => [
            0 => 'COPYING',
        ],
        'type' => 'text/x-copying',
        'document' => 'license terms',
        'sub-class-of' => 'text/plain',
    ],
    1758 => [
        'extension' => [
            0 => 'CREDITS',
        ],
        'type' => 'text/x-credits',
        'document' => 'author credits',
        'sub-class-of' => 'text/plain',
    ],
    1759 => [
        'extension' => [
            0 => 'cr',
        ],
        'type' => 'text/x-crystal',
        'document' => 'Crystal source code',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/crystal',
    ],
    1760 => [
        'extension' => [
            0 => 'cs',
        ],
        'type' => 'text/x-csharp',
        'document' => 'C# source code',
        'sub-class-of' => 'text/x-csrc',
    ],
    1761 => [
        'extension' => [
            0 => 'c',
        ],
        'type' => 'text/x-csrc',
        'document' => 'C source code',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-c',
    ],
    1762 => [
        'extension' => [
            0 => 'dart',
        ],
        'type' => 'text/x-dart',
        'document' => 'Dart source code',
        'sub-class-of' => 'text/plain',
    ],
    1763 => [
        'extension' => [
            0 => 'service',
        ],
        'type' => 'text/x-dbus-service',
        'document' => 'D-Bus service file',
        'sub-class-of' => 'text/plain',
    ],
    1764 => [
        'extension' => [
            0 => 'dcl',
        ],
        'type' => 'text/x-dcl',
        'document' => 'DCL script',
        'acronym' => 'DCL',
        'expanded-acronym' => 'Data Conversion Laboratory',
        'sub-class-of' => 'text/plain',
    ],
    1765 => [
        'extension' => [
            0 => 'dsl',
        ],
        'type' => 'text/x-dsl',
        'document' => 'DSSSL document',
        'acronym' => 'DSSSL',
        'expanded-acronym' => 'Document Style Semantics and Specification Language',
        'sub-class-of' => 'text/plain',
    ],
    1766 => [
        'extension' => [
            0 => 'd',
            1 => 'di',
        ],
        'type' => 'text/x-dsrc',
        'document' => 'D source code',
        'sub-class-of' => 'text/x-csrc',
    ],
    1767 => [
        'extension' => [
            0 => 'e',
            1 => 'eif',
        ],
        'type' => 'text/x-eiffel',
        'document' => 'Eiffel source code',
        'sub-class-of' => 'text/plain',
    ],
    1768 => [
        'extension' => [
            0 => 'ex',
            1 => 'exs',
        ],
        'type' => 'text/x-elixir',
        'document' => 'Elixir source code',
        'sub-class-of' => 'text/plain',
    ],
    1769 => [
        'extension' => [
            0 => 'el',
        ],
        'type' => 'text/x-emacs-lisp',
        'document' => 'Emacs Lisp source code',
        'sub-class-of' => 'text/plain',
    ],
    1770 => [
        'extension' => [
            0 => 'erl',
        ],
        'type' => 'text/x-erlang',
        'document' => 'Erlang source code',
        'sub-class-of' => 'text/plain',
    ],
    1771 => [
        'extension' => [
            0 => 'f',
            1 => 'f90',
            2 => 'f95',
            3 => 'for',
        ],
        'type' => 'text/x-fortran',
        'document' => 'Fortran source code',
        'sub-class-of' => 'text/plain',
    ],
    1772 => [
        'extension' => [
            0 => 'gs',
        ],
        'type' => 'text/x-genie',
        'document' => 'Genie source code',
        'sub-class-of' => 'text/plain',
    ],
    1773 => [
        'extension' => [
            0 => 'pot',
        ],
        'type' => 'text/x-gettext-translation-template',
        'document' => 'translation template',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-pot',
    ],
    1774 => [
        'extension' => [
            0 => 'po',
        ],
        'type' => 'text/x-gettext-translation',
        'document' => 'translation file',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/x-gettext',
    ],
    1775 => [
        'extension' => [
            0 => 'feature',
        ],
        'type' => 'text/x-gherkin',
        'document' => 'Gherkin document',
        'sub-class-of' => 'text/plain',
    ],
    1776 => [
        'extension' => [
            0 => 'go',
        ],
        'type' => 'text/x-go',
        'document' => 'Go source code',
        'sub-class-of' => 'text/plain',
    ],
    1777 => [
        'extension' => [
            0 => 'gvp',
        ],
        'type' => 'text/x-google-video-pointer',
        'document' => 'Google Video Pointer shortcut',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/google-video-pointer',
    ],
    1778 => [
        'extension' => [
            0 => 'gradle',
        ],
        'type' => 'text/x-gradle',
        'document' => 'Gradle scripts',
        'sub-class-of' => 'text/x-groovy',
    ],
    1779 => [
        'extension' => [
            0 => 'groovy',
            1 => 'gvy',
            2 => 'gy',
            3 => 'gsh',
        ],
        'type' => 'text/x-groovy',
        'document' => 'Groovy source code',
        'sub-class-of' => 'text/x-csrc',
    ],
    1780 => [
        'extension' => [
            0 => 'hs',
        ],
        'type' => 'text/x-haskell',
        'document' => 'Haskell source code',
        'sub-class-of' => 'text/plain',
    ],
    1781 => [
        'extension' => [
            0 => 'hex',
        ],
        'type' => 'text/x-hex',
        'document' => 'Intel® hexadecimal object file',
        'sub-class-of' => 'text/plain',
    ],
    1782 => [
        'extension' => [
            0 => 'idl',
        ],
        'type' => 'text/x-idl',
        'document' => 'IDL document',
        'acronym' => 'IDL',
        'expanded-acronym' => 'Interface Definition Language',
        'sub-class-of' => 'text/plain',
    ],
    1783 => [
        'extension' => [
            0 => 'imy',
            1 => 'ime',
        ],
        'type' => 'text/x-iMelody',
        'document' => 'iMelody ringtone',
        'sub-class-of' => 'text/plain',
        'alias' => 'audio/iMelody',
    ],
    1784 => [
        'extension' => [
            0 => 'INSTALL',
        ],
        'type' => 'text/x-install',
        'document' => 'installation instructions',
        'sub-class-of' => 'text/plain',
    ],
    1785 => [
        'extension' => [
            0 => 'iptables',
        ],
        'type' => 'text/x-iptables',
        'document' => 'iptables configuration file',
        'sub-class-of' => 'text/plain',
    ],
    1786 => [
        'extension' => [
            0 => 'java',
        ],
        'type' => 'text/x-java',
        'document' => 'Java source code',
        'sub-class-of' => 'text/x-csrc',
    ],
    1787 => [
        'extension' => [
            0 => 'ksy',
        ],
        'type' => 'text/x-kaitai-struct',
        'document' => 'Kaitai Struct definition file',
        'sub-class-of' => 'application/x-yaml',
    ],
    1788 => [
        'extension' => [
            0 => 'katefl',
        ],
        'type' => 'text/x-katefilelist',
        'document' => 'Kate file list loader plugin list',
        'sub-class-of' => 'text/plain',
    ],
    1789 => [
        'extension' => [
            0 => 'kt',
        ],
        'type' => 'text/x-kotlin',
        'document' => 'Kotlin source code',
        'sub-class-of' => 'text/plain',
    ],
    1790 => [
        'extension' => [
            0 => 'ldif',
        ],
        'type' => 'text/x-ldif',
        'document' => 'LDIF address book',
        'acronym' => 'LDIF',
        'expanded-acronym' => 'LDAP Data Interchange Format',
        'sub-class-of' => 'text/plain',
    ],
    1791 => [
        'extension' => [
            0 => 'ly',
        ],
        'type' => 'text/x-lilypond',
        'document' => 'Lilypond music sheet',
        'sub-class-of' => 'text/plain',
    ],
    1792 => [
        'extension' => [
            0 => 'lhs',
        ],
        'type' => 'text/x-literate-haskell',
        'document' => 'LHS source code',
        'acronym' => 'LHS',
        'expanded-acronym' => 'Literate Haskell source code',
        'sub-class-of' => 'text/plain',
    ],
    1793 => [
        'extension' => [
            0 => 'log',
        ],
        'type' => 'text/x-log',
        'document' => 'application log',
        'sub-class-of' => 'text/plain',
    ],
    1794 => [
        'extension' => [
            0 => 'lua',
        ],
        'type' => 'text/x-lua',
        'document' => 'Lua script',
        'sub-class-of' => 'text/plain',
    ],
    1795 => [
        'extension' => [
            0 => 'makefile',
            1 => 'GNUmakefile',
            2 => 'mk',
            3 => 'mak',
            4 => 'Makefile.*',
        ],
        'type' => 'text/x-makefile',
        'document' => 'Makefile build file',
        'sub-class-of' => 'text/plain',
    ],
    1796 => [
        'extension' => [
            0 => 'm',
        ],
        'type' => 'text/x-matlab',
        'document' => 'MATLAB file',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-octave',
    ],
    1797 => [
        'extension' => [
            0 => 'pom.xml',
            1 => 'settings.xml',
        ],
        'type' => 'text/x-maven+xml',
        'document' => 'Maven description file',
        'sub-class-of' => 'application/xml',
    ],
    1798 => [
        'extension' => [
            0 => 'meson.build',
            1 => 'meson_options.txt',
        ],
        'type' => 'text/x-meson',
        'document' => 'Meson source code',
        'sub-class-of' => 'text/plain',
    ],
    1799 => [
        'extension' => [
            0 => 'sub',
        ],
        'type' => 'text/x-microdvd',
        'document' => 'MicroDVD subtitles',
        'sub-class-of' => 'text/plain',
    ],
    1800 => [
        'extension' => [
            0 => 'moc',
        ],
        'type' => 'text/x-moc',
        'document' => 'Qt MOC file',
        'acronym' => 'Qt MOC',
        'expanded-acronym' => 'Qt Meta Object Compiler',
        'sub-class-of' => 'text/plain',
    ],
    1801 => [
        'extension' => [
            0 => 'mo',
        ],
        'type' => 'text/x-modelica',
        'document' => 'Modelica model',
        'sub-class-of' => 'text/plain',
    ],
    1802 => [
        'extension' => [
            0 => 'mof',
        ],
        'type' => 'text/x-mof',
        'document' => 'MOF file',
        'acronym' => 'MOF',
        'expanded-acronym' => 'Windows Managed Object File',
        'sub-class-of' => 'text/x-csrc',
    ],
    1803 => [
        'extension' => [
            0 => 'mpl',
        ],
        'type' => 'text/x-mpl2',
        'document' => 'MPlayer2 subtitles',
        'sub-class-of' => 'text/plain',
    ],
    1804 => [
        'extension' => [
            0 => 'sub',
        ],
        'type' => 'text/x-mpsub',
        'document' => 'MPSub subtitles',
        'acronym' => 'MPSub',
        'expanded-acronym' => 'MPlayer Subtitle',
        'sub-class-of' => 'text/plain',
    ],
    1805 => [
        'extension' => [
            0 => 'mrml',
            1 => 'mrl',
        ],
        'type' => 'text/x-mrml',
        'document' => 'MRML playlist',
        'acronym' => 'MRML',
        'expanded-acronym' => 'Multimedia Retrieval Markup Language',
        'sub-class-of' => 'application/xml',
    ],
    1806 => [
        'extension' => [
            0 => 'reg',
        ],
        'type' => 'text/x-ms-regedit',
        'document' => 'Windows Registry extract',
        'sub-class-of' => 'text/plain',
    ],
    1807 => [
        'extension' => [
            0 => 'mup',
            1 => 'not',
        ],
        'type' => 'text/x-mup',
        'document' => 'Mup musical composition document',
        'sub-class-of' => 'text/plain',
    ],
    1808 => [
        'extension' => [
            0 => 'nfo',
        ],
        'type' => 'text/x-nfo',
        'document' => 'NFO document',
        'sub-class-of' => 'text/x-readme',
    ],
    1809 => [
        'extension' => [
            0 => 'm',
        ],
        'type' => 'text/x-objcsrc',
        'document' => 'Objective-C source code',
        'sub-class-of' => 'text/x-csrc',
    ],
    1810 => [
        'extension' => [
            0 => 'ml',
            1 => 'mli',
        ],
        'type' => 'text/x-ocaml',
        'document' => 'OCaml source code',
        'sub-class-of' => 'text/plain',
    ],
    1811 => [
        'extension' => [
            0 => 'ocl',
        ],
        'type' => 'text/x-ocl',
        'document' => 'OCL file',
        'acronym' => 'OCL',
        'expanded-acronym' => 'Object Constraint Language',
        'sub-class-of' => 'text/plain',
    ],
    1812 => [
        'extension' => [
            0 => 'ooc',
        ],
        'type' => 'text/x-ooc',
        'document' => 'OOC source code',
        'acronym' => 'OOC',
        'expanded-acronym' => 'Out Of Class',
        'sub-class-of' => 'text/x-csrc',
    ],
    1813 => [
        'extension' => [
            0 => 'cl',
        ],
        'type' => 'text/x-opencl-src',
        'document' => 'OpenCL source code',
        'acronym' => 'OpenCL',
        'expanded-acronym' => 'Open Computing Language',
        'sub-class-of' => 'text/x-csrc',
    ],
    1814 => [
        'extension' => [
            0 => 'opml',
        ],
        'type' => 'text/x-opml+xml',
        'document' => 'OPML syndication feed',
        'sub-class-of' => 'application/xml',
        'alias' => 'text/x-opml',
    ],
    1815 => [
        'extension' => [
            0 => 'p',
            1 => 'pas',
        ],
        'type' => 'text/x-pascal',
        'document' => 'Pascal source code',
        'sub-class-of' => 'text/plain',
    ],
    1816 => [
        'extension' => [
            0 => 'diff',
            1 => 'patch',
        ],
        'type' => 'text/x-patch',
        'document' => 'differences between files',
        'sub-class-of' => 'text/plain',
        'alias' => 'text/x-diff',
    ],
    1817 => [
        'extension' => [
            0 => 'PKGBUILD',
        ],
        'type' => 'text/x-pkgbuild',
        'document' => 'PKGBUILD files',
        'sub-class-of' => 'text/plain',
    ],
    1818 => [
        'extension' => [
            0 => 'py',
            1 => 'pyx',
            2 => 'wsgi',
        ],
        'type' => 'text/x-python',
        'document' => 'Python script',
        'sub-class-of' => 'text/plain',
    ],
    1819 => [
        'extension' => [
            0 => 'py',
            1 => 'py3',
            2 => 'py3x',
            3 => 'pyi',
        ],
        'type' => 'text/x-python3',
        'document' => 'Python 3 script',
        'sub-class-of' => 'text/x-python',
    ],
    1820 => [
        'extension' => [
            0 => 'qml',
            1 => 'qmltypes',
            2 => 'qmlproject',
            3 => 'qml',
            4 => 'qmltypes',
            5 => 'qmlproject',
        ],
        'type' => 'text/x-qml',
        'document' => 'Qt Markup Language file',
        'sub-class-of' => 'text/plain',
    ],
    1821 => [
        'extension' => [
            0 => 'README*',
        ],
        'type' => 'text/x-readme',
        'document' => 'README document',
        'sub-class-of' => 'text/plain',
    ],
    1822 => [
        'extension' => [
            0 => 'rej',
        ],
        'type' => 'text/x-reject',
        'document' => 'rejected patch',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/x-reject',
    ],
    1823 => [
        'extension' => [
            0 => 'spec',
        ],
        'type' => 'text/x-rpm-spec',
        'document' => 'RPM spec file',
        'acronym' => 'RPM',
        'expanded-acronym' => 'Red Hat Package Manager',
        'sub-class-of' => 'text/plain',
    ],
    1824 => [
        'extension' => [
            0 => 'rst',
        ],
        'type' => 'text/x-rst',
        'document' => 'reStructuredText document',
        'sub-class-of' => 'text/plain',
    ],
    1825 => [
        'extension' => [
            0 => 'sage',
        ],
        'type' => 'text/x-sagemath',
        'document' => 'SageMath script',
        'sub-class-of' => 'text/x-python',
    ],
    1826 => [
        'extension' => [
            0 => 'sass',
        ],
        'type' => 'text/x-sass',
        'document' => 'Sass CSS pre-processor file',
        'acronym' => 'Sass',
        'expanded-acronym' => 'Syntactically Awesome Style Sheets',
        'sub-class-of' => 'text/plain',
    ],
    1827 => [
        'extension' => [
            0 => 'scala',
            1 => 'sc',
        ],
        'type' => 'text/x-scala',
        'document' => 'Scala source code',
        'sub-class-of' => 'text/plain',
    ],
    1828 => [
        'extension' => [
            0 => 'scm',
            1 => 'ss',
        ],
        'type' => 'text/x-scheme',
        'document' => 'Scheme source code',
        'sub-class-of' => 'text/plain',
    ],
    1829 => [
        'extension' => [
            0 => 'SConstruct',
            1 => 'SConscript',
            2 => 'SConscript.*',
        ],
        'type' => 'text/x-scons',
        'document' => 'SCons configuration file',
        'sub-class-of' => 'text/x-python',
    ],
    1830 => [
        'extension' => [
            0 => 'scss',
        ],
        'type' => 'text/x-scss',
        'document' => 'SCSS pre-processor file',
        'acronym' => 'SCSS',
        'expanded-acronym' => 'Sassy CSS',
        'sub-class-of' => 'text/plain',
    ],
    1831 => [
        'extension' => [
            0 => 'etx',
        ],
        'type' => 'text/x-setext',
        'document' => 'Setext document',
        'sub-class-of' => 'text/plain',
    ],
    1832 => [
        'extension' => [
            0 => 'ssa',
            1 => 'ass',
        ],
        'type' => 'text/x-ssa',
        'document' => 'SSA subtitles',
        'acronym' => 'SSA',
        'expanded-acronym' => 'SubStation Alpha',
        'sub-class-of' => 'text/plain',
    ],
    1833 => [
        'extension' => [
            0 => 'sub',
        ],
        'type' => 'text/x-subviewer',
        'document' => 'SubViewer subtitles',
        'sub-class-of' => 'text/plain',
    ],
    1834 => [
        'extension' => [
            0 => 'svh',
        ],
        'type' => 'text/x-svhdr',
        'document' => 'SystemVerilog header',
        'sub-class-of' => 'text/x-verilog',
    ],
    1835 => [
        'extension' => [
            0 => 'sv',
        ],
        'type' => 'text/x-svsrc',
        'document' => 'SystemVerilog source code',
        'sub-class-of' => 'text/x-verilog',
    ],
    1836 => [
        'extension' => [
            0 => 'automount',
            1 => 'device',
            2 => 'mount',
            3 => 'path',
            4 => 'scope',
            5 => 'service',
            6 => 'slice',
            7 => 'socket',
            8 => 'swap',
            9 => 'target',
            10 => 'timer',
        ],
        'type' => 'text/x-systemd-unit',
        'document' => 'systemd unit file',
        'sub-class-of' => 'text/plain',
    ],
    1837 => [
        'extension' => [
            0 => 'tex',
            1 => 'ltx',
            2 => 'sty',
            3 => 'cls',
            4 => 'dtx',
            5 => 'ins',
            6 => 'latex',
        ],
        'type' => 'text/x-tex',
        'document' => 'TeX document',
        'sub-class-of' => 'text/plain',
        'alias' => 'application/x-tex',
    ],
    1838 => [
        'extension' => [
            0 => 'texi',
            1 => 'texinfo',
        ],
        'type' => 'text/x-texinfo',
        'document' => 'TeXInfo document',
        'sub-class-of' => 'text/plain',
    ],
    1839 => [
        'extension' => [
            0 => 'me',
        ],
        'type' => 'text/x-troff-me',
        'document' => 'Troff ME input document',
        'sub-class-of' => 'text/plain',
    ],
    1840 => [
        'extension' => [
            0 => 'mm',
        ],
        'type' => 'text/x-troff-mm',
        'document' => 'Troff MM input document',
        'sub-class-of' => 'text/plain',
    ],
    1841 => [
        'extension' => [
            0 => 'ms',
        ],
        'type' => 'text/x-troff-ms',
        'document' => 'Troff MS input document',
        'sub-class-of' => 'text/plain',
    ],
    1842 => [
        'extension' => [
            0 => 'twig',
        ],
        'type' => 'text/x-twig',
        'document' => 'Twig template',
        'sub-class-of' => 'text/plain',
    ],
    1843 => [
        'extension' => [
            0 => 't2t',
        ],
        'type' => 'text/x-txt2tags',
        'document' => 'txt2tags document',
        'sub-class-of' => 'text/plain',
    ],
    1844 => [
        'extension' => [
            0 => 'uil',
        ],
        'type' => 'text/x-uil',
        'document' => 'X-Motif UIL table',
        'sub-class-of' => 'text/plain',
    ],
    1845 => [
        'extension' => [
        ],
        'type' => 'text/x-uri',
        'document' => 'resource location',
        'sub-class-of' => 'text/plain',
    ],
    1846 => [
        'extension' => [
            0 => 'uue',
        ],
        'type' => 'text/x-uuencode',
        'document' => 'uuencoded file',
        'sub-class-of' => 'text/plain',
        'alias' => 'zz-application/zz-winassoc-uu',
    ],
    1847 => [
        'extension' => [
            0 => 'vala',
            1 => 'vapi',
        ],
        'type' => 'text/x-vala',
        'document' => 'Vala source code',
        'sub-class-of' => 'text/x-csrc',
    ],
    1848 => [
        'extension' => [
            0 => 'v',
        ],
        'type' => 'text/x-verilog',
        'document' => 'Verilog source code',
        'sub-class-of' => 'text/plain',
    ],
    1849 => [
        'extension' => [
            0 => 'vhd',
            1 => 'vhdl',
        ],
        'type' => 'text/x-vhdl',
        'document' => 'VHDL source code',
        'acronym' => 'VHDL',
        'expanded-acronym' => 'Very-High-Speed Integrated Circuit Hardware Description Language',
        'sub-class-of' => 'text/plain',
    ],
    1850 => [
        'extension' => [
            0 => 'xmi',
        ],
        'type' => 'text/x-xmi',
        'document' => 'XMI file',
        'acronym' => 'XMI',
        'expanded-acronym' => 'XML Metadata Interchange',
        'sub-class-of' => 'application/xml',
    ],
    1851 => [
        'extension' => [
            0 => 'fo',
            1 => 'xslfo',
        ],
        'type' => 'text/x-xslfo',
        'document' => 'XSL FO file',
        'acronym' => 'XSL FO',
        'expanded-acronym' => 'XSL Formatting Objects',
        'sub-class-of' => 'application/xml',
    ],
    1852 => [
        'extension' => [
            0 => 'gcode',
        ],
        'type' => 'text/x.gcode',
        'document' => 'G-code file',
        'sub-class-of' => 'text/plain',
    ],
    1853 => [
        'extension' => [
        ],
        'type' => 'text/xmcd',
        'document' => 'XMCD CD database',
        'sub-class-of' => 'text/plain',
    ],
    1854 => [
        'extension' => [
            0 => '3gp',
            1 => '3gpp',
            2 => '3ga',
        ],
        'type' => 'video/3gpp',
        'document' => '3GPP multimedia file',
        'acronym' => '3GPP',
        'expanded-acronym' => '3rd Generation Partnership Project',
        'sub-class-of' => 'video/mp4',
        'alias' => 'audio/x-rn-3gpp-amr-wb-encrypted',
    ],
    1855 => [
        'extension' => [
            0 => '3g2',
            1 => '3gp2',
            2 => '3gpp2',
        ],
        'type' => 'video/3gpp2',
        'document' => '3GPP2 multimedia file',
        'acronym' => '3GPP2',
        'expanded-acronym' => '3rd Generation Partnership Project 2',
        'alias' => 'audio/3gpp2',
    ],
    1856 => [
        'extension' => [
            0 => 'axv',
        ],
        'type' => 'video/annodex',
        'document' => 'Annodex video',
        'sub-class-of' => 'application/annodex',
        'alias' => 'video/x-annodex',
    ],
    1857 => [
        'extension' => [
            0 => 'dv',
        ],
        'type' => 'video/dv',
        'document' => 'DV video',
        'acronym' => 'DV',
        'expanded-acronym' => 'Digital Video',
    ],
    1858 => [
        'extension' => [
        ],
        'type' => 'video/isivideo',
        'document' => 'ISI video',
    ],
    1859 => [
        'extension' => [
            0 => 'mj2',
            1 => 'mjp2',
        ],
        'type' => 'video/mj2',
        'document' => 'JPEG-2000 MJ2 video',
        'acronym' => 'MJ2',
        'expanded-acronym' => 'Motion JPEG-2000',
    ],
    1860 => [
        'extension' => [
            0 => 'm2t',
            1 => 'm2ts',
            2 => 'ts',
            3 => 'mts',
            4 => 'cpi',
            5 => 'clpi',
            6 => 'mpl',
            7 => 'mpls',
            8 => 'bdm',
            9 => 'bdmv',
        ],
        'type' => 'video/mp2t',
        'document' => 'MPEG-2 transport stream',
        'acronym' => 'MPEG-2 TS',
        'expanded-acronym' => 'Moving Picture Experts Group 2 Transport Stream',
    ],
    1861 => [
        'extension' => [
            0 => 'mp4',
            1 => 'm4v',
            2 => 'f4v',
            3 => 'lrv',
        ],
        'type' => 'video/mp4',
        'document' => 'MPEG-4 video',
        'alias' => 'video/x-m4v',
    ],
    1862 => [
        'extension' => [
            0 => 'mpeg',
            1 => 'mpg',
            2 => 'mp2',
            3 => 'mpe',
            4 => 'vob',
            5 => '[0-9][0-9][0-9].vdr',
        ],
        'type' => 'video/mpeg',
        'document' => 'MPEG video',
        'acronym' => 'MPEG',
        'expanded-acronym' => 'Moving Picture Experts Group',
        'alias' => 'video/x-mpeg2',
    ],
    1863 => [
        'extension' => [
            0 => 'ogv',
            1 => 'ogg',
        ],
        'type' => 'video/ogg',
        'document' => 'Ogg video',
        'sub-class-of' => 'application/ogg',
        'alias' => 'video/x-ogg',
    ],
    1864 => [
        'extension' => [
            0 => 'qt',
            1 => 'mov',
            2 => 'moov',
            3 => 'qtvr',
        ],
        'type' => 'video/quicktime',
        'document' => 'QuickTime video',
    ],
    1865 => [
        'extension' => [
            0 => 'm1u',
            1 => 'm4u',
            2 => 'mxu',
        ],
        'type' => 'video/vnd.mpegurl',
        'document' => 'Video playlist',
        'sub-class-of' => 'text/plain',
        'alias' => 'video/x-mpegurl',
    ],
    1866 => [
        'extension' => [
            0 => 'bik',
            1 => 'bk2',
        ],
        'type' => 'video/vnd.radgamettools.bink',
        'document' => 'Bink Video',
    ],
    1867 => [
        'extension' => [
            0 => 'smk',
        ],
        'type' => 'video/vnd.radgamettools.smacker',
        'document' => 'Smacker Video',
    ],
    1868 => [
        'extension' => [
            0 => 'rv',
            1 => 'rvx',
        ],
        'type' => 'video/vnd.rn-realvideo',
        'document' => 'RealVideo document',
        'alias' => 'video/x-real-video',
    ],
    1869 => [
        'extension' => [
            0 => 'viv',
            1 => 'vivo',
        ],
        'type' => 'video/vnd.vivo',
        'document' => 'Vivo video',
        'alias' => 'video/vivo',
    ],
    1870 => [
        'extension' => [
        ],
        'type' => 'video/wavelet',
        'document' => 'Wavelet video',
    ],
    1871 => [
        'extension' => [
            0 => 'webm',
        ],
        'type' => 'video/webm',
        'document' => 'WebM video',
    ],
    1872 => [
        'extension' => [
            0 => 'anim[1-9j]',
        ],
        'type' => 'video/x-anim',
        'document' => 'ANIM animation',
    ],
    1873 => [
        'extension' => [
            0 => 'fli',
            1 => 'flc',
        ],
        'type' => 'video/x-flic',
        'document' => 'FLIC animation',
        'alias' => 'video/x-fli',
    ],
    1874 => [
        'extension' => [
            0 => 'flv',
        ],
        'type' => 'video/x-flv',
        'document' => 'Flash video',
        'alias' => 'video/flv',
    ],
    1875 => [
        'extension' => [
            0 => 'fxm',
        ],
        'type' => 'video/x-javafx',
        'document' => 'JavaFX video',
        'sub-class-of' => 'video/x-flv',
    ],
    1876 => [
        'extension' => [
            0 => 'mk3d',
        ],
        'type' => 'video/x-matroska-3d',
        'document' => 'Matroska 3D video',
        'sub-class-of' => 'application/x-matroska',
    ],
    1877 => [
        'extension' => [
            0 => 'mkv',
        ],
        'type' => 'video/x-matroska',
        'document' => 'Matroska video',
        'sub-class-of' => 'application/x-matroska',
    ],
    1878 => [
        'extension' => [
            0 => 'mjpeg',
            1 => 'mjpg',
        ],
        'type' => 'video/x-mjpeg',
        'document' => 'MJPEG video stream',
        'acronym' => 'MJPEG',
        'expanded-acronym' => 'Motion JPEG',
        'sub-class-of' => 'image/jpeg',
    ],
    1879 => [
        'extension' => [
            0 => 'mng',
        ],
        'type' => 'video/x-mng',
        'document' => 'MNG animation',
        'acronym' => 'MNG',
        'expanded-acronym' => 'Multiple-Image Network Graphics',
    ],
    1880 => [
        'extension' => [
            0 => 'wmp',
        ],
        'type' => 'video/x-ms-wmp',
        'document' => 'Microsoft Media Format',
        'sub-class-of' => 'video/x-ms-wmv',
        'alias' => 'application/x-mplayer2',
    ],
    1881 => [
        'extension' => [
            0 => 'wmv',
        ],
        'type' => 'video/x-ms-wmv',
        'document' => 'Windows Media video',
        'sub-class-of' => 'application/vnd.ms-asf',
    ],
    1882 => [
        'extension' => [
            0 => 'avi',
            1 => 'avf',
            2 => 'divx',
        ],
        'type' => 'video/x-msvideo',
        'document' => 'AVI video',
        'acronym' => 'AVI',
        'expanded-acronym' => 'Audio Video Interleave',
        'alias' => 'video/vnd.divx',
    ],
    1883 => [
        'extension' => [
            0 => 'nsv',
        ],
        'type' => 'video/x-nsv',
        'document' => 'NullSoft video',
    ],
    1884 => [
        'extension' => [
            0 => 'ogm',
        ],
        'type' => 'video/x-ogm+ogg',
        'document' => 'OGM video',
        'sub-class-of' => 'video/ogg',
        'alias' => 'video/x-ogm',
    ],
    1885 => [
        'extension' => [
            0 => 'movie',
        ],
        'type' => 'video/x-sgi-movie',
        'document' => 'SGI video',
    ],
    1886 => [
        'extension' => [
            0 => 'ogg',
        ],
        'type' => 'video/x-theora+ogg',
        'document' => 'Ogg Theora video',
        'sub-class-of' => 'video/ogg',
        'alias' => 'video/x-theora',
    ],
    1887 => [
        'extension' => [
        ],
        'type' => 'x-content/audio-cdda',
        'document' => 'audio CD',
    ],
    1888 => [
        'extension' => [
        ],
        'type' => 'x-content/audio-dvd',
        'document' => 'audio DVD',
    ],
    1889 => [
        'extension' => [
        ],
        'type' => 'x-content/audio-player',
        'document' => 'portable audio player',
    ],
    1890 => [
        'extension' => [
        ],
        'type' => 'x-content/blank-bd',
        'document' => 'blank Blu-ray disc',
    ],
    1891 => [
        'extension' => [
        ],
        'type' => 'x-content/blank-cd',
        'document' => 'blank CD disc',
    ],
    1892 => [
        'extension' => [
        ],
        'type' => 'x-content/blank-dvd',
        'document' => 'blank DVD disc',
    ],
    1893 => [
        'extension' => [
        ],
        'type' => 'x-content/blank-hddvd',
        'document' => 'blank HD DVD disc',
    ],
    1894 => [
        'extension' => [
        ],
        'type' => 'x-content/ebook-reader',
        'document' => 'e-book reader',
    ],
    1895 => [
        'extension' => [
        ],
        'type' => 'x-content/image-dcf',
        'document' => 'digital photos',
    ],
    1896 => [
        'extension' => [
        ],
        'type' => 'x-content/image-picturecd',
        'document' => 'Picture CD',
    ],
    1897 => [
        'extension' => [
        ],
        'type' => 'x-content/ostree-repository',
        'document' => 'OSTree software updates',
    ],
    1898 => [
        'extension' => [
        ],
        'type' => 'x-content/software',
        'document' => 'software',
    ],
    1899 => [
        'extension' => [
        ],
        'type' => 'x-content/unix-software',
        'document' => 'UNIX software',
        'sub-class-of' => 'x-content/software',
    ],
    1900 => [
        'extension' => [
        ],
        'type' => 'x-content/video-bluray',
        'document' => 'Blu-ray video disc',
    ],
    1901 => [
        'extension' => [
        ],
        'type' => 'x-content/video-dvd',
        'document' => 'video DVD',
    ],
    1902 => [
        'extension' => [
        ],
        'type' => 'x-content/video-hddvd',
        'document' => 'HD DVD video disc',
    ],
    1903 => [
        'extension' => [
        ],
        'type' => 'x-content/video-svcd',
        'document' => 'Super Video CD',
    ],
    1904 => [
        'extension' => [
        ],
        'type' => 'x-content/video-vcd',
        'document' => 'Video CD',
    ],
    1905 => [
        'extension' => [
        ],
        'type' => 'x-content/win32-software',
        'document' => 'Windows software',
        'sub-class-of' => 'x-content/software',
    ],
    1906 => [
        'extension' => [
            0 => 'sisx',
        ],
        'type' => 'x-epoc/x-sisx-app',
        'document' => 'SISX package',
        'acronym' => 'SIS',
        'expanded-acronym' => 'Symbian Installation File',
    ],
];}