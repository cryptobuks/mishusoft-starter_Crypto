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

    tr {
        line-height: 2;
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

<h1>HTML sitemap</h1>
<table order="">
    <tbody>
    {if isset($pages) && !empty($pages)}
        {foreach item=pgs from=$pages}
            <tr>
                <td>
                    <table class="ellipsis">
                        <tbody>
                        <tr>
                            {if !empty($pgs.url)}
                                <td><a class="file" href="{$layoutParams.root}{strtolower($pgs.url)}">{$pgs.title} || {$layoutParams.configs.app_name}</a></td>
                                {else}
                                <td><a class="file" href="{$layoutParams.root}">{$pgs.title} || {$layoutParams.configs.app_name}</a></td>
                            {/if}
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        {/foreach}
        {/if}
    </tbody>
</table>
