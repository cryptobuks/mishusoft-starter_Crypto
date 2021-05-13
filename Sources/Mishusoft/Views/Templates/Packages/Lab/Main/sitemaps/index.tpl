<style type="text/css">
    :root {
        font-family: sans-serif;
    }

    img {
        border: 0;
    }

    th {
        text-align: start;
        white-space: nowrap;
    }

    th > a {
        color: inherit;
    }

    table.remove-hidden > tbody > tr.hidden-object {
        display: none;
    }

    td {
        white-space: nowrap;
    }

    td > a, td > a:hover {
        color: #000;
        text-decoration: none;
    }

    table, table.ellipsis {
        width: 100% !important;
        table-layout: fixed;
        border-spacing: 0;
    }

    table.ellipsis > tbody > tr > td {
        padding: 0;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* name */
    /* name */
    th:first-child {
        padding-inline-end: 2em;
    }

    /* size */
    th:first-child + th {
        padding-inline-end: 1em;
    }

    td:first-child + td {
        text-align: end;
        padding-inline-end: 1em;
    }

    /* date */
    td:first-child + td + td {
        padding-inline-start: 1em;
        padding-inline-end: .5em;
    }

    /* time */
    td:first-child + td + td + td {
        padding-inline-start: .5em;
    }

</style>

<link rel="stylesheet" media="screen, projection" type="text/css" href="chrome://global/skin/dirListing/dirListing.css">

<h1>Index of sitemaps</h1>
<table>
    <thead>
    <tr>
        <th style="text-align: left;"><span>Name</span></th>
    </tr>
    </thead>
    <tbody>
    {*<tr>
        <td>
            <table class="ellipsis">
                <tbody>
                <tr>
                    <td><a class="file" href="{$layoutParams.root}sitemaps/robots">robots.txt</a></td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>*}
    <tr>
        <td>
            <table class="ellipsis">
                <tbody>
                <tr>
                    <td><a class="file" href="{$layoutParams.root}sitemaps/rssXml">rss.xml</a></td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    <tr>
        <td>
            <table class="ellipsis">
                <tbody>
                <tr>
                    <td><a class="file" href="{$layoutParams.root}sitemaps/sitemapHtml">sitemap.htm</a></td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    <tr>
        <td>
            <table class="ellipsis">
                <tbody>
                <tr>
                    <td><a class="file" href="{$layoutParams.root}sitemaps/sitemapText">sitemap.txt</a></td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    <tr>
        <td>
            <table class="ellipsis">
                <tbody>
                <tr>
                    <td><a class="file" href="{$layoutParams.root}sitemaps/sitemapXml">sitemap.xml</a></td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>