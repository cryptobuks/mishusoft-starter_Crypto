<?php

namespace Mishusoft\Storage\FileSystem\Dallgoot\Yaml\Nodes;

use Mishusoft\Storage\FileSystem\Dallgoot\Yaml\Nodes\Abstract\NodeGeneric;

/**
 *
 * @author  Stéphane Rebai <stephane.rebai@gmail.com>
 * @license Apache 2.0
 * @link    https://github.com/dallgoot/yaml
 */
class Comment extends NodeGeneric
{
    /**
     * @throws \Exception
     */
    public function specialProcess(NodeGeneric &$previous, array &$emptyLines):bool
    {
        $previous->getRoot()->add($this);
        return true;
    }

    /**
     * @throws \Exception
     */
    public function build(&$parent = null)
    {
        $root = $this->getRoot();
        $yamlObject = $root->getYamlObject();
        $yamlObject->addComment($this->line, $this->raw);
        return null;
    }
}
