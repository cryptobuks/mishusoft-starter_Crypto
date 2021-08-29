<?php

namespace Mishusoft\Utility;

class Compression
{
    /**
     * With this function You can compress Your PHP source code.
     *
     * @param  string $source
     * @return boolean|string
     */
    public static function php(string $source): bool|string
    {
        // Whitespaces left and right from this signs can be ignored.
        static $IW = [
            T_CONCAT_EQUAL, // .=
            T_DOUBLE_ARROW, // =>
            T_BOOLEAN_AND, // &&
            T_BOOLEAN_OR, // ||
            T_IS_EQUAL, // ==
            T_IS_NOT_EQUAL, // != or <>
            T_IS_SMALLER_OR_EQUAL, // <=
            T_IS_GREATER_OR_EQUAL, // >=
            T_INC, // ++
            T_DEC, // --
            T_PLUS_EQUAL, // +=
            T_MINUS_EQUAL, // -=
            T_MUL_EQUAL, // *=
            T_DIV_EQUAL, // /=
            T_IS_IDENTICAL, // ===
            T_IS_NOT_IDENTICAL, // !==
            T_DOUBLE_COLON, // ::
            T_PAAMAYIM_NEKUDOTAYIM, // ::
            T_OBJECT_OPERATOR, // ->
            T_DOLLAR_OPEN_CURLY_BRACES, // ${
            T_AND_EQUAL, // &=
            T_MOD_EQUAL, // %=
            T_XOR_EQUAL, // ^=
            T_OR_EQUAL, // |=
            T_SL, // <<
            T_SR, // >>
            T_SL_EQUAL, // <<=
            T_SR_EQUAL,// >>=
        ];
        if ((is_file($source) === true)
            && !$source = file_get_contents($source)) {
            return false;
        }//end if

        $tokens = token_get_all($source);

        $new = '';
        $c   = sizeof($tokens);
        $iw  = false;
        // ignore whitespace
        $ih = false;
        // in HEREDOC
        $ls = '';
        // last sign
        $ot = null;
        // open tag
        for ($i = 0; $i < $c; $i++) {
            $token = $tokens[$i];
            if (is_array($token) === true) {
                [
                    $tn,
                    $ts,
                ] = $token;
                // tokens: number, string, line
                // $tname = token_name($tn);
                if ($tn === T_INLINE_HTML) {
                    $new .= $ts;
                    $iw   = false;
                } elseif ($tn === T_OPEN_TAG) {
                    if (strpos($ts, ' ') === true || strpos($ts, "\n") === true
                        || strpos($ts, "\t") === true || strpos($ts, "\r") === true
                    ) {
                        $ts = rtrim($ts);
                    }

                    $ts  .= ' ';
                    $new .= $ts;
                    $ot   = T_OPEN_TAG;
                    $iw   = true;
                } elseif ($tn === T_OPEN_TAG_WITH_ECHO) {
                    $new .= $ts;
                    $ot   = T_OPEN_TAG_WITH_ECHO;
                    $iw   = true;
                } elseif ($tn === T_CLOSE_TAG) {
                    if ($ot === T_OPEN_TAG_WITH_ECHO) {
                        $new = rtrim($new, '; ');
                    } else {
                        $ts = ' '.$ts;
                    }

                    $new .= $ts;
                    $ot   = null;
                    $iw   = false;
                } elseif (in_array($tn, $IW, true) === true) {
                    $new .= $ts;
                    $iw   = true;
                } elseif ($tn === T_CONSTANT_ENCAPSED_STRING
                    || $tn === T_ENCAPSED_AND_WHITESPACE
                ) {
                    if ($ts[0] === '"') {
                        $ts = addcslashes($ts, "\n\t\r");
                    }

                    $new .= $ts;
                    $iw   = true;
                } elseif ($tn === T_WHITESPACE) {
                    if (array_key_exists(($i + 1), $tokens) === true) {
                        $nt = @$tokens[($i + 1)];
                        if (!$iw && (!is_string($nt) || $nt === '$') && !in_array($nt[0], $IW)) {
                            $new .= ' ';
                        }
                    }

                    $iw = false;
                } elseif ($tn === T_START_HEREDOC) {
                    $new .= "<<<S\n";
                    $iw   = false;
                    $ih   = true;
                    // in HEREDOC.
                } elseif ($tn === T_END_HEREDOC) {
                    $new .= 'S;';
                    $iw   = true;
                    $ih   = false;
                    // in HEREDOC.
                    for ($j = ($i + 1); $j < $c; $j++) {
                        if (is_string($tokens[$j]) === true && $tokens[$j] === ';') {
                            $i = $j;
                            break;
                        }

                        if ($tokens[$j][0] === T_CLOSE_TAG) {
                            break;
                        }
                    }
                } elseif ($tn === T_COMMENT || $tn === T_DOC_COMMENT) {
                    $iw = true;
                } else {
                    if (!$ih) {
                        $ts = $ts;
                        // $ts = strtolower($ts);
                    }

                    $new .= $ts;
                    $iw   = false;
                }//end if

                $ls = '';
            } else {
                if (($token !== ';' && $token !== ':') || $ls !== $token) {
                    $new .= $token;
                    $ls   = $token;
                }

                $iw = true;
            }//end if
        }//end for

        return $new;
    }//end php()
}