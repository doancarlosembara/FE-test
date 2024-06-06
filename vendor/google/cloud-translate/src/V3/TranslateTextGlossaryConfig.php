<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/cloud/translate/v3/translation_service.proto

namespace Google\Cloud\Translate\V3;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Configures which glossary should be used for a specific target language,
 * and defines options for applying that glossary.
 *
 * Generated from protobuf message <code>google.cloud.translation.v3.TranslateTextGlossaryConfig</code>
 */
class TranslateTextGlossaryConfig extends \Google\Protobuf\Internal\Message
{
    /**
     * Required. The `glossary` to be applied for this translation.
     * The format depends on the glossary:
     * - User-provided custom glossary:
     *   `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`
     *
     * Generated from protobuf field <code>string glossary = 1 [(.google.api.field_behavior) = REQUIRED];</code>
     */
    private $glossary = '';
    /**
     * Optional. Indicates match is case insensitive. The default value is `false`
     * if missing.
     *
     * Generated from protobuf field <code>bool ignore_case = 2 [(.google.api.field_behavior) = OPTIONAL];</code>
     */
    private $ignore_case = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $glossary
     *           Required. The `glossary` to be applied for this translation.
     *           The format depends on the glossary:
     *           - User-provided custom glossary:
     *             `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`
     *     @type bool $ignore_case
     *           Optional. Indicates match is case insensitive. The default value is `false`
     *           if missing.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Cloud\Translate\V3\TranslationService::initOnce();
        parent::__construct($data);
    }

    /**
     * Required. The `glossary` to be applied for this translation.
     * The format depends on the glossary:
     * - User-provided custom glossary:
     *   `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`
     *
     * Generated from protobuf field <code>string glossary = 1 [(.google.api.field_behavior) = REQUIRED];</code>
     * @return string
     */
    public function getGlossary()
    {
        return $this->glossary;
    }

    /**
     * Required. The `glossary` to be applied for this translation.
     * The format depends on the glossary:
     * - User-provided custom glossary:
     *   `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`
     *
     * Generated from protobuf field <code>string glossary = 1 [(.google.api.field_behavior) = REQUIRED];</code>
     * @param string $var
     * @return $this
     */
    public function setGlossary($var)
    {
        GPBUtil::checkString($var, True);
        $this->glossary = $var;

        return $this;
    }

    /**
     * Optional. Indicates match is case insensitive. The default value is `false`
     * if missing.
     *
     * Generated from protobuf field <code>bool ignore_case = 2 [(.google.api.field_behavior) = OPTIONAL];</code>
     * @return bool
     */
    public function getIgnoreCase()
    {
        return $this->ignore_case;
    }

    /**
     * Optional. Indicates match is case insensitive. The default value is `false`
     * if missing.
     *
     * Generated from protobuf field <code>bool ignore_case = 2 [(.google.api.field_behavior) = OPTIONAL];</code>
     * @param bool $var
     * @return $this
     */
    public function setIgnoreCase($var)
    {
        GPBUtil::checkBool($var);
        $this->ignore_case = $var;

        return $this;
    }

}

