<?php
namespace Mishusoft\Storage\FileSystem\Dallgoot\Yaml\Tag;

use Mishusoft\Storage\FileSystem\Dallgoot\Yaml\NodeList;
use Mishusoft\Storage\FileSystem\Dallgoot\Yaml\Nodes;

/**
 * Provides mechanisms to handle tags
 * - registering tags and their handler methods
 * - returning transformed values according to Node type or NodeList
 *
 * Note: supports https://yaml.org/spec/1.2/spec.html#Schema
 *
 * @author  Stéphane Rebai <stephane.rebai@gmail.com>
 * @license Apache 2.0
 * @link    https://github.com/dallgoot/yaml
 */
class CoreSchema implements SchemaInterface
{
    public const SCHEMA_URI = 'tag:yaml.org,2002:';
    public const BUILDING_NAMESPACE = "\\";

    private const ERROR_SET = 'Error : tag '.self::class.":'set' can NOT be a single Node : must be a NodeList";
    private const ERROR_OMAP = 'Error : tag '.self::class.":'omap' MUST have Nodes\Item *with* a Nodes\Key";

    public function __call($name, $arguments)
    {
        if (array_key_exists($name, get_class_methods(self::class))) {
            return call_user_func_array([self::class, $name], $arguments);
        }

        throw new \UnexpectedValueException("ERROR: this tag '$name' is no recognised in Yaml tag Core schema, there's no way to handle it", 1);
    }


    /**
     * Specific handler for 'inline' tag
     *
     * @param object $node
     * @param object|array|null  $parent The parent
     *
     * @todo REMOVE ME : no traces found on yaml.org reference
     */
    // public function inline(object $node, &$parent = null)
    // {
    //     return $this->str($node, $parent);
    // }

    /**
     * Specific Handler for 'str' tag
     *
     * @param Nodes\Abstract\NodeGeneric|NodeList $node The Node or NodeList
     * @param object|array|null $parent The parent
     *
     * @return string the value of Node converted to string if needed
     */
    public function str(NodeList|Nodes\Abstract\NodeGeneric $node, object|array &$parent = null): string
    {
        if ($node instanceof Nodes\Abstract\NodeGeneric) {
            return trim($node->raw);
        }

        if ($node instanceof NodeList) {
            $list = [];
            foreach ($node as $key => $child) {
                $list[] = $this->str($child);
            }
            // return new Nodes\Scalar(implode('',$list), 0);
            return implode('', $list);
        }
    }

    /**
     * Specific Handler for 'binary' tag
     *
     * @param object $node The node or NodeList
     * @param Nodes\Abstract\NodeGeneric|null $parent The parent
     *
     * @return string  The value considered as 'binary' Note: the difference with strHandler is that multiline have not separation
     */
    public function binary(object $node, Nodes\Abstract\NodeGeneric &$parent = null): string
    {
        return $this->str($node, $parent);
    }

    /**
     * Specific Handler for the '!set' tag
     *
     * @param object $node    The node
     * @param object|array|null $parent The parent
     *
     * @return     array|object  process the Set, ie. an object construction with properties as serialized JSON values
     *@throws     \Exception  if theres a set but no children (set keys or set values)
     */
    public function set(object $node, object|array &$parent = null): array|object
    {
        if (!($node instanceof NodeList)) {
            throw new \LogicException(self::ERROR_SET);
        } else {
            $list = $parent ?? new \StdClass;
            $node->rewind();
            foreach ($node as $key => $item) {
                $this->omap($item, $list);
                $list->{$item->value->build()} = null;
            }
            if (!$parent) {
                return $list;
            }
        }
    }

    /**
     * Specific Handler for the 'omap' tag
     *
     * @param object $node   The node
     * @param object|array|null $parent The parent
     *
     * @return array|object process the omap
     *@throws \Exception  if theres an omap but no map items
     */
    public function omap(object $node, object|array &$parent = null): array|object
    {
        if ($node instanceof Nodes\Abstract\NodeGeneric) {
            if ($node instanceof Nodes\Item && $node->value instanceof Nodes\Key) {
                $key = $node->value;
                $keyName = $key->identifier;
                $keyValue = $key->value->build();
                if (is_null($parent)) {
                    return [$keyName => $keyValue];
                }

                $parent[$keyName] = $keyValue;
            } else {
                throw new \UnexpectedValueException(self::ERROR_OMAP);
            }
        } elseif ($node instanceof NodeList) {
            //verify that each child is an item with a key as child
            $list = $parent ?? [];
            $node->rewind();
            foreach ($node as $key => $item) {
                $this->omap($item, $list);
            }
            if (!$parent) {
                return $list;
            }
        }
    }
}
